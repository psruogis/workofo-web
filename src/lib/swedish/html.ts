import * as parse5 from 'parse5';
import { normalizeCopy, swedishCopy, swedishPageTitle, swedishPageDescription, translateCopy } from './copy';
import { swedishHref } from './paths';
import { lithuanianHref } from '../lithuanian/paths';
import { lithuanianCopy } from '../lithuanian/copy';

/** Source-location edits keep scripts, CSS, assets and markup byte-for-byte intact. */
export function translateLocalizedHtml(html: string, page: string, origin: string, locale: 'se' | 'lt'): string {
  // Invalid NULs can be hidden by browser parsing while remaining in raw HTML.
  // Remove them before calculating source offsets so subsequent edits stay aligned.
  html = html.replace(/\u0000/g, '');
  const copy = locale === 'lt' ? lithuanianCopy : swedishCopy(page);
  const localHref = locale === 'lt' ? lithuanianHref : swedishHref;
  const title = locale === 'se' ? swedishPageTitle(page) : undefined;
  const description = locale === 'se' ? swedishPageDescription(page) : undefined;
  const doc: any = parse5.parse(html, { sourceCodeLocationInfo: true });
  const edits: { start: number; end: number; value: string }[] = [];
  const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const ignored = new Set(locale === 'lt' ? ['script', 'style'] : ['script', 'style', 'svg']);
  const content = (n: any): string => n.nodeName === '#text' ? n.value : ignored.has(n.tagName) ? '' : (n.childNodes ?? []).map(content).join('');
  function visit(n: any) {
    if (n.tagName === 'script' && n.attrs?.some((a: any) => a.name === 'type' && a.value === 'application/ld+json')) {
      const loc = n.sourceCodeLocation;
      try {
        const data = JSON.parse(content({ childNodes: n.childNodes }));
        const translate = (v: any): any => typeof v === 'string' ? localHref(translateCopy(v, copy), origin) : Array.isArray(v) ? v.map(translate) : v && typeof v === 'object' ? Object.fromEntries(Object.entries(v).map(([k,x]) => [k,translate(x)])) : v;
        if (loc?.startTag && loc?.endTag) edits.push({start:loc.startTag.endOffset,end:loc.endTag.startOffset,value:JSON.stringify(translate(data)).replace(/</g,'\\u003c')});
      } catch { /* Leave third-party structured data intact if it is not JSON. */ }
      return;
    }
    if (ignored.has(n.tagName)) return;
    const loc = n.sourceCodeLocation;
    if (n.tagName === 'title' && loc?.startTag && loc?.endTag && title) {
      edits.push({ start: loc.startTag.endOffset, end: loc.endTag.startOffset, value: escape(title) }); return;
    }
    for (const attr of n.attrs ?? []) {
      if (['alt', 'title', 'aria-label', 'placeholder', 'content', 'href', 'action'].includes(attr.name)) {
        const isDescription = n.tagName === 'meta' && n.attrs.some((a: any) => a.name === 'name' && a.value === 'description') && attr.name === 'content';
        const value = localHref(isDescription ? description ?? translateCopy(attr.value, copy) : translateCopy(attr.value, copy), origin);
        const al = loc?.attrs?.[attr.name];
        if (value !== attr.value && al) edits.push({ start: al.startOffset, end: al.endOffset, value: `${attr.name}="${escape(value)}"` });
      }
    }
    const translated = copy[normalizeCopy(content(n))];
    if (translated != null && loc?.startTag && loc?.endTag && ['h1', 'h2', 'h3', 'p', 'summary', 'li', 'dt', 'dd'].includes(n.tagName)) {
      const special = (n.childNodes ?? []).some((c: any) => c.tagName && !['a', 'br', 'strong', 'em'].includes(c.tagName));
      const inlineLinks = (n.childNodes ?? []).filter((c: any) => c.tagName === 'a');
      const preserveLinks = locale === 'se' || inlineLinks.every((a: any) => translated.includes(translateCopy(content(a), copy).trim()));
      if (!special && preserveLinks) {
        // Keep existing inline link destinations, placing translated link labels
        // back into the translated sentence where the supplied wording uses them.
        let value = escape(translated);
        for (const a of inlineLinks) {
          const label = translateCopy(content(a), copy).trim();
          const href = a.attrs.find((x: any) => x.name === 'href')?.value;
        if (href && label && translated.includes(label)) value = value.replace(escape(label), `<a href="${escape(localHref(href, origin))}">${escape(label)}</a>`);
        }
        edits.push({ start: loc.startTag.endOffset, end: loc.endTag.startOffset, value }); return;
      }
    }
    if (n.nodeName === '#text' && loc) {
      const value = translateCopy(n.value, copy);
      if (value !== n.value) edits.push({ start: loc.startOffset, end: loc.endOffset, value: escape(value) });
    }
    (n.childNodes ?? []).forEach(visit);
  }
  visit(doc);
  if (description && !/<meta\b[^>]*name=["']description["']/i.test(html)) {
    const headEnd = html.indexOf('</head>');
    if (headEnd >= 0) edits.push({ start: headEnd, end: headEnd, value: `<meta name="description" content="${escape(description)}">` });
  }
  return edits.sort((a,b) => b.start - a.start).reduce((out,e) => out.slice(0,e.start)+e.value+out.slice(e.end),html);
}
