import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  Vidura,
  threejs,
  LMBS,
  DBJ,
  Youtube,
  Ac,
  Bv,
  Daisy,
  Socket,
  Express,
  Cloudinary,
  Zustand,
  Github,
  chatty,
  Live,
  Blog,
  dhru,
  harshwardhan,
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
    title: "Content Creator",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Zustand",
  //   icon: Zustand,
  // },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Web Sockets",
    icon: Socket,
  },
  {
    name: "Express JS",
    icon: Express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Cloudinary",
  //   icon: Cloudinary,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: Github,
  },
  
];

const experiences = [
  {
    title: "High School",
    company_name: "L.M Bandal high school",
    icon: LMBS,
    iconBg: "#383E56",
    date: "june 2016 - April 2021",
    points: [
      "Completed 10th grade with strong academic performance in all major subjects",
      "Built a solid foundation in Mathematics, Science, English, and Social Studies.",
      "Completed assignments, exams, and projects on time with consistency and discipline.",
      "Took active part in classroom discussions, group projects, and school activities.",
    ],
  },
  {
    title: "Junior College",
    company_name: "D.B.J college chiplun",
    icon: DBJ,
    iconBg: "#E6DEDD",
    date: "June 2021 - april 2023",
    points: [
      "Completed 11th & 12th Science with focus on Physics, Chemistry, Mathematics, and Biology.",
      "Built strong understanding of scientific concepts through theory and lab practicals",
      "Managed academic tasks, projects, and board exam prep with discipline and consistency",
      "Participated in science fairs, group studies, and subject-related competitions.",
    ],
  },
  {
    title: "B.E. in Computer Engineering",
    company_name: "Bharati Vidyapeeth College of Engineering",
    icon: Bv,
    iconBg: "#E6DEDD",
    date: "June 2023 - Ongoing(june 2027)",
    points: [
      "Pursuing a 4-year undergraduate degree focused on core computer science and engineering subjects.",
      "Studying data structures, algorithms, DBMS, operating systems, and computer architecture.",
      "Gaining practical experience through lab work, mini-projects, and technical assignments.",
      "Actively participating in tech events, coding competitions, and department-level workshops.",
    ],
  },
  {
    title: "Web Developement",
    company_name: "YouTube",
    icon: Youtube,
    iconBg: "#383E56",
    date: "Nov 2024 - Feb 2025",
    points: [
      "Completed intensive 4-month course covering MongoDB, Express.js, React.js, and Node.js.",
      "Built full-stack web applications with authentication, routing, and CRUD functionalities.",
      "Gained hands-on experience with REST APIs, state management, and responsive design.",
      "Worked on real-world projects and collaborated using Git, GitHub, and deployment tools.",
    ],
  },
  {
    title: "Data Structures and Algorithms",
    company_name: "Apna College",
    icon: Ac,
    iconBg: "#E6DEDD",
    date: "Feb 2025 - Ongoing",
    points: [
      "Completed DSA course covering arrays, linked lists, trees, stacks, queues, and graphs.",
      "Learned algorithmic techniques like recursion, sorting, searching, and dynamic programming.",
      "Solved coding problems to strengthen logic, efficiency, and problem-solving skills.",
      "Practiced DSA using platforms like LeetCode, HackerRank, or Codeforces.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
    "I’ve seen how much effort you put into your projects — your dedication and creativity always impress me!",
    name: "Harshwardhan Patil",
    designation: "Student",
    company: "Computer Science Dept. of bharati vidyapeeth college",
    image: harshwardhan,
  },
  {
    testimonial:
      "You're one of the most curious and consistent students I've taught. Keep pushing your limits — you're on the right path.",
    name: "Prof.Madhuri Ghuge",
    designation: "Project Mentor",
    company: "Bharati Vidyapeeth College of Engineering",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Watching you build apps from scratch is honestly inspiring. You've got a real knack for this — can’t wait to see where it takes you!",
    name: "Dhru Burte",
    designation: "Student",
    company: "Computer Science Dept. of bharati vidyapeeth college",
    image: dhru,
  },
];

const projects = [
  {
    name: "Chatty",
    description:
      "Web-based platform that enables users to engage in instant messaging, supporting real-time communication through one-on-one chats, providing a seamless and interactive solution for personal and professional conversations.",
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
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express.js",
        color: "pink-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
    ],
    image: chatty,
    source_code_link: "https://github.com/sahilkhan09k/chat-application",
    live_link: "https://chat-application-a6ce.onrender.com/login",
  },
  {
    name: "Blgr",
    description:
      "Web-based platform that allows users to create, publish, and manage blog posts with ease, offering a convenient and engaging solution for content creation, knowledge sharing, and personal or professional expression.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Appwrite",
        color: "blue-text-gradient",
      },
      {
        name: "TinyMCE",
        color: "green-text-gradient",
      },
      {
        name: "Redux-Toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: Blog,
    source_code_link: "https://github.com/sahilkhan09k/Blog-website",
  },
  {
    name: "Vidura",
    description:
     "Web-based platform that handles video uploading, processing, storage, and streaming with user authentication, comment systems, and analytics, providing a scalable and efficient foundation for media applications.",
    tags: [
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "Expressjs",
        color: "green-text-gradient",
      },
      {
        name: "MongoDB",
        color: "pink-text-gradient",
      },
      {
        name: "JWT",
        color: "green-text-gradient",
      },
      {
        name: "Cloudinary",
        color: "pink-text-gradient",
      },
    ],
    image: Vidura,
    source_code_link: "https://github.com/sahilkhan09k/Backend-project",
  },
];

export { services, technologies, experiences, testimonials, projects };
