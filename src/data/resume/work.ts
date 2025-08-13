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
      'Led development of enterprise-grade fraud detection services and data engineering solutions, achieving significant improvements in system performance and reliability.',
    highlights: [
      'Architected and developed FastAPI + GraphQL fraud detection services that reduced fraudulent incidents by 30% through real-time transaction analysis',
      'Migrated critical ML datasets to Snowflake data warehouse via AWS Glue ETL pipelines, reducing data preparation time by 45% and improving data accessibility',
      'Built React-based dashboards with real-time ML model outputs, increasing analyst productivity by 20% and enabling faster decision-making',
      'Optimized ML inference performance to sub-300ms response times using AWS Lambda functions and DynamoDB for caching and session management',
      'Maintained 24/7 service availability by orchestrating Kubernetes-based deployments with automated rollback capabilities and health monitoring',
      'Increased stakeholder trust in ML predictions by implementing SHAP and LIME explainability frameworks, providing transparent model decision insights',
      'Collaborated with cross-functional teams to integrate fraud detection services with existing payment processing systems',
      'Implemented comprehensive logging and monitoring using ELK stack for real-time system health tracking and alerting',
    ],
  },
  {
    name: 'PayPal',
    position: 'Software Engineer',
    url: 'https://www.paypal.com',
    startDate: '2022-10-01',
    endDate: '2024-04-30',
    summary:
      'Developed and maintained high-performance microservices and data engineering solutions, focusing on scalability, reliability, and operational excellence.',
    highlights: [
      'Designed and implemented Flask-based microservices with SQLAlchemy ORM, achieving 99.9% uptime and handling millions of daily transactions',
      'Established Azure DevOps CI/CD pipelines with Ansible automation, reducing deployment-related issues by 40% and improving release velocity',
      'Optimized SQL and NoSQL database queries with Azure Application Insights monitoring, reducing API latency by 50% and improving user experience',
      'Built real-time data pipelines using Apache Spark for processing large-scale transaction data and delivering KPIs to Tableau dashboards',
      'Developed Python-powered data validation and cleansing workflows, improving ETL dataset accuracy by 35% and reducing data quality issues',
      'Optimized Apache Spark job configurations for improved parallelism and resource utilization, boosting batch data processing speed by over 40%',
      'Implemented comprehensive error handling and retry mechanisms for robust data processing workflows',
      'Collaborated with data scientists to operationalize ML models and integrate them into production data pipelines',
    ],
  },
  {
    name: 'Bayer',
    position: 'Python Developer',
    url: 'https://www.bayer.com',
    startDate: '2020-10-01',
    endDate: '2022-12-31',
    summary:
      'Developed full-stack applications and ML-powered fraud detection systems, focusing on scalable architecture and performance optimization.',
    highlights: [
      'Built React + Node.js frontend applications with Django/Flask REST APIs, creating intuitive user interfaces for complex business processes',
      'Developed fraud-detection microservices deployed on Kubernetes with SageMaker integration, achieving sub-second scoring for real-time transaction analysis',
      'Optimized PySpark/Snowflake ETL pipelines, reducing batch processing time by 40% and improving data pipeline efficiency',
      'Architected Django-powered analytics framework with ML-driven insights, handling over 15TB of daily transaction data and providing actionable business intelligence',
      'Enhanced deployment reliability by implementing Jenkins and Ansible pipelines with PyTest validation, ensuring code quality and reducing deployment failures',
      'Led a cross-functional team of five developers to operationalize ML models with SageMaker and MLflow tracking, improving model deployment efficiency',
      'Implemented comprehensive data validation and quality checks throughout the data pipeline to ensure data integrity',
      'Developed RESTful APIs for internal and external integrations, following best practices for security and performance',
    ],
  },
];

export default work;
