import React from 'react';
import DirectionSwitcher from '@site/src/components/DirectionSwitcher';

// Temporary: mounts the design-direction switcher on every page while the
// team compares the three directions in src/css/directions.css.
export default function Root({children}) {
  return (
    <>
      {children}
      <DirectionSwitcher />
    </>
  );
}
