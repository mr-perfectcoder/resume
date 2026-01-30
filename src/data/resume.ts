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
    summary: "Senior Software Engineer with 5 years of experience building secure, scalable, and high-performance web and backend systems using Next.js, React, Node.js, and AWS. Strong expertise in end-to-end encryption, cloud-native architectures, asynchronous processing, and CRM migration pipelines. Hands-on experience with SBOM integration, dependency tracking, web security hardening, and Retrieval-Augmented Generation (RAG) systems using modern embedding models and LLMs. Proven ability to deliver production-grade, security-compliant solutions and mentor engineers.",
    experience: [
        {
            company: "Mindfire Solutions",
            role: "Senior Software Engineer",
            period: "Dec 2023 – Present",
            description: [
                "Led development of enterprise-grade web applications using Next.js and React, focusing on scalability, modular architecture, and performance.",
                "Designed and implemented a secure file-sharing platform with end-to-end encryption (E2EE) ensuring confidentiality of user data.",
                "Built file-sharing workflows supporting private, public, and shared access modes.",
                "Implemented shared-key–based access control to securely share encrypted files with trusted users and loved ones.",
                "Ensured secure client-side key handling, encryption flows, and best practices.",
                "Crafted responsive and accessible UIs using Material UI Joy and Tailwind CSS.",
                "Integrated RESTful APIs using React Query for efficient caching, background refetching, and state synchronization.",
                "Implemented role-based access control (RBAC) aligned with business requirements.",
                "Integrated secure authentication using AWS Cognito, MS Auth, and NextAuth.",
                "Developed real-time notifications and live updates using SignalR.",
                "Built advanced frontend features including PDF generation with barcodes and dynamic formula-based bill calculators.",
                "Enabled dynamic theming and module-specific UI customization.",
                "Upgraded and maintained React Native applications (v0.70 → v0.75), integrated Firebase Cloud Messaging (FCM), and deployed stable builds to the App Store and Play Store.",
                "Mentored junior developers, conducted code reviews, and supported onboarding.",
                "Designed and developed a CRM-to-CRM data migration system using Node.js and Express.js.",
                "Implemented Amazon SQS-based asynchronous pipelines for high-volume, reliable data migration.",
                "Built JSON-driven migration workflows for flexible configuration and reuse.",
                "Used DynamoDB to track migration state, checkpoints, retries, and job recovery.",
                "Implemented restartable batch processing, enabling safe resumption of interrupted migrations.",
                "Deployed backend services on AWS ECS, ensuring scalability, fault tolerance, and production reliability.",
                "Integrated SBOM (Software Bill of Materials) generation to improve visibility into third-party dependencies.",
                "Implemented dependency tracking and vulnerability monitoring to identify and mitigate security risks early.",
                "Integrated Dependency-Track for continuous dependency analysis and security reporting.",
                "Added and enforced web security headers including CSP, HSTS, X-Frame-Options, X-Content-Type-Options, and Referrer-Policy.",
                "Automated security checks, dependency audits, and vulnerability scans as part of CI/CD pipelines.",
                "Built a Retrieval-Augmented Generation (RAG) system that reads data from files and performs semantic search.",
                "Generated embeddings using Hugging Face all-MiniLM-L6-v2.",
                "Integrated the RAG pipeline with Gemini LLM to generate contextual, file-aware responses.",
                "Applied vector-based retrieval to improve response relevance and accuracy."
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
            title: "Frontend",
            skills: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript"]
        },
        {
            title: "UI & Styling",
            skills: ["Tailwind CSS", "Material UI", "React Native Paper"]
        },
        {
            title: "Backend",
            skills: ["Node.js", "Express.js", "Nest.js"]
        },
        {
            title: "Databases",
            skills: ["MongoDB", "PostgreSQL", "Redis", "DynamoDB"]
        },
        {
            title: "Cloud & DevOps",
            skills: ["AWS ECS", "SQS", "S3", "DynamoDB", "Azure Blob Storage"]
        },
        {
            title: "Authentication & Security",
            skills: ["AWS Cognito", "MS Auth", "NextAuth", "RBAC", "End-to-End Encryption"]
        },
        {
            title: "Security & Compliance",
            skills: ["SBOM", "Dependency-Track", "Vulnerability Scanning", "Web Security Headers", "CSP"]
        },
        {
            title: "AI / ML",
            skills: ["RAG", "Hugging Face (all-MiniLM-L6-v2)", "Gemini LLM", "Vector Search"]
        },
        {
            title: "Real-Time & Notifications",
            skills: ["SignalR", "Firebase Cloud Messaging (FCM)"]
        },
        {
            title: "Tools & Management",
            skills: ["GitHub", "GitLab", "Jira", "ClickUp", "Swagger"]
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
