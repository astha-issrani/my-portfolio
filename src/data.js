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
      {
        name: 'Meetify',
        description: 'Real-time video communication platform with WebRTC and secure room messaging.',
        demo: null,
      },
      {
        name: 'VibeKit Studio',
        description: 'Full-stack micro-site builder with real-time theme customization.',
        demo: 'https://inspiring-salmiakki-b036cf.netlify.app',
      },
    ],
  },
  {
    id: 'internship',
    title: 'Internship Projects',
    subtitle: 'Built during PurpleMerit internship',
    projects: [
      { name: 'Purple Stream App', description: 'Live video streaming platform with on-demand content.', demo: 'https://video-streaming-livid-eight.vercel.app' },
      { name: 'E-Book Service', description: 'Digital book library with a seamless reading experience.', demo: 'https://ebookservice.vercel.app' },
      { name: 'Website Maker', description: 'Drag-and-drop website builder with customizable templates.', demo: 'https://website-maker-mu.vercel.app' },
      { name: 'UI/UX Generator', description: 'Tool to design user interfaces and experiences quickly.', demo: 'https://ui-ux-generator-mu.vercel.app' },
      { name: 'Bank Statement Converter', description: 'Converts PDF bank statements to Excel or CSV.', demo: 'https://bank-statement-converter-697q.onrender.com' },
      { name: 'CertForge', description: 'Create and distribute professional certificates with templates.', demo: 'https://cert-forge-mu.vercel.app' },
      { name: 'Affiliate Website', description: 'Product discovery platform with deals and rewards.', demo: 'https://affiliate-7fps.onrender.com' },
      { name: 'Corevita Website', description: 'Wellness platform with health resources and products.', demo: 'https://corevita-website.vercel.app' },
      { name: 'Blog Page', description: 'Blog platform for articles and community engagement.', demo: 'https://blog-page-gray-gamma.vercel.app' },
      { name: 'Editorial Page', description: 'Curated news and editorial content platform.', demo: 'https://editorial-seven.vercel.app' },
      { name: 'Etsy Bestsellers', description: 'Showcase of popular handmade and vintage products.', demo: 'https://etsy-bestsellers.vercel.app' },
      { name: 'Lulu Stream Clone', description: 'Movie and TV streaming platform clone.', demo: 'https://lulu-stream-8fhq.vercel.app' },
      { name: 'Astrology Website', description: 'Personalized horoscopes and astrological readings.', demo: 'https://astro-website-steel.vercel.app/en' },
      { name: 'Purple Extension', description: 'Chrome extension for automated meeting uploads.', demo: null },
      { name: 'Shorts Generator', description: 'Auto-generates short-form videos for social media.', demo: null },
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
