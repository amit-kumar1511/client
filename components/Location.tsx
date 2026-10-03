"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, MessageCircle, UserCheck } from "lucide-react";

const PHONE = "+918797191340";
const PHONE_DISPLAY = "+91 8797191340";
const WA = "918797191340";
const MAPS_LINK = "https://maps.google.com/?q=72/1,+2nd+Floor,+Near+A+Block,+Muthoot+Finance,+Near+Samara+Honda,+Lajpat+Nagar+2,+New+Delhi,+Delhi+110024";
const MAPS_EMBED =
  "https://www.google.com/maps?q=72/1,+2nd+Floor,+Near+A+Block,+Muthoot+Finance,+Near+Samara+Honda,+Lajpat+Nagar+2,+New+Delhi,+Delhi+110024&output=embed";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold font-medium">
      <span className="w-8 h-px bg-gold" /> {children} <span className="w-8 h-px bg-gold" />
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
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white border border-border/60 shadow-soft">
      <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-espresso" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{title}</div>
        <div className="text-cocoa font-medium mt-0.5 leading-snug">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} className="block hover:opacity-90">{inner}</a> : inner;
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
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl text-cocoa">
              Find Us in <span className="italic text-gold">Lajpat Nagar 2</span>
            </h2>
          </FadeUp>
        </div>
        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-stretch">
          <FadeUp>
            <div className="rounded-2xl overflow-hidden shadow-luxury h-full min-h-[360px]">
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
            <div className="h-full bg-white rounded-2xl p-8 shadow-soft border border-border/60 flex flex-col">
              <h3 className="font-serif text-2xl text-cocoa">Amazing Wellness Spa</h3>
              <div className="mt-6 space-y-4">
                <InfoRow
                  icon={MapPin}
                  title="Address"
                  value="72/1, 2nd Floor, Near A Block, Muthoot Finance, Near Samara Honda, Lajpat Nagar 2, New Delhi, Delhi - 110024"
                />
                <InfoRow icon={UserCheck} title="Contact Person" value="Sunny" />
                <InfoRow icon={Phone} title="Phone / WhatsApp" value={PHONE_DISPLAY} href={`tel:${PHONE}`} />
                <InfoRow icon={Clock} title="Operating Status" value="24 Hours Open (Online Hours: 11:00 AM – 11:00 PM)" />
              </div>
              <div className="mt-8 pt-6 border-t border-border/40 grid sm:grid-cols-3 gap-3">
                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-cocoa text-white text-sm hover:bg-espresso transition-colors"
                >
                  <Navigation className="w-4 h-4" /> Directions
                </a>
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-cocoa/30 text-cocoa text-sm hover:bg-secondary transition-colors"
                >
                  <Phone className="w-4 h-4" /> Call Now
                </a>
                <a
                  href={`https://wa.me/${WA}?text=${encodeURIComponent("Hello Sunny, I would like to book a session at Amazing Wellness Spa.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-gradient-gold text-espresso text-sm hover:scale-[1.02] transition-transform"
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
