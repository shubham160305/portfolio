import {
  Award,
  BrainCircuit,
  Cloud,
  Database,
  Github,
  Linkedin,
  Monitor,
  Server,
  Twitter
} from "lucide-react";

export const personalInfo = {
  name: "Shubham Bhagat",
  title: "Computer Science (AIML) Student with a Passion for Machine Learning",
  bio: "A recent Computer Science student with a strong passion for machine learning and artificial intelligence. I'm fascinated by the power of data to create intelligent systems and solve complex problems. I am actively seeking opportunities to apply my academic knowledge and project experience to real-world challenges in the ML space.",
  shubhamProfile: `Shubham Bhagat is a recent Computer Science student whose primary interest lies in Machine Learning and Artificial Intelligence. With a solid academic foundation in data structures, algorithms, and software engineering, he is now focused on building intelligent systems. His project work includes developing a recommendation engine and an NLP-powered chatbot, demonstrating his practical skills in applying ML concepts. Shubham is eager to contribute to a team where he can grow his expertise in ML and help build innovative, data-driven products.`,
  contact: {
    email: "shubhambhagat16032005@gmail.com",
    phone: "+91 9359662685",
  },
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/shubham160305",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/shubham-bhagat-426b1231b",
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
    role: "Bachelor of Science in Computer Science (AIML)",
    company: "Shri Ramdeobaba College of Engineering and Management ",
    period: "2023 - 2027",
    description: "Graduated with a focus on software engineering and a specialization in artificial intelligence. Excelled in courses on data structures, algorithms, machine learning, and natural language processing. My final year project involved building a recommendation engine from the ground up.",
  },
];

export const certificates = [
    {
        title: "Data Analytics Job Simulation",
        issuer: "Deloitte",
        year: "2025",
        icon: Award,
    },
    {
        title: "Introduction to Generative AI",
        issuer: "Google Cloud",
        year: "2025",
        icon: Award,
    },
    {
        title: "Gen AI Study Jams",
        issuer: "Google Developer Program",
        year: "2024",
        icon: Award,
    },
    {
        title: "AIML Virtual Internship",
        issuer: "AICTE",
        year: "2024",
        icon: Award,
    }
]

export const skills = {
  tech: [
    {
      category: "AI & Machine Learning",
      icon: BrainCircuit,
      list: ["Python", "Machine Learning", "Deep Learning", "Computer Vision"],
    },
    {
      category: "Frontend",
      icon: Monitor,
      list: ["React", "Next.js", "JavaScript"],
    },
    {
      category: "Backend",
      icon: Server,
      list: ["Django", "Fastapi"],
    },
    {
      category: "Databases",
      icon: Database,
      list: ["MongoDB", "PostgreSQL"],
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
