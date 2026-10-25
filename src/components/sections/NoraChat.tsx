import { useEffect, useRef, useState } from 'react';

const MSG = 'Ellen is sick tomorrow, register it and find someone for her shift';

const SparkIcon = ({ size = 18, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
    <path d="M19 15l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
  </svg>
);

export default function NoraChat() {
  const [step, setStep] = useState(0);
  const [typed, setTyped] = useState('');
  const [sendPressed, setSendPressed] = useState(false);
  const [curPress, setCurPress] = useState(false);
  const [curHidden, setCurHidden] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);
  const sendRef = useRef<HTMLSpanElement>(null);
  const chipARef = useRef<HTMLSpanElement>(null);
  const btnARef = useRef<HTMLSpanElement>(null);
  const curRef = useRef<HTMLDivElement>(null);
  const timersRef = useRef<number[]>([]);

  useEffect(() => {
    const root = rootRef.current;
    const send = sendRef.current;
    const chipA = chipARef.current;
    const btnA = btnARef.current;
    const cur = curRef.current;
    if (!root || !send || !chipA || !btnA || !cur) return;

    const clearTimers = () => {
      timersRef.current.forEach((id) => window.clearTimeout(id));
      timersRef.current = [];
    };

    const at = (ms: number, fn: () => void) => {
      timersRef.current.push(window.setTimeout(fn, ms));
    };

    const pos = (el: HTMLElement, fx: number, fy: number) => {
      const r = el.getBoundingClientRect();
      const W = root.getBoundingClientRect();
      return { x: r.left - W.left + r.width * fx, y: r.top - W.top + r.height * fy };
    };

    const moveTo = (el: HTMLElement, fx: number, fy: number) => {
      const p = pos(el, fx, fy);
      cur.style.left = `${p.x}px`;
      cur.style.top = `${p.y}px`;
    };

    const park = () => {
      cur.style.left = '78%';
      cur.style.top = '108%';
    };

    const click = (el: HTMLElement, fx: number, fy: number) => {
      const p = pos(el, fx, fy);
      setCurPress(true);
      const rip = document.createElement('span');
      rip.className = 'nora-chat__rip';
      rip.style.left = `${p.x}px`;
      rip.style.top = `${p.y}px`;
      root.appendChild(rip);
      at(180, () => setCurPress(false));
      at(600, () => rip.remove());
    };

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      setStep(10);
      setCurHidden(true);
      return;
    }

    const run = () => {
      clearTimers();
      setStep(0);
      setTyped('');
      setSendPressed(false);
      setCurPress(false);
      park();
      let t = 1200;
      for (let i = 0; i < MSG.length; i++) {
        const n = i;
        at(t + n * 42, () => setTyped(MSG.slice(0, n + 1)));
      }
      t += MSG.length * 42 + 200;
      at(t - 500, () => moveTo(send, 0.5, 0.55));
      at((t += 900), () => {
        click(send, 0.5, 0.55);
        setSendPressed(true);
      });
      at((t += 220), () => {
        setSendPressed(false);
        setTyped('');
        setStep(1);
      });
      at((t += 300), park);
      at((t += 400), () => setStep(2));
      at((t += 1400), () => setStep(3));
      at((t += 1500), () => moveTo(chipA, 0.45, 0.55));
      at((t += 900), () => {
        click(chipA, 0.45, 0.55);
        setStep(4);
      });
      at((t += 700), () => setStep(5));
      at((t += 300), park);
      at((t += 400), () => setStep(6));
      at((t += 1500), () => setStep(7));
      at((t += 2800), () => moveTo(btnA, 0.4, 0.55));
      at((t += 1000), () => {
        click(btnA, 0.4, 0.55);
        setStep(8);
      });
      at((t += 700), () => {
        setStep(9);
        park();
      });
      at((t += 1300), () => setStep(10));
      at((t += 6500), run);
    };

    run();
    return clearTimers;
  }, []);

  const on = (from: number) => step >= from;
  const typingOn = step === 2 || step === 6 || step === 9;
  const typingInput = typed.length > 0;

  return (
    <div
      ref={rootRef}
      className="nora-chat"
      role="img"
      aria-label="Animated example: a manager asks Nora, Workofo's AI assistant, to register a sick day for Ellen and find cover. Nora asks which absence type, registers it, opens the shift and suggests colleagues who can take it."
    >
      <div className="nora-chat__header" aria-hidden="true">
        <span className="nora-chat__spark">
          <SparkIcon />
        </span>
        <span className="nora-chat__stack">
          <span className="nora-chat__title">
            Nora <span className="nora-chat__ver">v0.5</span>
          </span>
          <span className="nora-chat__meta">Using Team 1 - October 2026 - monthly schedule</span>
        </span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A4F57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 9l6 6 6-6" />
        </svg>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#4A4F57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </div>

      <div className="nora-chat__feed" aria-hidden="true">
        <span className="nora-chat__who">Nora</span>
        <div className="nora-chat__bn">
          Hi, I&apos;m Nora, Workofo&apos;s AI assistant. Tell me what you need in Workofo, and I&apos;ll help you resolve it or get it to the right person.
        </div>

        <div className={`nora-chat__grow${on(1) ? ' is-on' : ''}`}>
          <div className="nora-chat__gi" style={{ alignItems: 'flex-end' }}>
            <div className="nora-chat__bu">Ellen is sick tomorrow, register it and find someone for her shift</div>
          </div>
        </div>

        <div className={`nora-chat__grow${on(3) ? ' is-on' : ''}`}>
          <div className="nora-chat__gi">
            <span className="nora-chat__who">Nora</span>
            <div className="nora-chat__bn">Which absence should I register for Ellen Ek?</div>
          </div>
        </div>

        <div className={`nora-chat__grow${on(3) ? ' is-on' : ''}`}>
          <div className="nora-chat__gi">
            <div className="nora-chat__card">
              <div className="nora-chat__ct">
                <SparkIcon size={16} color="#1E8BA0" />
                Which absence should I register for Ellen Ek?
              </div>
              <div className="nora-chat__chips">
                <span ref={chipARef} className={`nora-chat__chip${on(4) ? ' is-pressed' : ''}`}>
                  Sick page A
                </span>
                <span className="nora-chat__chip">Sick page B</span>
                <span className="nora-chat__other">Other</span>
              </div>
            </div>
          </div>
        </div>

        <div className={`nora-chat__grow${on(5) ? ' is-on' : ''}`}>
          <div className="nora-chat__gi" style={{ alignItems: 'flex-end' }}>
            <div className="nora-chat__bu">Sick page A</div>
          </div>
        </div>

        <div className={`nora-chat__grow${on(7) ? ' is-on' : ''}`}>
          <div className="nora-chat__gi">
            <span className="nora-chat__who">Nora</span>
            <div className="nora-chat__bn">
              Ellen Ek works 09:00-17:00 at Bar on Sat 17 Oct. 4 colleagues can take it. Approve below to register Sick page A and open the shift.
            </div>
          </div>
        </div>

        <div className={`nora-chat__grow${on(7) ? ' is-on' : ''}`}>
          <div className="nora-chat__gi">
            <div className="nora-chat__card nora-chat__card--green">
              <div className="nora-chat__ct">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3F8F55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12h12M12 6l6 6-6 6M20 5v14" />
                </svg>
                Cover Ellen Ek&apos;s shift
              </div>
              <div className="nora-chat__blk">
                <div>Current holder: Ellen Ek</div>
                <div className="nora-chat__blk-title">Sat 17 Oct, 09:00-17:00</div>
                <div>Bar, Team 1, Actual schedule</div>
              </div>
              <div className="nora-chat__note">
                <b>Sick page A will be registered for Ellen Ek, full day.</b>
              </div>
              <div className="nora-chat__suggest">
                <span className="nora-chat__suggest-names">Linnea Berg, Mattias Lund, Ellen Karlsson, Sara Holm</span>
                <span className="nora-chat__pillg">4 can take it</span>
              </div>
              <div className="nora-chat__act">
                <b>Register Sick page A and open the shift</b>
                <span>The shift becomes an open shift in Team 1. Nobody is notified yet.</span>
                <span ref={btnARef} className={`nora-chat__wbtn${on(8) ? ' is-pressed' : ''}`}>
                  Register Sick page A and open the shift
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={`nora-chat__grow${on(10) ? ' is-on' : ''}`}>
          <div className="nora-chat__gi">
            <span className="nora-chat__who">Nora</span>
            <div className="nora-chat__bn">
              Done. Sick page A is registered for Ellen Ek and the shift is now open. Choose who gets the offer.
            </div>
            <div className="nora-chat__card nora-chat__card--green">
              <div className="nora-chat__ct">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3F8F55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M8 12l3 3 5-6" />
                </svg>
                Sick page A registered, shift opened
              </div>
              <div className="nora-chat__row">
                <span>Absence</span>
                <b>Ellen Ek, Sick page A, Sat 17 Oct</b>
              </div>
              <div className="nora-chat__row">
                <span>Shift</span>
                <b>Open shift, Sat 17 Oct, 09:00-17:00, Bar</b>
              </div>
              <div className="nora-chat__row">
                <span>Suggested</span>
                <b>Linnea Berg, Mattias Lund, Ellen Karlsson</b>
              </div>
              <div className="nora-chat__chips nora-chat__chips--actions">
                <span className="nora-chat__wbtn">Choose who gets the offer</span>
                <span className="nora-chat__obtn">Open in schedule</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`nora-chat__typing${typingOn ? ' is-on' : ''}`} aria-hidden="true">
        <span className="nora-chat__dots">
          <span />
          <span />
          <span />
        </span>
        Nora is typing
      </div>

      <div className="nora-chat__footer" aria-hidden="true">
        <div className={`nora-chat__input${typingInput ? ' is-typing' : ''}`}>
          <span className="nora-chat__ph">Ask Nora...</span>
          <span className="nora-chat__typed">{typed}</span>
          <span className="nora-chat__caret" />
        </div>
        <span
          ref={sendRef}
          className={`nora-chat__send${typingInput || sendPressed ? ' is-on' : ''}${sendPressed ? ' is-pressed' : ''}`}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M3 20l18-8L3 4v6l12 2-12 2z" />
          </svg>
        </span>
      </div>

      {!curHidden && (
        <div ref={curRef} className={`nora-chat__cur${curPress ? ' is-press' : ''}`} aria-hidden="true">
          <svg viewBox="0 0 22 22">
            <path
              d="M3 2 L3 18 L7.2 14.2 L10 20.5 L12.8 19.3 L10.1 13.1 L15.8 13.1 Z"
              fill="#111111"
              stroke="#FFFFFF"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      )}
    </div>
  );
}
