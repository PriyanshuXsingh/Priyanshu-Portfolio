import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  github,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  { title: "Full Stack Developer", icon: web },
  { title: "Web3 / Blockchain Developer", icon: backend },
  { title: "Interactive UI/3D Designer", icon: mobile },
  { title: "DSA Enthusiast", icon: creator },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer Intern",
    company_name: "Rablo.in",
    icon: web, // replace with a proper logo if available
    iconBg: "#383E56",
    date: "Aug 2022 – Present",
    points: [
      "Built and maintained full-stack web apps using React, Node.js, and PostgreSQL.",
      "Integrated third-party APIs and built reusable UI components with Tailwind CSS.",
      "Collaborated with the team on scalable features and backend services.",
      "Managed Git version control and participated in agile development cycles.",
    ],
  },
  {
    title: "Batch Leader & Mentor",
    company_name: "Devsnest",
    icon: backend, // replace with devsnest logo if you have one
    iconBg: "#E6DEDD",
    date: "Jun 2022 – Present",
    points: [
      "Mentored junior developers in building full-stack projects using the MERN stack.",
      "Organized coding sessions, code reviews, and project planning.",
      "Helped build a collaborative community of developers through open source.",
    ],
  },
  {
    title: "Open Source Contributor",
    company_name: "GitHub Projects",
    icon: github, // use your imported GitHub logo
    iconBg: "#000000",
    date: "2023 – Present",
    points: [
      "Contributed to multiple open-source projects with issue tracking and PRs.",
      "Built features and improved documentation for beginner-friendly repositories.",
      "Actively participated in developer discussions and bug fixes on GitHub.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Priyanshu quickly grasped complex Web3 concepts and delivered an impressive DApp prototype.",
    name: "Project Mentor",
    designation: "Tech Lead",
    company: "Blockchain Club, Chandigarh",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    testimonial:
      "His portfolio is sleek, interactive and well-structured — a reflection of his developer mindset.",
    name: "Mankirat Singh",
    designation: "CSE Student",
    company: "Panjab University",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    testimonial:
      "Working with Priyanshu was a great experience. He’s always proactive, communicates well, and delivers clean, efficient code on time.",
    name: "Aarav Mehta",
    designation: "Team Lead",
    company: "PClub UIET",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
];

const projects = [
  {
    name: "Promptly.ai",
    description:
      "AI SaaS platform built with the PERN stack that helps users create blogs, edit images, remove backgrounds, review resumes, and more — all in one place. Includes Clerk-based auth and subscription support.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "nodejs", color: "green-text-gradient" },
      { name: "postgresql", color: "pink-text-gradient" },
    ],
    video:
      "https://res.cloudinary.com/da9v08yg8/video/upload/v1753371388/Screen_Recording_2025-07-16_103614_hrlu0s.mp4",
    source_code_link: "https://github.com/PriyanshuXsingh/Promptly.ai",
    live_link: "https://promptly-ai-pink.vercel.app/",
  },
  {
    name: "AI Interview Mocker",
    description:
      "A web app that simulates real-time job interviews using AI and evaluates your answers via webcam & mic with instant feedback powered by Google Gemini.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "postgresql", color: "green-text-gradient" },
      { name: "gemini-ai", color: "pink-text-gradient" },
    ],
    video:
      "https://res.cloudinary.com/da9v08yg8/video/upload/v1753370154/Screen_Recording_2025-06-03_235918_ce1bwl.mp4",
    source_code_link: "https://github.com/PriyanshuXsingh/AI-Interview-Mocker",
    live_link: "https://ai-interview-mocker-mkc1.vercel.app/",
  },
  {
    name: "Wandurlust",
    description:
      "A full-stack travel booking platform inspired by Airbnb, designed using MVC architecture. Connects hosts and travelers with booking & listing features.",
    tags: [
      { name: "nodejs", color: "blue-text-gradient" },
      { name: "ejs", color: "green-text-gradient" },
      { name: "mongodb", color: "pink-text-gradient" },
    ],
    video:
      "https://res.cloudinary.com/da9v08yg8/video/upload/v1753371309/Screen_Recording_2025-01-16_102203_ejyzxp.mp4",
    source_code_link: "https://github.com/PriyanshuXsingh/MajorProject",
    live_link: "https://majorproject-2-p2wf.onrender.com/listings",
  },
  {
    name: "3D Portfolio",
    description:
      "A stunning personal portfolio website using Three.js, React Three Fiber, and Framer Motion. Features 3D animations, smooth transitions, and project showcases.",
    tags: [
      { name: "threejs", color: "blue-text-gradient" },
      { name: "react", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
    ],
    video:
      "https://res.cloudinary.com/da9v08yg8/video/upload/v1753374432/Screen_Recording_2025-07-24_215642_a9ajhx.mp4",
    source_code_link: "https://github.com/PriyanshuXsingh/3d-portfolio",
    live_link: "https://3d-portfolio-priyanshu.vercel.app",
  },
];

export { services, technologies, experiences, testimonials, projects };
