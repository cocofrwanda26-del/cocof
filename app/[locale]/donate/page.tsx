"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Building2, MapPin, Landmark, Copy, Check, MessageCircle, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function DonatePage() {
  const t = useTranslations("DonatePage");
  const [copiedField, setCopiedField] = useState<string | null>(null);
  
  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <main className="min-h-screen bg-[#F3F7FC] pt-32 pb-24 selection:bg-[#FFCC00] selection:text-[#0B3019]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Hero Section with Photo "2" */}
        <div className="relative rounded-3xl overflow-hidden mb-16 shadow-2xl flex flex-col min-h-[450px] md:min-h-[500px]">
          <Image 
            src="/2.webp" 
            alt="Empower Women"
            fill
            className="object-cover z-0"
            priority
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3019] via-[#0B3019]/70 to-transparent z-10"></div>
          
          {/* Content Container */}
          <div className="relative z-20 p-6 pt-24 md:p-12 w-full max-w-4xl mt-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-[2rem] leading-[1.1] md:text-6xl font-bold text-white mb-4 tracking-tight" style={{ fontFamily: 'var(--font-fraunces)' }}>
                {t("title1")} <span className="text-[#FFCC00] drop-shadow-sm">{t("title2")}</span> <br className="hidden md:block" />{t("title3")}
              </h1>
              <p className="text-base md:text-xl text-white/90 leading-relaxed max-w-2xl">
                {t("desc")}
              </p>
            </motion.div>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Bank Details Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-8 bg-white rounded-3xl p-6 md:p-12 shadow-[0_4px_24px_rgba(26,26,26,0.04)] border border-black/5 relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#FFCC00]"></div>
            
            <div className="flex items-center gap-3 mb-8">
              <Landmark className="text-[#FFCC00]" size={32} />
              <h2 className="text-2xl font-bold text-[#0B3019]">{t("bankDetailsTitle")}</h2>
            </div>

            <div className="space-y-6">
              {/* Prominent High Priority Details */}
              <div className="bg-[#FFFDF5] border border-[#FFCC00]/30 rounded-2xl p-5 md:p-8 space-y-6 shadow-sm">
                
                {/* Beneficiary Name */}
                <div className="flex flex-row justify-between items-center gap-4 border-b border-[#0B3019]/10 pb-6">
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs md:text-sm font-bold text-[#5A5A5A] uppercase tracking-wider mb-1">{t("beneficiary")}</p>
                    <p className="text-lg md:text-2xl font-extrabold text-[#0B3019] break-words">{t("beneficiaryValue")}</p>
                  </div>
                  <button 
                    onClick={() => handleCopy("COCOF (Conseil Consultatif des Femmes)", "beneficiary")}
                    className="ml-4 p-3 md:p-2 rounded-xl md:rounded-lg bg-[#F3F7FC] hover:bg-[#FFCC00]/20 text-[#0B3019] transition-colors flex-shrink-0 flex items-center justify-center"
                    title={t("copy")}
                  >
                    {copiedField === "beneficiary" ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                  </button>
                </div>

                {/* Account Number */}
                <div className="flex flex-row justify-between items-center gap-4 border-b border-[#0B3019]/10 pb-6">
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs md:text-sm font-bold text-[#5A5A5A] uppercase tracking-wider mb-1">{t("accountNumber")}</p>
                    <p className="text-xl md:text-3xl font-mono font-bold text-[#0B3019] md:tracking-widest break-all">{t("accountNumberValue")}</p>
                  </div>
                  <button 
                    onClick={() => handleCopy("2170004972", "accountNumber")}
                    className="ml-4 p-3 md:p-2 rounded-xl md:rounded-lg bg-[#F3F7FC] hover:bg-[#FFCC00]/20 text-[#0B3019] transition-colors flex-shrink-0 flex items-center justify-center"
                    title={t("copy")}
                  >
                    {copiedField === "accountNumber" ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                  </button>
                </div>

                {/* SWIFT / BIC */}
                <div className="flex flex-row justify-between items-center gap-4 border-b border-[#0B3019]/10 pb-6">
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs md:text-sm font-bold text-[#5A5A5A] uppercase tracking-wider mb-1">{t("swift")}</p>
                    <p className="text-lg md:text-2xl font-mono font-bold text-[#0B3019]">{t("swiftValue")}</p>
                  </div>
                  <button 
                    onClick={() => handleCopy("GTBIRWRK", "swift")}
                    className="ml-4 p-3 md:p-2 rounded-xl md:rounded-lg bg-[#F3F7FC] hover:bg-[#FFCC00]/20 text-[#0B3019] transition-colors flex-shrink-0 flex items-center justify-center"
                    title={t("copy")}
                  >
                    {copiedField === "swift" ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                  </button>
                </div>

                {/* Bank Name */}
                <div className="flex flex-row justify-between items-center gap-4">
                  <div className="flex-1 overflow-hidden">
                    <p className="text-xs md:text-sm font-bold text-[#5A5A5A] uppercase tracking-wider mb-1">{t("bank")}</p>
                    <p className="text-lg md:text-2xl font-bold text-[#0B3019] break-words">{t("bankValue")}</p>
                  </div>
                  <button 
                    onClick={() => handleCopy("Guaranty Trust Bank (Rwanda) Plc", "bankName")}
                    className="ml-4 p-3 md:p-2 rounded-xl md:rounded-lg bg-[#F3F7FC] hover:bg-[#FFCC00]/20 text-[#0B3019] transition-colors flex-shrink-0 flex items-center justify-center"
                    title={t("copy")}
                  >
                    {copiedField === "bankName" ? <Check size={20} className="text-green-600" /> : <Copy size={20} />}
                  </button>
                </div>
              </div>

              {/* Secondary Details (For Compliance / Wire Transfer Forms) */}
              <div className="bg-[#F3F7FC] rounded-2xl p-5 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <div className="flex items-center gap-2 text-[#5A5A5A] mb-1">
                    <Building2 size={16} />
                    <p className="text-xs font-bold uppercase">{t("bankAddress")}</p>
                  </div>
                  <p className="text-sm font-medium text-[#0B3019]">{t("bankAddressValue")}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-[#5A5A5A] mb-1">
                    <MapPin size={16} />
                    <p className="text-xs font-bold uppercase">{t("beneficiaryLocation")}</p>
                  </div>
                  <p className="text-sm font-medium text-[#0B3019]">{t("beneficiaryLocationValue")}</p>
                </div>
                <div className="md:col-span-2 pt-2 border-t border-[#0B3019]/10">
                  <p className="text-xs font-bold uppercase text-[#5A5A5A] mb-1">{t("currency")}</p>
                  <p className="text-sm font-medium text-[#0B3019]">{t("currencyValue")}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info & Assistance Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            {/* Assistance Box */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_4px_24px_rgba(26,26,26,0.04)] border border-black/5">
              <h3 className="text-xl font-bold text-[#0B3019] mb-2">{t("assistanceTitle")}</h3>
              <p className="text-[#5A5A5A] text-sm mb-6">{t("assistanceDesc")}</p>
              
              <div className="space-y-4">
                <a 
                  href="https://wa.me/250788000180" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#5A5A5A] uppercase">{t("whatsapp")}</p>
                    <p className="font-bold text-[#0B3019]">{t("whatsappNum")}</p>
                  </div>
                </a>

                <div className="p-4 rounded-xl bg-[#F3F7FC] border border-transparent focus-within:border-[#FFCC00]/50 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <Mail size={18} className="text-[#5A5A5A]" />
                    <p className="text-sm font-bold text-[#0B3019]">{t("emailUs")}</p>
                  </div>
                  <form className="flex flex-col gap-2" onSubmit={(e) => {
                    e.preventDefault();
                    const emailInput = e.currentTarget.elements.namedItem('email') as HTMLInputElement;
                    window.location.href = `mailto:${t("emailAddr")}?subject=Donation%20Assistance%20-%20${emailInput.value}`;
                  }}>
                    <input 
                      type="email" 
                      name="email"
                      required
                      placeholder={t("emailPlaceholder")}
                      className="w-full text-sm px-4 py-2.5 rounded-lg border border-gray-200 outline-none focus:border-[#FFCC00] bg-white text-[#0B3019]"
                    />
                    <button type="submit" className="w-full bg-[#0B3019] hover:bg-[#154627] text-white text-sm font-bold py-2.5 rounded-lg transition-colors">
                      {t("send")}
                    </button>
                  </form>
                  <p className="text-xs text-center text-[#5A5A5A] mt-3">
                    Or directly via <a href={`mailto:${t("emailAddr")}?subject=Donation%20Assistance`} className="text-[#FFCC00] font-bold hover:underline">{t("emailAddr")}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Highlights with Dark Green Theme */}
            <div className="bg-[#0B3019] rounded-3xl p-8 text-white relative overflow-hidden shadow-2xl">
              {/* Decorative Background Elements */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#FFCC00]/15 rounded-full blur-3xl pointer-events-none"></div>
              <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <h3 className="text-2xl font-bold mb-8 relative z-10" style={{ fontFamily: 'var(--font-fraunces)' }}>{t("impact1")} <span className="text-[#FFCC00]">{t("impact2")}</span></h3>
              
              <ul className="space-y-6 relative z-10">
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFCC00] flex items-center justify-center text-lg font-bold text-[#0B3019] shadow-inner">
                    $25
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-white">{t("meals")}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{t("mealsDesc")}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFCC00] flex items-center justify-center text-lg font-bold text-[#0B3019] shadow-inner">
                    $50
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-white">{t("eduKit")}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{t("eduKitDesc")}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#FFCC00] flex items-center justify-center text-lg font-bold text-[#0B3019] shadow-inner">
                    $100
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-white">{t("healthcare")}</h4>
                    <p className="text-white/70 text-sm leading-relaxed">{t("healthcareDesc")}</p>
                  </div>
                </li>
              </ul>
            </div>

          </motion.div>
        </div>
      </div>
    </main>
  );
}
