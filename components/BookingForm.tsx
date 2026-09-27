"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { MessageCircle, Clock } from "lucide-react";
import Image from "next/image";
import { SERVICES } from "./Services";

const WA = "918797191340";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase text-gold font-medium">
      <span className="w-8 h-px bg-gold" /> {children}{" "}
      <span className="w-8 h-px bg-gold" />
    </div>
  );
}

function FadeUp({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

export default function BookingForm({
  selectedService,
  setSelectedService,
}: {
  selectedService: string;
  setSelectedService: (s: string) => void;
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const err: Record<string, string> = {};
    if (!form.name.trim()) err.name = "Full Name is required.";
    if (!form.phone.trim() || !/^[6-9]\d{9}$/.test(form.phone.replace(/\s+/g, "")))
      err.phone = "Enter a valid 10-digit mobile number.";
    setErrors(err);
    if (Object.keys(err).length) return;

    const msg = `Hello Sunny (Amazing Wellness Spa),\n\nI would like to book an appointment.\n\nName: ${form.name}\nPhone: ${form.phone}\nSelected Category/Service: ${selectedService || "Not selected"}\nPreferred Date: ${form.date || "Not specified"}\nMessage: ${form.message || "None"}\n\nPlease confirm availability.\n\nThank you.`;
    window.open(`https://wa.me/${WA}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section id="book" className="py-20 sm:py-28 bg-cream relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <FadeUp>
            <SectionLabel>Book Appointment</SectionLabel>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-cocoa leading-tight">
              Ready to <span className="italic text-gold">Relax?</span>
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto font-sans">
              Book appointment now for wellness, peace, and rejuvenation.
            </p>
          </FadeUp>
        </div>

        {/* 2-Column Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Image with Opening Hours Overlay */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <FadeUp delay={0.1}>
              <div className="relative h-[380px] sm:h-[420px] lg:h-full min-h-[380px] lg:min-h-[440px] rounded-3xl overflow-hidden shadow-luxury border border-white/40 group">
                <Image
                  src="/images/appointment_girl.png"
                  alt="Spa Appointment & Wellness Treatment"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/90 via-espresso/25 to-transparent" />
                
                {/* Opening Hours Box Overlay (on top of image at bottom) */}
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto p-3 rounded-xl bg-espresso/90 backdrop-blur-md text-white border border-white/20 shadow-xl flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-gold/20 border border-gold/40 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xs sm:text-sm text-gold font-medium">
                      Opening Hours:
                    </h3>
                    <p className="text-xs text-white/95 font-sans mt-0.5">
                      Mon - Sun ( 10:00am - 11:30pm )
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="lg:col-span-6 flex flex-col h-full">
            <FadeUp delay={0.15}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-luxury border border-border/60 h-full flex flex-col justify-between">
                <form onSubmit={submit} noValidate className="space-y-6 pt-2">
                  
                  {/* Name & Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="absolute -top-2.5 left-3.5 px-1.5 bg-white text-[11px] font-medium text-cocoa/80 tracking-wide z-10 pointer-events-none select-none">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => set("name", e.target.value)}
                        className="input"
                        placeholder="Enter your full name"
                      />
                      {errors.name && (
                        <span className="text-xs text-destructive mt-1 block">
                          {errors.name}
                        </span>
                      )}
                    </div>
                    <div className="relative">
                      <label className="absolute -top-2.5 left-3.5 px-1.5 bg-white text-[11px] font-medium text-cocoa/80 tracking-wide z-10 pointer-events-none select-none">
                        Phone Number *
                      </label>
                      <input
                        type="text"
                        required
                        inputMode="numeric"
                        maxLength={10}
                        value={form.phone}
                        onChange={(e) =>
                          set("phone", e.target.value.replace(/\D/g, ""))
                        }
                        className="input"
                        placeholder="10-digit mobile number"
                      />
                      {errors.phone && (
                        <span className="text-xs text-destructive mt-1 block">
                          {errors.phone}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Category / Service & Date */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="absolute -top-2.5 left-3.5 px-1.5 bg-white text-[11px] font-medium text-cocoa/80 tracking-wide z-10 pointer-events-none select-none">
                        Select Category
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="input"
                      >
                        <option value="">Select Category</option>
                        {SERVICES.map((s) => (
                          <option key={s.name} value={s.name}>
                            {s.name} ({s.duration})
                          </option>
                        ))}
                        <option value="Signature Facials">Signature Facials</option>
                        <option value="Therapeutic Massages">Therapeutic Massages</option>
                        <option value="Body Scrubs">Body Scrubs</option>
                        <option value="Reflexology">Reflexology</option>
                        <option value="Healing Therapy">Healing Therapy</option>
                        <option value="Rejuvenation Ritual">Rejuvenation Ritual</option>
                      </select>
                    </div>
                    <div className="relative">
                      <label className="absolute -top-2.5 left-3.5 px-1.5 bg-white text-[11px] font-medium text-cocoa/80 tracking-wide z-10 pointer-events-none select-none">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split("T")[0]}
                        value={form.date}
                        onChange={(e) => set("date", e.target.value)}
                        className="input"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="relative">
                    <label className="absolute -top-2.5 left-3.5 px-1.5 bg-white text-[11px] font-medium text-cocoa/80 tracking-wide z-10 pointer-events-none select-none">
                      Message / Special Requests
                    </label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      className="input resize-none"
                      placeholder="Any specific preference or timing request for Sunny?"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-full bg-gradient-gold text-espresso font-semibold tracking-wide shadow-soft hover:shadow-luxury hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer mt-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>Book an Appointment</span>
                  </button>
                </form>
              </div>
            </FadeUp>
          </div>

        </div>

      </div>
      <style>{`
        .input {
          width: 100%;
          padding: 0.85rem 1rem;
          border-radius: 0.85rem;
          border: 1px solid var(--border);
          background: white;
          color: var(--foreground);
          outline: none;
          font-size: 0.9rem;
          box-shadow: none;
          transition: border-color 0.2s ease;
        }
        .input:focus {
          border-color: var(--gold);
          outline: none;
          box-shadow: none;
        }
      `}</style>
    </section>
  );
}
