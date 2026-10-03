"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import { scrollToSection } from "@/lib/utils";

const PHONE = "+918797191340";
const PHONE_DISPLAY = "+91 8797191340";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  const links = [
    ["Home", "top"],
    ["About", "about"],
    ["Services", "services"],
    ["Gallery", "gallery"],
    ["Reviews", "reviews"],
    ["Contact", "book"],
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    scrollToSection(id);
  };

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
            className="absolute inset-0 rounded-[999px] bg-white/40 dark:bg-black/40 backdrop-blur-xl shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1)] pointer-events-none"
          />
          
          {/* 1. Left-aligned Logo & Typography Stack matching reference image */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("top");
            }}
            className="relative z-10 flex items-center gap-2 sm:gap-2.5 shrink-0"
          >
            <Image
              src="/images/logo.png"
              alt="Amazing Wellness Spa logo"
              width={42}
              height={42}
              className="h-8 w-8 sm:h-10 sm:w-10 object-contain shrink-0 drop-shadow-sm"
            />
            {/* Vertical Separator Line */}
            <div className="h-7 sm:h-9 w-[1px] bg-gradient-to-b from-transparent via-[#d8ab5e]/70 to-transparent shrink-0 mx-0.5 sm:mx-1" />

            {/* Typography Stack */}
            <div className="flex flex-col justify-center leading-none">
              {/* Row 1: AMAZING (Poiret One) */}
              <div className={`font-poiret text-[12px] xs:text-[13px] sm:text-base md:text-[17px] font-bold tracking-[0.2em] sm:tracking-[0.26em] uppercase transition-colors duration-300 ${scrolled ? "text-cocoa dark:text-[#f0d489]" : "text-[#f0d489] drop-shadow-xs"}`}>
                AMAZING
              </div>
              {/* Row 2: WELLNESS SPA (Josefin Sans Light) */}
              <div className={`font-josefin text-[7.5px] xs:text-[8.5px] sm:text-[9.5px] font-light tracking-[0.24em] sm:tracking-[0.32em] uppercase mt-0.5 transition-colors duration-300 ${scrolled ? "text-cocoa/90 dark:text-white/90" : "text-white/95"}`}>
                WELLNESS SPA
              </div>
            </div>
          </a>

          {/* 2. Centered Navigation Links with Active Indicator */}
          <nav className="relative z-10 hidden md:flex items-center justify-center gap-2 lg:gap-3 mx-auto">
            {links.map(([label, id]) => {
              const isActive = activeSection === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`relative text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 py-1.5 px-3 sm:px-4 rounded-full cursor-pointer ${
                    isActive
                      ? "text-gold font-semibold"
                      : scrolled
                      ? "text-cocoa/90 dark:text-neutral-200 hover:text-gold"
                      : "text-white/90 hover:text-gold"
                  }`}
                >
                  {label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-gold/20 dark:bg-gold/30 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 3. Mobile Menu Trigger */}
          <div className="relative z-10 flex items-center gap-2 sm:gap-3 shrink-0">
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
                {links.map(([label, id]) => {
                  const isActive = activeSection === id;
                  return (
                    <button
                      key={id}
                      onClick={() => {
                        setOpen(false);
                        handleNavClick(id);
                      }}
                      className={`w-full py-2 px-3 text-xs font-semibold tracking-[0.15em] uppercase rounded-xl transition-all ${
                        isActive
                          ? "text-gold bg-white/15 font-bold"
                          : "text-white/90 hover:text-gold hover:bg-white/10"
                      }`}
                    >
                      {label}
                    </button>
                  );
                })}
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



