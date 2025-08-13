'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import EmailLink from '@/components/Contact/EmailLink';

import PageWrapper from './components/PageWrapper';

const roles = [
  { text: 'Data Engineer', emoji: '⚡' },
  { text: 'Full Stack Developer', emoji: '🚀' },
  { text: 'Machine Learning Engineer', emoji: '🤖' },
  { text: 'Python Developer', emoji: '🐍' },
];

export default function HomePage() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    let isDeleting = false;
    const currentRoleText = roles[currentRole].text;

    const typeInterval = setInterval(() => {
      if (!isDeleting) {
        if (currentIndex <= currentRoleText.length) {
          setDisplayText(currentRoleText.slice(0, currentIndex));
          currentIndex++;
        } else {
          setTimeout(() => {
            isDeleting = true;
            currentIndex = currentRoleText.length;
          }, 1500);
        }
      } else {
        if (currentIndex >= 0) {
          setDisplayText(currentRoleText.slice(0, currentIndex));
          currentIndex--;
        } else {
          isDeleting = false;
          setCurrentRole((prev) => (prev + 1) % roles.length);
          currentIndex = 0;
        }
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  return (
    <PageWrapper>
      <style jsx>{`
        @keyframes blink {
          0%,
          50% {
            border-color: #2563eb;
          }
          51%,
          100% {
            border-color: transparent;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(37, 99, 235, 0.6);
          }
        }

        .hero-container {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
          border-radius: 20px;
          padding: 40px;
          margin-bottom: 40px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .name-title {
          animation: fadeInUp 1s ease-out;
        }

        .role-container {
          animation: fadeInUp 1s ease-out 0.3s both;
        }

        .location-text {
          animation: fadeInUp 1s ease-out 0.6s both;
        }

        .tagline-text {
          animation: fadeInUp 1s ease-out 0.9s both;
        }

        .emoji-float {
          animation: float 3s ease-in-out infinite;
        }

        .glow-effect {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
      <article className="post" id="index">
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '20px',
            textAlign: 'center',
          }}
        >
          <div className="hero-container">
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <h1
                className="name-title"
                style={{
                  fontSize: '3.8rem',
                  fontWeight: '800',
                  marginBottom: '20px',
                  color: '#ffffff',
                  lineHeight: '1.1',
                  letterSpacing: '-1px',
                  textShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
                }}
              >
                Ronith Reddy Prodduturi
              </h1>

              <h2
                className="role-container glow-effect"
                style={{
                  fontSize: '2.6rem',
                  fontWeight: '700',
                  marginBottom: '16px',
                  color: '#ffffff',
                  letterSpacing: '-0.5px',
                  minHeight: '3.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  padding: '16px 24px',
                  borderRadius: '15px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                }}
              >
                <span className="emoji-float" style={{ fontSize: '2.4rem' }}>
                  {roles[currentRole].emoji}
                </span>
                <span
                  style={{
                    borderRight: '3px solid #ffffff',
                    animation: 'blink 1s infinite',
                  }}
                >
                  {displayText}
                </span>
              </h2>

              <p
                className="location-text"
                style={{
                  fontSize: '1.3rem',
                  color: '#e2e8f0',
                  marginBottom: '28px',
                  fontWeight: '600',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                }}
              >
                🌍 Santa Clara, CA • Open to Remote
              </p>

              <p
                className="tagline-text"
                style={{
                  fontSize: '1.4rem',
                  color: '#f1f5f9',
                  marginBottom: '36px',
                  fontWeight: '500',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
                  maxWidth: '600px',
                }}
              >
                ✨ &quot;Transforming complex data into actionable insights.&quot;
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'rgba(255, 255, 255, 0.2)';
                    target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'rgba(255, 255, 255, 0.1)';
                    target.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>📧</span>
                  <EmailLink />
                </div>
              </div>

              <div
                style={{
                  display: 'flex',
                  gap: '20px',
                  marginBottom: '32px',
                }}
              >
                <a
                  href="https://www.linkedin.com/in/ronithreddy03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.8rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.transform = 'translateY(-4px) scale(1.05)';
                    target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)';
                    target.style.background = 'rgba(255, 255, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.transform = 'translateY(0) scale(1)';
                    target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                    target.style.background = 'rgba(255, 255, 255, 0.15)';
                  }}
                >
                  💼
                </a>

                <a
                  href="https://github.com/ronithreddy03"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '1.8rem',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.transform = 'translateY(-4px) scale(1.05)';
                    target.style.boxShadow = '0 12px 35px rgba(0,0,0,0.3)';
                    target.style.background = 'rgba(255, 255, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.transform = 'translateY(0) scale(1)';
                    target.style.boxShadow = '0 8px 25px rgba(0,0,0,0.2)';
                    target.style.background = 'rgba(255, 255, 255, 0.15)';
                  }}
                >
                  🐙
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/contact"
            style={{
              color: '#2563eb',
              textDecoration: 'none',
              fontWeight: 'bold',
              padding: '12px 24px',
              border: '2px solid #2563eb',
              borderRadius: '6px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = '#2563eb';
              target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = 'transparent';
              target.style.color = '#2563eb';
            }}
          >
            Hire Me →
          </Link>

          <Link
            href="/contact"
            style={{
              color: '#000000',
              textDecoration: 'none',
              fontWeight: 'bold',
              padding: '12px 24px',
              border: '2px solid #000000',
              borderRadius: '6px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = '#000000';
              target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = 'transparent';
              target.style.color = '#000000';
            }}
          >
            Contact Me →
          </Link>

          <Link
            href="/resume"
            style={{
              color: '#333',
              textDecoration: 'none',
              fontWeight: 'bold',
              padding: '12px 24px',
              border: '2px solid #333',
              borderRadius: '6px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = '#333';
              target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              const target = e.target as HTMLElement;
              target.style.background = 'transparent';
              target.style.color = '#333';
            }}
          >
            Resume →
          </Link>
        </div>
      </article>
    </PageWrapper>
  );
}
