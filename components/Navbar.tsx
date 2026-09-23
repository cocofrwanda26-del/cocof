"use client";

import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

const linkKeys = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "programs", href: "/programs" },
  { key: "impact", href: "/impact" },
  { key: "partners", href: "/partners" },
  { key: "news", href: "/news" },
  { key: "contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("Navbar");
  const locale = useLocale();
  const pathname = usePathname();

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
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <Image 
            src="/logo.jpg" 
            alt="COCOF Logo" 
            width={36} 
            height={36} 
            className="rounded-full object-cover shrink-0" 
          />
          <span
            className="text-xl xl:text-2xl font-bold tracking-tight transition-colors duration-300 text-ink"
            style={{ fontFamily: "var(--font-fraunces)" }}
          >
            COCOF
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-4 xl:gap-8">
          {linkKeys.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm xl:text-base font-bold transition-colors duration-200 text-muted hover:text-[#1B4B8F] whitespace-nowrap"
            >
              {t(l.key as any)}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2 xl:gap-4 shrink-0">
          <Link
            href={pathname}
            locale={locale === 'en' ? 'fr' : 'en'}
            className="inline-flex items-center gap-1 xl:gap-2 px-2 xl:px-3 py-2 rounded text-sm xl:text-base font-bold text-ink transition-colors duration-200 hover:text-[#1B4B8F]"
            title={locale === 'en' ? 'Français' : 'English'}
          >
            <Globe size={18} />
            <span className="uppercase">{locale === 'en' ? 'FR' : 'EN'}</span>
          </Link>
          <Link
            href="/donate"
            className="inline-flex items-center px-4 xl:px-6 py-2 xl:py-3 rounded text-sm xl:text-base font-bold text-[#1B4B8F] bg-[#F3F7FC] transition-all duration-200 hover:bg-[#E2E8F0] whitespace-nowrap"
          >
            {t("donate")}
          </Link>
          <Link
            href="/get-involved"
            className="inline-flex items-center px-4 xl:px-6 py-2 xl:py-3 rounded text-sm xl:text-base font-bold text-white transition-all duration-200 hover:bg-[#153a70] whitespace-nowrap"
            style={{ background: "#1B4B8F" }}
          >
            {t("getInvolved")}
          </Link>
        </div>

        <button
          className="lg:hidden p-1 transition-colors duration-300 text-ink"
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
            className="lg:hidden bg-white border-t border-black/5 px-6 pb-6 pt-4"
          >
            <nav className="flex flex-col gap-4">
              {linkKeys.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-base font-medium text-ink/80 hover:text-[#1B4B8F] transition-colors"
                >
                  {t(l.key as any)}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-3">
                <Link
                  href={pathname}
                  locale={locale === 'en' ? 'fr' : 'en'}
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded text-sm font-bold text-ink border border-black/10 transition-colors"
                >
                  <Globe size={16} />
                  <span>{locale === 'en' ? 'Français' : 'English'}</span>
                </Link>
                <Link
                  href="/donate"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex justify-center items-center px-5 py-2.5 rounded text-sm font-bold text-[#1B4B8F] bg-[#F3F7FC]"
                >
                  {t("donate")}
                </Link>
                <Link
                  href="/get-involved"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex justify-center items-center px-5 py-2.5 rounded text-sm font-semibold text-white"
                  style={{ background: "#1B4B8F" }}
                >
                  {t("getInvolved")}
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
