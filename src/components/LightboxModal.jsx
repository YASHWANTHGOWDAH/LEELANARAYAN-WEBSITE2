import React from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ isOpen, images = [], currentIndex = 0, onClose, onNavigate }) {
  if (!isOpen || !images.length) return null;

  const currentImg = images[currentIndex] || images[0];

  const handlePrev = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + images.length) % images.length;
    onNavigate(prevIdx);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % images.length;
    onNavigate(nextIdx);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        aria-label="Close Lightbox"
        className="absolute top-6 right-6 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev Button */}
      <button
        onClick={handlePrev}
        aria-label="Previous Image"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      {/* Main Image Container */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-w-4xl max-h-[85vh] flex flex-col items-center justify-center bg-stone-900/80 rounded-2xl overflow-hidden border border-gold-500/30 p-2 shadow-2xl"
      >
        <img
          src={currentImg.src}
          alt={currentImg.title}
          className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg"
        />
        <div className="w-full text-center px-6 py-4 bg-stone-900 text-cream-100">
          <span className="inline-block px-3 py-1 bg-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-2">
            {currentImg.category}
          </span>
          <h4 className="font-serif text-xl font-bold text-white">
            {currentImg.title}
          </h4>
          <p className="text-sm text-stone-300 mt-1 max-w-xl mx-auto">
            {currentImg.caption}
          </p>
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={handleNext}
        aria-label="Next Image"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
      >
        <ChevronRight className="w-8 h-8" />
      </button>
    </div>
  );
}
