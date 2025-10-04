import { OrbitingCircles } from "./OrbitingCircles";
import { logos } from "../assets/logos/logos";

export function Frameworks() {
  const skills = [
    "cpp",
    "git",
    "github",
    "html",
    "javascript",
    "react",
    "vscode",
    "tailwindcss",
    "vitejs",
    "googleCloud",
    "express",
    "mongodb",
    "vite",
    "threejs",
    "jwt",
    "nodejs",
  ];
  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={logos[skill]} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={logos[skill]} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src }) => (
  <img src={src} className="duration-200 rounded-sm hover:scale-110" />
);