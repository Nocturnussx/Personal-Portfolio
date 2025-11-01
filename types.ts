export interface Skill {
  name: string;
  level: number;
}

export interface Language {
  name: string;
  level: number;
}

export interface WorkExperienceItem {
  title: string;
  points: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  period: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface ProjectItem {
  imageUrl: string;
  title: string;
  description: string;
}
