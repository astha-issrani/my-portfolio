export const profile = {
  name: 'ASTHA ISSRANI',
  tagline: 'Backend Developer · Full-Stack Engineer',
  location: 'Kanpur, Uttar Pradesh',
  email: 'asthaissrani711@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/astha-issrani-a80389311',
    leetcode: 'https://leetcode.com/u/astha_issrani07/',
    github: 'https://github.com/astha-issrani',
  },
}

export const experience = [
  {
    role: 'Backend Developer Intern',
    company: 'PurpleMerit',
    period: 'Apr 2026 – Present',
    location: 'Remote',
    highlights: [
      'Developed a Chrome Extension to automate the upload of recorded meetings to the company\'s internal platform, eliminating manual upload workflows.',
      'Built the storage platform for managing and organizing recorded meetings using Node.js/Express, handling file storage, retrieval, and seamless integration with the extension via REST APIs.',
    ],
    tech: ['Node.js', 'Express', 'Chrome Extension', 'REST APIs'],
  },
  {
    role: 'Web Developer Intern',
    company: 'Margdarshan Prep',
    period: 'Feb 2026 – Mar 2026',
    location: 'Remote',
    highlights: [
      'Developed high-performance, responsive webpages using WordPress and Elementor, utilizing image optimization to improve Core Web Vitals and layout consistency across all devices.',
      'Implemented SEO optimization and managed content updates to enhance organic search visibility.',
    ],
    tech: ['WordPress', 'Elementor', 'SEO', 'Core Web Vitals'],
  },
]

export const projectSections = [
  {
    id: 'personal',
    title: 'Personal Projects',
    subtitle: 'Independent full-stack builds',
    projects: [
      { name: 'Meetify' },
      { name: 'VibeKit Studio' },
    ],
  },
  {
    id: 'internship',
    title: 'Internship Projects',
    subtitle: 'Built during PurpleMerit internship',
    projects: [
      { name: 'Purple Stream App' },
      { name: 'E-Book Service' },
      { name: 'Website Maker' },
      { name: 'UI/UX Generator' },
      { name: 'Bank Statement Converter' },
      { name: 'CertForge' },
      { name: 'Affiliate Website' },
      { name: 'Corevita Website' },
      { name: 'Blog Page' },
      { name: 'Editorial Page' },
      { name: 'Etsy Bestsellers' },
      { name: 'Lulu Stream Clone' },
      { name: 'Astrology Website' },
      { name: 'Purple Extension' },
      { name: 'Shorts Generator' },
    ],
  },
]

// Backward-compatible export
export const projects = projectSections.flatMap((s) => s.projects)

export const skills = {
  Languages: ['JavaScript (ES6+)', 'C++', 'Python'],
  Frontend: ['HTML5', 'CSS3', 'React.js', 'Tailwind CSS', 'Vite', 'Responsive UI', 'API Integration', 'WordPress'],
  Backend: ['Node.js', 'Express.js', 'RESTful API', 'MongoDB', 'Mongoose', 'MVC', 'Middleware', 'HTTP', 'CORS', 'JWT'],
  'DevOps/Tools': ['Docker', 'CI/CD (GitHub Actions)', 'AWS (EC2)', 'Git', 'GitHub', 'Postman', 'Jest', 'VS Code', 'Vercel', 'Serverless Architecture'],
  Databases: ['MongoDB', 'SQL (Indexing, Aggregation, Schema Design)', 'PostgreSQL (Supabase)'],
  'Soft Skills': ['Problem-Solving', 'Ownership', 'Communication', 'Teamwork'],
}

export const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    period: '2022 – 2026',
    institution: 'Pranveer Singh Institute of Technology, Kanpur',
  },
  {
    degree: 'Schooling',
    institution: 'Puranchandra Vidyaniketan, Kanpur',
    note: 'One of the top-rated schools in Kanpur',
    scores: [
      { label: 'Class 10th', value: '93.2%' },
      { label: 'Class 12th', value: '88.2%' },
    ],
  },
]

export const achievements = [
  '400+ LeetCode Problems Solved | Five-Star HackerRank Coder',
  'AWS Cloud Practitioner Essentials | SQL (Infosys Springboard)',
  'Full Stack Web Development (Apna College)',
]

export const extracurricular = [
  'E-Cell, PSIT: Contributed to entrepreneurship projects focusing on problem-solving and management.',
  'Technical Workshops: Completed hands-on training in GitHub (Version Control) and collaborative workflows.',
  'Collegiate Dance Team: Collaborated in a team environment for high-pressure stage performances.',
]

export const navLinks = [
  { id: 'hero', label: 'INIT' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'contact', label: 'CONTACT' },
]
