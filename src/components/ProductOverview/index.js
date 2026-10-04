import React from 'react';
import Link from '@docusaurus/Link';
import Icon from './icons';
import styles from './styles.module.css';

// Product overview: intro and layers on the left, a small product preview on
// the right, then icon cards for the main jobs. Content comes from the page.
export function Overview({intro, layers, preview}) {
  return (
    <div className={styles.hero}>
      <div className={styles.copy}>
        <p className={styles.intro}>{intro}</p>
        <ul className={styles.layers}>
          {layers.map((l) => (
            <li key={l.title}>
              <span className={styles.layerIcon}><Icon name={l.icon} /></span>
              <span><b>{l.title}.</b> {l.text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.preview}>{preview}</div>
    </div>
  );
}

export function JobCards({items}) {
  return (
    <div className={styles.cards}>
      {items.map((c) => (
        <Link key={c.to} to={c.to} className={styles.card}>
          <span className={styles.cardIcon}><Icon name={c.icon} /></span>
          <span className={styles.cardTitle}>{c.title}</span>
          <span className={styles.cardText}>{c.text}</span>
        </Link>
      ))}
    </div>
  );
}

// A static preview of a project's Tracks board, modelled on the Tasket UI:
// Team › Project header, Open and Tracks tabs, numbered columns with a
// Done/total counter and a Start button, Pending and Done sections, and
// + Add Track after the last column.
export function TracksPreview() {
  const cols = [
    {n: 1, name: 'Spec', dot: '#7c5cff', count: '1/1', pending: [], done: ['Redesign the sign-in page']},
    {n: 2, name: 'Design', dot: '#e8590c', count: '0/1', pending: ['Redesign the sign-in page'], done: []},
  ];
  return (
    <div className={styles.mock} aria-label="Example: a project's Tracks board in Tasket" role="img">
      <div className={styles.mockBar}>
        <span className={styles.crumb}>Team <i>›</i> <b>Project</b></span>
        <span className={styles.tabs}>
          <span>Open</span>
          <span className={styles.tabOn}>Tracks</span>
        </span>
      </div>
      <div className={styles.board}>
        {cols.map((c) => (
          <div key={c.name} className={styles.col}>
            <div className={styles.colHead}>
              <span className={styles.dot} style={{background: c.dot}} />
              <b>{c.n}. {c.name}</b>
              <span className={styles.count}>{c.count}</span>
              <span className={styles.startBtn}>Start</span>
            </div>
            <div className={styles.section}>Pending</div>
            {c.pending.length ? c.pending.map((t) => <div key={t} className={styles.taskCard}>{t}</div>)
              : <div className={styles.empty}>No tasks</div>}
            <div className={styles.section}>Done</div>
            {c.done.length ? c.done.map((t) => <div key={t} className={`${styles.taskCard} ${styles.taskDone}`}>{t}</div>)
              : <div className={styles.empty}>No tasks</div>}
          </div>
        ))}
        <div className={styles.addTrack}>+ Add Track</div>
      </div>
      <div className={styles.mockFoot}>
        <span>One task, two tracks, two statuses</span>
        <Link to="/docs/tasket/tracks/get-started">Set up Tracks →</Link>
      </div>
    </div>
  );
}
