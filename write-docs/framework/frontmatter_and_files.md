# Front matter and files

Where pages go and what each file starts with.

## Folders

```
docs/<product>/index.mdx                      product overview
docs/<product>/<feature>/get-started.mdx      tutorial
docs/<product>/<feature>/what-are-<feature>.mdx  explanation (slug: /<product>/<feature>)
docs/<product>/<feature>/<guide-name>.mdx     how-to guides
docs/<product>/<feature>/reference.mdx        reference
docs/<product>/<feature>/faq.mdx              FAQ
docs/<product>/<feature>/troubleshooting.mdx  troubleshooting
docs/tags.yml                                 every tag used in docs front matter
blog/<YYYY-MM-DD>-<feature>.mdx               release note
write-docs/examples/<feature>/                PRD, clarifying questions, page plan
```

- File names are lower case, words separated by hyphens, and match the page's goal: `manage-tasks-on-tracks.mdx`.
- The product folder is one of `tasket`, `friday`, `studio`, `drive`.
- After adding pages, add them to `sidebars.js` (see [linking_and_navigation.md](linking_and_navigation.md)).

## Docs front matter

```yaml
---
title: Manage tasks on tracks
description: "Manage tasks on Tracks in Tasket: start several tasks on a track from its column header, send a Done task back with Mark Pending, …"
tags: [tasket, tracks, how-to]
keywords: [Tasket, Tracks, start several tasks, Mark Pending, …]
toc_max_heading_level: 2
---
```

- **title** is the page title. Don't repeat it as a `#` heading in the body; the page header renders it.
- **description** is written **answer first**, for search engines and AI assistants: it answers the question the page exists for, names the product, and makes sense with no other context. One or two sentences. It isn't shown on the page, so don't repeat it as a visible line. Quote it if it contains a colon.
- **tags**: the product, the feature, and the page type (`tutorial`, `how-to`, `concept`, `reference`, `faq`, `troubleshooting`). Every tag must be defined in `docs/tags.yml`, or the build warns.
- **keywords**: the words people search with, including the product name and UI labels.
- **toc_max_heading_level: 2** on every page, so "On this page" lists only h2 sections.
- **Last updated** shows on every page automatically, from Git (`showLastUpdateTime` in `docusaurus.config.js`). Don't write a date into the page.
- **unlisted: true** only on a page that's been hidden. It keeps the URL working but takes the page out of search and the sitemap. Set it with [../workflows/hide_or_delete_pages.md](../workflows/hide_or_delete_pages.md), never on its own.
- **slug** only on the explanation page, so the feature's root URL opens it: `slug: /tasket/tracks`.

## Release note front matter

```yaml
---
slug: tracks
title: Tracks
description: One sentence saying what changed.
authors: [neo]
tags: [tasket, new-feature]
---
```

- **tags** must include one product (`tasket`, `friday`, `studio`, `drive`) and one type (`new-feature`, `improvement`, `fix`). The changelog filters use them.
- **title** is the feature name only.

## Clarifying questions file

`write-docs/examples/<feature>/clarifying_questions.md` holds the questions and assumptions from [../modules/prd_analysis.md](../modules/prd_analysis.md). It isn't published on the site.
