"use client";

import Image from "next/image";
import { Leaf, Flower2, ShieldCheck } from "lucide-react";

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
        <div className="mb-3 flex items-center gap-7 text-[13px] font-montserrat font-semibold tracking-[5px]" style={{ color: "oklch(0.78 0.11 78)" }}>
          <span className="h-px w-[52px]" style={{ backgroundColor: "oklch(0.78 0.11 78)" }} />
          <span>ABOUT US</span>
        </div>

        {/* Title: Matching font-serif used by all section headings */}
        <h2 className="whitespace-nowrap font-serif font-bold text-[clamp(44px,5.2vw,90px)] leading-[0.95] tracking-[-2px] text-[#14221e]">
          Your Wellness
        </h2>

        <p className="mt-1 font-great-vibes text-[clamp(55px,6vw,95px)] leading-none" style={{ color: "oklch(0.78 0.11 78)" }}>
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
        <p className="mt-5 sm:pl-4 font-allura text-[27px]" style={{ color: "oklch(0.78 0.11 78)" }}>
          Relax <span className="mx-2">·</span> Rejuvenate <span className="mx-2">·</span> Rebalance
        </p>
      </div>

      {/* RIGHT SPA IMAGE WITH STYLISH & INTERACTIVE OVERLAYS */}
      <div className="relative group min-h-[350px] h-[550px] mt-[10%] overflow-hidden rounded-tr-[18%] rounded-bl-[18%] lg:min-h-[550px] cursor-pointer">
        <Image
          src="/images/about_massage_therapist.jpg"
          alt="Luxury spa sanctuary treatment room"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 58vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />


        {/* COMPACT INTERACTIVE TRUST CARD (Icon on Left, Text Next to Icon, Reduced Spacing) */}
        <div className="absolute right-[4%] top-[6%] z-10 w-[175px] sm:w-[195px] rounded-2xl border border-white/30 bg-[#1e341d]/90 p-3 text-[#f7f4e9] shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-[1.03] hover:bg-[#182c17]/95 hover:border-white/50">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`group/item flex items-center gap-2.5 py-2.5 ${index !== trustItems.length - 1 ? "border-b border-white/20" : ""
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



        {/* DECORATIVE FLOWER OVERLAY */}
        <div className="pointer-events-none absolute bottom-[5%] left-[10%] sm:left-[25%] z-10 text-[85px] text-[#f5e8c8] select-none opacity-80 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
          ✿
        </div>
      </div>
    </section>
  );
}
