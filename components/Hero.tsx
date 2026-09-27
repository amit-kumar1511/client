"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Heart, Sparkles, MessageCircle, ChevronDown, UserCheck } from "lucide-react";
import Image from "next/image";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100dvh] w-full flex items-center justify-center bg-gradient-hero overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32">
      {/* image overlay */}
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/images/massage1.jpg"
          alt="Amazing Wellness Spa massage treatment atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/60 to-espresso/95" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-[11px] sm:text-xs md:text-sm text-white">
            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
            <span className="tracking-wide">Lajpat Nagar 2, New Delhi</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-gradient-gold text-espresso text-[11px] sm:text-xs md:text-sm font-semibold tracking-wider uppercase shadow-soft">
            <Sparkles className="w-3.5 h-3.5 shrink-0" /> Premium Wellness Experience
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 sm:mt-8 font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-[1.05] font-medium"
        >
          Relax, Rejuvenate
          <br />
          <span className="italic text-gold font-normal">Your Body & Soul</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-3 sm:mt-5 text-gold/90 text-xs sm:text-sm md:text-base tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium"
        >
          Amazing Wellness Spa · Lajpat Nagar 2
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-4 sm:mt-6 max-w-2xl mx-auto text-white/85 text-sm sm:text-base md:text-lg leading-relaxed px-2"
        >
          Experience relaxing massage and wellness treatments crafted for comfort, calmness and complete renewal in the heart of Lajpat Nagar 2, New Delhi.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/85"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur">
            <Clock className="w-3.5 h-3.5 text-gold shrink-0" /> Open 24 Hours (Online: 11 AM – 11 PM)
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur">
            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" /> Near Samara Honda, Lajpat Nagar 2
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur">
            <UserCheck className="w-3.5 h-3.5 text-gold shrink-0" /> Contact: Sunny
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur">
            <Heart className="w-3.5 h-3.5 text-gold shrink-0" /> LGBTQ+ Friendly
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <button
            onClick={() => scrollTo("services")}
            className="btn-copper w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm"
          >
            Explore Services
          </button>
          <button
            onClick={() => scrollTo("book")}
            className="btn-outline-cream w-full sm:w-auto px-7 py-3.5 text-xs sm:text-sm"
          >
            <MessageCircle className="w-4 h-4 shrink-0" /> Book Now
          </button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="hidden sm:flex absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors"
      >
        <button
          onClick={() => scrollTo("about")}
          aria-label="Scroll down to About section"
          className="flex flex-col items-center gap-1.5 focus:outline-hidden cursor-pointer"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}

