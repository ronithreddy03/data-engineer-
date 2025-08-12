'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import PageWrapper from './components/PageWrapper';

export default function HomePage() {
  const [currentRole, setCurrentRole] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const roles = [
    "Data Engineer",
    "Full Stack Python Developer", 
    "Data Scientist"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <PageWrapper>
      <article className="post" id="index">
        <header>
          <div className="title">
            <h2>Ronith Reddy Prodduturi</h2>
            <div 
              className="role-display"
              style={{
                fontSize: '1.2em',
                fontWeight: '600',
                color: '#12D640',
                minHeight: '1.5em',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'opacity 0.5s ease-in-out',
                opacity: isVisible ? 1 : 0
              }}
            >
              {roles[currentRole]}
            </div>
            <p>Dallas, TX (open to TX/CA & remote)</p>
          </div>
        </header>
        
        <div style={{ marginTop: '40px', textAlign: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                                    <p style={{ fontSize: '1.1em', lineHeight: '1.6', marginBottom: '30px', color: '#555' }}>
                          I'm Ronith, a passionate technologist who bridges the gap between raw data and business value. 
                          From processing 15TB+ of daily data to deploying ML models that improve fraud detection by 30%, 
                          I thrive on solving complex challenges with elegant, production-ready solutions.
                        </p>
                        
                        <div style={{ 
                          background: '#f8f9fa', 
                          padding: '20px', 
                          borderRadius: '8px', 
                          marginBottom: '30px',
                          border: '1px solid #e9ecef'
                        }}>
                          <p style={{ fontSize: '1em', lineHeight: '1.6', color: '#333', fontStyle: 'italic' }}>
                            Hi, I'm Ronith — part data whisperer, part problem solver, and part "how-does-this-even-work?" enthusiast. 
                            When I'm not wrangling datasets, you'll probably find me chasing sunsets by the lake or losing myself in the energy of an EDM concert. 🎶
                          </p>
                        </div>
            
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link 
                href="/projects" 
                style={{ 
                  color: '#12D640', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  padding: '12px 24px',
                  border: '2px solid #12D640',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#12D640';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#12D640';
                }}
              >
                View Projects →
              </Link>
              
              <Link 
                href="/about" 
                style={{ 
                  color: '#333', 
                  textDecoration: 'none', 
                  fontWeight: 'bold',
                  padding: '12px 24px',
                  border: '2px solid #333',
                  borderRadius: '6px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#333';
                  e.target.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'transparent';
                  e.target.style.color = '#333';
                }}
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
