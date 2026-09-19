"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";

function XIcon({ size = 16, color }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color ?? "currentColor"}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const contactDetails = [
  {
    iconType: "mail" as const,
    label: "Email Support",
    lines: ["cocofm18@gmail.com", "cocof_ruyumba@yahoo.fr"],
  },
  {
    iconType: "phone" as const,
    label: "Direct Lines",
    lines: ["+250 788 492 119", "+250 788 480 161"],
  },
  {
    iconType: "map" as const,
    label: "Headquarters",
    lines: ["Musambira Sector, Kamonyi District", "Southern Province, Rwanda", "B.P. 01 Muhanga"],
  },
  {
    iconType: "x" as const,
    label: "Twitter / X",
    lines: ["@cocof_m"],
    link: "https://x.com/cocof_m",
  },
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
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
              Connect With Us
            </p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-ink mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Let's Start a Conversation
            </h2>
            <p className="text-lg text-muted/90 leading-relaxed">
              Whether you're a potential partner, donor, researcher, or community member — our doors are always open. We'd love to hear from you.
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
            {contactDetails.map((d, i) => (
              <motion.div
                key={d.label}
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
                      {d.label}
                    </h4>
                    <div className="space-y-1.5">
                      {d.lines.map((line) =>
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
            ))}
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
                Send a Message
              </h3>
              <p className="text-muted">Fill out the form below and we'll get back to you promptly.</p>
            </div>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
