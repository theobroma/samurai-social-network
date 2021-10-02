import React from 'react';
import styles from './SocialLink.module.scss';

type Props = {
  link: string;
};

export const SocialLink: React.FC<Props> = ({ link, children, ...rest }) => {
  return (
    <div className={styles.socialLink}>
      <a
        {...rest}
        className={styles.link}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    </div>
  );
};
