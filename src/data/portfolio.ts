// ─────────────────────────────────────────────────────────────
// Edit everything in this file with your own info.
// Nothing else in the app needs to change for basic customization.
// ─────────────────────────────────────────────────────────────

export interface Project {
  name: string
  description: string
  tech: string[]
  features: string[]
  liveUrl?: string
  githubUrl?: string
}

export interface ExperienceItem {
  title: string
  company: string
  period: string
  bullets: string[]
}

export interface EducationItem {
  degree: string
  school: string
  period: string
}

export const profile = {
  name: 'ADETORO HAMMED A.',
  role: 'Frontend Web Developer',
  headline: 'I build responsive, user-friendly web experiences with modern frontend technologies.',
  about:
    "I’m a frontend developer focused on building responsive, user-friendly web applications with React, JavaScript and TypeScript. I enjoy turning ideas into clean, functional interfaces and I’m currently looking for opportunities where I can contribute to real-world products while continuing to grow as a developer.",
    
  email: 'adetoroadeniyi5@gmail.com',
  github: 'https://github.com/tetris7',
  linkedin: 'https://linkedin.com/in/adetoro-adeniyi-a235281a4',
  resumeUrl: '/ADETORO_ADENIYI Resume.docx',
}

export const skills = {
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React'],
  tools: ['Git', 'GitHub', 'Vite', 'Responsive Design'],
  learning: ['Backend']
}

export const projects: Project[] = [
  {
    name: 'Project One',
    description: 'One-sentence description of the problem this project solves.',
    tech: ['HTML5', 'JavaScript', 'CSS3'],
    features: ['Feature 1', 'Feature 2', 'Feature 3'],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    name: 'Lavada Cosmetics — E-Commerce Website',
    description: 'A responsive e-commerce website built for a cosmetics business, designed to showcase products and provide customers with an easy way to browse products and contact the business directly.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: ['Responsive', 'E-Commerce', 'WhatsApp Integration'],
    liveUrl: 'https://lavadacosmetics.netlify.app/',
    githubUrl: '#',
  },
  {
    name: 'React Admin Dashboard',
    description: 'A responsive dashboard interface built with React and TypeScript, featuring reusable components, data visualization, and interactive UI elements.',
    tech: ['React', 'TypeScript', 'CSS', 'Vite'],
    features: ['Data visualization', 'Reusable componenets', 'Responsive layouts'],
    liveUrl: 'https://react-dashboard-self-nine.vercel.app/',
    githubUrl: 'https://github.com/Tetris7/react-dashboard',
  },
]

export const experience: ExperienceItem[] = [
  {
    title: 'Frontend Web Developement Intern',
    company: 'Mzienets Systems',
    period: 'May 2024 – October 2024',
    bullets: [
      'Participated in frontend development training focused on modern web development practices.',
      'Collaborated with other developers to build a Jumia-inspired e-commerce website clone.',
      'Contributed to implementing responsive user interfaces and frontend functionality.',
      'Practiced working with Git/version control and collaborative development workflows.`'
    ],
  },
]

export const education: EducationItem[] = [
  {
    degree: 'B.Sc. Mathematics',
    school: 'Federal University of Agriculture, Abeokuta.',
    period: '2021 – 2025',
  },
]
