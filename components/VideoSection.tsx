"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      id="experience"
      className="relative py-12 sm:py-18 text-[#16211c] overflow-hidden"
      style={{ background: "linear-gradient(180deg, #F5F2E8 0%, #EDE6D7 50%, #F3EEE2 100%)" }}
    >
      <div className="relative z-10 mx-auto max-w-[920px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-10">
          <div className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase text-[#9d7431] font-medium">
            <span className="w-6 h-px bg-[#d8ab5e]" /> Sanctuary Experience <span className="w-6 h-px bg-[#d8ab5e]" />
          </div>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#16211c] tracking-tight">
            Step Into Pure <span className="italic" style={{ color: "oklch(0.78 0.11 78)" }}>Tranquility</span>
          </h2>
        </div>

        {/* Video Player Card */}
        <div className="relative group w-full overflow-hidden rounded-[20px] sm:rounded-[24px] border border-[#e5dfd3] bg-[#16211c] shadow-2xl">
          <video
            ref={videoRef}
            src="/assets/spa_sanctuary_video.mp4"
            poster="/images/gallery/spa_treatment_room_1790677609379.jpg"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="metadata"
            className="w-full h-auto max-h-[460px] object-cover block mx-auto"
          />

          {/* Minimal Mute Control Button at Bottom Right */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 pointer-events-auto">
            <button
              type="button"
              onClick={toggleMute}
              aria-label={isMuted ? "Unmute Video" : "Mute Video"}
              className="p-2.5 sm:p-3 rounded-full bg-[#16211c]/70 hover:bg-[#16211c]/90 text-white border border-white/20 backdrop-blur-md transition-all cursor-pointer shadow-lg"
            >
              {isMuted ? <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" /> : <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

