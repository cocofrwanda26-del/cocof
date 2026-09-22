import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';

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
  metadataBase: new URL("https://cocof.org.rw"),
  title: {
    default: "COCOF Rwanda — Women's Advisory Council",
    template: "%s | COCOF Rwanda",
  },
  description:
    "COCOF (Conseil Consultatif des Femmes) is a Rwandan NGO founded in 1994, empowering women through horticulture, gender-transformative programs, financial inclusion, and climate-smart agriculture.",
  keywords: [
    "COCOF",
    "Rwanda",
    "NGO",
    "women empowerment",
    "agriculture",
    "Kamonyi",
    "Conseil Consultatif des Femmes",
    "gender equality",
    "climate-smart agriculture",
    "financial inclusion",
  ],
  authors: [{ name: "COCOF Rwanda" }],
  creator: "COCOF Rwanda",
  publisher: "COCOF Rwanda",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icon/favicon.ico" },
      { url: "/icon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/icon/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/icon/site.webmanifest",
  openGraph: {
    title: "COCOF Rwanda — Women's Advisory Council",
    description:
      "Empowering Rwandan Women Through Agriculture, Equity, and Opportunity.",
    url: "https://cocof.org.rw",
    siteName: "COCOF Rwanda",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "COCOF Rwanda — Women's Advisory Council",
    description: "Empowering Rwandan Women Through Agriculture, Equity, and Opportunity.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({ 
  children,
  params
}: { 
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="min-h-screen antialiased">
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
