export const policyPages = {
  privacy: {
    en: 'Privacy and cookie policy',
    se: 'Integritets- och cookiepolicy',
    source: 'https://www-workofo-com.filesusr.com/html/1e5e89_93b40bc7dd2e368194d0147cdd90577c.html',
  },
  'ai-transparency': {
    en: 'AI transparency',
    se: 'AI-transparens',
    source: 'https://www-workofo-com.filesusr.com/html/1e5e89_416acce6b9b8b3822099ee3c02107c44.html',
  },
  'system-requirements': {
    en: 'System requirements',
    se: 'Systemkrav',
    source: 'https://www-workofo-com.filesusr.com/html/1e5e89_a07fc2a0d7b0a0034ca09b7a741cb624.html',
  },
  terms: {
    en: 'General terms and conditions',
    se: 'Allmänna villkor',
    source: '/documents/workofo-general-terms-2023-12-01.pdf',
  },
} as const;

export type PolicyPageKey = keyof typeof policyPages;

export function isPolicyPage(slug: string | undefined): slug is PolicyPageKey {
  return !!slug && Object.hasOwn(policyPages, slug);
}
