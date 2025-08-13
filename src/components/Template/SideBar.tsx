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
          Hi, I&apos;m Ronith — part data whisperer, part problem solver, and part
          &quot;how-does-this-even-work?&quot; enthusiast.
        </p>
        <p>
          As a data engineer, I love designing pipelines that flow smoother than my favorite EDM
          drops, turning raw data into insights that actually drive action.
        </p>
        <p>
          When I&apos;m not wrangling datasets, you&apos;ll probably find me chasing sunsets by the
          lake or losing myself in the energy of an EDM concert.
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
