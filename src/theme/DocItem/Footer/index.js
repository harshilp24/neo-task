import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import PageFeedback from '@site/src/components/PageFeedback';

// Every docs page ends with "Was this page helpful?".
export default function FooterWrapper(props) {
  return (
    <>
      <PageFeedback />
      <Footer {...props} />
    </>
  );
}
