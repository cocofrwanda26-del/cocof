"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate, Variants } from "framer-motion";
import { Users, Globe, Target, CalendarHeart, ArrowRight } from "lucide-react";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

function AnimatedNumber({ value, suffix = "" }: { value: number, suffix?: string }) {
  const [count, setCount] = useState(1);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(1, value, {
        duration: 2.5,
        ease: "easeOut",
        onUpdate: (v) => setCount(Math.floor(v))
      });
      return () => controls.stop();
    }
  }, [inView, value]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

const stats = [
  { id: "women", value: 1000, suffix: "+", icon: Users, color: "text-[#1B4B8F]", bg: "bg-[#1B4B8F]/10" },
  { id: "beneficiaries", value: 20000, suffix: "+", icon: Globe, color: "text-[#12422C]", bg: "bg-[#12422C]/10" },
  { id: "focus", value: 6, suffix: "", icon: Target, color: "text-[#0F2B5B]", bg: "bg-[#0F2B5B]/10" },
  { id: "years", value: 32, suffix: "", icon: CalendarHeart, color: "text-[#E8B01C]", bg: "bg-[#E8B01C]/20" },
];

export default function ImpactStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const t = useTranslations("ImpactStats");

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="impact" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-[#1B4B8F]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-10 h-[2px] bg-[#E8B01C]" />
            <span className="text-[#12422C] font-bold text-sm tracking-widest uppercase">{t("tag")}</span>
            <div className="w-10 h-[2px] bg-[#E8B01C]" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#0F2B5B] mb-6" style={{ fontFamily: "var(--font-fraunces)" }}>
            {t("title")}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            {t("desc")}
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div 
              key={stat.id} 
              variants={item}
              className="bg-white rounded-3xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl ${stat.bg} ${stat.color} flex items-center justify-center mb-6`}>
                <stat.icon size={32} strokeWidth={1.5} />
              </div>
              
              <div
                className={`text-5xl font-bold ${stat.color} mb-3 drop-shadow-sm`}
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>
              
              <span className="text-sm font-bold text-gray-500 uppercase tracking-widest">
                {t(`stats.${stat.id}` as any)}
              </span>
            </motion.div>
          ))}
        </motion.div>


      </div>
    </section>
  );
}
