import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {useLocation} from '@docusaurus/router';
import styles from './styles.module.css';

// "Was this page helpful?" with thumbs up and down. A "no" asks one
// optional follow-up. The vote is remembered per page in this browser.
// Nothing is sent to a server yet: if Google Analytics (gtag) is on the
// page, the vote is sent as a "page_feedback" event.

const KEY = 'neo-docs-feedback:';

function send(page, helpful, comment) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'page_feedback', {
      page_path: page,
      helpful,
      comment: comment || undefined,
    });
  }
}

function Thumb({down}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={down ? {transform: 'rotate(180deg)'} : undefined}>
      <path d="M7 10v11H4a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h3Z" />
      <path d="M7 10l4.5-7a2 2 0 0 1 3.5 1.6L14 9h5.5a2 2 0 0 1 2 2.3l-1.4 8A2 2 0 0 1 18.1 21H7" />
    </svg>
  );
}

export default function PageFeedback() {
  const {pathname} = useLocation();
  // 'idle' | 'yes' | 'asking' | 'no'
  const [state, setState] = useState('idle');
  const [comment, setComment] = useState('');

  useEffect(() => {
    let saved = null;
    try {
      saved = window.localStorage.getItem(KEY + pathname);
    } catch {
      // Storage can be blocked; the widget still works for this visit.
    }
    setState(saved === 'yes' || saved === 'no' ? saved : 'idle');
    setComment('');
  }, [pathname]);

  const save = (value) => {
    try {
      window.localStorage.setItem(KEY + pathname, value);
    } catch {
      // Ignore: the vote just won't be remembered.
    }
  };

  const vote = (helpful) => {
    if (helpful) {
      send(pathname, true);
      save('yes');
      setState('yes');
    } else {
      setState('asking');
    }
  };

  const submitNo = (e) => {
    e.preventDefault();
    send(pathname, false, comment.trim());
    save('no');
    setState('no');
  };

  return (
    <section className={styles.box} aria-labelledby="page-feedback-title">
      {state === 'idle' || state === 'asking' ? (
        <div className={styles.row}>
          <h2 id="page-feedback-title" className={styles.question}>
            Was this page helpful?
          </h2>
          <div className={styles.buttons}>
            <button
              type="button"
              className={styles.btn}
              onClick={() => vote(true)}>
              <Thumb />
              Yes
            </button>
            <button
              type="button"
              className={clsx(styles.btn, state === 'asking' && styles.on)}
              aria-pressed={state === 'asking'}
              onClick={() => vote(false)}>
              <Thumb down />
              No
            </button>
          </div>
        </div>
      ) : (
        <p className={styles.thanks} role="status">
          {state === 'yes'
            ? 'Thanks for letting us know.'
            : 'Thanks. We’ll use this to improve the page.'}
          <button
            type="button"
            className={styles.change}
            onClick={() => setState('idle')}>
            Change answer
          </button>
        </p>
      )}

      {state === 'asking' && (
        <form className={styles.form} onSubmit={submitNo}>
          <label htmlFor="page-feedback-comment" className={styles.label}>
            What were you looking for? <span>(optional)</span>
          </label>
          <textarea
            id="page-feedback-comment"
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className={styles.formRow}>
            <button type="submit" className={clsx(styles.btn, styles.primary)}>
              Send
            </button>
            <button
              type="button"
              className={styles.change}
              onClick={() => setState('idle')}>
              Cancel
            </button>
          </div>
        </form>
      )}
    </section>
  );
}
