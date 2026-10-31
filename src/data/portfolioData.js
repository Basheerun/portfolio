// ============================================================
// portfolioData.js — Single source of truth for portfolio content
// ============================================================

export const personalInfo = {
  name: "Shaik Kathhamma Basheerun",
  firstName: "Shaik Kathhamma Basheerun",
  brandName: "Shaik Kathhamma Basheerun", // shown in preloader, navbar, and footer
  title: "Java Full Stack Developer",
  location: "Nandyal, India",
  phone: "+919177047314",
  emails: {
    primary: "shaikkathammabasheerun@gmail.com",
    secondary: "",
  },
  summary: "B.Tech Graduate CS student who builds full-stack web apps with Java and React.",
  resumeUrl: "/Shaik_Kathhamma_Basheerun.pdf",
};

// TAP Academy — the academy you trained with. Used in the footer credit.
export const academy = {
  name: "TAP Academy",
  url: "https://thetapacademy.com/",
};

export const socialLinks = {
  github: "https://github.com/Basheerun",
  linkedin: "https://www.linkedin.com/in/shaik-kathhamma-basheerun",
  instagram: "",
};

export const heroContent = {
  greeting: "Hi, I'm Shaik Kathhamma Basheerun",
  titleHighlight: "Java Full Stack Developer",
  subtitle: "B.Tech Graduate CS student passionate about engineering scalable web applications using Java, React, and modern database architectures.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: "mailto:shaikkathammabasheerun@gmail.com?subject=Hiring Inquiry – Portfolio&body=Hello,%0D%0A%0D%0AI came across your portfolio and would like to discuss an opportunity with you.%0D%0A%0D%0ABest Regards,",
  },
  ctaResume: { text: "Download Resume", href: "/Shaik_Kathhamma_Basheerun.pdf" },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `Hi, my name is <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Shaik Kathhamma Basheerun</span>, a Java Full Stack Developer and B.Tech Computer Science graduate from Rajeev Gandhi Memorial College of Engineering and Technology, Nandyal. I build full-stack web applications with Java, React, and modern databases, sharpening my skills through the placement training program at TAP Academy. Passionate about problem-solving and software engineering, I strive to design clean, scalable, and user-centric digital solutions.`,
  techStack: ["Java", "Python", "JavaScript", "React"],
};

export const skillsContent = {
  badge: "My Process",
  heading: "Here's how I turn ideas into real-world products",
  description: "A structured, full-stack approach from system design and modeling to scalable deployment.",
  cards: [
    { number: "01", title: "Research", text: "Analyze project requirements, study system workflows, and identify optimal architectural patterns." },
    { number: "02", title: "Design", text: "Design responsive interfaces, relational database schemas, and structured RESTful API endpoints." },
    { number: "03", title: "Develop", text: "Implement dynamic frontends with React and build scalable backend application logic with Java." },
    { number: "04", title: "Deploy", text: "Test thoroughly, optimize code performance, and deploy reliable production-ready software." },
  ],
  endText: "Ready to ship!",
};

export const technicalSkills = {
  categories: [
    {
      title: "Programming",
      skills: [{ name: "Java" }, { name: "Python" }, { name: "JavaScript" }],
    },
    {
      title: "Web Development",
      skills: [{ name: "HTML" }, { name: "CSS" }, { name: "React" }],
    },
    {
      title: "Databases",
      skills: [{ name: "MySQL" }, { name: "MongoDB" }],
    },
    {
      title: "Tools",
      skills: [{ name: "Git" }, { name: "GitHub" }, { name: "VS Code" }],
    },
  ],
};

export const leadershipList = [
  {
    title: "Campus Hackathons & Paper Presentations",
    description: "Participated in university-level technical hackathons and delivered technical paper presentations on emerging technologies.",
    role: "Participant & Presenter",
    badge: "Hackathons",
  },
  {
    title: "College Events Volunteering",
    description: "Volunteered at college technical and cultural events, demonstrating teamwork, coordination, and leadership skills.",
    role: "Event Volunteer",
    badge: "Leadership",
  },
];

export const internshipsList = [
  {
    organization: "TAP Academy",
    role: "Full Stack Developer Trainee",
    duration: "2024 - Present",
    skills: [
      "Full-stack application architecture and end-to-end development",
      "Object-oriented programming and core data structures in Java",
      "Modern interactive frontend interfaces with React and Tailwind CSS",
      "Database schema modeling, SQL query tuning, and API integration",
    ],
    tech: ["Java", "React", "MySQL", "JavaScript", "Tailwind CSS"],
  },
];

export const softSkillsList = [
  { name: "Team Collaboration", icon: "🤝", desc: "Collaborate effectively across cross-functional student teams to build cohesive software projects." },
  { name: "Problem Solving", icon: "🧩", desc: "Break down complex algorithmic and system design challenges into structured, manageable steps." },
  { name: "Communication", icon: "💬", desc: "Articulate technical ideas and software solutions clearly in project presentations and documentation." },
  { name: "Leadership", icon: "⚡", desc: "Coordinate initiatives during campus events and guide peer teams toward shared project milestones." },
];

export const projects = [
  {
    id: "medicare-fraud-detection",
    number: "01",
    badge: "🚀 Flagship Project",
    title: "Hybrid Deep Learning & Graph-Based Medicare Fraud Detection System",
    description: "Detects suspicious healthcare claims using deep learning, graph analysis, and SHAP explainability with a Streamlit interface.",
    techTags: ["Python", "Pandas", "Scikit-learn", "GNN", "Streamlit", "SHAP"],
    links: { github: "https://github.com/Basheerun", demo: "" },
    isFlagship: true,
  },
  {
    id: "smart-disease-prediction",
    number: "02",
    badge: null,
    title: "Smart Disease Prediction Web Application",
    description: "Predicts possible diseases based on user symptoms using Random Forest, Naive Bayes, and SVM with a Flask web application.",
    techTags: ["Python", "Flask", "Scikit-learn", "Pandas", "HTML", "CSS"],
    links: { github: "https://github.com/Basheerun", demo: "" },
    isFlagship: false,
  },
];

export const certificates = {
  featured: [],
  viewAllUrl: "https://www.linkedin.com/in/shaik-kathhamma-basheerun",
};

export const education = {
  degree: "B.Tech. Computer Science and Engineering",
  institution: "Rajeev Gandhi Memorial College of Engineering and Technology",
  cgpa: "2022 - 2026",
  graduation: "2026",
  twelfth: "",
  tenth: "",
};

export const footerContent = {
  taglines: ["Java Full Stack Developer", "Java · React · MySQL", "Building Scalable Web Solutions"],
  credential: "B.Tech. Computer Science and Engineering",
  copyright: `© ${new Date().getFullYear()} Shaik Kathhamma Basheerun | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};

