const paths: Record<string, string> = {
  '/home': '/pradzia',
  '/product': '/produktas',
  '/about': '/apie-mus',
  '/jobs': '/karjera',
  '/jobs/java-engineer': '/karjera/java-programuotojas',
  '/jobs/lead-front-end-full-stack-developer': '/karjera/vyriausiasis-front-end-full-stack-programuotojas',
  '/contact': '/kontaktai',
  '/get-in-touch': '/uzsisakyti-demonstracija',
  '/blog': '/tinklarastis',
  '/blog/10-best-workforce-optimization-software-for-your-business': '/tinklarastis/10-geriausiu-darbo-jegos-optimizavimo-sistemu',
  '/blog/7-best-ways-to-improve-your-workforce-management': '/tinklarastis/7-budai-pagerinti-darbuotoju-valdyma',
  '/blog/contact-center-workforce-management-made-easy-tips-and-tricks': '/tinklarastis/kontaktu-centro-darbuotoju-valdymas',
  '/blog/how-workforce-management-solutions-can-reduce-costs': '/tinklarastis/kaip-sumazinti-darbo-sanaudas',
  '/blog/summer-vacation-challenges-to-workforce-management-be-prepared': '/tinklarastis/kaip-pasiruosti-vasaros-atostogoms',
  '/blog/technology-in-retail-how-ai-and-machine-learning-revolutionize-staffing': '/tinklarastis/di-ir-masininis-mokymasis-mazmenineje-prekyboje',
  '/blog/workforce-management-industry-trends-and-the-path-to-automated-planning-solutions': '/tinklarastis/darbo-jegos-valdymo-tendencijos-ir-automatizavimas',
  '/calculator': '/skaiciuokle',
  '/customers': '/klientai',
  '/privacy': '/privatumo-politika',
  '/cookie-policy': '/slapukai',
  '/system-requirements': '/sistemos-reikalavimai',
  '/industries/retail': '/sektoriai/mazmenine-prekyba',
  '/industries/aviation': '/sektoriai/aviacija',
  '/industries/contact-centre': '/sektoriai/kontaktu-centrai',
  '/industries/logistics': '/sektoriai/logistika',
  '/industries/restaurants': '/sektoriai/restoranai',
};
const internal = Object.fromEntries(Object.entries(paths).map(([key, value]) => [value, key]));
internal['/slapuku-politika'] = '/cookie-policy';

export function lithuanianInternalPath(path: string): string {
  return internal[path] ?? path.replace(/^\/tinklarastis\//, '/blog/');
}

export function lithuanianPublicPath(path: string): string {
  const [, raw, suffix] = path.match(/^([^?#]*)(.*)$/) ?? ['', path, ''];
  const key = lithuanianInternalPath(raw.replace(/\/$/, '') || '/')
    .replace(/^\/$/, '/home')
    .replace(/^\/about-us$/, '/about')
    .replace(/^\/book-a-demo$/, '/get-in-touch')
    .replace(/^\/privacy-policy$/, '/privacy')
    .replace(/^\/retail-scheduling-software$/, '/industries/retail')
    .replace(/^\/solutions\//, '/industries/');
  return (paths[key] ?? key.replace(/^\/blog\//, '/tinklarastis/')) + suffix;
}

export function lithuanianHref(href: string, origin?: string): string {
  if (href === '/lt' || href.startsWith('/lt/')) return '/lt' + lithuanianPublicPath(href.slice(3) || '/');
  if (origin && href.startsWith(origin + '/lt/')) return origin + lithuanianHref(href.slice(origin.length));
  return href;
}
