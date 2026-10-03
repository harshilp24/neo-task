import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Floating switcher for comparing design directions. Sets
// <html data-direction="a|b|c">, which src/css/directions.css styles. The
// choice comes from ?direction= or the last pick, kept in localStorage.

const DIRECTIONS = [
  {key: '', label: 'Current'},
  {key: 'a', label: 'A · Editorial'},
  {key: 'b', label: 'B · Product'},
  {key: 'c', label: 'C · Technical'},
];
const STORAGE_KEY = 'neo-docs-direction';

function apply(key) {
  if (key) {
    document.documentElement.dataset.direction = key;
  } else {
    delete document.documentElement.dataset.direction;
  }
}

export default function DirectionSwitcher() {
  const [current, setCurrent] = useState('');

  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('direction');
    let stored = '';
    try {
      stored = window.localStorage.getItem(STORAGE_KEY) ?? '';
    } catch {
      // Storage can be blocked; the switcher still works for this page.
    }
    const key = DIRECTIONS.some((d) => d.key === fromUrl) ? fromUrl : stored;
    setCurrent(key);
    apply(key);
  }, []);

  const pick = (key) => {
    setCurrent(key);
    apply(key);
    try {
      window.localStorage.setItem(STORAGE_KEY, key);
    } catch {
      // Ignore: the choice just won't survive a reload.
    }
  };

  return (
    <div className={styles.switcher} role="group" aria-label="Design direction">
      <span className={styles.label}>Direction</span>
      {DIRECTIONS.map((d) => (
        <button
          key={d.key || 'current'}
          type="button"
          className={clsx(styles.option, current === d.key && styles.on)}
          aria-pressed={current === d.key}
          onClick={() => pick(d.key)}>
          {d.label}
        </button>
      ))}
    </div>
  );
}
