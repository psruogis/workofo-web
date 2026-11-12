import pages from './pages.json';
import common from './common.json';
import { lithuanianCopy } from '../lithuanian/copy';
export const normalizeCopy = (value: string) => value.replace(/\s+/g, ' ').trim();
export function swedishCopy(page: string): Record<string, string> {
  const entry = (pages as Record<string, { copy: Record<string, string> }>)[page.startsWith('jobs/') ? 'jobs' : page];
  return { ...common, ...entry?.copy };
}
export function translateCopy(value: string, copy: Record<string, string>): string {
  const translated = copy[normalizeCopy(value)];
  if (translated == null) {
    const edit = value.match(/^Edit (Number of shift employees|Average hours \/ week|Average hourly cost), currently (.+)$/);
    if (edit) return `Ändra ${translateCopy(edit[1],copy).toLowerCase()}, nuvarande värde ${edit[2]}`;
    const positions = value.match(/^(\d+) open positions?$/);
    if (positions) return `${positions[1]} ${positions[1] === '1' ? 'ledig tjänst' : 'lediga tjänster'}`;
    return value;
  }
  return (value.match(/^\s*/)?.[0] ?? '') + translated + (value.match(/\s*$/)?.[0] ?? '');
}
export function swedishPageTitle(page: string): string | undefined {
  return (pages as Record<string, { title?: string }>)[page]?.title;
}
export function swedishPageDescription(page: string): string | undefined {
  return (pages as Record<string, { description?: string }>)[page]?.description;
}

/** Preserve Wix rich-content node IDs, decorations, links and image data. */
export function translateSwedishRichContent(content: unknown, locale: 'se' | 'lt' = 'se'): unknown {
  const copy = locale === 'lt' ? lithuanianCopy : swedishCopy('blog');
  function visit(value: any): any {
    if (Array.isArray(value)) return value.map(visit);
    if (value && typeof value === 'object') {
      const result = Object.fromEntries(Object.entries(value).map(([key, v]) => [key, visit(v)]));
      if (value.textData?.text) result.textData = { ...value.textData, text: translateCopy(value.textData.text, copy) };
      return result;
    }
    return value;
  }
  return visit(content);
}
