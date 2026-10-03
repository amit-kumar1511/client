"use client";

import { MapPin, Phone, Clock, MessageCircle, UserCheck } from "lucide-react";
import Image from "next/image";
import { scrollToSection } from "@/lib/utils";
import { SERVICES } from "./Services";

const PHONE = "+918797191340";
const PHONE_DISPLAY = "+91 8797191340";
const WA = "918797191340";
const MAPS_LINK = "https://maps.google.com/?q=72/1,+2nd+Floor,+Near+A+Block,+Muthoot+Finance,+Near+Samara+Honda,+Lajpat+Nagar+2,+New+Delhi,+Delhi+110024";

export default function Footer() {
  return (
    <footer className="bg-espresso text-white/80 pt-16 pb-24 md:pb-10 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{ backgroundImage: "radial-gradient(circle at 80% 20%, oklch(0.78 0.11 78 / 0.5), transparent 40%)" }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="Amazing Wellness Spa" width={48} height={48} className="h-12 w-12 object-contain" />
            <div className="font-serif leading-tight">
              <div className="text-sm tracking-[0.2em]">AMAZING WELLNESS</div>
              <div className="text-[10px] tracking-[0.3em] opacity-70">SPA</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-white/60 leading-relaxed">
            A peaceful escape for massage and wellness treatments in the heart of Lajpat Nagar 2, New Delhi.
          </p>
        </div>
        <div>
          <h4 className="font-serif text-gold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              ["About", "about"],
              ["Services", "services"],
              ["Gallery", "gallery"],
              ["Reviews", "reviews"],
              ["Contact", "book"],
            ].map(([l, id]) => (
              <li key={id}>
                <button onClick={() => scrollToSection(id)} className="hover:text-gold transition-colors">
                  {l}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-gold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.name}>
                <button onClick={() => scrollToSection("services")} className="hover:text-gold transition-colors text-left">
                  {s.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-gold mb-4">Contact & Location</h4>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex gap-2">
              <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" /> 72/1, 2nd Floor, Near A Block, Muthoot Finance, Near Samara Honda, Lajpat Nagar 2, New Delhi, Delhi - 110024
            </li>
            <li className="flex gap-2">
              <UserCheck className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Contact: Sunny
            </li>
            <li className="flex gap-2">
              <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />{" "}
              <a href={`tel:${PHONE}`} className="hover:text-gold">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex gap-2">
              <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" /> Open 24 Hours Daily (Online: 11 AM – 11 PM)
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-2">
            <a
              href={`https://wa.me/${WA}?text=${encodeURIComponent("Hello Sunny, I would like to book a session at Amazing Wellness Spa.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-gold text-espresso text-xs font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
            <a
              href={MAPS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 text-xs"
            >
              <MapPin className="w-3.5 h-3.5" /> Maps
            </a>
          </div>
        </div>
      </div>
      <div className="relative mt-12 pt-6 border-t border-white/10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
        <span>© 2026 Amazing Wellness Spa. All rights reserved.</span>
        <span className="italic">Prices and availability are subject to confirmation with Sunny.</span>
      </div>
    </footer>
  );
}
