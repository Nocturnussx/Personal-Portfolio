import type { Skill, Language, WorkExperienceItem, EducationItem, ProjectItem } from './types';

export const CONTACT_DETAILS = {
  email: 'azmainsharer@gmail.com',
  phone: '01719070783',
  address: 'Dhaka, Bangladesh, 1213',
  website: 'https://nocturnussx.github.io/AXWTV-web/',
};

export const SKILLS: Skill[] = [
  { name: 'Photoshop', level: 5 },
  { name: 'Premiere Pro', level: 4 },
  { name: 'After Effects', level: 4 },
  { name: 'Python', level: 3 },
  { name: 'Illustrator', level: 3 },
  { name: 'Full Stack Development', level: 3 },
  { name: 'Team Management', level: 4 },
  { name: 'AI Training', level: 2 },
];

export const LANGUAGES: Language[] = [
  { name: 'English', level: 4 },
  { name: 'Bangla', level: 5 },
  { name: 'Japanese', level: 1 },
];

export const PROFESSIONAL_SUMMARY = `As a 16-year-old freelancer from Bangladesh, I bring a unique blend of creativity and technical skills to the table. With a strong foundation in management, I excel in coordinating projects and delivering exceptional results. My proficiency in Photoshop (A grade) and Illustrator (B grade) allows me to create visually stunning designs, while my editing skills using After Effects, Premiere Pro, and DaVinci Resolve ensure high-quality video content. I'm comfortable navigating Linux and have a keen interest in programming, with skills in HTML, CSS, and Python. Currently, I'm diving into AI training, eager to expand my knowledge and stay ahead in the ever-evolving digital landscape. Let's collaborate to bring your vision to life!`;

export const WORK_EXPERIENCE: WorkExperienceItem[] = [
    {
      title: 'Non Just Hobby Projects',
      points: [
        'Project Management: Led multiple projects from inception to completion, ensuring timely delivery and adherence to project specifications.',
        'Web Development: Developed and maintained user-friendly web applications using modern technologies, enhancing user experience and engagement.',
        'Collaboration: Worked closely with cross-functional teams, including designers and marketers, to create cohesive project strategies and achieve common goals.',
        'Problem Solving: Identified and resolved technical issues during the development process, ensuring minimal disruption to project timelines.',
        'Innovation: Implemented new features based on user feedback and market trends, driving increased user satisfaction and project relevance.',
        'Documentation: Created comprehensive project documentation, including specifications, user manuals, and maintenance guides for future reference.',
        'Version Control: Utilized version control systems (e.g., Git) for efficient code management and collaboration, streamlining the development process.',
        'Continuous Learning: Engaged in ongoing professional development to stay updated with the latest industry trends and technologies, enhancing project outcomes.',
      ]
    }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: 'Cambridge GCSE',
    school: 'O levels CIE',
    period: 'Jan 2024 - Nov 2025',
  },
  {
    degree: 'Cambridge A Levels',
    school: 'A Levels CIE',
    period: 'Dec 2025 - Present',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/9c67201b-9f4a-4643-9844-31519d1d5203/612a8551-3444-488b-a7e8-a15d9a933f7c.jpeg',
    title: 'Arctic Monkeys Poster',
    description: 'A vintage-style poster design for the band Arctic Monkeys, incorporating song lyrics and thematic elements.',
  },
  {
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/9c67201b-9f4a-4643-9844-31519d1d5203/0d47d0e4-b864-4e12-875f-2a3b0dd4704e.jpeg',
    title: 'AXWTV T-Shirt Mockup',
    description: 'A minimalist and elegant t-shirt mockup for the AXWTV brand.',
  },
  {
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/9c67201b-9f4a-4643-9844-31519d1d5203/bb867b93-b6cc-4f05-8e7c-eb50f8373a6a.jpeg',
    title: 'Elegance in Design',
    description: 'A typography-focused piece exploring the concept of elegance as an art form.',
  },
  {
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/9c67201b-9f4a-4643-9844-31519d1d5203/6e2df4da-06d9-43c3-8f0a-6c105ab8c78c.jpeg',
    title: 'Koenigsegg Jesko Vector',
    description: 'A detailed vector illustration of the Koenigsegg Jesko supercar with creative typographic overlays.',
  },
  {
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/9c67201b-9f4a-4643-9844-31519d1d5203/48a3952f-1a93-4a00-a4d1-419b674d8a57.jpeg',
    title: 'Koenigsegg Jesko Poster',
    description: 'A dynamic and stylized poster design for the Koenigsegg Jesko, featuring multiple angles and graphic elements.',
  },
  {
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/9c67201b-9f4a-4643-9844-31519d1d5203/52e50529-6de0-410a-9d90-a444e7855364.jpeg',
    title: 'Porsche 911 GT3 RS Blueprint',
    description: 'A technical blueprint-style poster of the Porsche 911 GT3 RS, showcasing its design and dimensions.',
  },
  {
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/9c67201b-9f4a-4643-9844-31519d1d5203/0d0277ea-b883-4c9f-b98a-d99c43d2c88d.jpeg',
    title: 'Revenge Thematic Poster',
    description: 'A dark, atmospheric poster design centered around the theme of revenge, using powerful typography.',
  },
  {
    imageUrl: 'https://storage.googleapis.com/aistudio-hosting/9c67201b-9f4a-4643-9844-31519d1d5203/f3ac7f5a-c454-41d6-8488-8cf9695d5225.jpeg',
    title: 'The Sin of Pride Poster',
    description: 'A conceptual poster exploring the theme of pride and ego through minimalist design and typography.',
  },
];


export const ACHIEVEMENTS = `Here's a bit about me: I'm 16 years old and a citizen of Bangladesh. I possess strong management skills, and I have achieved an A grade in Photoshop and a B grade in Illustrator. My editing experience includes software like After Effects, Premiere Pro, and DaVinci Resolve. I am proficient in using Linux and have a good understanding of it. Additionally, I have programming skills in HTML, CSS, and Python, and I am currently learning about AI training.`;

export const RESUME_DATA_FOR_AI = `
Name: Azmain Azad

Professional Summary: ${PROFESSIONAL_SUMMARY}

Contact Details:
- Email: ${CONTACT_DETAILS.email}
- Phone: ${CONTACT_DETAILS.phone}
- Address: ${CONTACT_DETAILS.address}
- Website: ${CONTACT_DETAILS.website}

Skills:
${SKILLS.map(s => `- ${s.name}: ${s.level}/5 proficiency`).join('\n')}

Languages:
${LANGUAGES.map(l => `- ${l.name}: ${l.level}/5 proficiency`).join('\n')}

Work Experience:
${WORK_EXPERIENCE.map(w => `
Title: ${w.title}
Highlights:
${w.points.map(p => `- ${p}`).join('\n')}
`).join('\n')}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.school} (${e.period})`).join('\n')}

Achievements/About Me: ${ACHIEVEMENTS}
`;