"use client";

import Link from "next/link";
import Image from "next/image";

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-2 bg-[#1B4B8F]/10 text-[#1B4B8F] rounded-full text-sm font-bold mb-6 tracking-wider uppercase">
              Get Involved
            </div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-[#1B4B8F] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-fraunces)" }}
            >
              Join Our Movement for Lasting Change
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              When you stand with us, you empower communities, foster sustainable development, and create a brighter future for generations to come. Your contribution makes an immediate impact. Be the catalyst for the change you wish to see.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/donate" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#1B4B8F] to-[#2a6fd1] hover:shadow-lg hover:shadow-[#1B4B8F]/30 transform hover:-translate-y-1 transition-all duration-300"
              >
                Donate Now
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 rounded-full font-bold text-[#1B4B8F] bg-white border-2 border-[#1B4B8F] hover:bg-[#1B4B8F] hover:text-white transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-[#1B4B8F]/20 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
              <Image 
                src="/wemen.webp" 
                alt="Women in public making an impact" 
                width={800} 
                height={600} 
                className="object-cover w-full h-[400px] md:h-[550px] transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              
              {/* Floating decorative element */}
              <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#1B4B8F] flex items-center justify-center text-white font-bold text-xl">
                    +
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Make an</p>
                    <p className="text-[#1B4B8F] font-black">Impact Today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
