export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'Lindsey Wilson University',
    degree: 'Master of Science in Technology Management (In Progress)',
    link: 'https://www.lindsey.edu',
    year: 2025,
  },
  {
    school: 'GITAM University',
    degree: 'Bachelor of Technology in Computer Science',
    link: 'https://www.gitam.edu',
    year: 2020,
  },
];

export default degrees;
