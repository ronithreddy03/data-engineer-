'use client';

import React from 'react';

import Link from 'next/link';

import routes from '../../data/routes';
import Hamburger from './Hamburger';

// Websites Navbar, displays routes defined in 'src/data/routes'
const Navigation: React.FC = () => (
  <header id="header">
    <h1 className="index-link">
      {routes
        .filter((l) => l.index)
        .map((l) => (
          <Link key={l.label} href={l.path}>
            {l.label}
          </Link>
        ))}
    </h1>
    <nav className="links">
      <ul>
        {routes
          .filter((l) => !l.index)
          .map((l) => (
            <li key={l.label}>
              <Link
                href={l.path}
                style={{
                  display: 'inline-block',
                  padding: '8px 16px',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: '#064e3b',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  border: '2px solid #059669',
                  background: 'transparent',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  boxShadow: '0 6px 0 0 #047857',
                  zIndex: 1,
                }}
                onMouseEnter={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'translateY(3px)';
                  target.style.boxShadow = '0 4px 12px rgba(5, 150, 105, 0.3)';
                }}
                onMouseLeave={(e) => {
                  const target = e.target as HTMLElement;
                  target.style.transform = 'translateY(0)';
                  target.style.boxShadow = '0 6px 0 0 #047857';
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
    <Hamburger />
  </header>
);

export default Navigation;
