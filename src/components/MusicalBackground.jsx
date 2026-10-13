import React, { useEffect, useState } from 'react';

const SYMBOLS = ['♩', '♪', '♫', '♬', '𝄞', '♪', '♫', '♩'];

const COLORS = [
  'rgba(212,175,55,0.85)',
  'rgba(184,134,11,0.80)',
  'rgba(197,160,89,0.85)',
  'rgba(180,140,60,0.78)',
  'rgba(204,165,82,0.82)',
  'rgba(220,190,100,0.85)',
  'rgba(150,120,80,0.75)',
  'rgba(212,175,55,0.80)',
];

const ANIM_CLASSES = ['anim-rise-left', 'anim-rise-right', 'anim-rise-center'];

const PARTICLES = [
  { left:  6, size: 1.8, delay: 0.0, duration: 3.5, anim: 0 },
  { left: 18, size: 2.4, delay: 0.4, duration: 4.0, anim: 1 },
  { left: 32, size: 1.5, delay: 0.7, duration: 3.2, anim: 2 },
  { left: 47, size: 2.8, delay: 1.0, duration: 4.2, anim: 0 },
  { left: 60, size: 1.6, delay: 0.5, duration: 3.6, anim: 1 },
  { left: 74, size: 2.2, delay: 1.2, duration: 3.8, anim: 2 },
  { left: 85, size: 1.9, delay: 0.2, duration: 3.4, anim: 0 },
  { left: 93, size: 1.4, delay: 0.8, duration: 3.7, anim: 1 },
];

const CLEANUP_AFTER_MS = 6200;

let hasPlayedThisLoad = false;

export default function MusicalBackground() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || hasPlayedThisLoad) return;

    hasPlayedThisLoad = true;
    setVisible(true);

    const timer = setTimeout(() => setVisible(false), CLEANUP_AFTER_MS);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      role="presentation"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        /* isolate layer so browser promotes it to its own compositor layer */
        contain: 'strict',
        willChange: 'transform',
      }}
    >
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className={`musical-symbol ${ANIM_CLASSES[p.anim]}`}
          style={{
            left: `${p.left}%`,
            fontSize: `${p.size}rem`,
            color: COLORS[i % COLORS.length],
            /* NO filter/box-shadow — those break GPU compositing */
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {SYMBOLS[i]}
        </span>
      ))}
    </div>
  );
}
