"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Factory, Leaf, Sprout, Briefcase } from "lucide-react";

export default function IndustryPage() {
  return (
    <main className="min-h-screen bg-[#F3F7FC] pt-28 md:pt-32 pb-16 md:pb-24">
      {/* 1. Hero Section */}
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#12422C]/10 text-[#12422C] font-bold text-sm mb-6 border border-[#12422C]/10">
            <Factory size={16} />
            Muhanga Food Processing Industries
          </div>
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#0F2B5B] mb-6 tracking-tight leading-tight"
            style={{ fontFamily: 'var(--font-fraunces)' }}
          >
            Powering Sustainable <br className="hidden md:block" /> Agricultural Markets
          </h1>
          <p className="text-lg md:text-xl text-[#5A5A5A] leading-relaxed max-w-2xl mx-auto">
            Our social enterprise transforms raw rural harvests into premium, high-value commercial goods, establishing a guaranteed market and driving economic independence for farmers.
          </p>
        </motion.div>
      </div>

      {/* 2. Products Section (Image: veg.webp) */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#E8B01C]" />
              <span className="text-[#E8B01C] font-bold text-xs tracking-[0.2em] uppercase">
                Premium Outputs
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-8" style={{ fontFamily: 'var(--font-fraunces)' }}>
              Locally Grown, <br/> Expertly Processed
            </h2>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { name: "Composite Porridge Flour", icon: Leaf },
                { name: "Soya Tea Flour", icon: Leaf },
                { name: "Fresh Tofu", icon: Leaf },
                { name: "Soya Milk", icon: Leaf }
              ].map((product, i) => (
                <motion.div 
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-black/5 hover:-translate-y-1 transition-transform"
                >
                  <div className="w-10 h-10 bg-[#F2FCF5] rounded-full flex items-center justify-center mb-4">
                    <product.icon className="w-5 h-5 text-[#12422C]" />
                  </div>
                  <h3 className="font-bold text-[#0F2B5B] text-lg">{product.name}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <Image src="/x.webp" alt="Processed Soya Products" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>

      {/* 3. Aggregating Production & Buying (Image: ind.webp) */}
      <div className="bg-[#12422C] py-24 mb-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#E8B01C]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#0F2B5B]/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/10"
            >
              <Image src="/y.webp" alt="Industry Aggregation" fill className="object-cover" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#E8B01C]" />
                <span className="text-[#E8B01C] font-bold text-xs tracking-[0.2em] uppercase">
                  Commercial Aggregation
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-fraunces)' }}>
                Aggregating Production & Empowering Farmers
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                By purchasing raw harvests directly from rural cooperatives, MFPI eliminates the middleman. We aggregate production on an industrial scale, ensuring that farmers are guaranteed a fair, highly profitable commercial market for every single harvest season.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-[#E8B01C]" style={{ fontFamily: 'var(--font-fraunces)' }}>100%</div>
                  <div className="text-white font-medium leading-snug">
                    Of raw materials are sourced directly from our supported rural cooperatives.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* 4. Farmer Training on Soya Quality (Image: 3.webp) */}
      <div className="max-w-7xl mx-auto px-6 mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-[#E8B01C]" />
              <span className="text-[#12422C] font-bold text-xs tracking-[0.2em] uppercase">
                Capacity Building
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-[#0F2B5B] mb-6 leading-tight" style={{ fontFamily: 'var(--font-fraunces)' }}>
              Training on Elite Soya Quality
            </h2>
            <p className="text-[#5A5A5A] text-lg leading-relaxed mb-8">
              True industrial success starts in the soil. We provide rigorous, ongoing agronomic training to farmers to ensure their soya and maize meet strict commercial quality standards. From planting protocols to post-harvest handling, we build the elite skills necessary to command premium prices.
            </p>
            
            <div className="flex flex-col gap-4">
              {["Post-Harvest Handling", "Strict Moisture Control", "Grade-A Sorting Practices"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white px-6 py-4 rounded-xl border border-black/5 shadow-sm">
                  <Sprout className="text-[#1B4B8F] w-5 h-5 shrink-0" />
                  <span className="font-bold text-[#0F2B5B]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 relative aspect-square rounded-[2rem] overflow-hidden shadow-2xl"
          >
            <Image src="/3.webp" alt="Farmer Training" fill className="object-cover" />
          </motion.div>
        </div>
      </div>

      {/* 5. Job Creation (Image: 6.webp) */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#0F2B5B] rounded-[3rem] overflow-hidden relative shadow-2xl"
        >
          <div className="grid lg:grid-cols-2">
            <div className="p-12 md:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="w-10 h-[2px] bg-[#E8B01C]" />
                <span className="text-[#E8B01C] font-bold text-xs tracking-[0.2em] uppercase">
                  Economic Impact
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'var(--font-fraunces)' }}>
                Creating Sustainable Local Jobs
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-10">
                Beyond agricultural purchasing, the processing plant itself is a vital engine of local employment. By hiring technicians, operators, and logistics staff directly from the community, we inject steady, reliable salaries into the rural economy.
              </p>
              
              <div className="flex items-center gap-4 sm:gap-6 bg-white/5 border border-white/10 p-4 sm:p-6 rounded-2xl w-full sm:w-max backdrop-blur-sm">
                <Briefcase className="w-8 h-8 sm:w-10 sm:h-10 text-[#E8B01C] shrink-0" />
                <div>
                  <div className="text-xs sm:text-sm text-white/60 font-bold uppercase tracking-wider mb-1">Impact</div>
                  <div className="text-base sm:text-xl font-bold text-white leading-tight">Direct & Indirect Employment</div>
                </div>
              </div>
            </div>
            
            <div className="relative min-h-[400px] lg:min-h-full h-full">
              <Image src="/6.webp" alt="Job Creation" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B5B] to-transparent hidden lg:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B5B] to-transparent lg:hidden" />
            </div>
          </div>
        </motion.div>
      </div>
      
    </main>
  );
}
