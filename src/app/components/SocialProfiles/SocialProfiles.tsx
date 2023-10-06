import Image from 'next/image';
import React from 'react';

import { links } from './source';
import styles from './social.module.css';

export const SocialProfiles: React.FC = () => (
  <section className="top-0 left-0 absolute z-20 p-4">
    {links.map((social) => (
      <a
        aria-label={`Visite meu perfil no ${social.name}!`}
        className={styles.social}
        href={social.url}
        key={social.name}
        rel="noopener noreferrer"
        target="_blank"
      >
        <Image
          alt={social.name}
          className="mb-3"
          height={26}
          loading="lazy"
          src={social.icon}
          width={26}
        />
      </a>
    ))}
  </section>
);
