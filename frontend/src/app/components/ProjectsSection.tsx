// src/app/components/ProjectsSection.tsx
"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/app/components/ProjectCard";

const sampleProjects = [
  {
    title: 'UCLA Club Recommendation System',
    description: 'A recommendation system that helps students find clubs using AI-powered matching..',
    tech: ['Flask', 'Scikit-learn', 'Gunicorn'],
    repoUrl: 'https://github.com/vedvedere/Hoth_XII_Sleuth',
    demoUrl: 'https://www.youtube.com/watch?v=X2y4TXyYJog&list=LL&index=4'
  },
  {
    title: 'Personal Portfolio',
    description: 'Next.js + Tailwind + AWS serverless portfolio site.',
    tech: ['Next.js', 'Tailwind', 'AWS'],
    repoUrl: 'https://github.com/bwang0502/portfolio',
  },
  {
    title: 'Video Similarity Model',
    description: 'Siamese Network model detecting duplicate/related media in videos.',
    tech: ['PyTorch', 'OpenCV', 'Wandb'],
    repoUrl: 'https://github.com/bwang0502/DSU-Su25-Meta-AI-my-edits',
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="container py-16"
    >
      <h2 className="text-3xl font-bold text-center mb-8 text-white">
        Featured Projects
      </h2>
      <div className="
        grid
        grid-cols-1       /* 1 column on smallest screens */
        sm:grid-cols-2    /* 2 columns from sm (640px) up */
        lg:grid-cols-3    /* 3 columns from lg (1024px) up */
        gap-8
        px-6              /* less horizontal padding on mobile */
        md:px-8           /* more padding from md (768px) up */
      ">
        {sampleProjects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </motion.section>
  );
}

