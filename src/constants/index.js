import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    laravel,
    python,
    django,
    php,
    docker,
    todo_list,
    imran_ai_saas,
    notion,
    realtime_chat,
    board_collaboration,
    edution
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: laravel,
        name: "Laravel",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: php,
        name: "Php",
        type : "Backend"
    },
    {
        imageUrl: docker,
        name: "Docker",
        type : "Containerization"
    }

];

export const experiences = [
    {
        title: "React.js Developer",
        company_name: "Starbucks",
        icon: starbucks,
        iconBg: "#accbe1",
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
        iconBg: "#fbc3bc",
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
        iconBg: "#b7e4c7",
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
        iconBg: "#a2d2ff",
        date: "Jan 2023 - Present",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: todo_list,
        theme: 'btn-back-red',
        name: 'QuickTask',
        demo : "https://imran-todo-list.vercel.app",
        description: 'QuickTask Pro is an advanced todo_list application designed to revolutionize task management for individuals and teams. It integrates cutting-edge features with intuitive user interface design to enhance productivity, organization, and collaboration',
        link: 'https://github.com/Imranul-hoque/advanced_todo_list.git',
    },
    {
        iconUrl: notion,
        theme: 'btn-back-red',
        name: 'OmniNote',
        demo : "https://imran-notion.vercel.app",
        description: "OmniNote is a versatile productivity platform designed to serve as your digital workspace and knowledge repository. Offering a comprehensive set of features akin to Notion, OmniNote empowers users to organize their thoughts, tasks, projects, and documents seamlessly in one centralized location. Whether you're a student, professional, or creative, OmniNote provides the flexibility and functionality to adapt to your unique needs and workflows.",
        link: 'https://github.com/Imranul-hoque/imran_notion.git',
    },
    {
        iconUrl: realtime_chat,
        theme: 'btn-back-red',
        name: 'Insightful Hub',
        demo : "https://github.com/Imranul-hoque/imran-chat-app.git",
        description: "Insightful Hub is a comprehensive knowledge management platform designed to revolutionize the way you organize, collaborate, and innovate. Serving as a versatile alternative to Notion, Insightful Hub offers a plethora of features to streamline your workflows, capture insights, and empower teamwork. Whether you're a student, entrepreneur, or professional, Insightful Hub provides the tools you need to transform ideas into action and drive meaningful outcomes",
        link: 'https://github.com/Imranul-hoque/imran-chat-app.git',
    },
    {
        iconUrl: board_collaboration,
        theme: 'btn-back-red',
        name: 'CollaborationBoard',
        demo :  "https://imran-collaboration.vercel.app",
        description: "CollaboraBoard is a cutting-edge collaboration platform designed to revolutionize the way teams work together, plan projects, and achieve their goals. With its intuitive interface and powerful features, CollaboraBoard facilitates seamless communication, task management, and decision-making, empowering teams to collaborate effectively in real-time. Whether you're a small startup, a remote team, or a large enterprise, CollaboraBoard provides the tools you need to streamline collaboration and drive productivity.",
        link: 'https://github.com/Imranul-hoque/board-collaboaration.git',
    },
    {
        iconUrl: imran_ai_saas,
        theme: 'btn-back-red',
        name: 'AiChatbot',
        demo : "https://imran-saas.vercel.app",
        description: "Introducing our groundbreaking AI Companion Application, a revolutionary tool designed to enhance your daily life like never before. With our application, you'll have a virtual companion at your fingertips, ready to assist you in various aspects of your routine. Whether you need help organizing your schedule, managing tasks, or simply seeking companionship, our AI Companion Application is there for you.",
        link: 'https://github.com/Imranul-hoque/imran-saas.git',
    },
    {
        iconUrl: education,
        theme: 'btn-back-red',
        name: 'LMS',
        demo : "https://imran-lms.vercel.app",
        description: "Our Learning Management System (LMS) project aims to revolutionize the way education is delivered and managed. Designed to cater to the diverse needs of modern learners and educators, our LMS offers a comprehensive platform for organizing, delivering, and tracking educational content seamlessly",
        link: 'https://github.com/Imranul-hoque/learning_management_system.git',
    },
];
