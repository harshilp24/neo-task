# Contract: troubleshooting

**Sidebar section:** Help
**Title:** Troubleshoot <Feature>
**File:** `docs/<product>/<feature>/troubleshooting.mdx`
**Reader:** something isn't working, or isn't where they expected.
**Promise:** find what you see, understand why, fix it.

## Sources of issues

Each comes from a PRD rule or edge case a reader could hit without knowing it:

- an error the PRD defines (a duplicate name)
- something missing from a view (feature off, item filtered out, not started)
- an action that isn't available (wrong state, offline, role)
- a change that's lost (sync rules, lifecycle effects)

## Front matter

```yaml
title: Troubleshoot <Feature>
description: "Fixes for <Feature> in <Product>: <the main issues in one list>."
tags: [<product>, <feature>, troubleshooting]
toc_max_heading_level: 2
```

## Sections

1. **Intro** (no heading): "This page covers the most common problems with <Feature> in <Product>: <kinds of issue>. Each one shows what you see, its cause and the solution." Then links to the FAQ and the reference.
2. **One entry per issue**, always in this shape:

   ```mdx
   ## Track name already used

   :::danger[Error]

   A new or renamed track can't be saved with the name you entered.

   :::

   ### Cause

   One or two sentences.

   ### Solution

   A sentence, a short bullet list, or steps.
   ```

   - **h2** is a short name for the issue ("No Tracks tab"), not a full sentence.
   - The **callout** says what the reader sees. Pick its type and label:

     | Label | Callout | Use for |
     |---|---|---|
     | Error | `:::danger[Error]` | A message or a save that fails |
     | Symptom | `:::info[Symptom]` | Something missing, or an action not shown |
     | Offline | `:::caution[Offline]` | An action that needs a connection |
     | Permission | `:::caution[Permission]` | An action limited to a role |
     | Data loss | `:::danger[Data loss]` | Changes or statuses that are gone |

   - **Cause** and **Solution** are plain h3 text, never callouts.

Order: errors first, then symptoms, then offline and permission limits, then data loss.

## Rules

- Don't quote an error message the PRD doesn't give. Describe what happens instead.
- Don't say "greyed out", "hidden" or "disabled" unless the screens show it.

## Example

[docs/tasket/tracks/troubleshooting.mdx](../../../docs/tasket/tracks/troubleshooting.mdx)
