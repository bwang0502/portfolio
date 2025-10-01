// src/app/projects/page.tsx
'use client';

import ProjectCard from '@/app/components/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <div key={p.id} className="h-full">
            <ProjectCard {...p} />
          </div>
        ))}
      </div>
    </main>
  );
}
