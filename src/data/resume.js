export const personal = {
  name: "Ekjyot Singh",
  title: "MERN Stack Developer",
  location: "Mohali, India",
  phone: "7015935344",
  email: "ekjyot091@gmail.com",
  profile: `MERN Stack Developer with nearly 5 years of experience building scalable, high-performance web applications using JavaScript and PHP frameworks. Strong expertise in microservices architecture, RESTful APIs, and blockchain-based systems. Experienced in designing and deploying distributed systems with a focus on scalability and reliability. Actively leverage AI-powered development tools to accelerate development, optimize code quality, and automate workflows.`,
  yearsOfExperience: 5,
  social: {
    email: "mailto:ekjyot091@gmail.com",
    phone: "tel:+917015935344",
    github: "https://github.com/EkjyotSingh",
    linkedin: "https://www.linkedin.com/in/ekjyot-singh-200b64133",
  },
};

export const skills = [
  { category: "Backend", items: ["Node.js", "Express.js", "NestJS", "Laravel", "gRPC", "RabbitMQ", "Kafka"] },
  { category: "Frontend", items: ["React.js", "Redux", "TailwindCSS", "Bootstrap"] },
  { category: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "Redis"] },
  { category: "Cloud & DevOps", items: ["AWS (EC2, ECR, ECS, S3, Lambda, SQS)", "Docker", "EKS", "GitHub Actions"] },
  { category: "Real-time & Other", items: ["WebSocket", "Socket.IO", "Blockchain", "GitHub"] },
];

export const experience = [
  {
    company: "Antier Solutions",
    role: "Software Engineer",
    location: "Mohali",
    period: "Jan 2024 – Feb 2026",
    highlights: [
      "Managed backend and frontend integration using Node.js, NestJS, RabbitMQ, and React",
      "Worked on microservices architecture ensuring scalable and modular system design",
      "Reviewed junior developer's code to maintain quality and best practices",
    ],
    projects: [
      {
        name: "RockTournament",
        description: "Rock Paper Scissors Gaming Platform",
        url: "https://game.dev.rocktournament.com",
        points: [
          "Developed scalable backend supporting quick matches and multiplayer tournaments",
          "Optimized performance using Redis caching and stateless architecture",
          "Integrated AWS SQS and Lambda for asynchronous email processing",
          "Used Redis Adapter (Socket.IO + Redis) for horizontal scaling on Amazon EKS",
          "Integrated AI-based NFT image generation using Gemini model",
          "Built leaderboard, achievements, daily login rewards, and spin-wheel system",
        ],
      },
      {
        name: "VaultGames ICO Platform",
        description: "Decentralized token sale platform",
        url: "https://qa.vaultgames.com",
        points: [
          "Developed backend using NestJS for decentralized token sale with real-time interaction",
          "Integrated NowPayments (crypto) and Rapyd (fiat) payment gateways",
          "Implemented referral system and real-time WebSocket updates",
          "Used MySQL (procedures) and Redis for performance optimization",
        ],
      },
      {
        name: "Coin De Casa",
        description: "Initial Coin Offering (ICO) Platform",
        url: "https://coindecasa.com",
        points: [
          "Built microservice-based backend using NestJS and gRPC",
          "Supported staking, referral systems, and multi-chain compatibility (Ethereum, BNB, BTC)",
        ],
      },
    ],
  },
  {
    company: "Hash Softwares",
    role: "Full Stack Developer",
    location: "Mohali",
    period: "Aug 2021 – Nov 2023",
    highlights: [
      "Developed and maintained web applications using Laravel, Node.js, React.js, Redux, MongoDB, PostgreSQL, and AWS",
      "Optimized application performance and reduced load times",
    ],
    projects: [
      {
        name: "Makaan Guide",
        description: "Real Estate Platform",
        url: null,
        points: [
          "Developed RESTful APIs using Laravel for property listings and user management",
          "Integrated React.js frontend with advanced search filters",
          "Built multi-step forms and translated business formulas into backend logic using NestJS",
          "Used PostgreSQL for structured data storage",
          "Containerized application with Docker and deployed on AWS ECR",
          "Implemented GitHub Actions CI/CD pipeline",
        ],
      },
    ],
  },
];

export const personalProjects = [
  {
    name: "Sidekix",
    description: "Entrepreneur community platform with paid advisor services",
    role: "Backend Developer",
    featured: true,
    url: "http://sidekix-backend-alb-1155118504.us-east-1.elb.amazonaws.com/api/docs",
    urlLabel: "API Documentation",
    overview:
      "A community platform where entrepreneurs register, connect with peers, discuss business challenges, book paid sessions with expert advisors, chat in real time, and attend community events — all powered by a subscription-based model.",
    tech: ["NestJS", "PostgreSQL", "AWS Lambda", "AWS SQS", "WebSocket", "Stripe Payment Gateway"],
    images: [
      { src: "projects/sidekix/home.png", caption: "Home & journey hub" },
      { src: "projects/sidekix/community-feed.png", caption: "Community feed & polls" },
      { src: "projects/sidekix/advisor-profile.png", caption: "Advisor profiles" },
      { src: "projects/sidekix/schedule-session.png", caption: "Session booking" },
      { src: "projects/sidekix/poll-comments.png", caption: "Discussions & comments" },
    ],
    points: [
      "Built backend for a community platform where entrepreneurs connect, discuss challenges, and access expert advisors",
      "Implemented paid subscription flows, advisor chat, and meeting booking with calendar-based scheduling",
      "Developed event registration and attendance features for entrepreneur community events",
      "Architected notification pipeline using AWS Lambda and SQS for email, SMS, and in-app push notifications",
      "Used NestJS with PostgreSQL for scalable APIs supporting advisors, entrepreneurs, and subscription billing",
    ],
  },
  {
    name: "Nangal By Cycle (NBC)",
    description: "Volunteering & community impact platform",
    role: "Full Stack Developer",
    featured: true,
    url: "https://nangalbycycle.com/",
    urlLabel: "Live Website",
    overview:
      "A volunteering portal built in collaboration with Punjab Police, Fit India, Bhakra Beas Management Board, and Sports Authority of India — empowering 100+ villages through health campaigns, blood donation drives, cycling events, and community programs across Nangal and surrounding regions.",
    tech: ["Next.js", "Node.js", "Express.js", "MySQL", "Capacitor", "PWA"],
    images: [
      { src: "projects/nbc/hero.png", caption: "Homepage & volunteer CTA" },
      { src: "projects/nbc/partners.png", caption: "Official partners & initiatives" },
      { src: "projects/nbc/event-registration.png", caption: "Event participation form" },
      { src: "projects/nbc/community-stats.png", caption: "Community impact stats" },
    ],
    points: [
      "Built full stack volunteering platform where admins post events and users register to participate",
      "Developed dynamic banners personalized based on user profile and community role",
      "Implemented admin panel for event management, volunteer registration, and blood donor listings",
      "Built frontend with Next.js and backend APIs with Node.js, Express, and MySQL",
      "Delivered cross-platform PWA using Capacitor in Next.js for Android and iOS mobile apps",
    ],
  },
  {
    name: "Resume RAG Application",
    description: "AI-Powered Q&A System",
    tech: ["RAG", "Qdrant", "Ollama", "Whisper", "Embeddings"],
    points: [
      "Built a RAG-based AI system with intelligent resume parsing, chunking, and semantic search",
      "Stored embeddings in Qdrant vector database with cosine similarity for context retrieval",
      "Integrated Ollama (local LLM) for grounded, context-aware response generation",
      "Implemented Whisper for real-time speech-to-text and pyttsx3 for text-to-speech",
    ],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology",
    institution: "Haryana Engineering College, Yamunanagar",
    year: "2019",
    field: "Electronics and Communication Engineering",
  },
  {
    degree: "12th (CBSE) – PCM",
    institution: "CBSE Board",
    year: "2015",
    field: "61.40%",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];
