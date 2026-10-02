import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

// Link cards for overview pages: a small label, the page title and one line
// on what the reader gets there.
export default function DocCards({items}) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Link key={item.to} to={item.to} className={styles.card}>
          <span className={styles.kind}>{item.kind}</span>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.line}>{item.description}</span>
        </Link>
      ))}
    </div>
  );
}
