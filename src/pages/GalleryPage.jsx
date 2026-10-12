import React from 'react';
import GallerySection from '../components/GallerySection';

export default function GalleryPage({ siteData, onSelectImage }) {
  return (
    <div className="pt-24 min-h-screen bg-cream-50">
      {/* Header Banner */}
      <div className="maroon-gradient-bg text-cream-50 py-12 px-4 border-b border-gold-500/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
              Visual Archives
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold text-gold-400">
              Photo Gallery
            </h1>
            <p className="text-cream-200 text-xs sm:text-sm mt-1">
              Highlights from live Carnatic performances, student celebrations, devotional programs & awards
            </p>
          </div>
        </div>
      </div>

      <GallerySection
        images={siteData?.galleryImages || []}
        onSelectImage={onSelectImage}
      />
    </div>
  );
}
