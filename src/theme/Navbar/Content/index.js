import React from 'react';
import clsx from 'clsx';
import Content from '@theme-original/Navbar/Content';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {useThemeConfig} from '@docusaurus/theme-common';
import styles from './styles.module.css';

// Second navbar row. The tabs come from the navbar items in
// docusaurus.config.js marked with the navbar-tab class, so the mobile
// sidebar menu and this row never drift apart.

function GitHubIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      />
    </svg>
  );
}

function isActive(item, pathname) {
  if (item.to === '/') {
    return pathname === '/';
  }
  const base = item.activeBasePath ?? item.to;
  return pathname === base || pathname.startsWith(`${base}/`);
}

function Tab({item, pathname}) {
  if (item.href) {
    const isGitHub = item.label === 'GitHub';
    return (
      <a
        href={item.href}
        className={clsx(styles.aside, isGitHub && styles.icon)}
        aria-label={isGitHub ? 'Neo Docs on GitHub' : undefined}>
        {isGitHub ? <GitHubIcon /> : item.label}
      </a>
    );
  }
  const active = isActive(item, pathname);
  return (
    <Link
      to={item.to}
      className={clsx(
        item.className.includes('navbar-tab--aside') ? styles.aside : styles.tab,
        active && styles.active,
      )}
      aria-current={active ? 'page' : undefined}>
      {item.label}
    </Link>
  );
}

export default function ContentWrapper(props) {
  const {pathname} = useLocation();
  const items = useThemeConfig().navbar.items.filter((item) =>
    item.className?.includes('navbar-tab'),
  );
  const tabs = items.filter((i) => !i.className.includes('navbar-tab--aside'));
  const aside = items.filter((i) => i.className.includes('navbar-tab--aside'));
  return (
    <>
      <Content {...props} />
      <div className={styles.row}>
        <div className={styles.tabs}>
          {tabs.map((item) => (
            <Tab key={item.label} item={item} pathname={pathname} />
          ))}
        </div>
        <div className={styles.asideGroup}>
          {aside.map((item) => (
            <Tab key={item.label} item={item} pathname={pathname} />
          ))}
        </div>
      </div>
    </>
  );
}
