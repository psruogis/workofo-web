import React, { Children, cloneElement, isValidElement } from 'react';
import { normalizeCopy, swedishCopy, translateCopy } from './copy';
import { swedishHref } from './paths';
import { lithuanianHref } from '../lithuanian/paths';
import { lithuanianCopy } from '../lithuanian/copy';

/** Translate the existing component tree on both server and client. No DOM wrappers,
 * style changes or post-hydration text replacement. Cached component identities
 * preserve hook state when animations, forms and calculators rerender. */
function createLocalized(Component: React.ComponentType<any>, page: string, locale: 'se' | 'lt') {
  const copy = locale === 'lt' ? lithuanianCopy : swedishCopy(page);
  const localHref = locale === 'lt' ? lithuanianHref : swedishHref;
  const wrapped = new WeakMap<Function, React.ComponentType<any>>();
  function localized(Type: Function): React.ComponentType<any> {
    let result = wrapped.get(Type);
    if (!result) {
      result = function LocalizedComponent(props: any) { return walk(Type({ ...props, locale })); };
      wrapped.set(Type, result);
    }
    return result;
  }
  const text = (v: any): string => typeof v === 'string' ? v : typeof v === 'number' ? String(v) : Array.isArray(v) ? v.map(text).join('') : isValidElement(v) ? text((v.props as any).children) : '';
  function walk(node: any): any {
    if (typeof node === 'string') return translateCopy(node, copy);
    if (Array.isArray(node)) return node.map(walk);
    if (!isValidElement(node)) return node;
    const props = node.props as any;
    if (typeof node.type === 'function') return React.createElement(localized(node.type), { ...props, key: node.key });
    const next: any = {};
    for (const key of ['alt', 'title', 'aria-label', 'placeholder']) if (typeof props[key] === 'string') next[key] = translateCopy(props[key], copy);
    if (typeof props.href === 'string') next.href = localHref(props.href);
    const whole = copy[normalizeCopy(text(props.children))];
    // Whole-copy entries preserve sentence flow; decorative numbers/icons remain
    // separate because only simple text blocks qualify here.
    const simple = Children.toArray(props.children).every(c => typeof c === 'string' || typeof c === 'number');
    next.children = whole && simple ? whole : Children.map(props.children, walk);
    return cloneElement(node, next);
  }
  return localized(Component);
}

export function withSwedish(Component: React.ComponentType<any>, page: string) {
  const swedish = createLocalized(Component, page, 'se');
  const lithuanian = createLocalized(Component, page, 'lt');
  return function Localized(props: any) {
    const LocalizedComponent = props.locale === 'se' ? swedish : props.locale === 'lt' ? lithuanian : Component;
    return React.createElement(LocalizedComponent, props);
  };
}
