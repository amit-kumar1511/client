"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

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

export default function WhyUs() {
  const items = [
    { title: "Peaceful Spa Environment", d: "Step into a calm, softly-lit sanctuary designed to melt tension the moment you arrive.", img: "/images/why1.jpg" },
    { title: "Curated Massage Menu", d: "From authentic Thai balm to full body & deep tissue therapy — every treatment is refined for pure relaxation.", img: "/images/why2.jpg" },
    { title: "Transparent Pricing", d: "Clear durations, honest prices, zero surprises. What you see is exactly what you pay.", img: "/images/why3.jpg" },
    { title: "Prime Lajpat Nagar 2 Location", d: "72/1, 2nd Floor, Near A Block, Muthoot Finance, Near Samara Honda, Lajpat Nagar 2, New Delhi - 110024.", img: "/images/why4.jpg" },
    { title: "24 Hours Open (Online: 11 AM - 11 PM)", d: "Open round the clock every single day. Online booking & support available 11:00 AM – 11:00 PM.", img: "/images/room2.jpg" },
    { title: "Instant WhatsApp Booking", d: "Directly message Sunny on WhatsApp for quick slot confirmation in seconds.", img: "/images/massage2.jpg" },
  ];
  const [active, setActive] = useState(0);
  const stats = [
    { n: "9+", l: "Signature Treatments" },
    { n: "24/7", l: "Open Daily & Night" },
    { n: "100%", l: "Trained Therapists" },
    { n: "5★", l: "Guest Rated" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-40 pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.82 0.1 80 / 0.35), transparent 70%)" }}
      />
      <div
        className="absolute -bottom-40 -left-32 w-[500px] h-[500px] rounded-full opacity-30 pointer-events-none"
        style={{ background: "radial-gradient(circle, oklch(0.68 0.12 65 / 0.35), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeUp>
            <SectionLabel>Why Choose Us</SectionLabel>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-cocoa">
              Why Guests Love <span className="italic text-gold">Amazing Wellness Spa</span>
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
              Hover or tap each promise to discover what makes every visit feel effortlessly premium.
            </p>
          </FadeUp>
        </div>

        <div className="mt-14 grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-stretch">
          {/* Interactive list */}
          <FadeUp>
            <ul className="divide-y divide-gold/20 border-y border-gold/20">
              {items.map(({ title, d }, i) => {
                const isActive = active === i;
                return (
                  <li key={title}>
                    <button
                      type="button"
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      onClick={() => setActive(i)}
                      className={`w-full text-left flex items-start gap-5 py-5 sm:py-6 group transition-colors ${
                        isActive ? "text-cocoa" : "text-cocoa/70 hover:text-cocoa"
                      }`}
                      aria-expanded={isActive}
                    >
                      <span
                        className={`shrink-0 text-xs font-serif tracking-[0.2em] pt-1 transition-colors ${
                          isActive ? "text-gold" : "text-cocoa/40"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <span className="flex-1 min-w-0">
                        <span className="flex items-center justify-between gap-3">
                          <span className="font-serif text-lg sm:text-xl">{title}</span>
                          <ChevronRight
                            className={`w-5 h-5 shrink-0 transition-all ${
                              isActive ? "text-gold translate-x-1" : "text-cocoa/30"
                            }`}
                          />
                        </span>
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0, marginTop: 0 }}
                              animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                              exit={{ opacity: 0, height: 0, marginTop: 0 }}
                              transition={{ duration: 0.3 }}
                              className="text-sm text-muted-foreground leading-relaxed overflow-hidden"
                            >
                              {d}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </FadeUp>

          {/* Visual preview */}
          <FadeUp delay={0.1}>
            <div className="relative h-full min-h-[420px] lg:min-h-full rounded-3xl overflow-hidden shadow-luxury">
              <AnimatePresence mode="wait">
                <motion.img
                  key={items[active].img}
                  src={items[active].img}
                  alt={items[active].title}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={items[active].title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-gold">
                      <span className="w-6 h-px bg-gold" /> Reason 0{active + 1}
                    </div>
                    <h3 className="mt-3 font-serif text-2xl sm:text-3xl">{items[active].title}</h3>
                    <p className="mt-2 text-white/85 text-sm sm:text-base max-w-md leading-relaxed">
                      {items[active].d}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Stats strip */}
        <FadeUp delay={0.15}>
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-px bg-gold/20 rounded-2xl overflow-hidden border border-gold/20">
            {stats.map((s) => (
              <div key={s.l} className="bg-cream/80 backdrop-blur px-4 py-6 text-center">
                <div className="font-serif text-3xl sm:text-4xl text-cocoa">{s.n}</div>
                <div className="mt-1 text-[11px] sm:text-xs tracking-[0.2em] uppercase text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
