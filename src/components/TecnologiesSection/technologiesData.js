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
        descriptionId: "tech.typescript.description",
      },
      {
        name: "JavaScript",
        logo: DiJavascript,
        descriptionId: "tech.javascript.description",
      },
      {
        name: "ReactJS",
        logo: RiReactjsFill,
        descriptionId: "tech.ReactJS.description",
      },
      {
        name: "React Query",
        logo: SiReactquery,
        descriptionId: "tech.reactQuery.description",
      },
      {
        name: "REACT NATIVE",
        logo: TbBrandReactNative,
        descriptionId: "tech.reactNative.description",
      },
      {
        name: "HTML5",
        logo: IoLogoHtml5,
        descriptionId: "tech.html5.description",
      },
      {
        name: "CSS",
        logo: IoLogoCss3,
        descriptionId: "tech.css.description",
      },
      {
        name: "React Redux",
        logo: SiRedux,
        descriptionId: "tech.reactRedux.description",
      },
    ],
  },
  {
    category: "BACKEND",
    items: [
      {
        name: "Sequelize",
        logo: SiSequelize,
        descriptionId: "tech.sequelize.description",
      },
      {
        name: "NodeJS",
        logo: IoLogoNodejs,
        descriptionId: "tech.nodeJS.description",
      },
      {
        name: "PostgreSQL",
        logo: BiLogoPostgresql,
        descriptionId: "tech.PostgreSQL.description",
      },
      {
        name: "Express",
        logo: SiExpress,
        descriptionId: "tech.express.description",
      },
      {
        name: "Python",
        logo: IoLogoPython,
        descriptionId: "tech.python.description",
      },
    ],
  },
  {
    category: "OTROS",
    items: [
      {
        name: "Linux",
        logo: AiOutlineLinux,
        descriptionId: "tech.linux.description",
      },
      {
        name: "Jest",
        logo: SiJest,
        descriptionId: "tech.jest.description",
      },
      {
        name: "Cypress",
        logo: SiCypress,
        descriptionId: "tech.cypress.description",
      },
      {
        name: "SCRUM",
        logo: DiScrum,
        descriptionId: "tech.scrum.description",
      },
      {
        name: "GIT",
        logo: FaGitAlt,
        descriptionId: "tech.git.description",
      },
      {
        name: "GitHub",
        logo: FaGithub,
        descriptionId: "tech.github.description",
      },
      {
        name: "Atomic Design",
        logo: GiAtomicSlashes,
        descriptionId: "tech.atomicDesign.description",
      },
      {
        name: "Flask",
        logo: BiLogoFlask,
        descriptionId: "tech.flask.description",
      },
    ],
  },
];
