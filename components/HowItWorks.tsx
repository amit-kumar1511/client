"use client";

import { motion } from "framer-motion";
import { Compass, CalendarCheck, MessageCircle, HandHeart } from "lucide-react";

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

export default function HowItWorks() {
  const steps = [
    { icon: Compass, title: "Choose Your Treatment", d: "Browse our menu of relaxing spa treatments." },
    { icon: CalendarCheck, title: "Fill the Booking Form", d: "Add your preferred date, time and details." },
    { icon: MessageCircle, title: "Confirm on WhatsApp", d: "We confirm your slot on WhatsApp quickly." },
    { icon: HandHeart, title: "Visit and Relax", d: "Arrive at our spa and enjoy pure calm." },
  ];

  return (
    <section className="py-20 sm:py-28 bg-espresso text-white relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, oklch(0.78 0.11 78 / 0.4), transparent 40%), radial-gradient(circle at 80% 70%, oklch(0.68 0.12 65 / 0.4), transparent 40%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <FadeUp>
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl">
              Your Spa Journey in <span className="italic text-gold">Four Steps</span>
            </h2>
          </FadeUp>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map(({ icon: Icon, title, d }, i) => (
            <FadeUp key={title} delay={i * 0.08}>
              <div className="relative p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur h-full">
                <div className="text-6xl font-serif text-gold/20 absolute top-3 right-5">{i + 1}</div>
                <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-espresso" />
                </div>
                <h3 className="font-serif text-lg">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{d}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
