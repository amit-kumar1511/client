"use client";

import { Phone, CalendarCheck } from "lucide-react";

const PHONE = "+918797191340";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

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
          onClick={() => scrollTo("book")}
          className="inline-flex items-center justify-center gap-2 py-3 rounded-full bg-gradient-gold text-espresso text-sm font-medium"
        >
          <CalendarCheck className="w-4 h-4" /> Book Now
        </button>
      </div>
    </div>
  );
}
