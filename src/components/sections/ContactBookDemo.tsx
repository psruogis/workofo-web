import { useMemo, useState, type FormEvent, type CSSProperties } from 'react';
import { DEMO_FORM_ID } from '../../lib/config';
import { ui, type Locale } from '../../lib/locales';
import { localePath } from '../../lib/paths';

type FieldModel = {
  target: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  format?: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
  viewFieldType?: string;
  options?: Array<{ value: string; label: string }>;
};

type Props = {
  fields?: FieldModel[];
  formId?: string;
  loadError?: string;
  locale?: Locale;
};

const CLIENT_LOGOS = [
  { name: 'Telenordi', image: '/clients/telenordi.png?v=2' },
  { name: 'Senukai', image: '/clients/senukai.png?v=2' },
  { name: 'Barbora', image: '/clients/barbora.png?v=2' },
  { name: 'Tele2', image: '/clients/tele2.png?v=2' },
  { name: 'Planas Chuliganas', image: '/clients/planas-chuliganas.png?v=2' },
] as const;

const LOGO_RATIOS: Record<string, number> = {
  telenordi: 8.07,
  senukai: 2.98,
  barbora: 4.77,
  tele2: 2.65,
  'planas chuliganas': 2.57,
};

const DEFAULT_EMPLOYEE_CHIPS = [
  'Up to 100',
  '101–250',
  '251–1,000',
  '1,001–5,000',
  '5,000+',
] as const;

const DEFAULT_INDUSTRY_CHIPS = [
  'Retail',
  'Contact Centre',
  'Aviation',
  'Logistics',
  'Restaurants',
] as const;

const NEXT_STEPS = [
  {
    title: 'We read your request',
    body: 'A scheduling specialist gets back to you within one working day.',
  },
  {
    title: 'We tailor the demo',
    body: 'Built around your industry, sites, roles and working-time rules.',
  },
  {
    title: 'You see it in action',
    body: 'Find better uses for the hours you already have. No commitment.',
  },
] as const;

function logoWidth(name: string): number | undefined {
  const ratio = LOGO_RATIOS[name.trim().toLowerCase()];
  if (!ratio) return undefined;
  return Math.round(Math.sqrt(2500 * ratio));
}

function matchField(fields: FieldModel[], needles: string[]): FieldModel | undefined {
  const lower = needles.map((n) => n.toLowerCase());
  return fields.find((f) => {
    const t = `${f.target} ${f.label}`.toLowerCase();
    return lower.some((n) => t.includes(n));
  });
}

function fieldError(field: FieldModel | undefined, raw: string, locale: Locale): string {
  if (!field) return '';
  const v = (raw ?? '').trim();
  if (field.required && !v) {
    return locale === 'lt'
      ? `${field.label} privalomas.`
      : locale === 'se'
        ? `${field.label} krävs.`
        : `${field.label} is required.`;
  }
  if (!v) return '';
  if (field.format === 'EMAIL' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) {
    return locale === 'lt'
      ? 'Įveskite galiojantį el. paštą.'
      : locale === 'se'
        ? 'Ange en giltig e-postadress.'
        : 'Please enter a valid email address.';
  }
  return '';
}

/**
 * Contact / Book a demo page form. Same /api/demo-form submit as homepage DemoForm.
 * Layout follows the Book a demo HTML mock; type/buttons use Workofo tokens.
 */
export default function ContactBookDemo({
  fields = [],
  formId,
  loadError,
  locale = 'en',
}: Props) {
  const resolvedFormId = formId || DEMO_FORM_ID;
  const privacyHref = localePath(locale, '/privacy');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');
  const [privacy, setPrivacy] = useState(false);
  const [employeeChip, setEmployeeChip] = useState('251–1,000');
  const [industryChip, setIndustryChip] = useState('Retail');

  const map = useMemo(() => {
    const name =
      matchField(fields, ['full_name', 'fullname', 'first_name', 'fullname']) ||
      ({ target: 'first_name', label: 'Full name', required: true, placeholder: 'Anna Svensson' } as FieldModel);
    const email =
      matchField(fields, ['email', 'work email']) ||
      ({
        target: 'email',
        label: 'Work email',
        required: true,
        format: 'EMAIL',
        placeholder: 'anna@company.com',
      } as FieldModel);
    const company =
      matchField(fields, ['company', 'organisation', 'organization']) ||
      ({ target: 'company', label: 'Company', required: true, placeholder: 'Company name' } as FieldModel);
    const phone =
      matchField(fields, ['phone', 'tel', 'mobile']) ||
      ({
        target: 'phone',
        label: 'Phone',
        required: false,
        format: 'PHONE',
        placeholder: '+46 70 000 00 00',
      } as FieldModel);
    const employees =
      matchField(fields, ['team_size', 'employees', 'employee', 'headcount', 'company_size']) ||
      ({ target: 'team_size', label: 'Employees working shifts', required: true } as FieldModel);
    const industry =
      matchField(fields, ['industry', 'sector']) ||
      ({ target: 'industry', label: 'Industry', required: false } as FieldModel);
    const challenges =
      matchField(fields, ['challenge', 'message', 'hoping', 'solve']) ||
      ({
        target: 'message',
        label: 'What would you like to improve about employee scheduling?',
        viewFieldType: 'TEXT_AREA',
        placeholder: 'e.g. last-minute changes, overtime, labour rules, forecasting demand…',
      } as FieldModel);
    const tools =
      matchField(fields, ['tool', 'system', 'erp', 'software']) ||
      ({
        target: 'systems',
        label: 'Which tools do you use today?',
        required: false,
        placeholder: 'e.g. Excel, an ERP system, another scheduling tool',
      } as FieldModel);

    const employeeChips =
      employees.options && employees.options.length > 0
        ? employees.options.map((o) => o.label || o.value)
        : [...DEFAULT_EMPLOYEE_CHIPS];
    /* Live industries only: Retail, Contact Centre, Aviation, Logistics, Restaurants */
    const industryChips = [...DEFAULT_INDUSTRY_CHIPS];

    return {
      name,
      email,
      company,
      phone,
      employees,
      industry,
      challenges,
      tools,
      employeeChips,
      industryChips,
    };
  }, [fields]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError('');
    const form = e.currentTarget;
    const fd = new FormData(form);
    const data: Record<string, string> = {};
    for (const [k, v] of fd.entries()) {
      if (typeof v === 'string') data[k] = v;
    }
    data[map.employees.target] = employeeChip;
    if (map.industry.target) data[map.industry.target] = industryChip;

    const nextErrors: Record<string, string> = {};
    for (const key of ['name', 'email', 'company', 'phone', 'challenges', 'tools'] as const) {
      const field = map[key];
      const msg = fieldError(field, data[field.target] ?? '', locale);
      if (msg) nextErrors[field.target] = msg;
    }
    if (map.employees.required && !employeeChip) {
      nextErrors[map.employees.target] = `${map.employees.label} is required.`;
    }
    if (!privacy) {
      nextErrors.privacy =
        locale === 'se'
          ? 'Godkänn integritetspolicyn för att fortsätta.'
          : 'Please agree so we can contact you about a demo.';
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/demo-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formId: resolvedFormId, submissions: data }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (json.fieldErrors) setErrors(json.fieldErrors);
        setFormError(json.error || ui('formFail', locale));
        setStatus('error');
        return;
      }
      setStatus('success');
      form.reset();
      setPrivacy(false);
    } catch {
      setFormError(ui('formNetwork', locale));
      setStatus('error');
    }
  }

  if (loadError) {
    return (
      <section className="contact-demo">
        <div className="contact-demo__inner">
          <p className="dev-msg" data-reveal>
            {loadError}
          </p>
        </div>
      </section>
    );
  }

  if (status === 'success') {
    return (
      <section className="contact-demo">
        <div className="contact-demo__inner">
          <div className="contact-demo__success" data-reveal>
            <p className="t-overline">Book a demo</p>
            <h1 data-split>{ui('formSuccess', locale)}</h1>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-demo">
      <div className="contact-demo__inner">
        <div className="contact-demo__split">
          <div className="contact-demo__left">
            <div className="contact-demo__copy">
              <div className="contact-demo__intro" data-reveal>
                <p className="t-overline contact-demo__eyebrow">Book a demo</p>
                <h1 data-split>See what Workofo can do with your demand data and scheduling rules.</h1>
                <p className="lede contact-demo__lede">
                  Plan staffing in 15-minute intervals, with your working-time rules built in.
                </p>
                <p className="contact-demo__next-title">What happens next</p>
                <ol className="contact-demo__next">
                  {NEXT_STEPS.map((step, i) => (
                    <li key={step.title} className="contact-demo__step">
                      <span className="contact-demo__step-n" aria-hidden="true">
                        {i + 1}
                      </span>
                      <div>
                        <strong className="contact-demo__step-heading">{step.title}</strong>
                        <p className="contact-demo__step-body">{step.body}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="contact-demo__trust" data-reveal>
                <p className="contact-demo__trust-label">Used by multi-site teams across Europe</p>
                <div className="contact-demo__logos" aria-label="Customers">
                  {[CLIENT_LOGOS.slice(0, 3), CLIENT_LOGOS.slice(3)].map((row, rowIndex) => (
                    <ul className="logo-proof__row contact-demo__logos-row" key={rowIndex}>
                      {row.map((item) => {
                        const w = logoWidth(item.name);
                        return (
                          <li
                            className="logo-proof__item"
                            key={item.name}
                            style={w ? ({ '--logo-w': `${w}px` } as CSSProperties) : undefined}
                          >
                            <img src={item.image} alt={item.name} loading="lazy" decoding="async" />
                          </li>
                        );
                      })}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-demo__card" data-reveal>
            <h3 className="contact-demo__card-title">Tell us about your operation</h3>
            <p className="lede contact-demo__card-lede">
              We&apos;ll tailor the demo for you. Takes about a minute.
            </p>

            <form className="contact-demo__form" onSubmit={onSubmit} noValidate>
              <fieldset className="contact-demo__group">
                <legend className="contact-demo__group-label">About you</legend>
                <div className="contact-demo__row">
                  <label className="contact-demo__field">
                    <span>Full name{map.name.required ? ' *' : ''}</span>
                    <input
                      name={map.name.target}
                      type="text"
                      required={map.name.required}
                      placeholder={map.name.placeholder || 'Anna Svensson'}
                      autoComplete="name"
                    />
                    {errors[map.name.target] && (
                      <em className="field-error">{errors[map.name.target]}</em>
                    )}
                  </label>
                  <label className="contact-demo__field">
                    <span>Work email{map.email.required ? ' *' : ''}</span>
                    <input
                      name={map.email.target}
                      type="email"
                      required={map.email.required}
                      placeholder={map.email.placeholder || 'anna@company.com'}
                      autoComplete="email"
                    />
                    {errors[map.email.target] && (
                      <em className="field-error">{errors[map.email.target]}</em>
                    )}
                  </label>
                </div>

                <div className="contact-demo__row">
                  <label className="contact-demo__field">
                    <span>Company{map.company.required ? ' *' : ''}</span>
                    <input
                      name={map.company.target}
                      type="text"
                      required={map.company.required}
                      placeholder={map.company.placeholder || 'Company name'}
                      autoComplete="organization"
                    />
                    {errors[map.company.target] && (
                      <em className="field-error">{errors[map.company.target]}</em>
                    )}
                  </label>
                  <label className="contact-demo__field">
                    <span>
                      Phone <i>(optional)</i>
                    </span>
                    <input
                      name={map.phone.target}
                      type="tel"
                      placeholder={map.phone.placeholder || '+46 70 000 00 00'}
                      autoComplete="tel"
                    />
                    {errors[map.phone.target] && (
                      <em className="field-error">{errors[map.phone.target]}</em>
                    )}
                  </label>
                </div>
              </fieldset>

              <fieldset className="contact-demo__group">
                <legend className="contact-demo__group-label">Your operation</legend>
                <div className="contact-demo__fieldset">
                  <span className="contact-demo__chip-label" id="contact-demo-employees">
                    Employees working shifts
                  </span>
                  <div
                    className="contact-demo__chips"
                    role="group"
                    aria-labelledby="contact-demo-employees"
                  >
                    {map.employeeChips.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        className={`contact-demo__chip${employeeChip === chip ? ' is-on' : ''}`}
                        aria-pressed={employeeChip === chip}
                        onClick={() => setEmployeeChip(chip)}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                  {errors[map.employees.target] && (
                    <em className="field-error">{errors[map.employees.target]}</em>
                  )}
                </div>

                <div className="contact-demo__fieldset">
                  <span className="contact-demo__chip-label" id="contact-demo-industry">
                    Industry <i>(optional)</i>
                  </span>
                  <div
                    className="contact-demo__chips"
                    role="group"
                    aria-labelledby="contact-demo-industry"
                  >
                    {map.industryChips.map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        className={`contact-demo__chip${industryChip === chip ? ' is-on' : ''}`}
                        aria-pressed={industryChip === chip}
                        onClick={() => setIndustryChip(chip)}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                <label className="contact-demo__field contact-demo__field--full">
                  <span>What would you like to improve about employee scheduling?</span>
                  <textarea
                    name={map.challenges.target}
                    rows={3}
                    placeholder={
                      map.challenges.placeholder ||
                      'e.g. last-minute changes, overtime, labour rules, forecasting demand…'
                    }
                  />
                  {errors[map.challenges.target] && (
                    <em className="field-error">{errors[map.challenges.target]}</em>
                  )}
                </label>

                <label className="contact-demo__field contact-demo__field--full">
                  <span>
                    Which tools do you use today? <i>(optional)</i>
                  </span>
                  <input
                    name={map.tools.target}
                    type="text"
                    placeholder={
                      map.tools.placeholder ||
                      'e.g. Excel, an ERP system, another scheduling tool'
                    }
                  />
                </label>
              </fieldset>

              <label className="contact-demo__privacy">
                <input
                  type="checkbox"
                  checked={privacy}
                  onChange={(e) => setPrivacy(e.target.checked)}
                />
                <span>
                  I agree that Workofo may store my details to contact me about a demo.{' '}
                  <a href={privacyHref} className="contact-demo__privacy-link">
                    Privacy policy
                  </a>
                </span>
              </label>
              {errors.privacy && <em className="field-error">{errors.privacy}</em>}

              {formError && <p className="form-error">{formError}</p>}

              <button
                className="btn btn--primary btn--cta contact-demo__submit"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? ui('formSending', locale) : 'Book my demo'}
              </button>
              <p className="contact-demo__footnote">
                We respond within one working day. No commitment.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
