import { items } from '@wix/data';
import type { Locale } from './locales';
import { DEFAULT_LOCALE } from './locales';
import { richToHtml } from './rich';

export const JOBS = 'Jobs';

export type CmsJob = {
  _id: string;
  title?: string;
  slug?: string;
  location?: string;
  /** Team / department tag, e.g. Engineering */
  department?: string;
  /** Employment type tag, e.g. Hybrid / Remote / On-site */
  employmentType?: string;
  /** Short card blurb on the Open roles board */
  summary?: string;
  description?: unknown;
  applyUrl?: string;
  applyEmail?: string;
  sortOrder?: number;
  published?: boolean;
  language?: string;
};

export type JobListResult =
  | { status: 'ok'; jobs: CmsJob[] }
  | { status: 'missing_collection'; message: string; detail?: string }
  | { status: 'query_failed'; message: string; detail?: string };

function isMissingCollection(err: unknown): boolean {
  const msg = String((err as Error)?.message ?? err ?? '');
  return /WDE0027|collection.*(not found|does not exist)|does not exist/i.test(msg);
}

function isPublished(job: CmsJob): boolean {
  return job.published === true || job.published === ('true' as unknown as boolean);
}

/** Resolve apply href: applyUrl wins; else mailto from applyEmail. */
export function jobApplyHref(job: CmsJob): string | null {
  const url = (job.applyUrl || '').trim();
  if (url) return url;
  const email = (job.applyEmail || '').trim();
  if (email) return `mailto:${email}`;
  return null;
}

export function jobDescriptionHtml(job: CmsJob): string {
  return richToHtml(job.description);
}

export function jobCardSummary(job: CmsJob): string {
  const summary = (job.summary || '').trim();
  if (summary) return summary;
  const html = jobDescriptionHtml(job);
  return html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

export function jobTags(job: CmsJob): string[] {
  return [job.department, job.location, job.employmentType].filter(
    (v): v is string => Boolean(v && String(v).trim()),
  );
}

/**
 * Published jobs for a locale (ascending sortOrder).
 * Falls back to default-locale (EN) jobs when the locale has none.
 */
export async function listPublishedJobs(locale: Locale = DEFAULT_LOCALE): Promise<JobListResult> {
  try {
    const result = await items
      .query(JOBS)
      .eq('published', true)
      .eq('language', locale)
      .ascending('sortOrder')
      .limit(100)
      .find();
    let jobs = ((result.items ?? []) as CmsJob[]).filter(isPublished);

    if (jobs.length === 0 && locale !== DEFAULT_LOCALE) {
      const fallback = await items
        .query(JOBS)
        .eq('published', true)
        .eq('language', DEFAULT_LOCALE)
        .ascending('sortOrder')
        .limit(100)
        .find();
      jobs = ((fallback.items ?? []) as CmsJob[]).filter(isPublished);
    }

    return { status: 'ok', jobs };
  } catch (err) {
    if (isMissingCollection(err)) {
      return {
        status: 'missing_collection',
        message: `CMS collection "${JOBS}" is missing. Run node scripts/ensure-jobs-collection.mjs.`,
        detail: String((err as Error)?.message ?? err),
      };
    }
    return {
      status: 'query_failed',
      message: `Failed to query ${JOBS}. Check fields and permissions (read: Anyone).`,
      detail: String((err as Error)?.message ?? err),
    };
  }
}

export async function getPublishedJobBySlug(
  slug: string,
  locale: Locale = DEFAULT_LOCALE,
): Promise<{ job: CmsJob | null; error?: string }> {
  try {
    const result = await items
      .query(JOBS)
      .eq('slug', slug)
      .eq('published', true)
      .eq('language', locale)
      .limit(1)
      .find();
    let job = ((result.items ?? []) as CmsJob[]).find(isPublished) ?? null;

    if (!job && locale !== DEFAULT_LOCALE) {
      const fallback = await items
        .query(JOBS)
        .eq('slug', slug)
        .eq('published', true)
        .eq('language', DEFAULT_LOCALE)
        .limit(1)
        .find();
      job = ((fallback.items ?? []) as CmsJob[]).find(isPublished) ?? null;
    }

    return { job };
  } catch (err) {
    return {
      job: null,
      error: `Failed to load job “${slug}”: ${String((err as Error)?.message ?? err)}`,
    };
  }
}
