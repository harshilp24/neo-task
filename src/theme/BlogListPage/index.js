import React, {useEffect, useMemo, useRef, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useHistory, useLocation} from '@docusaurus/router';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import Layout from '@theme/Layout';
import MDXContent from '@theme/MDXContent';
import SearchMetadata from '@theme/SearchMetadata';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import {
  PRODUCTS,
  TYPES,
  CHANGELOG_START,
  Badges,
  tagKeys,
  formatDay,
} from '@site/src/components/Changelog';
import CopyPage from '@site/src/components/CopyPage';
import styles from './styles.module.css';

// Changelog index. The sidebar lists every month by year; picking one shows
// only that month's release notes, in full, under search and filters. State
// lives in the URL (?month=&q=&product=&type=) so any view can be shared.

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// "2026-10" from an ISO date, read in UTC like every other changelog date.
function monthKey(date) {
  return new Date(date).toISOString().slice(0, 7);
}

function previousMonth(key) {
  const [year, month] = key.split('-').map(Number);
  return month === 1
    ? `${year - 1}-12`
    : `${year}-${String(month - 1).padStart(2, '0')}`;
}

function monthName(key) {
  return MONTHS[Number(key.slice(5, 7)) - 1];
}

function useParams() {
  const location = useLocation();
  const history = useHistory();
  const params = new URLSearchParams(location.search);
  const state = {
    month: params.get('month') ?? '',
    q: params.get('q') ?? '',
    product: params.get('product') ?? '',
    type: params.get('type') ?? '',
  };
  const set = (patch) => {
    const next = new URLSearchParams(location.search);
    Object.entries(patch).forEach(([k, v]) =>
      v ? next.set(k, v) : next.delete(k),
    );
    const search = next.toString();
    history.replace({...location, search: search ? `?${search}` : ''});
  };
  return [state, set];
}

function matches(post, {q, product, type}) {
  if (product && !post.keys.includes(product)) {
    return false;
  }
  if (type && !post.keys.includes(type)) {
    return false;
  }
  const words = q.toLowerCase().split(/\s+/).filter(Boolean);
  return words.every((w) => post.text.includes(w));
}

function Icon({children, size = 16}) {
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

const SEARCH = (
  <>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </>
);
const RSS = (
  <>
    <path d="M5 11a8 8 0 0 1 8 8M5 5a14 14 0 0 1 14 14" />
    <circle cx="6" cy="18" r="1.2" fill="currentColor" />
  </>
);
const HISTORY = (
  <>
    <path d="M3.5 12a8.5 8.5 0 1 0 2.5-6" />
    <path d="M3.5 4v4h4M12 7.5V12l3 2" />
  </>
);
const CHEVRON = <path d="m9 6 6 6-6 6" />;

function MonthNav({years, selected, counts, onSelect}) {
  // The selected month's year starts open; the rest start closed.
  const [open, setOpen] = useState(() => new Set([selected.slice(0, 4)]));
  const toggle = (year) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(year)) {
        next.delete(year);
      } else {
        next.add(year);
      }
      return next;
    });

  return (
    <nav className={styles.sidebar} aria-label="Changelog by month">
      <span className={styles.sidebarLabel}>
        <Icon>{HISTORY}</Icon>
        Changelog
      </span>
      {years.map(({year, months}) => {
        const isOpen = open.has(year);
        return (
          <div key={year} className={styles.year}>
            <button
              type="button"
              className={styles.yearToggle}
              aria-expanded={isOpen}
              onClick={() => toggle(year)}>
              <span className={clsx(styles.caret, isOpen && styles.caretOpen)}>
                <Icon size={14}>{CHEVRON}</Icon>
              </span>
              {year}
            </button>
            {isOpen && (
              <ul className={styles.monthList}>
                {months.map((key) => (
                  <li key={key}>
                    <button
                      type="button"
                      className={clsx(
                        styles.month,
                        key === selected && styles.monthOn,
                      )}
                      aria-current={key === selected ? 'true' : undefined}
                      onClick={() => onSelect(key)}>
                      <span>{monthName(key)}</span>
                      {counts[key] > 0 && (
                        <span className={styles.monthCount}>{counts[key]}</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </nav>
  );
}

const CLOSE = <path d="M7 7l10 10M17 7 7 17" />;
const CHECK = <path d="m5 12.5 4.5 4.5L19 7.5" />;
const CARET = <path d="m7 10 5 5 5-5" />;

// Compact filter: a button that opens a menu of options. With a value set,
// the button shows it and an × to clear.
function FilterMenu({label, options, value, onChange}) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const selected = options.find((o) => o.key === value);

  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onDown = (e) => {
      if (!ref.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const pick = (key) => {
    onChange(key);
    setOpen(false);
  };

  return (
    <div ref={ref} className={styles.menuWrap}>
      <div className={clsx(styles.menuButton, selected && styles.menuButtonOn)}>
        <button
          type="button"
          className={styles.menuTrigger}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}>
          {selected ? selected.label : label}
          {!selected && <Icon size={14}>{CARET}</Icon>}
        </button>
        {selected && (
          <button
            type="button"
            className={styles.menuClear}
            aria-label={`Clear ${label.toLowerCase()} filter`}
            onClick={() => pick('')}>
            <Icon size={13}>{CLOSE}</Icon>
          </button>
        )}
      </div>
      {open && (
        <div className={styles.menu} role="menu" aria-label={label}>
          {[{key: '', label: `All ${label.toLowerCase()}s`}, ...options].map(
            (o) => (
              <button
                key={o.key || 'all'}
                type="button"
                role="menuitemradio"
                aria-checked={value === o.key}
                className={styles.menuItem}
                onClick={() => pick(o.key)}>
                {o.label}
                {value === o.key && <Icon size={15}>{CHECK}</Icon>}
              </button>
            ),
          )}
        </div>
      )}
    </div>
  );
}

function Entry({post}) {
  const {metadata, Content} = post;
  return (
    <article className={styles.entry}>
      <div className={styles.entryMeta}>
        <time dateTime={metadata.date}>{formatDay(metadata.date)}</time>
        <Badges tags={metadata.tags} />
      </div>
      <h2 className={styles.entryTitle}>
        <Link to={metadata.permalink}>{metadata.title}</Link>
      </h2>
      <div className={styles.entryBody}>
        <MDXContent>
          <Content />
        </MDXContent>
      </div>
    </article>
  );
}

function Changelog({metadata, items}) {
  const [state, setState] = useParams();
  const searchRef = useRef(null);

  const posts = useMemo(
    () =>
      items.map(({content}) => {
        const m = content.metadata;
        return {
          metadata: m,
          Content: content,
          keys: tagKeys(m.tags),
          month: monthKey(m.date),
          text: [m.title, m.description, ...m.tags.map((t) => t.label)]
            .join(' ')
            .toLowerCase(),
        };
      }),
    [items],
  );

  // Every month from the newest release note back to CHANGELOG_START,
  // grouped by year, newest first.
  const years = useMemo(() => {
    const newest = posts.reduce(
      (max, p) => (p.month > max ? p.month : max),
      CHANGELOG_START,
    );
    const grouped = [];
    for (let key = newest; key >= CHANGELOG_START; key = previousMonth(key)) {
      const year = key.slice(0, 4);
      const last = grouped[grouped.length - 1];
      if (last?.year === year) {
        last.months.push(key);
      } else {
        grouped.push({year, months: [key]});
      }
    }
    return grouped;
  }, [posts]);
  const allMonths = years.flatMap((y) => y.months);

  // "/" focuses the search box, unless the reader is already typing.
  useEffect(() => {
    const onKey = (e) => {
      const typing =
        /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName) ||
        e.target.isContentEditable;
      if (e.key === '/' && !typing && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        searchRef.current?.focus();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const matching = posts.filter((p) => matches(p, state));
  const counts = {};
  matching.forEach((p) => {
    counts[p.month] = (counts[p.month] ?? 0) + 1;
  });

  // Default to the newest month that has a release note.
  const selected = allMonths.includes(state.month)
    ? state.month
    : allMonths.find((k) => posts.some((p) => p.month === k)) ?? allMonths[0];
  const visible = matching.filter((p) => p.month === selected);
  const filtered = Boolean(state.q || state.product || state.type);
  const monthLabel = `${monthName(selected)} ${selected.slice(0, 4)}`;

  return (
    <Layout>
      <div className={styles.page}>
        <MonthNav
          years={years}
          selected={selected}
          counts={counts}
          onSelect={(month) => setState({month})}
        />

        <main className={styles.main}>
          <header className={styles.head}>
            <div>
              <span className={styles.kicker}>Changelog</span>
              <h1 className={styles.h1}>{monthLabel}</h1>
              <p className={styles.lead}>{metadata.blogDescription}</p>
            </div>
            <div className={styles.actions}>
              <CopyPage
                selector="#changelog-entries"
                title={`Neo changelog: ${monthLabel}`}
              />
              <a
                href={`${metadata.permalink}/rss.xml`}
                className={styles.rss}
                aria-label="Subscribe via RSS"
                title="Subscribe via RSS">
                <Icon size={18}>{RSS}</Icon>
              </a>
            </div>
          </header>

          <div className={styles.toolbar}>
            <div className={styles.toolbarRow}>
              <div className={styles.menus}>
                <FilterMenu
                  label="Product"
                  options={PRODUCTS}
                  value={state.product}
                  onChange={(product) => setState({product})}
                />
                <FilterMenu
                  label="Type"
                  options={TYPES}
                  value={state.type}
                  onChange={(type) => setState({type})}
                />
              </div>
              <label className={styles.search}>
                <Icon>{SEARCH}</Icon>
                <span className={styles.srOnly}>Search the changelog</span>
                <input
                  ref={searchRef}
                  type="search"
                  value={state.q}
                  placeholder="Search…"
                  onChange={(e) => setState({q: e.target.value})}
                />
                {!state.q && <kbd className={styles.kbd}>/</kbd>}
              </label>
            </div>
          </div>

          {visible.length > 0 ? (
            <div
              id="changelog-entries"
              className={styles.entries}
              aria-live="polite">
              {visible.map((p) => (
                <Entry key={p.metadata.permalink} post={p} />
              ))}
            </div>
          ) : (
            <div className={styles.empty} aria-live="polite">
              <p className={styles.emptyTitle}>
                {filtered
                  ? `No updates in ${monthLabel} match these filters`
                  : `No updates in ${monthLabel}`}
              </p>
              {filtered ? (
                <button
                  type="button"
                  className={styles.clear}
                  onClick={() => setState({q: '', product: '', type: ''})}>
                  Clear filters
                </button>
              ) : (
                <p>Pick another month to see what shipped then.</p>
              )}
            </div>
          )}
        </main>
      </div>
    </Layout>
  );
}

export default function BlogListPage(props) {
  const {metadata} = props;
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <PageMetadata
        title={metadata.blogTitle}
        description={metadata.blogDescription}
      />
      <SearchMetadata tag="blog_posts_list" />
      <BlogListPageStructuredData {...props} />
      <Changelog {...props} />
    </HtmlClassNameProvider>
  );
}
