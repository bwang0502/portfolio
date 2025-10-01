// src/app/about/page.tsx
"use client";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <section className="container mx-auto py-16 px-6 sm:px-8 prose prose-invert text-white">
      <h1 className="text-center">About Me</h1>

      <div className="my-6 mx-auto w-full max-w-xl">
        <div className="aspect-square">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            src="/about-me.jpg"
            alt="Photo of Brian"
            className="object-cover rounded-2xl shadow-lg w-full h-full"
          />
        </div>
      </div>

      <p className="text-center">
        Hi, I’m <strong>Brian Wang</strong>, a sophomore at UCLA majoring in Statistics
        &amp; Data Science with a minor in Data Science Engineering. I enjoy building
        full-stack applications and exploring data science applications that turn
        incoherent data into accessible information. My current focus is on diving
        into the world of machine learning and engineering data-driven solutions. In my
        free time, I enjoy playing sports such as golf or baseball and finding good food
        around the Bay Area.
      </p>

      <h2 className="text-center">Education</h2>
      <ul>
        <li>
          <strong>UCLA</strong> — B.S. in Statistics &amp; Data Science; Data Science Engineering minor
          (Expected June 2028)
        </li>
        <li>
          Relevant Coursework:
          Data Structures &amp; Algorithms, Linear Algebra, Statistical Programming with R, Multivariable Calculus
        </li>
      </ul>

      <h2 className="text-center">Technical Skills</h2>
      <ul>
        <li>Languages: TypeScript, JavaScript (ES6+), C++, Python</li>
        <li>Frontend: React, Next.js, Tailwind CSS, Framer Motion</li>
        <li>Backend & Infra: Node.js, AWS (Lambda, API Gateway, S3, DynamoDB), Serverless Framework</li>
        <li>Data: SQL, Pandas, PyTorch, OpenCV, NumPy, Scikit-Learn</li>
        <li>Tools: Git, Docker, Turbopack, Kaggle, GitHub Actions</li>
      </ul>

      <h2 className="text-center">Get in Touch</h2>
      <p className="text-center">
        I’m always interested to chat about machine learning applications, data science challenges, or full-stack
        gigs. Feel free to <a href="/contact" className="text-blue-600 hover:underline">drop me a message</a>!
      </p>

      <div className="text-center mt-6">
        <a
          href="/BrianWang_Resume.pdf"
          download
          className="inline-block px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

