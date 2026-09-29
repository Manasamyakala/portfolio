export interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  description: string[];
  metrics?: string[];
  github?: string;
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export interface QAData {
  id: string;
  question: string;
  answer: string;
  sources: { title: string; doc: string; text: string }[];
  tags: string[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Manasa Myakala",
    location: "Hyderabad · UTC+5:30",
    email: "manasamyakala35@gmail.com",
    avatar: "/profile.jpg",
    status: "open to work",
    socials: {
      github: "https://github.com/manasamyakala",
      linkedin: "https://www.linkedin.com/in/manasa-myakala-16123732b",
      leetcode: "https://leetcode.com/u/manasamyakala/",
      email: "mailto:manasamyakala35@gmail.com"
    },
    stats: {
      inIndustry: "1y 118d",
      acmegrade: "ML Intern",
      projectsCount: "3",
      mergedPRs: "45+",
      skillsCount: "25+"
    }
  },

  summary: `Experienced in full-stack web development, AI model integrations, Computer Vision pipelines, and FastAPI REST architectures. Developed and shipped projects including real-time counter-drone defense platforms, tagless CLIP vector search pet recovery apps, and automated video analytics engines.`,

  experience: [
    {
      role: "Web Development Intern",
      company: "Indus Tech Solutions",
      period: "Dec 2024 – Jul 2025",
      description: [
        "Collaborated in a 4-member engineering team to design and develop scalable web applications using Python, HTML, CSS, JavaScript, FastAPI, and SQL.",
        "Engineered & integrated robust FastAPI REST endpoints for seamless communication between frontend and backend systems, improving data throughput and response latency.",
        "Architected core backend modules including JWT user authentication, database query optimizations, dynamic form processing, and resilient CRUD APIs."
      ],
      skills: ["Python", "FastAPI", "JavaScript", "SQL", "HTML/CSS", "REST APIs", "JWT Auth"]
    },
    {
      role: "Machine Learning Intern",
      company: "Acmegrade Pvt. Ltd.",
      period: "2024",
      description: [
        "Completed intensive hands-on training and projects in supervised/unsupervised machine learning models.",
        "Implemented feature extraction, classification, and regression models in Python."
      ],
      skills: ["Python", "Machine Learning", "Scikit-Learn", "Data Analytics"]
    }
  ] as Experience[],

  projects: [
    {
      id: "counter-drone",
      title: "Counter-Drone Surveillance & Defense System for AFVs",
      subtitle: "AI-powered real-time detection, tracking & countermeasure recommendation engine for military vehicles",
      period: "Aug 2025 – Feb 2026",
      featured: true,
      tags: ["React", "YOLOv8", "ONNX Runtime", "Computer Vision", "Rust", "VisDrone", "Sensor Fusion"],
      description: [
        "Engineered a smart defense system designed to detect, analyze, and neutralize enemy drones threatening military vehicles (tanks & armored units) in real time.",
        "Built a low-latency detection and tracking pipeline leveraging YOLOv8 & ONNX Runtime, estimating threat levels based on target trajectory, speed, and spatial proximity.",
        "Engineered automated soft-kill countermeasure suggestions (GPS jamming, signal interception, alert triggers) for automated decision support.",
        "Integrated multi-sensor fusion combining optical camera feeds, acoustic signatures, and motion tracking to distinguish hostile drones from ambient objects."
      ],
      metrics: ["ONNX Runtime Inference", "95% Detection Accuracy", "Multi-Sensor Fusion"],
      github: "https://github.com/Manasamyakala/Counter-System-for-AFVs.git"
    },
    {
      id: "pettrack",
      title: "PetTrack — AI-Based Pet Identification Platform",
      subtitle: "Tagless visual pet recovery platform using 512-dim CLIP ViT embeddings & vector similarity search",
      period: "Oct 2025 – Dec 2025",
      featured: true,
      tags: ["Flutter", "FastAPI", "CLIP ViT-B/32", "MongoDB Atlas", "Firebase JWT", "Cloudinary"],
      description: [
        "Built a cross-platform Flutter app (iOS & Android) for lost pet recovery using CLIP ViT-B/32 image embeddings and cosine similarity matching—eliminating manual text tags.",
        "Engineered a high-performance backend pipeline (REST API + Cloudinary + MongoDB Atlas) that ingests pet photos, extracts 512-dim CLIP vectors, and returns top-5 matches in under 1s.",
        "Secured API endpoints using Firebase JWT authentication and request validation middleware; structured MongoDB Atlas for geo-filtered, breed-agnostic similarity search."
      ],
      metrics: ["<1s Search Latency", "512-dim Vector Embeddings", "Zero Text-Tag Dependency"],
      github: "https://github.com/Manasamyakala/Pet_Trackk.git"
    },
    {
      id: "attendance-tracker",
      title: "AI-Powered Student Attentiveness & Attendance Tracker",
      subtitle: "Computer vision video analytics system using YOLOv8 & admin dashboard",
      period: "Jan 2025 – Mar 2025",
      featured: false,
      tags: ["React.js", "Python", "YOLOv8", "OpenCV", "MongoDB", "Express.js"],
      description: [
        "Developed an AI-powered attendance tracking system using YOLOv8 to monitor student attentiveness from classroom video streams, processing 10,000+ frames.",
        "Generated attentiveness confidence scores and automatically marked students Present when confidence exceeded 80%, achieving 95% overall detection accuracy.",
        "Built an interactive admin dashboard using React.js and MongoDB for video uploads, attendance management, and weekly visual analytics reporting."
      ],
      metrics: ["10,000+ Video Frames", "95% Detection Accuracy", "Real-Time Visual Analytics"],
      github: "https://github.com/Manasamyakala/attendancetracker.git"
    }
  ] as Project[],

  skills: [
    {
      category: "AI, ML & Vision",
      icon: "Brain",
      items: ["YOLOv8", "CLIP ViT-B/32", "OpenCV", "Vector Search", "RAG Pipelines", "ONNX Runtime", "Sensor Fusion"]
    },
    {
      category: "Languages & Frameworks",
      icon: "Code2",
      items: ["Python", "Java", "JavaScript", "Rust", "React.js", "Flutter", "FastAPI", "Node.js", "SQL", "HTML/CSS"]
    },
    {
      category: "Backend & Databases",
      icon: "Server",
      items: ["Node.js", "Express.js", "FastAPI", "MongoDB Atlas", "MySQL", "REST APIs", "JWT Auth"]
    },
    {
      category: "DevOps & Tools",
      icon: "Wrench",
      items: ["Docker", "Git / GitHub", "Cloudinary", "Postman", "Linux / CLI"]
    }
  ],

  certifications: [
    {
      title: "Oracle Cloud Infrastructure (OCI) 2025 Certified DevOps Professional",
      issuer: "Oracle Corporation",
      details: "Demonstrated expertise in continuous integration, cloud architecture, automated deployment pipelines, and infrastructure management."
    },
    {
      title: "Machine Learning Internship Certification",
      issuer: "Acmegrade Pvt. Ltd.",
      details: "Successfully completed intensive hands-on training and projects in supervised/unsupervised machine learning models."
    }
  ],

  qaList: [
    {
      id: "summary-qa",
      question: "Give me an overview of Manasa's background and projects.",
      answer: "Manasa Myakala specializes in Full-Stack Web Development, Computer Vision (YOLOv8, CLIP ViT), and FastAPI REST architectures. She has built real-time counter-drone defense platforms, tagless vector-search pet recovery systems, and automated vision analytics.",
      sources: [
        { title: "Summary", doc: "resume.pdf", text: "Hands-on experience in full-stack web development, AI model integrations, Computer Vision pipelines, and FastAPI REST architectures." }
      ],
      tags: ["Overview", "Background", "Summary"]
    },
    {
      id: "drone-qa",
      question: "What are the details of the Counter-Drone Defense System?",
      answer: "Manasa engineered a Counter-Drone Surveillance & Defense System for Autonomous Fighting Vehicles (AFVs). The system processes video, acoustic, and motion sensor data using YOLOv8 and ONNX Runtime to detect enemy drones in real-time, calculate spatial trajectories/threat levels, and suggest automated soft-kill countermeasures (GPS jamming, signal interception, alerts) with low latency.",
      sources: [
        { title: "Counter-Drone Defense", doc: "resume.pdf", text: "Developed AI defense system for AFVs to detect, track and analyze hostile drones in real time using ONNX Runtime object detection." }
      ],
      tags: ["Counter-Drone", "YOLOv8", "ONNX Runtime", "Computer Vision", "Rust"]
    },
    {
      id: "pettrack-qa",
      question: "Tell me about PetTrack AI vector search platform.",
      answer: "PetTrack is a tagless lost pet recovery platform built by Manasa using Flutter and FastAPI. Instead of relying on manual text tags, it ingests pet photos and passes them through OpenAI's CLIP ViT-B/32 vision model to generate 512-dimensional image embeddings. It then uses cosine similarity against MongoDB Atlas to match and retrieve the top-5 candidate pets in under 1 second.",
      sources: [
        { title: "PetTrack Project", doc: "resume.pdf", text: "Built cross-platform Flutter app for lost pet recovery using CLIP ViT-B/32 image embeddings and cosine similarity... returning top 5 matches in <1s." }
      ],
      tags: ["PetTrack", "CLIP", "Vector Search", "Flutter"]
    },
    {
      id: "experience-qa",
      question: "Tell me about Manasa's work experience at Indus Tech Solutions & Acmegrade.",
      answer: "Manasa worked as a Web Development Intern at Indus Tech Solutions (Dec 2024 – Jul 2025) building FastAPI REST endpoints and backend modules, and completed a Machine Learning Internship at Acmegrade Pvt. Ltd.",
      sources: [
        { title: "Work Experience", doc: "resume.pdf", text: "Intern [Indus Tech Solutions] & Machine Learning Internship at Acmegrade." }
      ],
      tags: ["Internship", "FastAPI", "Acmegrade", "Python"]
    },
    {
      id: "skills-qa",
      question: "What is Manasa's technical stack?",
      answer: "• **Languages**: Python, Java, JavaScript, Rust, SQL, HTML/CSS\n• **Frameworks & UI**: React.js, Flutter, FastAPI, Node.js, Express.js\n• **AI & Vision**: YOLOv8, CLIP ViT-B/32, OpenCV, Vector Search, ONNX Runtime, Sensor Fusion\n• **Databases & DevOps**: MongoDB Atlas, MySQL, Docker, Git, Cloudinary, Firebase Auth.",
      sources: [
        { title: "Technical Skills", doc: "resume.pdf", text: "Languages, AI/ML, Backend & APIs, Databases, DevOps & Tools." }
      ],
      tags: ["Skills", "Tech Stack", "Languages"]
    }
  ] as QAData[]
};
