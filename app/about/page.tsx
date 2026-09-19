"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Shield, Users, Target, Landmark, Leaf, Briefcase, Network, Sparkles, Eye, Scale, ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
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
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  };

  const approaches = [
    {
      title: "Gender Action Learning System",
      tag: "GALS",
      icon: <Users className="w-8 h-8" />,
      image: "",
      desc: "Visual transformation tools empowering spouses to collaboratively plan finances, redistribute care work, and negotiate joint property.",
      hoverBg: "group-hover:bg-[#1E3A8A]/5",
      iconColor: "text-[#1E3A8A]",
      borderColor: "group-hover:border-[#1E3A8A]/30"
    },
    {
      title: "Savings & Internal Lending",
      tag: "SILC",
      icon: <Landmark className="w-8 h-8" />,
      image: "",
      desc: "Allowing rural women and vulnerable youth to aggregate weekly savings, build liquidity, and access low-interest credit.",
      hoverBg: "group-hover:bg-[#2F6B3A]/5",
      iconColor: "text-[#2F6B3A]",
      borderColor: "group-hover:border-[#2F6B3A]/30"
    },
    {
      title: "Guarantee Fund Framework",
      tag: "FINANCE",
      icon: <Shield className="w-8 h-8" />,
      image: "",
      desc: "Risk-sharing partnerships with microfinance institutions to bypass collateral and access highly negotiated, affordable investment credit.",
      hoverBg: "group-hover:bg-[#1E3A8A]/5",
      iconColor: "text-[#1E3A8A]",
      borderColor: "group-hover:border-[#1E3A8A]/30"
    },
    {
      title: "Farmer Trainer Extension",
      tag: "AGRICULTURE",
      icon: <Leaf className="w-8 h-8" />,
      image: "",
      desc: "30 certified community trainers demonstrating climate-smart agriculture directly through peer-to-peer learning networks.",
      hoverBg: "group-hover:bg-[#2F6B3A]/5",
      iconColor: "text-[#2F6B3A]",
      borderColor: "group-hover:border-[#2F6B3A]/30"
    },
    {
      title: "Social Enterprise Integration",
      tag: "MFPI",
      icon: <Briefcase className="w-8 h-8" />,
      image: "",
      desc: "Operating Muhanga Food Processing Industries to link smallholder cooperatives directly to industrial agro-processing.",
      hoverBg: "group-hover:bg-[#1E3A8A]/5",
      iconColor: "text-[#1E3A8A]",
      borderColor: "group-hover:border-[#1E3A8A]/30"
    },
    {
      title: "Commercial Hubs",
      tag: "AGGREGATION",
      icon: <Network className="w-8 h-8" />,
      image: "",
      desc: "Organizing smallholders into centers that achieve bulk volumes, establish traceability, and secure supply agreements.",
      hoverBg: "group-hover:bg-[#2F6B3A]/5",
      iconColor: "text-[#2F6B3A]",
      borderColor: "group-hover:border-[#2F6B3A]/30"
    }
  ];

  const executiveTeam = [
    { name: "Tharcisse SEMUGAZA", title: "Executive Secretary", intro: "Leading COCOF's daily operations and strategic vision implementation with decades of experience." },
    { name: "Claudine UWITONZE", title: "Executive Secretariat", intro: "Driving program execution and community outreach initiatives across our core sectors." },
    { name: "Cyrille NZIGIYE", title: "Executive Secretariat", intro: "Overseeing financial administration and ensuring stringent internal controls are met." },
    { name: "Henriette USANASE", title: "Executive Secretariat", intro: "Coordinating stakeholder relations and supporting program delivery at the grassroots level." }
  ];

  const boardTeam = [
    { name: "Mathilde MUKARUGERO", title: "Board Member", intro: "Providing strategic oversight and upholding COCOF's core values at the highest governance level." },
    { name: "Clémentine ABAMARIYA", title: "Board Member", intro: "Championing women's rights and shaping long-term strategies for community transformation." }
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-[#2F6B3A] selection:text-white overflow-hidden" ref={containerRef}>
      
      {/* High-Energy Solid Hero */}
      <section className="pt-40 pb-20 px-6 relative bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 z-20">
              <motion.div 
                initial={{ opacity: 0, x: -30 }} 
                animate={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-4 px-6 py-2.5 rounded-full bg-[#1E3A8A]/5 border border-[#1E3A8A]/20 mb-8"
              >
                <div className="w-8 h-[2px] bg-[#F5B400] rounded-full" />
                <span className="text-[#1E3A8A] text-sm font-black tracking-[0.2em] uppercase flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#1E3A8A]" />
                  Conseil Consultatif des Femmes
                </span>
                <div className="w-8 h-[2px] bg-[#F5B400] rounded-full" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-[4rem] md:text-[6.5rem] font-bold text-[#1A1A1A] leading-[0.9] tracking-tight mb-8" 
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                Equal <span className="text-[#2F6B3A]">Rights.</span><br/>
                Real <span className="relative text-[#1E3A8A]">
                  Impact.
                  <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#1E3A8A]/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="4" fill="none"/></svg>
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-2xl text-[#1A1A1A]/70 font-medium leading-snug max-w-2xl border-l-4 border-[#2F6B3A] pl-6"
              >
                Founded in December 1994 by rural peasant women, we are an accredited NGO fighting to rebuild communities and secure sustainable livelihoods across Rwanda.
              </motion.p>
            </div>
            
            <div className="lg:col-span-5 relative h-[400px] lg:h-[550px] w-full">
              <motion.div 
                className="absolute inset-0 rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(47,107,58,0.15)] z-10 border-4 border-white"
                initial={{ opacity: 0, scale: 0.85, rotate: -2 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <img src="/mere.webp" alt="Rwandan Women" className="w-full h-full object-cover" />
              </motion.div>
              {/* Solid Floating Accent Card */}
              <motion.div 
                className="absolute -bottom-10 -left-10 bg-[#1E3A8A] p-8 rounded-[32px] shadow-2xl z-20 w-72"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                style={{ y }}
              >
                <Target className="w-12 h-12 text-white mb-4" />
                <p className="text-4xl font-black text-white mb-1">30+</p>
                <p className="text-sm font-bold text-white/70 uppercase tracking-widest">Years of Action</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission - Solid High Impact Blocks */}
      <section className="py-24 px-6 relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Dark Blue Vision Block */}
            <motion.div 
              {...fadeIn}
              className="group bg-white rounded-[40px] p-12 lg:p-16 border-2 border-[#1E3A8A] transition-colors duration-500 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(30,58,138,0.1)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#1E3A8A] opacity-5 rounded-bl-full scale-125" />
              <div className="relative z-10 flex flex-col h-full">
                <h2 className="text-2xl font-black tracking-widest text-[#1E3A8A] uppercase mb-8 flex items-center gap-4">
                  <Eye className="w-8 h-8" /> Our Vision
                </h2>
                <p className="text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-tight" style={{ fontFamily: "var(--font-fraunces)" }}>
                  "A Rwanda where both women and men attain <span className="text-[#1E3A8A]">equal rights.</span>"
                </p>
              </div>
            </motion.div>

            {/* Dark Green Mission Block */}
            <motion.div 
              {...fadeIn}
              className="group bg-[#23532C] rounded-[40px] p-12 lg:p-16 border-2 border-[#23532C] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-80 h-80 bg-white opacity-[0.03] rounded-bl-full scale-125" />
              <div className="relative z-10 flex flex-col h-full">
                <h2 className="text-2xl font-black tracking-widest text-[#F5B400] uppercase mb-8 flex items-center gap-4">
                  <Target className="w-8 h-8" /> Our Mission
                </h2>
                <p className="text-3xl lg:text-4xl font-bold text-white leading-snug" style={{ fontFamily: "var(--font-fraunces)" }}>
                  To help women achieve economic, social, and political abilities that allow them to enjoy the same rights as men and <span className="text-[#F5B400]">address the problems they face.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dynamic Legal & Governance Summary */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0A192F] rounded-[48px] p-12 md:p-20 relative overflow-hidden shadow-2xl">
            {/* Subtle overlay elements instead of gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-[0.02] -skew-x-12 transform translate-x-1/4" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#2F6B3A] rounded-tr-full opacity-40" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 text-white">
              <motion.div {...fadeIn}>
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-8">
                  <Scale className="w-8 h-8 text-[#F5B400]" />
                </div>
                <h3 className="text-4xl font-bold mb-6 text-[#F5B400]" style={{ fontFamily: "var(--font-fraunces)" }}>Legal Authority</h3>
                <p className="text-white/90 text-xl leading-relaxed font-medium">
                  Operating with absolute transparency under Rwanda Governance Board (RGB) accreditation (Law No. 058/2024). Our legitimacy is rooted deeply in our history, formally recognized since 2002.
                </p>
              </motion.div>
              
              <motion.div {...fadeIn}>
                <div className="w-16 h-16 rounded-2xl bg-[#2F6B3A] flex items-center justify-center mb-8 shadow-lg">
                  <Shield className="w-8 h-8 text-[#F5B400]" />
                </div>
                <h3 className="text-4xl font-bold mb-6 text-[#F5B400]" style={{ fontFamily: "var(--font-fraunces)" }}>Stringent Governance</h3>
                <p className="text-white/90 text-xl leading-relaxed font-medium">
                  A 40-member Supreme Organ, independent Audit Committee, and strict Conflict Resolution frameworks ensure peak fiduciary accountability and strategic execution across our extensive networks (Pro-Femme Twese Hamwe).
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* High-Impact Approaches Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24" {...fadeIn}>
            <div className="max-w-3xl">
              <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] leading-[1]" style={{ fontFamily: "var(--font-fraunces)" }}>
                Our Delivery <br/>
                <span className="text-[#2F6B3A]">Approaches.</span>
              </h2>
            </div>
            <p className="text-xl text-[#1A1A1A]/60 font-semibold max-w-md">
              Proprietary operational frameworks that turn vision into tangible community transformation.
            </p>
          </motion.div>

          <motion.div 
            variants={stagger}
            initial="initial"
            whileInView="whileInView"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {approaches.map((approach, idx) => (
              <motion.div 
                key={idx}
                variants={item}
                className="group relative h-[420px] rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-b-[6px] border-transparent hover:border-[#1E3A8A] transition-all duration-500 cursor-pointer"
              >
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gray-100">
                  {approach.image ? (
                    <img src={approach.image} alt={approach.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#F3F4F6] text-gray-400 group-hover:scale-105 transition-transform duration-700">
                      <span className="text-xs font-black tracking-widest uppercase">Waiting for Photo</span>
                    </div>
                  )}
                </div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content Area */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col items-start justify-end">
                  <h3 className="text-2xl md:text-3xl font-black text-[#F5B400] uppercase mb-5 tracking-wide leading-tight drop-shadow-md" style={{ fontFamily: "var(--font-fraunces)", textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}>
                    {approach.title}
                  </h3>
                  
                  <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#1A1A1A]/80 border border-white/20 text-white text-xs font-bold tracking-widest uppercase backdrop-blur-md group-hover:bg-white group-hover:text-black group-hover:border-white transition-all duration-300 shadow-lg">
                    Click photo to learn more 
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Breathtaking Photo Break */}
      <section className="pb-32 bg-white px-6">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-[600px] lg:h-[800px] rounded-[48px] overflow-hidden relative shadow-[0_40px_100px_rgba(0,0,0,0.15)] bg-black"
          >
            <img 
              src="/hero.webp" 
              alt="Community impact" 
              className="w-full h-full object-cover transition-transform duration-[3s] hover:scale-105"
            />

          </motion.div>
        </div>
      </section>

      {/* Leadership - Bold & Clean */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-24" {...fadeIn}>
            <h2 className="text-5xl md:text-7xl font-black text-[#1E3A8A] mb-6" style={{ fontFamily: "var(--font-fraunces)" }}>
              The Visionaries
            </h2>
            <div className="w-24 h-2 bg-[#F5B400] rounded-full mb-8" />
            <p className="text-2xl text-[#1A1A1A]/60 font-medium">
              The resilient minds driving our mission forward.
            </p>
          </motion.div>

          <div className="mb-32">
            <h3 className="text-2xl font-black tracking-widest text-[#2F6B3A] uppercase mb-12 flex items-center gap-4">
              <div className="w-12 h-1 bg-[#2F6B3A]" /> Executive Secretariat
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {executiveTeam.map((leader, index) => (
                <LeaderCard key={leader.name} {...leader} delay={index * 0.1} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-black tracking-widest text-[#2F6B3A] uppercase mb-12 flex items-center gap-4 justify-end text-right">
              Board of Directors <div className="w-12 h-1 bg-[#2F6B3A]" />
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:max-w-4xl ml-auto">
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

function LeaderCard({ name, title, intro, delay }: { name: string, title: string, intro: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className="group flex flex-col bg-white rounded-[40px] p-4 border border-gray-100 hover:border-transparent hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] transition-all duration-500"
    >
      {/* Ultra-Premium Clean Placeholder */}
      <div className="relative h-72 md:h-80 w-full rounded-[32px] overflow-hidden bg-[#FAFAFA] mb-6 flex flex-col items-center justify-center border-2 border-transparent group-hover:border-gray-100 transition-all duration-500">
        <div className="px-6 py-2.5 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100/50">
          <span className="text-[10px] font-black tracking-[0.2em] uppercase text-gray-400 group-hover:text-[#1E3A8A] transition-colors duration-500">
            Waiting for Photo
          </span>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="px-4 pb-4 flex flex-col flex-grow">
        <h4 className="text-2xl font-bold text-[#1A1A1A] mb-1 group-hover:text-[#1E3A8A] transition-colors duration-300" style={{ fontFamily: "var(--font-fraunces)" }}>
          {name}
        </h4>
        <p className="text-xs font-black text-[#2F6B3A] uppercase tracking-[0.15em] mb-4 pb-4 border-b border-gray-100">
          {title}
        </p>
        <p className="text-[#1A1A1A]/60 text-[15px] leading-relaxed font-medium mt-auto">
          {intro}
        </p>
      </div>
    </motion.div>
  );
}
