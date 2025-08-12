'use client';

import React from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ContactIcons from '../Contact/ContactIcons';

const SideBar: React.FC = () => {
  const pathname = usePathname();

  return (
    <section id="sidebar">
      <section id="intro">
        {/* Photo placeholder - uncomment and add your photo to enable */}
        <Link href="/" className="logo">
          <Image 
            src="/images/me.jpg" 
            alt="Ronith Reddy Prodduturi" 
            width={400} 
            height={400} 
            priority 
            quality={100}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </Link>
        <header>
          <p>
            <a href="mailto:ronith0306@gmail.com">ronith0306@gmail.com</a>
          </p>
        </header>
      </section>

      <section className="blurb">
        <h2>About</h2>
        <p>
          I am a Data Scientist, ML Engineer, and Data Engineer with 3+ years of experience building ML models and scalable data pipelines. I focus on turning messy data into reliable, production-ready insights.
        </p>
        <p>
          I work across Python, PySpark, SQL, Apache Spark, and AWS to ship real-time analytics and ML services. Currently based in Dallas, TX and open to opportunities in TX/CA or remote.
        </p>
        <ul className="actions">
          <li>
            {pathname && !pathname.includes('/resume') ? (
              <Link href="/resume" className="button">
                Learn More
              </Link>
            ) : (
              <Link href="/about" className="button">
                About Me
              </Link>
            )}
          </li>
        </ul>
      </section>

      <section id="footer">
        <ContactIcons />
        <p className="copyright">
          &copy; Ronith Reddy Prodduturi <Link href="/">ronithreddy.com</Link>.
        </p>
      </section>
    </section>
  );
};

export default SideBar;
