"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ArrowRight,
  Sprout, 
  Users
} from "lucide-react";
import Link from "next/link";
import { PROGRAMS, COOPERATIVES } from "@/data/programs";
import { useTranslations } from "next-intl";

export default function ProgramsPage() {
  const t = useTranslations("ProgramsPage");
  const tData = useTranslations("ProgramsData");
  return (
    <main className="min-h-screen bg-[#F3F7FC] pt-28 md:pt-32 pb-16 md:pb-24 selection:bg-[#FFCC00] selection:text-[#0B3019]">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B3019]/5 text-[#0B3019] font-bold text-sm mb-6 border border-[#0B3019]/10">
              <Sprout size={16} className="text-[#0B3019]" />
              {t("tag")}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3019] mb-4 md:mb-6 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-fraunces)' }}>
              {t("title")}
            </h1>
            <p className="text-lg text-[#5A5A5A] leading-relaxed max-w-2xl">
              {t("desc")}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PROGRAMS.map((program, index) => {
            return (
              <motion.div 
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white rounded-[24px] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(11,48,25,0.06)] border border-[#0B3019]/5 overflow-hidden flex flex-col h-full"
              >
                {/* Dark Blue Border on Header / Top of card */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-[#1B4B8F] z-20" />

                {/* Top Image */}
                <div className="w-full h-56 sm:h-64 relative overflow-hidden bg-[#F3F7FC] mt-2">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>

                {/* Bottom Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col relative z-10 bg-white">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[#1B4B8F]/30 font-serif text-3xl md:text-4xl font-bold tracking-tighter" style={{ fontFamily: 'var(--font-fraunces)' }}>
                      {program.num}
                    </span>
                    <span className="text-[10px] md:text-[11px] font-bold text-[#1B4B8F] tracking-[0.2em] uppercase">
                      {tData(`${program.id}.category` as any)}
                    </span>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl font-bold text-[#0B3019] mb-4 leading-[1.3]" style={{ fontFamily: 'var(--font-fraunces)' }}>
                    {tData(`${program.id}.title` as any)}
                  </h2>
                  
                  <div className="flex-1 flex flex-col h-full">
                    <p className="text-[#5A5A5A] text-[15px] sm:text-base leading-relaxed mb-8 flex-1">
                      {tData(`${program.id}.shortDesc` as any)}
                    </p>
                    <div className="mt-auto">
                      <Link 
                        href={`/programs/${program.id}`}
                        className="inline-flex items-center justify-center gap-2 w-full py-3.5 bg-[#FFCC00] text-[#0B3019] font-bold rounded-xl shadow-sm hover:shadow-md hover:bg-[#e6b800] transition-all duration-300"
                      >
                        {t("explore")} 
                        <ArrowRight size={18} />
                      </Link>
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Cooperatives Section */}
      <div className="max-w-7xl mx-auto px-6 mt-24 md:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#0B3019] rounded-3xl p-8 sm:p-10 md:p-16 lg:p-20 text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FFCC00]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
            
            <div>
              <div className="inline-flex items-center gap-2 mb-8 text-[#FFCC00]">
                <Users size={18} />
                <span className="font-bold text-xs tracking-[0.2em] uppercase">{t("coopTag")}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-[1.15]" style={{ fontFamily: 'var(--font-fraunces)' }}>
                {t("coopTitle")}
              </h2>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6 font-light">
                {t("coopDesc1")}
              </p>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light">
                {t("coopDesc2")}
              </p>
            </div>

            <div>
              <div className="bg-white/5 rounded-[20px] border border-white/10 backdrop-blur-md overflow-hidden">
                <div className="hidden sm:grid grid-cols-12 gap-4 p-5 md:p-6 bg-white/10 border-b border-white/10 text-xs font-bold text-[#FFCC00] tracking-widest uppercase">
                  <div className="col-span-2 text-center">{t("colNo")}</div>
                  <div className="col-span-4">{t("colCoop")}</div>
                  <div className="col-span-6">{t("colFocus")}</div>
                </div>
                <div className="flex flex-col">
                  {COOPERATIVES.map((coop, index) => (
                    <div 
                      key={coop.name}
                      className={`flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-4 p-5 md:p-6 items-start sm:items-center transition-colors hover:bg-white/5 ${
                        index !== COOPERATIVES.length - 1 ? 'border-b border-white/5' : ''
                      }`}
                    >
                      <div className="hidden sm:block sm:col-span-2 text-center text-white/40 font-serif font-bold text-xl italic" style={{ fontFamily: 'var(--font-fraunces)' }}>0{coop.no}</div>
                      <div className="sm:col-span-4 font-bold text-white tracking-wide text-lg sm:text-base">
                        <span className="sm:hidden text-white/40 font-serif mr-2 italic" style={{ fontFamily: 'var(--font-fraunces)' }}>0{coop.no}.</span>
                        {coop.name}
                      </div>
                      <div className="sm:col-span-6 text-white/80 text-sm flex items-center gap-3 font-light">
                        <Sprout size={16} className="text-[#FFCC00] shrink-0" />
                        {t("maizeAndSoybean")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </main>
  );
}
