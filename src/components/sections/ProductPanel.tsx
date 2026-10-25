/**
 * Demand-band product overview — ported from workofo-product-panel-v3.html.
 * IntersectionObserver starts Nora grow + SVG morph; only the recommendation card bobs.
 */

import { useEffect, useRef } from 'react';

const BEFORE_AREA =
  'M20.0 31.3C23.1 34.6 32.4 50.3 38.7 51.2C44.9 52.1 51.1 35.3 57.3 36.6C63.6 37.9 69.8 55.4 76.0 59.2C82.2 62.9 88.4 65.2 94.7 59.2C100.9 53.2 107.1 23.1 113.3 23.3C119.6 23.5 125.8 46.6 132.0 60.5C138.2 74.5 144.4 98.6 150.7 107.0C156.9 115.4 163.1 114.5 169.3 111.0C175.6 107.4 181.8 88.2 188.0 85.7C194.2 83.3 200.4 89.7 206.7 96.4C212.9 103.0 219.1 127.6 225.3 125.6C231.6 123.6 237.8 91.1 244.0 84.4C250.2 77.8 256.4 81.5 262.7 85.7C268.9 89.9 275.1 105.5 281.3 109.7C287.6 113.9 293.8 110.5 300.0 111.0C306.2 111.4 312.4 109.7 318.7 112.3C324.9 115.0 331.1 124.5 337.3 126.9C343.6 129.4 349.8 129.6 356.0 126.9C362.2 124.3 368.4 113.4 374.7 111.0C380.9 108.5 387.1 112.3 393.3 112.3C399.6 112.3 405.8 111.2 412.0 111.0C418.2 110.8 424.4 110.8 430.7 111.0C436.9 111.2 443.1 109.7 449.3 112.3C455.6 115.0 461.8 124.5 468.0 126.9C474.2 129.4 480.4 129.4 486.7 126.9C492.9 124.5 499.1 114.5 505.3 112.3C511.6 110.1 517.8 109.2 524.0 113.6C530.2 118.1 536.4 139.1 542.7 138.9C548.9 138.7 555.1 114.3 561.3 112.3C567.6 110.3 576.9 124.5 580.0 126.9L580 200L20 200Z';

const AFTER_AREA =
  'M20.0 138.9C23.1 136.5 32.4 127.2 38.7 124.3C44.9 121.4 51.1 125.8 57.3 121.6C63.6 117.4 69.8 101.0 76.0 99.0C82.2 97.0 88.4 108.1 94.7 109.7C100.9 111.2 107.1 111.2 113.3 108.3C119.6 105.4 125.8 92.8 132.0 92.4C138.2 91.9 144.4 101.2 150.7 105.7C156.9 110.1 163.1 119.0 169.3 119.0C175.6 119.0 181.8 108.8 188.0 105.7C194.2 102.6 200.4 97.7 206.7 100.4C212.9 103.0 219.1 121.6 225.3 121.6C231.6 121.6 237.8 104.6 244.0 100.4C250.2 96.2 256.4 94.4 262.7 96.4C268.9 98.4 275.1 110.3 281.3 112.3C287.6 114.3 293.8 112.3 300.0 108.3C306.2 104.3 312.4 92.2 318.7 88.4C324.9 84.6 331.1 80.2 337.3 85.7C343.6 91.3 349.8 119.0 356.0 121.6C362.2 124.3 368.4 107.2 374.7 101.7C380.9 96.2 387.1 89.3 393.3 88.4C399.6 87.5 405.8 93.7 412.0 96.4C418.2 99.0 424.4 107.0 430.7 104.3C436.9 101.7 443.1 79.8 449.3 80.4C455.6 81.1 461.8 101.0 468.0 108.3C474.2 115.6 480.4 125.4 486.7 124.3C492.9 123.2 499.1 105.9 505.3 101.7C511.6 97.5 517.8 97.7 524.0 99.0C530.2 100.4 536.4 106.6 542.7 109.7C548.9 112.8 555.1 117.9 561.3 117.6C567.6 117.4 576.9 109.9 580.0 108.3L580 200L20 200Z';

const BEFORE_LINE =
  'M20.0 31.3C23.1 34.6 32.4 50.3 38.7 51.2C44.9 52.1 51.1 35.3 57.3 36.6C63.6 37.9 69.8 55.4 76.0 59.2C82.2 62.9 88.4 65.2 94.7 59.2C100.9 53.2 107.1 23.1 113.3 23.3C119.6 23.5 125.8 46.6 132.0 60.5C138.2 74.5 144.4 98.6 150.7 107.0C156.9 115.4 163.1 114.5 169.3 111.0C175.6 107.4 181.8 88.2 188.0 85.7C194.2 83.3 200.4 89.7 206.7 96.4C212.9 103.0 219.1 127.6 225.3 125.6C231.6 123.6 237.8 91.1 244.0 84.4C250.2 77.8 256.4 81.5 262.7 85.7C268.9 89.9 275.1 105.5 281.3 109.7C287.6 113.9 293.8 110.5 300.0 111.0C306.2 111.4 312.4 109.7 318.7 112.3C324.9 115.0 331.1 124.5 337.3 126.9C343.6 129.4 349.8 129.6 356.0 126.9C362.2 124.3 368.4 113.4 374.7 111.0C380.9 108.5 387.1 112.3 393.3 112.3C399.6 112.3 405.8 111.2 412.0 111.0C418.2 110.8 424.4 110.8 430.7 111.0C436.9 111.2 443.1 109.7 449.3 112.3C455.6 115.0 461.8 124.5 468.0 126.9C474.2 129.4 480.4 129.4 486.7 126.9C492.9 124.5 499.1 114.5 505.3 112.3C511.6 110.1 517.8 109.2 524.0 113.6C530.2 118.1 536.4 139.1 542.7 138.9C548.9 138.7 555.1 114.3 561.3 112.3C567.6 110.3 576.9 124.5 580.0 126.9';

const AFTER_LINE =
  'M20.0 138.9C23.1 136.5 32.4 127.2 38.7 124.3C44.9 121.4 51.1 125.8 57.3 121.6C63.6 117.4 69.8 101.0 76.0 99.0C82.2 97.0 88.4 108.1 94.7 109.7C100.9 111.2 107.1 111.2 113.3 108.3C119.6 105.4 125.8 92.8 132.0 92.4C138.2 91.9 144.4 101.2 150.7 105.7C156.9 110.1 163.1 119.0 169.3 119.0C175.6 119.0 181.8 108.8 188.0 105.7C194.2 102.6 200.4 97.7 206.7 100.4C212.9 103.0 219.1 121.6 225.3 121.6C231.6 121.6 237.8 104.6 244.0 100.4C250.2 96.2 256.4 94.4 262.7 96.4C268.9 98.4 275.1 110.3 281.3 112.3C287.6 114.3 293.8 112.3 300.0 108.3C306.2 104.3 312.4 92.2 318.7 88.4C324.9 84.6 331.1 80.2 337.3 85.7C343.6 91.3 349.8 119.0 356.0 121.6C362.2 124.3 368.4 107.2 374.7 101.7C380.9 96.2 387.1 89.3 393.3 88.4C399.6 87.5 405.8 93.7 412.0 96.4C418.2 99.0 424.4 107.0 430.7 104.3C436.9 101.7 443.1 79.8 449.3 80.4C455.6 81.1 461.8 101.0 468.0 108.3C474.2 115.6 480.4 125.4 486.7 124.3C492.9 123.2 499.1 105.9 505.3 101.7C511.6 97.5 517.8 97.7 524.0 99.0C530.2 100.4 536.4 106.6 542.7 109.7C548.9 112.8 555.1 117.9 561.3 117.6C567.6 117.4 576.9 109.9 580.0 108.3';

const DEMAND_LINE =
  'M20.0 166.8C23.1 164.3 32.4 154.8 38.7 152.2C44.9 149.5 51.1 151.1 57.3 150.8C63.6 150.6 69.8 150.4 76.0 150.8C82.2 151.3 88.4 151.5 94.7 153.5C100.9 155.5 107.1 163.9 113.3 162.8C119.6 161.7 125.8 149.3 132.0 146.9C138.2 144.4 144.4 145.1 150.7 148.2C156.9 151.3 163.1 164.8 169.3 165.5C175.6 166.1 181.8 154.6 188.0 152.2C194.2 149.7 200.4 150.6 206.7 150.8C212.9 151.1 219.1 151.5 225.3 153.5C231.6 155.5 237.8 163.9 244.0 162.8C250.2 161.7 256.4 149.3 262.7 146.9C268.9 144.4 275.1 145.1 281.3 148.2C287.6 151.3 293.8 164.8 300.0 165.5C306.2 166.1 312.4 154.6 318.7 152.2C324.9 149.7 331.1 150.6 337.3 150.8C343.6 151.1 349.8 151.5 356.0 153.5C362.2 155.5 368.4 163.9 374.7 162.8C380.9 161.7 387.1 149.3 393.3 146.9C399.6 144.4 405.8 145.1 412.0 148.2C418.2 151.3 424.4 164.8 430.7 165.5C436.9 166.1 443.1 154.6 449.3 152.2C455.6 149.7 461.8 150.6 468.0 150.8C474.2 151.1 480.4 151.5 486.7 153.5C492.9 155.5 499.1 163.9 505.3 162.8C511.6 161.7 517.8 149.3 524.0 146.9C530.2 144.4 536.4 145.1 542.7 148.2C548.9 151.3 555.1 164.8 561.3 165.5C567.6 166.1 576.9 154.4 580.0 152.2';

const SparkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
  </svg>
);

const LockIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M7 10V7a5 5 0 0 1 10 0v3h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1zm2 0h6V7a3 3 0 0 0-6 0z" />
  </svg>
);

type SVGAnimateElementLike = SVGElement & { beginElement: () => void };

export default function ProductPanel() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let morphTimer: ReturnType<typeof setTimeout> | undefined;

    const go = () => {
      el.classList.remove('prod-panel--wait');
      if (reduce) return;
      morphTimer = setTimeout(() => {
        el.querySelectorAll<SVGAnimateElementLike>('animate.prod-panel__morph').forEach((a) => {
          try {
            a.beginElement();
          } catch {
            /* ignore */
          }
        });
      }, 800);
    };

    if (!('IntersectionObserver' in window)) {
      go();
      return () => {
        if (morphTimer) clearTimeout(morphTimer);
      };
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            go();
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      if (morphTimer) clearTimeout(morphTimer);
    };
  }, []);

  return (
    <div ref={rootRef} className="prod-panel prod-panel--wait" aria-hidden="true">
      <div className="prod-panel__ui prod-panel__ui--chart">
        <div className="prod-panel__h">
          <span>Workload coverage · July</span>
          <span className="prod-panel__badge">
            <LockIcon />
            Optimized
          </span>
        </div>
        <div className="prod-panel__metrics">
          <div className="prod-panel__metric">
            <span className="prod-panel__lab">Assigned hours</span>
            <span className="prod-panel__metric-row">
              <span className="prod-panel__num">3,893</span>
              <span className="prod-panel__gain">↓ 205</span>
            </span>
          </div>
          <div className="prod-panel__metric">
            <span className="prod-panel__lab">Service</span>
            <span className="prod-panel__metric-row">
              <span className="prod-panel__num">77.5%</span>
              <span className="prod-panel__gain">↑ 0.7pp</span>
            </span>
          </div>
          <div className="prod-panel__metric">
            <span className="prod-panel__lab">Legal violations</span>
            <span className="prod-panel__metric-row">
              <span className="prod-panel__num">0</span>
              <span className="prod-panel__gain">↓ 93</span>
            </span>
          </div>
        </div>
        <svg className="prod-panel__chart" viewBox="0 0 600 220" aria-hidden="true">
          <line x1="20" x2="580" y1="200" y2="200" stroke="#E6E6E1" />
          <line x1="20" x2="580" y1="140" y2="140" stroke="#F2F2EE" />
          <line x1="20" x2="580" y1="80" y2="80" stroke="#F2F2EE" />
          <line x1="20" x2="580" y1="20" y2="20" stroke="#F2F2EE" />
          <path d={BEFORE_AREA} fill="#F8DADF">
            <animate
              className="prod-panel__morph"
              attributeName="d"
              from={BEFORE_AREA}
              to={AFTER_AREA}
              dur="1.8s"
              begin="indefinite"
              fill="freeze"
              calcMode="spline"
              keyTimes="0;1"
              keySplines=".65 0 .35 1"
            />
          </path>
          <path
            d={BEFORE_LINE}
            fill="none"
            stroke="#E8705F"
            strokeWidth="2"
            strokeDasharray="5 5"
            opacity=".7"
          />
          <path
            d={DEMAND_LINE}
            fill="none"
            stroke="#2A8AA8"
            strokeWidth="2.6"
            strokeLinejoin="round"
          />
          <path
            d={BEFORE_LINE}
            fill="none"
            stroke="#D7263D"
            strokeWidth="3"
            strokeLinejoin="round"
            strokeLinecap="round"
          >
            <animate
              className="prod-panel__morph"
              attributeName="d"
              from={BEFORE_LINE}
              to={AFTER_LINE}
              dur="1.8s"
              begin="indefinite"
              fill="freeze"
              calcMode="spline"
              keyTimes="0;1"
              keySplines=".65 0 .35 1"
            />
          </path>
          <circle cx="580" cy="126.9" r="10" fill="#D7263D" opacity="0">
            <animate
              className="prod-panel__morph"
              attributeName="cy"
              from="126.9"
              to="108.3"
              dur="1.8s"
              begin="indefinite"
              fill="freeze"
              calcMode="spline"
              keyTimes="0;1"
              keySplines=".65 0 .35 1"
            />
            <animate attributeName="r" values="4;13;4" dur="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values=".35;0;.35" dur="2.4s" repeatCount="indefinite" />
          </circle>
          <circle cx="580" cy="126.9" r="4.5" fill="#D7263D" stroke="#FFFFFF" strokeWidth="2">
            <animate
              className="prod-panel__morph"
              attributeName="cy"
              from="126.9"
              to="108.3"
              dur="1.8s"
              begin="indefinite"
              fill="freeze"
              calcMode="spline"
              keyTimes="0;1"
              keySplines=".65 0 .35 1"
            />
          </circle>
        </svg>
      </div>

      <div className="prod-panel__ui prod-panel__ui--nora">
        <div className="prod-panel__h prod-panel__h--nora">
          <span className="prod-panel__spark">
            <SparkIcon />
          </span>
          Nora
          <span className="prod-panel__meta">AI assistant</span>
        </div>
        <div className="prod-panel__sep" />
        <div className="prod-panel__nora-body">
          <div className="prod-panel__gr prod-panel__g1">
            <div className="prod-panel__gi prod-panel__gi--end">
              <div className="prod-panel__bub prod-panel__bub--user">
                Ellen is sick tomorrow. Find someone for her shift.
              </div>
            </div>
          </div>
          <div className="prod-panel__gr prod-panel__g2">
            <div className="prod-panel__gi">
              <div className="prod-panel__typing">
                <span className="prod-panel__dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                Nora is checking rules and availability
              </div>
            </div>
          </div>
          <div className="prod-panel__gr prod-panel__g3">
            <div className="prod-panel__gi">
              <div className="prod-panel__bub prod-panel__bub--nora">
                Sat 09:00–17:00 at Bar. 4 colleagues can take it without breaking any rules.
              </div>
            </div>
          </div>
          <div className="prod-panel__gr prod-panel__g4">
            <div className="prod-panel__gi">
              <div className="prod-panel__actions">
                <span className="prod-panel__action prod-panel__action--primary">Offer the shift</span>
                <span className="prod-panel__action prod-panel__action--ghost">See who</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="prod-panel__ui prod-panel__ui--rec prod-panel__float--3">
        <div className="prod-panel__h">
          <span>Recommendation</span>
          <span className="prod-panel__gain">Save about 43.2 h</span>
        </div>
        <div className="prod-panel__sep" />
        <div className="prod-panel__rec-body">
          <span className="prod-panel__rec-title">Wed, Sat · Min 2 Bar 14:00–00:00</span>
          <div className="prod-panel__row prod-panel__row--warn">
            <span>18:15–00:00</span>
            <span className="prod-panel__row-warn">More than needed</span>
          </div>
          <div className="prod-panel__change">
            <span className="prod-panel__strike">14:00–00:00</span>
            →
            <b>14:00–18:30</b>
          </div>
          <span className="prod-panel__action prod-panel__action--primary prod-panel__action--end">
            Shorten time window
          </span>
        </div>
      </div>
    </div>
  );
}
