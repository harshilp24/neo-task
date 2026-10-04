# Write-docs skill

An agent skill for drafting Neo product documentation from a PRD. Give it a PRD and any screens or tickets, and it produces first drafts of every page a feature needs, plus a list of questions the PRD leaves open.

It's plain Markdown, so any AI assistant or a human writer can follow it. Point the assistant at [SKILL.md](SKILL.md) and the PRD.

## Architecture overview

The skill handles task-specific jobs through workflows, and reuses shared modules and framework rules for everything else. The root file routes each request to a **workflow**. A workflow is the recipe for one kind of job, and it calls shared **modules** for the steps every job needs. Every step follows the **framework**, the site-wide standards, and every run ends with the same **quality checks**.

## Execution flow

```
SKILL.md (routing)
 └─> workflows/  (one per kind of job)
      ├─> modules/  (PRD analysis, page planning, doc contracts, content generation)
      │    └─> framework/  (Diátaxis, style and tone, linking, callouts, files, personas)
      └─> quality/checklist.md  (shared checks)
```

For a new feature, that's:

```
PRD + screens
 → prd_analysis      facts, rules, edge cases, gaps → clarifying questions
 → page_planning     user goals → Diátaxis pages → sidebar placement
 → doc_contracts     the template for each page type
 → content_generation  drafts, one running example from the PRD
 → quality/checklist   style, accuracy, duplication, links
 → output: pages + release note + clarifying questions + report
```

## Structure

```
write-docs/
├── SKILL.md                         # Root routing
├── README.md                        # This file
│
├── framework/                       # Site-wide standards for all Neo docs
│   ├── framework_base.md            # Principles, sources of truth, what not to do
│   ├── diataxis.md                  # The four page types and how to choose
│   ├── style_and_tone.md            # Voice, banned patterns, names, labels
│   ├── linking_and_navigation.md    # Links, sidebar, breadcrumbs
│   ├── callouts_and_formatting.md   # Callouts, tables, chips, steps
│   ├── frontmatter_and_files.md     # Front matter, file names, folders
│   └── persona_specific/
│       ├── member.md
│       ├── admin.md
│       └── guest.md
│
├── workflows/                       # Task-based entry points
│   ├── three_pieces.md              # PRD → feature doc, how-to, release note (default)
│   ├── new_feature_docs.md          # PRD → full doc set
│   ├── update_feature_docs.md       # Feature changed → update pages
│   ├── release_note_only.md         # Changelog entry only
│   └── review_only.md               # Review drafts, change nothing
│
├── modules/                         # Reusable internal steps
│   ├── prd_analysis.md              # Extract facts, find gaps and conflicts
│   ├── page_planning.md             # Goals → pages → sidebar
│   ├── content_generation.md        # How to draft
│   └── doc_contracts/               # One contract per page type, by sidebar section
│       ├── feature_document.md      # Feature document (three-piece mode)
│       ├── product_overview.md      # <Product> overview
│       ├── tutorial.md              # Get started
│       ├── how_to_guide.md          # Job area, e.g. Run work across teams
│       ├── explanation.md           # Concepts
│       ├── reference.md             # Reference
│       ├── faq.md                   # Help
│       ├── troubleshooting.md       # Help
│       └── release_note.md          # Changelog
│
├── quality/
│   └── checklist.md                 # Checks every run must pass
│
└── examples/
    └── tracks/                      # Worked example from the case study
        ├── prd.md                   # The Tracks PRD, as received
        ├── clarifying_questions.md  # Gaps and conflicts, with assumptions
        └── page_plan.md             # The page plan and where each page lives
```

## How to use it

With an AI assistant that can read files (Claude Code, Cursor, Codex and similar):

```
Read write-docs/SKILL.md and follow it.
The PRD is prds/<feature>.md. Screens are in prds/<feature>/.
```

The assistant routes the request, writes pages into `docs/` and `blog/`, and reports the clarifying questions.

## How to change it

| To change… | Edit |
|---|---|
| Voice, banned words, spelling, naming | [framework/style_and_tone.md](framework/style_and_tone.md) |
| What goes on a page type, its sections and order | the matching file in [modules/doc_contracts/](modules/doc_contracts/) |
| How the release note looks | [modules/doc_contracts/release_note.md](modules/doc_contracts/release_note.md) |
| How pages are grouped in the sidebar | [framework/linking_and_navigation.md](framework/linking_and_navigation.md) |
| How a role is addressed | [framework/persona_specific/](framework/persona_specific/) |
| What counts as "done" | [quality/checklist.md](quality/checklist.md) |
| A new kind of job | add a file in [workflows/](workflows/) and a row in [SKILL.md](SKILL.md) |

Each rule lives in one file, so a change in one place applies to every page the skill writes.
