import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Changelog taxonomy. Each key matches a tag in blog/tags.yml, so a release
// note is filed under a product and a type by its front-matter tags.
export const PRODUCTS = [
  {key: 'tasket', label: 'Tasket'},
  {key: 'friday', label: 'Friday'},
  {key: 'studio', label: 'Studio'},
  {key: 'drive', label: 'Drive'},
];

export const TYPES = [
  {key: 'new-feature', label: 'New', tone: 'new'},
  {key: 'improvement', label: 'Improved', tone: 'improved'},
  {key: 'fix', label: 'Fixed', tone: 'fixed'},
];

// First month the changelog covers: July 2026, when Neo launched. Every month
// from here to the newest release note is listed, so a quiet month still
// shows.
export const CHANGELOG_START = '2026-07';

// Tag keys are the last segment of the tag permalink: /changelog/tags/<key>.
export function tagKeys(tags) {
  return tags.map((t) => t.permalink.split('/').filter(Boolean).pop());
}

export function classify(tags) {
  const keys = tagKeys(tags);
  return {
    products: PRODUCTS.filter((p) => keys.includes(p.key)),
    types: TYPES.filter((t) => keys.includes(t.key)),
  };
}

export function Badges({tags}) {
  const {products, types} = classify(tags);
  return (
    <span className={styles.badges}>
      {types.map((t) => (
        <span key={t.key} className={clsx(styles.badge, styles[t.tone])}>
          {t.label}
        </span>
      ))}
      {products.map((p) => (
        <span key={p.key} className={clsx(styles.badge, styles.product)}>
          {p.label}
        </span>
      ))}
    </span>
  );
}

// Dates are stored as midnight UTC, so format in UTC to avoid showing the
// previous day west of Greenwich.
export function formatDay(date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatMonth(date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function formatFull(date) {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}
