import React from 'react';
import { UserPlus, Sparkles, ArrowRight, Music, Mic, Heart } from 'lucide-react';

export default function HeroSection({ artistInfo, onOpenRegister, onNavigate }) {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:py-0 lg:min-h-screen flex items-center bg-cream-50 overflow-hidden">
      {/* Background Indian classical ornamental accents */}
      <div className="absolute inset-0 bg-mandala pointer-events-none opacity-40"></div>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-maroon-800/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left pt-6 lg:pt-0">
            {/* Artist Tag Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-100 border border-gold-400/40 text-maroon-900 shadow-sm text-xs sm:text-sm font-semibold tracking-wide">
              <Sparkles className="w-4 h-4 text-gold-500 animate-pulse" />
              <span>{artistInfo.shortTitle || "Carnatic Vocalist | Music Educator | Performer | Anchor"}</span>
            </div>

            {/* Main Title */}
            <div>
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-maroon-900 leading-[1.1]">
                LEELA NARAYAN
              </h1>
              <p className="mt-3 font-serif italic text-xl sm:text-2xl lg:text-3xl text-gold-700 font-medium">
                {artistInfo.heroHeadline || "Where Music Meets Tradition, Confidence & Expression."}
              </p>
            </div>

            {/* Description */}
            <p className="text-stone-700 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              “{artistInfo.heroSubheadline || "Empowering learners through Carnatic music, devotional music, performance training and the joy of singing."}”
            </p>

            {/* Sub-tagline */}
            <p className="text-xs sm:text-sm text-stone-500 font-medium tracking-wide border-l-2 border-gold-400 pl-3 italic hidden sm:block">
              {artistInfo.heroTagline}
            </p>

            {/* Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenRegister}
                className="w-full sm:w-auto px-8 py-4 rounded-full maroon-gradient-bg text-gold-400 border border-gold-400 font-bold text-base shadow-xl hover:shadow-maroon-900/30 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <UserPlus className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Join Music Classes</span>
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-stone-800 border border-stone-300 hover:border-gold-500 font-semibold text-base shadow-sm hover:bg-cream-100 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore My Journey</span>
                <ArrowRight className="w-4 h-4 text-maroon-800 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Highlights Pills */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
              <div className="p-3 rounded-xl bg-white/70 border border-gold-400/20 backdrop-blur-sm">
                <div className="text-maroon-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                  <Music className="w-3.5 h-3.5 text-gold-500" /> Carnatic
                </div>
                <div className="text-[11px] text-stone-600 mt-0.5">Vocal Mastery</div>
              </div>

              <div className="p-3 rounded-xl bg-white/70 border border-gold-400/20 backdrop-blur-sm">
                <div className="text-maroon-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                  <Heart className="w-3.5 h-3.5 text-gold-500" /> Devotional
                </div>
                <div className="text-[11px] text-stone-600 mt-0.5">Devaranama</div>
              </div>

              <div className="p-3 rounded-xl bg-white/70 border border-gold-400/20 backdrop-blur-sm">
                <div className="text-maroon-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                  <Mic className="w-3.5 h-3.5 text-gold-500" /> Anchoring
                </div>
                <div className="text-[11px] text-stone-600 mt-0.5">Stage & Events</div>
              </div>

              <div className="p-3 rounded-xl bg-white/70 border border-gold-400/20 backdrop-blur-sm">
                <div className="text-maroon-900 font-bold text-xs uppercase tracking-wider flex items-center justify-center sm:justify-start gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-gold-500" /> LNSOPA
                </div>
                <div className="text-[11px] text-stone-600 mt-0.5">Bengaluru & Online</div>
              </div>
            </div>
          </div>

          {/* Right Column Image 1 Display */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Ornamental Frame Container */}
            <div className="relative w-full max-w-md lg:max-w-none group">
              {/* Outer Glow & Decorative Arch Frame */}
              <div className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-gold-500/40 via-maroon-800/30 to-gold-400/40 blur-xl opacity-70 group-hover:opacity-100 transition duration-500"></div>

              {/* Main Image Wrapper with Traditional Gold Frame */}
              <div className="relative rounded-2xl p-2 bg-gradient-to-b from-gold-400 via-gold-600 to-maroon-900 shadow-2xl overflow-hidden">
                <div className="relative rounded-xl overflow-hidden bg-stone-900 aspect-[3/4] sm:aspect-[4/5]">
                  <img
                    src="/images/leela-hero-performance.jpg"
                    alt="Leela Narayan performing Carnatic vocal music in pink coral saree"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/80 via-transparent to-transparent"></div>

                  {/* Floating Musical Note Accents */}
                  <div className="absolute top-4 right-4 bg-maroon-900/80 backdrop-blur-md border border-gold-400/50 p-2.5 rounded-full text-gold-400 shadow-lg animate-float-note">
                    <Music className="w-5 h-5" />
                  </div>

                  {/* Badge at Bottom of Image */}
                  <div className="absolute bottom-4 left-4 right-4 bg-cream-50/95 backdrop-blur-md p-3.5 rounded-xl border border-gold-400/40 shadow-lg">
                    <p className="font-serif text-maroon-900 font-bold text-sm">
                      Leela Narayan
                    </p>
                    <p className="text-[11px] text-gold-700 font-medium">
                      Live Carnatic Vocal Performance • Bengaluru
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
