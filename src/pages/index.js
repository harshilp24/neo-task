import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HeroDemo from '@site/src/components/HeroDemo';
import styles from './index.module.css';

const CONCEPT = '/docs/tasket/tracks';
const HOW_TO = '/docs/tasket/tracks/run-a-task-across-workstreams';
const RELEASE_NOTE = '/changelog/tracks';

// Line icons, drawn on a 24px grid and stroked with currentColor.
const ICONS = {
  tracks: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
      <circle cx="8" cy="6" r="1.6" />
      <circle cx="14" cy="12" r="1.6" />
      <circle cx="10" cy="18" r="1.6" />
    </>
  ),
  steps: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  flag: (
    <>
      <path d="M5 21V4" />
      <path d="M5 4h11l-2 4 2 4H5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.5 3.5 5.5 3.5 8.5s-1 6-3.5 8.5c-2.5-2.5-3.5-5.5-3.5-8.5s1-6 3.5-8.5Z" />
    </>
  ),
};

// One card per Tracks article, listing its main sections so readers can
// jump straight to the part they need.
const GROUPS = [
  {
    icon: 'tracks',
    kicker: 'Concepts',
    title: 'What are Tracks?',
    to: CONCEPT,
    outcome: 'How one task holds a separate status in each workstream.',
    needs: 'New to Tracks',
    meta: 'Five-minute read',
    tasks: [
      ['Track statuses', `${CONCEPT}#track-statuses`],
      ['The Tracks board', `${CONCEPT}#the-tracks-board`],
      ['The Tracks pill', `${CONCEPT}#the-tracks-pill`],
      ['What happens when things change', `${CONCEPT}#what-happens-when-things-change`],
      ['Who can do what', `${CONCEPT}#who-can-do-what`],
    ],
  },
  {
    icon: 'steps',
    kicker: 'How-to',
    title: 'Run a task across workstreams',
    to: HOW_TO,
    outcome: 'Turn on Tracks, create your tracks, and move a task through them.',
    needs: 'Access to a project',
    meta: 'About five minutes',
    tasks: [
      ['Turn on Tracks', `${HOW_TO}#turn-on-tracks`],
      ['Create your tracks', `${HOW_TO}#create-your-tracks`],
      ['Start the task on its tracks', `${HOW_TO}#start-the-task-on-its-tracks`],
      ['Move the task through each track', `${HOW_TO}#move-the-task-through-each-track`],
      ['Close the task', `${HOW_TO}#close-the-task`],
    ],
  },
];

const MORE = [
  {
    icon: 'clock',
    title: 'Changelog',
    line: 'What shipped, newest first.',
    to: '/changelog',
  },
  {
    icon: 'flag',
    title: 'Manifesto',
    line: 'Why Neo is built the way it is.',
    href: 'https://neo.work/manifesto',
  },
  {
    icon: 'globe',
    title: 'neo.work',
    line: 'The product site, and where you sign up.',
    href: 'https://neo.work',
  },
];

const FOOTER_LINKS = [
  ['neo.work', 'https://neo.work', true],
  ['Changelog', '/changelog', false],
  ['Manifesto', 'https://neo.work/manifesto', true],
  ['Privacy', 'https://neo.work/privacy', true],
  ['Terms', 'https://neo.work/terms', true],
];

function Icon({name, size = 20}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {ICONS[name]}
    </svg>
  );
}

function Chevron() {
  return (
    <svg
      className={styles.chevron}
      width="14"
      height="14"
      viewBox="0 0 14 14"
      aria-hidden="true">
      <path
        d="M4 2.5 L8.5 7 L4 11.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Group({g}) {
  return (
    <section className={styles.group}>
      <Link to={g.to} className={styles.groupHead}>
        <span className={styles.iconBox}>
          <Icon name={g.icon} />
        </span>
        <span className={styles.kicker}>{g.kicker}</span>
        <h3 className={styles.groupTitle}>{g.title}</h3>
        <p className={styles.groupOutcome}>{g.outcome}</p>
        <span className={styles.groupMeta}>
          <span className={styles.needs}>{g.needs}</span>
          <span aria-hidden="true">·</span>
          {g.meta}
        </span>
      </Link>
      <ul className={styles.taskList}>
        {g.tasks.map(([label, to]) => (
          <li key={to}>
            <Link to={to} className={styles.task}>
              <span>{label}</span>
              <Chevron />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

function MoreCard({m}) {
  const body = (
    <>
      <span className={styles.iconBox}>
        <Icon name={m.icon} />
      </span>
      <h3 className={styles.moreTitle}>{m.title}</h3>
      <p className={styles.moreLine}>{m.line}</p>
    </>
  );
  return m.href ? (
    <a href={m.href} className={styles.more}>
      {body}
    </a>
  ) : (
    <Link to={m.to} className={styles.more}>
      {body}
    </Link>
  );
}

export default function Home() {
  return (
    <Layout
      title="Neo Docs"
      description="Guides and reference for Neo: Tasket, Friday, Studio and Drive, the work platform where AI does the work.">
      <div className={styles.page}>
        <header className={styles.hero}>
          <div>
            <h1 className={styles.h1}>Welcome to Neo Docs</h1>
            <p className={styles.lead}>
              Guides for Tasket, Friday, Studio and Drive. Set up your team, put
              context on every task, and hand the work to Friday.
            </p>
            <div className={styles.heroActions}>
              <Link to={HOW_TO} className={styles.btnPrimary}>
                Get started with Tracks
              </Link>
              <Link to={CONCEPT} className={styles.btnOutline}>
                What are Tracks?
              </Link>
            </div>
            <p className={styles.heroNote}>
              New in Tasket: one task, several workstreams, a status for each.
            </p>
          </div>
          <HeroDemo />
        </header>

        <Link to={RELEASE_NOTE} className={styles.banner}>
          <div>
            <span className={styles.kicker}>New in Tasket</span>
            <h2 className={styles.bannerTitle}>
              Tracks: run one task through several workstreams
            </h2>
            <p className={styles.bannerLine}>
              Spec, design, engineering and QA each get their own column and
              their own status on the same task. Read what changed.
            </p>
          </div>
          <span className={styles.btnWhite}>
            Release note
            <Chevron />
          </span>
        </Link>

        <section className={styles.section}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Where to start</h2>
            <p className={styles.sectionSub}>
              Read the concepts first if Tracks is new to you, or go straight
              to the steps.
            </p>
          </div>
          <div className={styles.groupGrid}>
            {GROUPS.map((g) => (
              <Group key={g.title} g={g} />
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.h2}>More</h2>
          <div className={styles.moreGrid}>
            {MORE.map((m) => (
              <MoreCard key={m.title} m={m} />
            ))}
          </div>
        </section>

        <footer className={styles.footer}>
          <nav className={styles.footerNav}>
            {FOOTER_LINKS.map(([label, to, external]) =>
              external ? (
                <a key={label} href={to} className={styles.footerLink}>
                  {label}
                </a>
              ) : (
                <Link key={label} to={to} className={styles.footerLink}>
                  {label}
                </Link>
              ),
            )}
          </nav>
          <span className={styles.footerCopy}>&copy; Neo 2026</span>
        </footer>
      </div>
    </Layout>
  );
}
