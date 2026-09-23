import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";

function XIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const quickLinks = [
  { key: "about", href: "/about" },
  { key: "programs", href: "/programs" },
  { key: "partners", href: "/partners" },
  { key: "contact", href: "/contact" },
];

export default function Footer() {
  const t = useTranslations("Footer");
  const navT = useTranslations("Navbar");

  return (
    <footer className="bg-[#0A2613] text-white/80">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/logo.jpg" 
                alt="COCOF Logo" 
                width={36} 
                height={36} 
                className="rounded-full object-cover shrink-0" 
              />
              <span
                className="text-xl font-semibold text-white tracking-tight"
                style={{ fontFamily: "var(--font-fraunces)" }}
              >
                COCOF
              </span>
            </div>
            <p className="text-base leading-relaxed text-white/70 max-w-xs">
              {t("description")}
            </p>
            <a
              href="https://x.com/cocof_m"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-base text-white/50 hover:text-[#E8B01C] transition-colors"
            >
              <XIcon size={18} />
              @cocof_m
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-sm uppercase tracking-widest text-[#E8B01C] font-semibold mb-5">{t("navigation")}</p>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="text-base text-white/70 hover:text-[#E8B01C] transition-colors"
                >
                  {navT(l.key as any)}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm uppercase tracking-widest text-[#E8B01C] font-semibold mb-5">{t("contact")}</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-base text-white/70">
                <Mail size={18} className="mt-0.5 shrink-0 text-[#E8B01C]" />
                <span>info@cocof.org.rw / cocofm18@gmail.com</span>
              </li>
              <li className="flex items-start gap-3 text-base text-white/70">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#E8B01C]" />
                <span>+250 788 480 161 / +250 722 855 445</span>
              </li>
              <li className="flex items-start gap-3 text-base text-white/70">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#E8B01C]" />
                <span>Musambira Sector, Kamonyi District, Southern Province, Rwanda</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-sm text-white/50">
          <p>{t("rights", { year: new Date().getFullYear() })}</p>
          <p>{t("legal")}</p>
        </div>
      </div>
    </footer>
  );
}
