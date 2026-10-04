// @ts-check

// Docs sidebar, organised by job first, then by Diátaxis type: the overview,
// a tutorial for first-time users, task areas named for what the reader is
// trying to do, then shared sections for concepts, reference and
// troubleshooting. New features slot into a task area by goal, not name.

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {type: 'doc', id: 'tasket/index', label: 'Tasket overview'},
    {
      type: 'category',
      label: 'Get started',
      collapsible: true,
      collapsed: false,
      className: 'sb-section sb-section--start',
      items: ['tasket/tracks/get-started'],
    },
    {
      type: 'category',
      label: 'Run work across teams',
      collapsible: true,
      collapsed: false,
      className: 'sb-section sb-section--lanes',
      items: [
        'tasket/tracks/manage-tasks-on-tracks',
      ],
    },
    {
      type: 'category',
      label: 'Concepts',
      collapsible: true,
      collapsed: false,
      className: 'sb-section sb-section--book',
      items: ['tasket/tracks/what-are-tracks'],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsible: true,
      collapsed: false,
      className: 'sb-section sb-section--list',
      items: ['tasket/tracks/reference'],
    },
    {
      type: 'category',
      label: 'Help',
      collapsible: true,
      collapsed: false,
      className: 'sb-section sb-section--wrench',
      items: ['tasket/tracks/faq', 'tasket/tracks/troubleshooting'],
    },
  ],
};

export default sidebars;
