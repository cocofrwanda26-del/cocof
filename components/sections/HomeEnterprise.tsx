"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useTranslations } from "next-intl";

export default function HomeEnterprise() {
  const t = useTranslations("HomeEnterprise");
  const benefits = t.raw("benefits") as string[];

  return (
    <section className="py-20 md:py-28 bg-[#12422C] relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8B01C]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#E8B01C]" />
              <span className="text-[#E8B01C] font-bold text-xs tracking-[0.2em] uppercase">
                {t("tag")}
              </span>
            </div>
            
            <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6 leading-[1.15]"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {t("title")}
            </h2>
            
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
              {t("desc")}
            </p>
            
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                  className="flex items-center gap-4"
                >
                  <CheckCircle2 className="w-6 h-6 text-[#E8B01C] shrink-0" />
                  <span className="text-white/90 font-medium text-lg">{benefit}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-col gap-4 items-start">
              <Link
                href="/industry"
                className="inline-flex items-center justify-center gap-3 bg-[#E8B01C] text-black px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#D4A017] transition-all group shadow-[0_0_20px_rgba(232,176,28,0.2)]"
              >
                {t("explore")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-3 bg-transparent border-2 border-[#E8B01C] text-[#E8B01C] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-[#E8B01C] hover:text-black transition-all group"
              >
                {t("approaches")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mt-10 lg:mt-0"
          >
            <div className="relative aspect-[4/5] md:aspect-square rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <Image 
                src="/social.webp"
                alt="Muhanga Food Processing Industries"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-[#0F2B5B]/10 mix-blend-multiply" />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white p-6 rounded-2xl shadow-xl max-w-[240px] border border-black/5 z-20"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="w-12 h-12 bg-[#F2FCF5] rounded-full flex items-center justify-center shrink-0">
                  <span className="text-[#12422C] font-bold text-xl" style={{ fontFamily: "var(--font-fraunces)" }}>100%</span>
                </div>
                <span className="text-sm font-bold text-[#0F2B5B] leading-tight">{t("local")}</span>
              </div>
              <p className="text-xs text-gray-500 font-medium">{t("localDesc")}</p>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
