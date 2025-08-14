'use client';

import React, { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '@/data/contact';

const ContactIcons: React.FC = () => {
  const [showLoading, setShowLoading] = useState(false);
  const [loadingFact, setLoadingFact] = useState('');

  const funFacts = [
    'Did you know? The first website went live in 1991!',
    'Fun fact: The average website loads in under 3 seconds.',
    'Interesting: The first domain name was registered in 1985.',
    'Did you know? The web was invented by Tim Berners-Lee in 1989.',
    'Fun fact: There are over 1.8 billion websites today!',
    'Interesting: The first web browser was called WorldWideWeb.',
    'Did you know? The first e-commerce transaction was in 1994.',
    'Fun fact: The average person visits 88 websites per month.',
    'Interesting: The first search engine was Archie in 1990.',
    'Did you know? The web is only 30+ years old but changed everything!',
  ];

  const handlePortfolioClick = (e: React.MouseEvent, link: string) => {
    if (link.includes('netlify.app')) {
      e.preventDefault();

      // Show random fact
      const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];
      setLoadingFact(randomFact);
      setShowLoading(true);

      // Redirect after 3 seconds
      setTimeout(() => {
        window.open(link, '_blank');
        setShowLoading(false);
      }, 3000);
    }
  };

  // Handle spinning animation
  useEffect(() => {
    if (showLoading) {
      const globe = document.getElementById('spinning-globe');
      if (globe) {
        let rotation = 0;
        const spinInterval = setInterval(() => {
          rotation += 10;
          globe.style.transform = `rotate(${rotation}deg)`;
        }, 50);

        return () => clearInterval(spinInterval);
      }
    }
  }, [showLoading]);

  return (
    <>
      {showLoading && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(51, 51, 51, 0.98)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            color: 'white',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: '2rem',
              marginBottom: '20px',
              transform: 'rotate(0deg)',
              animation: 'none',
            }}
            id="spinning-globe"
          >
            🌐
          </div>
          <div
            style={{
              fontSize: '1.2rem',
              fontWeight: '500',
              marginBottom: '10px',
              maxWidth: '500px',
              padding: '0 20px',
            }}
          >
            {loadingFact}
          </div>
          <div
            style={{
              fontSize: '1rem',
              opacity: 0.8,
              marginTop: '20px',
            }}
          >
            Loading your portfolio...
          </div>
        </div>
      )}

      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link} aria-label={s.label} onClick={(e) => handlePortfolioClick(e, s.link)}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContactIcons;
