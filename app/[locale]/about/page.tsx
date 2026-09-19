"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Users, Target, Landmark, Leaf, Briefcase, Network, Sparkles, Eye, Scale, ArrowRight } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { APPROACHES } from "@/data/approaches";
import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("AboutPage");
  const tApproaches = useTranslations("ApproachesData");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" as any }
  };

  const stagger = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { staggerChildren: 0.15 }
  };

  const item = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: "easeOut" as any }
  };



  const executiveTeam = [
    { name: "Tharcisse SEMUGAZA", key: "tharcisse" },
    { name: "Claudine UWITONZE", key: "claudine" },
    { name: "Cyrille NZIGIYE", key: "cyrille" },
    { name: "Henriette USANASE", key: "henriette" }
  ];

  const boardTeam = [
    { name: "Mathilde MUKARUGERO", key: "mathilde" },
    { name: "Clémentine ABAMARIYA", key: "clementine" }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-[#2F6B3A] selection:text-white overflow-hidden" ref={containerRef}>
      
      {/* High-Energy Solid Hero */}
      <section className="pt-24 pb-12 px-6 relative bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 z-20">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" as any }}
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/20 mb-5"
              >
                <div className="w-6 h-[2px] bg-[#F5B400] rounded-full" />
                <span className="text-[#1E3A8A] text-xs font-black tracking-[0.2em] uppercase flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#1E3A8A]" />
                  Conseil Consultatif des Femmes
                </span>
                <div className="w-6 h-[2px] bg-[#F5B400] rounded-full" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as any }}
                className="text-[3rem] md:text-[4.5rem] font-bold text-[#1A1A1A] leading-[0.9] tracking-tight mb-5" 
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                {t("heroTitle1")} <br className="hidden md:block"/>
                <span className="relative text-[#1E3A8A]">
                  {t("heroTitle2")}
                  <svg className="absolute w-full h-3 -bottom-2 left-0 text-[#1E3A8A]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="none"/></svg>
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as any }}
                className="text-xl text-[#1A1A1A]/70 font-medium leading-snug max-w-2xl border-l-4 border-[#2F6B3A] pl-5"
              >
                {t("heroDesc")}
              </motion.p>
            </div>
            
            <div className="lg:col-span-5 relative h-[300px] lg:h-[450px] w-full">
              <motion.div 
                className="absolute inset-0 rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(47,107,58,0.15)] z-10 border-4 border-white"
                initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image src="/hero.webp" alt="Rwandan Women" fill quality={100} unoptimized priority className="object-cover" />
              </motion.div>
              {/* Solid Floating Accent Card */}
              <motion.div 
                className="absolute -bottom-8 -left-8 bg-[#1E3A8A] p-6 rounded-[24px] shadow-2xl z-20 w-56"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ y }}
              >
                <Target className="w-10 h-10 text-white mb-3" />
                <p className="text-3xl font-black text-white mb-1">30+</p>
                <p className="text-xs font-bold text-white/70 uppercase tracking-widest">{t("yearsOfAction")}</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Solid High Impact Blocks */}
      <section className="py-16 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dark Blue Vision Block */}
            <motion.div 
              {...fadeIn}
              className="group bg-white rounded-[24px] p-6 lg:p-8 border-2 border-[#1E3A8A] transition-colors duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(30,58,138,0.08)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#1E3A8A] opacity-5 rounded-bl-full scale-125" />
              <div className="relative z-10 flex flex-col h-full">
                <h2 className="text-lg font-black tracking-widest text-[#1E3A8A] uppercase mb-4 flex items-center gap-2">
                  <Eye className="w-5 h-5" /> {t("ourVision")}
                </h2>
                <p className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] leading-tight" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {t("visionText")}
                </p>
              </div>
            </motion.div>

            {/* Dark Green Mission Block */}
            <motion.div 
              {...fadeIn}
              className="group bg-[#23532C] rounded-[24px] p-6 lg:p-8 border-2 border-[#23532C] shadow-lg relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-[0.03] rounded-bl-full scale-125" />
              <div className="relative z-10 flex flex-col h-full">
                <h2 className="text-lg font-black tracking-widest text-[#F5B400] uppercase mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5" /> {t("ourMission")}
                </h2>
                <p className="text-xl lg:text-2xl font-bold text-white leading-snug" style={{ fontFamily: "var(--font-fraunces)" }}>
                  {t("missionText")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Legal & Governance Summary */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0A192F] rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
            {/* Subtle overlay elements instead of gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-[0.02] -skew-x-12 transform translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#2F6B3A] rounded-tr-full opacity-40" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 text-white">
              <motion.div {...fadeIn}>
                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-6">
                  <Scale className="w-6 h-6 text-[#F5B400]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#F5B400]" style={{ fontFamily: "var(--font-fraunces)" }}>{t("legalAuthority")}</h3>
                <p className="text-white/90 text-lg leading-relaxed font-medium">
                  {t("legalAuthDesc")}
                </p>
              </motion.div>
              
              <motion.div {...fadeIn}>
                <div className="w-12 h-12 rounded-xl bg-[#2F6B3A] flex items-center justify-center mb-6 shadow-lg">
                  <Shield className="w-6 h-6 text-[#F5B400]" />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-[#F5B400]" style={{ fontFamily: "var(--font-fraunces)" }}>{t("stringentGov")}</h3>
                <p className="text-white/90 text-lg leading-relaxed font-medium">
                  {t("stringentGovDesc")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Approaches Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16" {...fadeIn}>
            <div className="max-w-3xl">
              <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] leading-[1]" style={{ fontFamily: "var(--font-fraunces)" }}>
                {t("deliveryApproaches1")} <br/>
                <span className="text-[#2F6B3A]">{t("deliveryApproaches2")}</span>
              </h2>
            </div>
            <p className="text-lg text-[#1A1A1A]/60 font-semibold max-w-sm md:max-w-md">
              {t("deliveryDesc")}
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {APPROACHES.map((approach, idx) => (
              <Link href={`/approaches/${approach.id}`} key={approach.id} className="block h-full">
                <motion.div 
                  variants={item}
                  className="group flex flex-col h-full rounded-[24px] bg-white overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:border-transparent transition-all duration-500 cursor-pointer"
                >
                  {/* Top Image Section */}
                  <div className="relative h-56 w-full bg-[#FAFAFA] overflow-hidden">
                    {approach.image ? (
                      <Image src={approach.image} alt={tApproaches(`${approach.id}.title` as any)} fill quality={100} unoptimized className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#F3F4F6] text-gray-400 group-hover:scale-105 transition-transform duration-700">
                        <span className="text-xs font-black tracking-widest uppercase">{t("waitingPhoto")}</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom Content Area */}
                  <div className="flex flex-col flex-grow p-6 md:p-8">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1A1A1A] mb-4 leading-tight group-hover:text-[#1E3A8A] transition-colors duration-300" style={{ fontFamily: "var(--font-fraunces)" }}>
                      {tApproaches(`${approach.id}.title` as any)}
                    </h3>
                    
                    <div className="mt-auto pt-4 flex items-center gap-2 text-[#2F6B3A] font-bold text-xs tracking-widest uppercase group-hover:gap-3 group-hover:text-[#1E3A8A] transition-all duration-300">
                      {t("learnMore")}
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership - Bold & Clean */}
      <section className="pt-10 pb-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-16" {...fadeIn}>
            <h2 className="text-4xl md:text-5xl font-black text-[#1E3A8A] mb-5" style={{ fontFamily: "var(--font-fraunces)" }}>
              {t("visionaries")}
            </h2>
            <div className="w-16 h-1.5 bg-[#F5B400] rounded-full mb-6" />
            <p className="text-lg text-[#1A1A1A]/60 font-medium">
              {t("visionariesDesc")}
            </p>
          </motion.div>

          <div className="mb-24">
            <h3 className="text-xl font-black tracking-widest text-[#2F6B3A] uppercase mb-10 flex items-center gap-4">
              <div className="w-8 h-1 bg-[#2F6B3A]" /> {t("execSecretariat")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {executiveTeam.map((leader, index) => (
                <LeaderCard key={leader.name} {...leader} delay={index * 0.1} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-black tracking-widest text-[#2F6B3A] uppercase mb-10 flex items-center gap-4 justify-end text-right">
              {t("execCommittee")} <div className="w-8 h-1 bg-[#2F6B3A]" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:max-w-4xl ml-auto">
              {boardTeam.map((leader, index) => (
                <LeaderCard key={leader.name} {...leader} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function LeaderCard({ name, key, delay }: { name: string, key: string, delay: number }) {
  const t = useTranslations("AboutPage");
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: "easeOut" as any, delay }}
      className="group flex flex-col bg-white rounded-[24px] p-4 border border-gray-100 hover:border-transparent hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-500"
    >
      {/* Ultra-Premium Clean Placeholder */}
      <div className="relative h-56 md:h-64 w-full rounded-[20px] overflow-hidden bg-[#FAFAFA] mb-5 flex flex-col items-center justify-center border-2 border-transparent group-hover:border-gray-100 transition-all duration-500">
        <div className="px-5 py-2 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/50">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 group-hover:text-[#1E3A8A] transition-colors duration-500">
            {t("waitingPhoto")}
          </span>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="px-2 pb-2 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-[#1A1A1A] mb-1 group-hover:text-[#1E3A8A] transition-colors duration-300" style={{ fontFamily: "var(--font-fraunces)" }}>
          {name}
        </h4>
        <p className="text-[10px] font-black text-[#2F6B3A] uppercase tracking-[0.15em] mb-3 pb-3 border-b border-gray-100">
          {t(`team.${key}.title` as any)}
        </p>
        <p className="text-[#1A1A1A]/60 text-sm leading-relaxed font-medium mt-auto">
          {t(`team.${key}.intro` as any)}
        </p>
      </div>
    </motion.div>
  );
}
