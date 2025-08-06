// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  repoUrl?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    "id": "proj-1",
    "title": "UCLA Club Recommendation System",
    "description": "A smart club recommendation system that helps UCLA students find clubs matching their interests using AI-powered matching.",
    "repoUrl": "https://github.com/vedvedere/Hoth_XII_Sleuth",
    "tech": ["Flask", "Scikit-learn", "Gunicorn"]
  },
  {
    "id": "proj-2",
    "title": "Personal Portfolio",
    "description": "Personal portfolio site displaying my projects and information",
    "repoUrl": "https://github.com/bwang0502/portfolio",
    "tech": ["Next.js", "Tailwind", "AWS Lambda"]
  }
];

