import React from 'react';
import Link from '@docusaurus/Link';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import BlogPostItemHeaderTitle from '@theme/BlogPostItem/Header/Title';
import CopyPage from '@site/src/components/CopyPage';
import {Badges, formatFull} from '@site/src/components/Changelog';
import styles from './styles.module.css';

// Release-note header: back to the changelog, date and badges, then the
// title with the Copy page actions. Authors are left out: every note comes
// from the product team.
export default function BlogPostItemHeader() {
  const {metadata, isBlogPostPage} = useBlogPost();
  return (
    <header className={styles.header}>
      {isBlogPostPage && (
        <Link to="/changelog" className={styles.back}>
          <span aria-hidden="true">← </span>
          All updates
        </Link>
      )}
      <div className={styles.meta}>
        <time dateTime={metadata.date}>{formatFull(metadata.date)}</time>
        <Badges tags={metadata.tags} />
      </div>
      <div className={styles.titleRow}>
        <BlogPostItemHeaderTitle />
        {isBlogPostPage && (
          <CopyPage selector='[itemprop="articleBody"]' title={metadata.title} />
        )}
      </div>
    </header>
  );
}
