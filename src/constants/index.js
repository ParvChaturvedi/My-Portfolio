import { logos } from '../assets/logos/logos'
import { projects } from '../assets/projects/projects';
import { socials } from '../assets/socials/socials';

export const myProjects = [
  {
    id: 1,
    title: "Just-In-Time Software Bug Prediction",
    description:
      "A machine learning system that predicts whether a GitHub pull request is likely to introduce a defect \u2014 at the exact moment someone is deciding whether to merge it. Trained on the ApacheJIT benchmark of 106,674 commits across 14 Apache projects, it reads a pull request's real diff and returns a risk level, a bug probability, and an explainable merge recommendation.",
    subDescription: [
      "Trained and benchmarked Logistic Regression, Random Forest, and XGBoost on the ApacheJIT dataset, deploying XGBoost at 72.16% accuracy and 0.803 ROC-AUC.",
      "Engineered a leakage-safe, time-aware chronological train/test split with SMOTE oversampling to correct a 26% class imbalance across 12 change-level software metrics.",
      "Computed live features (lines added/deleted, files, directories, subsystems, change entropy) directly from each pull request's diff via the GitHub REST API.",
      "Integrated SHAP for global and per-prediction explainability, surfacing the exact factors driving each risk score.",
      "Deployed a Flask + XGBoost inference API on Render with a React and Vite frontend on Vercel, returning a real-time Safe-to-Merge or Review-Recommended verdict.",
      "Completed as a 2-credit Summer Research Project under Dr. Kumar Rajnish, Dept. of CSE, BIT Mesra.",
    ],
    href: "https://jit-bug-prediction.vercel.app",
    logo: "",
    image: projects.jit,
    tags: [
      {
        id: 1,
        name: "Python",
        path: logos.python,
      },
      {
        id: 2,
        name: "Scikit-Learn",
        path: logos.scikitlearn,
      },
      {
        id: 3,
        name: "Flask",
        path: logos.flask,
      },
      {
        id: 4,
        name: "React",
        path: logos.react,
      },
      {
        id: 5,
        name: "REST API",
        path: logos.restAPI,
      },
      {
        id: 6,
        name: "Render",
        path: logos.render,
      },
    ],
  },
  {
    id: 2,
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