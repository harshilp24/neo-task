import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
import PageFeedback from '@site/src/components/PageFeedback';

// A release note's own page ends with "Was this page helpful?". Lists of
// notes (tag pages) don't show it.
export default function BlogPostItemWrapper(props) {
  const {isBlogPostPage} = useBlogPost();
  return (
    <>
      <BlogPostItem {...props} />
      {isBlogPostPage && <PageFeedback />}
    </>
  );
}
