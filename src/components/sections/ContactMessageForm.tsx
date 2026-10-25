import { useState, type FormEvent } from 'react';
import { DEMO_FORM_ID } from '../../lib/config';
import { ui, type Locale } from '../../lib/locales';
import { localePath } from '../../lib/paths';

const TOPICS = [
  'General question',
  'Partnership',
  'Press',
  'Support',
  'Other',
] as const;

type Props = {
  locale?: Locale;
  formId?: string;
  demoHref: string;
};

/**
 * Contact page message form — posts to /api/demo-form.
 * Maps name/email/company; topic + message go into the challenges/message field.
 */
export default function ContactMessageForm({
  locale = 'en',
  formId,
  demoHref,
}: Props) {
  const resolvedFormId = formId || DEMO_FORM_ID;
  const privacyHref = localePath(locale, '/privacy');
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>('General question');
  const [privacy, setPrivacy] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState('');

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormError('');
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get('first_name') ?? '').trim();
    const email = String(fd.get('email') ?? '').trim();
    const company = String(fd.get('company') ?? '').trim();
    const message = String(fd.get('message') ?? '').trim();

    const nextErrors: Record<string, string> = {};
    if (!name) nextErrors.first_name = 'Full name is required.';
    if (!email) {
      nextErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!message) nextErrors.message = 'Message is required.';
    if (!privacy) {
      nextErrors.privacy = 'Please agree so we can answer your message.';
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    if (!resolvedFormId) {
      setFormError('Message form is not configured yet. Email us at contact@workofo.com.');
      setStatus('error');
      return;
    }

    const submissions: Record<string, string> = {
      first_name: name,
      email,
      company,
      message: `Topic: ${topic}\n\n${message}`,
    };

    setStatus('loading');
    try {
      const res = await fetch('/api/demo-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formId: resolvedFormId, submissions }),
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
      setTopic('General question');
    } catch {
      setFormError(ui('formNetwork', locale));
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="contact-page__form-success" data-reveal>
        <p className="t-overline">Message sent</p>
        <h3>{ui('formSuccess', locale)}</h3>
      </div>
    );
  }

  return (
    <form className="contact-page__form" onSubmit={onSubmit} noValidate>
      <div className="contact-page__field">
        <span className="contact-page__label">What is it about?</span>
        <div className="contact-demo__chips" role="group" aria-label="Topic">
          {TOPICS.map((chip) => (
            <button
              key={chip}
              type="button"
              className={`contact-demo__chip${topic === chip ? ' is-on' : ''}`}
              aria-pressed={topic === chip}
              onClick={() => setTopic(chip)}
            >
              {chip}
            </button>
          ))}
        </div>
      </div>

      <div className="contact-page__form-row">
        <label className="contact-page__field">
          <span className="contact-page__label">Full name</span>
          <input
            name="first_name"
            type="text"
            required
            placeholder="Anna Svensson"
            autoComplete="name"
          />
          {errors.first_name && <em className="field-error">{errors.first_name}</em>}
        </label>
        <label className="contact-page__field">
          <span className="contact-page__label">Email</span>
          <input
            name="email"
            type="email"
            required
            placeholder="anna@company.com"
            autoComplete="email"
          />
          {errors.email && <em className="field-error">{errors.email}</em>}
        </label>
      </div>

      <label className="contact-page__field">
        <span className="contact-page__label">
          Company <i>(optional)</i>
        </span>
        <input
          name="company"
          type="text"
          placeholder="Company name"
          autoComplete="organization"
        />
      </label>

      <label className="contact-page__field">
        <span className="contact-page__label">Message</span>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="How can we help?"
        />
        {errors.message && <em className="field-error">{errors.message}</em>}
      </label>

      <label className="contact-demo__privacy">
        <input
          type="checkbox"
          checked={privacy}
          onChange={(e) => setPrivacy(e.target.checked)}
        />
        <span>
          I agree that Workofo may store my details to answer my message.{' '}
          <a href={privacyHref} className="contact-demo__privacy-link">
            Privacy policy
          </a>
        </span>
      </label>
      {errors.privacy && <em className="field-error">{errors.privacy}</em>}

      {formError && <p className="form-error">{formError}</p>}

      <button
        className="btn btn--primary btn--cta contact-page__submit"
        type="submit"
        disabled={status === 'loading'}
      >
        {status === 'loading' ? ui('formSending', locale) : 'Send message'}
      </button>

      <p className="contact-page__form-note">
        Looking for a demo?{' '}
        <a href={demoHref}>Book one here</a>
      </p>
    </form>
  );
}
