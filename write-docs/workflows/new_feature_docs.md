# Workflow: new feature docs

Use when a feature has no docs yet. Input: a PRD and any screens or tickets. Output: a full doc set, a release note, the clarifying questions and a report.

## Steps

### 1. Analyse the PRD

Follow [../modules/prd_analysis.md](../modules/prd_analysis.md). It produces:

- the fact sheet: actors, objects, actions, statuses, rules, edge cases, permissions, offline behaviour, lifecycle effects
- the clarifying questions list, each with the assumption taken

Save the questions to `write-docs/examples/<feature>/clarifying_questions.md`.

**Stop here** if the PRD has a conflict about data loss or permissions that you can't resolve with the safer reading. Ask the user.

### 2. Plan the pages

Follow [../modules/page_planning.md](../modules/page_planning.md). It turns user goals into Diátaxis pages and places them in the sidebar. Show the plan table to the user before drafting if they're reviewing as you go.

Save the plan to `write-docs/examples/<feature>/page_plan.md`.

### 3. Draft in this order

Draft facts first, so later pages can link to them instead of repeating them:

1. **Reference**: [reference.md](../modules/doc_contracts/reference.md). Every status, action, permission and effect.
2. **Explanation**: [explanation.md](../modules/doc_contracts/explanation.md). Why, the model, when to use it.
3. **Tutorial**: [tutorial.md](../modules/doc_contracts/tutorial.md). First setup only, with examples inside the steps.
4. **How-to guide**: [how_to_guide.md](../modules/doc_contracts/how_to_guide.md). Everyday work after setup, grouped by object and frequency.
5. **FAQ**: [faq.md](../modules/doc_contracts/faq.md). Rare changes to the feature (rename, reorder, delete, turn off), each answered in one sentence first.
6. **Troubleshooting**: [troubleshooting.md](../modules/doc_contracts/troubleshooting.md). Title, labelled callout, Cause, Solution.
7. **Product overview**: [product_overview.md](../modules/doc_contracts/product_overview.md). Add a card for each new page; create the overview if the product has none.
8. **Release note**: [release_note.md](../modules/doc_contracts/release_note.md). Last, linking to the explanation.

Use [../modules/content_generation.md](../modules/content_generation.md) for how to write each section.

### 4. Wire it up

- Add the pages to `sidebars.js` in the right sections. See [../framework/linking_and_navigation.md](../framework/linking_and_navigation.md).
- Add a card for each page to the product overview.
- Add any new tags to `docs/tags.yml`, or the build warns.
- Build the site. It must pass with no broken links or anchors.

### 5. Check

Run every check in [../quality/checklist.md](../quality/checklist.md). Fix failures before reporting.

### 6. Report

Tell the user:

- the pages written, with their paths
- for each user goal, the one page that covers it
- the clarifying questions, highest-impact first
- any checks that failed and why
