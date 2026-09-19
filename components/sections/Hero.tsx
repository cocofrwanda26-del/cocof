"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

const images = [
  "/hero.webp",
  "/ind.webp",
  "/mit.webp",
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations("Hero");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 10000); // Change image every 10 seconds for a smoother, slower rotation
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative w-full h-[60vh] min-h-[450px] md:h-[85vh] md:min-h-[600px] mt-[100px] flex items-center justify-center overflow-hidden bg-[#0A2613]">
      {/* Background Slideshow */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0 }}
          transition={{ 
            opacity: { duration: 1.5, ease: "easeInOut" },
            scale: { duration: 10, ease: "linear" }
          }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={images[currentIndex] || images[0]}
            alt="COCOF Rwanda"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* Mixed Overlay for perfect contrast: Black base with a Blue tint */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="absolute inset-0 bg-[#0F2B5B]/30 z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center items-center text-center pb-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as any }}
          className="max-w-5xl flex flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="mb-6 md:mb-8">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#E8B01C] drop-shadow-md">
              &mdash; {t("since")} &mdash;
            </p>
          </div>

          {/* Main Headline */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.25] tracking-tight mb-8 sm:mb-12 md:mb-16 text-white drop-shadow-2xl text-center"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            <span className="block sm:hidden">
              {t.rich("titleMobile", {
                highlight: (chunks) => <span className="text-[#E8B01C]">{chunks}</span>,
                br: () => <br />
              })}
            </span>
            <span className="hidden sm:block">
              {t.rich("titleDesktop", {
                highlight: (chunks) => <span className="text-[#E8B01C]">{chunks}</span>,
                br: () => <br />
              })}
            </span>
          </h1>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5 w-full sm:w-auto">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center bg-[#E8B01C] text-black px-6 py-3.5 sm:px-12 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#D4A017] transition-all hover:scale-105 shadow-[0_0_30px_rgba(232,176,28,0.2)] w-1/2 sm:w-auto min-w-[160px]"
            >
              {t("getInvolved")}
            </Link>
            
            <Link
              href="/impact"
              className="inline-flex items-center justify-center bg-transparent border-2 border-[#E8B01C] text-[#E8B01C] px-6 py-3.5 sm:px-12 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-[#E8B01C]/10 transition-all hover:scale-105 w-1/2 sm:w-auto min-w-[160px]"
            >
              {t("seeImpact")}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
