// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Neo Docs',
  tagline: 'The work platform where AI does the work.',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'harshilp24', // Usually your GitHub org/user name.
  projectName: 'neo-task', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/harshilp24/neo-task/tree/main/',
        },
        // The blog is the product changelog: one post per release note,
        // all on one page so the changelog's search and filters see them.
        blog: {
          routeBasePath: 'changelog',
          blogTitle: 'Changelog',
          blogDescription:
            'New features, improvements and fixes across Tasket, Friday, Studio and Drive.',
          postsPerPage: 'ALL',
          blogSidebarCount: 0,
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          // Notes render in full on the changelog page, so there's no
          // "read more" cut to enforce.
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        indexBlog: true,
        searchBarShortcutHint: true,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        // The logo is the full Neo lockup; the title adds a muted "docs".
        title: 'docs',
        logo: {
          alt: 'Neo',
          src: 'img/logo.svg',
        },
        // Items with the navbar-tab class are drawn in the second row by
        // src/theme/Navbar/Content, and in the sidebar menu on mobile.
        items: [
          {type: 'search', position: 'left', className: 'navbar-search'},
          {
            href: 'https://neo.work',
            label: 'Open Neo',
            position: 'right',
            className: 'navbar-cta',
          },
          {to: '/', label: 'Home', className: 'navbar-tab'},
          {
            to: '/docs/tasket',
            label: 'Tasket',
            activeBasePath: '/docs/tasket',
            className: 'navbar-tab',
          },
          {to: '/changelog', label: 'Changelog', className: 'navbar-tab navbar-tab--aside'},
          {
            href: 'https://github.com/harshilp24/neo-task',
            label: 'GitHub',
            className: 'navbar-tab navbar-tab--aside',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
