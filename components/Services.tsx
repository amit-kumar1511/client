"use client";

import { motion } from "framer-motion";

export const DETAILED_SERVICES = [
  {
    id: "therapy-turkish",
    idx: "01",
    totalCount: "15",
    name: "Turkish Massage",
    img: "assets/img/chamber.webp",
    desc: "The hammam tradition. Steam opens the pores first, then deep tissue work, gentle stretching and aromatic oil — all in a warm, steamy room.",
    steps: [
      "Steam to open the pores",
      "Deep tissue work and stretching",
      "Aromatic oil to finish"
    ],
    facts: [
      { k: "90 MIN", v: "₹4,500" },
      { k: "120 MIN", v: "₹5,500" }
    ]
  },
  {
    id: "therapy-full-body",
    idx: "02",
    totalCount: "15",
    name: "Full Body Massage",
    img: "/images/massage1.jpg",
    desc: "Full body therapy designed to relieve tension, release muscle knots, and restore full physical and mental vitality.",
    steps: [
      "Full body warmup & gentle compression",
      "Deep therapeutic muscle knot release",
      "Soothing head, neck and scalp relaxation"
    ],
    facts: [
      { k: "60 MIN", v: "₹1,000" },
      { k: "90 MIN", v: "₹1,800" },
      { k: "120 MIN", v: "₹2,500" }
    ]
  },
  {
    id: "therapy-deep-tissue",
    idx: "03",
    totalCount: "15",
    name: "Deep Tissue Massage",
    img: "/images/massage2.jpg",
    desc: "Targeted deep pressure technique focusing on deeper muscle layers to ease chronic muscle stiffness and fatigue.",
    steps: [
      "Deep pressure muscle tissue warm up",
      "Targeted trigger point pressure therapy",
      "Restorative stretching and alignment"
    ],
    facts: [
      { k: "60 MIN", v: "₹1,200" },
      { k: "90 MIN", v: "₹2,000" },
      { k: "120 MIN", v: "₹2,800" }
    ]
  },
  {
    id: "therapy-aroma",
    idx: "04",
    totalCount: "15",
    name: "Aroma Therapy",
    img: "assets/img/aroma.webp",
    desc: "Essential oils chosen for how you want to feel, inhaled and worked into the skin. Different oils for stress, for sleep, for lift.",
    steps: [
      "Choose your oil at reception",
      "Light, even full-body strokes",
      "Steam and rest to close"
    ],
    facts: [
      { k: "60 MIN", v: "₹2,500" },
      { k: "90 MIN", v: "₹3,000" },
      { k: "120 MIN", v: "₹3,500" }
    ]
  },
  {
    id: "therapy-dry",
    idx: "05",
    totalCount: "15",
    name: "Dry Massage",
    img: "/images/room1.jpg",
    desc: "A relaxing pressure-based massage session performed over comfortable clothing without oil to relieve body aches.",
    steps: [
      "Rhythmic palm and thumb compression",
      "Acupressure point therapy",
      "Gentle full-body flexes and stretches"
    ],
    facts: [
      { k: "45 MIN", v: "₹1,000" },
      { k: "60 MIN", v: "₹1,400" },
      { k: "90 MIN", v: "₹1,900" }
    ]
  },
  {
    id: "therapy-cream",
    idx: "06",
    totalCount: "15",
    name: "Cream Massage",
    img: "/images/room2.jpg",
    desc: "A smooth and comfortable massage using rich nourishing massage cream to hydrate skin and ease tightness.",
    steps: [
      "Application of herbal massage cream",
      "Long smooth gliding effleurage strokes",
      "Deep skin hydration and muscle relaxation"
    ],
    facts: [
      { k: "45 MIN", v: "₹1,200" },
      { k: "60 MIN", v: "₹1,600" },
      { k: "90 MIN", v: "₹2,200" }
    ]
  },
  {
    id: "therapy-thai-balm",
    idx: "07",
    totalCount: "15",
    name: "Thai Balm Massage",
    img: "/images/massage3.png",
    desc: "A deeply invigorating massage treatment using authentic cooling herbal Thai balm for joint and muscle relief.",
    steps: [
      "Warm Thai herbal balm application",
      "Authentic Thai stretching and line work",
      "Deep warming muscle relief"
    ],
    facts: [
      { k: "45 MIN", v: "₹1,500" },
      { k: "60 MIN", v: "₹2,000" },
      { k: "90 MIN", v: "₹2,700" }
    ]
  },
  {
    id: "therapy-hot-oil",
    idx: "08",
    totalCount: "15",
    name: "Oil / Hot Oil Massage",
    img: "/images/massage4.png",
    desc: "A soothing and deeply comforting massage using warm therapeutic oil to melt stress and improve joint mobility.",
    steps: [
      "Warm oil pour and distribution",
      "Rhythmic full-body glide and knead",
      "Targeted neck and shoulder tension release"
    ],
    facts: [
      { k: "45 MIN", v: "₹1,200" },
      { k: "60 MIN", v: "₹1,800" },
      { k: "90 MIN", v: "₹2,400" }
    ]
  },
  {
    id: "therapy-scrub",
    idx: "09",
    totalCount: "15",
    name: "Massage & Scrub",
    img: "/images/why2.jpg",
    desc: "A combined rejuvenating full body massage and natural exfoliating body scrub for radiant, silky smooth skin.",
    steps: [
      "Full body exfoliation scrub session",
      "Warm rinse and skin preparation",
      "Nourishing oil massage finish"
    ],
    facts: [
      { k: "60 MIN", v: "₹1,800" },
      { k: "90 MIN", v: "₹2,000" },
      { k: "120 MIN", v: "₹2,800" }
    ]
  },
  {
    id: "therapy-jacuzzi",
    idx: "10",
    totalCount: "15",
    name: "Massage & Jacuzzi",
    img: "assets/img/chamber.webp",
    desc: "A combined massage and jacuzzi relaxation experience. Warm hydrotherapy jets soothe muscles before massage.",
    steps: [
      "Warm hydrotherapy jacuzzi soak",
      "Deeply relaxing full body massage",
      "Aromatic oil hydration to finish"
    ],
    facts: [
      { k: "60 MIN", v: "₹2,000" },
      { k: "90 MIN", v: "₹2,500" },
      { k: "120 MIN", v: "₹3,500" }
    ]
  },
];

export const SERVICES = DETAILED_SERVICES.map((s) => ({
  name: s.name,
  price: s.facts[0]?.v || "",
  duration: s.facts[0]?.k || "",
  desc: s.desc,
}));

export default function Services({ onBook }: { onBook: (name: string) => void }) {
  return (
    <section id="services" className="py-0" style={{ background: "linear-gradient(180deg, #F5F2E8 0%, #EDE6D7 50%, #F3EEE2 100%)" }}>
      {/* Section Header */}
      <div
        className="py-12 sm:py-16 text-center border-b border-[#e5dfd3]/70"
        style={{ background: "linear-gradient(180deg, #F5F2E8 0%, #EDE6D7 50%, #F3EEE2 100%)" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase text-[#9d7431] font-medium">
            <span className="w-6 h-px bg-[#d8ab5e]" /> Pure Relaxation <span className="w-6 h-px bg-[#d8ab5e]" />
          </div>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl lg:text-5xl text-[#16211c] tracking-tight">
            Our Spa <span className="italic" style={{ color: "oklch(0.78 0.11 78)" }}>Services</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#6d7a72] max-w-2xl mx-auto font-lato">
            Explore our signature wellness therapies, therapeutic body massages, and holistic treatments designed for deep relaxation and revitalization.
          </p>
        </div>
      </div>

      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen overflow-hidden">
        <div className="w-full flex flex-col">
          {DETAILED_SERVICES.map((ds, idx) => (
            <section className="rsec" id={ds.id} data-idx={idx} key={ds.id}>
              <img className="rsec__img" src={ds.img} alt={ds.name} />
              <div className="rsec__veil"></div>
              <span className="rsec__big" aria-hidden="true">{ds.idx}</span>
              <div className="shell rsec__in">
                <span className="rsec__n">
                  OUR SERVICES <i className="ml-2 font-normal text-white/50">| &nbsp; {ds.idx} / {ds.totalCount}</i>
                </span>
                <h3 className="rsec__ttl">{ds.name}</h3>
                <p className="rsec__desc">{ds.desc}</p>
                <ul className="rsec__steps">
                  {ds.steps.map((step, sIdx) => (
                    <li key={sIdx}>{step}</li>
                  ))}
                </ul>
                <div className="rsec__facts">
                  {ds.facts.map((fact, fIdx) => (
                    <div className="fact" key={fIdx}>
                      <span className="fact__k">{fact.k}</span>
                      <span className="fact__v">{fact.v}</span>
                    </div>
                  ))}
                </div>
                <div className="rsec__cta">
                  <button onClick={() => onBook(ds.name)} className="btn btn--solid">
                    BOOK NOW
                  </button>
                  <a className="btn btn--ghost" href="tel:+918797191340">
                    CALL NOW
                  </a>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
