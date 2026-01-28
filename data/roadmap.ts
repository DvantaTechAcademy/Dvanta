export interface RoadmapPhase {
  id: string;
  title: string;
  duration: string;
  description: string;
  outcomes: string[];
  icon: string;
}

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: '1',
    title: 'Industry Orientation',
    duration: 'Week 1',
    description: 'Understand how real IT companies work, software development lifecycle, roles, and industry expectations from freshers.',
    outcomes: [
      'How real IT companies work',
      'Software development lifecycle',
      'Roles: Backend, Frontend, QA, DevOps',
      'Industry expectations from freshers',
      'Professional mindset',
    ],
    icon: '🎯',
  },
  {
    id: '2',
    title: 'Strong Fundamentals',
    duration: '1–3 Months',
    description: 'Build core programming skills with logic building, OOP concepts, SQL, Git, and debugging basics.',
    outcomes: [
      'Programming fundamentals (Java / Python / JavaScript)',
      'Logic building & problem solving',
      'OOP concepts with real examples',
      'SQL & database basics',
      'Git & debugging basics',
    ],
    icon: '📚',
  },
  {
    id: '3',
    title: 'Core Skill Development',
    duration: '3–5 Months',
    description: 'Develop backend and frontend skills with API integration, authentication, and exception handling.',
    outcomes: [
      'Backend development (APIs, business logic)',
      'Frontend development (UI, React basics)',
      'API integration',
      'Authentication & authorization',
      'Exception handling & logging',
    ],
    icon: '💻',
  },
  {
    id: '4',
    title: 'Real-Time Project & Architecture',
    duration: '6–8 Months',
    description: 'Work on live industry projects with clean code practices, design patterns, and architecture basics.',
    outcomes: [
      'Live industry project',
      'Clean code & best practices',
      'Design patterns & architecture basics',
      'Performance & scalability fundamentals',
      'Code reviews by Architect',
    ],
    icon: '🏗️',
  },
  {
    id: '5',
    title: 'Internship / Production Exposure',
    duration: '8–10 Months',
    description: 'Work on production-like systems with bug fixing, deployment understanding, and production issue analysis.',
    outcomes: [
      'Working on production-like systems',
      'Bug fixing & enhancements',
      'Deployment understanding',
      'Production issue analysis',
      'Client-style requirements handling',
    ],
    icon: '🚀',
  },
  {
    id: '6',
    title: 'Job Readiness & Interview Preparation',
    duration: '10–12 Months',
    description: 'Prepare for interviews with resume building, mock interviews, and system design basics.',
    outcomes: [
      'Resume & LinkedIn profile creation',
      'Core concept revision',
      'Mock technical interviews',
      'HR & communication training',
      'Basic system design for freshers',
    ],
    icon: '🎓',
  },
  {
    id: '7',
    title: 'Placement Support & Career Guidance',
    duration: 'Ongoing',
    description: 'Get interview referrals, company requirement mapping, and long-term career support.',
    outcomes: [
      'Interview referrals & guidance',
      'Company requirement mapping',
      'Salary negotiation basics',
      'On-job support for first 6 months',
      'Career growth roadmap',
    ],
    icon: '🌟',
  },
];


