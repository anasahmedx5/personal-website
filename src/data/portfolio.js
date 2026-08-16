export const portfolioData = {
  personal: {
    name: "Anas Ahmed",
    handle: "anasahmed.dev",
    role: "Aspiring Machine Learning Engineer",
    subtitle: "Building Deep Learning Models & Advanced ML Pipelines",
    tagline: "Aspiring Machine Learning Engineer with a strong passion for technology, continuous learning, and applying AI to real-world problems. Proven track record of building deep learning models, engineering advanced ensemble pipelines, and deploying interactive applications.",
    description: "I am a Computer Science student at Alexandria University specializing in Artificial Intelligence. Passionate about machine learning, deep learning, computer vision, and speech processing, I design and deploy end-to-end intelligent models to solve complex real-world challenges.",
    location: "Alexandria, Egypt",
    email: "anasfekrywork@outlook.com",
    phone: "+201211177265",
    resumeUrl: "/Anas_Ahmed_Resume.pdf",
    status: "Open for ML / AI Opportunities",
  },
  socialLinks: {
    github: "https://github.com/anasahmedx5",
    linkedin: "https://www.linkedin.com/in/anasahmedx5/",
    email: "mailto:anasfekrywork@outlook.com",
  },
  sections: [
    { id: "introduction", title: "Introduction", path: "/" },
    { id: "about", title: "About Me", path: "/about" },
    { id: "projects", title: "Projects", path: "/projects" },
    { id: "skills-tools", title: "Skills & Tools", path: "/skills-tools" },
    { id: "experience", title: "Experience", path: "/experience" },
    { id: "education", title: "Education & Certs", path: "/education" },
    { id: "contact", title: "Contact", path: "/contact" },
    { id: "stats", title: "Stats", path: "/stats" },
  ],
  about: {
    bio: [
      "Hello! I'm Anas Ahmed, an aspiring Machine Learning Engineer studying Computer Science with a specialization in Artificial Intelligence at Alexandria University (expected May 2027).",
      "I specialize in training deep learning models, engineering advanced heterogeneous ensemble stacking pipelines, and deploying interactive AI applications. From phoneme-level speech analysis to medical image classification and astronomical data stacking, I love building impactful AI solutions.",
      "Beyond academic excellence, I have completed specialized certifications from Stanford (CS230 Deep Learning, CS231N Computer Vision) and DeepLearning.AI, alongside hands-on industrial computing internships at SIDPEC and ETHYDCO."
    ],
    highlights: [
      { title: "Deep Learning & Computer Vision", description: "Experience fine-tuning CNN architectures like MobileNetV2, implementing transfer learning, and handling image augmentation pipelines." },
      { title: "Speech & Multimodal AI", description: "Built speech processing & phoneme tracing pipelines using Whisper Small, MFA, GOP, OpenCV, and Groq LLM API." },
      { title: "Heterogeneous Ensemble Stacking", description: "Engineered 2-layer stacking pipelines with LightGBM, XGBoost, CatBoost, and Ridge meta-models optimized via Nelder-Mead." },
      { title: "Industrial Computing & IT", description: "Gained enterprise experience analyzing database architectures, IT infrastructure, control processes, and cybersecurity at SIDPEC & ETHYDCO." },
    ]
  },
  projects: [
    {
      id: "ai-children-learning-platform",
      title: "AI-Powered Children's Learning Platform",
      subtitle: "Speech & Computer Vision Multimodal System",
      description: "Developed a multimodal learning platform combining Whisper Small, Computer Vision, and adaptive learning for English pronunciation and handwriting.",
      fullDescription: "Built phoneme-level pronunciation and handwriting tracing pipelines using MFA, GOP, TensorFlow, and OpenCV. Implemented personalized learning paths and LLM-powered feedback using the Groq API for an adaptive, interactive learning experience.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Whisper Small", "MFA", "GOP", "Groq API", "LLMs"],
      githubUrl: "https://github.com/anasahmedx5",
      liveUrl: "https://github.com/anasahmedx5",
      featured: true,
      category: "AI / Multimodal"
    },
    {
      id: "chest-xray-pneumonia-detection",
      title: "Chest X-Ray Pneumonia Detection",
      subtitle: "Deep Learning (MobileNetV2) Medical Classifier",
      description: "Trained and fine-tuned a MobileNetV2 model to classify chest X-ray images as Pneumonia or Normal with data augmentation and Streamlit deployment.",
      fullDescription: "Trained and fine-tuned a MobileNetV2 model to classify chest X-ray images as Pneumonia or Normal. Applied data augmentation, batch normalization, and dropout techniques to improve model generalization. Deployed an interactive Streamlit web application for real-time predictions with confidence scores.",
      technologies: ["Python", "TensorFlow", "Keras", "MobileNetV2", "Streamlit", "OpenCV", "Deep Learning"],
      githubUrl: "https://github.com/anasahmedx5",
      liveUrl: "https://github.com/anasahmedx5",
      featured: true,
      category: "Deep Learning"
    },
    {
      id: "stellar-classification-stacking",
      title: "Stellar Classification Ensemble",
      subtitle: "Advanced Heterogeneous Stacking Pipeline",
      description: "Built a 2-layer stacking pipeline using LightGBM, XGBoost, CatBoost, and a Ridge meta-model with custom astronomical feature engineering.",
      fullDescription: "Built a 2-layer stacking pipeline using LightGBM, XGBoost, CatBoost, and a Ridge meta-model. Engineered custom astronomical features including color deltas and redshift scaling. Optimized final decision boundaries using Nelder-Mead to maximize Balanced Accuracy.",
      technologies: ["Python", "LightGBM", "XGBoost", "CatBoost", "Scikit-Learn", "Pandas", "NumPy", "Feature Engineering"],
      githubUrl: "https://github.com/anasahmedx5",
      liveUrl: "https://github.com/anasahmedx5",
      featured: true,
      category: "Machine Learning"
    }
  ],
  skills: [
    { name: "Python", category: "Languages", fill: "#3776AB", level: "Expert" },
    { name: "Java", category: "Languages", fill: "#007396", level: "Intermediate" },
    { name: "C", category: "Languages", fill: "#A8B9CC", level: "Intermediate" },
    { name: "SQL (MySQL, SQLite3)", category: "Languages", fill: "#4479A1", level: "Advanced" },
    { name: "TensorFlow", category: "AI / Machine Learning", fill: "#FF6F00", level: "Advanced" },
    { name: "Keras", category: "AI / Machine Learning", fill: "#D00000", level: "Advanced" },
    { name: "Scikit-Learn", category: "AI / Machine Learning", fill: "#F7931E", level: "Expert" },
    { name: "XGBoost", category: "AI / Machine Learning", fill: "#15A216", level: "Advanced" },
    { name: "LightGBM", category: "AI / Machine Learning", fill: "#28B463", level: "Advanced" },
    { name: "CatBoost", category: "AI / Machine Learning", fill: "#FFCC00", level: "Advanced" },
    { name: "Pandas", category: "Data & Processing", fill: "#150458", level: "Expert" },
    { name: "NumPy", category: "Data & Processing", fill: "#013243", level: "Expert" },
    { name: "Matplotlib", category: "Data & Processing", fill: "#11557C", level: "Advanced" },
    { name: "OpenCV", category: "AI / Machine Learning", fill: "#5C3EE8", level: "Advanced" },
    { name: "Flask", category: "Backend", fill: "#000000", level: "Intermediate" },
    { name: "Streamlit", category: "Backend", fill: "#FF4B4B", level: "Advanced" },
    { name: "Git & GitHub", category: "DevOps & Tools", fill: "#F05032", level: "Advanced" },
    { name: "VS Code", category: "DevOps & Tools", fill: "#007ACC", level: "Expert" },
    { name: "Linux", category: "DevOps & Tools", fill: "#FCC624", level: "Intermediate" },
    { name: "Cloud Computing", category: "DevOps & Tools", fill: "#4285F4", level: "Intermediate" },
    { name: "Deep Neural Networks", category: "Concepts", fill: "#8E44AD", level: "Expert" },
    { name: "CNNs", category: "Concepts", fill: "#2980B9", level: "Expert" },
    { name: "Sequence Models (GRU/LSTM)", category: "Concepts", fill: "#D35400", level: "Advanced" },
    { name: "Feature Engineering", category: "Concepts", fill: "#27AE60", level: "Expert" }
  ],
  experience: [
    {
      role: "Industrial Data & Systems Intern",
      company: "SIDPEC (Sidi Kerir Petrochemicals Company)",
      location: "Alexandria, Egypt",
      period: "Internship",
      description: "Collaborated with technical teams to evaluate industrial computing systems, control processes, and enterprise IT infrastructure.",
      achievements: [
        "Collaborated with technical teams to analyze and optimize data processing workflows used in large-scale industrial environments.",
        "Evaluated industrial computing systems and software applications to identify operational efficiency improvements.",
        "Analyzed the fundamental architectures of automation systems, control processes, and enterprise IT infrastructure."
      ],
      technologies: ["Data Processing", "Industrial Computing", "Automation Systems", "IT Infrastructure"]
    },
    {
      role: "Enterprise Database & Cybersecurity Intern",
      company: "ETHYDCO (Ethylene & Derivatives Company)",
      location: "Alexandria, Egypt",
      period: "Internship",
      description: "Analyzed enterprise-level database architectures, risk mitigation strategies, and networking infrastructure.",
      achievements: [
        "Analyzed enterprise-level database architectures to understand how large-scale systems are designed, managed, and secured.",
        "Evaluated data protection strategies, risk-mitigation frameworks, and cybersecurity practices implemented in industrial environments.",
        "Investigated networking infrastructure, including enterprise switches and routing protocols, to ensure reliable plant-wide connectivity."
      ],
      technologies: ["Database Architecture", "Cybersecurity", "Networking Protocols", "Risk Mitigation"]
    }
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science (Specializing in Artificial Intelligence)",
      institution: "Alexandria University",
      period: "October 2023 – Expected May 2027",
      location: "Alexandria, Egypt",
      details: "Comprehensive coursework in Artificial Intelligence, Deep Neural Networks, Computer Vision, Sequence Models, Data Structures & Algorithms, and Feature Engineering.",
      honors: "Specialization in Artificial Intelligence",
      coursework: [
        "Artificial Intelligence",
        "Deep Neural Networks",
        "Computer Vision",
        "Sequence Models (GRU/LSTM)",
        "Data Structures & Algorithms",
        "Feature Engineering",
        "Memory Management"
      ]
    }
  ],
  certificates: [
    {
      title: "Machine Learning Specialization",
      provider: "DeepLearning.AI",
      details: "Built a strong foundation in supervised and unsupervised learning; implemented regression models, neural networks, decision trees, and ensemble methods; applied model evaluation and bias–variance analysis."
    },
    {
      title: "CS230 – Deep Learning",
      provider: "Stanford University",
      details: "Studied deep neural network architectures and the mathematics of backpropagation; implemented optimization techniques including Adam, RMSProp, and learning rate scheduling; applied regularization to mitigate overfitting."
    },
    {
      title: "CS231N – Deep Learning for Computer Vision",
      provider: "Stanford University",
      details: "Focused on convolutional neural networks (CNNs) for image classification tasks; studied transfer learning, feature extraction, and modern CNN architectures on image-based datasets."
    }
  ],
  stats: {
    githubStats: {
      totalStars: "35+",
      totalCommits: "450+",
      totalPRs: "25+",
      contributionsYear: "650+"
    },
    profileMetrics: {
      initialViews: 980,
      initialLoves: 245
    }
  }
};

