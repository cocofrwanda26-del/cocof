"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Impact", href: "/impact" },
  { label: "Partners", href: "/partners" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-5 border-b border-black/5"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/logo.jpg" 
            alt="COCOF Logo" 
            width={36} 
            height={36} 
            className="rounded-full object-cover shrink-0" 
          />
          <span
            className="text-2xl font-bold tracking-tight transition-colors duration-300 text-ink"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            COCOF
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-base font-bold transition-colors duration-200 text-muted hover:text-[#1B4B8F]"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/donate"
            className="inline-flex items-center px-6 py-3 rounded text-base font-bold text-[#1B4B8F] bg-[#F3F7FC] transition-all duration-200 hover:bg-[#E2E8F0]"
          >
            Donate
          </Link>
          <Link
            href="/get-involved"
            className="inline-flex items-center px-6 py-3 rounded text-base font-bold text-white transition-all duration-200 hover:bg-[#153a70]"
            style={{ background: "#1B4B8F" }}
          >
            Get Involved
          </Link>
        </div>

        <button
          className="md:hidden p-1 transition-colors duration-300 text-ink"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-t border-black/5 px-6 pb-6 pt-4"
          >
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-ink/80 hover:text-[#1B4B8F] transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-3">
                <Link
                  href="/donate"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex justify-center items-center px-5 py-2.5 rounded text-sm font-bold text-[#1B4B8F] bg-[#F3F7FC]"
                >
                  Donate
                </Link>
                <Link
                  href="/get-involved"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex justify-center items-center px-5 py-2.5 rounded text-sm font-semibold text-white"
                  style={{ background: "#1B4B8F" }}
                >
                  Get Involved
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
