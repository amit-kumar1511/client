"use client";

import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import Image from "next/image";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[88dvh] sm:min-h-[100dvh] w-full flex items-center justify-center bg-gradient-hero overflow-hidden py-16 sm:py-24 md:py-28 lg:py-32"
    >
      {/* Background Spa Atmosphere Image */}
      <div className="absolute inset-0 opacity-55">
        <Image
          src="/images/massage1.jpg"
          alt="Amazing Wellness Spa massage treatment atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] transition-transform duration-1000"
        />
      </div>

      {/* Elegant Radial & Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/40 to-espresso/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-espresso/35 to-espresso/75 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white w-full">
        
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.08] font-medium tracking-tight text-white drop-shadow-lg"
        >
          Relax, Rejuvenate
          <br />
          <span className="italic text-gold font-normal drop-shadow-md">Your Body & Soul</span>
        </motion.h1>

        {/* Sub-eyebrow Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-4 sm:mt-6 text-gold/95 text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase font-medium drop-shadow-sm"
        >
          Amazing Wellness Spa · Lajpat Nagar 2
        </motion.p>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 sm:mt-6 max-w-2xl mx-auto text-white/95 text-sm sm:text-base md:text-lg leading-relaxed font-lato px-2 drop-shadow-sm"
        >
          Experience relaxing massage and wellness treatments crafted for comfort, calmness and complete renewal in the heart of Lajpat Nagar 2, New Delhi.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <button
            onClick={() => scrollTo("services")}
            className="btn-copper w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            Explore Services
          </button>
          <button
            onClick={() => scrollTo("book")}
            className="btn-outline-cream w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all"
          >
            <MessageCircle className="w-4 h-4 shrink-0" /> Book Now
          </button>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
        className="hidden sm:flex absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-white/80 hover:text-white transition-colors"
      >
        <button
          onClick={() => scrollTo("about")}
          aria-label="Scroll down to About section"
          className="flex flex-col items-center gap-1.5 focus:outline-none cursor-pointer"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown className="w-4 h-4 text-gold" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
