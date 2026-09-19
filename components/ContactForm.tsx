"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  onSubmit?: (data: FormData) => Promise<void>;
}

const inputBase =
  "w-full rounded-xl border px-4 py-3 text-sm text-ink placeholder:text-muted/60 outline-none transition-all duration-300 bg-white shadow-sm";
const inputStyle = `${inputBase} border-ink/10 focus:border-primary focus:ring-4 focus:ring-primary/10`;

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      if (onSubmit) {
        await onSubmit(form);
      } else {
        await new Promise((r) => setTimeout(r, 1000));
      }
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-semibold tracking-widest text-slate mb-2 uppercase">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your full name"
            className={inputStyle}
          />
        </div>
        <div>
          <label className="block text-xs font-semibold tracking-widest text-slate mb-2 uppercase">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className={inputStyle}
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold tracking-widest text-slate mb-2 uppercase">
          Subject
        </label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          required
          placeholder="How can we help?"
          className={inputStyle}
        />
      </div>

      <div>
        <label className="block text-xs font-semibold tracking-widest text-slate mb-2 uppercase">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell us about your interest in COCOF's work..."
          className={`${inputStyle} resize-none`}
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start px-8 py-4 rounded-xl text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-none"
        style={{
          background: status === "sending" ? "var(--color-slate)" : "var(--color-primary)",
          boxShadow: status === "sending" ? "none" : "0 8px 20px -8px rgba(27, 75, 143, 0.5)",
        }}
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      {status === "sent" && (
        <div className="p-4 rounded-xl bg-green-50 border border-green-100 text-sm font-medium text-green-800">
          ✓ Message sent successfully! We'll be in touch soon.
        </div>
      )}
      {status === "error" && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-sm font-medium text-red-800">
          Something went wrong. Please email us directly at cocofm18@gmail.com.
        </div>
      )}
    </form>
  );
}
