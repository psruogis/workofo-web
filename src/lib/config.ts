/**
 * Public runtime config.
 * PUBLIC_WIX_DEMO_FORM_ID — Wix Forms schema id for "Book a Demo".
 * Override via .env.local or `wix env set --key=PUBLIC_WIX_DEMO_FORM_ID --value=<id>`.
 */
export const DEMO_FORM_ID =
  (typeof import.meta !== 'undefined' &&
    (import.meta as ImportMeta & { env?: Record<string, string> }).env?.PUBLIC_WIX_DEMO_FORM_ID) ||
  '6486f3c4-153f-4704-9180-82dc3572dc2f';

export const SITE_NAME = 'Workofo';

export const APP_STORE_URL = 'https://apps.apple.com/se/app/workofo-employee-schedules/id1567197620';
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.workofo.mobile&hl=sv';

/** Product app login (opens in a new tab). */
export const LOGIN_URL = 'https://app.workofo.com/login';

/**
 * Hero “Watch a video” target.
 * Matches current workofo.com overview CTA until a dedicated video URL is set.
 */
export const WATCH_VIDEO_URL = 'https://www.workofo.com/industries';
