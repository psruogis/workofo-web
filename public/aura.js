/**
 * Aura motion on existing Wix/Astro stack — no new framework.
 * Same engine on every route: data-split (word reveal) + data-reveal (section fade).
 */
(function () {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  /** @type {IntersectionObserver | null} */
  let revealIo = null;
  const observedReveal = new WeakSet();

  const header = document.querySelector('[data-site-header]');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /** Desktop header hover menus (901px+). Mobile uses drawer + tap accordion. */
  (function setupHeaderHoverMenus() {
    const DROPDOWN_SEL = 'details.nav-dropdown, details.lang-dropdown';
    const OPEN_MS = 80;
    const CLOSE_MS = 140;
    const desktopMq = window.matchMedia('(min-width: 901px)');
    /** After touch, ignore synthetic mouseenter until a real mouse move. */
    let touchQuiet = false;

    function allDropdowns() {
      return Array.from(document.querySelectorAll(DROPDOWN_SEL));
    }

    function closeOthers(except) {
      allDropdowns().forEach((el) => {
        if (el !== except) el.open = false;
      });
    }

    function canHoverOpen() {
      return desktopMq.matches && !touchQuiet;
    }

    document.addEventListener(
      'touchstart',
      () => {
        touchQuiet = true;
      },
      { passive: true },
    );
    document.addEventListener(
      'mousemove',
      () => {
        touchQuiet = false;
      },
      { passive: true },
    );

    allDropdowns().forEach((details) => {
      let openTimer = 0;
      let closeTimer = 0;

      const clearTimers = () => {
        window.clearTimeout(openTimer);
        window.clearTimeout(closeTimer);
      };

      details.addEventListener('mouseenter', () => {
        if (!canHoverOpen()) return;
        clearTimers();
        openTimer = window.setTimeout(() => {
          closeOthers(details);
          details.open = true;
        }, OPEN_MS);
      });

      details.addEventListener('mouseleave', () => {
        if (!desktopMq.matches) return;
        clearTimers();
        closeTimer = window.setTimeout(() => {
          details.open = false;
        }, CLOSE_MS);
      });

      details.addEventListener('toggle', () => {
        if (details.open) closeOthers(details);
      });
    });

    document.addEventListener('pointerdown', (e) => {
      if (!desktopMq.matches) return;
      const t = e.target;
      if (!(t instanceof Node)) return;
      allDropdowns().forEach((el) => {
        if (el.open && !el.contains(t)) el.open = false;
      });
    });
  })();

  /** Mobile full-screen nav drawer */
  (function setupMobileNav() {
    const toggle = document.querySelector('[data-nav-toggle]');
    const panel = document.querySelector('[data-mobile-nav]');
    const closeBtn = document.querySelector('[data-nav-close]');
    if (!(toggle instanceof HTMLElement) || !(panel instanceof HTMLElement)) return;

    const setOpen = (open) => {
      panel.hidden = !open;
      panel.setAttribute('aria-hidden', open ? 'false' : 'true');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('nav-open', open);
      toggle.classList.toggle('is-open', open);
    };

    toggle.addEventListener('click', () => {
      setOpen(panel.hidden);
    });
    if (closeBtn instanceof HTMLElement) {
      closeBtn.addEventListener('click', () => setOpen(false));
    }
    panel.addEventListener('click', (e) => {
      if (e.target === panel) setOpen(false);
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !panel.hidden) setOpen(false);
    });
    window.matchMedia('(min-width: 901px)').addEventListener('change', (e) => {
      if (e.matches) setOpen(false);
    });
  })();

  function splitEl(el, blockIndex) {
    if (el.querySelector('.aura-word')) return;
    const text = el.textContent || '';
    const words = text.trim().split(/\s+/).filter(Boolean);
    if (!words.length) return;
    el.textContent = '';
    words.forEach((word, i) => {
      const span = document.createElement('span');
      span.className = 'aura-word';
      span.style.animationDelay = `${blockIndex * 80 + i * 55}ms`;
      if (reduce) {
        span.style.animation = 'none';
        span.style.opacity = '1';
        span.style.filter = 'none';
        span.style.transform = 'none';
      }
      span.textContent = word;
      el.appendChild(span);
      if (i < words.length - 1) el.appendChild(document.createTextNode(' '));
    });
  }

  function splitAll() {
    document.querySelectorAll('[data-split]').forEach((el, blockIndex) => {
      splitEl(el, blockIndex);
    });
  }

  function ensureRevealObserver() {
    if (reduce || revealIo) return revealIo;
    revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            revealIo.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    return revealIo;
  }

  function revealAll() {
    const revealEls = document.querySelectorAll('[data-reveal]');
    if (!revealEls.length) return;
    if (reduce) {
      revealEls.forEach((el) => el.classList.add('is-in'));
      return;
    }
    const io = ensureRevealObserver();
    revealEls.forEach((el) => {
      if (el.classList.contains('is-in') || observedReveal.has(el)) return;
      observedReveal.add(el);
      io.observe(el);
    });
  }

  function refresh() {
    splitAll();
    revealAll();
  }

  refresh();

  // Catch Astro client:load / React hydration that rewrites markup after first paint.
  window.setTimeout(refresh, 0);
  window.setTimeout(refresh, 120);
  window.addEventListener('load', refresh, { once: true });

  if (typeof MutationObserver !== 'undefined') {
    const mo = new MutationObserver(() => {
      window.clearTimeout(mo._t);
      mo._t = window.setTimeout(refresh, 40);
    });
    mo.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-split', 'data-reveal'],
    });
  }

  window.__workofoAura = { refresh };

  const parallax = document.querySelector('[data-parallax]');
  if (parallax && !reduce) {
    const onParallax = () => {
      const rect = parallax.getBoundingClientRect();
      const view = window.innerHeight || 1;
      const progress = 1 - Math.min(Math.max(rect.bottom / (view + rect.height), 0), 1);
      parallax.style.backgroundPosition = `center ${40 + progress * 4}%`;
      parallax.style.transform = `translate3d(0, ${progress * 18}px, 0)`;
    };
    onParallax();
    window.addEventListener('scroll', onParallax, { passive: true });
  }

  const stacks = Array.from(document.querySelectorAll('[data-stack]'));
  function stackScroll() {
    if (!stacks.length) return;
    const vh = window.innerHeight;
    stacks.forEach((card) => {
      const r = card.getBoundingClientRect();
      const denom = Math.max(r.height - vh * 0.8, 1);
      let t = -r.top / denom;
      t = Math.min(Math.max(t, 0), 1);
      card.style.transform = `scale(${1 - t * 0.08})`;
      card.style.filter = `blur(${t * 4}px)`;
      card.style.opacity = String(1 - t * 0.35);
    });
  }
  if (stacks.length && !reduce) {
    stackScroll();
    window.addEventListener('scroll', stackScroll, { passive: true });
    window.addEventListener('resize', stackScroll);
  }

  document.querySelectorAll('[data-marquee]').forEach((track) => {
    if (reduce) return;
    const duration = Number(track.getAttribute('data-duration') || 28) * 1000;
    const parent = track.parentElement;
    if (!parent) return;
    const clone = track.cloneNode(true);
    parent.appendChild(clone);
    parent.style.display = 'flex';
    parent.style.width = 'max-content';
    parent.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-50%)' }], {
      duration,
      iterations: Infinity,
      easing: 'linear',
    });
  });
})();
