import { ProjectType, SkillCategory } from '@/hooks/constants';

// hero section words
export const dynamicWords = ['Ideas', 'Robotic Interventions', 'Research Concepts', 'Automations'];

// timeline
export const timelineData = [
  {
    year: '2019',
    title: 'Intermediate Education',
    picture: ['icons/intermediate_black.png', 'icons/intermediate_white.png'],
    events: ['Completed Intermediate Education at SriChaitanya Junior College with 89.1%.'],
    color: 'cyan',
  },
  {
    year: '2020',
    title: 'B.Tech in Computer Science & Engineering',
    picture: ['icons/graduation_black.png', 'icons/graduation_white.png'],
    events: ['Started Bachelor of Technology in Computer Science & Engineering at Symbiosis Institute of Technology, Symbiosis Internal (Deemed University), Pune.'],
    color: 'amber',
  },
  {
    year: '2023',
    title: 'NGO Volunteer | Research | Japan Study Tour',
    picture: ['icons/japan_black.png', 'icons/japan_white.png'],
    events: ['Created a donor management system for Door Step School (MySQL, PHP).', 'Improved website performance and mobile responsiveness for NGO site.', 'Optimized WordPress backend for better content editing and responsive design.', 'Participated in a Japan study tour, attending lectures at Chiba University and Ritsumeikan University.', 'Presented papers in conferences: VISHWACON-2023, ICRIC-2023.'],
    color: 'rose',
  },
  {
    year: '2024',
    title: 'Internships | Robotics Integration | Publications',
    picture: ['icons/developer_black.png', 'icons/developer_white.png'],
    events: ['Interned at M/s Technospirit: supported RTL design and logic simulation using Verilog & Xilinx Vivado.', 'Refactored React.js frontend for internal R&D dashboard.', 'Developed reusable WordPress templates for Byline Learning Solutions, cutting deployment time by 40%.', 'Integrated robotics and embedded systems projects (Arduino/Raspberry Pi) featured in a nationally distributed project booklet.', 'Japan Study Tour (June 2024): Lectures at Chiba University and Ritsumeikan University.', 'Presented papers in conferences: ICAECT-2024, ACOIT-2024, ICDSM-2024.'],
    color: 'moss',
  },
  {
    year: '2025',
    title: 'Full Stack Development | SME-ICT | Conference Speaker',
    picture: ['icons/developer_002_black.png', 'icons/developer_002_white.png'],
    events: ['Built scalable WordPress CMS using PHP and JS.', 'Created robotics/embedded projects with simulations for the ICT Robotics chapter (adopted by 25+ institutions) and reviewed content as SME to ensure industry standards.', 'Presented papers in conferences: ICETI4T-2025.'],
    color: 'ocean',
  },
];

// timeline color map
export const colorMap = {
  cyan: {
    text: 'text-cyan-600 dark:text-cyan-300',
    border: 'border-cyan-600 dark:border-cyan-300',
    bg: 'bg-cyan-100/70 dark:bg-cyan-900/70',
  },
  amber: {
    text: 'text-amber-600 dark:text-amber-300',
    border: 'border-amber-600 dark:border-amber-300',
    bg: 'bg-amber-100/70 dark:bg-amber-900/70',
  },
  rose: {
    text: 'text-rose-600 dark:text-rose-300',
    border: 'border-rose-600 dark:border-rose-300',
    bg: 'bg-rose-100/70 dark:bg-rose-900/70',
  },
  moss: {
    text: 'text-lime-600 dark:text-lime-300',
    border: 'border-lime-600 dark:border-lime-300',
    bg: 'bg-lime-100/70 dark:bg-lime-900/70',
  },
  ocean: {
    text: 'text-sky-600 dark:text-sky-300',
    border: 'border-sky-600 dark:border-sky-300',
    bg: 'bg-sky-100/70 dark:bg-sky-900/70',
  },
};

// timeline arrow classes
export const arrowClasses = {
  cyan: {
    left: 'border-l-cyan-600 dark:border-l-cyan-300',
    right: 'border-r-cyan-600 dark:border-r-cyan-300',
  },
  amber: {
    left: 'border-l-amber-600 dark:border-l-amber-300',
    right: 'border-r-amber-600 dark:border-r-amber-300',
  },
  rose: {
    left: 'border-l-rose-600 dark:border-l-rose-300',
    right: 'border-r-rose-600 dark:border-r-rose-300',
  },
  moss: {
    left: 'border-l-lime-600 dark:border-l-lime-300',
    right: 'border-r-lime-600 dark:border-r-lime-300',
  },
  ocean: {
    left: 'border-l-sky-600 dark:border-l-sky-300',
    right: 'border-r-sky-600 dark:border-r-sky-300',
  },
};

// research interests
export const researchInterests = {
  'Artificial Intelligence & Machine Learning': ['Machine Learning Models', 'Deep Learning Techniques', 'Artificial Intelligence Systems'],
  'Computer Vision & Robotics': ['Computer Vision Applications', 'Robotics and Intelligent Systems', 'Autonomous Robotic Interventions'],
  'Human-Centered Computing': ['Human-Centered UI/UX Design', 'Interaction Design for Intelligent Systems'],
};

// professionla experience
export const professionalExperiences = [
  {
    title: 'Software Developer Intern | Full Stack Developer | SME-ICT',
    company: 'Byline Learning Solutions LLP., Pune.',
    description: ['Built reusable WordPress components with PHP and JS.', 'Developed educational robotics modules for classrooms.', 'Built scalable CMS and improved deployment efficiency by 40%.'],
  },
  {
    title: 'Frontend Developer Intern',
    company: 'M/s Technospirit, Hyderabad.',
    description: ['Optimized frontend component rendering using React and TailwindCSS.', 'Collaborated with VLSI design team to model frontend simulations.', 'Supported RTL design and logic simulation using Verilog & Xilinx Vivado.'],
  },
  {
    title: 'Full Stack Developer | Volunteer',
    company: 'Door Step School (NGO), Pune',
    description: ['Created a donor management system for tracking contributions.', 'Improved website performance and mobile responsiveness.'],
  },
  {
    title: 'Student Researcher',
    company: 'Symbiosis International (Deemed University), Pune',
    description: ['Conducted research in AI, machine learning, and robotics.', 'Collaborated with interdisciplinary teams to develop tech solutions.', 'Published research findings in top-tier journals and conferences like IEEE & Springer.'],
  },
];

export const achievements = [
  {
    title: 'Academic & Research',
    description: ['Presented and published multiple research papers on innovative ML models.', 'Featured in reputed journals like IEEE and Springer.', 'Published impactful work at conferences like ICRIC, exploring AI, ML, and IoT integration.'],
  },
  {
    title: 'Technical Contributions',
    description: ['Led full-stack projects in Robotics, IoT, Cloud, and Embedded Systems.', 'Built custom ML pipelines for NLP, Computer Vision, and Deep Learning.'],
  },
  {
    title: 'Awards & Recognition',
    description: ['Recognized as a student researcher at Symbiosis Institute of Technology.', 'Awarded for technical leadership in academic and project domains.', 'Represented India in the Symbiosis Japan Study Tour focused on robotics and smart systems.'],
  },
];

// skills

export const skillCategories: SkillCategory[] = [
  {
    name: 'Academia & Research',
    subcategories: [
      {
        name: 'Machine Learning & AI',
        skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Computer Vision', 'Natural Language Processing (NLP)', 'Data Analysis', 'Model Deployment'],
      },
      {
        name: 'Image & Video Processing',
        skills: ['OpenCV', 'Computer Vision'],
      },
      {
        name: 'Scientific & Academic Skills',
        skills: ['Scientific Writing', 'Research Methodology', 'API Documentation'],
      },
    ],
  },
  {
    name: 'Technical Skills',
    subcategories: [
      {
        name: 'Programming Languages',
        skills: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C++', 'SQL', 'HTML5', 'CSS3', 'Shell Scripting', 'Bash'],
      },
      {
        name: 'Frameworks & Libraries',
        skills: ['React', 'Node.js', 'Express.js', 'Flask', 'Django', 'Tailwind CSS', 'Bootstrap'],
      },
      {
        name: 'Development Tools',
        skills: ['Git & GitHub', 'Postman', 'VS Code', 'IntelliJ', 'Figma'],
      },
      {
        name: 'Cloud & DevOps',
        skills: ['AWS', 'Google Cloud Platform (GCP)', 'Firebase', 'Vercel', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD Pipelines'],
      },
      {
        name: 'Operating Systems',
        skills: ['Linux/Unix'],
      },
      {
        name: 'Development Stacks',
        skills: ['MERN Stack', 'LAMP Stack', 'JAMstack', 'SpringBoot'],
      },
    ],
  },
  {
    name: 'Designing & Other Skills',
    subcategories: [
      {
        name: 'Languages',
        skills: ['English (Business Fluent)', 'Japanese (JLPT N5)', 'Hindi (Fluent)', 'Telugu (Native)'],
      },
      {
        name: 'Soft Skills',
        skills: ['Problem Solving', 'Communication', 'Collaboration', 'Adaptability', 'Time Management'],
      },
      {
        name: 'Graphic & Visual Design',
        skills: ['Logo Design', 'Banner & Poster Design', 'Typography', 'Color Theory'],
      },
      {
        name: 'Digital Illustration',
        skills: ['Procreate (iOS)', 'Paper Art'],
      },
      {
        name: '3D & CAD Modeling',
        skills: ['Blender 3D', 'Computer-Aided Design (CAD)'],
      },
      {
        name: 'Presentation & UI Tools',
        skills: ['Apple Keynote', 'Figma (Basic)'],
      },
    ],
  },
];

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
    title: 'Arduino Quad Copter Drone',
    description: 'A quadcopter drone developed using Arduino as the MCU and other components (brushless DC motors, LiPo battery, GYRO scope, Accelometer,...etc.)',
    tags: ['Arduino', 'Robotics', 'Drone'],
    image: 'projects/arduino-quadcopter.jpg',
    github: '',
    live: '',
    type: ['Robotics', 'Personal Projects', 'IoT'],
  },
  {
    id: 2,
    title: 'Post-Retirement Job/Hobby Suggestion Web App based on ML Model',
    description: 'A web application that uses machine learning to suggest post-retirement job and hobby options based on individual preferences and skills.',
    tags: ['Machine Learning', 'Web Development', 'Python', 'AI'],
    image: 'projects/post-retirement.png',
    github: '',
    live: '',
    type: ['Software Development', 'Machine Learning', 'Personal Projects'],
  },
  {
    id: 3,
    title: 'Flight Fare Prediction using Random Forest Regression',
    description: 'Machine learning model built using random forest regression to predict flight fare for better travel planning.',
    tags: ['Python', 'Machine Learning', 'Random Forest', 'Aviation Safety'],
    image: 'projects/flight-prices.png',
    github: 'https://github.com/gsphanitalpak/IDS/tree/main',
    live: '',
    type: ['Machine Learning', 'Software Development', 'Academic Research'],
  },
  {
    id: 4,
    title: 'Banking Chatbot with Design Thinking Principles',
    description: 'Developed a banking chatbot incorporating design thinking principles, including customer journey mapping and PESTLE analysis.',
    tags: ['Chatbot', 'Design Thinking', 'UX/UI Design', 'Banking'],
    image: 'projects/banking-bot.png',
    github: '',
    live: '',
    type: ['Software Development', 'Client Projects', 'Design Projects'],
  },
  {
    id: 5,
    title: 'Smart Driver Drowsiness Detection & Alerting System (IoT)',
    description: 'An IoT-based driver drowsiness detection system, with real-time monitoring using IR sensor and alerting GSM module controlled by Arduino UNO to prevent accidents.',
    tags: ['IoT', 'Machine Learning', 'Drowsiness Detection'],
    image: 'projects/driver-drowsiness-iot.png',
    github: 'https://github.com/gsphanitalpak/iot-smart-driver-drowsiness-detection',
    live: '',
    type: ['Robotics', 'Machine Learning', 'IoT', 'Personal Projects'],
  },
  {
    id: 6,
    title: 'Blender 3D Robot with Simple Animation',
    description: 'A 3D animated robot created in Blender, featuring basic transformations and simple animations.',
    tags: ['Blender', '3D Modeling', 'Animation', 'Design'],
    image: 'projects/blender-rotot.png',
    github: '',
    live: '',
    type: ['Design Projects', 'Personal Projects'],
  },
  {
    id: 7,
    title: 'StressSense: An IoT-Enabled Platform for Stress Level Prediction & Prevention',
    description: 'An IoT-enabled platform designed for real-time stress level monitoring and prevention integrating IoT, machine learning and mobile application integration with swifyUI.',
    tags: ['IoT', 'Machine Learning', 'Mobile App', 'Stress Detection', 'UI/UX', 'iOS Development'],
    image: 'Projects/stresssense.png',
    github: 'https://github.com/gsphanitalpak/stresssense.git',
    live: '',
    type: ['Academic Research', 'Software Development', 'Mobile Applications', 'Machine Learning', 'Personal Projects'],
  },
  {
    id: 8,
    title: 'Door Step School NGO Donor Management System',
    description: 'Website setup in  WordPress CMS and a donor management system for the Door Step School NGO built using MySQL, facilitating efficient tracking of donations and donor information.',
    tags: ['WordPress', 'MySQL', 'CMS', 'Web Development'],
    image: 'projects/doorstepschool.png',
    github: 'https://github.com/santhosh/door-step-school',
    live: 'https://door-step-school-link.com',
    type: ['Software Development', 'Client Projects'],
  },
  {
    id: 9,
    title: 'Poster and Banner Design for Convocation Event',
    description: 'Designed posters and banners for a convocation event for MBBS doctors, including layout design and visual representation.',
    tags: ['Graphic Design', 'Event Design', 'Visual Art'],
    image: 'projects/adhvaya.png',
    github: '',
    live: 'https://drive.google.com/drive/folders/1EVRO53Tsbc9ujxX0wFspToPDItDfIdZF?usp=share_link',
    type: ['Design Projects', 'Personal Projects'],
  },
  {
    id: 10,
    title: 'Personal Logo and Illustration Works',
    description: 'A collection of personal logo designs and illustrations, showcasing creativity and branding expertise.',
    tags: ['Graphic Design', 'Illustration', 'Branding'],
    image: 'projects/illustration-personal.png',
    github: 'https://github.com/santhosh/logo-illustrations',
    live: 'https://drive.google.com/file/d/1J5HXf3qvpE-AjihYLNW-19wQykxb2a1Q/view?usp=sharing',
    type: ['Design Projects', 'Personal Projects'],
  },
  {
    id: 11,
    title: 'Flask Art Portfolio',
    description: 'A Flask web application showcasing an art portfolio, featuring a contact form with backend CRUD operations using SQLite database.',
    tags: ['Flask', 'SQLite', 'Backend Development', 'Portfolio', 'Minor Projects'],
    image: 'projects/art-portfolio.png',
    github: 'https://github.com/santhosh/flask-art-portfolio',
    live: '',
    type: ['Software Development', 'Personal Projects', 'Client Projects'],
  },

  {
    id: 12,
    title: 'Java Homework Planner',
    description: 'A JavaFX-based homework planner with a simple UI and SQLite database to manage tasks by priority and deadlines.',
    tags: ['Java', 'JavaFX', 'SQLite', 'Task Management', 'Minor Projects'],
    image: 'projects/java-homework-planner.png',
    github: 'https://github.com/santhosh/java-homework-planner',
    live: '',
    type: ['Software Development', 'Minor Projects', 'Client Projects'],
  },

  {
    id: 13,
    title: 'Notes App with AWS Integration',
    description: 'A simple HTML, CSS, and JavaScript notes application integrated with AWS S3 for cloud storage of created notes.',
    tags: ['HTML', 'CSS', 'JavaScript', 'AWS S3', 'Cloud Integration'],
    image: 'projects/notes-app.png',
    github: 'https://github.com/gsphanitalpak/aws-notes-app.git',
    live: 'http://aws-notes-app-bucket-001.s3-website.eu-north-1.amazonaws.com/',
    type: ['Web Development', 'Personal Projects', 'Minor Projects'],
  },
  {
    id: 14,
    title: 'Facial Recognition Flask App',
    description: 'A simple flask app that uses pretrained & saved  model, with simple interactive UI identifies and displays the prediction made',
    tags: ['Python', 'Scikit-learn', 'SVM', 'ML', 'Flask', 'UI/UX'],
    image: 'projects/facial-recognition-flask.png',
    github: 'https://github.com/gsphanitalpak/facial-recognition-flask-app',
    live: '',
    type: ['Machine Learning', 'Personal Projects', 'Web Development'],
  },

  {
    id: 15,
    title: 'Facial Recognition ML Model using SVM',
    description: 'A machine learning model for facial recognition using SVM, trained on encoded facial images to accurately identify individuals.',
    tags: ['Python', 'Scikit-learn', 'SVM', 'ML'],
    image: 'projects/facial-recognition.jpg',
    github: 'https://github.com/gsphanitalpak/ml-face-recognition-svm',
    live: '',
    type: ['Machine Learning', 'Personal Projects', 'Minor Projects'],
  },
  {
    id: 16,
    title: 'Byline Learning Solution LLP Portfolio',
    description: 'A professional portfolio website for Byline Learning Solution LLP, built using PHP and WordPress CMS, showcasing their services and solutions.',
    tags: ['PHP', 'WordPress', 'CMS', 'Web Development'],
    image: 'projects/byline.png',
    github: '',
    live: 'https://web-dev.bylinelms.com',
    type: ['Software Development', 'Client Projects'],
  },
  {
    id: 17,
    title: 'Personal Portfolio',
    description: 'A modern, interactive portfolio built using Vite, TypeScript, React, Tailwind CSS, and Shadcn-UI to showcase skills, and projects.',
    tags: ['Vite', 'TypeScript', 'React', 'Shadcn-UI', 'Tailwind CSS', 'Web Development'],
    image: 'projects/portfolio.jpg',
    github: 'https://github.com/santhosh/portfolio',
    live: 'https://gsphanitalpak.github.io/gsphanitalpak-portfolio/',
    type: ['Software Development', 'Personal Projects'],
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
    title: 'StressSense: an IoT enabled platform for stress level prediction, prevention and methods there of',
    conference: 'International Conference on Recent Innovations in Computing (ICRIC-2023 Volume 2)',
    date: 'August 9, 2023',
    coauthors: ['Dr. Renuka Agrawal', 'Santhosh P. Gandhala'],
    abstract:
      'As eloquently articulated by the esteemed sociologist and writer Chelsea Erieau, stress is a dynamic force, akin to an accelerator that exerts its influence, invariably driving individuals either forward or backward. In our contemporary world, which evolves at a pace akin to the speed of light, the challenge of maintaining equilibrium while juggling myriad responsibilities is a daunting task. This proposed project emerges as a beacon of hope, offering a sophisticated and highly effective solution for the detection and management of stress levels. It harnesses the power of cutting-edge physiological sensors, encompassing a pulse sensor, a Galvanic Skin Response (GSR) sensor, a body temperature sensor, and an array of other essential data sources. In conjunction with this, it introduces a user-centric web application interface that has been meticulously crafted for the real-time analysis of sensor data, representing a revolutionary step forward in stress management. This interface leverages the prowess of advanced machine learning (ML) libraries and techniques, including renowned platforms like TensorFlow and PyTorch for deep learning, regression models, and scikit-learn for ensemble learning, as well as kNN models. This project aims to empower individuals to manage stress proactively. It provides a dynamic and robust platform to monitor physiological responses and offer personalized recommendations. This user-centric approach empowers individuals to navigate the challenges of stress and achieve well-being. This innovative solution marks a significant shift towards personalized stress management, offering a lifeline to individuals seeking to mitigate the negative impacts of stress and lead a healthier, balanced life.',
    keywords: ['Stress Prediction', 'IOT', 'Mental Health', 'stress prevention', 'ML in healthcare.'],
    link: 'https://link.springer.com/book/9789819734412',
    status: 'Published',
  },
  {
    id: 2,
    title: 'A Comparative analysis in Supervised Machine Learning Approaches for Flight Fare Prediction Enabling customers to make Informative Decision',
    conference: 'VISHWACON2023: Track-X:Energy and Sustainable Development',
    date: 'November 24, 2023',
    coauthors: ['Dr. Renuka Agrawal', 'Santhosh P. Gandhala'],
    abstract:
      'The contemporary developments in globalization and automation have made a significant impact on scientific progress. Data plays a pivotal role in this, akin to how the internet has transformed various sectors globally, resulting in a substantial increase in the flow of data worldwide. This surge in data has particularly affected organizations, notably airlines, which now possess more real-time data than ever before. As a consequence, the ability to plan and accurately predict travel budgets has become increasingly challenging due to the volatile nature of air ticket prices. The dynamic pricing of airfares is influenced by numerous factors, including user flight searches and fluctuations in demand. The primary objective of this research is to judge different Supervised Leaning methods and techniques that leverages historical airfare data analysis to provide accurate forecasts for flight prices and introduce a close to ideal Machine Learning Model. Such forecasts can empower travelers to make well-informed decisions about their travel plans. Additionally, we propose the development of a Flight Fare prediction application that enables users to browse fares from various airlines and make bookings at the most competitive prices. Our aim is to delve into past airfare trends, identify potential patterns, and offer reliable estimates for flight fares across different airlines. Airlines employ sophisticated revenue management techniques to maximize their earnings, often resulting in higher last-minute ticket prices as they compete for the same customer base on multiple flights between the same destinations. Our primary focus is on exploring flight fare prediction using a wide range of Machine Learning techniques focusing on Supervised Learning models and an appropriately designed dataset. We will employ necessary Exploratory Data Analysis methods to extract valuable insights from features such as airline choice, stops, destination, and duration.',
    keywords: ['Flight fare prediction', 'Machine Learning Models', 'Exploratory Data Analysis', 'Revenue Management', 'Supervised Learning models'],
    link: '',
    status: 'Under Review',
  },
  {
    id: 3,
    title: 'Enhancing Email Spam Detection through Ensemble Learning: A Combined Approach of LSTM and Neural Network',
    conference: 'Asian Conference on Intelligent Technologies',
    date: 'September 6, 2024',
    coauthors: ['Dr. Renuka Agrawal', 'Tanya Muley', 'Krit Sinha', 'Gopika Sudheer', 'Aryan Narayan', 'Santhosh P. Gandhala'],
    abstract:
      'A powerful method for spotting spam messages, using neural networks with a focus on Long Short Term Memory (LSTM) technology is introduced. With the persistent problem of unwanted messages in digital communication, a dependable spam detection system is crucial. Traditional methods often struggle to keep up with evolving spamming tactics, calling for a flexible and adaptive solution. The suggested model employs a layered neural network design, incorporating LSTM cells to grasp time-based patterns in text data. This enables the model to recognize subtle clues in message content, leading to better accuracy in identifying spam. Extensive testing was carried out on a varied dataset containing both regular and spam messages, showing improved performance compared to standard methods. Moreover, the model shows strong adaptability, performing well across different message lengths and styles. By using embeddings and attention mechanisms, the model becomes even better at picking up on language cues that indicate spam. Empirical results demonstrate a noticeable increase in precision, recall, and F1-score, indicating the model`s effectiveness in distinguishing spam from legitimate messages. This approach represents a significant step forward in the field of spam detection, offering a reliable solution to tackle the ever-changing world of unwanted digital communication.',
    keywords: ['Machine learning', 'Email Spam Detection', 'Neural Networks', 'LSTM', 'Digital Communication.'],
    link: 'https://ieeexplore.ieee.org/abstract/document/10939250',
    status: 'IEEE Published',
  },
  {
    id: 4,
    title: 'Towards Context Aware and Age-Based Book Recommendation System using Machine Learning for Young Readers',
    conference: '2024 Fourth International Conference on Advances in Electrical, Computing, Communication and Sustainable Technologies (ICAECT)',
    date: 'November 1, 2024',
    coauthors: ['Aniket Singh', ' Santhosh Phanitalpak Gandhala', ' Murhib Alahmar', ' Pratik Gaikwad', ' Upamanyu Wable', ' Aman Yadav'],
    abstract:
      'In an era characterized by an overwhelming abundance of digital content, the significance of personalized book recommendations for young readers cannot be overstated. This research paper introduces a pioneering Content-Based Age-Wise Book Recommendation System, which tackles the challenge of tailoring book suggestions to young audiences. Our system harnesses the power of K-Nearest Neighbors (KNN), Support Vector Machine (SVM), Decision Tree, and Naive Bayes techniques to provide intelligent book recommendations based on content while taking into account the user`s age category. The paper embarks on a comprehensive exploration of the system`s development journey, commencing with data acquisition and preprocessing to ensure the dataset`s quality and consistency. Through the utilization of the TF-IDF method, the textual content of books is translated into numerical features, enabling precise content-based analysis. A pivotal aspect of this research involves age group segmentation, a critical component that paves the way for personalized recommendations catering to distinct age categories, including children, teenagers, and young adults. Our research delves into the intricate workings of KNN, which measures book content similarity and is applied within each age group. Additionally, Support Vector Machine (SVM), a robust classification algorithm, classifies books into specific categories, allowing for personalized recommendations based on age and genre preferences. Decision Tree is introduced, offering transparency in decision-making, ensuring that users understand the rationale behind book recommendations. Naive Bayes, a probabilistic model, significantly enhances the system`s efficiency while considering age and genre. Furthermore, the paper highlights key findings, identifies areas for potential enhancement, and suggests promising avenues for future research. In sum, this research makes a substantial contribution to the ever-evolving realm of recommendation systems by focusing on the distinct needs of young readers.',
    keywords: ['Recommendation System', 'Content-Based Filtering', 'Age Group Segmentation', 'K Nearest Neighbor', 'Support Vector Machine'],
    link: 'https://ieeexplore.ieee.org/abstract/document/10469429',
    status: 'IEEE Published',
  },
  {
    id: 5,
    title: 'Harnessing Predictive Analytics and Machine Learning for Early Obesity Detection: A Multi-Factorial Assessment and Personalized Intervention Framework',
    conference: 'Third International Conference on Data Science and Management (ICDSM 2024)',
    date: 'December 13, 2024',
    coauthors: ['Renuka Agrawal', 'Santhosh Phanitalpak Gandhala', 'Mahak Gupta', 'Krishnaa Shah'],
    abstract:
      'Obesity has emerged as a leading non-communicable disease, contributing to global health challenges due to its association with conditions such as diabetes, cardiovascular diseases, and hypertension. Early identification of obesity levels is crucial for effective prevention and treatment. This research applies machine learning techniques to classify individuals obesity levels based on dietary habits, lifestyle choices, and physical attributes. Using a comprehensive dataset that includes features such as age, height, weight, family history, and physical activity, we implement two classification models: Random Forest and Logistic Regression. The dataset undergoes pre-processing, including label encoding and standardization of quantitative features. Random Forest is selected for its superior handling of high-dimensional data, while Logistic Regression offers interpretability. Model performance is evaluated using metrics such as accuracy, confusion matrix, receiver operating characteristic (ROC) curve, area under the curve (AUC), and a classification report. Cross-validation is also performed to identify key factors influencing obesity classification. The results provide healthcare professionals with actionable insights for early obesity detection and intervention, ultimately contributing to improved health outcomes.',
    keywords: ['Obesity', 'Classification', 'Machine Learning', 'Random Forest Regression', 'Logistic Regression', 'ML Classification', 'Cross-validation', 'predictive modelling.'],
    link: '',
    status: 'Accepted',
  },
  {
    id: 6,
    title: 'Leveraging Ensemble Machine Learning: A Comparative Analysis for Enhanced Credit Card Fraud Detection',
    conference: '3rd International Conference on Disruptive Technologies (ICDT 2025)',
    date: 'March 7, 2025',
    coauthors: ['Lavanya Sinha', 'Nikita Kharb', 'Renuka Agrawal', 'Santhosh Phanitalpak Gandhala'],
    abstract:
      'In the financial sector, credit card fraud is a serious problem since it can result in significant losses in terms of money, harm to ones reputation and a decline in consumer confidence. Traditional rules-based fraud detection systems could not keep up with the volume of online transactions and the increasing sophistication of fraudulent activity. This project aimed at a real-time fraudulent transaction detection study while comparing the differences between various machine-learning techniques. This study evaluates several models, including ensemble methods, KNN, decision trees, logistic regression, and SVM. Each model has been trained and evaluated using a publicly available credit card transaction dataset, including fraudulent and valid transactions, to account for the inherent class imbalance between fraud and non-fraud situations. Essential performance measures like recall, accuracy, precision, and F1-score were used to evaluate how well the models worked. According to the results, the SVM had the best precision (1.0), demonstrating its capacity to reduce false positives, and the F1-score of 0.925 reflected a compromise between recall and precision. However, the Ensemble model performed better than the rest by achieving higher accuracy over the whole scenario, covering both fraud and non-fraud cases at 93%. The most reliable model will, therefore, be Ensemble. The study discusses the shortcomings of each paradigm and gives a comparative evaluation of them. The paper further describes how the improved performance of the models could be made using advanced techniques like deep learning. Thus, the research proves the advantages of machine learning for credit card fraud detection concerning precision and recall- the two most significant metrics in real-world implementation, minimizing false positives and negatives.',
    keywords: ['Credit card fraud detection', 'machine learning', 'SVM', 'Decision Tree', 'Logistic Regression', 'KNN', 'Ensemble Methods', 'precision', 'recall', 'F1-score'],
    link: '',
    status: 'Presented',
  },
  {
    id: 7,
    title: 'Enhancing Toxic Comment Classification with Multi-Label Capabilities: Leveraging BERT and RoBERTa Models',
    conference: 'International Conference on Emerging Trends in Industry 4.0 Technologies',
    date: 'June 6, 2025',
    coauthors: ['Sakshi Joshi', 'Anindita Mukherjee', 'Abhishek Anand', 'Santhosh Phanitalpak Gandhala', 'Usha A. Jogalekar'],
    abstract:
      'In recent years, the proliferation of multi-labeled sentiment text classification techniques, driven by machine learning, has been remarkable. This paper delves into a comprehensive comparative analysis of two cutting-edge models, BERT and RoBERTa, with a primary emphasis on evaluating their respective accuracies. The study aims to provide a conclusive assessment based on the research findings. The accuracy achieved by both BERT and RoBERTa, as discovered through rigorous evaluation, consistently falls within the range of 85% to 95%. The dataset is a combination of diverse categories, some of which are toxicity, insults, and obscenities, serving as the basis for classifying comments fetched from the Twitter source. The dataset consists of total of 34,000 tweets, ensuring the diversity and quantity required for comprehensive analysis of comments. The findings indicate distinctive characteristics of each model. RoBERTa emerges as the preferred choice for datasets of high volume , especially when backed by robust computational resources, yielding exceptionally robust results. On the other hand, BERT seems to give better results with smaller datasets, consistently delivering optimal and highly accurate outcomes. These nuanced insights provide valuable guidance for researchers and practitioners, offering a deeper understanding of when to leverage BERT or RoBERTa and under what conditions in the realm of multi-labeled sentiment text classification.',
    keywords: ['BERT', 'RoBERTa', 'Bidirectional Encoder Representations from Transformers (BERT)', 'Robustly Optimized BERT Approach (RoBERTa)', 'Machine Learning', 'Multi-label sentiment classification', 'toxic comment detection', 'Twitter dataset', 'deep learning', 'sentiment analysis', 'text classification', 'NLP'],
    link: '',
    status: 'To be Presented',
  },
];
export type { ProjectType };
