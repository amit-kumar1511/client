"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Navigation, MessageCircle, UserCheck } from "lucide-react";

const PHONE = "+918797191340";
const PHONE_DISPLAY = "+91 8797191340";
const EMAIL = "amazingwellnessspa.info@gmail.com";
const WA = "918797191340";
const MAPS_LINK = "https://maps.google.com/?q=72/1,+2nd+Floor,+Near+A+Block,+Muthoot+Finance,+Near+Samara+Honda,+Lajpat+Nagar+2,+New+Delhi,+Delhi+110024";
const MAPS_EMBED =
  "https://www.google.com/maps?q=72/1,+2nd+Floor,+Near+A+Block,+Muthoot+Finance,+Near+Samara+Honda,+Lajpat+Nagar+2,+New+Delhi,+Delhi+110024&output=embed";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase text-[#4D683F] font-semibold">
      <span className="w-8 h-px bg-[#4D683F]/40" /> {children} <span className="w-8 h-px bg-[#4D683F]/40" />
    </div>
  );
}

function FadeUp({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

function InfoRow({ icon: Icon, title, value, href }: { icon: any; title: string; value: string; href?: string }) {
  const inner = (
    <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#F5F2E8]/90 hover:bg-[#EDE6D7] transition-all cursor-pointer">
      {/* Icon Circle Container matching Why Choose Us colors (#DCE3D1 bg & #4D683F icon) */}
      <div className="w-12 h-12 rounded-full bg-[#DCE3D1] text-[#4D683F] flex items-center justify-center shrink-0 shadow-sm">
        <Icon className="w-5 h-5 stroke-[1.5]" />
      </div>
      <div className="min-w-0 pt-0.5">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-[#4D683F]">{title}</div>
        <div className="text-[#172A25] font-serif text-base font-medium mt-0.5 leading-snug break-all">{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      onClick={(e) => {
        if (href.startsWith("mailto:")) {
          const isMobile = typeof navigator !== "undefined" && /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
          if (!isMobile) {
            e.preventDefault();
            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`, "_blank");
          }
        }
      }}
      className="block hover:opacity-95"
    >
      {inner}
    </a>
  ) : (
    inner
  );
}

export default function Location() {
  return (
    <section
      id="location"
      className="scroll-mt-24 py-20 sm:py-28"
      style={{ background: "linear-gradient(180deg, #F5F2E8 0%, #EDE6D7 50%, #F3EEE2 100%)" }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeUp>
            <SectionLabel>Visit Us</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#172A25]">
              Find Us in <span className="italic text-[#4D683F]">Lajpat Nagar 2</span>
            </h2>
          </FadeUp>
        </div>
        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-stretch">
          <FadeUp>
            <div className="rounded-2xl overflow-hidden shadow-lg h-full min-h-[360px]">
              <iframe
                src={MAPS_EMBED}
                title="Amazing Wellness Spa location"
                className="w-full h-full min-h-[360px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="h-full bg-white rounded-3xl p-8 shadow-lg flex flex-col">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#172A25]">Amazing Wellness Spa</h3>
              <div className="mt-6 space-y-3.5">
                <InfoRow
                  icon={MapPin}
                  title="Address"
                  value="72/1, 2nd Floor, Near A Block, Muthoot Finance, Near Samara Honda, Lajpat Nagar 2, New Delhi, Delhi - 110024"
                />
                <InfoRow icon={UserCheck} title="Contact Person" value="Sunny" />
                <InfoRow icon={Phone} title="Phone / WhatsApp" value={PHONE_DISPLAY} href={`tel:${PHONE}`} />
                <InfoRow icon={Mail} title="Email Address" value={EMAIL} href={`mailto:${EMAIL}`} />
                <InfoRow icon={Clock} title="Operating Status" value="24 Hours Open (Online Hours: 11:00 AM – 11:00 PM)" />
              </div>
              <div className="mt-8 pt-4 grid sm:grid-cols-3 gap-3">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#172A25] text-white text-sm font-medium hover:bg-[#4D683F] transition-colors shadow-sm"
                >
                  <Navigation className="w-4 h-4 text-[#d8ab5e]" /> Directions
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#DCE3D1] text-[#172A25] text-sm font-semibold hover:bg-[#cdd8c0] transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4 text-[#4D683F]" /> Call Now
                </a>
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent("Hello Sunny, I would like to book a session at Amazing Wellness Spa.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-gold text-espresso text-sm font-semibold hover:scale-[1.02] transition-transform shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
