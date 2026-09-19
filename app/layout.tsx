import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "COCOF Rwanda — Women's Advisory Council",
  description:
    "COCOF (Conseil Consultatif des Femmes) is a Rwandan NGO founded in 1994, empowering women through horticulture, gender-transformative programs, financial inclusion, and climate-smart agriculture.",
  keywords: ["COCOF", "Rwanda", "NGO", "women empowerment", "agriculture", "Kamonyi"],
  openGraph: {
    title: "COCOF Rwanda — Women's Advisory Council",
    description:
      "Empowering Rwandan Women Through Agriculture, Equity, and Opportunity.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="min-h-screen antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
