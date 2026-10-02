"use client";

import React from "react";

const trustItems = [
  "Professional Therapists",
  "Hygienic Environment",
  "Relaxing Ambience",
  "24/7 Open",
  "Easy Booking",
];

export default function TrustHighlights() {
  // Repeat items for seamless marquee loop
  const marqueeItems = [...trustItems, ...trustItems, ...trustItems, ...trustItems];

  return (
    <section
      className="relative w-full py-4 sm:py-4.5 mt-6 sm:mt-0 text-[#172a25] overflow-hidden border-y border-[#d8c397]/40 shadow-sm"
      style={{ background: "linear-gradient(180deg, #F5F2E8 0%, #EDE6D7 50%, #F3EEE2 100%)" }}
    >
      {/* Background Ambient Warm Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F2E8] via-[#EDE6D7] to-[#F3EEE2] pointer-events-none" />

      {/* Subtle Accent Borders Top and Bottom */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#4d683f]/25 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#4d683f]/25 to-transparent" />

      {/* Gradient Vignette Fades on Left & Right Edges */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[#EDE6D7] via-[#EDE6D7]/90 to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[#EDE6D7] via-[#EDE6D7]/90 to-transparent z-10 pointer-events-none" />

      {/* Ticker Container */}
      <div className="relative z-0 flex items-center overflow-hidden select-none">
        <div className="flex shrink-0 items-center animate-trust-marquee gap-8 sm:gap-14 whitespace-nowrap py-1">
          {marqueeItems.map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-serif tracking-[3px] uppercase font-semibold text-[#172a25]/90 transition-colors duration-300 hover:text-[#4d683f] cursor-default"
            >
              <span className="text-[#4d683f] text-sm sm:text-base font-bold select-none">•</span>
              <span>{text}</span>
              <span className="ml-5 sm:ml-8 text-[#4d683f]/35 font-sans font-light text-xs sm:text-sm">|</span>
            </div>
          ))}
        </div>

        {/* Duplicate Track for Smooth Infinite Scroll */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center animate-trust-marquee gap-8 sm:gap-14 whitespace-nowrap py-1"
        >
          {marqueeItems.map((text, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm font-serif tracking-[3px] uppercase font-semibold text-[#172a25]/90 transition-colors duration-300 hover:text-[#4d683f] cursor-default"
            >
              <span className="text-[#4d683f] text-sm sm:text-base font-bold select-none">•</span>
              <span>{text}</span>
              <span className="ml-5 sm:ml-8 text-[#4d683f]/35 font-sans font-light text-xs sm:text-sm">|</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
