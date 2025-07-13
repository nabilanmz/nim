type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type Education = {
  institute: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type Experience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'duual',
    description:
      'Create timetable from classes in database based on preferences. DEAP, React, Laravel, MySQL.',
    link: 'https://github.com/nabilanmz/timetable-api',
    video:
      'https://ucarecdn.com/a75e4b38-2877-4e5c-a814-ac28a8a12b7e/',
    id: 'project1',
  },
  {
    // name: 'mögo',
    name: 'foodshare',
    description: 'Give, sell, or group order food. Flask.',
    link: 'https://github.com/nabilanmz/foodshare',
    video:
    'https://ucarecdn.com/7dd3cfa9-352a-4804-a92c-2e13d7066f66/ScreenRecording20250708at71355PM.mov',
    id: 'project3',
  },
  {
    name: 'Coffee Analytics',
    description: 'Coffee trends for insights on user demand, regional consumption, and trade patterns. Tableau.',
    link: '',
    video:
    'https://ucarecdn.com/cd6bf24f-fba6-4d1e-a5f7-a37bff2ccd03/',
    id: 'project2',
  },
  // {
  //   name: 'Property Rental Predictor',
  //   description: 'Interactive Tableau dashboard presenting coffee sales data.',
  //   link: 'https://motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
  //   id: 'project4',
  // },
]

export const EDUCATION: Education[] = [
  {
    institute: 'Multimedia University',
    title: 'Bachelor of Computer Science (Hons) (Data Science)',
    start: 'Oct 2022',
    end: 'Oct 2025',
    link: 'https://www.mmu.edu.my/',
    id: 'edu1',
  },
  {
    institute: '42 Kuala Lumpur',
    title: 'Core Programme',
    start: 'Sep 2021',
    end: 'Oct 2022',
    link: 'https://42kl.edu.my/',
    id: 'edu2',
  },
]

export const EXPERIENCE: Experience[] = [
  {
    company: 'CodeNection 2024',
    title: 'Closed Category Participant',
    start: 'Nov 2024',
    end: '',
    link: '',
    id: 'work1',
  },
  {
    company: 'CodeNection 2023',
    title: 'Assistant Head of Programme Division',
    start: 'Sep 2023',
    end: 'Dec 2023',
    link: '',
    id: 'work2',
  },
  {
    company: 'IT Society MMU Cyberjaya',
    title: 'Student Engagement Division Member',
    start: 'Mar 2023',
    end: 'Feb 2024',
    link: '',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const EMAIL = 'nabilanmzaid@gmail.com'

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    link: 'https://github.com/nabilanmz',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/nabilanmz',
  },
  {
    label: 'Email',
    link: `mailto:${EMAIL}`,
  },
  {
    label: 'Resume',
    link: 'https://ucarecdn.com/2877a1a0-62ea-4058-bb46-a389af4e46f5/',
  },
]

