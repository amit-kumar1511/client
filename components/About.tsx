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
    <section
      id="about"
      className="relative grid min-h-[680px] grid-cols-1 text-[#14221e] overflow-hidden lg:grid-cols-[42%_58%]"
      style={{ background: "linear-gradient(180deg, #F5F2E8 0%, #EDE6D7 50%, #F3EEE2 100%)" }}
    >
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
      <div className="relative z-10 flex items-center justify-center px-4 py-6 sm:px-8 sm:py-8 lg:py-10 lg:pl-4 lg:pr-12 xl:pr-16">
        <div className="relative group w-full h-[320px] xs:h-[360px] sm:h-[420px] lg:h-[480px] xl:h-[530px] overflow-hidden rounded-tr-[18%] rounded-bl-[18%] shadow-2xl cursor-pointer">
          <Image
            src="/images/about_massage_therapist.jpg"
            alt="Luxury spa sanctuary treatment room"
            fill
            priority
            sizes="(max-width: 1024px) 92vw, 55vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
          />

          {/* COMPACT TRUST CARD */}
          <div className="absolute left-2.5 top-2.5 sm:left-4 sm:top-4 z-10 w-[118px] xs:w-[132px] sm:w-[152px] rounded-xl border border-white/30 bg-[#1e341d]/90 p-1.5 sm:p-2 text-[#f7f4e9] shadow-lg backdrop-blur-md">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-1.5 py-1 sm:py-1.5 ${
                    index !== trustItems.length - 1 ? "border-b border-white/20" : ""
                  }`}
                >
                  <div className="grid size-5 sm:size-6 shrink-0 place-items-center rounded-full border border-white/30 bg-white/10 text-[#e7e8c9] shadow-sm">
                    <Icon className="size-3 sm:size-3.5" strokeWidth={1.75} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[9px] sm:text-[10.5px] font-montserrat font-semibold leading-tight text-white">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[7.5px] sm:text-[8.5px] font-lato text-[#e6e5d5] leading-tight opacity-90 truncate">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* DECORATIVE FLOWER OVERLAY */}
          <div className="pointer-events-none absolute bottom-3 left-4 sm:bottom-[5%] sm:left-[10%] z-10 text-[50px] sm:text-[85px] text-[#f5e8c8] select-none opacity-80 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            ✿
          </div>
        </div>
      </div>
    </section>
  );
}
