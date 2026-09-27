"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PHONE = "+918797191340";
const PHONE_RAW = "918797191340";
const EMAIL = "info@amazingwellnessspa.com";
const WA_TEXT = encodeURIComponent(
  "Hello Sunny, I would like to know more about Amazing Wellness Spa services."
);

export default function FloatingWA() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-close box when clicking anywhere outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  const channels = [
    {
      id: "Phone",
      label: "Phone",
      href: `tel:${PHONE}`,
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="19.4395" cy="19.4395" r="19.4395" fill="#03E78B" />
          <path
            d="M19.3929 14.9176C17.752 14.7684 16.2602 14.3209 14.7684 13.7242C14.0226 13.4259 13.1275 13.7242 12.8292 14.4701L11.7849 16.2602C8.65222 14.6193 6.11623 11.9341 4.47529 8.95057L6.41458 7.90634C7.16046 7.60799 7.45881 6.71293 7.16046 5.96705C6.56375 4.47529 6.11623 2.83435 5.96705 1.34259C5.96705 0.596704 5.22117 0 4.47529 0H0.745882C0.298353 0 5.69062e-07 0.298352 5.69062e-07 0.745881C5.69062e-07 3.72941 0.596704 6.71293 1.93929 9.3981C3.87858 13.575 7.30964 16.8569 11.3374 18.7962C14.0226 20.1388 17.0061 20.7355 19.9896 20.7355C20.4371 20.7355 20.7355 20.4371 20.7355 19.9896V16.4094C20.7355 15.5143 20.1388 14.9176 19.3929 14.9176Z"
            transform="translate(9.07179 9.07178)"
            fill="white"
          />
        </svg>
      ),
    },
    {
      id: "WhatsApp",
      label: "WhatsApp",
      href: `https://wa.me/${PHONE_RAW}?text=${WA_TEXT}`,
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="19.4395" cy="19.4395" r="19.4395" fill="#49E670" />
          <path
            d="M12.9821 10.1115C12.7029 10.7767 11.5862 11.442 10.7486 11.575C10.1902 11.7081 9.35269 11.8411 6.84003 10.7767C3.48981 9.44628 1.39593 6.25317 1.25634 6.12012C1.11674 5.85403 2.13001e-06 4.39053 2.13001e-06 2.92702C2.13001e-06 1.46351 0.83755 0.665231 1.11673 0.399139C1.39592 0.133046 1.8147 1.01506e-06 2.23348 1.01506e-06C2.37307 1.01506e-06 2.51267 1.01506e-06 2.65226 1.01506e-06C2.93144 1.01506e-06 3.21063 -2.02219e-06 3.35022 0.532183C3.62941 1.19741 4.32736 2.66092 4.32736 2.79397C4.46696 2.92702 4.46696 3.19311 4.32736 3.32616C4.18777 3.59225 4.18777 3.59224 3.90858 3.85834C3.76899 3.99138 3.6294 4.12443 3.48981 4.39052C3.35022 4.52357 3.21063 4.78966 3.35022 5.05576C3.48981 5.32185 4.18777 6.38622 5.16491 7.18449C6.42125 8.24886 7.39839 8.51496 7.81717 8.78105C8.09636 8.91409 8.37554 8.9141 8.65472 8.648C8.93391 8.38191 9.21309 7.98277 9.49228 7.58363C9.77146 7.31754 10.0507 7.1845 10.3298 7.31754C10.609 7.45059 12.2841 8.11582 12.5633 8.38191C12.8425 8.51496 13.1217 8.648 13.1217 8.78105C13.1217 8.78105 13.1217 9.44628 12.9821 10.1115Z"
            transform="translate(12.9597 12.9597)"
            fill="#FAFAFA"
          />
          <path
            d="M0.196998 23.295L0.131434 23.4862L0.323216 23.4223L5.52771 21.6875C7.4273 22.8471 9.47325 23.4274 11.6637 23.4274C18.134 23.4274 23.4274 18.134 23.4274 11.6637C23.4274 5.19344 18.134 -0.1 11.6637 -0.1C5.19344 -0.1 -0.1 5.19344 -0.1 11.6637C-0.1 13.9996 0.624492 16.3352 1.93021 18.2398L0.196998 23.295ZM5.87658 19.8847L5.84025 19.8665L5.80154 19.8788L2.78138 20.8398L3.73978 17.9646L3.75932 17.906L3.71562 17.8623L3.43104 17.5777C2.27704 15.8437 1.55796 13.8245 1.55796 11.6637C1.55796 6.03288 6.03288 1.55796 11.6637 1.55796C17.2945 1.55796 21.7695 6.03288 21.7695 11.6637C21.7695 17.2945 17.2945 21.7695 11.6637 21.7695C9.64222 21.7695 7.76778 21.1921 6.18227 20.039L6.17557 20.0342L6.16817 20.0305L5.87658 19.8847Z"
            transform="translate(7.7758 7.77582)"
            fill="white"
            stroke="white"
            strokeWidth="0.2"
          />
        </svg>
      ),
    },
    {
      id: "Email",
      label: "Email",
      href: `mailto:${EMAIL}`,
      icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="19.4395" cy="19.4395" r="19.4395" fill="#FF485F" />
          <path
            d="M20.5379 14.2557H1.36919C0.547677 14.2557 0 13.7373 0 12.9597V1.29597C0 0.518387 0.547677 0 1.36919 0H20.5379C21.3594 0 21.9071 0.518387 21.9071 1.29597V12.9597C21.9071 13.7373 21.3594 14.2557 20.5379 14.2557ZM20.5379 12.9597V13.6077V12.9597ZM1.36919 1.29597V12.9597H20.5379V1.29597H1.36919Z"
            transform="translate(8.48619 12.3117)"
            fill="white"
          />
          <path
            d="M10.9659 8.43548C10.829 8.43548 10.692 8.43548 10.5551 8.30588L0.286184 1.17806C0.012346 0.918864 -0.124573 0.530073 0.149265 0.270879C0.423104 0.0116857 0.833862 -0.117911 1.1077 0.141283L10.9659 7.00991L20.8241 0.141283C21.0979 -0.117911 21.5087 0.0116857 21.7825 0.270879C22.0563 0.530073 21.9194 0.918864 21.6456 1.17806L11.3766 8.30588C11.2397 8.43548 11.1028 8.43548 10.9659 8.43548Z"
            transform="translate(8.47443 12.9478)"
            fill="white"
          />
          <path
            d="M9.0906 7.13951C8.95368 7.13951 8.81676 7.13951 8.67984 7.00991L0.327768 1.17806C-0.0829894 0.918864 -0.0829899 0.530073 0.190849 0.270879C0.327768 0.0116855 0.738525 -0.117911 1.14928 0.141282L9.50136 5.97314C9.7752 6.23233 9.91212 6.62112 9.63828 6.88032C9.50136 7.00991 9.36444 7.13951 9.0906 7.13951Z"
            transform="translate(20.6183 18.7799)"
            fill="white"
          />
          <path
            d="M0.696942 7.13951C0.423104 7.13951 0.286185 7.00991 0.149265 6.88032C-0.124573 6.62112 0.012346 6.23233 0.286185 5.97314L8.63826 0.141282C9.04902 -0.117911 9.45977 0.0116855 9.59669 0.270879C9.87053 0.530073 9.73361 0.918864 9.45977 1.17806L1.1077 7.00991C0.970781 7.13951 0.833862 7.13951 0.696942 7.13951Z"
            transform="translate(8.47443 18.7799)"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  return (
    <div
      ref={containerRef}
      className="fixed bottom-20 md:bottom-6 right-4 md:right-6 z-50 flex flex-col items-end"
    >
      {/* White Card Box expanding smoothly from bottom right origin */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.75, y: 15, x: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.75, y: 15, x: 10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "bottom right" }}
            className="mb-2 w-36 sm:w-40 p-1.5 bg-white text-neutral-800 rounded-xl shadow-xl border border-neutral-100 flex flex-col gap-0.5 overflow-hidden"
          >
            {channels.map((ch) => (
              <a
                key={ch.id}
                href={ch.href}
                target="_blank"
                rel="nofollow noopener"
                className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-neutral-100/90 transition-colors group cursor-pointer"
              >
                <div className="shrink-0 flex items-center justify-center">
                  {ch.icon}
                </div>
                <span className="text-xs font-semibold text-neutral-700 group-hover:text-black transition-colors">
                  {ch.label}
                </span>
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <div className="relative flex items-center">
        {!isOpen && (
          <span className="absolute right-14 whitespace-nowrap bg-neutral-900/90 text-white text-[11px] font-medium px-2.5 py-1 rounded-md shadow-md pointer-events-none">
            Contact us
          </span>
        )}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="relative w-11 h-11 rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform overflow-hidden cursor-pointer bg-transparent border-0 p-0"
          aria-label={isOpen ? "Hide options" : "Contact us"}
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              /* Cross (X) Icon SVG */
              <motion.div
                key="close-icon"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full"
              >
                <svg
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <ellipse cx="26" cy="26" rx="26" ry="26" fill="#A886CD" />
                  <rect
                    width="27.1433"
                    height="3.89857"
                    rx="1.94928"
                    transform="translate(18.35 15.6599) scale(0.998038 1.00196) rotate(45)"
                    fill="#ffffff"
                  />
                  <rect
                    width="27.1433"
                    height="3.89857"
                    rx="1.94928"
                    transform="translate(37.5056 18.422) scale(0.998038 1.00196) rotate(135)"
                    fill="#ffffff"
                  />
                </svg>
              </motion.div>
            ) : (
              /* Chat Icon SVG */
              <motion.div
                key="open-icon"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="w-full h-full"
              >
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="-496 507.7 54 54"
                  className="w-full h-full"
                >
                  <g>
                    <circle cx="-469" cy="534.7" r="27" fill="#A886CD" />
                  </g>
                  <path
                    fill="#ffffff"
                    d="M-459.9,523.7h-20.3c-1.9,0-3.4,1.5-3.4,3.4v15.3c0,1.9,1.5,3.4,3.4,3.4h11.4l5.9,4.9c0.2,0.2,0.3,0.2,0.5,0.2 h0.3c0.3-0.2,0.5-0.5,0.5-0.8v-4.2h1.7c1.9,0,3.4-1.5,3.4-3.4v-15.3C-456.5,525.2-458,523.7-459.9,523.7z"
                  />
                  <path
                    fill="#808080"
                    d="M-477.7,530.5h11.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-11.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,530.8-478.2,530.5-477.7,530.5z"
                  />
                  <path
                    fill="#808080"
                    d="M-477.7,533.5h7.9c0.5,0,0.8,0.4,0.8,0.8l0,0c0,0.5-0.4,0.8-0.8,0.8h-7.9c-0.5,0-0.8-0.4-0.8-0.8l0,0C-478.6,533.9-478.2,533.5-477.7,533.5z"
                  />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
