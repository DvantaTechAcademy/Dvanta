export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  duration: string;
  modules?: string[];
  outcome: string;
  image?: string;
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Java Full Stack Developer',
    slug: 'java-full-stack',
    description: 'A complete end-to-end program focused on how enterprise Java applications are designed, built, tested, and deployed.',
    duration: '9–12 Months',
    modules: [
      'Core Java & OOP Concepts',
      'Advanced Java & Collections',
      'Spring & Spring Boot',
      'REST APIs & Microservices Basics',
      'Database Design (SQL)',
      'Frontend (HTML, CSS, JavaScript, React)',
      'Git, Code Review & Best Practices',
      'Live Enterprise-Style Project',
    ],
    outcome: 'Ready for Junior Java Developer / Backend Developer roles with real-world confidence.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800',
  },
  {
    id: '2',
    title: 'Full Stack Web Developer (React Focused)',
    slug: 'full-stack-web',
    description: 'Build modern, responsive, and performance-optimized websites using industry-standard tools.',
    duration: '6–9 Months',
    modules: [
      'HTML5 & CSS3',
      'Responsive Design',
      'JavaScript Fundamentals',
      'React Basics',
      'UI Performance & Optimization',
      'Real Website Projects',
    ],
    outcome: 'Frontend Developer / Web Designer readiness.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
  },
  {
    id: '3',
    title: 'AI / ML Foundations',
    slug: 'ai-ml-foundations',
    description: 'Designed for beginners who want to understand AI/ML concepts clearly before advanced specialization.',
    duration: '4–6 Months',
    modules: [
      'Python for AI',
      'NumPy, Pandas, Matplotlib',
      'Machine Learning Basics',
      'Supervised & Unsupervised Learning',
      'Mini AI Projects',
      'Industry Use Cases',
    ],
    outcome: 'Strong foundation for AI/ML & Data roles.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
  },
  {
    id: '4',
    title: 'Generative AI & ChatGPT for Developers',
    slug: 'generative-ai',
    description: 'Learn practical AI usage for coding and productivity with real-world use cases.',
    duration: '1.5–3 Months',
    modules: [
      'Generative AI Fundamentals',
      'Prompt Engineering',
      'ChatGPT for Coding & Productivity',
      'AI for Java & Web Developers',
      'Real-world Use Cases',
    ],
    outcome: 'Developers skilled in practical AI usage.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
  },
  {
    id: '5',
    title: 'DevOps Fundamentals for Developers',
    slug: 'devops-fundamentals',
    description: 'Understand real deployments, CI/CD, Docker, and production environments.',
    duration: '1.5–3 Months',
    modules: [
      'Linux Basics',
      'Git & GitHub',
      'CI/CD with Jenkins',
      'Docker Basics',
      'Production Deployment Concepts',
    ],
    outcome: 'Developers who understand real deployments.',
    image: 'https://images.unsplash.com/photo-1618401479427-c8ef9465fbe1?w=800',
  },
  {
    id: '6',
    title: 'Python & Data Science',
    slug: 'python-data-science',
    description: 'Learn Python the way industry uses it — not just syntax, but problem solving, data handling, and analytics thinking.',
    duration: '4–6 Months',
    modules: [
      'Python Fundamentals & Logic Building',
      'NumPy & Pandas',
      'Data Cleaning & Processing',
      'Exploratory Data Analysis',
      'Machine Learning Basics',
      'Real Data Projects',
    ],
    outcome: 'Entry-level Data Analyst / Python Developer readiness.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800',
  },
];



