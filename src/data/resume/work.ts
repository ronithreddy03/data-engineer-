/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'Vanguard',
    position: 'Full-Stack Python Developer',
    url: 'https://investor.vanguard.com',
    startDate: '2024-04-01',
    endDate: '2025-02-28',
    summary:
      'Built FastAPI + GraphQL fraud services that reduced incidents by 30%; migrated ML datasets to Snowflake via AWS Glue reducing prep time by 45%.',
    highlights: [
      'Built FastAPI + GraphQL fraud services (-30% incidents)',
      'Migrated ML datasets to Snowflake via AWS Glue (-45% prep time)',
      'React dashboards with real-time ML outputs (+20% analyst productivity)',
      'Sub-300ms inference via AWS Lambda + DynamoDB',
      'Maintained 24/7 service availability by orchestrating Kubernetes-based deployments',
      'Increased stakeholder trust in ML predictions by implementing SHAP and LIME explainability',
    ],
  },
  {
    name: 'PayPal',
    position: 'Software Engineer',
    url: 'https://www.paypal.com',
    startDate: '2022-10-01',
    endDate: '2024-04-30',
    summary:
      'Flask microservices with SQLAlchemy achieving 99.9% uptime; Azure DevOps CI/CD with Ansible reducing deployment issues by 40%.',
    highlights: [
      'Flask microservices with SQLAlchemy (99.9% uptime)',
      'Azure DevOps CI/CD with Ansible (-40% deployment issues)',
      'Tuned SQL/NoSQL with App Insights (-50% API latency)',
      'Spark → Tableau real-time KPIs',
      'Built Python-powered data validation and cleansing workflows, improving ETL dataset accuracy by 35%',
      'Optimized Apache Spark job configurations for parallelism, boosting batch data processing speed by over 40%',
    ],
  },
  {
    name: 'Bayer',
    position: 'Python Developer',
    url: 'https://www.bayer.com',
    startDate: '2020-10-01',
    endDate: '2022-12-31',
    summary:
      'React + Node front end with Django/Flask APIs; fraud-detection microservices on Kubernetes + SageMaker achieving sub-second scoring.',
    highlights: [
      'React + Node front end with Django/Flask APIs',
      'Fraud-detection microservices on Kubernetes + SageMaker (sub-second scoring)',
      'PySpark/Snowflake ETL (-40% batch time)',
      'Architected Django-powered analytics framework with ML-driven insights, handling over 15TB of daily transaction data',
      'Enhanced deployment reliability by implementing Jenkins and Ansible pipelines with PyTest validation',
      'Led a cross-functional team of five to operationalize ML models with SageMaker and MLflow tracking',
    ],
  },
];

export default work;
