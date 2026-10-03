"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export interface BenefitItem {
  id: string;
  icon: "leaf" | "lotus" | "shield" | "heart";
  title: string;
  description: string;
}

export interface WhyChooseUsConfig {
  eyebrow: string;
  headline: {
    line1: string;
    line2: string;
  };
  handwrittenAccent?: string;
  description: string;
  benefits: BenefitItem[];
  image1: {
    url: string;
    alt: string;
    badgeText: string[];
  };
  image2: {
    url: string;
    alt: string;
    decorativePhrase: {
      line1: string;
      line2: string;
      line3?: string;
    };
  };
  bottomText?: string;
}

export const defaultWhyUsData: WhyChooseUsConfig = {
  eyebrow: "WHY CHOOSE US",
  headline: {
    line1: "Because Your",
    line2: "Wellness Matters",
  },
  description:
    "We bring together expert care, natural products and a peaceful environment to create a truly relaxing and rejuvenating experience.",
  benefits: [
    {
      id: "natural-products",
      icon: "leaf",
      title: "Natural Products",
      description: "Pure, safe and skin-friendly ingredients for real care.",
    },
    {
      id: "expert-therapists",
      icon: "lotus",
      title: "Expert Therapists",
      description: "Skilled hands, thoughtful care, just for you.",
    },
    {
      id: "hygiene-safety",
      icon: "shield",
      title: "Hygiene & Safety",
      description: "Your health and safety always come first.",
    },
    {
      id: "personalized-care",
      icon: "heart",
      title: "Personalized Care",
      description: "Because every skin and body is unique.",
    },
  ],
  image1: {
    url: "/images/why_us_massage_editorial.jpg",
    alt: "Professional spa therapist performing a soothing body treatment in a peaceful natural environment",
    badgeText: ["Breathe", "Relax", "Renew"],
  },
  image2: {
    url: "/images/why_us_still_life_editorial.jpg",
    alt: "Luxury spa still life with organic towels, river stones, essential oil bottle and glowing candle",
    decorativePhrase: {
      line1: "Because",
      line2: "you deserve",
      line3: "the best...",
    },
  },
};

// Render thin outline icons
function RenderIcon({ type }: { type: BenefitItem["icon"] }) {
  switch (type) {
    case "leaf":
      return (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </svg>
      );
    case "lotus":
      return (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 4c-1.5 3-3 6.5-3 9.5a3 3 0 0 0 6 0C15 10.5 13.5 7 12 4z" />
          <path d="M12 13.5c-3-1.5-6.5-1.5-9.5 0a3.5 3.5 0 0 0 3.5 5.5c3.5 0 5.5-2 6-5.5z" />
          <path d="M12 13.5c3-1.5 6.5-1.5 9.5 0a3.5 3.5 0 0 1-3.5 5.5c-3.5 0-5.5-2-6-5.5z" />
          <path d="M8.5 19.5a7 7 0 0 0 7 0" />
        </svg>
      );
    case "shield":
      return (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "heart":
      return (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
  }
}

// Background botanical line art elements
function BackgroundBotanicals() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Light champagne gold ambient blob top-right */}
      <div className="absolute -top-24 -right-24 w-[520px] h-[520px] bg-[#E2D4B9]/50 rounded-full blur-3xl opacity-80" />

      {/* Warm sage green ambient blob bottom-left */}
      <div className="absolute -bottom-28 -left-20 w-[460px] h-[460px] bg-[#CDD8C0]/55 rounded-full blur-3xl opacity-75" />

      {/* Subtle organic botanical line drawings - Top Left */}
      <svg
        className="absolute top-12 left-4 md:left-12 w-32 h-44 text-[#3C5731] opacity-[0.22]"
        viewBox="0 0 100 150"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M50 140 Q 40 80 80 20" strokeLinecap="round" />
        <path d="M48 110 Q 15 90 25 75 Q 40 78 48 100" />
        <path d="M54 85 Q 85 70 75 55 Q 60 60 52 80" />
        <path d="M44 60 Q 20 45 30 30 Q 42 35 45 55" />
        <path d="M60 35 Q 80 25 70 12 Q 58 18 55 30" />
      </svg>

      {/* Subtle organic botanical line drawings - Bottom Right */}
      <svg
        className="absolute bottom-16 right-6 md:right-16 w-36 h-48 text-[#3C5731] opacity-[0.20]"
        viewBox="0 0 120 160"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M60 150 Q 75 90 30 15" strokeLinecap="round" />
        <path d="M62 120 Q 95 105 85 88 Q 70 92 60 112" />
        <path d="M54 90 Q 20 75 30 58 Q 45 62 55 82" />
        <path d="M50 62 Q 80 48 70 32 Q 56 38 50 56" />
      </svg>
    </div>
  );
}

// Collage Botanical Line Art overlay around images
function CollageBotanicals() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Top center botanical stem */}
      <svg
        className="absolute -top-10 right-[35%] w-24 h-32 text-[#4D683F] opacity-65"
        viewBox="0 0 80 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M40 110 C 25 70 65 40 50 10" />
        <path d="M36 85 C 10 75 15 60 32 72" />
        <path d="M45 65 C 70 55 65 40 46 55" />
        <path d="M38 45 C 20 35 24 20 37 36" />
      </svg>

      {/* Bottom right leaf detail */}
      <svg
        className="absolute -bottom-8 right-4 w-28 h-28 text-[#4D683F] opacity-65"
        viewBox="0 0 100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M20 80 Q 60 80 85 25" />
        <path d="M40 75 Q 40 50 65 45 Q 60 65 40 75" />
        <path d="M55 58 Q 60 35 80 30 Q 75 50 55 58" />
      </svg>

      {/* Left connecting leaf branch */}
      <svg
        className="absolute top-1/2 -left-8 -translate-y-1/2 w-20 h-28 text-[#4D683F] opacity-65 hidden sm:block"
        viewBox="0 0 60 90"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      >
        <path d="M30 85 Q 45 45 15 10" />
        <path d="M28 65 C 50 55 45 40 30 52" />
        <path d="M26 42 C 5 35 10 20 23 32" />
      </svg>
    </div>
  );
}

interface WhyUsProps {
  data?: WhyChooseUsConfig;
  className?: string;
}

export default function WhyUs({ data = defaultWhyUsData, className = "" }: WhyUsProps) {
  // Motion animation parameters matching strict requirement:
  // Fade in + move upward 12px, 700ms duration, cubic-bezier(0.22, 1, 0.36, 1)
  const containerVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="why-us"
      className={`scroll-mt-24 relative w-full bg-gradient-to-b from-[#F5F2E8] via-[#EDE6D7] to-[#F3EEE2] min-h-[720px] pt-[120px] pb-[100px] overflow-hidden text-[#172A25] ${className}`}
      aria-label="Why Choose Us"
    >
      <BackgroundBotanicals />

      {/* Main Canvas Max-Width 1440px / Content Max-Width 1240px */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 lg:px-16">
        <motion.div
          className="max-w-[1240px] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={containerVariants}
        >
          {/* Main Content Layout: Mobile stack (1 column), Tablet/Desktop (2 columns ~42% left / 58% right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-[60px] items-start">

            {/* ============================================================ */}
            {/* LEFT SIDE CONTENT (approx 42% width = 5 columns in 12-grid)  */}
            {/* ============================================================ */}
            <motion.div
              className="lg:col-span-5 pt-0 lg:pt-[25px] flex flex-col order-1"
              variants={itemVariants}
            >
              {/* Eyebrow with horizontal line */}
              <div className="flex items-center gap-4 mb-[24px]">
                <span className="font-sans text-[13px] font-medium tracking-[5px] uppercase text-[#4D683F] shrink-0">
                  {data.eyebrow}
                </span>
                <span className="h-[1px] w-12 bg-[#4D683F]/35 inline-block" aria-hidden="true" />
              </div>

              {/* Main Heading (Matching font-serif used across all other sections) */}
              <h2 className="font-serif text-[42px] md:text-[50px] lg:text-[64px] font-medium leading-[1.05] tracking-[-1.5px] text-[#172A25] mb-[18px]">
                {data.headline.line1}
                <br />
                {data.headline.line2}
              </h2>

              {/* Accent Text (Optional) */}
              {data.handwrittenAccent ? (
                <p className="font-serif italic text-[30px] md:text-[36px] lg:text-[42px] font-normal text-[#4D683F] leading-tight mb-[18px]">
                  {data.handwrittenAccent}
                </p>
              ) : null}

              {/* Description */}
              <p className="font-sans text-[15px] lg:text-[17px] leading-[1.7] text-[#58635F] max-w-[500px] mb-[38px]">
                {data.description}
              </p>

              {/* Mobile Image Collage placement slot for <768px order requirement */}
              <div className="block lg:hidden my-6 w-full">
                <MobileCollage data={data} />
              </div>

              {/* 4 Vertically Stacked Benefit Items */}
              <div className="flex flex-col gap-[22px] w-full">
                {data.benefits.map((item) => (
                  <motion.div
                    key={item.id}
                    className="flex items-start gap-[18px] cursor-default"
                    variants={itemVariants}
                  >
                    {/* Circle Icon Container: 56px x 56px, static styling without hover animation */}
                    <div className="w-[56px] h-[56px] rounded-full bg-[#DCE3D1] text-[#4D683F] flex items-center justify-center shrink-0 shadow-sm">
                      <RenderIcon type={item.icon} />
                    </div>

                    {/* Benefit Title & Description */}
                    <div className="pt-1">
                      <h3 className="font-serif text-[20px] font-medium text-[#172A25] mb-1">
                        {item.title}
                      </h3>
                      <p className="font-sans text-[14px] leading-[1.6] text-[#58635F]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* ============================================================ */}
            {/* RIGHT SIDE IMAGE COLLAGE (approx 58% width = 7 cols desktop) */}
            {/* ============================================================ */}
            <motion.div
              className="hidden lg:block lg:col-span-7 relative w-full pt-4 pb-12 pl-4 order-2"
              variants={itemVariants}
            >
              {/* Collage Frame Wrapper */}
              <div className="relative w-full max-w-[620px] mx-auto min-h-[540px]">
                <CollageBotanicals />

                {/* IMAGE 1: Large Main Spa Massage Image */}
                <div className="absolute top-0 right-0 z-10 w-[530px] h-[390px] rounded-[4px] border-4 border-white shadow-[0_18px_45px_rgba(40,50,40,0.10)] -rotate-2 overflow-hidden bg-[#EFEBDD]">
                  <Image
                    src={data.image1.url}
                    alt={data.image1.alt}
                    fill
                    sizes="(max-width: 1200px) 530px, 530px"
                    className="object-cover object-center"
                    priority
                  />

                  {/* Organic Badge overlapping Image 1 top right */}
                  <div className="absolute -top-3 -right-3 z-30 w-[145px] h-[145px] rounded-[50%_45%_55%_48%/48%_52%_48%_52%] bg-[#4D683F] text-white flex flex-col items-center justify-center p-3 text-center shadow-lg border-2 border-white/30 transform rotate-6">
                    <span className="font-serif italic text-[18px] leading-[1.2] font-normal tracking-wide">
                      {data.image1.badgeText[0]}
                      <br />
                      {data.image1.badgeText[1]}
                      <br />
                      {data.image1.badgeText[2]}
                    </span>
                  </div>
                </div>

                {/* IMAGE 2: Smaller Spa Still Life Image (Overlapping lower-left of Image 1 by ~80px) */}
                <div className="absolute bottom-4 left-0 z-20 w-[430px] h-[300px] rounded-[4px] border-4 border-white shadow-[0_18px_40px_rgba(40,50,40,0.12)] rotate-[2deg] overflow-hidden bg-[#EFEBDD]">
                  <Image
                    src={data.image2.url}
                    alt={data.image2.alt}
                    fill
                    sizes="(max-width: 1200px) 430px, 430px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Decorative Handwritten Text Overlay matching user reference image */}
                <div className="absolute -bottom-6 -right-6 lg:-right-10 z-30 text-left -rotate-6 transform pointer-events-none select-none">
                  <div className="font-caveat text-black leading-[1.05] text-[28px] md:text-[32px] font-medium flex flex-col tracking-wide">
                    <span>{data.image2.decorativePhrase.line1}</span>
                    <span className="pl-3">{data.image2.decorativePhrase.line2}</span>
                    {data.image2.decorativePhrase.line3 ? (
                      <span className="pl-6">{data.image2.decorativePhrase.line3}</span>
                    ) : null}
                  </div>
                  
                  {/* Slanted Underline */}
                  <svg
                    className="w-28 h-2.5 text-black mt-0.5 ml-3 opacity-90"
                    viewBox="0 0 140 10"
                    fill="none"
                  >
                    <path
                      d="M 5 6 Q 40 2 70 6 T 135 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>

                  {/* Outline Heart Icon below line right-aligned */}
                  <div className="flex justify-end pr-3 mt-0.5 text-black">
                    <svg
                      className="w-4 h-4 opacity-90"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Mobile Image Collage Component (<1024px layout)
function MobileCollage({ data }: { data: WhyChooseUsConfig }) {
  return (
    <div className="relative w-full max-w-[480px] mx-auto my-4 py-6">
      {/* Main Image 1 (90% width) */}
      <div className="relative w-[90%] aspect-[4/3] ml-auto rounded-[4px] border-4 border-white shadow-[0_12px_30px_rgba(40,50,40,0.10)] -rotate-2 overflow-hidden bg-[#EFEBDD]">
        <Image
          src={data.image1.url}
          alt={data.image1.alt}
          fill
          sizes="90vw"
          className="object-cover"
        />

        {/* Badge on Mobile Image 1 */}
        <div className="absolute -top-2 -right-2 z-30 w-[110px] h-[110px] rounded-[50%_45%_55%_48%/48%_52%_48%_52%] bg-[#4D683F] text-white flex flex-col items-center justify-center p-2 text-center shadow-md border-2 border-white/30 transform rotate-6">
          <span className="font-serif italic text-[15px] leading-[1.2]">
            {data.image1.badgeText[0]}
            <br />
            {data.image1.badgeText[1]}
            <br />
            {data.image1.badgeText[2]}
          </span>
        </div>
      </div>

      {/* Image 2 (72% width, overlapping lower-left of Image 1) */}
      <div className="relative -mt-24 z-20 w-[72%] aspect-[4/3] mr-auto rounded-[4px] border-4 border-white shadow-[0_12px_30px_rgba(40,50,40,0.12)] rotate-[2deg] overflow-hidden bg-[#EFEBDD]">
        <Image
          src={data.image2.url}
          alt={data.image2.alt}
          fill
          sizes="72vw"
          className="object-cover"
        />
      </div>

      {/* Decorative Text Mobile - Right corner overlay matching user request */}
      <div className="absolute bottom-2 -right-2 z-30 text-left -rotate-6 transform select-none pointer-events-none">
        <div className="font-caveat text-black leading-[1.05] text-[20px] sm:text-[24px] font-medium flex flex-col">
          <span>{data.image2.decorativePhrase.line1}</span>
          <span className="pl-2">{data.image2.decorativePhrase.line2}</span>
          {data.image2.decorativePhrase.line3 ? (
            <span className="pl-4">{data.image2.decorativePhrase.line3}</span>
          ) : null}
        </div>
        <svg
          className="w-20 h-2 text-black mt-0.5 ml-2 opacity-90"
          viewBox="0 0 140 10"
          fill="none"
        >
          <path
            d="M 5 6 Q 40 2 70 6 T 135 4"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex justify-end pr-2 mt-0.5 text-black">
          <svg
            className="w-3.5 h-3.5 opacity-90"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
