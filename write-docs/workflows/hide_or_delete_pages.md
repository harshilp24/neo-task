# Workflow: hide or delete pages

Use when asked to hide, remove, unpublish, retire or delete one or more published pages, whatever the reason: a bug in the page, a feature pulled or delayed, a PRD change, a duplicate, or a plain "take this down".

It needs no PRD. It writes no new content. It takes pages out of the site, cleans up every link to them, and proves the build still passes.

## The two modes

| | Hide | Delete |
|---|---|---|
| The file | Stays in the repo | Removed from the repo |
| The URL | Still opens for anyone who has it | Returns the 404 page |
| Sidebar, overview cards, home page | Removed | Removed |
| Search engines, AI assistants, Algolia | Told not to index it | Nothing left to index |
| Links from other pages | Removed or repointed | Removed or repointed |
| To undo | Reverse the edits (see [Unhide a page](#unhide-a-page)) | Restore the file from Git and wire it up again |

## Steps

### 1. Pick the mode

| The request says… | Mode |
|---|---|
| "hide", "remove", "unpublish", "take down", "pull for now", "not ready yet" | **Hide** |
| "delete", "dlt", "get rid of the file", "remove permanently", "we're never shipping this" | **Delete** |

"Remove" on its own means hide, because hiding can be undone in one edit. Say which mode you took in the report.

If one request mixes both ("hide the FAQ and delete the old guide"), run each page in its own mode, then do steps 3 to 7 once for the whole set.

### 2. List the pages

Resolve the request to exact files, and write down three things for each:

| File | Sidebar id | URL |
|---|---|---|
| `docs/tasket/tracks/faq.mdx` | `tasket/tracks/faq` | `/docs/tasket/tracks/faq` |
| `docs/tasket/tracks/what-are-tracks.mdx` | `tasket/tracks/what-are-tracks` | `/docs/tasket/tracks` (from `slug`) |
| `blog/2026-10-02-tracks.mdx` | none | `/changelog/tracks` (from `slug`) |

Read each file's front matter: a `slug` changes the URL, so the URL can't be guessed from the file name.

**Stop and ask** before going further if:

- the request names pages by topic ("everything about offline") and not by file. Show the list you resolved and wait for a yes.
- the mode is delete and a page has uncommitted changes. Deleting it loses work Git can't restore.
- the set includes a product overview (`docs/<product>/index.mdx`). The navbar and the home page point at it, so the product's whole section goes with it.

### 3. Take the pages out

**Hide.** Edit the page's front matter, and nothing else in the file:

```yaml
---
title: Tracks FAQ
unlisted: true
description: "…"
keywords: […]
toc_max_heading_level: 2
---
```

- Add `unlisted: true`. In the production build the page gets `<meta name="robots" content="noindex, nofollow">` and leaves `sitemap.xml`. Search engines, AI crawlers and the Algolia crawler all read that tag and skip the page.
- Delete the `tags` line. A tagged page is still listed on its tag pages (`/docs/tags/<tag>`) even when it's unlisted, and those pages are indexed.
- Release notes take the same two edits. An unlisted note leaves the changelog list and its feeds.

**Delete.** Remove the file with `git rm`, so the change is staged and the file can be restored from history. Remove images or other assets only that page used.

### 4. Take them out of the navigation

Do this in both modes.

| Where | What to do |
|---|---|
| `sidebars.js` | Remove the page's id from its category. If the category is now empty, remove the category |
| Product overview, `docs/<product>/index.mdx` | Remove the page's card from `JobCards` |
| Home page, `src/pages/index.js` | Remove the page's group, task links and footer links, and its path constant if nothing else uses it |
| Components, `src/components/` | Remove or repoint any hard-coded link, such as the link under the board preview |
| Navbar, `docusaurus.config.js` | Remove the item if it points at the page |
| `static/llms.txt`, `static/robots.txt` | If the site has them and they list the page, remove its line |
| `docs/tags.yml` | Delete mode only: remove a tag no remaining page uses |

### 5. Fix the backlinks

A backlink is any link to the page from somewhere else. Both modes remove them all: a link to a hidden page shows readers and crawlers the way in, and a link to a deleted page fails the build.

Search for three forms of each page: its file name, its URL and its sidebar id.

```bash
grep -rnE "faq\.mdx|/docs/tasket/tracks/faq|tasket/tracks/faq" \
  docs blog src static sidebars.js docusaurus.config.js write-docs/examples
```

- Anchor links count: `faq.mdx#how-do-i-turn-off-tracks` is a backlink to the FAQ.
- A URL that's a prefix of others needs an exact match. `/docs/tasket/tracks` also matches every page under it, so search for it followed by a quote, bracket, `#` or the end of the line: `/docs/tasket/tracks(["')#]|$)`.
- Ignore links between pages that are both in the set. Two hidden pages can keep linking to each other.

Then decide each backlink by what the reader loses without it:

| The link is… | Do |
|---|---|
| An entry in a list of links: *Next steps*, *See also*, a card | Remove the whole entry |
| A sentence that exists only to send the reader there: "If something isn't working, see …" | Remove the sentence |
| Inside a sentence that still reads correctly without it | Keep the words, drop the link |
| **Needed**: without somewhere to go, the reader can't finish the step or follow the page | Repoint it to the feature's main page |

**The feature's main page** is its explanation page, the one at the feature's root URL: `docs/<product>/<feature>/what-are-<feature>.mdx`, at `/docs/<product>/<feature>`. Three exceptions:

- If the main page is itself being hidden or deleted, repoint to the product overview, `docs/<product>/index.mdx`.
- If the backlink is on the main page, there's nowhere to repoint it. Treat it by the first three rows.
- If the page already links to the main page nearby, don't add a second link. Remove this one.

When you repoint a link:

- Change the link text to the main page's title. Never leave "Tracks FAQ" pointing at "What are Tracks?".
- Drop the anchor, unless the main page has a heading with that exact anchor.
- Reread the sentence. If it promised steps or a fix and the main page has neither, reword it to what the reader gets there, or remove it.

Don't copy the hidden or deleted page's content into another page to make up for the lost link. If readers still need that content, that's a new page or section, and a job for [update_feature_docs.md](update_feature_docs.md).

The table in [../framework/linking_and_navigation.md](../framework/linking_and_navigation.md), *Required links per page type*, applies only to pages that are published. A page isn't required to link to one that's hidden or gone.

### 6. Update the records

- `write-docs/examples/<feature>/page_plan.md`: remove a deleted page's row and its line in the sidebar sketch. Mark a hidden page's row "hidden", so the plan still shows it exists.
- `clarifying_questions.md`: leave it. Questions about the PRD stay open whether or not a page is published.

### 7. Build and verify

Run the build. It must pass with no broken links, anchors or sidebar ids.

```bash
npm run build
```

The build catches a link to a deleted doc, a broken anchor, and a sidebar id with no file. It doesn't catch a link to a hidden page, a link in `static/`, or a URL written as a string in `src/`. So also check by hand:

```bash
# No backlinks left. Finds only links between pages in the set.
grep -rnE "faq\.mdx|/docs/tasket/tracks/faq|tasket/tracks/faq" \
  docs blog src static sidebars.js docusaurus.config.js

# Hide: the built page carries noindex and is out of the sitemap and tag pages.
grep -o '<meta[^>]*robots[^>]*>' build/docs/tasket/tracks/faq/index.html
grep -c "tasket/tracks/faq" build/sitemap.xml          # 0
grep -rl "tasket/tracks/faq" build/docs/tags           # nothing

# Delete: the page is gone from the build.
ls build/docs/tasket/tracks/faq                        # No such file or directory
```

Then run [../quality/checklist.md](../quality/checklist.md), sections *Links and build* and *Hide or delete*. If the build fails, fix the cause. Never switch `onBrokenLinks` or `onBrokenAnchors` away from `throw` to get a pass.

### 8. Report

Tell the user:

- each page, its mode and its old URL
- every backlink, with what happened to it:

  | Page and section | Link | Action |
  |---|---|---|
  | troubleshooting.mdx › intro | Tracks FAQ | Sentence removed |
  | troubleshooting.mdx › Turn off Tracks | `faq.mdx#how-do-i-turn-off-tracks` | Repointed to What are Tracks? |
  | index.mdx › Tracks | Tracks FAQ card | Card removed |

- the build result and the checks from step 7
- what the change leaves open:
  - **Hide:** the page still opens at its URL. The Algolia index and search engines keep their copy until their next crawl, so ask for a recrawl if it has to go today.
  - **Delete:** the old URL now returns the 404 page, and the site has no redirects. Bookmarks and links from outside the site break.
  - Any fact that lived only on that page and that other pages relied on. Name it; don't move it.

## Unhide a page

Reverse steps 3 to 6: remove `unlisted: true`, put the `tags` line back, add the id to `sidebars.js` and the card to the product overview, restore the links its neighbours are required to have ([../framework/linking_and_navigation.md](../framework/linking_and_navigation.md)), and build.

## What not to do

- Don't use `draft: true` to hide a page. A draft isn't built at all, so every link to it breaks the build and its URL stops working. That's a delete that leaves the file behind.
- Don't hide a page by only removing it from `sidebars.js`. It stays indexed and searchable.
- Don't block a hidden page in `robots.txt` as well. A crawler that can't fetch the page never sees its `noindex` tag.
- Don't write a release note for a hidden or deleted page unless the user asks for one.
