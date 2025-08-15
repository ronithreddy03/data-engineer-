'use client';

import React, { useEffect, useState } from 'react';

import Link from 'next/link';

import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
  const [introText, setIntroText] = useState('');

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
          }, 500);
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
    }, 50);

    return () => clearInterval(typeInterval);
  }, [currentRole]);

  // Intro text typing effect
  useEffect(() => {
    const intro = 'Hi, my name is';
    let currentIndex = 0;

    const introInterval = setInterval(() => {
      if (currentIndex <= intro.length) {
        setIntroText(intro.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(introInterval);
      }
    }, 100);

    return () => clearInterval(introInterval);
  }, []);

  return (
    <PageWrapper>
      {/* Main background with visible pattern */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: `
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(0,0,0,0.08)" stroke-width="1"/></pattern></defs><rect width="60" height="60" fill="url(%23grid)"/></svg>'),
            radial-gradient(circle at 20% 80%, rgba(0, 0, 0, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 0, 0, 0.04) 0%, transparent 50%),
            linear-gradient(45deg, transparent 48%, rgba(0, 0, 0, 0.03) 50%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(0, 0, 0, 0.03) 50%, transparent 52%)
          `,
          backgroundSize: '60px 60px, 100% 100%, 100% 100%, 60px 60px, 60px 60px',
          backgroundPosition: '0 0, 0 0, 0 0, 0 0, 0 0',
          animation: 'subtleFloat 20s ease-in-out infinite',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      {/* Data visualization inspired background elements */}
      <div
        style={{
          position: 'fixed',
          top: '10%',
          right: '5%',
          width: '200px',
          height: '200px',
          opacity: 0.08,
          background: `
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200"><circle cx="100" cy="100" r="80" fill="none" stroke="rgba(0,0,0,0.3)" stroke-width="2" stroke-dasharray="5,5"/><circle cx="100" cy="100" r="60" fill="none" stroke="rgba(0,0,0,0.25)" stroke-width="2" stroke-dasharray="3,3"/><circle cx="100" cy="100" r="40" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="2" stroke-dasharray="2,2"/></svg>'),
            conic-gradient(from 0deg, transparent 0deg, rgba(0, 0, 0, 0.15) 90deg, transparent 180deg, rgba(0, 0, 0, 0.15) 270deg, transparent 360deg)
          `,
          borderRadius: '50%',
          zIndex: -1,
          pointerEvents: 'none',
          animation: 'rotate 30s linear infinite',
        }}
      />

      <div
        style={{
          position: 'fixed',
          bottom: '15%',
          left: '8%',
          width: '150px',
          height: '150px',
          opacity: 0.06,
          background: `
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 150 150"><rect x="10" y="10" width="130" height="130" fill="none" stroke="rgba(0,0,0,0.2)" stroke-width="2" stroke-dasharray="8,8"/><rect x="25" y="25" width="100" height="100" fill="none" stroke="rgba(0,0,0,0.15)" stroke-width="2" stroke-dasharray="6,6"/><rect x="40" y="40" width="70" height="70" fill="none" stroke="rgba(0,0,0,0.1)" stroke-width="2" stroke-dasharray="4,4"/></svg>'),
            repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0, 0, 0, 0.08) 10px, rgba(0, 0, 0, 0.08) 20px)
          `,
          zIndex: -1,
          pointerEvents: 'none',
          animation: 'pulse 8s ease-in-out infinite',
        }}
      />

      {/* Circuit board pattern overlay */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          opacity: 0.04,
          background: `
            url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><defs><pattern id="circuit" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="10" cy="10" r="1.5" fill="rgba(0,0,0,0.2)"/><line x1="0" y1="10" x2="20" y2="10" stroke="rgba(0,0,0,0.1)" stroke-width="1"/><line x1="10" y1="0" x2="10" y2="20" stroke="rgba(0,0,0,0.1)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23circuit)"/></svg>')
          `,
          backgroundSize: '100px 100px',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      <style jsx>{`
        /* Sleek Black Theme Colors */
        :root {
          --primary-color: #000000;
          --primary-dark: #1a1a1a;
          --text-primary: #000000;
          --text-secondary: #333333;
          --text-light: #666666;
          --background-light: rgba(0, 0, 0, 0.05);
          --border-color: rgba(0, 0, 0, 0.1);
          --hover-color: rgba(0, 0, 0, 0.1);

          /* 3D Button Colors - Black Theme */
          --backgroundColor: rgba(250, 250, 250);
          --colorShadeA: rgb(0, 0, 0);
          --colorShadeB: rgb(26, 26, 26);
          --colorShadeC: rgb(51, 51, 51);
          --colorShadeD: rgb(102, 102, 102);
          --colorShadeE: rgb(250, 250, 250);
        }

        @keyframes blink {
          0%,
          50% {
            border-color: var(--primary-color);
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

        @keyframes subtleFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-10px) rotate(0.5deg);
          }
          50% {
            transform: translateY(-5px) rotate(-0.5deg);
          }
          75% {
            transform: translateY(-15px) rotate(0.3deg);
          }
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.015;
            transform: scale(1);
          }
          50% {
            opacity: 0.025;
            transform: scale(1.05);
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
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(37, 99, 235, 0.4);
          }
        }

        .hero-container {
          background: transparent;
          padding: 40px;
          margin-bottom: 40px;
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

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .hero-container {
            padding: 20px !important;
            margin-bottom: 20px !important;
          }

          .name-title {
            font-size: 2rem !important;
            line-height: 1.1 !important;
            margin-bottom: 15px !important;
          }

          .role-container {
            font-size: 1.4rem !important;
            min-height: 2rem !important;
            padding: 10px 15px !important;
            gap: 8px !important;
            flex-direction: column !important;
            gap: 8px !important;
          }

          .emoji-float {
            font-size: 1.2rem !important;
          }

          .location-text {
            font-size: 1.1rem !important;
            margin-bottom: 20px !important;
          }

          .tagline-text {
            font-size: 1.2rem !important;
            margin-bottom: 25px !important;
            max-width: 100% !important;
          }

          .contact-buttons {
            flex-direction: column !important;
            gap: 12px !important;
            align-items: center !important;
          }

          .contact-button {
            width: 100% !important;
            max-width: 280px !important;
            justify-content: center !important;
          }
        }

        @media (max-width: 480px) {
          .name-title {
            font-size: 1.8rem !important;
          }

          .role-container {
            font-size: 1.2rem !important;
            padding: 8px 12px !important;
          }

          .emoji-float {
            font-size: 1rem !important;
          }

          .location-text {
            font-size: 1rem !important;
          }

          .tagline-text {
            font-size: 1.1rem !important;
          }
        }

        /* 3D Button Styles */
        .big-button {
          position: relative;
          display: inline-block;
          cursor: pointer;
          outline: none;
          border: 0;
          vertical-align: middle;
          text-decoration: none;
          font-size: 1.1rem;
          color: rgb(106, 163, 137);
          font-weight: 700;
          text-transform: uppercase;
          font-family: inherit;
          padding: 1em 2em;
          border: 2px solid rgb(106, 163, 137);
          border-radius: 1em;
          background: rgb(205, 255, 232);
          transform-style: preserve-3d;
          transition: all 175ms cubic-bezier(0, 0, 1, 1);
          z-index: 1;
        }

        .big-button::before {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgb(150, 232, 195);
          border-radius: inherit;
          box-shadow:
            0 0 0 2px rgb(121, 186, 156),
            0 0.75em 0 0 rgb(106, 163, 137);
          transform: translate3d(0, 0.75em, -1em);
          transition: all 175ms cubic-bezier(0, 0, 1, 1);
          z-index: -1;
        }

        .big-button:hover {
          background: rgb(187, 232, 211);
          transform: translate(0, 0.375em);
        }

        .big-button:hover::before {
          transform: translate3d(0, 0.75em, -1em);
        }

        .big-button:active {
          transform: translate(0em, 0.75em);
        }

        .big-button:active::before {
          transform: translate3d(0, 0, -1em);
          box-shadow:
            0 0 0 2px rgb(121, 186, 156),
            0 0.25em 0 0 rgb(121, 186, 156);
        }

        /* Navigation 3D Button Styles */
        .nav-button-3d {
          position: relative;
        }

        .nav-button-3d::before {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgb(150, 232, 195);
          border-radius: inherit;
          box-shadow:
            0 0 0 2px rgb(121, 186, 156),
            0 0.5em 0 0 rgb(106, 163, 137);
          transform: translate3d(0, 0.5em, -1em);
          transition: all 175ms cubic-bezier(0, 0, 1, 1);
          z-index: -1;
        }

        .nav-button-3d:hover {
          background: rgb(187, 232, 211);
          transform: translate(0, 0.25em);
        }

        .nav-button-3d:active {
          transform: translate(0em, 0.5em);
        }

        .nav-button-3d:active::before {
          transform: translate3d(0, 0, -1em);
          box-shadow:
            0 0 0 2px rgb(121, 186, 156),
            0 0.25em 0 0 rgb(121, 186, 156);
        }

        /* Contact Icons Styling */
        .contact-icons-intro {
          display: flex;
          justify-content: center;
          gap: 0;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        .contact-icons-intro a {
          position: relative;
          background: rgb(205, 255, 232) !important;
          border: 2px solid rgb(106, 163, 137) !important;
          color: rgb(106, 163, 137) !important;
          transform-style: preserve-3d;
          transition: all 175ms cubic-bezier(0, 0, 1, 1);
          z-index: 1;
        }

        .contact-icons-intro a::before {
          position: absolute;
          content: '';
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgb(150, 232, 195);
          border-radius: inherit;
          box-shadow:
            0 0 0 2px rgb(121, 186, 156),
            0 0.5em 0 0 rgb(106, 163, 137);
          transform: translate3d(0, 0.5em, -1em);
          transition: all 175ms cubic-bezier(0, 0, 1, 1);
          z-index: -1;
        }

        .contact-icons-intro a:hover {
          background: rgb(187, 232, 211) !important;
          transform: translate(0, 0.25em) !important;
        }

        .contact-icons-intro a:active {
          transform: translate(0em, 0.5em) !important;
        }

        .contact-icons-intro a:active::before {
          transform: translate3d(0, 0, -1em) !important;
          box-shadow:
            0 0 0 2px rgb(121, 186, 156),
            0 0.25em 0 0 rgb(121, 186, 156) !important;
        }

        @media (max-width: 768px) {
          .contact-icons-intro {
            gap: 0;
          }

          .contact-icons-intro a {
            width: 56px !important;
            height: 56px !important;
            font-size: 1.4rem !important;
          }
        }
      `}</style>
      <article className="post" id="index">
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            padding: '20px',
            textAlign: 'center',
            width: '100%',
            boxSizing: 'border-box',
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
              <p
                className="intro-text"
                style={{
                  fontSize: '1.4rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '10px',
                  fontWeight: '500',
                  fontStyle: 'italic',
                }}
              >
                {introText}
              </p>

              <h1
                className="name-title"
                style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  marginBottom: '20px',
                  color: 'var(--text-primary)',
                  lineHeight: '1.2',
                  letterSpacing: '-0.5px',
                }}
              >
                Ronith Reddy Prodduturi
              </h1>

              <p
                className="iam-text"
                style={{
                  fontSize: '1.2rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '8px',
                  fontWeight: '500',
                }}
              >
                I am a
              </p>

              <h2
                className="role-container glow-effect"
                style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  marginBottom: '16px',
                  color: 'var(--text-primary)',
                  letterSpacing: '-0.3px',
                  minHeight: '2.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  background: 'var(--background-light)',
                  border: '1px solid var(--border-color)',
                }}
              >
                <span className="emoji-float" style={{ fontSize: '1.6rem' }}>
                  {roles[currentRole].emoji}
                </span>
                <span
                  style={{
                    borderRight: '2px solid var(--primary-color)',
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
                  color: 'var(--text-secondary)',
                  marginBottom: '28px',
                  fontWeight: '600',
                }}
              >
                🌍 Santa Clara, CA • Open to Remote
              </p>

              <p
                className="tagline-text"
                style={{
                  fontSize: '1.4rem',
                  color: 'var(--text-primary)',
                  marginBottom: '36px',
                  fontWeight: '500',
                  lineHeight: '1.6',
                  fontStyle: 'italic',
                  maxWidth: '600px',
                }}
              >
                ✨ &quot;Making data work harder, so you don&apos;t have to.&quot;
              </p>

              <div
                className="contact-buttons"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  marginBottom: '24px',
                }}
              >
                <div
                  style={{
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '1.1rem',
                    fontWeight: '500',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 20px',
                    borderRadius: '12px',
                    background: 'var(--background-light)',
                    border: '1px solid var(--border-color)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'var(--hover-color)';
                    target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'var(--background-light)';
                    target.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>📧</span>
                  <EmailLink />
                </div>
              </div>

              {/* Contact Icons */}
              <div className="contact-icons-intro">
                <a
                  href="https://www.linkedin.com/in/ronithreddy03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'var(--background-light)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '1.6rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'var(--hover-color)';
                    target.style.transform = 'translateY(-2px)';
                    target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'var(--background-light)';
                    target.style.transform = 'translateY(0)';
                    target.style.boxShadow = 'none';
                  }}
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>

                <a
                  href="https://github.com/ronithreddy03"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'var(--background-light)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '1.6rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'var(--hover-color)';
                    target.style.transform = 'translateY(-2px)';
                    target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'var(--background-light)';
                    target.style.transform = 'translateY(0)';
                    target.style.boxShadow = 'none';
                  }}
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>

                <a
                  href="https://ronithreddy.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'var(--background-light)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '1.6rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'var(--hover-color)';
                    target.style.transform = 'translateY(-2px)';
                    target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'var(--background-light)';
                    target.style.transform = 'translateY(0)';
                    target.style.boxShadow = 'none';
                  }}
                >
                  🌐
                </a>

                <a
                  href="mailto:ronith0306@gmail.com"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '64px',
                    height: '64px',
                    borderRadius: '16px',
                    background: 'var(--background-light)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '1.6rem',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'var(--hover-color)';
                    target.style.transform = 'translateY(-2px)';
                    target.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.1)';
                  }}
                  onMouseLeave={(e) => {
                    const target = e.target as HTMLElement;
                    target.style.background = 'var(--background-light)';
                    target.style.transform = 'translateY(0)';
                    target.style.boxShadow = 'none';
                  }}
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link
            href="/contact"
            className="big-button"
            style={{
              textDecoration: 'none',
            }}
          >
            Hire Me →
          </Link>

          <Link
            href="/contact"
            className="big-button"
            style={{
              textDecoration: 'none',
            }}
          >
            Contact Me →
          </Link>

          <div
            style={{
              position: 'relative',
              display: 'inline-block',
            }}
            onMouseEnter={(e) => {
              const target = e.currentTarget;
              const dropdown = target.querySelector('.resume-dropdown') as HTMLElement;
              if (dropdown) {
                dropdown.style.display = 'block';
                dropdown.style.opacity = '1';
                dropdown.style.transform = 'translateY(0)';
              }
            }}
            onMouseLeave={(e) => {
              const target = e.currentTarget;
              const dropdown = target.querySelector('.resume-dropdown') as HTMLElement;
              if (dropdown) {
                dropdown.style.display = 'none';
                dropdown.style.opacity = '0';
                dropdown.style.transform = 'translateY(-10px)';
              }
            }}
          >
            <button
              style={{
                color: '#333',
                textDecoration: 'none',
                fontWeight: 'bold',
                padding: '12px 24px',
                border: '2px solid #333',
                borderRadius: '6px',
                transition: 'all 0.3s ease',
                background: 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
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
              Resume →<span style={{ fontSize: '12px' }}>▼</span>
            </button>

            <div
              className="resume-dropdown"
              style={{
                position: 'absolute',
                top: '100%',
                left: '0',
                right: '0',
                background: 'white',
                border: '2px solid #333',
                borderRadius: '6px',
                marginTop: '4px',
                display: 'none',
                opacity: '0',
                transform: 'translateY(-10px)',
                transition: 'all 0.3s ease',
                zIndex: 1000,
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
              }}
            >
              <Link
                href="/resume"
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  color: '#333',
                  textDecoration: 'none',
                  fontWeight: '500',
                  borderBottom: '1px solid #eee',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.background = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.background = 'white';
                }}
              >
                📄 View Resume
              </Link>
              <a
                href="/resume.pdf"
                download="Ronith_Reddy_Resume.pdf"
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  color: '#333',
                  textDecoration: 'none',
                  fontWeight: '500',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.background = '#f5f5f5';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.background = 'white';
                }}
              >
                💾 Download PDF
              </a>
            </div>
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
