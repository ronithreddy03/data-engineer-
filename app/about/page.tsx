'use client';

import React from 'react';

import Link from 'next/link';

import Markdown from 'markdown-to-jsx';

import Timeline from '@/components/Resume/Experience/Timeline';
import { aboutMarkdown } from '@/data/about';

import PageWrapper from '../components/PageWrapper';

const count = (str: string) => str.split(/\s+/).filter((word) => word !== '').length;

const timelineData = [
  {
    company: 'PayPal',
    position: 'Full Stack Python Developer',
    period: 'Mar 2025 - Present',
    achievements: [
      'Flask microservices with SQLAlchemy achieving 99.9% uptime',
      'Azure DevOps CI/CD with Ansible reducing deployment issues by 40%',
      'Tuned SQL/NoSQL with App Insights cutting API latency by 50%',
      'Delivered Spark → Tableau real-time KPIs',
    ],
    logo: '/images/companies/paypal.png',
  },
  {
    company: 'Vanguard',
    position: 'Full Stack Python Developer',
    period: 'Apr 2024 - Feb 2025',
    achievements: [
      'Built FastAPI + GraphQL fraud services reducing incidents by 30%',
      'Migrated ML datasets to Snowflake via AWS Glue, reducing prep time by 45%',
      'Achieved sub-300ms inference with AWS Lambda + DynamoDB',
      'Boosted analyst productivity by 25% with React real-time dashboards',
    ],
    logo: '/images/companies/vanguard.png',
  },
  {
    company: 'Bayer',
    position: 'Python Developer',
    period: 'Oct 2020 - Dec 2022',
    achievements: [
      'React + Node frontend with Django/Flask APIs',
      'Fraud-detection microservices on Kubernetes + SageMaker achieving sub-second scoring',
      'PySpark/Snowflake ETL reducing batch time by 40%',
      'Architected analytics framework for 15TB+ daily transactions',
    ],
    logo: '/images/companies/bayer.png',
  },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      <article className="post" id="about">
        <header>
          <div className="title">
            <h2>
              <Link href="/about">About Me</Link>
            </h2>
            <p>(in about {count(aboutMarkdown)} words)</p>
          </div>
        </header>

        {/* Render markdown content */}
        <div className="content">
          <Markdown>{aboutMarkdown}</Markdown>
        </div>

        {/* Render timeline for experience section */}
        <div style={{ marginTop: '40px' }}>
          <Timeline items={timelineData} />
        </div>
      </article>
    </PageWrapper>
  );
}
