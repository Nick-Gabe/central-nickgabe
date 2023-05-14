import GHCornerIcon from '@public/extras/gh-corner.svg';
import Link from 'next/link';
import styles from './octocatAnimation.module.css';

export const GithubCorner = () => {
  return (
    <Link
      href="https://github.com/nick-gabe/central-nickgabe"
      className={styles.githubCorner}
    >
      <GHCornerIcon className="w-32 h-32 -top-1 -right-1 xl:fixed absolute z-20" />
    </Link>
  );
};
