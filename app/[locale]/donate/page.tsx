"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ShieldCheck, CreditCard, ArrowRight, Lock, Landmark } from "lucide-react";
import { useTranslations } from "next-intl";

const AMOUNTS = [25, 50, 100, 250];

export default function DonatePage() {
  const t = useTranslations("DonatePage");
  const [selectedAmount, setSelectedAmount] = useState<number | 'custom'>(50);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isMonthly, setIsMonthly] = useState(false);

  return (
    <main className="min-h-screen bg-[#F3F7FC] pt-32 pb-24 selection:bg-[#FFCC00] selection:text-[#0B3019]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#0B3019] mb-6 tracking-tight leading-tight" style={{ fontFamily: 'var(--font-fraunces)' }}>
              {t("title1")} <span className="text-[#FFCC00] drop-shadow-sm">{t("title2")}</span> {t("title3")}
            </h1>
            <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed">
              {t("desc")}
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-[0_4px_24px_rgba(26,26,26,0.04)] border border-black/5"
          >
            {/* Frequency Toggle */}
            <div className="flex bg-[#F3F7FC] p-1.5 rounded-xl mb-10 w-fit">
              <button
                onClick={() => setIsMonthly(false)}
                className={`px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 ${!isMonthly ? 'bg-white text-[#0B3019] shadow-sm' : 'text-[#5A5A5A] hover:text-[#0B3019]'}`}
              >
                {t("giveOnce")}
              </button>
              <button
                onClick={() => setIsMonthly(true)}
                className={`px-8 py-3 rounded-lg text-sm font-bold transition-all duration-300 flex items-center gap-2 ${isMonthly ? 'bg-white text-[#0B3019] shadow-sm' : 'text-[#5A5A5A] hover:text-[#0B3019]'}`}
              >
                <Heart size={16} className={isMonthly ? 'text-[#FFCC00]' : 'text-transparent'} fill={isMonthly ? '#FFCC00' : 'none'} strokeWidth={isMonthly ? 0 : 2} />
                {t("monthly")}
              </button>
            </div>

            {/* Amount Selection */}
            <div className="mb-12">
              <h3 className="text-lg font-bold text-[#0B3019] mb-5">{t("selectAmount")}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {AMOUNTS.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => { setSelectedAmount(amount); setCustomAmount(""); }}
                    className={`py-4 rounded-xl text-xl font-bold border-2 transition-all duration-200 ${
                      selectedAmount === amount
                        ? 'border-[#FFCC00] bg-[#FFCC00]/10 text-[#0B3019]'
                        : 'border-[#F3F7FC] bg-[#F3F7FC]/40 text-[#1A1A1A] hover:border-[#FFCC00]/50 hover:bg-[#FFCC00]/5'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>
              <div className="mt-4">
                <div className={`relative flex items-center border-2 rounded-xl overflow-hidden transition-colors duration-200 ${selectedAmount === 'custom' ? 'border-[#FFCC00] bg-[#FFCC00]/5' : 'border-[#F3F7FC] hover:border-[#FFCC00]/50'}`}>
                  <span className="absolute left-6 text-xl font-bold text-[#1A1A1A]">$</span>
                  <input
                    type="number"
                    placeholder={t("customAmount")}
                    value={customAmount}
                    onFocus={() => setSelectedAmount('custom')}
                    onChange={(e) => {
                      setSelectedAmount('custom');
                      setCustomAmount(e.target.value);
                    }}
                    className="w-full py-4 pl-12 pr-6 text-xl font-bold text-[#0B3019] bg-transparent outline-none placeholder:text-[#5A5A5A]/40"
                  />
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="mb-12">
              <h3 className="text-lg font-bold text-[#0B3019] mb-5">{t("personalInfo")}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-[#5A5A5A] mb-2 ml-1">{t("firstName")}</label>
                  <input type="text" className="w-full px-5 py-4 bg-[#F3F7FC] border border-transparent rounded-xl focus:bg-[#FFFDF5] focus:border-[#FFCC00] outline-none transition-all duration-200 text-[#0B3019]" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#5A5A5A] mb-2 ml-1">{t("lastName")}</label>
                  <input type="text" className="w-full px-5 py-4 bg-[#F3F7FC] border border-transparent rounded-xl focus:bg-[#FFFDF5] focus:border-[#FFCC00] outline-none transition-all duration-200 text-[#0B3019]" placeholder="Doe" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#5A5A5A] mb-2 ml-1">{t("email")}</label>
                  <input type="email" className="w-full px-5 py-4 bg-[#F3F7FC] border border-transparent rounded-xl focus:bg-[#FFFDF5] focus:border-[#FFCC00] outline-none transition-all duration-200 text-[#0B3019]" placeholder="john@example.com" />
                </div>
              </div>
            </div>

            {/* Payment Method Skeleton & Bank Details */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-[#0B3019] mb-5">{t("paymentMethod")}</h3>
              
              {/* Card Skeleton */}
              <div className="w-full border-2 border-[#E2E8F0] rounded-xl p-6 flex items-center gap-5 bg-white mb-5 hover:border-[#FFCC00]/40 transition-colors cursor-pointer">
                <CreditCard className="text-[#5A5A5A]" size={28} />
                <div className="flex-1">
                  <div className="h-2.5 w-32 bg-[#E2E8F0] rounded-full mb-3"></div>
                  <div className="h-2 w-48 bg-[#F3F7FC] rounded-full"></div>
                </div>
                <Lock className="text-[#0B3019]/20" size={24} />
              </div>

              {/* Bank Account Details */}
              <div className="bg-[#FFFDF5] border-2 border-[#FFCC00]/40 rounded-xl p-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-[#FFCC00]"></div>
                <h4 className="font-bold text-[#0B3019] mb-4 text-sm flex items-center gap-2">
                  <Landmark size={18} className="text-[#FFCC00]" />
                  {t("directBank")}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-[#5A5A5A] text-xs font-semibold mb-0.5">{t("bankName")}</p>
                    <p className="font-bold text-[#0B3019]">Global Heritage Bank</p>
                  </div>
                  <div>
                    <p className="text-[#5A5A5A] text-xs font-semibold mb-0.5">{t("accountName")}</p>
                    <p className="font-bold text-[#0B3019]">COCOF NGO</p>
                  </div>
                  <div className="md:col-span-2 mt-1">
                    <p className="text-[#5A5A5A] text-xs font-semibold mb-1.5">{t("accountNumber")}</p>
                    <p className="font-mono font-bold text-[#0B3019] bg-white px-4 py-2.5 rounded-lg border border-[#FFCC00]/30 inline-block w-full md:w-auto shadow-sm text-base">
                      CH93 0000 0000 0000 0000 0
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-[#5A5A5A] mt-5 flex items-center gap-2 ml-1 font-medium">
                <ShieldCheck size={18} className="text-[#0B3019]" />
                {t("secure")}
              </p>
            </div>

            <button className="w-full py-5 rounded-xl text-[#0B3019] font-bold text-lg flex items-center justify-center gap-3 group transition-all duration-300 hover:bg-[#e6b800] shadow-[0_4px_14px_rgba(255,204,0,0.3)] hover:shadow-[0_6px_20px_rgba(255,204,0,0.4)]" style={{ background: '#FFCC00' }}>
              {t("donate")} {selectedAmount === 'custom' ? (customAmount ? `$${customAmount}` : '') : `$${selectedAmount}`}
              <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-center text-sm text-[#5A5A5A] mt-5">
              {t("terms")}
            </p>

          </motion.div>

          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Impact Highlights with Dark Green Theme */}
            <div className="bg-[#0B3019] rounded-3xl p-8 md:p-10 text-white relative overflow-hidden shadow-2xl">
              {/* Decorative Background Elements */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#FFCC00]/15 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-3xl font-bold mb-8 relative z-10" style={{ fontFamily: 'var(--font-fraunces)' }}>{t("impact1")} <span className="text-[#FFCC00]">{t("impact2")}</span></h3>
              
              <ul className="space-y-8 relative z-10">
                <li className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#FFCC00] flex items-center justify-center text-xl font-bold text-[#0B3019] shadow-inner">
                    $25
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-white">{t("meals")}</h4>
                    <p className="text-white/70 text-base leading-relaxed">{t("mealsDesc")}</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#FFCC00] flex items-center justify-center text-xl font-bold text-[#0B3019] shadow-inner">
                    $50
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-white">{t("eduKit")}</h4>
                    <p className="text-white/70 text-base leading-relaxed">{t("eduKitDesc")}</p>
                  </div>
                </li>
                <li className="flex gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#FFCC00] flex items-center justify-center text-xl font-bold text-[#0B3019] shadow-inner">
                    $100
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1 text-white">{t("healthcare")}</h4>
                    <p className="text-white/70 text-base leading-relaxed">{t("healthcareDesc")}</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_4px_24px_rgba(26,26,26,0.04)] border border-[#0B3019]/5">
              <div className="flex gap-1.5 text-[#FFCC00] mb-6">
                {[1,2,3,4,5].map(i => <Heart key={i} size={18} fill="currentColor" className="text-[#FFCC00]" />)}
              </div>
              <p className="text-xl text-[#0B3019] font-medium leading-relaxed italic mb-8">
                {t("testimonial")}
              </p>
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-full bg-[#FFFDF5] flex items-center justify-center font-bold text-[#0B3019] text-xl border-2 border-[#FFCC00] shadow-sm">
                  SM
                </div>
                <div>
                  <h4 className="font-bold text-lg text-[#0B3019]">{t("testimonialName")}</h4>
                  <p className="text-[#5A5A5A] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFCC00]"></span>
                    {t("monthlyDonor")}
                  </p>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}
