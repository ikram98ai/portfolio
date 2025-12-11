export interface ProjectDetails {
  challenge: string;
  solution: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  description: string;
  techStack: string[];
  imageUrls: string[]; // Changed from imageUrl: string to array
  link?: string;
  featured: boolean;
  category: string;
  details?: ProjectDetails;
}

export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  description?: string;
  rating?: number;
  testimonial?: string;
}

export interface Education {
  institution: string;
  degree: string;
  year: string;
}

export interface Certification {
  name: string;
  provider: string;
  issued: string;
  link?: string;
}

export interface Skill {
  category: string;
  skills: string[];
}

export interface Service {
  title: string;
  desc: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
  rating: number;
}
