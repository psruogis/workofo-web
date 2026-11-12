import { defineMiddleware } from 'astro:middleware';
import { legacyPathRedirect } from './lib/paths';
import { translateLocalizedHtml } from './lib/swedish/html';
import { swedishInternalPath, swedishPublicPath } from './lib/swedish/paths';
import { lithuanianInternalPath, lithuanianPublicPath } from './lib/lithuanian/paths';

/**
 * English is the default locale and must not use `/en/…` in public URLs.
 * Legacy industry slugs (`/retail-scheduling-software`, `/solutions/…`) 301 to `/industries/…`.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const locale = pathname.match(/^\/(se|lt)(?:\/|$)/)?.[1];
  if (locale === 'se' || locale === 'lt') {
    const publicSlug = locale === 'lt' ? lithuanianPublicPath : swedishPublicPath;
    const internalSlug = locale === 'lt' ? lithuanianInternalPath : swedishInternalPath;
    const publicPath = `/${locale}${publicSlug(pathname.slice(3) || '/')}`;
    if (publicPath !== pathname) return context.redirect(publicPath + context.url.search, 301);
    const internal = internalSlug(pathname.slice(3));
    const internalUrl = new URL(context.url);
    internalUrl.pathname = `/${locale}${internal}`;
    const response = await next(internalUrl.pathname !== pathname ? internalUrl : undefined);
    if (!response.headers.get('content-type')?.includes('text/html') || response.status !== 200) return response;
    const page = internal.slice(1) || 'home';
    const html = translateLocalizedHtml(await response.text(), page === 'book-a-demo' ? 'get-in-touch' : page, context.url.origin, locale);
    const headers = new Headers(response.headers);
    headers.delete('content-length');
    headers.delete('etag');
    headers.set('content-language', locale === 'se' ? 'sv' : 'lt');
    return new Response(html, { status: response.status, headers });
  }
  const target = legacyPathRedirect(pathname);
  if (target != null && target !== pathname) {
    const url = new URL(context.url);
    url.pathname = target;
    return context.redirect(url.pathname + url.search, 301);
  }
  return next();
});
