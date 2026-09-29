"use client";

import Image from "next/image";
import { ArrowRight, Leaf, Flower2, ShieldCheck } from "lucide-react";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const trustItems = [
  {
    title: "Natural Products",
    text: "Pure. Safe. Effective.",
    icon: Leaf,
  },
  {
    title: "Professional Therapists",
    text: "Skilled & Caring",
    icon: Flower2,
  },
  {
    title: "Safe & Hygienic",
    text: "Your Safety Matters",
    icon: ShieldCheck,
  },
];

export default function About() {
  return (
    <section id="about" className="relative grid min-h-[680px] grid-cols-1 bg-[#f5f3e9] text-[#14221e] overflow-hidden lg:grid-cols-[42%_58%]">
      {/* LEFT CONTENT */}
      <div className="relative z-10 flex flex-col justify-center px-6 py-12 sm:px-12 lg:py-16 lg:pl-[11%] lg:pr-8">
        
        {/* Label: —— ABOUT US */}
        <div className="mb-3 flex items-center gap-7 text-[13px] font-montserrat font-semibold tracking-[5px] text-[#30482b]">
          <span className="h-px w-[52px] bg-[#30482b]" />
          <span>ABOUT US</span>
        </div>

        {/* Title: Matching font-serif used by all section headings */}
        <h2 className="whitespace-nowrap font-serif font-bold text-[clamp(44px,5.2vw,90px)] leading-[0.95] tracking-[-2px] text-[#14221e]">
          Your Wellness
        </h2>

        <p className="mt-1 font-great-vibes text-[clamp(55px,6vw,95px)] leading-none text-[#344d2b]">
          Our Passion
        </p>

        {/* Body Paragraphs */}
        <div className="mt-8 max-w-[470px] space-y-5 text-[15px] leading-[1.65] text-[#34494b] sm:text-base font-lato">
          <p>
            At Amazing Wellness Spa, we believe that true beauty comes from within. Our journey began with a simple idea — to create a space where people can relax, recharge and reconnect with themselves.
          </p>
          <p>
            With a team of skilled therapists and a calm, luxurious environment, we offer personalized spa treatments designed to help you look good, feel better and live healthier.
          </p>
        </div>

        {/* Tagline */}
        <p className="mt-5 sm:pl-4 font-allura text-[27px] text-[#30482b]">
          Relax <span className="mx-2">·</span> Rejuvenate <span className="mx-2">·</span> Rebalance
        </p>

        {/* CTA Button */}
        <button
          onClick={() => scrollTo("services")}
          className="mt-6 flex max-w-[285px] items-center justify-between rounded-full bg-[#263f2a] px-9 py-4 text-[15px] font-montserrat font-normal text-white transition-all duration-300 hover:bg-[#172c1c] hover:shadow-lg active:scale-95 shadow-md group cursor-pointer"
        >
          <span>Explore Our Services</span>
          <ArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-1.5" />
        </button>
      </div>

      {/* RIGHT SPA IMAGE WITH STYLISH & INTERACTIVE OVERLAYS */}
      <div className="relative group min-h-[430px] overflow-hidden rounded-bl-[18%] lg:min-h-[680px] lg:rounded-bl-[34%_19%] cursor-pointer">
        <Image
          src="/images/hero_spa_reference.jpg"
          alt="Luxury spa interior environment"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* LUXURY GRADIENT VIGNETTE & SHINE OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#14221e]/50 via-transparent to-black/10 opacity-70 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none" />

        {/* COMPACT INTERACTIVE TRUST CARD (Icon on Left, Text Next to Icon, Reduced Spacing) */}
        <div className="absolute right-[4%] top-[6%] z-10 w-[175px] sm:w-[195px] rounded-2xl border border-white/30 bg-[#1e341d]/90 p-3 text-[#f7f4e9] shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-[#182c17]/95 hover:border-white/50">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group/item flex items-center gap-2.5 py-2.5 ${
                  index !== trustItems.length - 1 ? "border-b border-white/20" : ""
                }`}
              >
                <div className="grid size-8 sm:size-9 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 text-[#e7e8c9] transition-all duration-300 group-hover/item:border-[#deb368] group-hover/item:bg-[#deb368] group-hover/item:text-[#14221e] group-hover/item:scale-110 shadow-sm">
                  <Icon size={18} strokeWidth={1.75} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-[12px] sm:text-[13px] font-montserrat font-semibold leading-tight text-white transition-colors duration-200 group-hover/item:text-[#f0d489]">
                    {item.title}
                  </h3>
                  <p className="mt-0.5 text-[10px] sm:text-[11px] font-lato text-[#e6e5d5] leading-tight opacity-90 truncate">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* INTERACTIVE FLOATING BADGE (Bottom Left) */}
        <div className="absolute bottom-[8%] left-[6%] z-10 hidden sm:flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-2 text-xs font-montserrat font-medium text-white backdrop-blur-md shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:bg-white/25">
          <span className="flex size-2 rounded-full bg-[#deb368] animate-ping" />
          <span>✨ Pure & Organic Spa Care</span>
        </div>

        {/* DECORATIVE FLOWER OVERLAY */}
        <div className="pointer-events-none absolute bottom-[5%] left-[10%] sm:left-[25%] z-10 text-[85px] text-[#f5e8c8] select-none opacity-80 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
          ✿
        </div>
      </div>
    </section>
  );
}
