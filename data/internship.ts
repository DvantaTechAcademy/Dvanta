export interface InternshipPhase {
  id: string;
  title: string;
  duration: string;
  description: string;
  deliverables: string[];
  activities?: string[];
}

export const internshipPhases: InternshipPhase[] = [
  {
    id: '1',
    title: 'Internship Onboarding',
    duration: 'Week 1',
    description: 'Understanding IT company culture and workflow, Agile & sprint basics, tools setup, and professional communication standards.',
    deliverables: ['GitHub profile setup', 'First code commit'],
    activities: [
      'Understanding IT company culture and workflow',
      'Agile & sprint basics',
      'Tools setup: Git, IDE, issue tracking',
      'Intern responsibilities and expectations',
      'Professional communication standards',
    ],
  },
  {
    id: '2',
    title: 'Project Environment & Code Understanding',
    duration: 'Weeks 2–4',
    description: 'Understanding project architecture, local environment setup, reading existing enterprise code, and fixing small bugs.',
    deliverables: ['Project running locally', 'First bug fix completed'],
    activities: [
      'Understanding project architecture',
      'Local environment setup',
      'Reading existing enterprise code',
      'Fixing small bugs and improvements',
      'Following coding standards',
    ],
  },
  {
    id: '3',
    title: 'Task Ownership',
    duration: 'Month 2–3',
    description: 'Working on backend or frontend tasks, API development, database queries, UI changes, and code review participation.',
    deliverables: ['Multiple completed and reviewed tasks'],
    activities: [
      'Working on backend or frontend tasks',
      'API development and integration',
      'Database queries and validations',
      'UI changes and form validations',
      'Code review participation',
    ],
  },
  {
    id: '4',
    title: 'Enterprise & Production Exposure',
    duration: 'Month 4',
    description: 'Environment understanding, log analysis, security concepts, performance awareness, and root cause analysis.',
    deliverables: ['RCA document submission'],
    activities: [
      'Environment understanding (DEV/QA/PROD)',
      'Log analysis and debugging',
      'Security and role-based access concepts',
      'Performance awareness',
      'Root cause analysis of issues',
    ],
  },
  {
    id: '5',
    title: 'DevOps & Deployment Awareness',
    duration: 'Month 5',
    description: 'Build and deployment lifecycle, CI/CD pipeline overview, Docker fundamentals, and deployment concepts.',
    deliverables: ['Successful test environment deployment'],
    activities: [
      'Build and deployment lifecycle',
      'CI/CD pipeline overview',
      'Docker fundamentals',
      'Server and application logs',
      'Hotfix and rollback concepts',
    ],
  },
  {
    id: '6',
    title: 'Final Project & Evaluation',
    duration: 'Month 6',
    description: 'End-to-end project implementation, bug fixing, feature enhancements, Agile ceremonies, and project demo presentation.',
    deliverables: ['Final project demo', 'Internship evaluation'],
    activities: [
      'End-to-end project implementation',
      'Bug fixing and feature enhancements',
      'Agile ceremonies participation',
      'Code reviews and documentation',
      'Project demo presentation',
    ],
  },
];

export const dailyActivities = [
  'Daily stand-up updates',
  'Assigned task execution',
  'Regular Git commits',
  'Mentor-led code reviews',
  'Documentation and learning notes',
];

export const internshipCompletion = {
  certificates: [
    'Industry Internship Certificate',
    'Live Project Experience Certificate',
  ],
  support: 'Interview readiness guidance',
};


