export interface ProjectType {
  id: string;
  name: string;
  tech: string[];
  description: string;
  longDescription?: string;
  linkUrl?: string;
  githubUrl?: string;
  videoUrl?: string;
  year: string;
  status: 'completed' | 'in-progress' | 'archived';
}

