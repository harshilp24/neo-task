import React from 'react';

// Small line icons for overview pages. 24px grid, stroke follows text colour.
const PATHS = {
  team: <><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0 1 11 0"/><circle cx="17" cy="9" r="2.5"/><path d="M16 14.2a4.5 4.5 0 0 1 5 4.8"/></>,
  task: <><rect x="4" y="4" width="16" height="16" rx="3"/><path d="m8.5 12 2.4 2.4 4.6-4.8"/></>,
  views: <><path d="M4 6h16M4 12h10M4 18h7"/><circle cx="18" cy="16.5" r="2.5"/></>,
  start: <><circle cx="12" cy="12" r="8.5"/><path d="m10.2 8.8 5 3.2-5 3.2Z"/></>,
  lanes: <><rect x="3.5" y="4" width="5" height="16" rx="1.5"/><rect x="9.5" y="4" width="5" height="11" rx="1.5"/><rect x="15.5" y="4" width="5" height="7" rx="1.5"/></>,
  book: <><path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5Z"/><path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5Z"/></>,
  list: <><path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/></>,
  question: <><circle cx="12" cy="12" r="8.5"/><path d="M9.6 9.4a2.5 2.5 0 0 1 4.8.9c0 1.7-2.4 2.2-2.4 3.7"/><circle cx="12" cy="17" r=".6" fill="currentColor"/></>,
  wrench: <><path d="M14.5 5.5a4 4 0 0 0 4.9 4.9L12 17.8a2.3 2.3 0 0 1-3.3-3.3l7.4-7.4"/><path d="M14.5 5.5 17 3l4 4-2.5 2.5"/></>,
  clock: <><circle cx="12" cy="12" r="8.5"/><path d="M12 7.5V12l3 2"/></>,
  plus: <path d="M12 5v14M5 12h14"/>,
};

export default function Icon({name, className}) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name]}
    </svg>
  );
}
