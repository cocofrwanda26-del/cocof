"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ExternalLink, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";

interface Partner {
  name: string;
  role: string;
  website: string | null;
  logo: string;
}

const partnersData = [
  { id: "eu", name: "European Union (EU)", website: "https://www.eeas.europa.eu/delegations/rwanda_en", logo: "/logo/european union.png" },
  { id: "oxfam", name: "Oxfam", website: "https://rwanda.oxfam.org/", logo: "/logo/oxfarm.png" },
  { id: "irishAid", name: "Irish Aid", website: "https://www.irishaid.ie/", logo: "/logo/irish aid.png" },
  { id: "trocaire", name: "Trócaire", website: "https://www.trocaire.org/", logo: "/logo/trocaire.png" },
  { id: "sciaf", name: "SCIAF", website: "https://www.sciaf.org.uk/", logo: "/logo/scaif.png" },
  { id: "comicRelief", name: "Comic Relief", website: "https://www.comicrelief.com/", logo: "/logo/comic relief.png" },
  { id: "ciat", name: "Alliance Bioversity & CIAT", website: "https://alliancebioversityciat.org/", logo: "/logo/ciat.png" },
  { id: "minecofin", name: "MINECOFIN", website: "https://www.minecofin.gov.rw/", logo: "/logo/minecofin.png" },
  { id: "rab", name: "RAB", website: "https://www.rab.gov.rw/", logo: "/logo/rab.png" },
  { id: "profemmes", name: "PRO-FEMMES TWESE HAMWE", website: "https://profemmes.org/", logo: "/logo/pro-femmes.png" },
  { id: "radioHuguka", name: "Radio Huguka", website: "https://radiohuguka.rw/", logo: "/logo/radio huguka.png" },
  { id: "mfpi", name: "MFPI", website: null, logo: "/logo/mfpi.png" },
  { id: "clecam", name: "CLECAM Ejo Heza Plc", website: null, logo: "/logo/clecam.png" },
  { id: "sacco", name: "Umurenge SACCO", website: null, logo: "/logo/sacco.png" },
  { id: "duhamic", name: "DUHAMIC-ADRI", website: "https://www.duhamic.org.rw/", logo: "/logo/duhamic.png" },
  { id: "duterimbere", name: "DUTERIMBERE", website: "https://duterimbere.org/", logo: "/logo/duterimbere.png" },
];

const PartnerCard = ({ partner }: { partner: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations("Partners");
  const pt = useTranslations("PartnersData");

  return (
    <motion.div
      layout
      className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col relative"
    >
      <motion.div layout className="h-32 w-full relative mb-4 flex items-center justify-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <Image
          src={partner.logo}
          alt={`${partner.name} logo`}
          fill
          className={`object-contain p-2 transition-all duration-500 group-hover:scale-105`}
        />
      </motion.div>
      
      <motion.button
        layout
        onClick={() => setIsExpanded(!isExpanded)}
        className="mx-auto flex items-center gap-2 text-sm font-semibold text-[#12422C] hover:text-[#E8B01C] transition-colors py-2"
      >
        {isExpanded ? t("viewLess") : t("viewMore")}
        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </motion.button>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 border-t border-gray-100 mt-2">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {partner.name}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                {pt(`${partner.id}.role` as any)}
              </p>
              
              {partner.website && (
                <a 
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#E8B01C] hover:text-[#12422C] transition-colors"
                >
                  {t("visitWebsite")}
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

export default function Partners() {
  const t = useTranslations("Partners");
  return (
    <section className="py-24 bg-white text-gray-900 overflow-hidden relative">
      {/* Subtle decorative background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-gradient-to-b from-[#F3F7FC] to-transparent -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-[500px] bg-[#E8B01C]/5 rounded-full blur-[100px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-[#12422C]/10 text-[#12422C] font-semibold text-sm mb-4 tracking-wider uppercase border border-[#12422C]/20">
            {t("tag")}
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-[#12422C]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            {t("title")}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t("desc")}
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start"
        >
          {partnersData.map((partner) => (
            <motion.div key={partner.name} variants={itemVariants} layout>
              <PartnerCard partner={partner} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
