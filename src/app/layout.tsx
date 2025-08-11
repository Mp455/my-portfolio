import "./globals.css";
import { Geist, Geist_Mono, JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";
import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { Toaster } from "./components/toaster";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Home",
    template: "%s | MP Dev",
  },
  icons: [
    {
      url: "/images/logo.svg",
    },
  ],
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${jetbrains.variable}  bg-primary text-white`}
      >
        <BackToTop />
        <Toaster />
        <Header />
        {children}
        <ContactForm />
        <Footer />
      </body>
    </html>
  );
}
