import NoraChat from './NoraChat';

type Props = {
  demoHref?: string;
};

export default function HomeFeatureAnnounce({ demoHref = '/get-in-touch' }: Props) {
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
          <h2 id="home-announce-heading" data-split>
            Meet Nora. Talk through your next scheduling change.
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
