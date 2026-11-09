import React, { Children, cloneElement, isValidElement } from 'react';
import { normalizeCopy, swedishCopy, translateCopy } from './copy';
import { swedishHref } from './paths';

/** Translate the existing component tree on both server and client. No DOM wrappers,
 * style changes or post-hydration text replacement. Cached component identities
 * preserve hook state when animations, forms and calculators rerender. */
export function withSwedish(Component: React.ComponentType<any>, page: string) {
  const copy = swedishCopy(page);
  const wrapped = new WeakMap<Function, React.ComponentType<any>>();
  function localized(Type: Function): React.ComponentType<any> {
    let result = wrapped.get(Type);
    if (!result) {
      result = function SwedishComponent(props: any) { return walk(Type({ ...props, locale: 'se' })); };
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
    if (typeof props.href === 'string') next.href = swedishHref(props.href);
    const whole = copy[normalizeCopy(text(props.children))];
    // Whole-copy entries preserve sentence flow; decorative numbers/icons remain
    // separate because only simple text blocks qualify here.
    const simple = Children.toArray(props.children).every(c => typeof c === 'string' || typeof c === 'number');
    next.children = whole && simple ? whole : Children.map(props.children, walk);
    return cloneElement(node, next);
  }
  return function Localized(props: any) {
    if (props.locale !== 'se') return React.createElement(Component, props);
    return React.createElement(localized(Component), props);
  };
}
