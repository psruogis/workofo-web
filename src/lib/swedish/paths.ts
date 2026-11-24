/** Public Swedish slugs; CMS keys and English URLs remain unchanged. */
const pagePaths: Record<string, string> = {
  '/home': '/startsida',
  '/product': '/produkt',
  '/about': '/om-oss',
  '/jobs': '/jobb',
  '/contact': '/kontakt',
  '/get-in-touch': '/boka-demo',
  '/blog': '/blogg',
  '/calculator': '/kalkylator',
  '/customers': '/kunder',
  '/privacy': '/integritetspolicy',
  '/cookie-policy': '/cookies',
  '/system-requirements': '/systemkrav',
  '/industries/retail': '/branscher/handel',
  '/industries/contact-centre': '/branscher/kontaktcenter',
  '/industries/aviation': '/branscher/flygplatser',
  '/industries/logistics': '/branscher/logistik',
  '/industries/restaurants': '/branscher/restauranger',
  '/jobs/java-engineer': '/jobb/javautvecklare',
  '/jobs/lead-front-end-full-stack-developer': '/jobb/ledande-frontend-fullstack-utvecklare',
  '/blog/10-best-workforce-optimization-software-for-your-business': '/blogg/10-basta-systemen-for-bemanningsoptimering',
  '/blog/7-best-ways-to-improve-your-workforce-management': '/blogg/7-satt-att-forbattra-bemanningsplaneringen',
  '/blog/contact-center-workforce-management-made-easy-tips-and-tricks': '/blogg/enklare-bemanningsplanering-for-kontaktcenter',
  '/blog/how-workforce-management-solutions-can-reduce-costs': '/blogg/sa-minskar-bemanningsplanering-kostnaderna',
  '/blog/summer-vacation-challenges-to-workforce-management-be-prepared': '/blogg/forbered-bemanningen-infor-sommarsemestern',
  '/blog/technology-in-retail-how-ai-and-machine-learning-revolutionize-staffing': '/blogg/ai-och-maskininlarning-forandrar-bemanningen-i-handeln',
  '/blog/workforce-management-industry-trends-and-the-path-to-automated-planning-solutions': '/blogg/branschtrender-och-vagen-till-automatisk-bemanningsplanering',
};
const internalPaths = Object.fromEntries(Object.entries(pagePaths).map(([internal, publicPath]) => [publicPath, internal]));
internalPaths['/cookiepolicy'] = '/cookie-policy';

function mapPath(path: string, mapping: Record<string, string>): string {
  const suffixIndex = path.search(/[?#]/);
  const suffix = suffixIndex < 0 ? '' : path.slice(suffixIndex);
  const pathname = (suffixIndex < 0 ? path : path.slice(0, suffixIndex)).replace(/\/$/, '') || '/';
  if (mapping[pathname]) return mapping[pathname] + suffix;
  // Also support new CMS posts until their individual Swedish slug is added.
  for (const [from, to] of Object.entries(mapping)) {
    if ((from === '/blog' || from === '/jobs' || from === '/blogg' || from === '/jobb') && pathname.startsWith(from + '/')) return to + pathname.slice(from.length) + suffix;
  }
  return pathname + suffix;
}

export function swedishPublicPath(path: string): string {
  const internal = swedishInternalPath(path);
  const alias = internal.replace(/^(\/|\/about-us|\/book-a-demo)(?=[?#]|$)/, (value) => value === '/' ? '/home' : value === '/about-us' ? '/about' : '/get-in-touch');
  const industryAlias = alias.replace(/^\/solutions\//, '/industries/').replace(/^\/retail-scheduling-software$/, '/industries/retail');
  return mapPath(industryAlias, pagePaths);
}

export function swedishInternalPath(path: string): string {
  return mapPath(path, internalPaths);
}

/** Local links only. Never changes URLs to another website. */
export function swedishHref(href: string, origin?: string): string {
  if (href === '/se' || href.startsWith('/se/')) return '/se' + swedishPublicPath(href.slice(3) || '/');
  if (origin && /^https?:\/\//.test(href)) {
    const url = new URL(href);
    if (url.host === new URL(origin).host && url.pathname.startsWith('/se/')) return url.origin + swedishHref(url.pathname + url.search + url.hash);
  }
  return href;
}
