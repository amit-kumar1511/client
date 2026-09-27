"use client";

import { motion } from "framer-motion";
import { Leaf, HandHeart, MapPin, Clock, ChevronRight } from "lucide-react";
import Image from "next/image";

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

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function About() {
  const items = [
    { icon: Leaf, title: "Peaceful Ambience" },
    { icon: HandHeart, title: "Relaxing Treatments" },
    { icon: MapPin, title: "Lajpat Nagar 2 Location" },
    { icon: Clock, title: "Open 24 Hours (Online: 11 AM – 11 PM)" },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-ivory">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <FadeUp>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/massage2.jpg"
              alt="Amazing Wellness Spa therapeutic massage treatment in Lajpat Nagar"
              width={600}
              height={800}
              sizes="(max-width: 1024px) 50vw, 30vw"
              className="rounded-2xl shadow-luxury aspect-[3/4] object-cover w-full hover:scale-105 transition-transform duration-700"
            />
            <div className="flex flex-col gap-4 pt-10">
              <Image
                src="/images/about_2.jpg"
                alt="Relaxing private treatment room at Amazing Wellness Spa"
                width={400}
                height={400}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="rounded-2xl shadow-soft aspect-square object-cover w-full hover:scale-105 transition-transform duration-700"
              />
              <Image
                src="/images/massage3.png"
                alt="Serene spa wellness and therapy session"
                width={400}
                height={500}
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="rounded-2xl shadow-soft aspect-[4/5] object-cover w-full hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <SectionLabel>About Us</SectionLabel>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight text-cocoa">
            A Peaceful Escape in the <span className="italic text-gold">Heart of Lajpat Nagar 2</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            At Amazing Wellness Spa, we offer a calm and relaxing environment where guests can unwind
            and enjoy wellness-focused massage treatments. Managed by Sunny, our aim is to create a peaceful and
            comfortable spa experience for every visitor.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {items.map(({ icon: Icon, title }) => (
              <div key={title} className="flex items-center gap-4 p-4 rounded-xl bg-white shadow-soft border border-border/50">
                <div className="w-11 h-11 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-espresso" />
                </div>
                <span className="text-sm font-medium text-cocoa">{title}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => scrollTo("services")}
            className="mt-8 inline-flex items-center gap-2 px-7 py-3 rounded-full bg-cocoa text-white hover:bg-espresso transition-colors"
          >
            Explore Treatments <ChevronRight className="w-4 h-4" />
          </button>
        </FadeUp>
      </div>
    </section>
  );
}
