export interface ProfileLink {
  label: string;
  url: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  grade: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Achievement {
  title: string;
  issuer: string;
  date: string;
  link: string;
  description: string;
}

export interface ResumeData {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  phoneHref: string;
  linkedin: ProfileLink;
  github: ProfileLink;
  summary: string;
  focusAreas: string[];
  experience: Experience[];
  skills: SkillCategory[];
  education: Education[];
  achievements: Achievement[];
}
