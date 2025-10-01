// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Brian Wang | Portfolio",
  description: "Projects, writing, and contact.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="bg-gray-900 text-gray-100 flex min-h-screen flex-col"><Navbar />
        <main className="min-h-[80vh]">{children}</main>
        <Footer />
      </body></html>
  );
}

