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

import patImage from "../assets/pat.jpeg";


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
    title: "Gym Rat",
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
    title: "started Computer science as a student ",
    company_name: "Institute Of Certified Studies - College 🎓",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2022",
    points: [
      
      "not much going on here , got curious , got into programming and math",
    ],
  },
  {
    title: "Junior Dev ",
    company_name: "Intelligent Student ",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2023 ",
    points: [
      "started developing systems. ",
      "made a student portal system for the school ",
      "Participated in hackathons and one hackathon managed to develop an app for the youths of mombasa in the employment, internship , volunture sections ,.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "exellently improved junior software dev ",
    icon: shopify,
    iconBg: "#383E56",
    date: "2024",
    points: [
      "got good in database , java, javascript, and their frameworks",
      "Started deveoping my own real world projects (See projects downbelow)",
      "volunteering in making websites and softwares for school Clubs and maintaining them .",
    
    ],
  },
  {
    title: "software developer Intern",
    company_name: "Swahiiipot Hub Foundation - Mombasa, Kenya",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "sept 2024 - dec 2024 ",
    points: [
      "Developing and maintaining web applications using typscript python , Flask RestAPI and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as it gets, but Jafar proved me wrong.",
    name: "Patrick Mwangi",
    designation: "Junior software dev",
    company: "Swahili POT hUB",
    image: patImage,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jafar does does.",
    name: "Tribalchief",
    designation: "COO",
    company: "TC org",
    image: "https://previews.123rf.com/images/dedegrphc/dedegrphc2002/dedegrphc200202502/140319272-letter-j-logo-template-vector-icon-design.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://previews.123rf.com/images/dedegrphc/dedegrphc2002/dedegrphc200202502/140319272-letter-j-logo-template-vector-icon-design.jpg",
  },
];

const projects = [
  {
    name: "Fursa mobile app",
    description:
      "An Android mobile app that helps youth find opportunities like jobs, internships, and businesses.",
    tags: [
      {
        name: "React Native",
        color: "blue-text-gradient",
      },
      {
        name: "Expo Go",
        color: "green-text-gradient",
      },
      {
        name: "Youths",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/tribalchiefjj/fursa-mobile",
  },
  
  {
    name: "online Bidding System",
    description:
      "a full-stack application that allows users to create, bid on, and manage auctions in real-time. It is built with modern web technologies and designed to offer a robust and interactive user experience",
    tags: [
      {
        name: "yTpscrip",
        color: "blue-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "green-text-gradient",
      },
      {
        name: "WebSocket",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
      {
        name: "Nodejs",
        color: "pink-text-gradient",
      },
      {
        name: "Auction Automatio",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/tribalchiefjj/Bidding-system",
  },
  {
    name: "AI-Powered Resume Reviewer",
    description:
      "A web app that analyzes resumes against job descriptions, identifies skill matches/gaps, and determines job fit. It alerts users if their resume does not match the job requirements, provides visualized results with charts, suggests improvements, and offers PDF reports with tailored skill resources for enhanced job applications.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "NLP",
        color: "green-text-gradient",
      },
      {
        name: "OponAI API",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/tribalchiefjj/AI-resume-reviewer",
  },
  {
    name: "Financial-dashboard ",
    description:
      "A unique project: a financial dashboard with invoice saving.",
    tags: [
      {
        name: "typscript",
        color: "blue-text-gradient",
      },
      {
        name: "vercel",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/tribalchiefjj/financial-dashboard-",
  },
  {
    name: "Stock market dashboard ",
    description:
      "a web application that provides real-time and historical stock market data visualization. It fetches data from the Yahoo Finance API also alpha vintage API , and displays interactive charts to help users analyze stock price trends over time.",
    tags: [
      {
        name: "ALlpha vintage API",
        color: "blue-text-gradient",
      },
      {
        name: "Yahoo Finance API",
        color: "green-text-gradient",
      },
      {
        name: "SpringBoot, backend",
        color: "pink-text-gradient",
      },
    ],
   
    source_code_link: "https://github.com/tribalchiefjj/stock-dashboard-web",
  },
];

export { services, technologies, experiences, testimonials, projects };
