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
  nextjs,
  bootstrap,
  tailwind,
  firebase,
  nodejs,
  mongodb,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  figpro,
  storeit,
  arkanoid,
  threadsclone,
  imagem,
  shoppy,
  beats,
  quizmify,
  geritch,
  alanai,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "About",
  },
  {
    id: "projects",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Lifelong learner",
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
    name: "Node JS",
    icon: nodejs,
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
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "StoreIt",
    description:
      "Storage management platform designed to help you manage your documents, images, and files efficiently. It provides a secure and easy-to-use interface to manage your files online similar to Google Drive/Dropbox/OneDrive.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Shadcn",
        color: "green-text-gradient",
      },
      {
        name: "Zod",
        color: "orange-text-gradient",
      },
      {
        name: "Appwrite",
        color: "pink-text-gradient",
      },
    ],
    image: storeit,
    source_code_link: "https://cc-storeit.vercel.app/",
  },
  {
    name: "FigPro",
    description:
      "Design collaboration with features like multi-cursor support, cursor chat, reactions, and active user display, enabling seamless real-time interaction and feedback among team members directly on the canvas.",
    tags: [
      {
        name: "Next.js",
        color: "blue-text-gradient",
      },
      {
        name: "Liveblocks",
        color: "green-text-gradient",
      },
      {
        name: "Fabric.js",
        color: "orange-text-gradient",
      },
      {
        name: "Shadcn",
        color: "pink-text-gradient",
      },
    ],
    image: figpro,
    source_code_link: "https://cc-figpro.vercel.app/",
  },
  {
    name: "Shoppy Dashboard",
    description:
      "Highly productive admin dashboard designed to help administrators efficiently manage various aspects of their business or organization.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "TypeScript",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shoppy,
    source_code_link: "https://cc-dashboard-admin.vercel.app/",
  },
  {
    name: "Arkanoid",
    description:
      "Classic arcade game where players control a paddle to bounce a ball and break bricks. Arkanoid offers a nostalgic yet challenging experience for gamers of all ages.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Canvas",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: arkanoid,
    source_code_link: "https://cc-arkanoid.vercel.app/",
  },
  // {
  //   name: "Quizmify",
  //   description:
  //     "Quizmify is a platform for creating quizzes using AI! Be a quizmaster yourself! Showcase your knowledge and create and share your own quizzes with the world.",
  //   tags: [
  //     {
  //       name: "Next.js",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "OpenAI",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Prisma",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: quizmify,
  //   source_code_link: "https://github.com/CaleCabrera07/quizmify",
  // },
  // {
  //   name: "AI News App",
  //   description:
  //     "Voice controlled React News Application using Alan AI. Users can interact with the application by using their voice to fetch news from various sources.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "AlanAI",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Vite",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: alanai,
  //   source_code_link: "https://github.com/CaleCabrera07/news-ai",
  // },
  // {
  //   name: "Beats Store",
  //   description:
  //     "Beats Store's landing page that allows users to view product details, explore new products through a responsive design and smooth animations.",
  //   tags: [
  //     {
  //       name: "Html",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Css",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Javascript",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: beats,
  //   source_code_link: "https://cc-beats-headphones.netlify.app",
  // },
  // {
  //   name: "Geritch",
  //   description:
  //     "Web application that empowers users to unlock the flavors of the industry by seamlessly connecting with a world of dining experiences.",
  //   tags: [
  //     {
  //       name: "React",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "Animations",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "Mobile-first",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: geritch,
  //   source_code_link: "https://cc-geritch.netlify.app",
  // },
];

export { services, technologies, experiences, testimonials, projects };
