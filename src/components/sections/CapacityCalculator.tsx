import { withSwedish } from '../../lib/swedish/react';
import { lithuanianText } from '../../lib/lithuanian/copy';
import { useEffect, useMemo, useRef, useState } from 'react';
import { capacityEstimate, type RuleOption } from '../../lib/capacity-estimate';
import type { Locale } from '../../lib/locales';
import { swedishCopy, translateCopy } from '../../lib/swedish/copy';

const THINK_MS = 800;

type Props = {
  locale?: Locale;
  demoHref?: string;
  /** Hide the section H2 intro when the page supplies its own H1. */
  hideIntro?: boolean;
  /** Optional aria-labelledby when hideIntro is set. */
  labelledBy?: string;
};

function clampNumber(value: string, fallback: number, min = 0, max = 1_000_000) {
  const n = Number(String(value).replace(/\s/g, '').replace(',', '.'));
  if (!Number.isFinite(n)) return fallback;
  return Math.min(max, Math.max(min, n));
}

function formatHours(n: number, locale: Locale): string {
  return n.toLocaleString(locale === 'se' ? 'sv-SE' : locale === 'lt' ? 'lt-LT' : 'en-GB');
}
function formatMoney(n: number, locale: Locale): string {
  return new Intl.NumberFormat(locale === 'se' ? 'sv-SE' : locale === 'lt' ? 'lt-LT' : 'en-IE', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(n);
}
function formatDisplay(n: number, prefix?: string, suffix?: string, locale: Locale = 'en') {
  return `${prefix ?? ''}${n.toLocaleString(locale === 'se' ? 'sv-SE' : locale === 'lt' ? 'lt-LT' : 'en-GB', {maximumFractionDigits: 2})}${suffix ?? ''}`;
}

type SliderFieldProps = {
  locale?: Locale;
  id: string;
  label: string;
  value: string;
  onChange: (next: string) => void;
  min: number;
  max: number;
  step: number;
  prefix?: string;
  suffix?: string;
  hint?: string;
  minLabel: string;
  maxLabel: string;
};

function SliderField({
  locale = 'en',
  id,
  label,
  value,
  onChange,
  min,
  max,
  step,
  prefix,
  suffix,
  hint,
  minLabel,
  maxLabel,
}: SliderFieldProps) {
  const accessibleLabel = locale === 'se' ? translateCopy(label, swedishCopy('calculator')) : label;
  const numeric = clampNumber(value, min, min, max);
  const percent = ((numeric - min) / (max - min)) * 100;
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(String(numeric));
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!editing) setDraft(String(numeric));
  }, [numeric, editing]);

  useEffect(() => {
    if (!editing || !inputRef.current) return;
    const el = inputRef.current;
    // Click-to-edit: select all. Key-to-edit: keep the typed digit and place caret at end.
    if (draft === String(numeric)) {
      el.select();
    } else {
      el.focus();
      const n = el.value.length;
      el.setSelectionRange(n, n);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- only when entering edit mode
  }, [editing]);

  const commit = () => {
    const next = clampNumber(draft, numeric, min, max);
    onChange(String(Math.round(next * 100) / 100));
    setEditing(false);
  };

  return (
    <div className="calc-slider">
      <div className="calc-slider__header">
        <label className="calc-slider__label" htmlFor={id}>
          {label}
        </label>
        {editing ? (
          <span className="calc-slider__value is-editing">
            {prefix ? <span aria-hidden="true">{prefix}</span> : null}
            <input
              ref={inputRef}
              type="text"
              inputMode="decimal"
              value={draft}
              aria-label={label}
              onChange={(e) => setDraft(e.target.value.replace(/[^\d.,]/g, ''))}
              onBlur={commit}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  commit();
                }
                if (e.key === 'Escape') {
                  setDraft(String(numeric));
                  setEditing(false);
                }
              }}
            />
            {suffix ? <span aria-hidden="true">{suffix}</span> : null}
          </span>
        ) : (
          <button
            type="button"
            className="calc-slider__value"
            onClick={() => setEditing(true)}
            onKeyDown={(e) => {
              // Digits / decimal start typing immediately
              if (e.key.length === 1 && /[\d.]/.test(e.key)) {
                e.preventDefault();
                setDraft(e.key === '.' ? '0.' : e.key);
                setEditing(true);
              }
            }}
            aria-label={locale === 'se' ? `Ändra ${accessibleLabel.toLowerCase()}, nuvarande värde ${formatDisplay(numeric, prefix, suffix, locale)}` : locale === 'lt' ? `${lithuanianText(label)}. Keisti reikšmę. Dabar: ${formatDisplay(numeric, prefix, suffix, locale)}` : `Edit ${label}, currently ${formatDisplay(numeric, prefix, suffix, locale)}`}
          >
            <span className="calc-slider__value-text">
              {formatDisplay(numeric, prefix, suffix, locale)}
            </span>
            <span className="calc-slider__edit" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 12 12" focusable="false">
                <path
                  d="M8.6 1.4a1.1 1.1 0 0 1 1.55 1.55L4.2 8.9 1.5 9.5l.6-2.7L8.6 1.4z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </button>
        )}
      </div>

      <div className="calc-slider__control">
        <input
          id={id}
          className="calc-slider__range"
          type="range"
          min={min}
          max={max}
          step={step}
          value={numeric}
          onChange={(e) => onChange(e.target.value)}
          aria-valuemin={min}
          aria-valuemax={max}
          aria-valuenow={numeric}
          aria-label={label}
          style={{ ['--progress' as string]: `${percent}%` }}
        />
      </div>

      <div className="calc-slider__bounds" aria-hidden="true">
        <span>{locale === 'se' ? minLabel.replace(/,/g, ' ') : minLabel}</span>
        <span>{locale === 'se' ? maxLabel.replace(/,/g, ' ') : maxLabel}</span>
      </div>
      {hint ? <p className="calc-slider__hint">{hint}</p> : null}
    </div>
  );
}

export default function CapacityCalculator({
  locale = 'en',
  demoHref = '/get-in-touch',
  hideIntro = false,
  labelledBy,
}: Props) {
  const [employees, setEmployees] = useState('3000');
  const [hours, setHours] = useState('70');
  const [cost, setCost] = useState('8');

  const [shift, setShift] = useState<RuleOption>(0);
  const [days, setDays] = useState<RuleOption>(0);
  const [mobility, setMobility] = useState<RuleOption>(0);

  const estimate = useMemo(() => {
    const result = capacityEstimate(clampNumber(employees, 3000, 0, 1_000_000), clampNumber(cost, 8, 0, 1000), clampNumber(hours, 70, 0, 100), shift, days, mobility);
    return { percent: result.percent, hoursLabel: formatHours(result.hours, locale), valueLabel: formatMoney(result.value, locale) };
  }, [employees, hours, cost, shift, days, mobility, locale]);

  const [shown, setShown] = useState(estimate);
  const [thinking, setThinking] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setThinking(true);
    const t = window.setTimeout(() => {
      setShown(estimate);
      setThinking(false);
    }, THINK_MS);
    return () => window.clearTimeout(t);
  }, [estimate]);

  const headingId = hideIntro ? labelledBy || 'calculator-page-heading' : 'capacity-calc-heading';

  return (
    <section
      id="calculate-potential"
      className={`capacity-calc${hideIntro ? ' capacity-calc--page' : ''}`}
      aria-labelledby={headingId}
    >
      <div className="capacity-calc__inner">
        {!hideIntro && (
          <header className="capacity-calc__intro">
            <h2 id="capacity-calc-heading">See what smarter workforce scheduling could unlock</h2>
            <p className="lede capacity-calc__lede">
              Estimate the hours and capacity value hidden in your current schedules.
            </p>
          </header>
        )}

        <div className="capacity-calc__card">
          <div className="capacity-calc__grid">
            <div className="capacity-calc__inputs">
              <div className="capacity-calc__panel-head">
                <h3>Your workforce</h3>
                <p>Adjust the values to explore your potential.</p>
              </div>

              <SliderField
                id="calc-employees"
                locale={locale}
                label="Total employee hours per month"
                hint={locale === 'se' ? 'Ange det sammanlagda antalet arbetstimmar för den personal du vill räkna på.' : undefined}
                value={employees}
                onChange={setEmployees}
                min={0}
                max={1_000_000}
                step={1}
                minLabel="0"
                maxLabel="1,000,000"
              />

              <SliderField
                id="calc-hours"
                locale={locale}
                label="Time staffed above the absolute minimum"
                value={hours}
                onChange={setHours}
                min={0}
                max={100}
                step={1}
                suffix={'\u00a0%'}
                minLabel={'0\u00a0%'}
                maxLabel={'100\u00a0%'}
                hint="Share of time with more than one employee, or more than the absolute minimum required."
              />

              <SliderField
                id="calc-cost"
                locale={locale}
                label="Average hourly cost"
                value={cost}
                onChange={setCost}
                min={0}
                max={1000}
                step={0.01}
                prefix="€"
                minLabel="€0"
                maxLabel="€1,000"
                hint="Include salary and employer costs."
              />

              <fieldset className="calc-choices">
                <legend>For full-time employees, each shift lasts</legend>
                {['4–12.5 hours (flexible)', '6–10 hours', '7–9 hours'].map((label, i) => <label key={label} className="calc-choices__option"><input type="radio" name="calc-shift" checked={shift === i} onChange={() => setShift(i as RuleOption)} /><span>{label}</span></label>)}
              </fieldset>
              <fieldset className="calc-choices">
                <legend>Consecutive working days</legend>
                {['Up to 6 days, followed by at least 1 day off', 'Up to 5 days, followed by 1–2 days off', 'Up to 4 days, followed by 2–3 days off (long/short week)'].map((label, i) => <label key={label} className="calc-choices__option"><input type="radio" name="calc-days" checked={days === i} onChange={() => setDays(i as RuleOption)} /><span>{label}</span></label>)}
              </fieldset>
              <fieldset className="calc-choices">
                <legend>Can employees work in other departments or locations?</legend>
                {['Most employees can, at least a few days per month', 'Only a few employees can, for a few shifts per month', 'No, only in exceptional cases'].map((label, i) => <label key={label} className="calc-choices__option"><input type="radio" name="calc-mobility" checked={mobility === i} onChange={() => setMobility(i as RuleOption)} /><span>{label}</span></label>)}
              </fieldset>

              <p className={`capacity-calc__live${thinking ? ' is-thinking' : ''}`}>
                <span className="capacity-calc__dot" aria-hidden="true" />
                {thinking ? 'Calculating your estimate…' : 'Estimate updates as you adjust'}
              </p>
            </div>

            <div className="capacity-calc__results">
              <div className="capacity-calc__panel-head">
                <h3>Your estimated potential</h3>
              </div>

              <div
                className={`capacity-calc__metrics${thinking ? ' is-thinking' : ''}`}
                aria-live="polite"
                aria-busy={thinking}
              >
                <div className="capacity-calc__metric"><p className="capacity-calc__metric-label">Potential for redistribution or optimisation</p><p className="capacity-calc__value">{`${shown.percent}\u00a0%`}</p></div>
                <div className="capacity-calc__metric">
                  <p className="capacity-calc__metric-label">Hours unlocked per month</p>
                  <p className="capacity-calc__value">
                    <span className="capacity-calc__approx" aria-label="approximately">
                      ≈
                    </span>
                    {shown.hoursLabel}
                    <span className="capacity-calc__unit">h</span>
                  </p>
                </div>
                <div className="capacity-calc__metric">
                  <p className="capacity-calc__metric-label">Monthly capacity value</p>
                  <p className="capacity-calc__value">
                    <span className="capacity-calc__approx" aria-label="approximately">
                      ≈
                    </span>
                    {shown.valueLabel}
                  </p>
                </div>
              </div>

              <p className="capacity-calc__basis">
                {locale === 'se' ? 'Resultatet är en uppskattning baserad på liknande Workofo-projekt. Timmarna kan användas där de gör större nytta. Beloppet visar vad tiden motsvarar i personalkostnad, inte hur mycket lönekostnaderna automatiskt minskar.' : 'An indicative estimate based on similar Workofo projects. Typical results are 5–15 %; your inputs may produce a result outside that range. Final results depend on your operation.'}
              </p>

              {locale !== 'se' && <p className="capacity-calc__basis">Capacity value represents time that could be redistributed or optimised, not guaranteed payroll savings.</p>}
              <div className="capacity-calc__actions">
                <a className="btn btn--primary capacity-calc__cta" href={demoHref}>
                  Book a demo
                </a>
                <details className="calc-method"><summary>How we estimate</summary>{locale === 'se' ? <><p>Dina svar om passlängder, arbetsdagar i rad och möjligheten att arbeta på andra håll ger en uppskattad förbättring på 9–17 procent. Den justeras efter hur stor del av tiden ni är fler på plats än det lägsta antal som krävs.</p><p>Procentsatsen multipliceras sedan med månadens arbetstimmar. Det ger antalet timmar som kan frigöras. Timmarna multipliceras med timkostnaden för att visa värdet per månad. Resultaten avrundas till heltal.</p></> : <p>Working rules determine a base potential of 9–17 %. Multiply by the share of time above minimum staffing and round to a whole percentage. Monthly hours × this percentage gives rounded hours; those hours × hourly rate gives the rounded monthly value in euros.</p>}</details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export const SwedishCapacityCalculator = withSwedish(CapacityCalculator, 'calculator');
