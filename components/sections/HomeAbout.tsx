"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeAbout() {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Mobile Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="w-full flex lg:hidden flex-col items-center text-center mb-8"
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-[#E8B01C]" />
            <span className="text-[#12422C] font-bold text-sm tracking-widest uppercase">
              About Us
            </span>
            <div className="w-12 h-[2px] bg-[#E8B01C]" />
          </div>
          <h2 
            className="text-3xl font-bold text-[#0F2B5B] leading-[1.2]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Driving sustainable economic resilience & community transformation.
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
          
          {/* Left Side: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-[35%] relative mx-auto lg:mx-0 max-w-[300px] lg:max-w-none order-2 lg:order-1"
          >
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden shadow-2xl shadow-black/10 border border-black/5">
              <Image
                src="/soya.png"
                alt="Rural mother in Rwanda"
                fill
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#F2FCF5] rounded-full -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-[#E8B01C]/10 rounded-full -z-10 blur-2xl" />
          </motion.div>

          {/* Right Side: Text & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-[60%] flex flex-col items-center lg:items-start text-center lg:text-left order-3 lg:order-2 max-w-xl mx-auto lg:mx-0"
          >
            {/* Desktop Title */}
            <div className="hidden lg:flex flex-col items-start mb-6">
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-12 h-[2px] bg-[#E8B01C]" />
                <span className="text-[#12422C] font-bold text-sm tracking-widest uppercase">
                  About Us
                </span>
              </div>
              <h2 
                className="text-4xl font-bold text-[#0F2B5B] leading-[1.2]"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Driving sustainable economic resilience & community transformation.
              </h2>
            </div>
            
            <p className="text-base text-black mb-5 leading-relaxed font-medium text-justify">
              Established in 1994 by rural women, COCOF is an accredited NGO dedicated to building a Rwanda where women and men attain equal rights.
            </p>
            <p className="text-base text-black mb-8 leading-relaxed text-justify">
              We empower over 20,000 beneficiaries through climate-smart agriculture, high-value horticulture, and the Gender Action Learning System (GALS). By championing financial inclusion, social enterprises, and youth employment, we drive sustainable economic resilience and community transformation.
            </p>

            {/* Statistics */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
            >
              {[
                { value: "1000+", label: "Women Members" },
                { value: "20k+", label: "Beneficiaries" },
                { value: "6", label: "Focus Areas" },
                { value: "32", label: "Years in Action" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
                  }}
                  className="flex flex-col items-center justify-center p-4 bg-white rounded-2xl border border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-transform duration-300"
                >
                  <span className="text-2xl font-bold text-[#0F2B5B] mb-1" style={{ fontFamily: "var(--font-fraunces)" }}>
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-black font-bold text-center uppercase tracking-wider">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
            
            <Link
              href="/impact"
              className="inline-flex items-center justify-center gap-3 bg-[#E8B01C] text-black px-8 py-3.5 rounded-full font-bold text-base hover:bg-[#D4A017] transition-all hover:scale-105 shadow-[0_0_30px_rgba(232,176,28,0.3)]"
            >
              See Our Impact
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
