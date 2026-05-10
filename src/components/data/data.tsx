import { ProjectType, SkillCategory } from "@/hooks/constants";

// hero section words
export const dynamicWords = [
  "Research Concepts",
  "Computer Vision Systems",
  "Embedded AI",
  "Robotics Pipelines",
];

// timeline
export const timelineData = [
  {
    year: "2020",
    title: "B.Tech in Computer Science & Engineering",
    picture: ["icons/graduation_black.png", "icons/graduation_white.png"],
    events: [
      "Started Bachelor of Technology in Computer Science & Engineering at Symbiosis Institute of Technology, Symbiosis Internal (Deemed University), Pune.",
    ],
    color: "cyan",
  },
  {
    year: "2023",
    title: "NGO Volunteer | Research | Japan Study Tour",
    picture: ["icons/japan_black.png", "icons/japan_white.png"],
    events: [
      "Created a donor management system for Door Step School (MySQL, PHP).",
      "Improved website performance and mobile responsiveness for NGO site.",
      "Optimized WordPress backend for better content editing and responsive design.",
      "Participated in a Japan study tour, attending lectures at Chiba University and Ritsumeikan University.",
      "Presented papers in conferences: VISHWACON-2023, ICRIC-2023.",
    ],
    color: "rose",
  },
  {
    year: "2024",
    title: "Internships | Robotics Integration | Publications",
    picture: ["icons/developer_black.png", "icons/developer_white.png"],
    events: [
      "Interned at M/s Technospirit: supported RTL design and logic simulation using Verilog & Xilinx Vivado.",
      "Refactored React.js frontend for internal R&D dashboard.",
      "Developed reusable WordPress templates for Byline Learning Solutions, cutting deployment time by 40%.",
      "Integrated robotics and embedded systems projects (Arduino/Raspberry Pi) featured in a nationally distributed project booklet.",
      "Presented papers in conferences: ICAECT-2024, ACOIT-2024, ICDSM-2024.",
    ],
    color: "moss",
  },
  {
    year: "2025",
    title: "Full Stack Development | SME-ICT | Conference Speaker",
    picture: ["icons/developer_002_black.png", "icons/developer_002_white.png"],
    events: [
      "Built scalable WordPress CMS using PHP and JS.",
      "Created robotics/embedded projects with simulations for the ICT Robotics chapter (adopted by 25+ institutions) and reviewed content as SME to ensure industry standards.",
      "Presented papers in conferences: ICETI4T-2025.",
    ],
    color: "ocean",
  },
  {
    year: "2026",
    title: "Robotics & STEM Trainer",
    picture: [
      "icons/robotics_trainer_black.png",
      "icons/robotics_trainer_white.png",
    ],
    events: [
      "Delivered hands-on STEM, Robotics, and IoT sessions for students from Kindergarten to Grade 8.",
      "Taught Arduino programming, sensor integration, and basic robotics concepts through live demonstrations and lab activities.",
      "Designed age-appropriate innovation modules using Python, Arduino, sensors, and mechanical components.",
      "Mentored students in building functional prototypes and presenting projects during exhibitions and showcases.",
    ],
    color: "amber",
  },
];

// timeline color map
export const colorMap = {
  cyan: {
    text: "text-cyan-600 dark:text-cyan-300",
    border: "border-cyan-600 dark:border-cyan-300",
    bg: "bg-cyan-100/70 dark:bg-cyan-900/70",
  },
  amber: {
    text: "text-amber-600 dark:text-amber-300",
    border: "border-amber-600 dark:border-amber-300",
    bg: "bg-amber-100/70 dark:bg-amber-900/70",
  },
  rose: {
    text: "text-rose-600 dark:text-rose-300",
    border: "border-rose-600 dark:border-rose-300",
    bg: "bg-rose-100/70 dark:bg-rose-900/70",
  },
  moss: {
    text: "text-lime-600 dark:text-lime-300",
    border: "border-lime-600 dark:border-lime-300",
    bg: "bg-lime-100/70 dark:bg-lime-900/70",
  },
  ocean: {
    text: "text-sky-600 dark:text-sky-300",
    border: "border-sky-600 dark:border-sky-300",
    bg: "bg-sky-100/70 dark:bg-sky-900/70",
  },
};

// timeline arrow classes
export const arrowClasses = {
  cyan: {
    left: "border-l-cyan-600 dark:border-l-cyan-300",
    right: "border-r-cyan-600 dark:border-r-cyan-300",
  },
  amber: {
    left: "border-l-amber-600 dark:border-l-amber-300",
    right: "border-r-amber-600 dark:border-r-amber-300",
  },
  rose: {
    left: "border-l-rose-600 dark:border-l-rose-300",
    right: "border-r-rose-600 dark:border-r-rose-300",
  },
  moss: {
    left: "border-l-lime-600 dark:border-l-lime-300",
    right: "border-r-lime-600 dark:border-r-lime-300",
  },
  ocean: {
    left: "border-l-sky-600 dark:border-l-sky-300",
    right: "border-r-sky-600 dark:border-r-sky-300",
  },
};

// research interests
export const researchInterests = {
  "Applied AI & Machine Learning": [
    "Deep Learning & Neural Networks",
    "NLP & Transformer Models",
    "Real-Time ML Inference Systems",
  ],

  "Computer Vision & Robotics": [
    "Computer Vision Pipelines",
    "Edge AI & Robotics",
    "Sensor-Driven Automation",
  ],

  "Embedded & Intelligent Systems": [
    "Embedded AI Workflows",
    "Sensor Fusion & IoT Systems",
    "Edge Computing & Real-Time Processing",
  ],
};

// professionla experience
export const professionalExperiences = [
  {
    title: "Robotics & STEM Trainer",
    company: "Entecres Labs Pvt. Ltd. Delhi",
    description: [
      "Delivered hands-on STEM, Robotics, and IoT sessions",
      "Designed age-appropriate innovation modules using Python, Arduino, sensors, and mechanical components.",
      "Mentored students in building functional prototypes and presenting projects during exhibitions and showcases.",
    ],
  },
  {
    title: "Software Developer Intern | Full Stack Developer | SME-ICT",
    company: "Byline Learning Solutions LLP., Pune.",
    description: [
      "Built reusable WordPress components with PHP and JS.",
      "Developed educational robotics modules for classrooms.",
      "Built scalable CMS and improved deployment efficiency by 40%.",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "M/s Technospirit, Hyderabad.",
    description: [
      "Optimized frontend component rendering using React and TailwindCSS.",
      "Collaborated with VLSI design team to model frontend simulations.",
      "Supported RTL design and logic simulation using Verilog & Xilinx Vivado.",
    ],
  },
  {
    title: "Full Stack Developer | Volunteer",
    company: "Door Step School (NGO), Pune",
    description: [
      "Created a donor management system for tracking contributions.",
      "Improved website performance and mobile responsiveness.",
    ],
  },
  {
    title: "Student Researcher",
    company: "Symbiosis International (Deemed University), Pune",
    description: [
      "Conducted research in AI, machine learning, and robotics.",
      "Collaborated with interdisciplinary teams to develop tech solutions.",
      "Published research findings in top-tier journals and conferences like IEEE & Springer.",
    ],
  },
];

export const achievements = [
  {
    title: "Academic & Research",
    description: [
      "Presented and published multiple research papers on innovative ML models.",
      "Featured in reputed journals like IEEE and Springer.",
      "Published impactful work at conferences like ICRIC, exploring AI, ML, and IoT integration.",
    ],
  },
  {
    title: "Technical Contributions",
    description: [
      "Led full-stack projects in Robotics, IoT, Cloud, and Embedded Systems.",
      "Built custom ML pipelines for NLP, Computer Vision, and Deep Learning.",
    ],
  },
  {
    title: "Awards & Recognition",
    description: [
      "Recognized as a student researcher at Symbiosis Institute of Technology.",
      "Awarded for technical leadership in academic and project domains.",
      "Represented India in the Symbiosis Japan Study Tour focused on robotics and smart systems.",
    ],
  },
];

// skills
export const skillCategories: SkillCategory[] = [
  {
    name: "Academia & Research",
    subcategories: [
      {
        name: "Machine Learning & AI",
        skills: [
          "TensorFlow",
          "PyTorch",
          "Scikit-learn",
          "Deep Learning",
          "Computer Vision",
          "Natural Language Processing (NLP)",
          "Transfer Learning",
          "Feature Engineering",
          "Model Evaluation",
          "Predictive Modeling",
        ],
      },
      {
        name: "Image & Video Processing",
        skills: [
          "OpenCV",
          "Image Processing",
          "Video Processing",
          "Real-Time Inference",
          "Object Detection",
          "Facial Recognition",
          "Facial Expression Analysis",
          "Facial Expression Recognition",
        ],
      },
      {
        name: "Scientific & Academic Skills",
        skills: [
          "Scientific Writing",
          "Research Methodology",
          "Research Paper Publication",
          "Dataset Preparation",
          "Experiment Documentation",
        ],
      },
    ],
  },

  {
    name: "Technical Skills",
    subcategories: [
      {
        name: "Programming Languages",
        skills: [
          "Python",
          "C",
          "C++",
          "JavaScript",
          "TypeScript",
          "Java",
          "SQL",
        ],
      },

      {
        name: "Frameworks & Libraries",
        skills: ["React", "Node.js", "Flask", "Tailwind CSS", "SwiftUI"],
      },

      {
        name: "Development Tools",
        skills: [
          "Git & GitHub",
          "Postman",
          "VS Code",
          "Jupyter Notebook",
          "Figma",
        ],
      },

      {
        name: "Cloud & DevOps",
        skills: ["AWS", "Docker", "CUDA", "GitHub Actions", "Linux"],
      },

      {
        name: "Embedded Systems & IoT",
        skills: [
          "Arduino",
          "ESP32",
          "Raspberry Pi",
          "Embedded C",
          "GPIO Programming",
          "Sensor Integration",
          "IoT Prototyping",
          "Serial Communication",
          "MQTT",
          "Real-Time Sensor Pipelines",
        ],
      },

      {
        name: "Robotics & Automation",
        skills: [
          "Robotics Prototyping",
          "Automation Workflows",
          "Sensor-Actuator Systems",
          "Motor Control",
          "ROS",
          "ROS2",
          "Gazebo",
          "SLAM Concepts",
          "Sensor Fusion Basics",
          "Embedded AI",
        ],
      },

      {
        name: "Electronics & Hardware",
        skills: [
          "Circuit Debugging",
          "PCB Prototyping",
          "Hardware Troubleshooting",
          "Signal Validation",
          "Fritzing",
          "TinkerCAD",
        ],
      },
    ],
  },

  {
    name: "Other Skills",
    subcategories: [
      {
        name: "Languages",
        skills: [
          "English (Fluent)",
          "Telugu (Native)",
          "Hindi (Fluent)",
          "Marathi (Conversational)",
          "Japanese (JLPT N5)",
        ],
      },

      {
        name: "Soft Skills",
        skills: [
          "Problem Solving",
          "Communication",
          "Collaboration",
          "Adaptability",
          "Technical Mentoring",
          "Analytical Thinking",
        ],
      },

      {
        name: "STEM Education & Curriculum",
        skills: [
          "STEM Training",
          "Robotics Curriculum Design",
          "K-12 ICT Education",
          "Workshop Facilitation",
          "Student Mentoring",
        ],
      },
    ],
  },
];

// export const skillCategories: SkillCategory[] = [

//   {

//     name: "Academia & Research",
//     subcategories: [
//       {
//         name: "Machine Learning & AI",
//         skills: [
//           "TensorFlow",
//           "PyTorch",
//           "Scikit-learn",
//           "Deep Learning",
//           "Computer Vision",
//           "Natural Language Processing (NLP)",
//           "Transfer Learning",
//           "Model Evaluation",
//           "Feature Engineering",
//           "Data Analysis",
//           "Model Deployment",
//           "Ensemble Learning",
//           "Predictive Modeling",
//         ],
//       },
//       {
//         name: "Image & Video Processing",
//         skills: [
//           "OpenCV",
//           "Image Processing",
//           "Video Processing",
//           "Real-Time Inference",
//           "Object Detection",
//           "Facial Recognition",
//           "Facial Expression Analysis",
//           "Facial Expression Recognition",
//         ],
//       },
//       {
//         name: "Scientific & Academic Skills",
//         skills: [
//           "Scientific Writing",
//           "Research Methodology",
//           "Research Paper Publication",
//           "Experiment Documentation",
//           "Dataset Preparation",
//           "API Documentation",
//         ],
//       },
//     ],
//   },
//   {
//     name: "Technical Skills",
//     subcategories: [
//       {
//         name: "Programming Languages",
//         skills: [
//           "Python",
//           "JavaScript",
//           "TypeScript",
//           "Java",
//           "C",
//           "C++",
//           "SQL",
//           "PHP",
//           "HTML5",
//           "CSS3",
//           "Shell Scripting",
//           "Bash",
//         ],
//       },
//       {
//         name: "Frameworks & Libraries",
//         skills: [
//           "React",
//           "Node.js",
//           "Express.js",
//           "Flask",
//           "Django",
//           "Tailwind CSS",
//           "Bootstrap",
//           "SwiftUI",
//         ],
//       },
//       {
//         name: "Development Tools",
//         skills: [
//           "Git & GitHub",
//           "Postman",
//           "VS Code",
//           "IntelliJ",
//           "Figma",
//           "Jupyter Notebook",
//         ],
//       },
//       {
//         name: "Cloud & DevOps",
//         skills: [
//           "AWS",
//           "Google Cloud Platform (GCP)",
//           "Firebase",
//           "Vercel",
//           "Docker",
//           "Kubernetes",
//           "CUDA",
//           "Jenkins",
//           "GitHub Actions",
//           "CI/CD Pipelines",
//         ],
//       },
//       {
//         name: "Operating Systems",
//         skills: ["Linux", "Linux/Unix", "Ubuntu", "Raspbian"],
//       },
//       {
//         name: "Development Stacks",
//         skills: ["MERN Stack", "LAMP Stack", "JAMstack", "SpringBoot"],
//       },
//       {
//         name: "Embedded Systems & IoT",
//         skills: [
//           "Arduino",
//           "ESP32",
//           "STM32",
//           "Raspberry Pi",
//           "Embedded C",
//           "GPIO Programming",
//           "Sensor Integration",
//           "IoT Prototyping",
//           "Serial Communication",
//           "MQTT",
//           "ThingSpeak",
//           "Firebase IoT",
//           "Real-Time Sensor Pipelines",
//         ],
//       },
//       {
//         name: "Robotics & Automation",
//         skills: [
//           "Robotics Prototyping",
//           "Automation Workflows",
//           "Sensor-Actuator Systems",
//           "Motor Control",
//           "ROS",
//           "ROS2",
//           "Gazebo",
//           "SLAM Concepts",
//           "Navigation Stack Fundamentals",
//           "Sensor Fusion Basics",
//           "Embedded AI",
//         ],
//       },
//       {
//         name: "Electronics & Hardware",
//         skills: [
//           "Circuit Debugging",
//           "PCB Prototyping",
//           "Hardware Troubleshooting",
//           "Relay & Actuator Integration",
//           "Signal Validation",
//           "Fritzing",
//           "TinkerCAD",
//         ],
//       },
//     ],
//   },
//   {
//     name: "Other Skills",
//     subcategories: [
//       {
//         name: "Languages",
//         skills: [
//           "English (Fluent)",
//           "Telugu (Native)",
//           "Hindi (Fluent)",
//           "Marathi (Conversational)",
//           "Japanese (JLPT N5)",
//         ],
//       },
//       {
//         name: "Soft Skills",
//         skills: [
//           "Problem Solving",
//           "Communication",
//           "Collaboration",
//           "Adaptability",
//           "Time Management",
//           "Technical Mentoring",
//           "Project-Based Learning",
//           "Analytical Thinking",
//         ],
//       },
//       {
//         name: "Presentation & UI Tools",
//         skills: [
//           "Apple Keynote",
//           "Figma (Basic)",
//           "Draw.io (Wireframes and Visualisation)",
//         ],
//       },
//       {
//         name: "STEM Education & Curriculum",
//         skills: [
//           "STEM Training",
//           "Robotics Curriculum Design",
//           "K-12 ICT Education",
//           "Classroom Demonstrations",
//           "Workshop Facilitation",
//           "Student Mentoring",
//         ],
//       },
//     ],
//   },
// ];

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github?: string;
  live?: string;
  type: ProjectType[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Arduino Quad Copter Drone",
    description:
      "A quadcopter drone developed using Arduino as the MCU and other components (brushless DC motors, LiPo battery, GYRO scope, Accelometer,...etc.)",
    tags: ["Arduino", "Robotics", "Drone"],
    image: "projects/arduino-quadcopter.jpg",
    github: "",
    live: "",
    type: ["Robotics", "Personal Projects", "IoT"],
  },
  {
    id: 2,
    title: "Post-Retirement Job/Hobby Suggestion Web App based on ML Model",
    description:
      "A web application that uses machine learning to suggest post-retirement job and hobby options based on individual preferences and skills.",
    tags: ["Machine Learning", "Web Development", "Python", "AI"],
    image: "projects/post-retirement.png",
    github: "",
    live: "",
    type: ["Software Development", "Machine Learning", "Personal Projects"],
  },
  {
    id: 3,
    title: "Flight Fare Prediction using Random Forest Regression",
    description:
      "Machine learning model built using random forest regression to predict flight fare for better travel planning.",
    tags: ["Python", "Machine Learning", "Random Forest", "Aviation Safety"],
    image: "projects/flight-prices.png",
    github: "https://github.com/gsphanitalpak/IDS/tree/main",
    live: "",
    type: ["Machine Learning", "Software Development", "Academic Research"],
  },
  {
    id: 4,
    title: "Banking Chatbot with Design Thinking Principles",
    description:
      "Developed a banking chatbot incorporating design thinking principles, including customer journey mapping and PESTLE analysis.",
    tags: ["Chatbot", "Design Thinking", "UX/UI Design", "Banking"],
    image: "projects/banking-bot.png",
    github: "",
    live: "",
    type: ["Software Development", "Client Projects", "Design Projects"],
  },
  {
    id: 5,
    title: "Smart Driver Drowsiness Detection & Alerting System (IoT)",
    description:
      "An IoT-based driver drowsiness detection system, with real-time monitoring using IR sensor and alerting GSM module controlled by Arduino UNO to prevent accidents.",
    tags: ["IoT", "Machine Learning", "Drowsiness Detection"],
    image: "projects/driver-drowsiness-iot.png",
    github:
      "https://github.com/gsphanitalpak/iot-smart-driver-drowsiness-detection",
    live: "",
    type: ["Robotics", "Machine Learning", "IoT", "Personal Projects"],
  },
  {
    id: 6,
    title: "Blender 3D Robot with Simple Animation",
    description:
      "A 3D animated robot created in Blender, featuring basic transformations and simple animations.",
    tags: ["Blender", "3D Modeling", "Animation", "Design"],
    image: "projects/blender-rotot.png",
    github: "",
    live: "",
    type: ["Design Projects", "Personal Projects"],
  },
  {
    id: 7,
    title:
      "StressSense: An IoT-Enabled Platform for Stress Level Prediction & Prevention",
    description:
      "An IoT-enabled platform designed for real-time stress level monitoring and prevention integrating IoT, machine learning and mobile application integration with swifyUI.",
    tags: [
      "IoT",
      "Machine Learning",
      "Mobile App",
      "Stress Detection",
      "UI/UX",
      "iOS Development",
    ],
    image: "projects/stresssense.png",
    github: "https://github.com/gsphanitalpak/stresssense.git",
    live: "",
    type: [
      "Academic Research",
      "Software Development",
      "Mobile Applications",
      "Machine Learning",
      "Personal Projects",
      "IoT",
    ],
  },
  {
    id: 8,
    title: "Door Step School NGO Donor Management System",
    description:
      "Website setup in  WordPress CMS and a donor management system for the Door Step School NGO built using MySQL, facilitating efficient tracking of donations and donor information.",
    tags: ["WordPress", "MySQL", "CMS", "Web Development"],
    image: "projects/doorstepschool.png",
    github: "https://github.com/santhosh/door-step-school",
    live: "https://door-step-school-link.com",
    type: ["Software Development", "Client Projects"],
  },
  {
    id: 9,
    title: "Poster and Banner Design for Convocation Event",
    description:
      "Designed posters and banners for a convocation event for MBBS doctors, including layout design and visual representation.",
    tags: ["Graphic Design", "Event Design", "Visual Art"],
    image: "projects/adhvaya.png",
    github: "",
    live: "https://drive.google.com/drive/folders/1EVRO53Tsbc9ujxX0wFspToPDItDfIdZF?usp=share_link",
    type: ["Design Projects", "Personal Projects"],
  },
  {
    id: 10,
    title: "Personal Logo and Illustration Works",
    description:
      "A collection of personal logo designs and illustrations, showcasing creativity and branding expertise.",
    tags: ["Graphic Design", "Illustration", "Branding"],
    image: "projects/illustration-personal.png",
    github: "https://github.com/santhosh/logo-illustrations",
    live: "https://drive.google.com/file/d/1J5HXf3qvpE-AjihYLNW-19wQykxb2a1Q/view?usp=sharing",
    type: ["Design Projects", "Personal Projects"],
  },
  {
    id: 11,
    title: "Flask Art Portfolio",
    description:
      "A Flask web application showcasing an art portfolio, featuring a contact form with backend CRUD operations using SQLite database.",
    tags: [
      "Flask",
      "SQLite",
      "Backend Development",
      "Portfolio",
      "Minor Projects",
    ],
    image: "projects/art-portfolio.png",
    github: "https://github.com/santhosh/flask-art-portfolio",
    live: "",
    type: ["Software Development", "Personal Projects", "Client Projects"],
  },

  {
    id: 12,
    title: "Java Homework Planner",
    description:
      "A JavaFX-based homework planner with a simple UI and SQLite database to manage tasks by priority and deadlines.",
    tags: ["Java", "JavaFX", "SQLite", "Task Management", "Minor Projects"],
    image: "projects/java-homework-planner.png",
    github: "https://github.com/santhosh/java-homework-planner",
    live: "",
    type: ["Software Development", "Minor Projects", "Client Projects"],
  },

  {
    id: 13,
    title: "Notes App with AWS Integration",
    description:
      "A simple HTML, CSS, and JavaScript notes application integrated with AWS S3 for cloud storage of created notes.",
    tags: ["HTML", "CSS", "JavaScript", "AWS S3", "Cloud Integration"],
    image: "projects/notes-app.png",
    github: "https://github.com/gsphanitalpak/aws-notes-app.git",
    live: "http://aws-notes-app-bucket-001.s3-website.eu-north-1.amazonaws.com/",
    type: ["Web Development", "Personal Projects", "Minor Projects"],
  },
  {
    id: 14,
    title: "Facial Recognition Flask App",
    description:
      "A simple flask app that uses pretrained & saved  model, with simple interactive UI identifies and displays the prediction made",
    tags: ["Python", "Scikit-learn", "SVM", "ML", "Flask", "UI/UX"],
    image: "projects/facial-recognition-flask.png",
    github: "https://github.com/gsphanitalpak/facial-recognition-flask-app",
    live: "",
    type: ["Machine Learning", "Personal Projects", "Web Development"],
  },

  {
    id: 15,
    title: "Facial Recognition ML Model using SVM",
    description:
      "A machine learning model for facial recognition using SVM, trained on encoded facial images to accurately identify individuals.",
    tags: ["Python", "Scikit-learn", "SVM", "ML"],
    image: "projects/facial-recognition.jpg",
    github: "https://github.com/gsphanitalpak/ml-face-recognition-svm",
    live: "",
    type: ["Machine Learning", "Personal Projects", "Minor Projects"],
  },
  {
    id: 16,
    title: "Byline Learning Solution LLP Portfolio",
    description:
      "A professional portfolio website for Byline Learning Solution LLP, built using PHP and WordPress CMS, showcasing their services and solutions.",
    tags: ["PHP", "WordPress", "CMS", "Web Development"],
    image: "projects/byline.png",
    github: "",
    live: "https://web-dev.bylinelms.com",
    type: ["Software Development", "Client Projects"],
  },
  {
    id: 17,
    title: "Personal Portfolio",
    description:
      "A modern, interactive portfolio built using Vite, TypeScript, React, Tailwind CSS, and Shadcn-UI to showcase skills, and projects.",
    tags: [
      "Vite",
      "TypeScript",
      "React",
      "Shadcn-UI",
      "Tailwind CSS",
      "Web Development",
    ],
    image: "projects/portfolio.jpg",
    github: "https://github.com/santhosh/portfolio",
    live: "https://gsphanitalpak.github.io/gsphanitalpak-portfolio/",
    type: ["Software Development", "Personal Projects"],
  },
];

interface ResearchPaper {
  id: number;
  title: string;
  conference: string;
  date: string;
  coauthors: string[];
  abstract: string;
  keywords: string[];
  link?: string;
  status: string; // New field added
}

export const researchPapers: ResearchPaper[] = [
  {
    id: 1,
    title:
      "StressSense: an IoT enabled platform for stress level prediction, prevention and methods there of",
    conference:
      "International Conference on Recent Innovations in Computing (ICRIC-2023 Volume 2)",
    date: "August 9, 2023",
    coauthors: [
      "Santhosh Phanitalpak Gandhala",
      "Shubham Joshi",
      "Sonali Das",
      "Upasana Saha",
    ],
    abstract:
      "As eloquently articulated by the esteemed sociologist and writer Chelsea Erieau, stress is a dynamic force, akin to an accelerator that exerts its influence, invariably driving individuals either forward or backward. In our contemporary world, which evolves at a pace akin to the speed of light, the challenge of maintaining equilibrium while juggling myriad responsibilities is a daunting task. This proposed project emerges as a beacon of hope, offering a sophisticated and highly effective solution for the detection and management of stress levels. It harnesses the power of cutting-edge physiological sensors, encompassing a pulse sensor, a Galvanic Skin Response (GSR) sensor, a body temperature sensor, and an array of other essential data sources. In conjunction with this, it introduces a user-centric web application interface that has been meticulously crafted for the real-time analysis of sensor data, representing a revolutionary step forward in stress management. This interface leverages the prowess of advanced machine learning (ML) libraries and techniques, including renowned platforms like TensorFlow and PyTorch for deep learning, regression models, and scikit-learn for ensemble learning, as well as kNN models. This project aims to empower individuals to manage stress proactively. It provides a dynamic and robust platform to monitor physiological responses and offer personalized recommendations. This user-centric approach empowers individuals to navigate the challenges of stress and achieve well-being. This innovative solution marks a significant shift towards personalized stress management, offering a lifeline to individuals seeking to mitigate the negative impacts of stress and lead a healthier, balanced life.",
    keywords: [
      "Stress Prediction",
      "IOT",
      "Mental Health",
      "stress prevention",
      "ML in healthcare.",
    ],
    link: "https://link.springer.com/book/9789819734412",
    status:
      "Part of the book series: Lecture Notes in Electrical Engineering (LNEE,volume 1196)",
  },
  {
    id: 2,
    title:
      "Harnessing Predictive Analytics and Machine Learning for Early Obesity Detection: A Multi-Factorial Assessment and Personalized Intervention Framework",
    conference:
      "Third International Conference on Data Science and Management (ICDSM 2024)",
    date: "December 13, 2024",
    coauthors: [
      "Renuka Agrawal",
      "Santhosh Phanitalpak Gandhala",
      "Mahak Gupta",
      "Krishnaa Shah",
    ],
    abstract:
      "Obesity is a growing global health issue, closely linked to serious conditions like type II diabetes, heart disease, and certain cancers. Early detection and intervention are essential for effective management and prevention. This study uses machine learning to classify obesity levels based on factors like diet, lifestyle, and physical characteristics. The dataset includes variables such as age, height, weight, family history, and physical activity. We compare two classification models: Random Forest and Logistic Regression, after preprocessing the data using label encoding and standardisation. Random Forest is selected for its capacity to handle complex, high-dimensional data, while Logistic Regression is chosen for its clarity and interpretability. We assess the models performance using standard metrics like accuracy, confusion matrix, ROC curve, AUC, and the classification report. A multi-class approach is used to categorize individuals into normal weight, overweight, and various obesity levels, offering a more detailed picture than traditional BMI methods. The findings show that Random Forest significantly outperforms Logistic Regression, achieving 95.7% accuracy versus 87.4%. It also scores better on precision, recall, and F1-score. While Logistic Regression provides easier interpretation, it struggles with intermediate obesity levels. Random Forest’s robust performance and ability to pinpoint key factors in obesity make it a more effective tool for early detection and targeted interventions. Thus, we recommend Random Forest for practical healthcare applications, as it combines high accuracy with the potential for future improvements through advanced techniques like deep learning.",
    keywords: [
      "Cohn-Kanade Dataset (CK+) dataset",
      "deep learning",
      "Transfer Learning",
      "VGG16",
      "VGG19",
      "MobileNet",
      "ResNet50V2",
    ],
    link: "https://link.springer.com/chapter/10.1007/978-981-96-8639-1_9",
    status:
      "Part of the book series: Lecture Notes in Networks and Systems (LNNS,volume 1477)",
  },
  {
    id: 3,
    title: "Optimizing Facial Expression Recognition Through Transfer Learning",
    conference:
      "Third International Conference on Data Science and Management (ICDSM 2024)",
    date: "December 13, 2024",
    coauthors: [
      "Renuka Agrawal",
      "Santhosh Phanitalpak Gandhala",
      "Usha A Jogalekar",
      "Unnati Jha",
      "Srushti Nagrale",
      "Varsha Iyer",
    ],
    abstract:
      "Perception of human emotions plays an important role and is beneficial in today’s complex and diverse environment, where non-verbal communications are quite important. Facial expressions recognition is one of the tools to analyze human emotions. Healthcare, human-computer interface, market research, security, education, etc., are a few of the applications where facial expression recognition is prominently used. It contributes to improved communication, the development of empathic systems, the recognition of emotional states, and the facilitation of well-informed decision-making. We can predict behavior and enhance communication by correctly recognizing emotions from facial images. However, it can be difficult to accurately identify facial expressions due to the complex and multidimensional nature of human emotions. This study suggests that using transfer learning approaches can improve facial expression detection systems’ accuracy, resiliency, and versatility. Facial expression recognition, a novel technology for assessing emotions through facial cues, proves valuable across various fields. However, its complexity arises from the diversity of human emotions. This research proposes usage of transfer learning that enhances facial expression recognition models by improving their accuracy, reliability, and generalizability. This approach involves taking a pre-trained model over one dataset and adapting it to achieve superior performance over another dataset, thus mitigating the challenges of acquiring and training extensive facial expression datasets. It also reduces the risk of overfitting, making the models more effective across various real-world scenarios.",
    keywords: [
      "Obesity",
      "Classification",
      "Machine Learning",
      "Random Forest Regression",
      "Logistic Regression",
      "ML Classification",
      "Cross-validation",
      "predictive modelling.",
    ],
    link: "https://link.springer.com/chapter/10.1007/978-981-96-5607-3_16",
    status:
      "Part of the book series: Lecture Notes in Networks and Systems (LNNS,volume 1381)",
  },
  {
    id: 4,
    title:
      "Leveraging Ensemble Machine Learning: A Comparative Analysis for Enhanced Credit Card Fraud Detection",
    conference:
      "3rd International Conference on Disruptive Technologies (ICDT 2025)",
    date: "March 7, 2025",
    coauthors: [
      "Lavanya Sinha",
      "Nikita Kharb",
      "Renuka Agrawal",
      "Santhosh Phanitalpak Gandhala",
      "Usha A Jogalaker",
    ],
    abstract:
      "Credit card fraud poses a significant challenge in the financial sector, leading to monetary losses, reputational risks, and decreased consumer trust. Traditional fraud detection methods often fail to keep pace with evolving fraudulent tactics. This study explores real-time fraud detection by evaluating various machine learning techniques, including ensemble methods, KNN, decision trees, logistic regression, and SVM. Using a publicly available dataset that has both fraudulent and legitimate transactions, the models were assessed in the standard metrics while addressing the class imbalance issue. Key performance metrics such as recall, accuracy, precision, and F1-score were used for the evaluation. The study outlines the strengths and weaknesses of each model and suggests advanced deep learning techniques for further enhancement of Fraud Transaction Detection while taking the class imbalance in account. This study underscores the potential of machine learning in improving fraud detection by optimizing precision and recall, effectively reducing errors in practical applications.",
    keywords: [
      "Credit card fraud detection",
      "machine learning",
      "SVM",
      "Decision Tree",
      "Logistic Regression",
      "KNN",
      "Ensemble Methods",
      "precision",
      "recall",
      "F1-score",
    ],
    link: "https://ieeexplore.ieee.org/abstract/document/10986333",
    status:
      "IEEE Published in: 2025 3rd International Conference on Disruptive Technologies (ICDT)",
  },
  {
    id: 5,
    title:
      "Towards Context Aware and Age-Based Book Recommendation System using Machine Learning for Young Readers",
    conference:
      "2024 Fourth International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies (ICAECT)",
    date: "March 21, 2024",
    coauthors: [
      "Aniket Singh",
      "Santhosh Phanitalpak Gandhala",
      "Murhib Alahmar",
      "Pratik Gaikwad",
      "Upamanyu Wable",
      "Aman Yadav",
    ],
    abstract:
      "In an era characterized by an overwhelming abundance of digital content, the significance of personalized book recommendations for young readers cannot be overstated. This research paper introduces a pioneering Content-Based Age-Wise Book Recommendation System, which tackles the challenge of tailoring book suggestions to young audiences. Our system harnesses the power of K-Nearest Neighbors (KNN), Support Vector Machine (SVM), Decision Tree, and Naive Bayes techniques to provide intelligent book recommendations based on content while taking into account the user`s age category. The paper embarks on a comprehensive exploration of the system`s development journey, commencing with data acquisition and preprocessing to ensure the dataset`s quality and consistency. Through the utilization of the TF-IDF method, the textual content of books is translated into numerical features, enabling precise content-based analysis. A pivotal aspect of this research involves age group segmentation, a critical component that paves the way for personalized recommendations catering to distinct age categories, including children, teenagers, and young adults. Our research delves into the intricate workings of KNN, which measures book content similarity and is applied within each age group. Additionally, Support Vector Machine (SVM), a robust classification algorithm, classifies books into specific categories, allowing for personalized recommendations based on age and genre preferences. Decision Tree is introduced, offering transparency in decision-making, ensuring that users understand the rationale behind book recommendations. Naive Bayes, a probabilistic model, significantly enhances the system`s efficiency while considering age and genre. Furthermore, the paper highlights key findings, identifies areas for potential enhancement, and suggests promising avenues for future research. In sum, this research makes a substantial contribution to the ever-evolving realm of recommendation systems by focusing on the distinct needs of young readers.",
    keywords: [
      "Recommendation System",
      "Content-Based Filtering",
      "Age Group Segmentation",
      "K Nearest Neighbor",
      "Support Vector Machine",
    ],
    link: "https://ieeexplore.ieee.org/abstract/document/10469429",
    status:
      "IEEE Published in: 2024 Fourth International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies (ICAECT)",
  },
  {
    id: 6,
    title:
      "Enhancing Email Spam Detection through Ensemble Learning: A Combined Approach of LSTM and Neural Network",
    conference: "Asian Conference on Intelligent Technologies",
    date: "April 2, 2025",
    coauthors: [
      "Dr. Renuka Agrawal",
      "Tanya Muley",
      "Krit Sinha",
      "Gopika Sudheer",
      "Aryan Narayan",
      "Santhosh Phanitalpak Gandhala",
    ],
    abstract:
      "A powerful method for spotting spam messages, using neural networks with a focus on Long Short Term Memory (LSTM) technology is introduced. With the persistent problem of unwanted messages in digital communication, a dependable spam detection system is crucial. Traditional methods often struggle to keep up with evolving spamming tactics, calling for a flexible and adaptive solution. The suggested model employs a layered neural network design, incorporating LSTM cells to grasp time-based patterns in text data. This enables the model to recognize subtle clues in message content, leading to better accuracy in identifying spam. Extensive testing was carried out on a varied dataset containing both regular and spam messages, showing improved performance compared to standard methods. Moreover, the model shows strong adaptability, performing well across different message lengths and styles. By using embeddings and attention mechanisms, the model becomes even better at picking up on language cues that indicate spam. Empirical results demonstrate a noticeable increase in precision, recall, and F1-score, indicating the model`s effectiveness in distinguishing spam from legitimate messages. This approach represents a significant step forward in the field of spam detection, offering a reliable solution to tackle the ever-changing world of unwanted digital communication.",
    keywords: [
      "Machine learning",
      "Email Spam Detection",
      "Neural Networks",
      "LSTM",
      "Digital Communication.",
    ],
    link: "https://ieeexplore.ieee.org/abstract/document/10939250",
    status:
      "IEEE Published in: 2024 Asian Conference on Intelligent Technologies (ACOIT)",
  },
  {
    id: 7,
    title:
      "Enhancing Toxic Comment Classification with Multi-Label Capabilities: Leveraging BERT and RoBERTa Models",
    conference:
      "International Conference on Emerging Trends in Industry 4.0 Technologies",
    date: "June 6, 2025",
    coauthors: [
      "Sakshi Joshi",
      "Anindita Mukherjee",
      "Abhishek Anand",
      "Santhosh Phanitalpak Gandhala",
      "Usha A. Jogalekar",
      "Renuka Agrawal",
    ],
    abstract:
      "In recent years, the proliferation of multi-labeled sentiment text classification techniques, driven by machine learning, has been remarkable. This paper delves into a comprehensive comparative analysis of two cutting-edge models, BERT and RoBERTa, with a primary emphasis on evaluating their respective accuracies. The study aims to provide a conclusive assessment based on the research findings. The accuracy achieved by both BERT and RoBERTa, as discovered through rigorous evaluation, consistently falls within the range of 85% to 95%. The dataset is a combination of diverse categories, some of which are toxicity, insults, and obscenities, serving as the basis for classifying comments fetched from the Twitter source. The dataset consists of total of 34,000 tweets, ensuring the diversity and quantity required for comprehensive analysis of comments. The findings indicate distinctive characteristics of each model. RoBERTa emerges as the preferred choice for datasets of high volume , especially when backed by robust computational resources, yielding exceptionally robust results. On the other hand, BERT seems to give better results with smaller datasets, consistently delivering optimal and highly accurate outcomes. These nuanced insights provide valuable guidance for researchers and practitioners, offering a deeper understanding of when to leverage BERT or RoBERTa and under what conditions in the realm of multi-labeled sentiment text classification.",
    keywords: [
      "BERT",
      "RoBERTa",
      "Bidirectional Encoder Representations from Transformers (BERT)",
      "Robustly Optimized BERT Approach (RoBERTa)",
      "Machine Learning",
      "Multi-label sentiment classification",
      "toxic comment detection",
      "Twitter dataset",
      "deep learning",
      "sentiment analysis",
      "text classification",
      "NLP",
    ],
    link: "https://ieeexplore.ieee.org/abstract/document/11132248",
    status:
      "Published in 2025 International Conference on Emerging Trends in Industry 4.0 Technologies (ICETI4T)",
  },
  // {
  //   id: 0,
  //   title: 'text',
  //   conference: 'text',
  //   date: 'Month 00, 0000',
  //   coauthors: ['text', 'text'],
  //   abstract:
  //     'text',
  //   keywords: ['text', 'text'],
  //   link: 'link',
  //   status: 'text',
  // },
];
export type { ProjectType };
