"use client";

import Link from "next/link";

export default function GetInvolved() {
  return (
    <section id="get-involved" className="py-20 bg-[#F3F7FC] border-t border-[#1B4B8F]/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2
          className="text-3xl font-bold text-ink mb-8"
          style={{ fontFamily: "var(--font-fraunces)" }}
        >
          Join Our Movement for Lasting Change
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact" className="px-8 py-3 rounded font-semibold text-white bg-[#1B4B8F] hover:bg-[#153a70] transition-colors">
            Get in Touch
          </Link>
          <Link href="/partners" className="px-8 py-3 rounded font-semibold text-[#1B4B8F] bg-white border border-[#1B4B8F]/20 hover:bg-gray-50 transition-colors">
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
