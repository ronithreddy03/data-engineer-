export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  // Programming Languages
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'Data Engineering', 'Machine Learning'],
  },
  {
    title: 'SQL',
    competency: 5,
    category: ['Languages', 'Databases', 'Data Engineering'],
  },

  // Data Engineering & Big Data
  {
    title: 'PySpark',
    competency: 5,
    category: ['Data Engineering', 'Python', 'Big Data'],
  },
  {
    title: 'Apache Spark',
    competency: 5,
    category: ['Data Engineering', 'Big Data'],
  },
  {
    title: 'Apache Airflow',
    competency: 4,
    category: ['Data Engineering', 'Big Data'],
  },
  {
    title: 'Apache Kafka',
    competency: 4,
    category: ['Data Engineering', 'Big Data'],
  },

  // Databases & Data Warehouses
  {
    title: 'Snowflake',
    competency: 4,
    category: ['Databases', 'Data Engineering'],
  },
  {
    title: 'PostgreSQL',
    competency: 4,
    category: ['Databases', 'Data Engineering'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Databases', 'NoSQL'],
  },
  {
    title: 'DynamoDB',
    competency: 4,
    category: ['Databases', 'NoSQL', 'AWS'],
  },

  // Cloud & AWS
  {
    title: 'AWS',
    competency: 5,
    category: ['Cloud', 'DevOps'],
  },
  {
    title: 'AWS Glue',
    competency: 4,
    category: ['AWS', 'Data Engineering'],
  },
  {
    title: 'AWS Lambda',
    competency: 4,
    category: ['AWS', 'Serverless'],
  },
  {
    title: 'AWS S3',
    competency: 4,
    category: ['AWS', 'Storage'],
  },

  // Web Development
  {
    title: 'FastAPI',
    competency: 4,
    category: ['Web Development', 'Python'],
  },
  {
    title: 'GraphQL',
    competency: 4,
    category: ['Web Development', 'API'],
  },
  {
    title: 'React.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Node.js',
    competency: 4,
    category: ['Web Development', 'Javascript'],
  },

  // DevOps & Tools
  {
    title: 'Docker',
    competency: 4,
    category: ['DevOps', 'Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 4,
    category: ['DevOps', 'Tools'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },

  // Data Visualization
  {
    title: 'Power BI',
    competency: 4,
    category: ['Data Visualization'],
  },
  {
    title: 'Tableau',
    competency: 4,
    category: ['Data Visualization'],
  },

  // Machine Learning & MLOps
  {
    title: 'MLflow',
    competency: 4,
    category: ['Machine Learning', 'MLOps'],
  },
  {
    title: 'scikit-learn',
    competency: 5,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'TensorFlow',
    competency: 4,
    category: ['Machine Learning', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 4,
    category: ['Machine Learning', 'Python'],
  },
];

const categories: Category[] = [
  {
    name: 'Languages',
    color: '#515dd4',
  },
  {
    name: 'Python',
    color: '#37b6f6',
  },
  {
    name: 'Data Engineering',
    color: '#6968b3',
  },
  {
    name: 'Big Data',
    color: '#37b1f5',
  },
  {
    name: 'Databases',
    color: '#e47272',
  },
  {
    name: 'NoSQL',
    color: '#cc7b94',
  },
  {
    name: 'Cloud',
    color: '#3896e2',
  },
  {
    name: 'AWS',
    color: '#ff9900',
  },
  {
    name: 'DevOps',
    color: '#40494e',
  },
  {
    name: 'Web Development',
    color: '#c3423f',
  },
  {
    name: 'Javascript',
    color: '#d75858',
  },
  {
    name: 'API',
    color: '#747fff',
  },
  {
    name: 'Tools',
    color: '#64cb7b',
  },
  {
    name: 'Data Visualization',
    color: '#515dd4',
  },
  {
    name: 'Machine Learning',
    color: '#c3423f',
  },
  {
    name: 'MLOps',
    color: '#d75858',
  },
  {
    name: 'Serverless',
    color: '#37b6f6',
  },
  {
    name: 'Storage',
    color: '#6968b3',
  },
];

export { categories };
export default skills;
