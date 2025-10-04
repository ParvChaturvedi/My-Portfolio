import { logos } from '../assets/logos/logos'
import { projects } from '../assets/projects/projects';
import { socials } from '../assets/socials/socials';

export const myProjects = [
  {
    id: 1,
    title: "Imagica - AI Image Generator",
    description:
      "Imagica is a full-stack AI-powered platform that transforms text prompts into high-quality, stunning images in seconds. Built with React, Node.js, and MongoDB, it combines advanced deep learning models with a smooth, responsive frontend to deliver real-time visual creativity for designers, developers, and content creators.",
    subDescription: [
        "Developed a full-stack AI platform using React, Node.js, and MongoDB for real-time text-to-image generation.",
        "Implemented secure authentication with JWT and bcrypt, along with password recovery via email using SendGrid.",
        "Integrated a credit-based system with Razorpay for seamless premium image purchases and transaction tracking.",
        "Designed a responsive, interactive frontend with TailwindCSS and Framer Motion, providing smooth user experience.",
        "Enabled instant AI-driven image generation with backend processing and real-time feedback using React Hot Toast.",
    ],
    href: "https://imagica-frontend-4xj9.onrender.com/",
    logo: "",
    image: projects.imagica,
    tags: [
      {
        id: 1,
        name: "HTML",
        path: logos.html,
      },
      {
        id: 2,
        name: "React",
        path: logos.react,
      },
      {
        id: 3,
        name: "Node.js",
        path: logos.nodejs,
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: logos.tailwind,
      },
      {
        id: 5,
        name: "MongoDB",
        path: logos.mongodb,
      },
      {
        id: 6,
        name: "Javascript",
        path: logos.javascript,
      },
    ],
  },
  {
    id: 2,
    title: "FinGenius - AI Recommender for Smarter Investing",
    description:
      "FinGenius is a modern investing platform that empowers users with AI-driven recommendations, real-time portfolio insights, and seamless tracking. Built with React and Vite, the frontend delivers a fast, intuitive, and responsive interface that makes investing simple and engaging for modern investors.",
    subDescription: [
        "Developed a modern, responsive frontend for FinGenius using React and Vite, optimized for speed and scalability.",
        "Designed an intuitive UI/UX with TailwindCSS and Framer Motion, ensuring smooth navigation and animations.",
        "Implemented interactive dashboards for real-time portfolio tracking and investment insights.",
        "Integrated API endpoints to display AI-powered recommendations and live market data seamlessly.",
        "Created reusable and modular components to maintain consistency and support future scalability.",
        "Focused on mobile-first design principles to deliver an engaging experience across all devices."

    ],
    href: "https://fingeniusfront.netlify.app/",
    logo: "",
    image: projects.fingenius,
    tags: [
      {
        id: 1,
        name: "React",
        path: logos.react,
      },
      {
        id: 2,
        name: "Vite",
        path: logos.vite,
      },
      {
        id: 3,
        name: "HTML",
        path: logos.html,
      },
      {
        id: 4,
        name: "Figma",
        path: logos.figma,
      },
      {
        id: 5,
        name: "TailwindCSS",
        path: logos.tailwind,
      }
    ],
  },
  {
    id: 3,
    title: "My Portfolio - Full-Stack Developer Showcase",
    description:
      "A modern, responsive personal portfolio website showcasing projects, skills, and achievements. Built with React and TailwindCSS, it provides an interactive interface to explore projects, view detailed descriptions, and connect via social links, emphasizing clean design and smooth user experience.",
    subDescription: [
        "Designed and developed a responsive personal portfolio using React and TailwindCSS.",
        "Showcased multiple projects with detailed descriptions, technologies used, and live demo links.",
        "Implemented interactive UI components with smooth transitions and animations using Framer Motion.",
        "Integrated a structured project section with modals and dynamic content for easy navigation.",
        "Optimized for mobile-first design to ensure seamless experience across devices.",
        "Focused on clean code structure and reusable components for maintainability and scalability."

    ],
    href: "",
    logo: "",
    image: projects.portfolio,
    tags: [
      {
        id: 1,
        name: "React",
        path: logos.react,
      },
      {
        id: 2,
        name: "Vite",
        path: logos.vite,
      },
      {
        id: 3,
        name: "HTML",
        path: logos.html,
      },
      {
        id: 4,
        name: "TailwindCSS",
        path: logos.tailwind,
      },
      {
        id: 5,
        name: "ThreeJS",
        path: logos.threejs,
      }
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/ParvChaturvedi",
    icon: socials.github,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/parvchaturvedi/",
    icon: socials.linkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/parv__chaturvedi/",
    icon: socials.instagram,
  },
];

export const experiences = [
  {
    title: "Web Developer Intern",
    job: "Handeled Alumni Portal",
    date: "2024 - 2025",
    contents: [
        "Contributed to the development and content management of BITMAA, the official alumni portal of BIT Mesra.",
        "Added and maintained alumni profiles, event cards, and dynamic content on the website.",
        "Collaborated with the technical and alumni relations team to ensure timely updates and smooth portal functionality."

    ],
  },
  {
    title: "Freelance Developer",
    job: "Self-Employed",
    date: "Present",
    contents: [
      "Created a personal portfolio using Three.js, React, Vite, and WebAPI to showcase technical expertise.",
      "Continuously enhancing technical skills and expanding expertise in modern web development and back-end technologies.",
    ],
  },
];
export const reviews = [
  {
    name: "C++ Junkie",
    body: "Leveraging C++ for efficient algorithms and system-level programming.",
    img: logos.cpp,
  },
  {
    name: "MERN Wizard",
    body: "Crafting full-stack solutions with modern web technologies.",
    img: logos.mern,
  },
  {
    name: "Hackfest 2025 @ IIT Dhanbad",
    body: "Developed impactful solutions under intense hackathon pressure.",
    img: logos.trophy,
  },
  {
    name: "Music for Focus",
    body: "Staying productive with Lo-Fi, EDM, and coding playlists.",
    img: logos.music,
  },
  {
    name: "Cybersecurity Intern",
    body: "Explored tools & techniques to understand and counter cyber threats.",
    img: logos.cybersecurity,
  },
  {
    name: "Football Enthusiast",
    body: "Passionate about teamwork, strategy, and the beautiful game.",
    img: logos.football,
  },
  {
    name: "Global Perspective",
    body: "Open to diverse ideas, cultures, and innovation opportunities.",
    img: logos.globe,
  },
  {
    name: "GDG on Campus - Solution Challenge",
    body: "Building impactful solutions with Google technologies.",
    img: logos.gdg,
  },
];