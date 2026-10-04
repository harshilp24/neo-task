---
name: write-docs
description: Turn a PRD and its supporting artefacts (screens, tickets, designs) into first drafts of Neo product docs: a product overview, a tutorial, a how-to guide, a concept page, a reference page, an FAQ, troubleshooting, and a release note. Also updates existing docs when a feature changes, and reviews drafts against Neo's standards.
---

# Write docs

This is the root of the `write-docs` skill. It decides which workflow to run, then the workflow loads only the modules and standards it needs.

Read [README.md](README.md) once for how the skill is built. Then follow the routing below.

## 1. Always load

These apply to every request:

- [framework/framework_base.md](framework/framework_base.md): principles and sources of truth
- [framework/style_and_tone.md](framework/style_and_tone.md): voice, banned patterns, names and labels

## 2. Route the request

| If the request is… | Run |
|---|---|
| A new feature: "write docs for this PRD", "draft the three documents" (default) | [workflows/three_pieces.md](workflows/three_pieces.md) |
| A new feature, full doc set: "write the full docs", "add a reference and FAQ" | [workflows/new_feature_docs.md](workflows/new_feature_docs.md) |
| A change to a documented feature: "the PRD changed", "the UI now…", "update the Tracks docs" | [workflows/update_feature_docs.md](workflows/update_feature_docs.md) |
| Only a release note or changelog entry | [workflows/release_note_only.md](workflows/release_note_only.md) |
| A review of existing pages or a draft | [workflows/review_only.md](workflows/review_only.md) |

If a request fits two rows, ask which one the user means. If it fits none, say so and suggest the closest workflow.

## 3. Inputs to ask for

Before drafting, make sure you have:

1. **The PRD.** Required. Read it in full before anything else.
2. **Supporting artefacts.** Screenshots, designs, prototypes or tickets. Optional, but UI evidence beats PRD wording for labels and status names.
3. **The product** the feature belongs to (Tasket, Friday, Studio or Drive), so pages go in the right folder.

If the PRD is missing, stop and ask for it. Never draft from a feature name alone.

## 4. Outputs

Every run ends with:

- the drafted or changed files, in the paths set by [framework/frontmatter_and_files.md](framework/frontmatter_and_files.md)
- a **clarifying questions** list: every gap or conflict in the PRD, with the assumption taken (see [modules/prd_analysis.md](modules/prd_analysis.md))
- a short report: the pages written, where each goal and rule lives, and the checks from [quality/checklist.md](quality/checklist.md) that passed or failed

## 5. Rules that override everything else

- **Don't invent.** Every statement must trace to the PRD, a supporting artefact, or a logged assumption.
- **Write each fact once.** A step, rule or warning lives on one page. Other pages link to it.
- **No em dashes, no filler, no AI tone.** See [framework/style_and_tone.md](framework/style_and_tone.md).
