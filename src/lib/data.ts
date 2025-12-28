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
  title: "Aspiring Full-Stack Developer & AI Enthusiast",
  bio: "A passionate and creative recent graduate with a knack for building beautiful, functional, and scalable web applications. I love exploring new technologies and using them to solve real-world problems. My journey in tech is driven by a desire to learn, grow, and craft experiences that are impactful and user-friendly.",
  shubhamProfile: `Shubham Bhagat is a recent Computer Science graduate with a strong foundation in full-stack development, specializing in the MERN stack (MongoDB, Express.js, React, Node.js), Next.js, and TypeScript. He is passionate about clean code, user-centric design, and is actively exploring how to leverage AI for innovative solutions. Through academic and personal projects, he has gained hands-on experience in building web applications. Shubham is a curious and collaborative individual, eager to contribute his skills to a professional team and grow as a developer.`,
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
    role: "Bachelor of Science in Computer Science",
    company: "University of Technology",
    period: "2020 - 2024",
    description: "Graduated with a focus on software engineering and artificial intelligence. Excelled in courses on data structures, algorithms, and web development. Completed a final year project on building a recommendation engine for an e-commerce platform.",
  },
];

export const skills = {
  chartData: [
    { name: "Frontend", level: 85 },
    { name: "Backend", level: 75 },
    { name: "Databases", level: 70 },
    { name: "DevOps", level: 60 },
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
    title: "E-commerce Platform (Academic Project)",
    description: "A full-featured e-commerce platform with a modern, responsive design. Includes product management, a shopping cart, and a secure checkout process.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "Task Management App (Personal Project)",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and user authentication.",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-3",
    title: "Data Visualization Dashboard (Personal Project)",
    description: "An interactive dashboard for visualizing complex datasets. Built with D3.js and React, it allows users to explore data through various charts and graphs.",
    tags: ["React", "D3.js", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-4",
    title: "AI-Powered Chatbot (Academic Project)",
    description: "A customer service chatbot that uses natural language processing to understand and respond to user queries. Integrated with a live chat fallback.",
    tags: ["Python", "Genkit", "React"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
