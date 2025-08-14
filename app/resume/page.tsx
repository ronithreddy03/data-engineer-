'use client';

import React, { useState } from 'react';

import Courses from '@/components/Resume/Courses';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import References from '@/components/Resume/References';
import Skills from '@/components/Resume/Skills';
import courses from '@/data/resume/courses';
import degrees from '@/data/resume/degrees';
import skills, { categories } from '@/data/resume/skills';
import work from '@/data/resume/work';

const sections = [
  { name: 'Education', id: 'education' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Courses', id: 'courses' },
  { name: 'References', id: 'references' },
];

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState('education');
  const [showFact, setShowFact] = useState(false);
  const [currentFact, setCurrentFact] = useState('');

  const facts = [
    'Did you know? The first computer programmer was Ada Lovelace in the 1840s!',
    'Fun fact: Python was named after Monty Python, not the snake!',
    "Interesting: The term 'data science' was first used in 1974 by Peter Naur.",
    'Did you know? The first email was sent in 1971 by Ray Tomlinson.',
    'Fun fact: The average person generates 1.7MB of data every second!',
    'Interesting: Machine learning models can process data 1000x faster than humans.',
    'Did you know? The first database was created in 1960 by Charles Bachman.',
    'Fun fact: SQL was developed by IBM in the 1970s.',
    'Interesting: The first AI program was written in 1951 to play checkers.',
    'Did you know? Data engineers process 2.5 quintillion bytes of data daily worldwide!',
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);

    // Show a random fact during transition
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    setCurrentFact(randomFact);
    setShowFact(true);

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Hide fact after 3 seconds
    setTimeout(() => {
      setShowFact(false);
    }, 3000);
  };

  // Add scroll spy effect
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'education');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <article className="post" id="resume">
      {showFact && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: 'rgba(51, 51, 51, 0.95)',
            color: 'white',
            padding: '20px 30px',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            zIndex: 1000,
            maxWidth: '400px',
            textAlign: 'center',
            fontSize: '1rem',
            fontWeight: '500',
            border: '2px solid #333333',
            transition: 'all 0.3s ease',
          }}
        >
          💡 {currentFact}
        </div>
      )}

      <div
        style={{
          textAlign: 'center',
          marginBottom: '40px',
        }}
      >
        <h1
          style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#333333',
            marginBottom: '30px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
          }}
        >
          Resume
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginBottom: '30px',
          }}
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              style={{
                position: 'relative',
                display: 'inline-block',
                cursor: 'pointer',
                outline: 'none',
                border: '2px solid #059669',
                borderRadius: '12px',
                background: 'transparent',
                color: '#064e3b',
                fontSize: '0.9rem',
                fontWeight: '600',
                textTransform: 'uppercase',
                padding: '8px 16px',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                boxShadow: '0 6px 0 0 #047857',
                zIndex: 1,
              }}
              onMouseEnter={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = 'translateY(3px)';
                target.style.boxShadow = '0 4px 12px rgba(5, 150, 105, 0.3)';
              }}
              onMouseLeave={(e) => {
                const target = e.target as HTMLButtonElement;
                target.style.transform = 'translateY(0)';
                target.style.boxShadow = '0 6px 0 0 #047857';
              }}
            >
              {section.name}
            </button>
          ))}
        </div>
      </div>

      <section
        id="education"
        className="education"
        style={{
          padding: '20px 0',
          borderLeft: activeSection === 'education' ? '4px solid #059669' : '4px solid transparent',
          paddingLeft: '20px',
          transition: 'all 0.3s ease',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <div className="link-to" />
        <Education data={degrees} />
      </section>

      <section
        id="experience"
        className="experience"
        style={{
          padding: '20px 0',
          borderLeft:
            activeSection === 'experience' ? '4px solid #059669' : '4px solid transparent',
          paddingLeft: '20px',
          transition: 'all 0.3s ease',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <div className="link-to" />
        <Experience data={work} />
      </section>

      <section
        id="skills"
        className="skills"
        style={{
          padding: '20px 0',
          borderLeft: activeSection === 'skills' ? '4px solid #059669' : '4px solid transparent',
          paddingLeft: '20px',
          transition: 'all 0.3s ease',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <div className="link-to" />
        <Skills skills={skills} categories={categories} />
      </section>

      <section
        id="courses"
        className="courses"
        style={{
          padding: '20px 0',
          borderLeft: activeSection === 'courses' ? '4px solid #059669' : '4px solid transparent',
          paddingLeft: '20px',
          transition: 'all 0.3s ease',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <div className="link-to" />
        <Courses data={courses} />
      </section>

      <section
        id="references"
        className="references"
        style={{
          padding: '20px 0',
          borderLeft:
            activeSection === 'references' ? '4px solid #059669' : '4px solid transparent',
          paddingLeft: '20px',
          transition: 'all 0.3s ease',
          borderRadius: '8px',
          marginBottom: '20px',
        }}
      >
        <div className="link-to" />
        <References />
      </section>
    </article>
  );
}
