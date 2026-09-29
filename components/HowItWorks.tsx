"use client";

import Image from "next/image";
import { Flower2, Calendar, MessageCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Flower2,
      title: "Choose Your Treatment",
      d: "Browse our menu of relaxing spa treatments and find what suits you best.",
    },
    {
      num: "02",
      icon: Calendar,
      title: "Fill the Booking Form",
      d: "Add your preferred date, time and details.",
    },
    {
      num: "03",
      icon: MessageCircle,
      title: "Confirm on WhatsApp",
      d: "We confirm your slot on WhatsApp quickly.",
    },
    {
      num: "04",
      icon: Flower2,
      title: "Visit and Relax",
      d: "Arrive at our spa and enjoy pure calm.",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-12 sm:py-16 md:py-20 bg-[#18110b] text-[#f7f4e9] overflow-hidden">
      
      {/* Background Spa Atmosphere Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/how_it_works_bg.png"
          alt="Spa Journey Background Atmosphere"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-3 text-xs tracking-[0.3em] uppercase font-medium text-[#d8ab5e]">
            <span className="w-8 h-px bg-[#d8ab5e]/60" />
            <span>HOW IT WORKS</span>
            <span className="w-8 h-px bg-[#d8ab5e]/60" />
          </div>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#f7f4e9] tracking-tight">
            Your Spa Journey in <span className="italic" style={{ color: "oklch(0.78 0.11 78)" }}>Four Steps</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-[#b8a695] max-w-xl mx-auto font-lato leading-relaxed">
            Relaxing, rejuvenating and easy. Here&apos;s how you can experience our premium spa services in just four simple steps.
          </p>
        </div>

        {/* Four Steps Component */}
        <div className="relative">
          
          {/* Connecting Arched Curves for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-0 right-0 h-20 pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 1000 80" fill="none" preserveAspectRatio="none">
              <path
                d="M 175 48 Q 250 15 325 48"
                stroke="oklch(0.78 0.11 78 / 0.55)"
                strokeWidth="1.5"
              />
              <path
                d="M 425 48 Q 500 15 575 48"
                stroke="oklch(0.78 0.11 78 / 0.55)"
                strokeWidth="1.5"
              />
              <path
                d="M 675 48 Q 750 15 825 48"
                stroke="oklch(0.78 0.11 78 / 0.55)"
                strokeWidth="1.5"
              />
            </svg>
          </div>

          {/* Desktop 4-Step Layout */}
          <div className="hidden lg:grid grid-cols-4 gap-6 relative z-10">
            {steps.map(({ num, icon: Icon, title, d }) => (
              <div key={title} className="flex flex-col items-center text-center">
                
                {/* Glowing Circle Icon */}
                <div className="w-20 h-20 rounded-full border border-[oklch(0.78_0.11_78/0.7)] flex items-center justify-center bg-[#1c130d]/80 shadow-[0_0_25px_rgba(216,171,94,0.18)] mb-4 transition-transform duration-300 hover:scale-105">
                  <Icon className="w-8 h-8" style={{ color: "oklch(0.78 0.11 78)" }} strokeWidth={1.5} />
                </div>

                {/* Italic Gold Number */}
                <div className="font-serif italic text-2xl sm:text-3xl font-normal mb-1" style={{ color: "oklch(0.78 0.11 78)" }}>
                  {num}
                </div>

                {/* Step Title */}
                <h3 className="font-serif text-lg sm:text-xl font-normal text-[#f7f4e9] tracking-tight">
                  {title}
                </h3>

                {/* Subtle Divider Line */}
                <div className="w-6 h-px bg-[oklch(0.78_0.11_78/0.4)] my-2.5" />

                {/* Step Description */}
                <p className="text-xs sm:text-sm text-[#b8a695] font-lato leading-relaxed max-w-[200px]">
                  {d}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile Vertical Flow Layout */}
          <div className="lg:hidden relative space-y-12 sm:space-y-16 pl-4 sm:pl-8">
            
            {/* Vertical Connecting Line */}
            <div className="absolute left-[39px] sm:left-[55px] top-8 bottom-8 w-px bg-[oklch(0.78_0.11_78/0.4)]" />

            {steps.map(({ num, icon: Icon, title, d }) => (
              <div key={title} className="relative flex items-start gap-5 sm:gap-8 z-10">
                
                {/* Glowing Circle Icon */}
                <div className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-[oklch(0.78_0.11_78/0.7)] flex items-center justify-center bg-[#1c130d] shadow-[0_0_20px_rgba(216,171,94,0.15)]">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" style={{ color: "oklch(0.78 0.11 78)" }} strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <div className="pt-1">
                  <div className="font-serif italic text-xl sm:text-2xl font-normal mb-0.5" style={{ color: "oklch(0.78 0.11 78)" }}>
                    {num}
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-normal text-[#f7f4e9]">
                    {title}
                  </h3>
                  <div className="w-6 h-px bg-[oklch(0.78_0.11_78/0.4)] my-2" />
                  <p className="text-xs sm:text-sm text-[#b8a695] font-lato leading-relaxed max-w-[280px]">
                    {d}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}


