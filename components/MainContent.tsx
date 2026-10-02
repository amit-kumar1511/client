"use client";

import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import TrustHighlights from "./TrustHighlights";
import WhyUs from "./WhyUs";
import Services from "./Services";
import VideoSection from "./VideoSection";
import HowItWorks from "./HowItWorks";
import Gallery from "./Gallery";
import Reviews from "./Reviews";
import CTABanner from "./CTABanner";
import Location from "./Location";
import BookingForm from "./BookingForm";
import Footer from "./Footer";
import FloatingWA from "./FloatingWA";
import MobileBar from "./MobileBar";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function MainContent() {
  const [selectedService, setSelectedService] = useState("");

  const bookService = (name: string) => {
    setSelectedService(name);
    setTimeout(() => scrollTo("book"), 50);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip">
      <Header />
      <main>
        {/* Sticky Hero Container for Parallax Curtain Reveal */}
        <div className="sticky top-0 z-0 h-screen w-full">
          <Hero />
        </div>

        {/* Overlapping Content Container starting with About Section */}
        <div
          className="relative z-10 rounded-t-[2.5rem] sm:rounded-t-[4rem] shadow-[0_-30px_60px_-15px_rgba(0,0,0,0.5)] border-t border-white/20"
          style={{ background: "linear-gradient(180deg, #F5F2E8 0%, #EDE6D7 50%, #F3EEE2 100%)" }}
        >
          <About />
          <TrustHighlights />
          <Services onBook={bookService} />
          <Gallery />
          <VideoSection />
          <WhyUs />
          <HowItWorks />
          <Reviews />
          <CTABanner />
          <Location />
          <BookingForm selectedService={selectedService} setSelectedService={setSelectedService} />
          <Footer />
        </div>
      </main>
      <FloatingWA />
      <MobileBar />
    </div>
  );
}
