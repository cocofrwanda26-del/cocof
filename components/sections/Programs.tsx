"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sprout, Users, Briefcase, Landmark, CloudSun, GraduationCap } from "lucide-react";
import { useTranslations } from "next-intl";

const programs = [
  { id: "womens-economic", icon: Landmark },
  { id: "sustainable-ag", icon: Sprout },
  { id: "cooperative-dev", icon: Briefcase },
  { id: "gender-equality", icon: Users },
  { id: "climate-resilience", icon: CloudSun },
  { id: "youth-dev", icon: GraduationCap },
];

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = useTranslations("Programs");

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold text-ink max-w-2xl mx-auto leading-tight mb-4"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {t("title")}
          </h2>
          <p className="text-base text-muted max-w-xl mx-auto">
            {t("desc")}
          </p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, i) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="bg-white rounded p-8 border border-black/5 hover:border-[#1B4B8F]/20 transition-colors"
              >
                <Icon size={28} className="text-[#1B4B8F] mb-6" />
                <h3
                  className="text-lg font-bold text-ink mb-3"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {t(`items.${program.id}.title` as any)}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{t(`items.${program.id}.summary` as any)}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
