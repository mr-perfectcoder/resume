import type { ResumeData } from '../types';

export const resumeData: ResumeData = {
    name: "ASHISH RANJAN",
    title: "Senior Software Engineer",
    location: "India",
    email: "ashishranjan.ar7@gmail.com",
    phone: "8404853652",
    linkedin: "linkedin.com/in/offical-ashish",
    github: "mr-perfectcoder",
    secondGithub: "its-me-ar",
    summary: "Senior Software Engineer with 5 years of experience building secure, scalable, and high-performance web systems using Next.js, React, and Node.js. Strong expertise in Performance Optimization (Core Web Vitals), Component Architecture / Design Systems, and Micro-front-end architecture. Hands-on experience with End-to-End Encryption, secure workflows, React Native, and AI operations (RAG pipelines). Proven track record of delivering production-grade, accessible, and security-compliant Front-end solutions.",
    experience: [
        {
            company: "Mindfire Solutions",
            role: "Senior Software Engineer",
            period: "Dec 2023 – Present",
            description: [
                "Led Senior Frontend Development (Next.js/React): Optimized Core Web Vitals with React Query, lazy loading, and code-splitting while engineering scalable, responsive, and accessible (WCAG) component libraries.",
                "Architected E2EE File-Sharing Platform: Designed secure client-side encryption flows, key management, and shared-key access control for private/shared file workflows.",
                "Engineered High-Volume Data Migration Pipelines: Created restartable async workflows using Node.js, Amazon SQS, and DynamoDB; deployed scalable backend services on AWS ECS.",
                "Developed AI RAG Pipelines: Implemented semantic search using Gemini LLM and Hugging Face embedding models over client documents.",
                "Hardened System Security & Compliance: Automated security checks using SBOM dependency scans in CI/CD and enforced strict web security headers (CSP, HSTS).",
                "Advanced Integrations & Developer Mentorship: Handled Multi-Auth (Cognito, NextAuth), real-time updates (SignalR), maintained React Native apps, and mentored junior engineers."
            ]
        },
        {
            company: "Mantra Labs",
            role: "Software Engineer",
            period: "Oct 2022 – Nov 2023",
            description: [
                "Spearheaded frontend development using Next.js and React for scalable web applications.",
                "Implemented Redux Toolkit for predictable and maintainable state management.",
                "Worked on micro-frontend architecture, enabling independent feature deployment.",
                "Contributed to React Native applications for both iOS and Android platforms.",
                "Improved frontend performance by resolving rendering and data-fetching bottlenecks.",
                "Collaborated with designers, backend engineers, and cloud teams on system architecture.",
                "Used Nginx and PM2 for deployment and process management.",
                "Participated in code reviews, documentation, and mentoring interns.",
                "Applications supported 1,000+ daily active users."
            ]
        },
        {
            company: "Tata Consultancy Services",
            role: "Assistant System Engineer",
            period: "Jun 2021 – Oct 2022",
            description: [
                "Developed enterprise web applications using React.js, HTML5, CSS3, and JavaScript.",
                "Worked extensively with React Hooks, Context API, React Router, SSR concepts, and component-driven architecture.",
                "Built and consumed RESTful APIs using Node.js, Express, and MongoDB.",
                "Implemented responsive UI designs ensuring cross-device compatibility.",
                "Collaborated with cross-functional teams to deliver client-ready solutions.",
                "Used Git for version control and team collaboration."
            ]
        },
        {
            company: "IIT Patna",
            role: "React Developer (Intern)",
            period: "Jun 2019 – Aug 2019",
            description: [
                "Led development of an Online R&D Portal using React.js and SQL.",
                "Built web interfaces used daily by thousands of IIT students and faculty.",
                "Collaborated closely with research teams to gather requirements and deliver a high-quality solution."
            ]
        }
    ],
    projects: [], // No standalone personal projects listed separate from work experience
    skills: [
        {
            title: "Frontend Core",
            skills: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript (ES6+)"]
        },
        {
            title: "Performance & Architecture",
            skills: ["Core Web Vitals", "Code Splitting", "Micro-frontend architecture", "Design Systems"]
        },
        {
            title: "State & Data Management",
            skills: ["React Query", "Redux Toolkit", "Context API", "REST APIs"]
        },
        {
            title: "UI & Styling",
            skills: ["Tailwind CSS", "Material UI", "React Native Paper", "Responsive Design"]
        },
        {
            title: "Testing & Quality",
            skills: ["Jest", "React Testing Library", "ESLint", "Prettier", "Lighthouse"]
        },
        {
            title: "Backend & Systems",
            skills: ["Node.js", "Express.js", "Nest.js", "RESTful APIs"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "PostgreSQL", "Redis", "DynamoDB"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS ECS", "SQS", "S3", "CI/CD Platforms"]
        },
        {
            title: "Security & Authentication",
            skills: ["AWS Cognito", "NextAuth", "End-to-End Encryption", "Web Security Headers (CSP)"]
        },
        {
            title: "AI & Tools",
            skills: ["RAG Pipelines", "Gemini LLM", "Vector Search", "Git", "GitHub", "Jira"]
        }
    ],
    education: [
        {
            institution: "Gandhi Institute for Technology, Bhubaneswar",
            degree: "Bachelor of Technology in Computer Science & Engineering",
            period: "2017 – 2021",
            grade: "CGPA: 8.15 / 10"
        },
        {
            institution: "L.S.T College (BSEB)",
            degree: "Higher Secondary Education",
            period: "2015 – 2017",
            grade: "Percentage: 57.50%"
        },
        {
            institution: "S.D.P.S (CBSE)",
            degree: "Secondary Education",
            period: "2015",
            grade: "CGPA: 8.40 / 10"
        }
    ],
    achievements: [
        {
            title: "Rising Star",
            issuer: "Mindfire Solutions LLP",
            date: "June 2025",
            link: "https://tinyurl.com/2s4bm2ba",
            description: "Recognized as a Rising Star for exceptional performance and dedication."
        },
        {
            title: "AWS Cloud Quest: Cloud Practitioner",
            issuer: "Amazon Web Services (AWS)",
            date: "January 2025",
            link: "https://www.credly.com/badges/1d4a8950-b15b-4729-8ad6-dbcf50af5d67/linked_in_profile",
            description: "Training Badge - Demonstrated basic solution building knowledge using AWS services and fundamental understanding of AWS Cloud concepts with hands-on experience."
        },
        {
            title: "Star Of The Month",
            issuer: "Mantra Labs",
            date: "August 30, 2023",
            link: "https://www.mantralabsglobal.com/certificates/117/",
            description: "Recognized for outstanding performance and contributions."
        },
        {
            title: "Star Of The Month",
            issuer: "Mantra Labs",
            date: "December 30, 2022",
            link: "https://www.mantralabsglobal.com/certificates/58/",
            description: "Recognized for outstanding performance and contributions."
        }
    ]
};
