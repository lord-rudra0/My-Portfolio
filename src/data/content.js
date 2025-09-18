// import { image } from "framer-motion/client";

export const content = {
  about: {
    shortBio: `I am a passionate web developer driven by problem-solving and a deep love for mathematics.I thrive on building end-to-end solutions that are scalable, sustainable, and impactful, blending technical innovation with social responsibility.`,
    fullBio: `I am a passionate web and app developer currently studying Computer Science at Amal Jyothi College of Engineering.My goal is to create user-centered solutions that are both functional and visually appealing.I hold a B.Sc. in Mathematics and Physics from Awadh University, Ayodhya.With a strong foundation in programming, problem-solving, mathematics, and Physics,I am always eager to learn new technologies to enhance my skills.`,
    experience: [
      {
        title: "Senior Full Stack Developer",
        company: "Tech Solutions Inc.",
        period: "2020 - Present",
        description: "Leading development of enterprise web applications using React and Node.js"
      }
    ]
  },
  education: [
    {
      degree: "Bachelor of Science in Mathematics and Physics ",
      College: "Awadh University, Ayodhya",
      year: "2020-2023",
      description: "Specialized in Mathematics and Physics with optional of Cryptography and Number Theory."
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      College: "Amal Jyothi College of Engineering and Technology",
      year: "2022-2026",
      description: "Currently pursuing Computer Science with focus on software development, data structures, algorithms, and modern web technologies."
    },
    {
      degree: "Full Stack Web Development",
      school: "Udemy",
      year: "2024",
      description: "Intensive Web Development program covering full-stack web development."
    },
    {
      degree: "Android App Development using Kotlin",
      school: "Udemy",
      year: "2025",
      description: "Comprehensive course on Android app development using Kotlin, focusing on building modern, user-friendly mobile applications."
    }
  ],
  skills: [
    { name: "React", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 80 },
    { name: "Python", level: 75 },
    { name: "AWS", level: 70 }
  ],
  currentProjects: [

    {
      id: 1,
      title: "AgroMesh - Smart Farming for Every Village",
      description: "A next-generation platform bringing IoT, AI, and mesh networking to rural agriculture.",
      longDescription: "AgroMesh revolutionizes agriculture for remote and rural areas by integrating advanced IoT sensors, offline AI, and mesh networking. The platform empowers farmers with real-time soil monitoring, intelligent recommendations, and seamless communication—even without internet access. Designed for accessibility and scalability, AgroMesh bridges the technology gap in farming, increasing yields and sustainability.",
      technologies: [
        "React",
        "JavaScript",
        "Tailwind CSS",
        "Lucide React",
        "Vite",
        "Progressive Web App"
      ],
      image: "https://i.postimg.cc/ZYQH7HZg/Screenshot-2025-07-18-232056.png", // Home page screenshot
      images: [
        {
          url: "https://i.postimg.cc/ZYQH7HZg/Screenshot-2025-07-18-232056.png",
          alt: "AgroMesh Homepage",
          caption: "Main landing page of AgroMesh"
        },
        {
          url: "https://i.postimg.cc/7LBtxk8P/Screenshot-2025-07-18-232128.png",
          alt: "Smart Soil Monitoring Feature",
          caption: "Feature: Smart Soil Monitoring with real-time insights"
        },
        {
          url: "https://i.postimg.cc/L6zyJfKb/Screenshot-2025-07-18-232231.png",
          alt: "Offline AI Assistant Feature",
          caption: "Feature: Offline AI Assistant for crop recommendations"
        },
        {
          url: "https://i.postimg.cc/nck481tp/Screenshot-2025-07-18-232314.png",
          alt: "Benefits Section",
          caption: "Benefits: Increased yield, water savings, and community connectivity"
        },
        {
          url: "https://i.postimg.cc/d1bB1QWF/Screenshot-2025-07-18-232250.png",
          alt: "Technology Section",
          caption: "Technology: Mesh networking, low-power design, and security"
        }
      ],
      features: [
        "Smart soil monitoring with IoT sensors",
        "Offline AI assistant for recommendations",
        "LoRa-based mesh network for rural connectivity",
        "Voice assistant supporting local languages",
        "Drone integration for aerial crop analysis",
        "Farmer chat network for community support"
      ],
      demoUrl: "https://rudra-p-s-agromesh.vercel.app/",
      codeUrl: "https://github.com/lord-rudra0/Agromesh",
      status: "in-progress",
      type: "startup",
    },

    {
  "id": 3,
  "title": "ACAWS - Adaptive Cognitive & Wellness System",
  "description": "AI-powered learning, wellness, and cognitive analytics platform.",
  "longDescription": "ACAWS is a full-stack platform combining a React/Vite frontend, an Express backend, and Python ML services to deliver AI-generated tutor roadmaps, per-chapter quizzes, camera-based cognitive/attention analysis (with offline simulated fallback), wellness tracking, achievements, community discussions, and analytics dashboards. Built for local or remote MongoDB with dev seeders and robust client-side fallbacks.",
  "technologies": [
    "React",
    "Vite",
    "Tailwind CSS",
    "Lucide React",
    "Framer Motion",
    "Recharts",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Python",
    "FastAPI / Uvicorn",
    "scikit-learn",
    "WebSocket",
    "Axios",
    "Jest / Vitest"
  ],
  "image": "https://via.placeholder.com/1200x630?text=ACAWS+Dashboard",
  "images": [
    {
      "url": "https://via.placeholder.com/1200x630?text=ACAWS+Dashboard",
      "alt": "Dashboard",
      "caption": "User dashboard: wellness, attention, learning progress"
    },
    {
      "url": "https://via.placeholder.com/1200x630?text=Tutor+Roadmap",
      "alt": "Tutor Roadmap",
      "caption": "AI-generated Tutor Roadmap (8 chapters) with titles-only list"
    },
    {
      "url": "https://via.placeholder.com/1200x630?text=Chapter+Detail+%26+Quiz",
      "alt": "Chapter Detail & Quiz",
      "caption": "Chapter page with back/next and per-chapter quiz UI"
    },
    {
      "url": "https://via.placeholder.com/1200x630?text=Enhanced+Cognitive+Analysis",
      "alt": "Enhanced Cognitive Analysis",
      "caption": "Camera-based cognitive metrics (simulated offline fallback)"
    },
    {
      "url": "https://via.placeholder.com/1200x630?text=Community+Page",
      "alt": "Community",
      "caption": "Community discussion, posts, replies, optimistic UI"
    }
  ],
  "features": [
    "AI-generated, persisted TutorRoadmap (8 chapters) and dev seeder",
    "Titles-only roadmap list + ChapterDetail pages with Back/Next",
    "Per-chapter quizzes and POST /api/tutor/quizzes/:quizId/submit",
    "Enhanced cognitive analysis (camera) with offline simulated metrics",
    "Wellness entries, daily summaries, and attention metrics",
    "Dashboard aggregating learning, wellness, attention, streaks, achievements",
    "Achievements with icons, tooltips, animations and confetti",
    "Community: discussions, replies, likes, optimistic updates and fallbacks",
    "Express backend routes + Python ML service (uvicorn) for advanced analysis",
    "Axios API wrapper with retry/backoff, localStorage persistence for templates and last roadmap",
    "Dev utilities: .env.example, README quick-start, remote `MONGODB_URI` support"
  ],
  "demoUrl": "http://localhost:3000",
  "codeUrl": "https://github.com/DevOps-Malayalam/DevByZero-Platform-9-",
  "status": "in-progress",
  "type": "learning-platform"
},
    {
      id: 2,
      title: "Online Compiler",
      description: "Multi-language online code compiler and executor",
      longDescription: "Online Compiler is a web-based platform that allows users to write, compile, and execute code in multiple programming languages directly from their browser. It features a modern code editor, real-time output display, and supports a wide range of popular languages. The platform is designed for students, developers, and anyone who wants to quickly test code snippets without installing any software.",
      technologies: [
        "React",
        "Flask",
        "Python",
        "Monaco Editor",
        "Vite",
        "Node.js"
      ],
      image: "https://i.postimg.cc/GhwhhZkr/Screenshot-2025-07-18-183713.png", // Home page with editor and output
      images: [
        {
          url: "https://i.postimg.cc/GhwhhZkr/Screenshot-2025-07-18-183713.png",
          alt: "Online Compiler Homepage",
          caption: "Main interface with code editor and output window"
        },
        {
          url: "https://i.postimg.cc/PrWfL24D/Screenshot-2025-07-18-183819.png",
          alt: "Supported Languages",
          caption: "List of all supported programming languages"
        }
      ],
      demoUrl: "",
      codeUrl: "https://github.com/lord-rudra0/Online-Compiler",
      status: "in-progress",
      type: "personal"
    },
    {
      id: 3,
      title: "AI-Enhanced Career Guidance System",
      description: "Department of CSE, AJCE - Career guidance platform",
      longDescription: "A research-focused career guidance system developed under the Department of Computer Science and Engineering at Amal Jyothi College of Engineering. The platform utilizes artificial intelligence to provide personalized career recommendations based on student aptitude, academic performance, and industry trends. Features include age-appropriate assessments, detailed career path analysis, and personalized guidance reports.",
      technologies: [
        "Machine Learning",
        "Python",
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Data Analytics",
        "Natural Language Processing"
      ],
      features: [
        "Academic performance analysis",
        "Aptitude assessment",
        "AI-powered recommendations",
        "Career path visualization",
        "Industry trend analysis",
        "Personalized reporting"
      ],
      image: "https://i.postimg.cc/BnC8Y6s7/Screenshot-2025-03-25-235145.png",
      status: "in-progress",
      type: "institutional",
      institution: "Amal Jyothi College of Engineering",
      department: "Computer Science and Engineering"
    },
    {
      id: 4,
      title: "Smart Fish Pond Automation",
      description: "IoT-based comprehensive fish pond management system",
      longDescription: "An innovative startup project developing a complete automation solution for fish pond management. The system integrates IoT sensors and automated controls to monitor and maintain optimal conditions for fish farming. Features include real-time water quality monitoring, automated feeding systems, temperature control, and smart alerts for maintenance.",
      technologies: [
        "IoT",
        "Embedded Systems",
        "React",
        "Node.js",
        "MongoDB",
        "Sensor Integration",
        "Automation Control"
      ],
      // image: "https://envs.sh/pum.png",
      image: "https://i.postimg.cc/d0zybfkL/Screenshot-2025-03-26-004323.png",
      status: "in-progress",
      type: "startup"
    },
    // {
    //   id: 5,
    //   title: "Industrial Equipment Portal",
    //   description: "B2B e-commerce platform for industrial components",
    //   longDescription: "A specialized web platform for a  industrial equipment supplier in Rajasthan. The project focuses on creating a modern digital presence for showcasing industrial components like chrome plated shafts and linear guides. Features include detailed product catalogs, technical specifications, inventory management, and B2B inquiry systems.",
    //   technologies: [
    //     "React",
    //     "Node.js",
    //     "MongoDB",
    //     "Express",
    //     "Inquiry Management",
    //     "Admin Dashboard",
    //     "Tailwind CSS",
    //   ],
    //   features: [
    //     "Product catalog management",
    //     "Technical specification display",
    //     "Business inquiry system",
    //     "Admin control panel",
    //     "Product categorization",
    //     "High-resolution product imagery"
    //   ],
    //   image: "https://i.postimg.cc/zB8xm3RL/Screenshot-2025-03-26-012939.png",
    //   status: "in-progress",
    //   type: "freelance"
    // },

    {
  "id": 1,
  "title": "WebBuilder — Multi-tenant Website Builder",
  "description": "A multi-tenant platform for creating, editing, and publishing websites and stores, with per-tenant isolation and centralized platform management.",
  "longDescription": "WebBuilder is a multi-tenant website builder (subdomain-per-tenant) that provides isolated tenant sites, a React+Vite editor, reusable templates, tenant-level e-commerce, and platform admin controls. It supports role-based access, tenant settings, and server-side order validation to prevent oversells.",
  "technologies": [
    "React",
    "Vite",
    "Tailwind CSS",
    "Lucide React",
    "JavaScript",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "React Router",
    "axios",
    "react-hot-toast"
  ],
  "templatesFeatureLine": "supports e-commerce (product catalog, variants, cart/checkout), portfolio galleries, blog posts & SEO, service booking/contact, and modular multi-purpose content blocks",
  "features": [
    "Multi-tenant architecture (subdomain-per-tenant) with tenant isolation",
    "In-browser editor and template selection (Online Store, Portfolio, Blog, Service Business, Multi-Purpose)",
    "Tenant-level e-commerce with product variants (SKU/price/stock) and variant images",
    "Client cart + server-side transactional order validation and order management",
    "Role-based auth (owner/admin), owner-aware footer/contact visibility, and tenant settings",
    "Platform admin hooks, migration scripts, and tenant management tools"
  ],
  "demoUrl": "",
  "codeUrl": "https://github.com/lord-rudra0/WEB-BUILDER",
  "status": "in-progress",
  "type": "multi-tenant-platform"
}


  ],
  finishedProjects: [
    {
      id: 1,
      title: "AI Career Searcher",
      description: "AI-powered career guidance and assessment platform",
      longDescription: "An intelligent career guidance platform that helps students and professionals discover suitable career paths through personalized assessments. Features include age and class-based grouping, comprehensive questionnaires, detailed career analysis, and user profile management. The platform provides tailored career recommendations based on individual responses and generates detailed reports with career paths and educational requirements.",
      technologies: ["React", "Node.js", "AI", "MongoDB", "Express", "Tailwind CSS"],
      image: "https://i.postimg.cc/BnC8Y6s7/Screenshot-2025-03-25-235145.png",
      images: [
        {
          url: "https://i.postimg.cc/qvTWZ04H/Screenshot-2025-03-25-235153.png",
          alt: "Home Dashboard",
          caption: "Main landing page of AI Career Searcher"
        },
        {
          url: "https://i.postimg.cc/WbbkmqqB/Screenshot-2025-03-25-235221.png",
          alt: "Group Selection",
          caption: "Age and class-based assessment grouping"
        },
        {
          url: "https://i.postimg.cc/MGyHJzj0/Screenshot-2025-03-25-235230.png",
          alt: "Assessment Interface",
          caption: "Interactive career assessment questionnaire"
        },
        {
          url: "https://i.postimg.cc/vHcmHrVZ/Screenshot-2025-03-25-235615.png",
          alt: "Results Dashboard",
          caption: "Detailed career analysis and recommendations"
        }
      ],
      demoUrl: "",
      codeUrl: "https://github.com/lord-rudra0/career-searcher",
      status: "completed",
    },
    {
      id: 1,
      title: "VisionCraft❤",
      description: "All-in-one image processing and editing platform",
      longDescription: "VisionCraft❤ is a comprehensive web platform for image processing and editing. It offers a suite of tools including compression, resizing, cropping, format conversion, watermarking, background removal, upscaling, and a full-featured photo editor. The platform is designed for speed, ease of use, and high-quality results, making it ideal for creators, professionals, and everyday users.",
      technologies: [
        "React",
        "Flask",
        "Python",
        "Tailwind CSS",
        "Framer Motion",
        "Vercel",
        "Render"
      ],
      image: "https://i.postimg.cc/qq26qShC/Screenshot-2025-07-18-151833.png", // Main homepage
      images: [
        {
          url: "https://i.postimg.cc/qq26qShC/Screenshot-2025-07-18-151833.png",
          alt: "VisionCraft Homepage",
          caption: "Main dashboard with quick access to all tools"
        },
        {
          url: "https://i.postimg.cc/jd20Tc1K/Screenshot-2025-07-18-151930.png",
          alt: "All Features",
          caption: "Overview of all image processing features"
        },
        {
          url: "https://i.postimg.cc/D0dqY1qM/Screenshot-2025-07-18-155535.png",
          alt: "Image Editor",
          caption: "Feature: Full-featured Photo Editor"
        },
        {
          url: "https://i.postimg.cc/FHhPmHzS/Screenshot-2025-07-18-152024.png",
          alt: "Compress Image",
          caption: "Feature: Compress Image"
        },
        {
          url: "https://i.postimg.cc/bvtSBQP9/Screenshot-2025-07-18-155826.png",
          alt: "Resize Image",
          caption: "Feature: Resize Image"
        }
      ],
      demoUrl: "https://vision-craft-rudra-p-s.vercel.app/",
      codeUrl: "https://github.com/lord-rudra0/VisionCraft",
      status: "completed"
    },
    {
      id: 4,
      title: "SummarIQ",
      description: "AI-powered PDF summarizer and Q&A generator",
      longDescription: "An intelligent document analysis platform that leverages AI to generate concise summaries of PDF documents and create interactive Q&A sessions. The application features a clean, modern interface for document upload, provides detailed summaries of uploaded content, and enables users to ask questions about the document content with AI-powered responses. The platform is designed to help students, researchers, and professionals quickly understand and interact with complex documents.",
      technologies: [
        "React",
        "Node.js",
        "OpenAI API",
        "PDF Processing",
        "Tailwind CSS",
        "Express"
      ],
      image: "https://i.postimg.cc/tg1fsgzP/Screenshot-2025-03-26-001436.png",
      images: [
        {
          url: "https://i.postimg.cc/tg1fsgzP/Screenshot-2025-03-26-001436.png",
          alt: "SummarIQ Homepage",
          caption: "Clean and intuitive main interface"
        },
        {
          url: "https://i.postimg.cc/0QDBCHFy/Screenshot-2025-03-26-001945.png",
          alt: "Document Summary",
          caption: "AI-generated document summary view"
        },
        {
          url: "https://i.postimg.cc/0y4X1sqN/Screenshot-2025-03-26-002050.png",
          alt: "Q&A Interface",
          caption: "Interactive question and answer system"
        }
      ],
      demoUrl: "",
      codeUrl: "https://github.com/lord-rudra0/SummarIQ",
      status: "completed"
    },
    {
      id: 3,
      title: "Emerald Eye",
      description: "Carbon emission and forest status analysis platform for India",
      longDescription: "A comprehensive environmental monitoring platform that analyzes and visualizes carbon emissions and forest coverage across all states and districts in India. The platform features interactive data visualization, threshold-based analysis, and a specialized chatbot for personalized data insights. Users can explore detailed environmental metrics, compare regional statistics, and receive AI-powered insights about environmental trends and impacts. The system helps policymakers, researchers, and environmentalists make data-driven decisions for sustainability.",
      technologies: [
        "React",
        "Python",
        "Data Visualization",
        "Chart.js",
        "Node.js",
        "MongoDB",
        "AI Chatbot",
        "Tailwind CSS"
      ],
      image: "https://i.postimg.cc/RhqnBjmM/Screenshot-2025-03-25-235824.png",
      images: [
        {
          url: "https://i.postimg.cc/RhqnBjmM/Screenshot-2025-03-25-235824.png",
          alt: "Emerald Eye Homepage",
          caption: "Main dashboard with environmental metrics"
        },
        {
          url: "https://i.postimg.cc/28sLscKD/Screenshot-2025-03-26-000110.png",
          alt: "Analysis Graphs",
          caption: "Interactive data visualization and analysis"
        },
        {
          url: "https://i.postimg.cc/SRwjpRVr/Screenshot-2025-03-26-000117.png",
          alt: "Detailed Analysis",
          caption: "Comprehensive environmental impact assessment"
        },
        {
          url: "https://i.postimg.cc/FHX1WfYF/Screenshot-2025-03-26-000342.png",
          alt: "AI Chatbot",
          caption: "Personalized data-driven chatbot interface"
        }
      ],
      demoUrl: "https://forestwatch.vercel.app/",
      codeUrl: "https://github.com/lord-rudra0/Tech-Thrive",
      status: "completed"
    },

    {
  "id": 1,
  "title": "DSA_TRACER",
  "description": "A platform for tracking DSA progress, competitions, and analytics.",
  "longDescription": "DSA_TRACER is a full-stack web application designed to help users track their progress in Data Structures and Algorithms (DSA), participate in competitions, view analytics, and engage with a community. The frontend is built with React, Vite, and Tailwind CSS, while the backend uses Node.js, Express, and MongoDB. Features include user authentication, leaderboards, daily challenges, achievements, activity heatmaps, and more.",
  "technologies": [
    "React",
    "Vite",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "Axios",
    "Recharts"
  ],
  "image": "https://via.placeholder.com/1200x630?text=DSA_TRACER+Dashboard",
  "images": [
    {
      "url": "https://via.placeholder.com/1200x630?text=DSA_TRACER+Dashboard",
      "alt": "Dashboard",
      "caption": "User dashboard: progress, streaks, and analytics"
    },
    {
      "url": "https://via.placeholder.com/1200x630?text=Competitions",
      "alt": "Competitions",
      "caption": "List and details of ongoing and past competitions"
    },
    {
      "url": "https://via.placeholder.com/1200x630?text=Problems+List",
      "alt": "Problems List",
      "caption": "Browse and solve DSA problems with filters"
    },
    {
      "url": "https://via.placeholder.com/1200x630?text=Leaderboard",
      "alt": "Leaderboard",
      "caption": "Leaderboard showing top performers"
    },
    {
      "url": "https://via.placeholder.com/1200x630?text=Achievements",
      "alt": "Achievements",
      "caption": "Achievements and badges earned by users"
    }
  ],
  "features": [
    "User authentication and protected routes",
    "Daily challenges and activity heatmap",
    "Competition creation, participation, and analytics",
    "Leaderboard and stats tracking",
    "Problem list with filters and details",
    "Achievements and badges with animations",
    "Community feed and discussions",
    "Express backend API with MongoDB models",
    "Axios API wrapper for frontend-backend communication",
    "Frontend built with React, Vite, and Tailwind CSS"
  ],
  "demoUrl": "http://localhost:5173",
  "codeUrl": "https://github.com/lord-rudra0/DSA_TRACER",
  "status": "in-progress",
  "type": "learning-platform"
},
    {
      id: 5,
      title: "Dynamic Task Manager",
      description: "SQL and Python-based advanced to-do list application",
      longDescription: "A feature-rich task management system built with Python and SQL, offering comprehensive task tracking capabilities. The application includes key features such as task creation with deadlines, status updates, modification tracking, and mark-as-done functionality. Users can manage their tasks efficiently with an intuitive interface that displays task creation dates, modification history, and completion status. The system provides a clean, organized view of pending and completed tasks with built-in date management.",
      technologies: [
        "Python",
        "SQL",
        "SQLite",
        "CRUD Operations",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      image: "https://i.postimg.cc/cCHRBnVS/Screenshot-2025-03-26-011434.png",
      images: [
        {
          url: "https://i.postimg.cc/cCHRBnVS/Screenshot-2025-03-26-011434.png",
          alt: "Task Manager Homepage",
          caption: "Main task management interface"
        },
        {
          url: "https://i.postimg.cc/qq58b7TC/Screenshot-2025-03-26-011445.png",
          alt: "Task Update Interface",
          caption: "Task modification and status update view"
        }
      ],
      features: [
        "Task creation with deadlines",
        "Modification tracking",
        "Status updates",
        "Date-based organization",
        "Mark as complete functionality",
        "Task history logging"
      ],
      demoUrl: "https://to-do-list-yehm.onrender.com/",
      codeUrl: "https://github.com/lord-rudra0/To_Do_List_comp",
      status: "completed"
    },
    {
      id: 6,
      title: "Las Vegas Algorithm Visualizer",
      description: "Interactive visualization of Las Vegas randomized algorithms",
      longDescription: "An educational platform that demonstrates the Las Vegas algorithm through interactive visualizations. The application helps users understand how Las Vegas algorithms work by showing their randomized decision-making process and guaranteed correct results. Features include step-by-step visualization, algorithm explanation, and real-time demonstration of how the algorithm reaches its solution. The platform serves as both an educational tool and a practical demonstration of randomized algorithms in computer science.",
      technologies: [
        "React",
        "JavaScript",
        "Algorithm Visualization",
        "D3.js",
        "Tailwind CSS",
        "Animation Libraries"
      ],
      image: "https://i.postimg.cc/4Ng2VL3v/Screenshot-2025-03-26-011243.png",
      images: [
        {
          url: "https://i.postimg.cc/4Ng2VL3v/Screenshot-2025-03-26-011243.png",
          alt: "Algorithm Visualizer Homepage",
          caption: "Main interface of the Las Vegas Algorithm Visualizer"
        },
        {
          url: "https://i.postimg.cc/y6Xy4VV9/Screenshot-2025-03-26-011258.png",
          alt: "Algorithm Information",
          caption: "Detailed explanation of Las Vegas algorithm concepts"
        },
        {
          url: "https://i.postimg.cc/8z3hBcH8/Screenshot-2025-03-26-011335.png",
          alt: "Visualization Results",
          caption: "Interactive demonstration of algorithm execution"
        }
      ],
      features: [
        "Interactive algorithm visualization",
        "Step-by-step execution",
        "Educational explanations",
        "Real-time result demonstration",
        "Performance analysis",
        "Algorithm complexity breakdown"
      ],
      demoUrl: "https://vegas-randomizer-rudra-ps.vercel.app/",
      codeUrl: "",
      status: "completed"
    },
    {
  id: 7,
  title: "CardGEN — Logo & Business Card Generator",
  description: "Generates logos and export-ready business cards with background artwork, programmatic text overlay, and QR codes.",
  longDescription: "Full-stack app with a backend API, a frontend UI, and a local ML service to produce high-resolution backgrounds and compose crisp text overlays for printable cards.",
  technologies: [
    "Node.js",
    "Express",
    "React",
    "Vite",
    "Python",
    "FastAPI",
    "Uvicorn",
    "Sharp",
    "SVG"
  ],
  image: "https://via.placeholder.com/1024x640.png?text=CardGEN+Preview",
  images: [
    {
      url: "https://via.placeholder.com/1024x640.png?text=Background+Generation",
      alt: "Background generation",
      caption: "Generated background artwork"
    },
    {
      url: "https://via.placeholder.com/1024x640.png?text=Programmatic+Overlay",
      alt: "Programmatic overlay",
      caption: "Final card with SVG-rendered text"
    },
    {
      url: "https://via.placeholder.com/1024x640.png?text=QR+Feature",
      alt: "QR code feature",
      caption: "QR code integrated into card (vCard or URL)"
    },
    {
      url: "https://via.placeholder.com/1024x640.png?text=Refine+Loop",
      alt: "Refine loop",
      caption: "Refine loop to reach target legibility"
    }
  ],
  features: [
    "High-resolution background generation",
    "Programmatic SVG text overlay for crisp typography",
    "QR code (vCard / URL) generation and embedding",
    "OCR-driven refine loop for legibility",
    "Background-only generation option",
    "Image caching and job queue",
    "Fallback provider logic",
    "Export-ready output (PNG/SVG/PDF)"
  ],
  demoUrl: "http://localhost:5173",
  codeUrl: "https://github.com/lord-rudra0/Logo-And-Card-Generator",
  status: "in-progress",
  type: "tool"
}
  ],
  contact: {
    email: "rudra.pratap.singh.dev1@gmail.com",
    phone: "+91 7392924934",
    location: "Santhom Men's Hostal, Erumeli Rd, Koovappally, Kerala 686518",
    social: {
      github: "https://github.com/lord-rudra0",
      linkedin: "https://www.linkedin.com/in/rudra-pratap-singh-3b354b272/",
      twitter: "https://x.com/_lord_rudra_",
      instagram: "https://www.instagram.com/_lord_rudra_/",
      whatsapp: "https://wa.me/+917392924934"
    }
  }
};

export const currentProjects = content.currentProjects;
export const finishedProjects = content.finishedProjects;
