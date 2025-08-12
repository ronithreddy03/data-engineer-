import React from 'react';

import type { Metadata } from 'next';
import { Raleway, Source_Sans_3 } from 'next/font/google';

import GoogleAnalytics from '@/components/Template/GoogleAnalytics';
import Navigation from '@/components/Template/Navigation';
import '@/static/css/main.scss';

const sourceSans = Source_Sans_3({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-source-sans',
  display: 'swap',
});

const raleway = Raleway({
  weight: ['400', '800', '900'],
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Ronith Reddy Prodduturi',
    template: '%s | Ronith Reddy Prodduturi',
  },
  description:
    "Ronith Reddy Prodduturi's personal website. Data Scientist • ML Engineer • Data Engineer with expertise in building scalable data pipelines and AI-powered applications.",
  keywords: [
    'Ronith Reddy Prodduturi',
    'data engineer',
    'machine learning engineer',
    'full-stack developer',
    'python developer',
    'portfolio',
    'AWS',
    'PySpark',
    'Apache Spark',
  ],
  authors: [{ name: 'Ronith Reddy Prodduturi' }],
  creator: 'Ronith Reddy Prodduturi',
  metadataBase: new URL('https://ronithreddy.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ronithreddy.com',
    siteName: 'Ronith Reddy Prodduturi',
    title: 'Ronith Reddy Prodduturi',
    description:
      'Data Engineer and Machine Learning Engineer with expertise in building scalable data pipelines and AI-powered applications.',
    images: [
      {
        url: '/images/me.jpg',
        width: 1200,
        height: 630,
        alt: 'Ronith Reddy Prodduturi',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${raleway.variable}`}>
      <body>
        <div id="wrapper">
          <Navigation />
          {children}
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
