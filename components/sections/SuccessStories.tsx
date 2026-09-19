"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: "market",
    tag: "Agribusiness & Market Access",
    quote: "Partnering with Muhanga Food Processing Industries gave us a guaranteed commercial market for our bulk harvests. We are no longer farming blindly; we are running a true agribusiness that pays our members fairly.",
    attribution: "Cooperative Member",
    location: "COCOF-Supported Cooperative",
  },
  {
    id: "youth",
    tag: "Youth Livelihoods",
    quote: "The entrepreneurship training gave me the practical skills to start my own business. Today, I am managing my own horticulture enterprise, securing my own income, and building my future.",
    attribution: "Youth Agribusiness Entrepreneur",
    location: "Kamonyi District",
  },
  {
    id: "agronomy",
    tag: "Sustainable Agriculture",
    quote: "Learning directly from a certified Maître-Fermier changed how I manage my soil and control pests. My harvest has increased, and my crops are finally resilient against the changing weather.",
    attribution: "Local Smallholder Farmer",
    location: "Kamonyi District",
  },
  {
    id: "finance",
    tag: "Women's Economic Empowerment",
    quote: "Before, we couldn't dream of securing a bank loan. With COCOF's Guarantee Fund at our local SACCO, we accessed low-interest capital to buy seeds, scale our production, and expand our entire cooperative.",
    attribution: "Cooperative President",
    location: "Kamonyi / Muhanga",
  },
  {
    id: "nutrition",
    tag: "Community Nutrition",
    quote: "We learned to transform our own soy harvest into milk and tofu. Not only is my child's nutrition completely transformed, but we are now selling our surplus tofu to the local market for extra household income.",
    attribution: "Rural Parent & Farmer",
    location: "Musambira Sector, Kamonyi",
  }
];

export default function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [isHovered, currentIndex]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 24 : -24, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 24 : -24, opacity: 0 }),
  };

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 md:px-6">

        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-3 mb-3">
            <div className="w-6 h-px bg-[#E8B01C]" />
            <span className="text-[#E8B01C] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">
              Voices From The Field
            </span>
            <div className="w-6 h-px bg-[#E8B01C]" />
          </div>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#0F2B5B]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Real impact, in their own words.
          </h2>
        </div>

        {/* Card */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative"
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="relative rounded-2xl overflow-hidden border border-[#0F2B5B]/8 bg-[#F8FAFC] shadow-md"
            >
              {/* Gold top accent bar */}
              <div className="h-[3px] w-full bg-gradient-to-r from-[#E8B01C]/60 via-[#E8B01C] to-[#E8B01C]/30" />

              {/* Inner layout */}
              <div className="flex flex-col sm:flex-row">

                {/* Mobile top green bar */}
                <div className="sm:hidden flex items-center justify-between bg-[#12422C] px-5 py-3">
                  <span className="text-[#E8B01C] text-[10px] font-bold uppercase tracking-[0.15em]">
                    {current.tag}
                  </span>
                  <span
                    className="text-[#E8B01C] text-5xl leading-none font-serif select-none"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                </div>

                {/* Desktop left colour column */}
                <div className="hidden sm:flex flex-col items-center justify-between bg-[#12422C] w-20 shrink-0 py-8 px-3">
                  <span
                    className="text-[#E8B01C] text-[80px] leading-none font-serif select-none"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <span
                    className="text-[#E8B01C] text-[10px] uppercase tracking-[0.15em] font-bold rotate-180"
                    style={{ writingMode: "vertical-rl" }}
                  >
                    {current.tag}
                  </span>
                </div>

                {/* Main content */}
                <div className="flex-1 p-6 sm:p-8 md:p-10">
                  <p
                    className="font-serif text-lg sm:text-xl md:text-2xl text-[#0F2B5B] italic leading-relaxed mb-7"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    &quot;{current.quote}&quot;
                  </p>

                  <div className="flex items-center gap-3">
                    {/* Gold dash accent */}
                    <div className="w-6 h-[2px] bg-[#E8B01C] shrink-0" />
                    <div>
                      <div className="text-sm font-bold text-[#0F2B5B]">
                        {current.attribution}
                      </div>
                      <div className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                        {current.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6 px-1">
            <button
              onClick={handlePrev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#0F2B5B] hover:text-[#0F2B5B] transition-all"
            >
              <ChevronLeft size={16} />
            </button>

            <div className="flex flex-col items-center gap-2">
              <div className="text-xs font-semibold tracking-widest text-gray-400">
                <span className="text-[#0F2B5B]">0{currentIndex + 1}</span> / 0{testimonials.length}
              </div>
              <div className="flex gap-1.5 items-center">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1);
                      setCurrentIndex(idx);
                    }}
                    aria-label={`Testimonial ${idx + 1}`}
                    className={`h-[3px] rounded-full transition-all duration-400 ${
                      idx === currentIndex
                        ? "w-6 bg-[#E8B01C]"
                        : "w-2 bg-gray-200 hover:bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#0F2B5B] hover:text-[#0F2B5B] transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
