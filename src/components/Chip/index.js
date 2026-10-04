import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Small status label for docs tables: <Chip kind="pending">Pending</Chip>.
// Kinds: none, pending, done, yes, no, admin.
export default function Chip({kind = 'none', children}) {
  return <span className={clsx(styles.chip, styles[kind])}>{children}</span>;
}
