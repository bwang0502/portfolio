// src/app/components/Navbar.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="
       p-4 flex justify-between items-center
       bg-gray-800 text-gray-100
       shadow
      "
    >
      <div className="flex items-center space-x-6">
        <Link
          href="/"
          className="
            font-bold text-xl hover:underline
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          Home
        </Link>
        <Link
          href="/projects"
          className="
            hover:underline
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="
            hover:underline
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          Contact
        </Link>
        <Link
          href="/about"
          className="
            hover:underline
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
          "
        >
          About
        </Link>
      </div>
    </motion.nav>
  );
}

