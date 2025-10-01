// src/data/projects.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  repoUrl?: string;
  demoUrl?: string;
  tech: string[];
}

export const projects: Project[] = [
  {
    "id": "proj-1",
    "title": "UCLA Club Recommendation System",
    "description": "A recommendation system that helps students find clubs using AI-powered matching.",
    "repoUrl": "https://github.com/vedvedere/Hoth_XII_Sleuth",
    "demoUrl": 'https://www.youtube.com/watch?v=X2y4TXyYJog&list=LL&index=4',
    "tech": ["Flask", "Scikit-learn", "Gunicorn"]
  },
  {
    "id": "proj-2",
    "title": "Personal Portfolio",
    "description": "Personal portfolio site displaying my projects and information.",
    "repoUrl": "https://github.com/bwang0502/portfolio",
    "tech": ["Next.js", "Tailwind", "AWS Lambda"]
  },
  {
    "id": "proj-3",
    "title": "Video Similarity Learning",
    "description": "Siamese Network model  detecting duplicate/related media in videos.",
    "repoUrl": "https://github.com/bwang0502/DSU-Su25-Meta-AI-my-edits",
    "tech": ["PyTorch", "OpenCV", "Wandb"]
  },
];

