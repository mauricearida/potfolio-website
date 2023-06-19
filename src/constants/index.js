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
  massyve,
  docker,
  starbucks,
  aether,
  creoshift,
  carrent,
  jobit,
  tripguide,
  threejs,
  imperium,
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
  {
    title: "Web application Developer",
    icon: web,
  },
  {
    title: "Mobile application Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Flow Engineer",
    icon: creator,
  },
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
    title: "Full Stack Developer",
    company_name: "Massyve | Lebanon",
    icon: massyve,
    iconBg: "#383E56",
    date: "Dec 2022 - Apr 2023",
    points: [
      "Maintained, amended, scaled already made, in Reactjs, React -Native, Nextjs, Nodejs",
      "Integrated mobile apps with google-play/apple store subscriptions, firestore notifications....",
      "Worked closely with designers and product managers to deliver high-quality software solutions",
      "Projects: Maguy Farah Official app...",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Aether | U.S.A",
    icon: aether,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Feb 2022",
    points: [
      "Integrated react apps with Web3 smart contracts written in solidity mainly.",
      "Developed ERC20, ERC721 (NFT) tokens using hardhat.",
      "Developed a MERN stack app that hashes and randomizes NFT images.",
      "Projects: Imperial Panda NFT, sun in motion NFT...",
    ],
  },
  {
    title: "Front end Developer",
    company_name: "Creoshift | Lebanon",
    icon: creoshift,
    iconBg: "#383E56",
    date: "November 2021 - Jun 2022",
    points: [
      "Brought to life designs from Figma/Adobe xd using Reactjs and React-native.",
      "Maintained, amended, scaled already made projects fully dynamic from API using Redux/React context / React-query.",
      "Implemented complex UI components and interactive features using React's component-based architecture.",
      "Projects: Geek-express (Web app)~ Dubai, Tmam (mobile app)~ Dubai...",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Imperium Code | Greece",
    icon: imperium,
    iconBg: "#E6DEDD",
    date: "Dec 2019 - Nov 2021",
    points: [
      "Developed and maintained APIs for role based projects, used about 30 libraries in Nodejs (jwt, mutler, nodemailer.....)",
      "Used about 25 angular libraries (translation, charts....).",
      "Implemented GTM for Nextjs project.",
      "Projects: Web Flow app, Riothere ~ Dubai...",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
