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
      title: "AI-Powered Content Generator",
      description: "An application that uses AI to generate various types of content",
      longDescription: "A cutting-edge platform leveraging OpenAI's GPT models to help users generate blog posts, marketing copy, creative stories, and technical documentation. Features include content customization, tone adjustment, and export options.",
      technologies: ["React", "Next.js", "OpenAI API", "Node.js", "MongoDB"],
      image: "https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg",
      images: [
        {
          url: "https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg",
          alt: "AI Content Generator Dashboard",
          caption: "Main dashboard showing content generation options"
        },
        {
          url: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
          alt: "Content Editor Interface",
          caption: "Advanced content editing interface"
        },
        {
          url: "https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg",
          alt: "Analytics Dashboard",
          caption: "Content performance analytics"
        }
      ],
      demoUrl: "https://ai-content-generator.example.com",
      codeUrl: "https://github.com/username/ai-content-generator",
      status: "current",
    },
    {
      id: 2,
      title: "Crypto Portfolio Tracker",
      description: "Real-time cryptocurrency portfolio management application",
      longDescription: "A comprehensive dashboard for tracking cryptocurrency investments, featuring real-time price updates, portfolio performance analytics, transaction history, and market trends visualization. Includes alerts for price movements and portfolio rebalancing suggestions.",
      technologies: ["Vue.js", "Firebase", "CoinGecko API", "Chart.js", "Tailwind CSS"],
      image: "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg",
      images: [
        {
          url: "https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg",
          alt: "Portfolio Overview",
          caption: "Main portfolio dashboard"
        },
        {
          url: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
          alt: "Price Charts",
          caption: "Detailed price analysis charts"
        },
        {
          url: "https://images.pexels.com/photos/8370772/pexels-photo-8370772.jpeg",
          alt: "Transaction History",
          caption: "Transaction history and performance metrics"
        }
      ],
      demoUrl: "https://crypto-tracker.example.com",
      codeUrl: "https://github.com/username/crypto-tracker",
      status: "current",
    },
    // {
    //   id: 3,
    //   title: "Augmented Reality Shopping App",
    //   description: "Mobile application for virtual product try-ons",
    //   longDescription: "An innovative AR shopping experience that allows users to virtually try on products like furniture, glasses, and clothing. The app uses smartphone cameras to place virtual products in the user's environment, providing a realistic preview before purchase.",
    //   technologies: ["React Native", "ARKit", "ARCore", "Three.js", "GraphQL", "AWS Amplify"],
    //   image: "https://images.pexels.com/photos/3761168/pexels-photo-3761168.jpeg",
    //   demoUrl: "https://ar-shopping.example.com",
    //   codeUrl: "https://github.com/username/ar-shopping-app",
    //   status: "current",
    // },
  ],
  finishedProjects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform",
      longDescription: "A comprehensive e-commerce solution with product catalog, shopping cart, user authentication, payment processing, and order management. Built with modern web technologies for optimal performance and user experience.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Redux"],
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
      images: [
        {
          url: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg",
          alt: "Product Catalog",
          caption: "Main product catalog view"
        },
        {
          url: "https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg",
          alt: "Shopping Cart",
          caption: "Shopping cart and checkout process"
        },
        {
          url: "https://images.pexels.com/photos/1005644/pexels-photo-1005644.jpeg",
          alt: "Admin Dashboard",
          caption: "Admin dashboard for order management"
        }
      ],
      demoUrl: "https://demo-ecommerce.example.com",
      codeUrl: "https://github.com/username/ecommerce-platform",
      status: "completed",
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A productivity tool for organizing tasks and projects",
      longDescription: "A feature-rich task management application that helps users organize their work, set priorities, track progress, and collaborate with team members. Includes drag-and-drop functionality, notifications, and detailed analytics.",
      technologies: ["React", "TypeScript", "Firebase", "Material UI", "React DnD"],
      image: "https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg",
      demoUrl: "https://task-manager.example.com",
      codeUrl: "https://github.com/username/task-manager",
      status: "completed",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "Real-time weather forecasting application",
      longDescription: "An interactive weather dashboard that provides current conditions and forecasts for locations worldwide. Features include interactive maps, hourly and daily forecasts, severe weather alerts, and historical weather data.",
      technologies: ["JavaScript", "OpenWeather API", "Chart.js", "Leaflet", "HTML5", "CSS3"],
      image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
      demoUrl: "https://weather-app.example.com",
      codeUrl: "https://github.com/username/weather-dashboard",
      status: "completed",
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      description: "Analytics platform for social media management",
      longDescription: "A comprehensive dashboard for social media managers to track performance across multiple platforms. Provides insights on engagement, reach, follower growth, and content performance with customizable reports and visualizations.",
      technologies: ["Vue.js", "Node.js", "Express", "PostgreSQL", "D3.js", "Social APIs"],
      image: "https://images.pexels.com/photos/7654586/pexels-photo-7654586.jpeg",
      demoUrl: "https://social-dashboard.example.com",
      codeUrl: "https://github.com/username/social-dashboard",
      status: "completed",
    },
    {
      id: 5,
      title: "Recipe Finder App",
      description: "Culinary application for discovering and sharing recipes",
      longDescription: "A community-driven recipe platform where users can discover, save, and share recipes. Features include ingredient-based search, dietary filters, meal planning, nutritional information, and user ratings and reviews.",
      technologies: ["React Native", "Firebase", "Expo", "Redux", "Food API"],
      image: "https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg",
      demoUrl: "https://recipe-finder.example.com",
      codeUrl: "https://github.com/username/recipe-finder",
      status: "completed",
    },
    {
      id: 6,
      title: "Portfolio Website Builder",
      description: "Tool for creating professional portfolios without coding",
      longDescription: "A drag-and-drop website builder specifically designed for creating professional portfolios. Users can choose from customizable templates, add projects, skills, and experience, and publish their portfolio with a custom domain.",
      technologies: ["React", "AWS", "GraphQL", "Tailwind CSS", "Framer Motion"],
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      demoUrl: "https://portfolio-builder.example.com",
      codeUrl: "https://github.com/username/portfolio-builder",
      status: "completed",
    },
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