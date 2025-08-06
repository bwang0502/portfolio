// src/app/components/ProjectCard.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  tech: string[];
  repoUrl?: string;
  demoUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  tech,
  repoUrl,
  demoUrl,
}: ProjectCardProps) {
  const primaryLink = demoUrl ?? repoUrl;
  const handleCardClick = () => {
    if (primaryLink) window.open(primaryLink, '_blank', 'noopener');
  };

  return (
    <motion.div
      onClick={handleCardClick}
      role={primaryLink ? 'link' : undefined}
      tabIndex={primaryLink ? 0 : undefined}
      onKeyDown={(e) => {
        if (primaryLink && (e.key === 'Enter' || e.key === ' ')) {
          handleCardClick();
        }
      }}
      className="cursor-pointer p-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="bg-gray-800 text-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col h-full">
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold mb-2 text-white">
            {title}
          </h3>
          <p className="flex-1 text-base text-gray-300 mb-4">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((tag) => (
              <span
                key={tag}
                className="
                  text-sm
                  bg-gray-700
                  text-gray-200
                  px-2 py-1 rounded-full
                "
              >
                {tag}
              </span>
            ))}
          </div>
      
          <div className="mt-auto flex space-x-4">   
            {repoUrl && (
              <Link
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-sm font-medium underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                View Code
              </Link>
            )}
            {demoUrl && (
              <Link
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-sm font-medium underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Live Demo
              </Link>
            )} 
          </div>
        </div>
      </div>   
    </motion.div>
  );  
}

