"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PartnerCTA() {
  const t = useTranslations("PartnerCTA");
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0F2B5B] rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row items-stretch shadow-2xl border border-black/5"
        >
          
          {/* Mobile Title */}
          <div className="md:hidden w-full p-8 pb-0 text-center order-1">
            <h3 className="text-3xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-fraunces)" }}>
              {t("title")}
            </h3>
          </div>
          
          {/* Left Content (order-3 on mobile, order-1 on desktop) */}
          <div className="w-full md:w-1/2 p-8 pt-4 md:p-10 lg:p-12 flex flex-col justify-center text-center md:text-left order-3 md:order-1">
            {/* Desktop Title */}
            <h3 className="hidden md:block text-4xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-fraunces)" }}>
              {t("title")}
            </h3>
            
            <p className="text-white/80 max-w-lg mx-auto md:mx-0 mb-8 text-base md:text-lg leading-relaxed">
              {t("desc")}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 w-full sm:w-auto">
              {/* Donate Button */}
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#E8B01C] text-black px-10 py-4 rounded-full font-bold hover:bg-[#D4A017] transition-all hover:scale-105 shadow-[0_0_20px_rgba(232,176,28,0.2)]"
              >
                {t("donate")}
              </Link>
              
              {/* Contact Us Button */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-transparent border-2 border-[#E8B01C] text-[#E8B01C] px-10 py-4 rounded-full font-bold hover:bg-[#E8B01C]/10 transition-all hover:scale-105"
              >
                {t("contact")}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
          
          {/* Image (order-2 on mobile, order-2 on desktop) */}
          <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-full order-2 md:order-2">
            <Image
              src="/ndaz.webp"
              alt="Partner with COCOF"
              fill
              className="object-cover object-center"
            />
          </div>
          
        </motion.div>
      </div>
    </section>
  );
}
