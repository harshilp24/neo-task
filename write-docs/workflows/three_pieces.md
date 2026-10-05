# Workflow: three pieces

The default for a new PRD. Use it when the request is "draft the docs for this PRD", "write the three documents", or anything with a time limit. It produces the three article types from the brief, plus the clarifying questions, and nothing else.

For the full doc set (reference, FAQ, troubleshooting, overview), use [new_feature_docs.md](new_feature_docs.md) instead.

## Output

| Piece | Reader | Contract | File |
|---|---|---|---|
| Feature document | Someone using the feature for the first time | [feature_document.md](../modules/doc_contracts/feature_document.md) | `docs/<product>/<feature>/get-started.mdx` |
| How-to guide | Someone with a specific task in hand | [how_to_guide.md](../modules/doc_contracts/how_to_guide.md) | `docs/<product>/<feature>/<job>.mdx` |
| Release note | An existing user scanning what changed | [release_note.md](../modules/doc_contracts/release_note.md) | `blog/<YYYY-MM-DD>-<slug>.mdx` |
| Clarifying questions | The PM or engineering team | [../modules/prd_analysis.md](../modules/prd_analysis.md) | `write-docs/examples/<feature>/clarifying_questions.md` |

## Steps

1. **Analyse the PRD** with [../modules/prd_analysis.md](../modules/prd_analysis.md). Write the clarifying questions first, each with its assumption.
2. **Pick the one job** the how-to guide covers: the everyday task most readers come back for. List the other jobs as sections only if they're short.
3. **Draft in this order:** feature document, how-to guide, release note. Use [../modules/content_generation.md](../modules/content_generation.md).
4. **Keep the three self-contained.** With no reference page to link to, the feature document carries the key rules: who can do what, what works offline, and what can't be undone, in one short section.
5. **Place them** with [../framework/linking_and_navigation.md](../framework/linking_and_navigation.md):
   - the feature document under **Get started** in `sidebars.js`, next to the other tutorials
   - the how-to guide under the job area that matches its goal, such as **Run work across teams**; add a new job area only if none fits
   - a card for each page on the product overview (`docs/<product>/index.mdx`)
   - the release note in `blog/`, with its product and `new-feature` tags
   - any new tags in `docs/tags.yml`
   Then run `npm run build`; it fails on a broken link or anchor.
6. **Check** each piece against [../quality/checklist.md](../quality/checklist.md): accuracy, style and its contract.
7. **Report** the three files, the questions, and any check that failed.
