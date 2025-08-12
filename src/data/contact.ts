import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

const data: ContactItem[] = [
  {
    link: 'https://github.com/ronithreddy03',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.linkedin.com/in/ronithreddy03',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://ronithreddy.netlify.app',
    label: 'Portfolio',
    icon: faEnvelope, // Using envelope icon for portfolio, you might want to change this
  },
  {
    link: 'mailto:ronith0306@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
