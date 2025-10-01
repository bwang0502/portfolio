// src/app/components/Hero.tsx
"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="
        container flex flex-col-reverse sm:flex-col lg:flex-row
        items-center gap-8 py-20
      "
    >
      <div className="flex-1 space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Hi, I’m Brian—<br />
          a Data-Driven ML Engineer
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-lg md:text-xl text-white"
        >
          I am interested in transforming raw data into useful information and building interactive webapps. Currently exploring applications of machine learning through Natural Language Processing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="space-x-4"
        >
          <a
            href="/projects"
            className="btn-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            View Projects
          </a>
          <a
            href="/about"
            className="btn-outline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            About Me
          </a>
        </motion.div>
      </div>

      <div className="flex-1">
        <div className="aspect-w-1 aspect-h-1">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            src="/profile-photo.jpg"
            alt="Photo of Brian"
            className="object-cover rounded-2xl shadow-lg w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

