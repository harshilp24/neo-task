# Workflow: release note only

Use when the only output needed is a changelog entry, for a new feature, an improvement or a fix.

## Steps

1. Read the PRD or change description. Find the one thing an existing user will notice.
2. Pick the type tag: `new-feature`, `improvement` or `fix`. Pick the product tag.
3. Write the note with [../modules/doc_contracts/release_note.md](../modules/doc_contracts/release_note.md).
4. Save it as `blog/<YYYY-MM-DD>-<slug>.mdx`, dated the release day.
5. If the feature has docs, link to its explanation page. If it doesn't, don't link to a page that doesn't exist; flag that docs are missing.
6. Check it against [../quality/checklist.md](../quality/checklist.md), sections *Style* and *Release note*.
