"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const t = useTranslations("About");

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" as any }}
          >
            <h2
              className="text-3xl md:text-4xl font-bold text-ink mb-6 leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              {t("title")}
            </h2>
            <p className="text-lg leading-relaxed text-muted mb-6" dangerouslySetInnerHTML={{ __html: t.raw("p1") }} />
            <p className="text-base leading-relaxed text-muted">
              {t("p2")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" as any }}
            className="w-full aspect-[4/3] bg-[#F3F7FC] rounded flex items-center justify-center border border-black/5"
          >
            <span className="text-muted/50 text-sm font-semibold tracking-widest uppercase">
              {t("imageAlt")}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
