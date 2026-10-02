// @ts-check

// Docs sidebar: one entry per page, grouped by the kind of article. The
// className on each entry picks its icon (see "Sidebar icons" in
// src/css/custom.css).

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Get started',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'tasket/index',
          label: 'Overview',
          className: 'sb-icon sb-icon--home',
        },
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'tasket/tracks/run-a-task-across-workstreams',
          label: 'Run a task across workstreams',
          className: 'sb-icon sb-icon--lanes',
        },
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'tasket/tracks/what-are-tracks',
          className: 'sb-icon sb-icon--book',
        },
      ],
    },
  ],
};

export default sidebars;
