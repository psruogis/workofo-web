import { defineMiddleware } from 'astro:middleware';
import { legacyPathRedirect } from './lib/paths';
import { translateSwedishHtml } from './lib/swedish/html';

/**
 * English is the default locale and must not use `/en/…` in public URLs.
 * Legacy industry slugs (`/retail-scheduling-software`, `/solutions/…`) 301 to `/industries/…`.
 */
export const onRequest = defineMiddleware(async (context, next) => {
  const { pathname } = context.url;
  const target = legacyPathRedirect(pathname);
  if (target != null && target !== pathname) {
    const url = new URL(context.url);
    url.pathname = target;
    return context.redirect(url.pathname + url.search, 301);
  }
  const response = await next();
  if (pathname.startsWith('/se/') && response.headers.get('content-type')?.includes('text/html') && response.status === 200) {
    const page = pathname.slice(4).replace(/\/$/, '') || 'home';
    const html = translateSwedishHtml(await response.text(), page === 'book-a-demo' ? 'get-in-touch' : page);
    const headers = new Headers(response.headers);
    headers.delete('content-length');
    headers.delete('etag');
    headers.set('content-language', 'sv');
    return new Response(html, { status: response.status, headers });
  }
  return response;
});
