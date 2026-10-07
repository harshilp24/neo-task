# Workflow: update feature docs

Use when a documented feature changes: a new PRD version, a UI change, or an answer to a clarifying question.

## Steps

### 1. Find what changed

Compare the new source with the old one and list each change as one line:

| Change | Type |
|---|---|
| "Stop now works offline" | behaviour |
| "The Pending section is renamed In Progress" | label |
| "Admins only can delete tracks" | permission |

### 2. Find where each fact lives

Each fact lives on one page (see [../framework/framework_base.md](../framework/framework_base.md)). Start from the reference: its tables say which status, action, permission or effect is affected. Then search the feature's folder for the old wording and old anchors.

| Change type | Usually lives in |
|---|---|
| Label or status name | Reference, tutorial, guide, FAQ, troubleshooting, overview preview |
| Behaviour or rule | Reference first, then the guide or FAQ section that uses it |
| Permission | Reference permissions grid, **Before you begin** sections, FAQ answers, persona notes |
| Setup flow | Tutorial |
| A rare change to the feature (rename, delete, turn off) | FAQ |
| A new way it can go wrong | Troubleshooting, as a new issue with the right label |
| A new capability | Not an existing page. Run it through [../modules/page_planning.md](../modules/page_planning.md): it becomes a section in the guide, a question in the FAQ, or, if it's a new job, a new page with its own contract |

### 3. Update the owner, then the links

Change the page that owns the fact. Update other pages only where they link to it or name it. Don't copy the new detail into them.

If a heading changes, search for its old anchor and fix every link.

Keep each changed page in its contract's format ([../modules/doc_contracts/](../modules/doc_contracts/)): the answer-first `description`, tags and keywords must still match the page, an FAQ answer stays one sentence, a troubleshooting issue keeps its callout, Cause and Solution. If a page is added, update `sidebars.js`, the product overview cards and `docs/tags.yml`. If a page has to be hidden or deleted, run [hide_or_delete_pages.md](hide_or_delete_pages.md) for it.

### 4. Close the question

If the change answers a clarifying question, mark it answered in `clarifying_questions.md` and remove any wording that was only there because of the assumption.

### 5. Release note

If users will notice the change, write a release note with [../workflows/release_note_only.md](release_note_only.md), typed `improvement` or `fix`.

### 6. Check

Run [../quality/checklist.md](../quality/checklist.md) and build the site.
