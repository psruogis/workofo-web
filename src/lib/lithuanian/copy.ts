import catalog from './copy.json';

export const lithuanianCopy: Record<string, string> = catalog;

export function lithuanianText(value: string): string {
  const key = value.replace(/\s+/g, ' ').trim();
  if (!Object.hasOwn(lithuanianCopy, key)) return value;
  return (value.match(/^\s*/)?.[0] ?? '') + lithuanianCopy[key] + (value.match(/\s*$/)?.[0] ?? '');
}

export function lithuanianArtboard(markup: string): string {
  const template = document.createElement('template');
  template.innerHTML = markup;
  const nodes = document.createTreeWalker(template.content, NodeFilter.SHOW_TEXT);
  while (nodes.nextNode()) {
    const node = nodes.currentNode;
    if (!node.parentElement?.closest('script,style')) {
      node.nodeValue = lithuanianText(node.nodeValue ?? '');
    }
  }
  for (const element of template.content.querySelectorAll('[aria-label], [title]')) {
    for (const attribute of ['aria-label', 'title']) {
      const value = element.getAttribute(attribute);
      if (value) element.setAttribute(attribute, lithuanianText(value));
    }
  }
  return template.innerHTML;
}
