export interface Experience {
    company: string;
    role: string;
    period: string;
    description: string[];
}

export interface Project {
    name: string;
    description: string;
    link?: string;
    tech: string[];
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
    date?: string;
    link?: string;
    description?: string;
}


export interface ResumeData {
    name: string;
    title: string;
    location: string;
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    secondGithub?: string;
    summary: string;
    experience: Experience[];
    projects: Project[]; // The user prompt mentions "Projects" section in the requested website, though mostly integrated in "Experience" in their text. I will separate the specific "Projects" mentioned in the prompt if any fit, or stick to experience.
    // Looking at the prompt, they have a dedicated "WORK EXPERIENCE" section and "Backend, Cloud, Security & AI Contributions" which are specific achievements within the role.
    // Actually, they have an "INTERNSHIP" section too.
    // I will stick to a structure that fits their text.
    skills: SkillCategory[];
    education: Education[];
    achievements: Achievement[];
}
