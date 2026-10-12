import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef(null);
  const intervalRef = useRef(null);

  // Check session storage preference
  useEffect(() => {
    const savedPref = sessionStorage.getItem('leela_music_pref');
    if (savedPref === 'enabled') {
      // Don't auto-start audio without user interaction to respect browser policy
    }
  }, []);

  const startTanpuraSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }

      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }

      const ctx = audioCtxRef.current;
      // Frequencies for C# (Sa - Pa tanpura tuning: Sa=138.59Hz, Pa=207.65Hz, Sa_high=277.18Hz)
      const notes = [207.65, 277.18, 277.18, 138.59]; // Pa, Sa(high), Sa(high), Sa(base)
      let currentNoteIndex = 0;

      const pluckString = () => {
        if (!ctx || ctx.state === 'closed') return;
        const freq = notes[currentNoteIndex];
        currentNoteIndex = (currentNoteIndex + 1) % notes.length;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        // Warm harmonic tone
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        // Soft plucked envelope
        const now = ctx.currentTime;
        gain.gain.setValueAtTime(0.001, now);
        gain.gain.linearRampToValueAtTime(0.08, now + 0.1);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now);
        osc.stop(now + 2.3);
      };

      pluckString();
      intervalRef.current = setInterval(pluckString, 1200);
      setIsPlaying(true);
      sessionStorage.setItem('leela_music_pref', 'enabled');
    } catch (e) {
      console.warn("Audio playback not supported or blocked", e);
    }
  };

  const stopTanpuraSound = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (audioCtxRef.current) {
      audioCtxRef.current.suspend();
    }
    setIsPlaying(false);
    sessionStorage.setItem('leela_music_pref', 'disabled');
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopTanpuraSound();
    } else {
      startTanpuraSound();
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={toggleMusic}
        aria-label="Toggle Background Music"
        className={`flex items-center gap-2 px-4 py-2.5 rounded-full shadow-lg border transition-all duration-300 font-medium text-xs sm:text-sm backdrop-blur-md ${
          isPlaying
            ? 'bg-maroon-800 text-gold-400 border-gold-500/50 shadow-maroon-900/30 animate-pulse'
            : 'bg-white/90 text-stone-700 border-stone-200 hover:bg-cream-100 hover:border-gold-400'
        }`}
      >
        <Music className={`w-4 h-4 ${isPlaying ? 'animate-spin' : ''}`} />
        <span>{isPlaying ? '🎵 Tanpura Music: ON' : '🎵 Music On / Off'}</span>
        {isPlaying ? (
          <Volume2 className="w-4 h-4 text-gold-400" />
        ) : (
          <VolumeX className="w-4 h-4 text-stone-400" />
        )}
      </button>
    </div>
  );
}
