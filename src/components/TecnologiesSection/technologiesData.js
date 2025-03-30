// technologiesData.js
import { DiJavascript, DiScrum } from "react-icons/di";
import {
  BiLogoTypescript,
  BiLogoPostgresql,
  BiLogoFlask,
} from "react-icons/bi";
import {
  IoLogoCss3,
  IoLogoHtml5,
  IoLogoNodejs,
  IoLogoPython,
} from "react-icons/io5";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiRedux,
  SiReactquery,
  SiSequelize,
  SiExpress,
  SiJest,
  SiCypress,
} from "react-icons/si";
import { RiReactjsFill } from "react-icons/ri";
import { AiOutlineLinux } from "react-icons/ai";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { GiAtomicSlashes } from "react-icons/gi";

export const technologies = [
  {
    category: "FRONTEND",
    items: [
      {
        name: "TypeScript",
        logo: BiLogoTypescript,
        description: `Descubrí verdaderamente TypeScript en mi primer trabajo como desarrolladora web. 
Aunque lo había visto antes, no me había detenido a explorarlo en profundidad. 
Hoy en día, es una de mis tecnologías favoritas, y su capacidad para mejorar la escalabilidad y mantenibilidad del código es inigualable.`,
      },
      { name: "JavaScript", logo: DiJavascript, className: "js" },
      { name: "ReactJS", logo: RiReactjsFill },
      { name: "React Query", logo: SiReactquery },
      { name: "REACT NATIVE", logo: TbBrandReactNative },
      { name: "HTML5", logo: IoLogoHtml5 },
      { name: "CSS", logo: IoLogoCss3 },
      { name: "React Redux", logo: SiRedux },
    ],
  },
  {
    category: "BACKEND",
    items: [
      { name: "Sequelize", logo: SiSequelize },
      { name: "NodeJS", logo: IoLogoNodejs },
      { name: "PostgreSQL", logo: BiLogoPostgresql },
      { name: "Express", logo: SiExpress },
      { name: "Python", logo: IoLogoPython },
    ],
  },
  {
    category: "OTROS",
    items: [
      { name: "Linux", logo: AiOutlineLinux },
      { name: "Jest", logo: SiJest },
      { name: "Cypress", logo: SiCypress },
      { name: "SCRUM", logo: DiScrum },
      { name: "GIT", logo: FaGitAlt },
      { name: "GitHub", logo: FaGithub },
      { name: "Atomic Design", logo: GiAtomicSlashes },
      { name: "Flask", logo: BiLogoFlask },
    ],
  },
];
