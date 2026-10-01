import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Hero: one task seen from each of the four products. The tabs cycle on
// their own until the reader picks one; with reduced motion they never do.
const HOLD_MS = 3200;

function Glyph({children, size = 14}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {children}
    </svg>
  );
}

const ICONS = {
  tasket: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  studio: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
      <path d="M14 3v5h5" />
    </>
  ),
  drive: (
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
  ),
  friday: (
    <path d="m12 5 1.8 4.2L18 11l-4.2 1.8L12 17l-1.8-4.2L6 11l4.2-1.8Z" />
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
};

function TasketView() {
  const steps = [
    ['Outline the launch story', true],
    ['Pull the Q2 numbers', true],
    ['Draft the brief', false],
  ];
  return (
    <>
      <dl className={styles.fields}>
        <dt>Status</dt>
        <dd>
          <span className={styles.pill}>In progress</span>
        </dd>
        <dt>Assignee</dt>
        <dd>
          <span className={styles.person}>
            <span className={clsx(styles.avatar, styles.avatarFriday)}>
              <Glyph size={11}>{ICONS.friday}</Glyph>
            </span>
            Friday
          </span>
        </dd>
        <dt>Track</dt>
        <dd>Launch</dd>
      </dl>
      <ul className={styles.checklist}>
        {steps.map(([label, done]) => (
          <li key={label} className={done ? styles.checked : undefined}>
            <span className={styles.box}>
              {done && <Glyph size={11}>{ICONS.check}</Glyph>}
            </span>
            {label}
          </li>
        ))}
      </ul>
    </>
  );
}

function StudioView() {
  return (
    <div className={styles.doc}>
      <span className={styles.docTitle}>Q3 launch brief</span>
      <span className={styles.docHeading}>Goals</span>
      <span className={styles.line} style={{width: '94%'}} />
      <span className={styles.line} style={{width: '82%'}} />
      <span className={styles.docHeading}>What we learned in Q2</span>
      <span className={styles.line} style={{width: '88%'}} />
      <span className={styles.writing}>
        <span className={clsx(styles.line, styles.growing)} />
        <span className={styles.cursor}>Friday</span>
      </span>
    </div>
  );
}

function DriveView() {
  const files = [
    ['Q2 results.xlsx', 'Edited by you'],
    ['Launch assets', '12 files'],
    ['Brand guide.pdf', 'Read by Friday'],
  ];
  return (
    <ul className={styles.files}>
      {files.map(([name, meta]) => (
        <li key={name}>
          <span className={styles.fileIcon}>
            <Glyph>{name.includes('.') ? ICONS.studio : ICONS.drive}</Glyph>
          </span>
          <span className={styles.fileName}>{name}</span>
          <span className={styles.fileMeta}>{meta}</span>
        </li>
      ))}
      <li className={styles.filesNote}>Attached to this task</li>
    </ul>
  );
}

function FridayView() {
  return (
    <div className={styles.chat}>
      <p className={clsx(styles.msg, styles.msgYou)}>
        Draft the brief from the template, using the Q2 numbers.
      </p>
      <p className={clsx(styles.msg, styles.msgFriday)}>
        <span className={styles.msgFrom}>
          <Glyph size={12}>{ICONS.friday}</Glyph>
          Friday
        </span>
        Done. The draft is in Studio and the figures come from Q2
        results.xlsx. I left two questions for you inline.
      </p>
    </div>
  );
}

const TABS = [
  {
    id: 'tasket',
    label: 'Tasket',
    caption: 'The task: who owns it, where it stands, what is left.',
    View: TasketView,
  },
  {
    id: 'studio',
    label: 'Studio',
    caption: 'The brief, written in the same doc by you and Friday.',
    View: StudioView,
  },
  {
    id: 'drive',
    label: 'Drive',
    caption: 'The files the work depends on, attached once.',
    View: DriveView,
  },
  {
    id: 'friday',
    label: 'Friday',
    caption: 'The agent that sees all of it, and does the work.',
    View: FridayView,
  },
];

export default function HeroDemo() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setAuto(false);
    }
  }, []);

  useEffect(() => {
    if (!auto) {
      return undefined;
    }
    const id = setTimeout(
      () => setActive((i) => (i + 1) % TABS.length),
      HOLD_MS,
    );
    return () => clearTimeout(id);
  }, [active, auto]);

  const tab = TABS[active];
  const {View} = tab;

  return (
    <figure className={styles.frame}>
      <div className={styles.window}>
        <div className={styles.head}>
          <span className={styles.crumbs}>
            Marketing <span>/</span> Launch track
          </span>
          <span className={styles.title}>Write the Q3 launch brief</span>
        </div>

        <div
          className={clsx(styles.tabs, auto && styles.cycling)}
          role="tablist"
          aria-label="Neo products">
          {TABS.map((t, i) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`hero-tab-${t.id}`}
              aria-selected={i === active}
              aria-controls="hero-panel"
              className={clsx(styles.tab, i === active && styles.tabActive)}
              onClick={() => {
                setAuto(false);
                setActive(i);
              }}>
              <Glyph>{ICONS[t.id]}</Glyph>
              {t.label}
              {i === active && auto && (
                <span
                  className={styles.timer}
                  style={{animationDuration: `${HOLD_MS}ms`}}
                />
              )}
            </button>
          ))}
        </div>

        <div
          key={tab.id}
          id="hero-panel"
          role="tabpanel"
          aria-labelledby={`hero-tab-${tab.id}`}
          className={styles.panel}>
          <View />
        </div>
      </div>
      <figcaption className={styles.caption}>
        <strong>{tab.label}.</strong> {tab.caption}
      </figcaption>
    </figure>
  );
}
