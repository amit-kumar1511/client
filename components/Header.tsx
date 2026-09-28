"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";

const PHONE = "+918797191340";
const PHONE_DISPLAY = "+91 8797191340";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Home", "top"],
    ["About", "about"],
    ["Services", "services"],
    ["Gallery", "gallery"],
    ["Reviews", "reviews"],
    ["Contact", "book"],
  ];

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
      <div className="mx-auto max-w-6xl pointer-events-auto">
        
        {/* Floating Pill Navbar — Smooth Motion animation on scroll */}
        <div className="relative flex items-center justify-between h-14 sm:h-16 px-4 sm:px-6 rounded-[999px]">
          
          {/* Animated Background Pill Layer */}
          <motion.div
            initial={false}
            animate={{
              opacity: scrolled ? 1 : 0,
              scale: scrolled ? 1 : 0.97,
              y: scrolled ? 0 : -4,
            }}
            transition={{
              duration: 0.45,
              ease: [0.22, 0.61, 0.36, 1],
            }}
            className="absolute inset-0 rounded-[999px] bg-white/40 dark:bg-black/40 backdrop-blur-xl border border-neutral-900/10 dark:border-white/15 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] pointer-events-none"
          />
          
          {/* 1. Left-aligned Logo */}
          <a href="#top" className="relative z-10 flex items-center gap-2.5 shrink-0">
            <Image
              src="/images/logo.png"
              alt="Amazing Wellness Spa logo"
              width={36}
              height={36}
              className="h-8 w-8 sm:h-9 sm:w-9 object-contain shrink-0 drop-shadow-xs"
            />
            <div className="hidden sm:block font-serif leading-none">
              <div className={`text-xs sm:text-sm font-semibold tracking-[0.2em] transition-colors duration-300 ${scrolled ? "text-cocoa dark:text-white" : "text-white"}`}>
                AMAZING WELLNESS
              </div>
              <div className="text-[9px] tracking-[0.3em] font-sans font-medium mt-0.5 text-gold">
                SPA & WELLNESS
              </div>
            </div>
          </a>

          {/* 2. Centered Navigation Links */}
          <nav className="relative z-10 hidden md:flex items-center justify-center gap-6 lg:gap-8 mx-auto">
            {links.map(([label, id]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`text-xs sm:text-sm font-medium tracking-wide transition-colors duration-300 py-1 ${
                  scrolled 
                    ? "text-cocoa/90 dark:text-neutral-200 hover:text-gold" 
                    : "text-white/90 hover:text-gold"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          {/* 3. Mobile Menu Trigger */}
          <div className="relative z-10 flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Mobile Menu Trigger */}
            <button
              className={`md:hidden p-1.5 rounded-[999px] transition-colors duration-300 ${scrolled ? "text-cocoa dark:text-white" : "text-white"}`}
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="w-5 h-5 text-gold" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu — Compact & positioned directly underneath navbar pill */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
              className="mt-2 mx-auto w-full max-w-sm bg-espresso/95 dark:bg-[#1a1614]/95 backdrop-blur-2xl rounded-2xl p-3.5 border border-white/15 shadow-2xl md:hidden text-white"
            >
              <nav className="flex flex-col gap-1 text-center">
                {links.map(([label, id]) => (
                  <button
                    key={id}
                    onClick={() => {
                      setOpen(false);
                      scrollTo(id);
                    }}
                    className="w-full py-2 px-3 text-xs font-semibold tracking-[0.15em] uppercase text-white/90 hover:text-gold hover:bg-white/10 rounded-xl transition-all"
                  >
                    {label}
                  </button>
                ))}
                <div className="pt-2 mt-1 border-t border-white/10 flex flex-col gap-2">
                  <a
                    href={`tel:${PHONE}`}
                    onClick={() => setOpen(false)}
                    className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl border border-white/20 text-white text-xs font-medium hover:bg-white/10 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold" /> Call ({PHONE_DISPLAY})
                  </a>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}



