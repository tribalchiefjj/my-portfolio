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
  jobit,
  tripguide,
  threejs,
 
} from "../assets";

import patImage from "../assets/pat.jpeg";
import gymImage from "../assets/gym.webp";
import financialImage from "../assets/financial.webp";
import IslamicImage from "../assets/Islamic.png";
import BechoesImage from "../assets/Bechoes.png";

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
      "After jafar optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://previews.123rf.com/images/dedegrphc/dedegrphc2002/dedegrphc200202502/140319272-letter-j-logo-template-vector-icon-design.jpg",
  },
];

const projects = [

  {
    name: "interfaith site",
    description:
      "a full-stack website that bridges divides and foster mutual respect by giving voice to honest, heartfelt reflections. Instead of debating doctrines or traditions,the site shines a light on the personal experiences and “signs” that move us, hoping to guide someone else toward a new perspective. ",
    tags: [
      {
        name: "Typscript,",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Admin",
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
        name: "PostgreSql",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: BechoesImage,
    source_code_link: "https://github.com/tribalchiefjj/interfaith-frontend",
    live_demo_link: "https://bechoes.vercel.app/", 
  },

  {
    name: "Event Registration System",
    description:
      "High-value technical solutions for event regestrations abd booking ",
    tags: [
      {
        name: "Firebase Authentication ",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Admin",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
      {
        name: "QR Ecosystem",
        color: "pink-text-gradient",
      },
      {
        name: "Data Export",
        color: "pink-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    
    source_code_link: "https://github.com/tribalchiefjj/events-system",
  },

  {
    name: "Gym-System-Dashboard",
    description:
      "giving my local gym a technical solution for manyging the gym was a volunteer tas for me , and a skill boaster project too , its a gym system , users have to register and the admin most of it is admin site to mage all the gym staff  ",
    tags: [
      {
        name: "API",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "PostgreSql",
        color: "pink-text-gradient",
      },
      {
        name: "Typscript",
        color: "blue-text-gradient",
      },
    ],
    image: gymImage,
    source_code_link: "https://github.com/tribalchiefjj/GYM-system",
  },
  // {
  //   name: "Fursa mobile app",
  //   description:
  //     "An Android mobile app that helps youth find opportunities like jobs, internships, and businesses.",
  //   tags: [
  //     {
  //       name: "React Native",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Expo Go",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Youths",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: carrent,
  //   source_code_link: "https://github.com/tribalchiefjj/fursa-mobile",
  // },
  
  {
    name: "online Auction System",
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
    image: financialImage,
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

  {
    name: "Islamic-Audit",
    description:
      "n educational tool to help people understand the ethical status of various actions in Islam along with references  ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "Threejs",
        color: "pink-text-gradient",
      },
      {
        name: "Forked",
        color: "blue-text-gradient",
      },
      {
        name: "Contribution",
        color: "blue-text-gradient",
      },
    ],
    image: IslamicImage,
    source_code_link: "https://github.com/tribalchiefjj/Islamic-Audit",
  },

  {
    name: "Real-Time Collaborative Code Editor",
    description:
      "To gain hands-on experience, challenge myself with real world projects that people are using , and refine my skills this is a code editor that allows multiple users to work on the same codebase simultaneously. This project demonstrates key principles of distributed systems, concurrency, and real-time updates, showcasing technical depth and practical use. ",
    tags: [
      {
        name: "Nodejs,",
        color: "blue-text-gradient",
      },
      {
        name: "Express,",
        color: "blue-text-gradient",
      },
      {
        name: "API",
        color: "green-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
      {
        name: "WebSocket",
        color: "pink-text-gradient",
      },
      {
        name: "Typscript",
        color: "pink-text-gradient",
      },
      {
        name: "concurrency",
        color: "pink-text-gradient",
      },
    ],
    
    source_code_link: "https://github.com/tribalchiefjj/Code-Editor",
  },

  {
    name: "Online Auction Microservices Project",
    description:
      "This project is a microservices-based online auction system designed for scalability, modularity, and ease of deployment. I used Docker, Flask, PostgreSQL, and microservice communication patterns to ensure a robust and maintainable architecture. ",
    tags: [
      {
        name: "Docker",
        color: "blue-text-gradient",
      },
      {
        name: "Flask",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "Socket.IO",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "pink-text-gradient",
      },
      {
        name: "Pytest",
        color: "pink-text-gradient",
      },
      {
        name: "JWT-based authentication",
        color: "pink-text-gradient",
      },
      {
        name: "Microservices Architecture",
        color: "pink-text-gradient",
      },
    ],
    
    source_code_link: "https://github.com/tribalchiefjj/microservices",
  },

];




export { services, technologies, experiences, testimonials, projects };
