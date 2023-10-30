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
  carrent,
  jobit,
  tripguide,
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
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "IT Engineer",
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
    title: "Diploma in Economy and Commerce",
    company_name: "Damascus Technical Institut",
    icon: starbucks,
    iconBg: "#383E56",
    points: [
      "The Technical Institute of Banking and Financial Sciences is a part of Damascus University, where you completed a two - year program in banking studies.During your time there, you gained valuable experience in mathematics, which has helped you develop a strong analytical mindset.",
    ],
  },
  {
    title: "Bachelor in Information Technology",
    company_name: "Syrian Virtual University",
    icon: tesla,
    iconBg: "#E6DEDD",
    points: [
      "I have completed a 4 - year Bachelor’s degree in Information Technology from the Syrian Virtual University.During my studies, I gained extensive knowledge in various areas, including networking and security, as well as programming languages such as C# and C++.I am confident that my degree has prepared me well for a career in the field of information technology."
    ],
  },
  {
    title: "IT Technician ",
    company_name: "Metallic Equipment Company",
    icon: shopify,
    iconBg: "#383E56",
    points: [
      "I have worked as an IT technician at Metallic Equipment Company for 5 years. During this time, I gained valuable experience and knowledge in various areas of information technology. My role involved installing, maintaining, and repairing hardware and software components of the organization’s computers. I also provided support to users through remote access or site visits as needed by management teams within the company. My experience has allowed me to develop excellent diagnostic and problem-solving skills, as well as outstanding organizational and time-management skills. I am confident that my experience has prepared me well for a career in the field of information technology."
    ],
  },
  {
    title: "Diploma in Full Stack Software Developer",
    company_name: "Code Institute",
    icon: meta,
    iconBg: "#E6DEDD",
    points: [
      "I have completed a diploma in Full Stack Software Development from Code Institute.This program has refreshed my knowledge and focused on the software development major.During my studies, I gained extensive knowledge in various areas, including front - end and back - end coding skills, as well as producing websites and web applications with a functional, fully integrated payment system.I am confident that my diploma has prepared me well for a career in the field of software development."
    ],
  },
];

const testimonials = [
  {

  },
  {
  
  },
  {
  
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
