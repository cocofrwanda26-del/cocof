"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PROGRAMS } from "@/data/programs";

const featured = PROGRAMS.slice(0, 3);

export default function HomeFeaturedPrograms() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 md:py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0F2B5B]/3 rounded-full blur-[160px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-[2px] bg-[#E8B01C]" />
              <span className="text-[#12422C] font-bold text-xs tracking-[0.2em] uppercase">
                What We Do
              </span>
            </div>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2B5B] leading-[1.15] max-w-lg"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Our Programs
            </h2>
          </div>
          <Link
            href="/programs"
            className="hidden md:inline-flex items-center gap-2 text-[#0F2B5B] font-bold text-sm hover:text-[#E8B01C] transition-colors group"
          >
            Explore All Programs
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15 },
            },
          }}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible"
        >
          {featured.map((program, i) => (
            <motion.div
              key={program.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="group flex-shrink-0 w-[85vw] sm:w-[75vw] md:w-auto snap-start"
            >
              <Link href={`/programs/${program.id}`} className="block h-full">
                <div className="relative bg-white rounded-2xl overflow-hidden border border-black/5 h-full flex flex-col transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(15,43,91,0.08)]">
                  {/* Image */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      sizes="(max-width: 768px) 85vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                    {/* Number badge */}
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <span
                        className="text-sm font-bold text-[#0F2B5B]"
                        style={{ fontFamily: "var(--font-fraunces)" }}
                      >
                        {program.num}
                      </span>
                    </div>
                    {/* Category pill */}
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-[9px] font-bold tracking-[0.15em] uppercase text-[#0F2B5B] shadow-sm">
                        {program.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3
                      className="text-lg font-bold text-[#0F2B5B] mb-3 leading-snug line-clamp-2 group-hover:text-[#1B4B8F] transition-colors"
                      style={{ fontFamily: "var(--font-fraunces)" }}
                    >
                      {program.title}
                    </h3>
                    <p className="text-sm text-black/60 leading-relaxed line-clamp-3 flex-1">
                      {program.shortDesc}
                    </p>
                    {/* Read more indicator */}
                    <div className="mt-5 flex items-center gap-2 text-[#E8B01C] font-bold text-sm">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center md:hidden"
        >
          <Link
            href="/programs"
            className="inline-flex items-center justify-center gap-2 bg-[#E8B01C] text-black px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#D4A017] transition-all shadow-[0_0_20px_rgba(232,176,28,0.2)]"
          >
            Explore All Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>

      {/* Scrollbar hide utility */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
