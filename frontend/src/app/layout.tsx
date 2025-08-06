// src/app/layout.tsx
import { Inter } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.variable} bg-gray-900 text-gray-100 flex flex-col min-h-screen`}>
         <Navbar />
         <main className="min-h-[80vh]">
           {children}
         </main>
         <Footer />
      </body>
    </html>
  );
}
