"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROGRAMS } from "@/data/programs";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, Heart, ShieldCheck } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ProgramDetail({ params }: { params: Promise<{ id: string }> }) {
  const t = useTranslations("ProgramDetail");
  const tData = useTranslations("ProgramsData");
  // In Next.js 15, params is a Promise in client components when using use()
  const resolvedParams = use(params);
  const program = PROGRAMS.find(p => p.id === resolvedParams.id);

  const [donationAmount, setDonationAmount] = useState<number | null>(50);

  if (!program) {
    notFound();
  }

  const predefinedAmounts = [25, 50, 100, 250];

  return (
    <main className="min-h-screen bg-[#F3F7FC] selection:bg-[#FFCC00] selection:text-[#0B3019] pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-10">
        <Link 
          href="/programs"
          className="inline-flex items-center gap-2 text-[#1B4B8F] hover:gap-3 transition-all font-semibold text-sm tracking-wide uppercase mb-6 md:mb-8"
        >
          <ArrowLeft size={16} /> {t("back")}
        </Link>
        
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <span className="text-[#1B4B8F]/30 font-serif text-3xl md:text-5xl font-bold tracking-tighter" style={{ fontFamily: 'var(--font-fraunces)' }}>
            {program.num}
          </span>
          <div className="h-1 w-1 bg-[#1B4B8F] rounded-full"></div>
          <span className="text-[10px] md:text-sm font-bold text-[#1B4B8F] tracking-[0.2em] uppercase">
            {tData(`${program.id}.category` as any)}
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3019] mb-4 md:mb-6 leading-[1.1] max-w-5xl" style={{ fontFamily: 'var(--font-fraunces)' }}>
          {tData(`${program.id}.title` as any)}
        </h1>
      </div>

      {/* Featured Image */}
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-24">
        <div className="relative w-full h-[250px] sm:h-[350px] md:h-[600px] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(11,48,25,0.1)] border border-[#0B3019]/5">
          <Image
            src={program.image}
            alt={tData(`${program.id}.title` as any)}
            fill
            quality={100}
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Content & Checkout Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7">
            <h2 className="text-xl md:text-2xl font-bold text-[#0B3019] mb-6 tracking-wide uppercase">{t("overview")}</h2>
            <div className="prose prose-base md:prose-lg prose-p:text-[#5A5A5A] prose-p:leading-relaxed">
              <p className="text-xl md:text-2xl text-[#0B3019] font-medium leading-snug mb-8 md:mb-10" style={{ fontFamily: 'var(--font-fraunces)' }}>
                {tData(`${program.id}.shortDesc` as any)}
              </p>
              {tData(`${program.id}.fullDesc` as any).split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="mt-16 pt-10 border-t border-[#0B3019]/10">
              <h3 className="text-xl font-bold text-[#0B3019] mb-6" style={{ fontFamily: 'var(--font-fraunces)' }}>
                {t("whySupport")}
              </h3>
              <ul className="space-y-4">
                {[
                  t("reason1"),
                  t("reason2"),
                  t("reason3")
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5A5A5A]">
                    <div className="mt-1 bg-[#1B4B8F]/10 rounded-full p-1">
                      <Check size={14} className="text-[#1B4B8F]" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Checkout / Donation */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(11,48,25,0.08)] border border-[#0B3019]/5">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-[#FFCC00]/20 text-[#0B3019] rounded-full mb-4">
                  <Heart size={20} className="fill-[#0B3019] md:w-6 md:h-6" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B3019] mb-3" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  {t("fundTitle")}
                </h3>
                <p className="text-[#5A5A5A] text-sm leading-relaxed">
                  {t("fundDesc")}
                </p>
              </div>

              {/* Amount Selection */}
              <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6">
                {predefinedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setDonationAmount(amount)}
                    className={`py-3 md:py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300 border-2 ${
                      donationAmount === amount 
                        ? "bg-[#0B3019] border-[#0B3019] text-white shadow-lg scale-[1.02]" 
                        : "bg-white border-[#0B3019]/10 text-[#0B3019] hover:border-[#0B3019]/30 hover:bg-[#0B3019]/5"
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom Amount */}
              <div className="relative mb-8">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-[#5A5A5A] font-bold text-lg">$</span>
                <input 
                  type="number"
                  placeholder={t("otherAmount")}
                  className="w-full bg-[#F3F7FC] border-none rounded-2xl py-5 pl-12 pr-6 text-lg font-bold text-[#0B3019] placeholder:text-[#5A5A5A]/50 focus:ring-2 focus:ring-[#1B4B8F] outline-none"
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val)) setDonationAmount(val);
                    else setDonationAmount(null);
                  }}
                />
              </div>

              {/* Donate Button */}
              <Link 
                href="/donate"
                className="group flex items-center justify-center w-full py-5 bg-[#FFCC00] text-[#0B3019] font-bold text-lg rounded-2xl shadow-[0_8px_20px_rgba(255,204,0,0.3)] hover:shadow-[0_12px_25px_rgba(255,204,0,0.4)] hover:bg-[#e6b800] transition-all duration-300"
              >
                {donationAmount ? `${t("donate")} $${donationAmount}` : t("donateNow")}
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1.5 transition-transform duration-300" />
              </Link>

              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-[#5A5A5A] font-medium">
                <ShieldCheck size={16} className="text-green-600" />
                {t("secure")}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
