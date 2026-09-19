"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { useTranslations } from "next-intl";

function XIcon({ size = 16, color }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color ?? "currentColor"}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const contactDetails = [
  { id: "mail", iconType: "mail" as const, lines: ["cocofm18@gmail.com", "info@cocof.org.rw"] },
  { id: "phone", iconType: "phone" as const, lines: ["+250 788 480 161", "+250 722 855 445"] },
  { id: "map", iconType: "map" as const, isHq: true },
  { id: "x", iconType: "x" as const, lines: ["@cocof_m"], link: "https://x.com/cocof_m" },
];

function ContactIcon({ type, className }: { type: string; className?: string }) {
  if (type === "mail") return <Mail size={20} className={className} />;
  if (type === "phone") return <Phone size={20} className={className} />;
  if (type === "map") return <MapPin size={20} className={className} />;
  if (type === "x") return <XIcon size={20} color="currentColor" />;
  return null;
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const t = useTranslations("Contact");

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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as any } },
  };

  return (
    <section id="contact" style={{ background: "var(--color-tint)" }} className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-primary mb-6">
              {t("tag")}
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {t("title")}
            </h2>
            <p className="text-lg text-muted/90 leading-relaxed">
              {t("desc")}
            </p>
          </motion.div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
        >
          {/* Contact Details Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {contactDetails.map((d, i) => {
              const hqLines = d.isHq ? [t("hq.line1"), t("hq.line2"), t("hq.line3")] : undefined;
              const displayLines = hqLines || d.lines || [];
              return (
              <motion.div
                key={d.id}
                variants={itemVariants}
                className="group bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-primary/10 relative overflow-hidden"
              >
                {/* Subtle background decoration */}
                <div className="absolute -right-6 -top-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl transition-all group-hover:bg-primary/10"></div>
                
                <div className="flex items-start gap-5 relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-primary/10 text-primary transition-transform group-hover:scale-110 duration-300"
                  >
                    <ContactIcon type={d.iconType} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold tracking-wide text-ink mb-3 uppercase">
                      {t(`details.${d.id}` as any)}
                    </h4>
                    <div className="space-y-1.5">
                      {displayLines.map((line) =>
                        d.link ? (
                          <a
                            key={line}
                            href={d.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-base text-muted hover:text-primary transition-colors font-medium"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-base text-muted leading-relaxed">
                            {line}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )})}
          </div>

          {/* Form Area */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7 bg-white rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate/10"
          >
            <div className="mb-10">
              <h3
                className="text-3xl font-bold text-ink mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t("sendTitle")}
              </h3>
              <p className="text-muted">{t("sendDesc")}</p>
            </div>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
