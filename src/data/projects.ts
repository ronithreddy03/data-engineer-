export interface Project {
  title: string;
  subtitle?: string;
  link?: string;
  image?: string;
  date: string;
  desc: string;
}

const data: Project[] = [
  {
    title: 'Fraud Detection Microservices',
    subtitle: 'Real-time ML-powered fraud detection system',
    date: '2024-06-15',
    desc:
      'Built FastAPI + GraphQL microservices that processed thousands of concurrent requests, reducing fraud incidents by 30%. ' +
      'Implemented sub-300ms inference via AWS Lambda and DynamoDB, with real-time ML scoring and SHAP explainability. ' +
      'Migrated ML datasets to Snowflake via AWS Glue, reducing model training preparation time by 45%.',
  },
  {
    title: 'Time-Series Forecasting for WFM',
    subtitle: 'Workforce management forecasting system',
    date: '2023-12-01',
    desc:
      'Developed time-series forecasting models for workforce management using Python and Apache Spark. ' +
      'Built automated pipelines for data ingestion, feature engineering, and model deployment with MLflow tracking. ' +
      'Created interactive dashboards with Power BI for real-time forecasting insights and resource planning.',
  },
  {
    title: 'Music Analytics Dashboard',
    subtitle: 'Real-time music streaming analytics platform',
    date: '2023-08-20',
    desc:
      'Built a comprehensive music analytics dashboard using React.js and Python Flask APIs. ' +
      'Processed streaming data using PySpark and Apache Kafka for real-time analytics. ' +
      'Implemented data visualization with Tableau and Power BI, providing insights on user behavior and music trends.',
  },
];

export default data;
