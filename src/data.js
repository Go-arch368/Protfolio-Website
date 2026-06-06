// ── Site-wide data file ──────────────────────────────────
// All content lives here — edit once, updates everywhere.

export const SOCIAL = {
  github:   "https://github.com/Go-arch368",
  linkedin: "https://linkedin.com/in/gowtham-t-015888225",
  email:    "mailto:gowthamtj0808@gmail.com",
  resume:   "https://drive.google.com/file/d/16_aEeUhUv-017JEn7_dnltzLlrWNd1pv/view?usp=sharing",
};

export const STATS = [
  { value: 1.5, suffix: "+", label: "Years\nExperience",       decimal: true  },
  { value: 3,   suffix: "",  label: "Production\nProjects",    decimal: false },
  { value: 2,   suffix: "",  label: "Personal\nProjects",      decimal: false },
];

export const ABOUT_STATS = [
  { value: "1.5+", label: "Years Experience"      },
  { value: "3",    label: "Production Projects"   },
  { value: "2",    label: "Personal Projects"     },
  { value: "1",    label: "Company — Algorithra AI" },
];

export const UPSKILLING = [
  "TypeScript Advanced",
  "PostgreSQL",
  "AWS",
  "Docker",
  "LLM / OpenAI APIs",
];

export const EXPERIENCE = [
  {
    company:  "Algorithra AI",
    url:      "https://algorithraai.com",
    role:     "Frontend Developer",
    period:   "January 2025 – March 2026",
    duration: "1.5 years",
    team:     "6–10 engineers",
    projects: [
      {
        name: "District Business",
        subtitle: "B2B Marketplace",
        desc: "Built pages and reusable components using Next.js and Tailwind CSS. Integrated RESTful APIs, scraped and sanitised business data, implemented multi-locale routing for buyers and employees.",
        tags: ["Next.js", "Tailwind", "MongoDB", "REST APIs"],
      },
      {
        name: "Zotly",
        subtitle: "SaaS Dashboard",
        desc: "Built Users, Customers, Settings, and Dashboard routes. Designed analytics widgets with Recharts. Integrated CRUD APIs with role-based access control.",
        tags: ["React.js", "Recharts", "Node.js", "RBAC"],
      },
      {
        name: "Claritev",
        subtitle: "Enterprise Microfrontend",
        desc: "Contributed to large-scale enterprise app using Microfrontend architecture with React, TypeScript, Vite. Built Practitioner modules, configured API proxies, delivered Jira tickets in Agile/Scrum.",
        tags: ["React.js", "TypeScript", "Vite", "Microfrontend"],
      },
    ],
  },
];

export const PROJECTS = [
  {
    num:   "01",
    title: "JobFinder",
    desc:  "Full stack job portal with role-based access for Admin, Recruiter, and Candidate. JWT auth, live video/audio capture via React Webcam, real-time messaging, job fair management, and Nodemailer email verification.",
    tags:  ["React.js", "Node.js", "MongoDB", "Redux", "Cloudinary", "JWT"],
    links: [
      { label: "Live Demo", url: "https://job-applying-portal-frontend.onrender.com/" },
      { label: "GitHub",    url: "https://github.com/Go-arch368/Job-Applying-Portal"  },
    ],
  },
  {
    num:   "02",
    title: "Claritev Microfrontend",
    desc:  "Enterprise-grade Microfrontend architecture with Host App, Remote modules, and shared UI component libraries. API proxy configuration and Practitioner module features.",
    tags:  ["React.js", "TypeScript", "Vite", "Microfrontend"],
    links: [
      { label: "Host App",  url: "https://github.com/Go-arch368/Host_App-Micro-FE"     },
      { label: "Remote",    url: "https://github.com/Go-arch368/Remote_Practitioner"    },
      { label: "UI Lib",    url: "https://github.com/Go-arch368/prvcommonUI---Library"  },
    ],
  },
  {
    num:   "03",
    title: "URL Shortener",
    desc:  "URL shortener with short-link generation, redirect logic, click analytics, IP-based geolocation detection, and device-type identification. TypeScript on core utilities.",
    tags:  ["Node.js", "TypeScript", "REST API", "Express", "Analytics"],
    links: [
      { label: "GitHub", url: "https://github.com/Go-arch368/url-shortener" },
    ],
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      "React.js","Next.js","JavaScript ES6+","TypeScript",
      "HTML5","CSS3","Tailwind CSS","Redux","React Router",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js","Express.js","REST APIs","JWT Auth",
      "Spring Boot","Bcrypt.js","Nodemailer","Cron Scheduler",
    ],
  },
  {
    category: "Database",
    items: ["MongoDB","Mongoose","PostgreSQL","Oracle"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Git","GitHub","Vercel","Render",
      "Docker (learning)","Postman","Jira","VS Code",
    ],
  },
  {
    category: "Libraries",
    items: [
      "Recharts","Cloudinary","Multer","Axios",
      "Stripe","React Leaflet","FullCalendar","React Webcam",
    ],
  },
  {
    category: "Currently Learning",
    items: [
      "TypeScript Advanced","AWS","Docker",
      "PostgreSQL Deep Dive","LLM / OpenAI APIs",
    ],
  },
];
