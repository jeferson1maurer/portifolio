import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `Sou desenvolvedor Front-End focado na criação de interfaces modernas e responsivas utilizando React, Next.js, TypeScript e Tailwind CSS. Gosto de transformar ideias em aplicações funcionais, com código limpo, boa performance e ótima experiência para o usuário. Estou sempre evoluindo e construindo novos projetos para aprimorar minhas habilidades.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "VastuSpaze",
    image: project1,
    description:
      "Este projeto consiste no desenvolvimento de uma landing page moderna para uma empresa fictícia de serviços de reforma residencial chamada VastuSpaze. A aplicação foi construída utilizando React para a estrutura dos componentes e Tailwind CSS para a estilização, garantindo um design responsivo, limpo e eficiente.",
    technologies: ["Tailwind", "React", "JavaScript"],
    link: "https://vastu-space-alpha.vercel.app/"
  },
  {
    title: "iPhone 17 Pro Max",
    image: project2,
    description:
      "O objetivo deste projeto é praticar habilidades em desenvolvimento front-end, recriando interfaces profissionais e aprimorando conceitos como responsividade, UI/UX e boas práticas com React.",
    technologies: ["React", "Tailwind", "JavaScript"],
    link: "https://clone-site-i-phone.vercel.app/"
  },
  {
    title: "Gallery+",
    image: project3,
    description:
      "Álbum de fotos desenvolvido com React, TypeScript e Tailwind CSS, com foco em componentização, tipagem, estados de carregamento.",
    technologies: ["React", "Typescript", "Tailwindcss"],
    link: "hhttps://gallery-plus-six.vercel.app/"
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  //   link: "https://vastu-space-alpha.vercel.app/"
  // },
];

export const CONTACT = {
  address: "Bento Gonçalves, RS, Brazil",
  phoneNo: "(54)99924-6045",
  email: "jeferson98luis@gmail.com",
};
