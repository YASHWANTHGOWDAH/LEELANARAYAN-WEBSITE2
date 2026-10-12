import React, { useMemo } from 'react';

export default function MusicalBackground() {
  // STRICT ONLY symbols: ♩ ♪ ♫ ♬ ♭ ♮ ♯ 𝄞
  const allowedSymbols = useMemo(() => [
    '♩', '♪', '♫', '♬', '♭', '♮', '♯', '𝄞'
  ], []);

  // Light, elegant color palette harmonized with the website's warm cream & gold background
  const lightColorThemes = useMemo(() => [
    {
      style: {
        color: '#C5A059', // Classic Indian gold
        filter: 'drop-shadow(0 2px 4px rgba(197, 160, 89, 0.28))'
      }
    },
    {
      style: {
        color: '#D4AF37', // Pale champagne gold
        filter: 'drop-shadow(0 2px 4px rgba(212, 175, 55, 0.28))'
      }
    },
    {
      style: {
        color: '#B38F38', // Antique warm gold
        filter: 'drop-shadow(0 2px 4px rgba(179, 143, 56, 0.28))'
      }
    },
    {
      style: {
        color: '#C79883', // Soft rose-gold / sandalwood
        filter: 'drop-shadow(0 2px 4px rgba(199, 152, 131, 0.25))'
      }
    },
    {
      style: {
        color: '#DEB887', // Light burlywood / warm cream
        filter: 'drop-shadow(0 2px 4px rgba(222, 184, 135, 0.28))'
      }
    },
    {
      style: {
        color: '#B89758', // Muted bronze gold
        filter: 'drop-shadow(0 2px 4px rgba(184, 151, 88, 0.28))'
      }
    },
    {
      style: {
        color: '#CCA552', // Soft saffron gold
        filter: 'drop-shadow(0 2px 4px rgba(204, 165, 82, 0.28))'
      }
    },
    {
      style: {
        color: '#A88344', // Warm tan gold
        filter: 'drop-shadow(0 2px 4px rgba(168, 131, 68, 0.25))'
      }
    },
  ], []);

  // 32 particles for a seamless, continuous stream flowing from bottom to top
  const notes = useMemo(() => {
    const totalParticles = 32;
    return Array.from({ length: totalParticles }, (_, index) => {
      const symbol = allowedSymbols[index % allowedSymbols.length];
      const theme = lightColorThemes[index % lightColorThemes.length];

      // Evenly distribute horizontally across the full viewport width
      const leftPercent = ((index * 3.125 + (index % 3) * 1.5) % 94) + 2.5;
      
      // Duration between 14s and 19s for a graceful, steady upward glide
      const duration = 14 + (index % 6) * 1.0; 

      // Uniformly distributed negative delays so particles fill the full vertical height at all times
      const delay = (index / totalParticles) * duration;
      
      const sizeRem = 1.35 + (index % 5) * 0.35; // 1.35rem to 2.75rem
      const isAlt = index % 2 === 1;

      return {
        id: index,
        symbol,
        style: {
          left: `${leftPercent}%`,
          fontSize: `${sizeRem}rem`,
          animationDuration: `${duration}s`,
          animationDelay: `-${delay}s`,
          ...theme.style,
        },
        animationClass: isAlt ? 'animate-music-float-alt' : 'animate-music-float',
      };
    });
  }, [allowedSymbols, lightColorThemes]);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden z-20 select-none"
    >
      {notes.map((note) => (
        <span
          key={note.id}
          className={`absolute top-0 font-serif font-semibold select-none ${note.animationClass}`}
          style={note.style}
        >
          {note.symbol}
        </span>
      ))}
    </div>
  );
}
