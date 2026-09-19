"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Calendar, Building, ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

const projects = [
  { id: "horticulture", image: "/2.webp" },
  { id: "soybean", image: "/4.webp" },
  { id: "youth", image: "/mit.webp" },
  { id: "water", image: "/5.webp" },
  { id: "pineapple", image: "/mother.webp" },
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const t = useTranslations("Projects");
  const pData = useTranslations("ProjectsData");

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 md:gap-4 mb-4">
            <div className="w-8 md:w-10 h-[2px] bg-[#E8B01C]" />
            <span className="text-[#12422C] font-bold text-xs md:text-sm tracking-widest uppercase">{t("tag")}</span>
            <div className="w-8 md:w-10 h-[2px] bg-[#E8B01C]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2B5B] mb-4 md:mb-6" style={{ fontFamily: "var(--font-fraunces)" }}>
            {t("title")}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            {t("desc")}
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {projects.map((project, index) => {
            const isImageLeft = index % 2 === 0;
            return (
              <div key={project.id} className={`flex flex-col lg:flex-row gap-6 lg:gap-12 items-center ${isImageLeft ? '' : 'lg:flex-row-reverse'}`}>
                {/* Image Side - Always on top on mobile due to DOM order */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative h-[250px] md:h-[350px] lg:h-[400px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src={project.image}
                      alt={pData(`${project.id}.title` as any)}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Funder Badge */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                      <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md shadow-lg px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[#0F2B5B] font-bold text-xs md:text-sm">
                        <Building size={16} className="text-[#E8B01C]" />
                        {pData(`${project.id}.funder` as any)}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <span className="inline-flex items-center gap-1 md:gap-1.5 px-3 md:px-4 py-1.5 bg-[#F3F7FC] text-[#1B4B8F] text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full border border-[#1B4B8F]/10">
                      <Calendar size={14} />
                      {/* Project years might need translation if you translated them, but assuming they are just "2020-2024" */}
                    </span>
                    <span className="inline-flex items-center px-3 md:px-4 py-1.5 bg-[#12422C]/10 text-[#12422C] text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full">
                      {pData(`${project.id}.category` as any)}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2B5B] mb-3 md:mb-4 leading-tight" style={{ fontFamily: "var(--font-fraunces)" }}>
                    {pData(`${project.id}.title` as any)}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-5 md:mb-8 leading-relaxed max-w-xl">
                    {pData(`${project.id}.shortDesc` as any)}
                  </p>

                  {/* Stats Strip - Grid changes based on breakpoint */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 mb-6 md:mb-8">
                      <div className="bg-gray-50/80 rounded-xl md:rounded-2xl p-3 md:p-4 border border-gray-100 flex flex-col items-center text-center hover:bg-[#F3F7FC] transition-colors duration-300">
                        <div className="text-base md:text-lg lg:text-xl font-bold text-[#1B4B8F] mb-1">{pData(`${project.id}.stats.budgetVal` as any)}</div>
                        <div className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-wider">{pData(`${project.id}.stats.budget` as any)}</div>
                      </div>
                      <div className="bg-gray-50/80 rounded-xl md:rounded-2xl p-3 md:p-4 border border-gray-100 flex flex-col items-center text-center hover:bg-[#F3F7FC] transition-colors duration-300">
                        <div className="text-base md:text-lg lg:text-xl font-bold text-[#1B4B8F] mb-1">{pData(`${project.id}.stats.targetVal` as any)}</div>
                        <div className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-wider">{pData(`${project.id}.stats.target` as any)}</div>
                      </div>
                      <div className="bg-gray-50/80 rounded-xl md:rounded-2xl p-3 md:p-4 border border-gray-100 flex flex-col items-center text-center hover:bg-[#F3F7FC] transition-colors duration-300">
                        <div className="text-base md:text-lg lg:text-xl font-bold text-[#1B4B8F] mb-1">{pData(`${project.id}.stats.locationVal` as any)}</div>
                        <div className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-wider">{pData(`${project.id}.stats.location` as any)}</div>
                      </div>
                  </div>

                  {/* Key Outcomes */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 md:mb-4">{t("keyOutcomes")}</h4>
                    <ul className="space-y-2 md:space-y-3">
                      {[0,1,2].map((i) => (
                        <li key={i} className="flex items-start gap-2 md:gap-3">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#12422C] shrink-0 mt-0.5 md:mt-0" />
                          <span className="text-gray-700 font-medium text-xs md:text-base">{pData(`${project.id}.outcomes.${i}` as any)}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div>
                    <button
                      onClick={() => setSelectedId(project.id)}
                      className="group w-full md:w-auto min-h-[40px] inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-[#0F2B5B] text-white rounded-full font-bold text-xs md:text-base transition-all hover:bg-[#1B4B8F] hover:shadow-xl hover:shadow-[#1B4B8F]/20 md:hover:-translate-y-1"
                    >
                      {t("viewDetails")}
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-[#0F2B5B]/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar z-10"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-11 h-11 md:w-12 md:h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors shadow-sm"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>

              <div className="w-full h-48 md:h-72 lg:h-96 relative bg-gray-100">
                <Image
                  src={selectedProject.image}
                  alt={pData(`${selectedProject.id}.title` as any)}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <span className="inline-flex items-center gap-1 md:gap-1.5 px-2.5 md:px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full">
                      <Calendar size={12} className="md:w-3.5 md:h-3.5" />
                      {/* project year goes here */}
                    </span>
                    <span className="inline-flex items-center px-2.5 md:px-3 py-1 bg-[#E8B01C] text-[#0F2B5B] text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full">
                      {pData(`${selectedProject.id}.category` as any)}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-fraunces)" }}>
                    {pData(`${selectedProject.id}.title` as any)}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-12">
                <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 whitespace-pre-line">
                  {pData(`${selectedProject.id}.description` as any)}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
                    <div className="bg-[#F8FAFC] rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                      <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 md:mb-2">
                        {pData(`${selectedProject.id}.stats.budget` as any)}
                      </div>
                      <div className="text-lg md:text-xl font-bold text-[#0F2B5B]">
                        {pData(`${selectedProject.id}.stats.budgetVal` as any)}
                      </div>
                    </div>
                    <div className="bg-[#F8FAFC] rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                      <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 md:mb-2">
                        {pData(`${selectedProject.id}.stats.target` as any)}
                      </div>
                      <div className="text-lg md:text-xl font-bold text-[#0F2B5B]">
                        {pData(`${selectedProject.id}.stats.targetVal` as any)}
                      </div>
                    </div>
                    <div className="bg-[#F8FAFC] rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                      <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 md:mb-2">
                        {pData(`${selectedProject.id}.stats.location` as any)}
                      </div>
                      <div className="text-lg md:text-xl font-bold text-[#0F2B5B]">
                        {pData(`${selectedProject.id}.stats.locationVal` as any)}
                      </div>
                    </div>
                </div>
                
                <div>
                  <h4 className="text-base md:text-lg font-bold text-[#0F2B5B] mb-3 md:mb-4" style={{ fontFamily: "var(--font-fraunces)" }}>{t("funder")}</h4>
                  <div className="inline-flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 bg-[#1B4B8F]/5 border border-[#1B4B8F]/10 rounded-xl md:rounded-2xl text-[#0F2B5B] font-bold text-sm md:text-base">
                     <Building size={20} className="md:w-6 md:h-6 text-[#1B4B8F]" />
                     {pData(`${selectedProject.id}.funder` as any)}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
