export const policyPages = {
  privacy: {
    en: 'Privacy policy',
    se: 'Integritetspolicy',
    lt: 'Privatumo politika',
    source: 'https://www-workofo-com.filesusr.com/html/1e5e89_93b40bc7dd2e368194d0147cdd90577c.html',
  },
  'cookie-policy': {
    en: 'Cookie policy',
    se: 'Cookiepolicy',
    lt: 'Slapukų politika',
    source: 'https://support.wix.com/en/article/cookies-and-your-wix-site',
  },
  'system-requirements': {
    en: 'System requirements',
    se: 'Systemkrav',
    lt: 'Sistemos reikalavimai',
    source: 'https://www-workofo-com.filesusr.com/html/1e5e89_a07fc2a0d7b0a0034ca09b7a741cb624.html',
  },
} as const;

export type PolicyPageKey = keyof typeof policyPages;

export function isPolicyPage(slug: string | undefined): slug is PolicyPageKey {
  return !!slug && Object.hasOwn(policyPages, slug);
}
