"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sprout, Users, Briefcase, Landmark, CloudSun, GraduationCap } from "lucide-react";

const programs = [
  {
    icon: Landmark,
    title: "Women's Economic Empowerment",
    summary: "Expanding access to income-generating activities, savings, and productive assets.",
  },
  {
    icon: Sprout,
    title: "Sustainable Agriculture & Food Security",
    summary: "Enhancing crop yields through climate-smart technologies.",
  },
  {
    icon: Briefcase,
    title: "Cooperative Development & Market Access",
    summary: "Building governance capacity, processing capacity, and collective contract marketing.",
  },
  {
    icon: Users,
    title: "Gender Equality & Social Inclusion",
    summary: "Removing intra-household inequalities, elevating women's decision-making.",
  },
  {
    icon: CloudSun,
    title: "Climate Resilience",
    summary: "Rainwater harvesting, agroforestry, soil conservation.",
  },
  {
    icon: GraduationCap,
    title: "Youth & Community Development",
    summary: "Market-aligned technical training and entrepreneurship incubators.",
  },
];

export default function Programs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2
            className="text-4xl md:text-5xl font-bold text-ink max-w-2xl mx-auto leading-tight mb-4"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Six Pillars of Transformation
          </h2>
          <p className="text-base text-muted max-w-xl mx-auto">
            Our holistic model for sustainable change across Rwandan communities.
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
                key={program.title}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
                className="bg-white rounded p-8 border border-black/5 hover:border-[#1B4B8F]/20 transition-colors"
              >
                <Icon size={28} className="text-[#1B4B8F] mb-6" />
                <h3
                  className="text-lg font-bold text-ink mb-3"
                  style={{ fontFamily: "var(--font-fraunces)" }}
                >
                  {program.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{program.summary}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
