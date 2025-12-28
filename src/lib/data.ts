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
  BrainCircuit,
  Award,
} from "lucide-react";

export const personalInfo = {
  name: "Shubham Bhagat",
  title: "Computer Science Graduate with a Passion for Machine Learning",
  bio: "A recent Computer Science graduate with a strong passion for machine learning and artificial intelligence. I'm fascinated by the power of data to create intelligent systems and solve complex problems. I am actively seeking opportunities to apply my academic knowledge and project experience to real-world challenges in the ML space.",
  shubhamProfile: `Shubham Bhagat is a recent Computer Science graduate whose primary interest lies in Machine Learning and Artificial Intelligence. With a solid academic foundation in data structures, algorithms, and software engineering, he is now focused on building intelligent systems. His project work includes developing a recommendation engine and an NLP-powered chatbot, demonstrating his practical skills in applying ML concepts. Shubham is eager to contribute to a team where he can grow his expertise in ML and help build innovative, data-driven products.`,
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
    description: "Graduated with a focus on software engineering and a specialization in artificial intelligence. Excelled in courses on data structures, algorithms, machine learning, and natural language processing. My final year project involved building a recommendation engine from the ground up.",
  },
];

export const certificates = [
    {
        title: "Machine Learning by Stanford University",
        issuer: "Coursera",
        year: "2023",
        icon: Award,
    },
    {
        title: "Deep Learning Specialization",
        issuer: "Coursera",
        year: "2023",
        icon: Award,
    },
    {
        title: "Google Advanced Data Analytics",
        issuer: "Coursera",
        year: "2024",
        icon: Award,
    }
]

export const skills = {
  tech: [
    {
      category: "AI & Machine Learning",
      icon: BrainCircuit,
      list: ["Python", "Genkit", "Scikit-learn", "Pandas"],
    },
    {
      category: "Frontend",
      icon: Monitor,
      list: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Backend",
      icon: Server,
      list: ["Node.js", "Express.js", "GraphQL"],
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
    title: "E-commerce Recommendation Engine",
    description: "Developed and integrated a collaborative filtering recommendation engine for an e-commerce platform, leading to a potential increase in user engagement.",
    tags: ["Python", "Scikit-learn", "React", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-4",
    title: "AI-Powered Customer Service Chatbot",
    description: "A customer service chatbot that uses natural language processing (NLP) to understand and respond to user queries. Built using modern GenAI tooling.",
    tags: ["Genkit", "React", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-3",
    title: "Interactive Data Visualization",
    description: "An interactive dashboard for visualizing complex datasets. Allows users to explore data through various charts and graphs, demonstrating data handling and presentation skills.",
    tags: ["React", "D3.js", "Express"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "project-2",
    title: "Real-time Task Management App",
    description: "A collaborative task management application with real-time updates and user authentication, showcasing full-stack development capabilities.",
    tags: ["Next.js", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
