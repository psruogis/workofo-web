import { withSwedish } from '../../lib/swedish/react';
import NoraChat from './NoraChat';
import type { Locale } from '../../lib/locales';

type Props = {
  demoHref?: string;
  locale?: Locale;
};

export default function HomeFeatureAnnounce({ demoHref = '/get-in-touch', locale = 'en' }: Props) {
  return (
    <section
      id="ai-scheduling-assistant"
      className="home-announce"
      aria-labelledby="home-announce-heading"
    >
      <div className="home-announce__inner">
        <div className="home-announce__copy" data-reveal>
          <div className="home-announce__kicker">
            <p className="t-overline home-announce__eyebrow">AI scheduling assistant</p>
            <span className="home-announce__badge">New</span>
          </div>
          <h2 id="home-announce-heading" data-split={locale === 'se' ? undefined : true}>
            {locale === 'se' ? <><span className="home-announce__line" data-split>Hej Nora.</span>{' '}<span className="home-announce__line" data-split>Vi måste fixa några grejer.</span></> : 'Meet Nora. Talk through your next scheduling change.'}
          </h2>
          <p className="lede home-announce__lede">
            Someone calls in sick. Demand changes. Tell Nora, Workofo&apos;s AI scheduling assistant, to add a
            shift, change staffing levels, move employees or update constraints. Workofo applies the changes; you
            decide what gets published.
          </p>
          <div className="home-announce__actions">
            <a className="btn btn--primary" href={demoHref}>
              Book a demo
            </a>
          </div>
        </div>

        <figure className="home-announce__panel" data-reveal aria-label="Nora AI assistant chat preview">
          <NoraChat />
        </figure>
      </div>
    </section>
  );
}

export const SwedishHomeFeatureAnnounce = withSwedish(HomeFeatureAnnounce, 'home');
