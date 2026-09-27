"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";


export const GALLERY = [
  { url: "/images/massage2.jpg" },
  { url: "/images/gallery_2.jpg" },
  { url: "/images/gallery_3.jpg" },
  { url: "/images/gallery_4.jpg" },
  { url: "/images/gallery_5.jpg" },
  { url: "/images/room1.jpg" },
  { url: "/images/room2.jpg" },
  { url: "/images/massage1.jpg" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold font-medium">
      <span className="w-8 h-px bg-gold" /> {children} <span className="w-8 h-px bg-gold" />
    </div>
  );
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const close = () => setIdx(null);
  const prev = () => setIdx((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
  const next = () => setIdx((i) => (i === null ? i : (i + 1) % GALLERY.length));

  useEffect(() => {
    if (idx === null) return;
    const on = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", on);
    return () => window.removeEventListener("keydown", on);
  }, [idx]);

  return (
    <section id="gallery" className="relative py-20 sm:py-28 bg-ivory overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeUp>
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-cocoa">
              Explore <span className="italic text-gold">Our Spa</span>
            </h2>
          </FadeUp>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY.map((img, i) => (
            <FadeUp key={i} delay={(i % 4) * 0.05}>
              <button
                onClick={() => setIdx(i)}
                className={`group block relative overflow-hidden rounded-2xl shadow-soft w-full ${i % 5 === 0 ? "aspect-[3/4]" : "aspect-square"
                  }`}
              >
                <Image
                  src={img.url}
                  alt={`Spa gallery ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-colors" />
              </button>
            </FadeUp>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {idx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-espresso/95 backdrop-blur flex items-center justify-center p-4"
            onClick={close}
          >
            <button
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              aria-label="Close"
              className="absolute top-5 right-5 p-2 text-white hover:text-gold"
            >
              <X className="w-7 h-7" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
              className="absolute left-4 sm:left-8 p-3 text-white hover:text-gold rounded-full bg-white/10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
              className="absolute right-4 sm:right-8 p-3 text-white hover:text-gold rounded-full bg-white/10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <motion.img
              key={idx}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              src={GALLERY[idx].url}
              alt=""
              onClick={(e) => e.stopPropagation()}
              className="max-w-[92vw] max-h-[85vh] object-contain rounded-lg shadow-luxury"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
