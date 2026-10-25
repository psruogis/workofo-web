import { useCallback, useEffect, useRef, useState } from 'react';

import { industryPath, localePath } from '../../lib/paths';
import type { Locale } from '../../lib/locales';
import type { IndustrySlug } from '../../lib/solutions';

type LocaleProps = { locale?: Locale };

const INDUSTRIES = [
  {
    name: 'Retail',
    slug: 'retail',
    image: '/industries/retail.jpg',
    body: 'Match labor to demand across stores, departments and fulfillment.',
  },
  {
    name: 'Contact Centre',
    slug: 'contact-centre',
    image: '/industries/contact-centre-hero.jpg',
    body: 'Match agents to demand, skills and service targets across every queue.',
  },
  {
    name: 'Aviation',
    slug: 'aviation',
    image: '/industries/aviation-hero.jpg',
    body: 'Plan ramp, check-in, security and baggage teams around every flight wave.',
  },
  {
    name: 'Logistics',
    slug: 'logistics',
    image: '/industries/logistics-hero.jpg',
    body: 'Forecast pallets, orders and shipments across every zone and shift.',
  },
  {
    name: 'Restaurants',
    slug: 'restaurants',
    image: '/industries/restaurants-hero.webp',
    body: 'Staff kitchen, bar and floor teams around every rush.',
  },
] as const;

export function HomeIndustries({ locale = 'en' }: LocaleProps) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const syncActive = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = [...track.querySelectorAll<HTMLElement>('.home-industries__slide')];
    if (!slides.length) return;
    const left = track.scrollLeft;
    let best = 0;
    let bestDist = Infinity;
    slides.forEach((slide, i) => {
      const dist = Math.abs(slide.offsetLeft - left);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    syncActive();
    track.addEventListener('scroll', syncActive, { passive: true });
    window.addEventListener('resize', syncActive);
    return () => {
      track.removeEventListener('scroll', syncActive);
      window.removeEventListener('resize', syncActive);
    };
  }, [syncActive]);

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slide = track.querySelectorAll<HTMLElement>('.home-industries__slide')[index];
    if (!slide) return;
    track.scrollTo({ left: slide.offsetLeft, behavior: 'smooth' });
  };

  const step = (dir: -1 | 1) => {
    scrollToIndex(Math.min(INDUSTRIES.length - 1, Math.max(0, active + dir)));
  };

  return (
    <section id="industries" className="home-industries" aria-labelledby="home-industries-heading">
      <div className="home-journey__inner">
        <header className="home-journey__intro" data-reveal>
          <div>
            <h2 id="home-industries-heading" data-split>
              AI employee scheduling for the rhythm of your business.
            </h2>
          </div>
          <p className="lede home-journey__lede">
            A busy shop floor. A kitchen before the lunch rush. Workofo is workforce scheduling software that
            matches time and skills to changing demand, creating room for better service and a more manageable
            working day.
          </p>
        </header>

        <div className="home-industries__carousel" data-reveal>
          <ul
            ref={trackRef}
            className="home-industries__track"
            aria-label="Industry solutions"
          >
            {INDUSTRIES.map((industry) => (
              <li key={industry.slug} className="home-industries__slide">
                <a
                  className="home-industries__card"
                  href={industryPath(locale, industry.slug as IndustrySlug)}
                >
                  <img
                    className="home-industries__photo"
                    src={industry.image}
                    alt=""
                    width={640}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    draggable={false}
                  />
                  <span className="home-industries__shade" aria-hidden="true" />
                  <span className="home-industries__card-copy">
                    <span className="home-industries__name">{industry.name}</span>
                    <span className="home-industries__body">{industry.body}</span>
                    <span className="home-industries__cta">
                      See how it works
                      <svg width="14" height="14" viewBox="0 0 14 14" focusable="false" aria-hidden="true">
                        <path
                          d="M3 7h8M8 3.5 11.5 7 8 10.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="home-industries__controls">
            <div className="home-industries__arrows">
              <button
                type="button"
                className="home-industries__arrow"
                aria-label="Previous industry"
                disabled={active <= 0}
                onClick={() => step(-1)}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" focusable="false" aria-hidden="true">
                  <path
                    d="M11.5 4.5 7 9l4.5 4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="home-industries__arrow"
                aria-label="Next industry"
                disabled={active >= INDUSTRIES.length - 1}
                onClick={() => step(1)}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" focusable="false" aria-hidden="true">
                  <path
                    d="M6.5 4.5 11 9l-4.5 4.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="home-industries__dots" role="tablist" aria-label="Industry slides">
              {INDUSTRIES.map((industry, i) => (
                <button
                  key={industry.slug}
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  aria-label={`Show ${industry.name}`}
                  className={`home-industries__dot${i === active ? ' is-active' : ''}`}
                  onClick={() => scrollToIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const OUTCOMES = [
  {
    title: 'Better coverage during peak workload',
    body: 'Staff critical periods properly without increasing headcount.',
  },
  {
    title: 'Higher productivity per employee hour',
    body: 'More people on value-adding tasks, fewer idle or mismatched hours.',
  },
  {
    title: 'Less chaos for managers',
    body: 'Faster planning, fewer last-minute changes and schedules teams can trust.',
  },
] as const;

export function HomeProof() {
  return (
    <section className="home-proof" aria-labelledby="home-proof-heading">
      <div className="home-journey__inner">
        <header className="home-journey__intro" data-reveal>
          <div>
            <p className="t-overline home-journey__eyebrow">Customer proof</p>
            <h2 id="home-proof-heading" data-split>
              Running daily operations, not just pilots
            </h2>
          </div>
          <p className="lede home-journey__lede">
            Teams use Workofo every day to plan blended traffic, large customer accounts and multi-site operations.
          </p>
        </header>

        <div className="home-proof__grid" data-reveal>
          <figure className="home-proof__quote">
            <span className="home-proof__years">
              <strong>2+ years</strong> in production
            </span>
            <blockquote>
              <p>
                “Our experience is top notch. The provider is flexible, the product is reliable, easy to use, and is
                being regularly updated.”
              </p>
            </blockquote>
            <figcaption>
              <img
                src="/clients/planas-chuliganas.png?v=2"
                alt="Planas Chuliganas"
                width={120}
                height={40}
                loading="lazy"
                decoding="async"
              />
              <span>
                <strong>Dovydas Braukyla</strong>
                <span>CEO, Planas Chuliganas · Contact center</span>
              </span>
            </figcaption>
          </figure>

          <ul className="home-proof__outcomes">
            {OUTCOMES.map((item, i) => (
              <li key={item.title}>
                <span className="home-proof__num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type Faq = { q: string; a: string; html?: string };

function buildFaqs(locale: Locale): Faq[] {
  const sol = (slug: IndustrySlug, label: string) =>
    `<a href="${industryPath(locale, slug)}">${label}</a>`;
  return [
    {
      q: 'What is AI employee scheduling software?',
      a: "AI employee scheduling software uses workload forecasts to build staff schedules around demand, skills and working-time rules. Workofo's demand-based scheduling helps you use available hours more effectively, with managers reviewing the plan and deciding what to publish.",
    },
    {
      q: 'How does Workofo forecast labor demand?',
      a: 'Workofo uses the drivers that define work in your business, such as sales, volumes, tasks or service targets, and forecasts staffing needs down to 15-minute intervals per location.',
    },
    {
      q: 'Can Workofo handle labor law and union agreements?',
      a: 'Yes. Workofo applies the labor rules, agreements, contracts, skills and availability configured for your operation. These requirements form part of the scheduling process, helping managers assess workable options without checking every combination by hand.',
    },
    {
      q: 'How much capacity can we unlock?',
      a: 'The opportunity depends on your operation. Better shift lengths, start times and skill allocation can release hours for peak demand, other locations or less overtime. Explore your potential with the capacity calculator.',
      html: `The opportunity depends on your operation. Better shift lengths, start times and skill allocation can release hours for peak demand, other locations or less overtime. Explore your potential with the <a href="${localePath(locale, '/calculator')}">capacity calculator</a>.`,
    },
    {
      q: 'Which industries is Workofo built for?',
      a: 'Workofo is built for shift-based operations in retail, contact centres, aviation, logistics and restaurants.',
      html: `Workofo is built for shift-based operations in ${sol('retail', 'retail')}, ${sol('contact-centre', 'contact centres')}, ${sol('aviation', 'aviation')}, ${sol('logistics', 'logistics')} and ${sol('restaurants', 'restaurants')}.`,
    },
    {
      q: 'Do managers stay in control of the schedule?',
      a: 'Yes. Workofo does the calculations and suggests workable options. Managers review, adjust and publish the schedule, deciding how to use any capacity released. When things change, they can replan without starting from scratch.',
    },
  ];
}

export function HomeFaq({ locale = 'en' }: LocaleProps) {
  const faqs = buildFaqs(locale);
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="home-faq" aria-labelledby="home-faq-heading">
      <div className="home-journey__inner home-faq__layout">
        <header className="home-faq__intro" data-reveal>
          <h2 id="home-faq-heading" data-split>
            Your employee scheduling software questions, answered
          </h2>
          <p className="lede home-journey__lede">
            Curious about your own operation? Bring us your demand data and scheduling rules.
          </p>
        </header>

        <div className="home-faq__list" data-reveal>
          {faqs.map((f) => (
            <details key={f.q} className="home-faq__item">
              <summary>
                <h3>{f.q}</h3>
                <span className="home-faq__icon" aria-hidden="true" />
              </summary>
              <p dangerouslySetInnerHTML={{ __html: f.html ?? f.a }} />
            </details>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </section>
  );
}
