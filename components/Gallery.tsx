"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

export const GALLERY_IMAGES = [
  { url: "/images/gallery/spa_treatment_room_1790677609379.jpg", aspect: "aspect-[4/3]" },
  { url: "/images/gallery/spa_massage_therapy_1790677648922.jpg", aspect: "aspect-[3/4]" },
  { url: "/images/gallery/spa_facial_treatment_1790677797500.jpg", aspect: "aspect-square" },
  { url: "/images/gallery/spa_relaxation_lounge_1790677835079.jpg", aspect: "aspect-[3/2]" },
  { url: "/images/gallery/spa_outdoor_pool_1790677901249.jpg", aspect: "aspect-[3/4]" },
  { url: "/images/gallery/spa_indoor_pool_1790677866571.jpg", aspect: "aspect-[4/3]" },
  { url: "/images/gallery/spa_waterfall_1790677933644.jpg", aspect: "aspect-[3/4]" },
  { url: "/images/gallery/spa_cedar_sauna_1790678002808.jpg", aspect: "aspect-square" },
  { url: "/images/gallery/spa_hot_stones_1790678142700.jpg", aspect: "aspect-[3/4]" },
  { url: "/images/gallery/spa_steam_room_1790678094317.jpg", aspect: "aspect-[4/3]" },
  { url: "/images/gallery/spa_aromatherapy_oils_1790678183092.jpg", aspect: "aspect-square" },
  { url: "/images/gallery/spa_candles_towels_1790678223949.jpg", aspect: "aspect-[3/4]" },
  { url: "/images/aroma.webp", aspect: "aspect-[4/3]" },
  { url: "/images/chamber.webp", aspect: "aspect-[3/4]" },
  { url: "/images/room1.jpg", aspect: "aspect-square" },
  { url: "/images/massage1.jpg", aspect: "aspect-[4/3]" },
  { url: "/images/reception.jpg", aspect: "aspect-[3/4]" },
  { url: "/images/room2.jpg", aspect: "aspect-square" },
  { url: "/images/why_us_candles.jpg", aspect: "aspect-[3/4]" },
  { url: "/images/why_us_massage.jpg", aspect: "aspect-[4/3]" },
  { url: "/images/massage3.png", aspect: "aspect-square" },
  { url: "/images/massage4.png", aspect: "aspect-[3/4]" },
  { url: "/images/hero_spa_reference.jpg", aspect: "aspect-[3/2]" },
  { url: "/images/about_2.jpg", aspect: "aspect-[4/3]" },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeLightbox = () => setSelectedIndex(null);
  const prevImage = () =>
    setSelectedIndex((i) => (i === null ? null : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  const nextImage = () =>
    setSelectedIndex((i) => (i === null ? null : (i + 1) % GALLERY_IMAGES.length));

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedIndex]);

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-24 md:py-28 text-[#16211c] overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5F2E8 0%, #EDE6D7 50%, #F3EEE2 100%)" }}
    >
      <div className="relative z-10 mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        
        {/* Centered Luxury Header */}
        <div className="text-center border-b border-[#e5dfd3]/70 pb-6 mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase text-[#9d7431] font-medium">
            <span className="w-6 h-px bg-[#d8ab5e]" /> Sanctuary Photography <span className="w-6 h-px bg-[#d8ab5e]" />
          </div>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#16211c] tracking-tight">
            Spa <span className="italic" style={{ color: "oklch(0.78 0.11 78)" }}>Gallery</span>
          </h2>
        </div>

        {/* Responsive Masonry Grid Composition (2 cols on mobile, up to 5 cols on desktop) */}
        <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3 sm:gap-5 space-y-3 sm:space-y-5">
          {GALLERY_IMAGES.map((img, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedIndex(i)}
              aria-label={`View spa photograph ${i + 1}`}
              className={`group block relative w-full overflow-hidden rounded-[14px] sm:rounded-[18px] border border-[#e5dfd3]/80 bg-[#f2ece1]/40 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#9d7431]/40 ${img.aspect}`}
            >
              <Image
                src={img.url}
                alt=""
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                className="w-full h-full object-cover group-hover:brightness-90 transition-none"
              />
              
              {/* Minimal Corner Zoom Icon on Hover */}
              <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#16211c]/60 text-[#f8f5f0] opacity-0 group-hover:opacity-100 flex items-center justify-center pointer-events-none transition-none">
                <ZoomIn className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Responsive Fullscreen Lightbox with Pure Backdrop Blur */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/40 backdrop-blur-xl flex flex-col items-center justify-center p-3 sm:p-8 pt-6 sm:pt-20 pb-14 sm:pb-8 overflow-hidden select-none"
          onClick={closeLightbox}
        >
          {/* Previous Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous Image"
            className="absolute left-2 sm:left-6 z-50 p-2.5 sm:p-3 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 rounded-full border border-white/20 backdrop-blur-md cursor-pointer focus:outline-none"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next Image"
            className="absolute right-2 sm:right-6 z-50 p-2.5 sm:p-3 text-white/90 hover:text-white bg-black/40 hover:bg-black/60 rounded-full border border-white/20 backdrop-blur-md cursor-pointer focus:outline-none"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Perfectly Centered Lightbox Image with Attached Close Button */}
          <div
            className="relative max-w-[84vw] sm:max-w-[78vw] max-h-[58vh] sm:max-h-[78vh] flex items-center justify-center rounded-xl my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button Attached Directly to Image Top-Right Corner */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                closeLightbox();
              }}
              aria-label="Close Lightbox"
              className="absolute -top-3.5 -right-3.5 sm:-top-4 sm:-right-4 z-[60] p-2 sm:p-2.5 text-white bg-[#16211c] hover:bg-[#9d7431] rounded-full border border-white/30 shadow-xl cursor-pointer focus:outline-none"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <img
              src={GALLERY_IMAGES[selectedIndex].url}
              alt=""
              className="max-w-[84vw] sm:max-w-[78vw] max-h-[58vh] sm:max-h-[78vh] object-contain rounded-xl block mx-auto shadow-2xl pointer-events-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
}


