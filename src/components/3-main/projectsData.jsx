export const allProjectsData = [
  {
    // Unique ID used for URL navigation: /project/ascend-quran
    id: "ascend-quran",
    projectTitle: "AscendQuran Academy",
    imgPath: "./images/ascend quran/Main.png",
    detailImageFolder: "images/ascend quran",
    category: ["Laravel", "MySQL", "Bootstrap"],

    // --- Detail Page Data ---
    type: "Quran Memorization Academy",
    description: "A comprehensive platform for a Quran memorization academy with dashboards for students, teachers, parents, and admins.",
    longDescription: "AscendQuran is a complete academy management system designed to facilitate Quran memorization. It features dedicated dashboards for all stakeholders: Admins manage general settings and users; Teachers track attendance and upload resources; Parents monitor their children's progress; and Students access learning materials and schedules. The system also handles financial aspects like teacher salaries and payment notifications.",
    contributions: [
      "Developed Admin dashboard for full system management",
      "Implemented Teacher dashboard with salary calculation",
      "Created Parent dashboard for student tracking",
      "Built Student portal for resources and schedules",
      "Implemented attendance and reporting system"
    ],
    technologies: [
      "Laravel", "MySQL", "Bootstrap", "JavaScript",
      "Blade Templates", "Authentication", "Role-Based Access"
    ],
    features: [
      "Multi-role authentication (Admin, Teacher, Parent, Student)",
      "Automated salary calculation",
      "Attendance and absence tracking",
      "Performance reporting system",
      "Learning resource management",
      "Detailed dashboards for all users"
    ],
    link: "https://ascendquran.com/"
  },
  {
    // Unique ID used for URL navigation: /project/replay-store
    id: "replay-store",
    projectTitle: "Replay Store E-commerce",
    imgPath: "./images/3.png",
    detailImageFolder: "images/replay",

    // Filtering categories based on user request
    category: ["Laravel", "JavaScript", "MySQL"],

    // --- Detail Page Data ---
    type: "Freelance E-commerce Project",
    description: "An online shoe store built with Bootstrap, JavaScript, and Laravel.",
    longDescription: "Replay Store is my first freelance project, a fully functional e-commerce website for selling shoes online. I developed both the frontend (Bootstrap/JS) and backend (Laravel). The platform allows customers to browse products, add them to the cart, and place orders, while administrators can manage the store’s products and track customer orders.",
    contributions: [
      "Developed a responsive frontend using Bootstrap and JavaScript",
      "Built the backend with Laravel to handle products and orders",
      "Implemented shopping cart functionality",
      "Designed the checkout process",
      "Created admin dashboard for managing products and orders"
    ],
    technologies: [
      "Laravel 12", "Bootstrap", "JavaScript", "MySQL",
      "Blade Templates", "Authentication", "Admin Dashboard"
    ],
    features: [
      "Product catalog with categories", "Shopping cart functionality",
      "Secure checkout process", "Order management system",
      "Admin panel for store management"
    ],
    link: ""
  },
  {
    // Unique ID used for URL navigation: /project/medical-app
    id: "medical-app",
    projectTitle: "Medical App Platform",
    imgPath: "./images/2.png",
    detailImageFolder: "images/medical",
    category: ["Laravel", "MySQL", "PHP"],

    // --- Detail Page Data ---
    type: "Healthcare Platform",
    description: "A comprehensive medical application that bridges the gap between patients and healthcare providers through digital solutions.",
    longDescription: "This medical platform serves as a complete healthcare ecosystem, enabling patients to browse medications, book appointments, chat with doctors, and access hospital information all in one place. Key technologies include Laravel, MySQL, and real-time WebSocket integration.",
    contributions: [
      "Built medication browsing system", "Developed order management",
      "Implemented doctor appointment booking system",
      "Created real-time chat functionality", "Integrated hospital information system",
      "Implemented Stripe and Fawry payment gateways"
    ],
    technologies: ["Laravel", "WebSocket", "Real-time Chat", "Stripe", "Fawry", "Notification System", "Calendar Integration", "PHP", "MySQL"],
    features: [
      "Medication catalog with search functionality", "Doctor appointment booking",
      "Real-time chat", "Hospital directory", "Prescription management",
      "Payment processing", "Push notifications"
    ],
    link: "https://github.com/mostafaelkholy50/Medical-App"
  },
  {
    // Unique ID used for URL navigation: /project/ecommerce-clothing
    id: "ecommerce-clothing",
    projectTitle: "E-Commerce Backend API",
    imgPath: "./images/1.png",
    detailImageFolder: "images/ecommerce-app",
    category: ["PHP", "Laravel", "MySQL"],

    // --- Detail Page Data ---
    type: "Clothing Store Backend",
    description: "Backend infrastructure for a modern online clothing store with advanced categorization and user management features.",
    longDescription: "This e-commerce backend provides the foundation for a clothing retail platform, focusing on scalable architecture and secure user management, built entirely using PHP (Laravel) and MySQL.",
    contributions: [
      "Designed and implemented product category system",
      "Built comprehensive user authentication and authorization system",
      "Developed secure payment API endpoints",
      "Created product management system with variants"
    ],
    technologies: ["PHP", "Laravel", "MySQL", "API Development", "Authentication", "Payment APIs"],
    features: [
      "Hierarchical product categories", "User authentication and profiles",
      "Secure payment processing", "Product variants management",
      "Order history tracking", "API-first architecture"
    ],
    link: "https://github.com/mostafaelkholy50/Ecommerce-App"
  },
  {
    // Unique ID used for URL navigation: /project/university-website
    id: "university-website",
    projectTitle: "University Management System",
    imgPath: "./images/4.png",
    detailImageFolder: "images/university",
    category: ["Laravel", "MySQL", "CSS"],

    // --- Detail Page Data ---
    type: "Educational Platform",
    description: "A complete university management system designed to handle courses, professors, and student administration efficiently.",
    longDescription: "This educational platform serves as a comprehensive solution for university administration, providing tools for course management, professor profiles, and student information systems, featuring custom frontend CSS and Laravel backend.",
    contributions: [
      "Developed course management system with enrollment capabilities",
      "Built professor profile system",
      "Created student management dashboard",
      "Implemented course scheduling and timetable management",
      "Built grade management system"
    ],
    technologies: ["Laravel", "Database Design", "User Management", "Academic Systems", "Role-based Access Control", "CSS", "MySQL"],
    features: [
      "Course catalog and management", "Professor profiles and assignments",
      "Student enrollment system", "Academic record management",
      "Timetable and scheduling", "Grade management system"
    ],
    link: "https://github.com/mostafaelkholy50/university"
  }
];

export const filterCategories = ["PHP", "Laravel", "MySQL"];