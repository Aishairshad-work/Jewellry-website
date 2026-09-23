import React, { useState, useEffect, useRef } from 'react';
import logo from '../../assets/Logo-black.png';

/**
 * Silver Haus Preloader
 *
 * - Shows only once per browser session (sessionStorage flag)
 * - Handles React.StrictMode double-mount gracefully
 * - Animates logo fade+rise, thin progress line with shimmer, ring outline
 * - Exits with a graceful upward fade after ~1.7s
 * - Fully respects prefers-reduced-motion
 */

const SESSION_KEY = 'sh_preloader_shown';

export const Preloader: React.FC = () => {
  // Check sessionStorage synchronously during render (before first paint)
  // so the preloader never flickers if it shouldn't show.
  const shouldShow = useRef(!sessionStorage.getItem(SESSION_KEY));
  const [phase, setPhase] = useState<'enter' | 'exit' | 'done'>(
    shouldShow.current ? 'enter' : 'done'
  );

  useEffect(() => {
    if (!shouldShow.current) return;

    // Mark as shown immediately
    sessionStorage.setItem(SESSION_KEY, '1');

    // Sequence:
    //  0ms   — enter (logo + ring fade in, line progresses)
    // 1500ms — begin exit transition
    // 1950ms — mark as done (remove from DOM)
    const exitTimer = setTimeout(() => setPhase('exit'), 1500);
    const doneTimer = setTimeout(() => setPhase('done'), 1950);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`sh-preloader ${phase === 'exit' ? 'sh-preloader--exit' : ''}`}
      aria-hidden="true"
      role="presentation"
    >
      {/* Subtle ring / gemstone halo behind logo */}
      <div className="sh-preloader__ring-wrap">
        <div className="sh-preloader__ring sh-preloader__ring--outer" />
        <div className="sh-preloader__ring sh-preloader__ring--inner" />

        {/* Logo */}
        <div className="sh-preloader__logo-wrap">
          <img
            src={logo}
            alt="Silver Haus"
            className="sh-preloader__logo"
            draggable={false}
          />
        </div>
      </div>

      {/* Loading bar */}
      <div className="sh-preloader__bar-track">
        <div className="sh-preloader__bar-fill">
          <div className="sh-preloader__bar-shimmer" />
        </div>
      </div>

      {/* Micro caption */}
      <p className="sh-preloader__caption">Crafted in Karachi</p>
    </div>
  );
};
