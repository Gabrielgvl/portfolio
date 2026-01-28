import { animate, inView, stagger } from 'motion';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const canAnimate = typeof animate === 'function' && typeof inView === 'function';
  const hideForReveal = (element: HTMLElement) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(16px)';
  };
  const revealAll = () => {
    document.querySelectorAll<HTMLElement>('.section-header, .reveal-item').forEach((el) => {
      if (el.dataset.animated) return;
      el.style.opacity = '1';
      el.style.transform = 'none';
    });
  };

  if (canAnimate) {
    document.querySelectorAll<HTMLElement>('.section-header').forEach(hideForReveal);
    document.querySelectorAll<HTMLElement>('.reveal-item').forEach(hideForReveal);
  }

  window.setTimeout(revealAll, 1800);

  if (canAnimate && document.querySelector('.hero-badge')) {
    animate(
      [
        ['.hero-badge', { opacity: [0, 1], y: [20, 0] }],
        ['.hero-headline', { opacity: [0, 1], y: [30, 0] }, { delay: 0.1 }],
        ['.hero-ctas', { opacity: [0, 1], y: [20, 0] }, { delay: 0.2 }],
        ['.company-logo', { opacity: [0, 0.6], y: [10, 0] }, { delay: stagger(0.08) }],
      ],
      { duration: 0.6, easing: 'ease-out' }
    );
  }

  if (!canAnimate) {
    revealAll();
  } else {
    try {
      inView(
        '.section-header',
        ({ target }) => {
          if (target instanceof HTMLElement && target.dataset.animated) return;
          if (target instanceof HTMLElement) target.dataset.animated = 'true';
          animate(target, { opacity: [0, 1], y: [16, 0] }, { duration: 0.5, easing: 'ease-out' });
        },
        { margin: '-10% 0px' }
      );

      inView(
        '.reveal-group',
        ({ target }) => {
          if (!(target instanceof HTMLElement)) return;
          if (target.dataset.animated) return;
          target.dataset.animated = 'true';
          const items = target.querySelectorAll('.reveal-item');
          animate(items, { opacity: [0, 1], y: [16, 0] }, {
            duration: 0.5,
            delay: stagger(0.08),
            easing: 'ease-out',
          });
        },
        { margin: '-10% 0px' }
      );

      inView(
        '.metric-value',
        ({ target }) => {
          if (!(target instanceof HTMLElement)) return;
          if (target.dataset.animated) return;
          target.dataset.animated = 'true';
          const raw = target.dataset.value;
          if (!raw) return;
          const value = Number(raw);
          if (Number.isNaN(value)) return;
          const prefix = target.dataset.prefix ?? '';
          const suffix = target.dataset.suffix ?? '';
          const hasDecimals = !Number.isInteger(value);

          animate(0, value, {
            duration: 1.1,
            easing: 'ease-out',
            onUpdate: (latest) => {
              const formatted = hasDecimals ? latest.toFixed(1) : Math.round(latest).toString();
              target.textContent = `${prefix}${formatted}${suffix}`;
            },
          });
        },
        { margin: '-20% 0px' }
      );
    } catch (error) {
      console.warn('Scroll animation setup failed.', error);
      revealAll();
    }
  }
}
