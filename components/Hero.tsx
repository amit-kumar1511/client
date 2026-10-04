"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, ChevronDown, Clock, CheckCircle2, MapPin } from "lucide-react";
import Image from "next/image";
import { scrollToSection } from "@/lib/utils";

const PHONE = "+918797191340";
const WA_NUMBER = "918797191340";
const WA_TEXT = encodeURIComponent("Hello Sunny, I would like to book a session at Amazing Wellness Spa.");

export default function Hero() {
  return (
    <section
      id="top"
      className="scroll-mt-24 relative min-h-[100dvh] h-screen w-full flex items-center justify-center bg-gradient-hero overflow-hidden py-20 sm:py-24 md:py-28 lg:py-32"
    >
      {/* Background Spa Atmosphere Image */}
      <div className="absolute inset-0 opacity-55">
        <Image
          src="/images/massage1.jpg"
          alt="Amazing Wellness Spa in Lajpat Nagar, New Delhi"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center sm:object-[center_35%]"
        />
      </div>

      {/* Elegant Radial & Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/70 via-espresso/40 to-espresso/85" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-espresso/35 to-espresso/75 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white w-full">
        
        {/* Eyebrow / Small Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-gold/95 text-xs sm:text-sm md:text-base tracking-[0.25em] uppercase font-medium drop-shadow-sm mb-3 sm:mb-4"
        >
          Premium Spa in Lajpat Nagar, New Delhi
        </motion.div>

        {/* Main H1 Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-medium tracking-tight text-white drop-shadow-lg"
        >
          Spa & Massage in{" "}
          <span className="italic text-gold font-normal drop-shadow-md">Lajpat Nagar, Delhi</span>
        </motion.h1>

        {/* Description Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-4 sm:mt-6 max-w-2xl mx-auto text-white/95 text-sm sm:text-base md:text-lg leading-relaxed font-lato px-2 drop-shadow-sm"
        >
          Relax, rejuvenate, and enjoy a premium wellness experience at Amazing Wellness Spa. Explore our relaxing massage and spa services in Lajpat Nagar, New Delhi, and take a well-deserved break from your busy routine.
        </motion.p>

        {/* Trust Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm text-gold/90 font-medium"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-espresso/60 border border-gold/20 backdrop-blur-xs">
            <Clock className="w-3.5 h-3.5 text-gold shrink-0" />
            24 Hours Open
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-espresso/60 border border-gold/20 backdrop-blur-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0" />
            Easy Booking
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-espresso/60 border border-gold/20 backdrop-blur-xs">
            <MapPin className="w-3.5 h-3.5 text-gold shrink-0" />
            Prime Location
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto"
        >
          <a
            href={`tel:${PHONE}`}
            className="btn-copper w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 shrink-0" /> Call Now
          </a>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_TEXT}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-cream w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm shadow-xl hover:scale-105 active:scale-95 transition-all inline-flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 shrink-0" /> WhatsApp to Book
          </a>
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
          onClick={() => scrollToSection("about")}
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
