"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Partner {
  name: string;
  role: string;
  website: string | null;
  logo: string;
}

const partnersData: Partner[] = [
  {
    name: "European Union (EU)",
    role: "The EU funded the major \"Livelihoods in Horticulture Value Chain\" project...",
    website: "https://www.eeas.europa.eu/delegations/rwanda_en",
    logo: "/logo/european union.png",
  },
  {
    name: "Oxfam",
    role: "A massive operational partner acting as the primary funding channel...",
    website: "https://rwanda.oxfam.org/",
    logo: "/logo/oxfarm.png",
  },
  {
    name: "Irish Aid",
    role: "Funded the \"Greater Women and Youth Economic Empowerment...",
    website: "https://www.irishaid.ie/",
    logo: "/logo/irish aid.png",
  },
  {
    name: "Trócaire",
    role: "Funded the \"Water for Agriculture Production\" project...",
    website: "https://www.trocaire.org/",
    logo: "/logo/trocaire.png",
  },
  {
    name: "SCIAF",
    role: "Partnered through Trócaire to co-fund the \"Water for Agriculture Production\"...",
    website: "https://www.sciaf.org.uk/",
    logo: "/logo/scaif.png",
  },
  {
    name: "Comic Relief",
    role: "Supported COCOF over the last five years in both short and long-term...",
    website: "https://www.comicrelief.com/",
    logo: "/logo/comic relief.png",
  },
  {
    name: "Alliance Bioversity & CIAT",
    role: "Listed as a key donor over the last five years...",
    website: "https://alliancebioversityciat.org/",
    logo: "/logo/ciat.png",
  },
  {
    name: "MINECOFIN",
    role: "Featured as a key national partner, Ministry of Finance & Economic Planning...",
    website: "https://www.minecofin.gov.rw/",
    logo: "/logo/minecofin.png",
  },
  {
    name: "RAB",
    role: "Officially certified COCOF as a seed multiplier...",
    website: "https://www.rab.gov.rw/",
    logo: "/logo/rab.png",
  },
  {
    name: "PRO-FEMMES TWESE HAMWE",
    role: "COCOF is an active member organization of this national umbrella network...",
    website: "https://profemmes.org/",
    logo: "/logo/pro-femmes.png",
  },
  {
    name: "Radio Huguka",
    role: "COCOF is a member and partner of this radio station...",
    website: "https://radiohuguka.rw/",
    logo: "/logo/radio huguka.png",
  },
  {
    name: "MFPI",
    role: "COCOF established and actively supports this inclusive social enterprise plant...",
    website: null,
    logo: "/logo/mfpi.png",
  },
  {
    name: "CLECAM Ejo Heza Plc",
    role: "Signed an agreement with COCOF as a Guarantee Fund...",
    website: null,
    logo: "/logo/clecam.png",
  },
  {
    name: "Umurenge SACCO",
    role: "COCOF initiated a local microfinance that merged with Umurenge SACCO...",
    website: null,
    logo: "/logo/sacco.png",
  },
  {
    name: "DUHAMIC-ADRI",
    role: "A strategic partner in operational activities and rural development efforts...",
    website: "https://www.duhamic.org.rw/",
    logo: "/logo/duhamic.png",
  },
  {
    name: "DUTERIMBERE",
    role: "Collaborates closely within COCOF's broader partnership network...",
    website: "https://duterimbere.org/",
    logo: "/logo/duterimbere.png",
  },
];

export default function PartnerMarquee() {
  return (
    <section className="py-16 bg-[#F2FCF5] text-gray-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px bg-[#12422C]/40 w-10"></div>
            <span className="text-[#12422C] font-semibold text-sm tracking-widest uppercase">
              Our Partners
            </span>
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden py-4">
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F2FCF5] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F2FCF5] to-transparent z-10 pointer-events-none"></div>
        
        <motion.div
          className="flex flex-nowrap gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 60 }}
        >
          {/* First set of partners */}
          {partnersData.map((partner, index) => (
            <div key={`partner-1-${index}`} className="flex-shrink-0 w-36 h-24 bg-white rounded-xl border border-black/5 flex items-center justify-center p-4 shadow-sm">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
          {/* Second set of partners for seamless looping */}
          {partnersData.map((partner, index) => (
            <div key={`partner-2-${index}`} className="flex-shrink-0 w-36 h-24 bg-white rounded-xl border border-black/5 flex items-center justify-center p-4 shadow-sm">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
