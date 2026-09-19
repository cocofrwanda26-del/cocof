"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Coins, Percent, Landmark, Users, Factory } from "lucide-react";

const approaches = [
  {
    icon: Coins,
    title: "SILC (Savings & Internal Lending Communities)",
    description: "COCOF transitioned communities from the traditional Akagega model to structured SILC groups, formalizing savings and providing a stepping stone to financial independence.",
  },
  {
    icon: Percent,
    title: "Guarantee Funds — SACCOs",
    description: "Members access loans at a preferential 8% interest rate through SACCOs (Kaduha, Jyambere Kamonyi) — significantly down from the standard 24%.",
    callout: { from: "24%", to: "8%" },
  },
  {
    icon: Landmark,
    title: "Guarantee Funds — CLECAM",
    description: "Members secure a competitive 12% interest rate through CLECAM branches in Ejoheza Muhanga and Kamonyi, empowering them to invest in their enterprises.",
  },
  {
    icon: Users,
    title: "Gender Action Learning System (GALS)",
    description: "A cross-cutting approach transforming intra-household dynamics so women participate equally in managing resources and making strategic family decisions.",
  },
  {
    icon: Factory,
    title: "Muhanga Food Processing Industries",
    description: "COCOF's own social enterprise, processing local soya and maize to create direct, profitable market linkages for our farmers.",
  },
];

export default function Approaches() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="approaches" className="py-24 bg-[#F3F7FC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold text-ink max-w-2xl mx-auto leading-tight"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Proprietary Models & Approaches
          </h2>
        </div>

        <div ref={ref} className="space-y-12">
          {approaches.map((approach, i) => {
            const Icon = approach.icon;
            const isEven = i % 2 === 0;

            return (
              <div
                key={approach.title}
                className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -20 : 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="w-full md:w-1/2 flex flex-col items-start"
                >
                  <Icon size={32} className="text-[#1B4B8F] mb-6" />
                  <h3
                    className="text-2xl md:text-3xl font-bold text-ink mb-3 leading-snug"
                    style={{ fontFamily: "var(--font-fraunces)" }}
                  >
                    {approach.title}
                  </h3>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="w-full md:w-1/2"
                >
                  <div className="bg-white p-8 rounded border border-black/5">
                    <p className="text-base text-muted leading-relaxed">
                      {approach.description}
                    </p>
                    
                    {approach.callout && (
                      <div className="mt-8 flex items-center gap-4">
                        <div className="flex items-center justify-center bg-gray-50 rounded px-5 py-3 border border-black/5">
                          <span className="text-xl font-bold text-[#4A5568] line-through decoration-2">
                            {approach.callout.from}
                          </span>
                        </div>
                        <span className="text-ink/30 font-bold">→</span>
                        <div className="flex items-center justify-center rounded px-6 py-3 bg-[#F3F7FC]">
                          <span className="text-3xl font-bold text-[#1B4B8F]" style={{ fontFamily: "var(--font-fraunces)" }}>
                            {approach.callout.to}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
