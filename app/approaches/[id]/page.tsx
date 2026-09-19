"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { APPROACHES } from "@/data/approaches";
import { ArrowLeft, Check } from "lucide-react";

export default function ApproachDetail({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const approach = APPROACHES.find(a => a.id === resolvedParams.id);

  if (!approach) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F3F7FC] selection:bg-[#FFCC00] selection:text-[#0B3019] pt-24 md:pt-32 pb-16 md:pb-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 mb-8 md:mb-10">
        <Link 
          href="/about"
          className="inline-flex items-center gap-2 text-[#1B4B8F] hover:gap-3 transition-all font-semibold text-sm tracking-wide uppercase mb-6 md:mb-8"
        >
          <ArrowLeft size={16} /> Back to About Us
        </Link>
        
        <div className="flex items-center gap-3 md:gap-4 mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-[#1B4B8F]/10 text-[#1B4B8F] rounded-2xl shadow-sm">
            <approach.icon size={24} />
          </div>
          <div className="h-1 w-1 bg-[#1B4B8F] rounded-full"></div>
          <span className="text-[10px] md:text-sm font-bold text-[#1B4B8F] tracking-[0.2em] uppercase">
            {approach.tag}
          </span>
        </div>
        
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0B3019] mb-4 md:mb-6 leading-[1.1] max-w-5xl" style={{ fontFamily: 'var(--font-fraunces)' }}>
          {approach.title}
        </h1>
      </div>

      {/* Featured Image */}
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-24">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] rounded-[24px] overflow-hidden shadow-[0_20px_40px_rgba(11,48,25,0.1)] border border-[#0B3019]/5 bg-gray-200">
          {approach.image ? (
            <Image
              src={approach.image}
              alt={approach.title}
              fill
              quality={100}
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-[#0B3019]/40 bg-[#F3F4F6]">
              <span className="text-sm font-black tracking-widest uppercase mt-4">Waiting for Photo</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Content & Info Grid */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7">
            <h2 className="text-xl md:text-2xl font-bold text-[#0B3019] mb-6 tracking-wide uppercase">Approach Overview</h2>
            <div className="text-[#5A5A5A] leading-relaxed">
              <p className="text-xl md:text-2xl text-[#0B3019] font-medium leading-snug mb-8 md:mb-10" style={{ fontFamily: 'var(--font-fraunces)' }}>
                {approach.desc}
              </p>
              {approach.fullDesc?.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Right Column: Why it matters */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 bg-white rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_20px_60px_rgba(11,48,25,0.06)] border border-[#0B3019]/5">
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-[#FFCC00]/20 text-[#0B3019] rounded-full shrink-0">
                  <Check size={24} className="text-[#0B3019]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0B3019]" style={{ fontFamily: 'var(--font-fraunces)' }}>
                  Why this matters
                </h3>
              </div>
              
              <ul className="space-y-5">
                {[
                  "Transforms deeply entrenched systemic issues at the grassroots level.",
                  "Empowers communities to be self-reliant and resilient.",
                  "Promotes gender equality and shared decision-making."
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#5A5A5A] text-[15px] leading-relaxed">
                    <div className="mt-1 bg-[#1B4B8F]/10 rounded-full p-1 shrink-0">
                      <Check size={14} className="text-[#1B4B8F]" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-[#0B3019]/10">
                <p className="text-sm text-[#0B3019]/70 font-medium text-center">
                  Learn more about our <Link href="/programs" className="text-[#1B4B8F] font-bold hover:underline">active programs</Link> built on this approach.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
