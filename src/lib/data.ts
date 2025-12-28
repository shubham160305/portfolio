import {
  Code,
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Twitter,
  Globe,
  Monitor,
  Server,
  Database,
  Cloud,
} from "lucide-react";

export const personalInfo = {
  name: "Shubham Bhagat",
  title: "Full-Stack Developer & AI Enthusiast",
  bio: "A passionate and creative developer with a knack for building beautiful, functional, and scalable web applications. I love exploring new technologies and using them to solve real-world problems. My journey in tech is driven by a desire to craft experiences that are not only user-friendly but also impactful.",
  shubhamProfile: `Shubham Bhagat is a Full-Stack Developer with 5 years of experience specializing in the MERN stack (MongoDB, Express.js, React, Node.js), Next.js, and TypeScript. He has a proven track record of delivering high-quality web applications, from e-commerce platforms to data visualization dashboards. He is passionate about clean code, user-centric design, and leveraging AI to create innovative solutions. Shubham is a strong communicator and collaborator, always eager to learn and contribute to a team's success. He holds a Bachelor of Science in Computer Science. In his free time, he contributes to open-source projects and enjoys hiking.`,
  contact: {
    email: "shubham.bhagat@example.com",
    phone: "+1 234 567 890",
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: Twitter,
    },
  ],
};

export const experiences = [
  {
    role: "Senior Full-Stack Developer",
    company: "Innovate Inc.",
    period: "2021 - Present",
    description: "Lead developer for the flagship product, a SaaS platform for project management. Architected and implemented new features using React, Node.js, and TypeScript. Mentored junior developers and improved code quality through code reviews and best practices.",
  },
  {
    role: "Software Engineer",
    company: "Tech Solutions Co.",
    period: "2019 - 2021",
    description: "Developed and maintained client websites and web applications using the MERN stack. Collaborated with designers and product managers to deliver high-quality products on time. Optimized application performance, resulting in a 30% reduction in load times.",
  },
  {
    role: "Bachelor of Science in Computer Science",
    company: "University of Technology",
    period: "2015 - 2019",
    description: "Graduated with honors. Specialized in software engineering and artificial intelligence. Completed a final year project on building a recommendation engine for an e-commerce platform.",
  },
];

export const skills = {
  chartData: [
    { name: "Frontend", level: 90 },
    { name: "Backend", level: 85 },
    { name: "Databases", level: 80 },
    { name: "DevOps", level: 70 },
    { name: "AI/ML", level: 65 },
  ],
  tech: [
    {
      category: "Frontend",
      icon: Monitor,
      list: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      category: "Backend",
      icon: Server,
      list: ["Node.js", "Express.js", "Python", "GraphQL"],
    },
    {
      category: "Databases",
      icon: Database,
      list: ["MongoDB", "PostgreSQL", "Firebase"],
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      list: ["Docker", "Google Cloud", "Vercel", "Git"],
    },
  ],
};

export const projects = [
  {
    id: "project-1",
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with a modern, responsive design. Includes product management, a shopping cart, and a secure checkout process.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and user authentication.",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-3",
    title: "Data Visualization Dashboard",
    description: "An interactive dashboard for visualizing complex datasets. Built with D3.js and React, it allows users to explore data through various charts and graphs.",
    tags: ["React", "D3.js", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-4",
    title: "AI-Powered Chatbot",
    description: "A customer service chatbot that uses natural language processing to understand and respond to user queries. Integrated with a live chat fallback.",
    tags: ["Python", "Genkit", "React"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
