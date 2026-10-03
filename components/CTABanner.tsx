"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const PHONE = "+918797191340";

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

export default function CTABanner() {
  return (
    <section id="cta" className="scroll-mt-24 py-16 sm:py-20 bg-gradient-hero relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        style={{ backgroundImage: "radial-gradient(circle at 30% 50%, oklch(0.78 0.11 78 / 0.4), transparent 40%)" }}
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center text-white">
        <FadeUp>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl">
            Ready for Some Time to <span className="italic text-gold">Relax?</span>
          </h2>
          <p className="mt-4 text-white/80 max-w-2xl mx-auto">
            Choose your preferred treatment and connect with Sunny at Amazing Wellness Spa to confirm your appointment.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToSection("book")}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-gold text-espresso font-medium shadow-luxury hover:scale-105 transition-transform"
            >
              Book Now
            </button>
            <a
              href={`tel:${PHONE}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-gold/40 text-white hover:bg-white/10 transition-all"
            >
              <Phone className="w-4 h-4" /> Call Now (+91 8797191340)
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
