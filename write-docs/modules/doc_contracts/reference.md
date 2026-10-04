# Contract: reference

**Sidebar section:** Reference
**Title:** <Feature> reference
**File:** `docs/<product>/<feature>/reference.mdx`, with `slug: /<product>/<feature>/reference`
**Reader:** working; needs one fact quickly.
**Promise:** complete and accurate. Every status, view, action, permission, offline rule and effect is here.

## Front matter

```yaml
title: <Feature> reference
description: "<Feature> reference for <Product>: <statuses>, every action and where it is, who can use it, which work offline, and what each change does to <feature> data."
tags: [<product>, <feature>, reference]
keywords: [...]
toc_max_heading_level: 2
```

## Sections, in order (follow the product's structure)

1. **Intro** (no heading): what's listed here, that it describes behaviour, and links to the tutorial, guide and FAQ for steps.
2. **At a glance** (`:::info[At a glance]`): statuses as chips, what can't be undone, what's admin-only, what works offline.
3. **Statuses**: status, meaning, how it's reached.
4. **The views** (board, pill, …): one table each, part and what it shows. Include empty states and what opening an item shows.
5. **Actions**, one table per object (task actions, track and project actions). Columns: Action, Changes / Does, Where, and Offline, Who or Undo. Edge cases as bullets under the table, written as facts ("**Stop** isn't available on a task that is Done on that track.").
6. **Roles and permissions**: actions as rows, roles as columns, ✓ and —.
7. **Offline behaviour**: a two-column table, "Works offline" and "Needs a connection", then what happens on sync.
8. **What changes do to <feature> data**: change, effect, undo chip.
9. **Rules and limits**: anything left.

## Rules

- Describe; never instruct. No "Reopen it first", no numbered steps.
- Every edge case from the PRD's user stories appears.
- If the PRD doesn't say something works offline, it goes under "Needs a connection" and into the clarifying questions.

## Example

[docs/tasket/tracks/reference.mdx](../../../docs/tasket/tracks/reference.mdx)
