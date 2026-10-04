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
| Label or status name | Reference, tutorial, guides, troubleshooting, release note |
| Behaviour or rule | Reference first, then the guide section that uses it |
| Permission | Reference permissions grid, guide **Before you begin**, persona notes |
| Setup flow | Tutorial |

### 3. Update the owner, then the links

Change the page that owns the fact. Update other pages only where they link to it or name it. Don't copy the new detail into them.

If a heading changes, search for its old anchor and fix every link.

### 4. Close the question

If the change answers a clarifying question, mark it answered in `clarifying_questions.md` and remove any wording that was only there because of the assumption.

### 5. Release note

If users will notice the change, write a release note with [../workflows/release_note_only.md](release_note_only.md), typed `improvement` or `fix`.

### 6. Check

Run [../quality/checklist.md](../quality/checklist.md) and build the site.
