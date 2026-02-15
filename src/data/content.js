// (Optional) project screenshots (put them in: src/assets/projects/)
import popcornImg from "../assets/projects/popcorntimelogo.png";
import spacekittenImg from "../assets/projects/spacekitten.png";
import landImg from "../assets/projects/sellusyourland.png";

export const NAV = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const BRAND = {
  name: "Omer Tech Dude",
  tag: "Front-End Engineer • Web Developer",
};

export const LINKS = {
  linkedin:
    "https://www.linkedin.com/in/omer-taib-a8aa68358?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
  github: "https://github.com/omertechdude04",
  resume: "#",
  email: "mailto:omertechdude@gmail.com",
};

export const ABOUT_BULLETS = [
  "Front-End Engineer focused on clean UI, strong typography, and smooth motion.",
  "I build fast React websites and web apps with Tailwind + modern component architecture.",
  "I care about performance, accessibility, and layouts that feel premium and easy to use.",
  "I like turning messy ideas into clean components and shipping real projects.",
  "Always learning, always improving — consistency is my superpower.",
];

export const EDUCATION = [
  {
    title: "Self-Taught Front-End / Web Development",
    place: "Online (projects + courses)",
    date: "2022 — Present",
    points: [
      "React, Tailwind, UI systems, component design.",
      "Portfolio projects, deployment, real-world practice.",
    ],
  },
  {
    title: "High School",
    place: "Israel / USA",
    date: "—",
    points: ["Background education and continuous learning mindset."],
  },
];

export const WORK = [
  {
    role: "Front-End / Web Developer",
    company: "Freelance",
    date: "2023 — Present",
    points: [
      "Built responsive pages and UI components with React.",
      "Focused on clean visuals, performance, and smooth interactions.",
    ],
  },
];

export const SKILLS = {
  programming: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Redux",
    "Vite",
    "Swift"
  ],
  tools: ["Git", "GitHub", "Netlify"]
};

export const PROJECTS = [
  {
    title: "Popcorn Time",
    desc:
      "A React web app that helps people instantly find where to stream movies and TV shows. Built with a clean, fast UI and a simple search-first experience that feels like a real product.",
    stack: ["React", "REST API", "UI/UX"],
    live: "https://popcorntimewebapp.netlify.app",
    code: "#",
    image: popcornImg,
    highlights: [
      "Search-first UI with clear results + detail flow",
      "Reusable components and consistent design system",
      "Responsive layout with loading/empty states for polish",
    ],
  },
  {
    title: "Space Kitten Studio",
    desc:
      "A modern marketing website for a costume maker — built to showcase work, explain services clearly, and drive inquiries with a mobile-first layout and strong visual hierarchy.",
    stack: ["HTML5", "CSS", "JavaScript"],
    live: "https://www.spacekittenstudios.com",
    code: "#",
    image: spacekittenImg,
    highlights: [
      "Mobile-first layout with clean section structure",
      "Fast load performance and readable typography",
      "Simple, maintainable code for easy updates",
    ],
  },
  {
    title: "Sell Us Your Land",
    desc:
      "A conversion-focused website for a land buying company — designed to build trust fast, explain the process clearly, and capture leads with a frictionless contact flow.",
    stack: ["HTML5", "CSS", "JavaScript"],
    live: "https://www.sellusyourlandnow.com",
    code: "#",
    image: landImg, // ✅ FIXED (was "landImg")
    highlights: [
      "Clear messaging + trust sections (steps, FAQs, testimonials-ready)",
      "Lead-focused layout with strong CTA placement",
      "Responsive design built to convert on mobile",
    ],
  },
];
