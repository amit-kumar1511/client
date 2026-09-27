"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate, PanInfo } from "framer-motion";
import { Star, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const MAPS_LINK = "https://maps.app.goo.gl/UMuATrxaNd9PY3Si7";

const reviews = [
  {
    id: 1,
    name: "Emily Davis",
    role: "Verified Guest",
    rating: 5,
    text: "The spa environment is extraordinarily peaceful and clean. Highly attentive therapists and excellent full body massage!",
    avatar: "/images/avatar4.jpg",
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Regular Guest, Lajpat Nagar",
    rating: 5,
    text: "A very calm and relaxing spa. The staff and manager Sunny are very professional and the ambience is peaceful. Loved my therapy session.",
    avatar: "/images/avatar2.jpg",
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Verified Guest, South Delhi",
    rating: 5,
    text: "Clean and comfortable place with soothing treatments. Great experience in Lajpat Nagar 2 — highly recommend Amazing Wellness Spa.",
    avatar: "/images/avatar3.jpg",
  },
  {
    id: 4,
    name: "Ananya Roy",
    role: "Wellness Enthusiast",
    rating: 5,
    text: "The best way to unwind after a long week. The deep tissue treatment was excellent and the space feels premium and clean.",
    avatar: "/images/avatar2.jpg",
  },
  {
    id: 5,
    name: "Vikram Malhotra",
    role: "Business Traveler",
    rating: 5,
    text: "Visited after a hectic trip to Delhi. The therapist was incredible and Sunny made sure everything was smooth and welcoming.",
    avatar: "/images/avatar1.jpg",
  },
  {
    id: 6,
    name: "Rohan Mehta",
    role: "Corporate Executive",
    rating: 5,
    text: "Outstanding hospitality and serene private rooms. The massage therapy completely relieved my stress and back pain.",
    avatar: "/images/avatar1.jpg",
  },
  {
    id: 7,
    name: "Sneha Gupta",
    role: "Local Resident",
    rating: 5,
    text: "I come here twice a month for aromatherapy sessions. Truly a hidden gem in Lajpat Nagar 2 with top notch therapists.",
    avatar: "/images/avatar4.jpg",
  },
];

// Quadruple array for seamless infinite circular loop
const infiniteReviews = [...reviews, ...reviews, ...reviews, ...reviews];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold font-medium">
      <span className="w-8 h-px bg-gold" /> {children} <span className="w-8 h-px bg-gold" />
    </div>
  );
}

export default function Reviews() {
  const [isPaused, setIsPaused] = useState(false);
  const [layoutSpec, setLayoutSpec] = useState({
    cardWidth: 360,
    gap: 24,
    step: 384,
  });

  const x = useMotionValue(0);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Measure container width dynamically for 3 cards in laptop and 1 card in mobile
  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;
      // Max inner content width matching px-4 (sm:px-6, lg:px-8)
      const padding = w < 640 ? 32 : w < 1024 ? 48 : 64;
      const containerW = Math.min(w - padding, 1200);

      if (w < 640) {
        // Mobile (<640px): Exactly 1 card visible per view
        const cardW = containerW;
        const g = 16;
        setLayoutSpec({
          cardWidth: cardW,
          gap: g,
          step: cardW + g,
        });
      } else if (w < 1024) {
        // Tablet (640px - 1023px): Exactly 2 cards visible per view
        const g = 20;
        const cardW = (containerW - g) / 2;
        setLayoutSpec({
          cardWidth: cardW,
          gap: g,
          step: cardW + g,
        });
      } else {
        // Desktop / Laptop (>=1024px): Exactly 3 cards visible side-by-side per view
        const g = 24;
        const cardW = (containerW - 2 * g) / 3;
        setLayoutSpec({
          cardWidth: cardW,
          gap: g,
          step: cardW + g,
        });
      }
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  const singleSetWidth = reviews.length * layoutSpec.step;

  // Auto-scroll loop (1 card per step)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      let currentX = x.get();
      let targetX = currentX - layoutSpec.step;

      if (Math.abs(targetX) >= singleSetWidth * 2) {
        x.set(targetX + singleSetWidth);
        targetX = x.get() - layoutSpec.step;
      }

      animate(x, targetX, {
        duration: 0.75,
        ease: [0.22, 1, 0.36, 1],
      });
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, x, layoutSpec.step, singleSetWidth]);

  // Handle drag / swipe release with automatic snap-to-card position
  const handleDragEnd = (_: any, info: PanInfo) => {
    let currentX = x.get();
    const velocity = info?.velocity?.x || 0;

    // Calculate nearest card index using velocity offset
    let targetIndex: number;
    if (Math.abs(velocity) > 200) {
      targetIndex = velocity < 0 ? Math.floor(currentX / layoutSpec.step) : Math.ceil(currentX / layoutSpec.step);
    } else {
      targetIndex = Math.round(currentX / layoutSpec.step);
    }

    let snappedX = targetIndex * layoutSpec.step;

    if (Math.abs(snappedX) >= singleSetWidth * 2) {
      x.set(snappedX + singleSetWidth);
      snappedX = x.get();
    } else if (snappedX > 0) {
      x.set(snappedX - singleSetWidth);
      snappedX = x.get();
    }

    // Smooth auto-adjust snap animation
    animate(x, snappedX, {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    });

    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2500);
  };

  const handleInteractionStart = () => {
    setIsPaused(true);
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const scrollNext = () => {
    handleInteractionStart();
    let currentX = x.get();
    let targetX = currentX - layoutSpec.step;

    if (Math.abs(targetX) >= singleSetWidth * 2) {
      x.set(targetX + singleSetWidth);
      targetX = x.get() - layoutSpec.step;
    }

    animate(x, targetX, {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    });

    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2500);
  };

  const scrollPrev = () => {
    handleInteractionStart();
    let currentX = x.get();
    let targetX = currentX + layoutSpec.step;

    if (targetX > 0) {
      x.set(targetX - singleSetWidth);
      targetX = x.get() + layoutSpec.step;
    }

    animate(x, targetX, {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    });

    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 2500);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#faf8f5] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <SectionLabel>Guest Reviews</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-cocoa">
            What Our <span className="italic text-gold">Guests Say</span>
          </h2>
          <p className="mt-3 text-cocoa/70 text-sm sm:text-base max-w-xl mx-auto">
            Real stories from our valued visitors in Lajpat Nagar, Delhi.
          </p>
        </div>

        {/* Carousel Container */}
        <div 
          className="mt-12 sm:mt-14 relative w-full overflow-hidden"
          onMouseEnter={handleInteractionStart}
          onMouseLeave={() => {
            if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
            resumeTimerRef.current = setTimeout(() => setIsPaused(false), 800);
          }}
        >
          {/* Framer Motion Drag Track */}
          <motion.div
            style={{ 
              x,
              gap: `${layoutSpec.gap}px`
            }}
            drag="x"
            dragConstraints={{ left: -singleSetWidth * 3, right: 0 }}
            dragElastic={0.08}
            onDragStart={handleInteractionStart}
            onDragEnd={handleDragEnd}
            onTouchStart={handleInteractionStart}
            onTouchEnd={() => {
              if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
              resumeTimerRef.current = setTimeout(() => setIsPaused(false), 2500);
            }}
            className="flex py-4 cursor-grab active:cursor-grabbing touch-pan-y"
          >
            {infiniteReviews.map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                style={{ width: `${layoutSpec.cardWidth}px` }}
                className="shrink-0 h-[250px] sm:h-[260px] bg-white rounded-2xl p-6 sm:p-8 border border-neutral-200/90 shadow-[0_10px_30px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_18px_40px_-10px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col justify-between select-none"
              >
                {/* Top Section: Round Avatar + Name & Title */}
                <div>
                  <div className="flex items-center gap-4">
                    <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-neutral-200 shrink-0 bg-neutral-100 shadow-xs">
                      <Image
                        src={review.avatar}
                        alt={`Photo of ${review.name}`}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold text-neutral-900 text-base sm:text-lg leading-snug truncate">
                        {review.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-neutral-500 font-normal truncate">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  {/* Middle Section: Quote Text */}
                  <div className="mt-4 sm:mt-5 min-h-[64px] flex items-center">
                    <p className="text-neutral-800 text-sm sm:text-[16px] font-normal leading-relaxed line-clamp-3">
                      "{review.text}"
                    </p>
                  </div>
                </div>

                {/* Bottom Section: 5 Bright Yellow Stars */}
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star 
                      key={j} 
                      className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 stroke-[1.5]" 
                    />
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Navigation Controls: Two Buttons (Left & Right) */}
          <div className="mt-6 sm:mt-10 flex items-center justify-center gap-6">
            <button
              onClick={scrollPrev}
              aria-label="Previous reviews"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-border/80 text-cocoa hover:bg-gold hover:text-white hover:border-gold transition-all shadow-md hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={scrollNext}
              aria-label="Next reviews"
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border border-border/80 text-cocoa hover:bg-gold hover:text-white hover:border-gold transition-all shadow-md hover:scale-105 active:scale-95 flex items-center justify-center cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Google Maps Link */}
          <div className="mt-6 sm:mt-8 text-center">
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-cocoa/20 bg-white text-cocoa hover:bg-cocoa hover:text-white transition-colors text-xs sm:text-sm font-medium shadow-xs"
            >
              <MapPin className="w-4 h-4 text-gold group-hover:text-white" /> View on Google Maps
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
