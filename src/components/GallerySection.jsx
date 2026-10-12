import React from 'react';
import { Maximize2 } from 'lucide-react';

export default function GallerySection({ images = [], onSelectImage }) {
  return (
    <section id="gallery" className="py-20 bg-cream-100/60 border-t border-gold-400/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-gold-700 block mb-2">
            Visual Highlights & Archives
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-maroon-900">
            Photo Gallery
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-2 font-serif italic">
            Moments from live performances, student celebrations, devotional programs & awards
          </p>
          <div className="w-20 h-1 maroon-gradient-bg mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Gallery Grid (Showing All Images Directly) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, idx) => (
            <div
              key={img.id || idx}
              onClick={() => onSelectImage(idx)}
              className="group cursor-pointer relative bg-white rounded-2xl overflow-hidden border border-gold-400/30 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Image Aspect Ratio Wrapper */}
              <div className="relative aspect-[4/3] bg-stone-900 overflow-hidden">
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-maroon-950/90 via-maroon-950/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>

                {/* Hover Maximize Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-gold-400 text-maroon-900 flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-6 h-6" />
                  </div>
                </div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-cream-50/90 backdrop-blur-md text-maroon-900 text-[10px] font-bold uppercase tracking-wider border border-gold-400/30 shadow">
                    {img.category}
                  </span>
                </div>
              </div>

              {/* Card Footer Text */}
              <div className="p-5 bg-white border-t border-stone-100">
                <h4 className="font-serif font-bold text-maroon-900 text-lg group-hover:text-gold-700 transition-colors">
                  {img.title}
                </h4>
                <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
