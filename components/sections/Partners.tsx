"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";

interface Partner {
  name: string;
  role: string;
  website: string | null;
  logo: string;
}

const partnersData: Partner[] = [
  {
    name: "European Union (EU)",
    role: "The EU funded the major \"Livelihoods in Horticulture Value Chain\" project (RWF 903,004,445) through Oxfam in Rwanda to raise horticulture productivity, introduce climate-smart irrigation, and increase market access for 10,000 farmers in Kamonyi and Nyamagabe Districts.",
    website: "https://www.eeas.europa.eu/delegations/rwanda_en",
    logo: "/logo/european union.png",
  },
  {
    name: "Oxfam",
    role: "A massive operational partner acting as the primary funding channel for the Horticulture Value Chain (EU), the Soybean Value Chain (Irish Aid), and the Pineapple Value Chain Development project.",
    website: "https://rwanda.oxfam.org/",
    logo: "/logo/oxfarm.png",
  },
  {
    name: "Irish Aid",
    role: "Funded the \"Greater Women and Youth Economic Empowerment through Soybean value chain development\" project via Oxfam, which established marshland demonstration plots and reached 3,494 beneficiaries.",
    website: "https://www.irishaid.ie/",
    logo: "/logo/irish aid.png",
  },
  {
    name: "Trócaire",
    role: "Funded the \"Water for Agriculture Production\" project, which introduced rainwater harvesting and wastewater recycling technologies to 250 vulnerable, climate-affected households.",
    website: "https://www.trocaire.org/",
    logo: "/logo/trocaire.png",
  },
  {
    name: "SCIAF",
    role: "Partnered through Trócaire to co-fund the \"Water for Agriculture Production\" project, helping small-scale horticulture farmers adapt to climate change.",
    website: "https://www.sciaf.org.uk/",
    logo: "/logo/scaif.png",
  },
  {
    name: "Comic Relief",
    role: "Supported COCOF over the last five years in both short and long-term interventions focused on women's economic empowerment, agriculture value chains, and climate change.",
    website: "https://www.comicrelief.com/",
    logo: "/logo/comic relief.png",
  },
  {
    name: "Alliance Bioversity & CIAT",
    role: "Listed as a key donor over the last five years, supporting COCOF's interventions in agriculture value chains, nutrition, and food security.",
    website: "https://alliancebioversityciat.org/",
    logo: "/logo/ciat.png",
  },
  {
    name: "MINECOFIN",
    role: "Featured as a key national partner, Ministry of Finance & Economic Planning collaborates with COCOF on broader economic empowerment initiatives.",
    website: "https://www.minecofin.gov.rw/",
    logo: "/logo/minecofin.png",
  },
  {
    name: "RAB",
    role: "Officially certified COCOF as a seed multiplier (resulting in 208 certified local farmers) and supplied essential seed multipliers for the soybean value chain.",
    website: "https://www.rab.gov.rw/",
    logo: "/logo/rab.png",
  },
  {
    name: "PRO-FEMMES TWESE HAMWE",
    role: "COCOF is an active member organization of this national umbrella network, which comprises 53 women-led organizations advocating for gender equality in Rwanda.",
    website: "https://profemmes.org/",
    logo: "/logo/pro-femmes.png",
  },
  {
    name: "Radio Huguka",
    role: "COCOF is a member and partner of this radio station, utilizing it as a broadcasting platform to share agricultural best practices and project successes with wider communities.",
    website: "https://radiohuguka.rw/",
    logo: "/logo/radio huguka.png",
  },
  {
    name: "MFPI",
    role: "COCOF established and actively supports this inclusive social enterprise plant, which processes Soya and Maize to link smallholder farmers directly to commercial value addition.",
    website: null,
    logo: "/logo/mfpi.png",
  },
  {
    name: "CLECAM Ejo Heza Plc",
    role: "Signed an agreement with COCOF as a Guarantee Fund, allowing women and cooperatives to access loans at a highly preferential 12% interest rate.",
    website: null,
    logo: "/logo/clecam.png",
  },
  {
    name: "Umurenge SACCO",
    role: "COCOF initiated a local microfinance that merged with Umurenge SACCO Musambira to link beneficiaries to financial services, offering guarantee agreements for 8% interest loans.",
    website: null,
    logo: "/logo/sacco.png",
  },
  {
    name: "DUHAMIC-ADRI",
    role: "A strategic partner in operational activities and rural development efforts alongside COCOF.",
    website: "https://www.duhamic.org.rw/",
    logo: "/logo/duhamic.png",
  },
  {
    name: "DUTERIMBERE",
    role: "Collaborates closely within COCOF's broader partnership network, advocating for inclusive economic development.",
    website: "https://duterimbere.org/",
    logo: "/logo/duterimbere.png",
  },
];

const PartnerCard = ({ partner }: { partner: Partner }) => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        {isExpanded ? "View Less" : "View More"}
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
                {partner.role}
              </p>
              
              {partner.website && (
                <a 
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#E8B01C] hover:text-[#12422C] transition-colors"
                >
                  Visit Website
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
            Our Network
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-[#12422C]"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            Partners & Affiliates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We collaborate with global organizations, government agencies, and local enterprises to maximize our impact on sustainable agriculture and community development in Rwanda.
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
