# Quality checklist

Every run passes these before it's reported as done. A review lists each failure with the page and section.

## Accuracy

- [ ] Every statement traces to the PRD, a supporting artefact, or a row in `clarifying_questions.md`.
- [ ] UI labels and status names match the screens, not the PRD where they differ.
- [ ] No features, limits, numbers or future plans that aren't in the sources.
- [ ] Every assumption used in a page is listed in `clarifying_questions.md`.

## Structure

- [ ] Each page is one Diátaxis type and follows its contract in [../modules/doc_contracts/](../modules/doc_contracts/).
- [ ] Each user goal is covered on exactly one page. No steps appear on two pages.
- [ ] The tutorial covers first setup only, with examples inside the steps.
- [ ] FAQ answers start with one sentence that names the product, the control and where it is.
- [ ] Each troubleshooting issue is: h2, one labelled callout, Cause, Solution.
- [ ] Every destructive action has one warning, placed before its steps.
- [ ] Admin-only actions say so before their steps.
- [ ] The reference covers every status, action, permission, offline rule and lifecycle effect in the PRD.

## Style

Search each page for these. Each search should find nothing.

- [ ] `—` (em dash) and ` – ` (en dash used as a dash)
- [ ] `will ` in step results
- [ ] the banned words in [../framework/style_and_tone.md](../framework/style_and_tone.md)
- [ ] `click here`, `this page` as link text
- [ ] untitled callouts: a line that is exactly `:::note`, `:::info`, `:::warning`, `:::tip`, `:::caution` or `:::danger`

And check by reading:

- [ ] Sentence case headings, British spelling, second person, present tense.
- [ ] UI labels in bold, statuses in italics (or chips in tables).

## Links and build

- [ ] Every page has the links its type requires ([../framework/linking_and_navigation.md](../framework/linking_and_navigation.md)).
- [ ] New pages are in `sidebars.js` and have a card on the product overview.
- [ ] Every page has an answer-first `description`, `tags`, `keywords` and `toc_max_heading_level: 2`.
- [ ] Every tag is defined in `docs/tags.yml`.
- [ ] `npm run build` passes. Broken links and anchors fail it.

## Release note

- [ ] Title is the feature name only.
- [ ] One sentence, at most three bullets, one "Learn about … →" link.
- [ ] Product and type tags set.
- [ ] About 50 to 80 words.

## Example commands

```bash
grep -rn "—" docs/<product>/<feature> blog/*-<slug>.mdx
grep -rnE "^:::(note|info|warning|tip)$" docs blog
grep -rniE "seamless|leverage|robust|empower|unlock|delve|effortless|streamline" docs blog
npm run build
```
