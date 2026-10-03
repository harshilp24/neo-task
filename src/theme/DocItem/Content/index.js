import React from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import {
  useDoc,
  useSidebarBreadcrumbs,
} from '@docusaurus/plugin-content-docs/client';
import Heading from '@theme/Heading';
import MDXContent from '@theme/MDXContent';
import CopyPage from '@site/src/components/CopyPage';
import styles from './styles.module.css';

// Doc page header: the section the page sits in, the title, and the Copy
// page actions. Titles come from front matter, so doc files don't repeat
// them as a "# heading".
export default function DocItemContent({children}) {
  const {metadata, frontMatter} = useDoc();
  const crumbs = useSidebarBreadcrumbs();
  const section = crumbs && crumbs.length > 1 ? crumbs[crumbs.length - 2] : null;

  return (
    <>
      {!frontMatter.hide_title && (
        <header className={clsx(styles.header, 'doc-header')}>
          <div>
            {section && (
              <span className={clsx(styles.section, 'doc-section')}>
                {section.label}
              </span>
            )}
            <Heading as="h1" className={clsx(styles.title, 'doc-title')}>
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
