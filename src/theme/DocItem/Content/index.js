import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useDoc,
  useSidebarBreadcrumbs,
} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import CopyPage from '@site/src/components/CopyPage';
import styles from './styles.module.css';

// Doc page header: the sidebar section(s) the page sits in, the
// title, and the Copy page actions. Titles come from front matter, so doc
// files don't repeat them as a "# heading".
export default function DocItemContent({children}) {
  const {metadata, frontMatter} = useDoc();
  const crumbs = useSidebarBreadcrumbs();
  // Home › product › every sidebar level above this page. The page itself
  // is the title, so it isn't repeated in the trail.
  const sections = (crumbs ?? []).slice(0, -1);
  const product = metadata.permalink === '/docs/tasket' ? [] : [{label: 'Tasket', href: '/docs/tasket'}];
  const trail = [{label: 'Home', href: '/'}, ...product, ...sections];

  return (
    <>
      {!frontMatter.hide_title && (
        <header className={styles.header}>
          <div>
            {trail.length > 0 && (
              <nav className={styles.trail} aria-label="Breadcrumb">
                <ol>
                  {trail.map((item, i) => (
                    <li key={item.label} className={i === trail.length - 1 ? styles.here : undefined}>
                      {item.href && item.href !== metadata.permalink ? (
                        <Link to={item.href}>{item.label}</Link>
                      ) : (
                        <span>{item.label}</span>
                      )}
                    </li>
                  ))}
                </ol>
              </nav>
            )}
            <Heading as="h1" className={styles.title}>
              {metadata.title}
            </Heading>
          </div>
          <CopyPage
            selector=".theme-doc-markdown"
            title={metadata.title}
            className={styles.copy}
          />
        </header>
      )}
      <div className={clsx(ThemeClassNames.docs.docMarkdown, 'markdown')}>
        <MDXContent>{children}</MDXContent>
      </div>
    </>
  );
}
