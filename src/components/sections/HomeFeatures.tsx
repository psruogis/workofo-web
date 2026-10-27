import ProductPanel from './ProductPanel';

/**
 * Homepage demand section — layout from home-demand-section-sketch.html.
 * Left: H2 + lede + numbered steps. Right: product panel v3 on soft #ececea mat.
 */

const STEPS = [
  {
    title: 'Forecast demand',
    body: 'See when and where your team is needed.',
  },
  {
    title: 'Apply labour rules',
    body: 'Bring contracts, skills and availability into the plan.',
  },
  {
    title: 'Optimise schedules',
    body: 'Build schedules around demand automatically.',
  },
  {
    title: 'Adapt to change',
    body: 'Re-optimise when demand or availability shifts.',
  },
] as const;

export default function HomeFeatures() {
  return (
    <section id="home-features" className="home-features" aria-labelledby="home-features-heading">
      <div className="home-features__inner">
        <div className="home-features__layout">
          <div className="home-features__copy">
            <header className="home-features__intro" data-reveal>
              <h2 id="home-features-heading" data-split>
                Employee scheduling that starts with demand, not last week's template.
              </h2>
              <p className="lede home-features__lede">
                Workofo combines demand forecasting, labour rules and automated employee scheduling to put
                time and skills where customers need them.
              </p>
            </header>

            <ol className="home-features__steps" data-reveal>
              {STEPS.map((step, i) => (
                <li key={step.title} className="home-features__step">
                  <h3 className="home-features__step-title">
                    <span className="home-features__step-num">{String(i + 1).padStart(2, '0')}</span>
                    {step.title}
                  </h3>
                  <p className="home-features__step-body">{step.body}</p>
                </li>
              ))}
            </ol>
          </div>

          <figure
            className="home-features__visual"
            data-reveal
            aria-label="Workofo product overview: Nora the AI assistant finds cover for a shift, the workload coverage chart shows the schedule following demand, and a recommendation suggests shortening a staffing rule."
          >
            <ProductPanel />
          </figure>
        </div>
      </div>
    </section>
  );
}
