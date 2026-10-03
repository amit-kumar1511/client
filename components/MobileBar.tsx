"use client";

import { Phone, CalendarCheck } from "lucide-react";
import { scrollToSection } from "@/lib/utils";

const PHONE = "+918797191340";

export default function MobileBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden bg-white/95 backdrop-blur border-t border-border shadow-luxury">
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={`tel:${PHONE}`}
          className="inline-flex items-center justify-center gap-2 py-3 rounded-full border border-cocoa/30 text-cocoa text-sm font-medium"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <button
          onClick={() => scrollToSection("book")}
          className="inline-flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-gold text-espresso text-sm font-medium"
        >
          <CalendarCheck className="w-4 h-4" /> Book Now
        </button>
      </div>
    </div>
  );
}
