"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Calendar, Building, ArrowRight, CheckCircle2 } from "lucide-react";

const projects = [
  {
    id: "horticulture",
    title: "Livelihoods in Horticulture Value Chain",
    years: "2020–2024",
    category: "Export Horticulture",
    shortDesc: "Unlocking the potential of Rwanda’s horticultural value chains to ensure the supply of safe and high-quality products.",
    description: `The project is aiming to unlocking the potential of Rwanda’s horticultural value chains to ensure the supply of safe & high quality products to local/regional/international markets in Kamonyi and Muhanga districts of Rwanda by targeting Horticulture value chain where around 10,000 farmers in both districts will benefit COCOF interventions in 4 years with the following outcomes and outputs:

• Increased investments to raise productivity, responsive to climate change and market demand: increased number of farmers accessing to improved seeds /seedlings, increased number of farmers who have adopted improved farming technologies, increased area with improved horticulture farming practices, increased production as a result of improved harvest / post-harvest technologies, increased monetary investment by farmers’ groups/cooperatives in farming technologies for cooperative use, increased crop yield, decreased post-harvest losses, and increased demand in volume of farmers’ products.

• Increased returns for small-holder horticultural farmers: increased number of farmers engaged in the project who adopt water conservation technologies, small irrigation and greenhouses techniques, increase in profit margins from sale of produce, increase in off-farm jobs created, increase in number of women shareholders in project supported cooperatives, leadership positions for women within cooperatives, women beneficiaries and decision making powers over household resources.

• Increased access and capacity to respond to demand /supply of local, regional and international markets: increased number of local regional, international buyers sourcing from targeted value chains, increased number of new horticulture product lines sold into local/regional/international markets, increased number of processing facilities with improved production capacity (volume), increase in average turnover of processing facilities, increase of farmers selling on contract farming as a result of project intervention.

• Strengthened horticulture policy and regulatory framework to support small holder farmers’ productivity, income and marketing improvements: increase in meetings/discussions related to horticulture policies, increase in duty bearers who report engagement in implementing horticulture policies, increase in districts’ budget allocation of horticulture sector and increase in joint initiatives between agriculture institutions to support horticulture farmers.`,
    image: "/2.webp",
    stats: [
      { label: "Budget", value: "214M RWF/yr" },
      { label: "Target", value: "10,000 Farmers" },
      { label: "Location", value: "Kamonyi & Nyamagabe" },
    ],
    funder: "EU through OXFAM in Rwanda",
    outcomes: [
      "Secured formal buyer supply contracts",
      "Introduced greenhouse & micro-irrigation systems",
      "Reduced post-harvest loss significantly"
    ]
  },
  {
    id: "soybean",
    title: "Greater Women & Youth Economic Empowerment",
    years: "2018–2021",
    category: "Value Chain Development",
    shortDesc: "Empowering women and youth through Soybean value chain development and integration of GALS methodologies.",
    description: `The objective of this project is greater women and youth economic empowerment through soybean and horticulture value chain in Kamonyi and Muhanga. The project contributed to Improved business skills, access to agro inputs, technologies, employment, finance, markets for 3494 poor and marginalized farmers in Kamonyi (Musambira, Nyarubaka, Nyamiyaga, Karama and Gacurabwenge Sectors) and Muhanga (Nyamabuye, Muhanga, Cyeza and Kibangu Sectors) Districts.

Also the project contributed to Improved ability of poor and marginalized women and youth to cope, respond and recover from stresses and shocks, Improved valuing of women's economic entitlements by local duty bearers, Increased women's leadership and improved relationships between duty bearers and project stakeholders. This project supported farmers to install 18 Demonstration plots rotating soybean and vegetables especially onions in marshland, supporting 3,404 farmers grouped into 18 coops to have inputs, good agricultural practices and post-harvest technologies with construction of 3 drying areas and 5 stressing and winnower machines.

Those farmers were linked to RAB (seed multipliers) and Muhanga Food Processing Industry and with initiation of contract farming through agribusiness cluster meetings. COCOF gained experience in soybean and vegetable value chain and was certified as seed multiplier by RAB with 208 certified farmers. Through GALS (Gender Action Learning) methodologies, Gender transformative tools were integrated in project activities with social change strategies and participatory decision making into soybean and horticulture value chains and rural finance, for a more demand-driven and inclusive approach reaching out to poor women. This was resulted in increasing production of soybean and vegetables in quality and quantity, supporting farmers in post-harvest technologies and linking them to market and finance.`,
    image: "/4.webp",
    stats: [
      { label: "Budget", value: "88.8M RWF/yr" },
      { label: "Target", value: "3,494 Farmers" },
      { label: "Location", value: "Kamonyi & Muhanga" },
    ],
    funder: "Irish Aid through OXFAM",
    outcomes: [
      "Established 18 demonstration plots",
      "Organized 39 SILC savings groups",
      "Achieved RAB seed multiplication certification"
    ]
  },
  {
    id: "youth",
    title: "Youth Employment Project — Huguka Dukore",
    years: "2017–2021",
    category: "Youth Empowerment",
    shortDesc: "Increasing stable employment opportunities, including self-employment, for male and female vulnerable youth.",
    description: `The project seeks to increase stable employment opportunities, including self-employment, for male and female vulnerable youth, to improve youth training systems and to increase investment in skills for vulnerable youth. 1070 youth from which at least 70% are female in different agricultural value chains, including soybean, maize and horticulture, were reached.

These are out of school youth aged 21-30, with education level at least P6 (Primary), Secondary school dropouts and / or completers as well as TVET level 3-6, Unemployed youth and/ or with an informal type of job or underemployed earning less than $ 1.75/day, with emphasis on those who are motivated in agribusiness and those with disability.

The Training Program of Work readiness, be your own boss and grow your business modules, technical training on different value chains including horticulture as well as accompaniment for job placement to supported youth. Currently 70% of youth trained on above programs (entrepreneurship programs) were placed into jobs around agricultural value chains including soybean, maize and horticulture.`,
    image: "/mit.webp",
    stats: [
      { label: "Budget", value: "91.1M RWF/yr" },
      { label: "Target", value: "2,500 Youth" },
      { label: "Location", value: "3 Districts" },
    ],
    funder: "USAID through EDC",
    outcomes: [
      "Trained 1,070 individuals (70% women)",
      "Achieved 70% job placement rate",
      "Advanced financial literacy & entrepreneurship"
    ]
  },
  {
    id: "water",
    title: "Water for Agriculture Production",
    years: "2014–2017",
    category: "Climate Adaptation",
    shortDesc: "Enhancing the capacity of small-scale farmers to apply rainwater harvesting and wastewater technologies.",
    description: `The overall objective was to enhance the capacity of small-scale farmers to apply rainwater harvesting and wastewater technologies for horticulture production and thereby increase resilience to climate change in communities in Kamonyi District of Rwanda.

The project supported small holder farmer’s especially women vulnerable to climate change suffering exclusion in relation to access, use and management of water resources that negatively impact them on a) food shortages leading to malnutrition, especially women who are busy with unproductive works and don’t have capacity to respond immediately to those chocks, c) women who are more involved in horticulture production who have to travel long distances to gather water which puts their security at risk and reduces the time they have to spend with on income generating activities, and d) those with low economic resources. The chance was given to women-headed households, widows, disabled, child-headed households and the old.

The communities were strengthened in climate change adaptation technologies with local Climate Change adaptation plans developed, roof water harvesting and waste water recycling technologies were introduced, documented and disseminated to the community to be used for horticulture production resulting in increasing income for poor and vulnerable households especially women.`,
    image: "/5.webp",
    stats: [
      { label: "Budget", value: "147.8M RWF" },
      { label: "Target", value: "250 Households" },
      { label: "Location", value: "Kamonyi District" },
    ],
    funder: "SCIAF through TROCAIRE",
    outcomes: [
      "Constructed rainwater harvesting infrastructure",
      "Implemented wastewater recycling systems",
      "Enabled off-season horticulture cultivation"
    ]
  },
  {
    id: "pineapple",
    title: "Pineapple Value Chain Development Project (PVP)",
    years: "2017–2019",
    category: "Organic Farming",
    shortDesc: "Strengthening the competitiveness of women organic pineapple growers in rural areas of Rwanda.",
    description: `The objective is to increase the income of smallholder women farmers in pineapple value chain and influence key stakeholders to adopt positive policies and practices. The project contributed to (1) Increased volume and quality of pineapples produced by smallholder women farmers through the adoption of organic farming, (2) Improved access to high value pineapple markets for smallholder women farmers; (3) Enable smallholder women farmers to be more active in cooperative management and leadership, increasing their participation in communities and enhancing gender equality and (4) Influence systems at national and local levels to promote transformational programming and ensure long-term wider impact.

The different trainings and equipment provided to farmers resulted in increase in skills and change in mindset of farmers pineapple growers who are now selling in groups. The linkage created between farmers and other actors in pineapple value chain increased access to high value market with increased market and price negotiation power as a result of project interventions.

Also, the capacity building provided to farmers cooperatives increased the management capacity of coops increasing the women leadership resulting in involving them in decision making not only at cooperative level but also at household level. Women are enjoying their rights and control to the land and income with increased income for securing their livelihoods.`,
    image: "/mother.webp",
    stats: [
      { label: "Budget", value: "95.5M RWF" },
      { label: "Target", value: "210 Farmers" },
      { label: "Location", value: "Kamonyi & Muhanga" },
    ],
    funder: "Oxfam",
    outcomes: [
      "Transitioned to certified organic farming",
      "Structured collective sales to high-value buyers",
      "Advanced women's legal land control"
    ]
  }
];

export default function Projects() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 md:gap-4 mb-4">
            <div className="w-8 md:w-10 h-[2px] bg-[#E8B01C]" />
            <span className="text-[#12422C] font-bold text-xs md:text-sm tracking-widest uppercase">Institutional Grants</span>
            <div className="w-8 md:w-10 h-[2px] bg-[#E8B01C]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0F2B5B] mb-4 md:mb-6" style={{ fontFamily: "var(--font-fraunces)" }}>
            Project Dossiers
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            High-impact interventions executed within clear timeframes, contracted budgets, and agreed donor deliverables.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {projects.map((project, index) => {
            const isImageLeft = index % 2 === 0;
            return (
              <div key={project.id} className={`flex flex-col lg:flex-row gap-6 lg:gap-12 items-center ${isImageLeft ? '' : 'lg:flex-row-reverse'}`}>
                {/* Image Side - Always on top on mobile due to DOM order */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative h-[250px] md:h-[350px] lg:h-[400px] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl shadow-gray-200/50 transition-transform duration-500 hover:scale-[1.02]">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Funder Badge */}
                    <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                      <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md shadow-lg px-4 md:px-5 py-2 md:py-2.5 rounded-full text-[#0F2B5B] font-bold text-xs md:text-sm">
                        <Building size={16} className="text-[#E8B01C]" />
                        {project.funder}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-4 md:mb-6">
                    <span className="inline-flex items-center gap-1 md:gap-1.5 px-3 md:px-4 py-1.5 bg-[#F3F7FC] text-[#1B4B8F] text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full border border-[#1B4B8F]/10">
                      <Calendar size={14} />
                      {project.years}
                    </span>
                    <span className="inline-flex items-center px-3 md:px-4 py-1.5 bg-[#12422C]/10 text-[#12422C] text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2B5B] mb-3 md:mb-4 leading-tight" style={{ fontFamily: "var(--font-fraunces)" }}>
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-5 md:mb-8 leading-relaxed max-w-xl">
                    {project.shortDesc}
                  </p>

                  {/* Stats Strip - Grid changes based on breakpoint */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-3 mb-6 md:mb-8">
                    {project.stats.map((stat, i) => (
                      <div key={i} className="bg-gray-50/80 rounded-xl md:rounded-2xl p-3 md:p-4 border border-gray-100 flex flex-col items-center text-center hover:bg-[#F3F7FC] transition-colors duration-300">
                        <div className="text-base md:text-lg lg:text-xl font-bold text-[#1B4B8F] mb-1">{stat.value}</div>
                        <div className="text-[9px] md:text-[10px] font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Key Outcomes */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 md:mb-4">Key Outcomes</h4>
                    <ul className="space-y-2 md:space-y-3">
                      {project.outcomes.map((outcome, i) => (
                        <li key={i} className="flex items-start gap-2 md:gap-3">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-[#12422C] shrink-0 mt-0.5 md:mt-0" />
                          <span className="text-gray-700 font-medium text-xs md:text-base">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div>
                    <button
                      onClick={() => setSelectedId(project.id)}
                      className="group w-full md:w-auto min-h-[40px] inline-flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 bg-[#0F2B5B] text-white rounded-full font-bold text-xs md:text-base transition-all hover:bg-[#1B4B8F] hover:shadow-xl hover:shadow-[#1B4B8F]/20 md:hover:-translate-y-1"
                    >
                      View Full Project Details
                      <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-[#0F2B5B]/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-4xl bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar z-10"
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-11 h-11 md:w-12 md:h-12 bg-black/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors shadow-sm"
              >
                <X size={20} className="md:w-6 md:h-6" />
              </button>

              <div className="w-full h-48 md:h-72 lg:h-96 relative bg-gray-100">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                  <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <span className="inline-flex items-center gap-1 md:gap-1.5 px-2.5 md:px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full">
                      <Calendar size={12} className="md:w-3.5 md:h-3.5" />
                      {selectedProject.years}
                    </span>
                    <span className="inline-flex items-center px-2.5 md:px-3 py-1 bg-[#E8B01C] text-[#0F2B5B] text-[10px] md:text-xs font-bold uppercase tracking-wider rounded-full">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight" style={{ fontFamily: "var(--font-fraunces)" }}>
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8 lg:p-12">
                <p className="text-gray-700 text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 whitespace-pre-line">
                  {selectedProject.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
                  {selectedProject.stats.map((stat, index) => (
                    <div key={index} className="bg-[#F8FAFC] rounded-xl md:rounded-2xl p-4 md:p-6 border border-gray-100 flex flex-col items-center sm:items-start text-center sm:text-left">
                      <div className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-wider mb-1 md:mb-2">
                        {stat.label}
                      </div>
                      <div className="text-lg md:text-xl font-bold text-[#0F2B5B]">
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </div>
                
                <div>
                  <h4 className="text-base md:text-lg font-bold text-[#0F2B5B] mb-3 md:mb-4" style={{ fontFamily: "var(--font-fraunces)" }}>Project Funder</h4>
                  <div className="inline-flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 bg-[#1B4B8F]/5 border border-[#1B4B8F]/10 rounded-xl md:rounded-2xl text-[#0F2B5B] font-bold text-sm md:text-base">
                     <Building size={20} className="md:w-6 md:h-6 text-[#1B4B8F]" />
                     {selectedProject.funder}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
