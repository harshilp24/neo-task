# Contract: tutorial

**Sidebar section:** Get started
**Title:** Get started with <Feature>
**File:** `docs/<product>/<feature>/get-started.mdx`
**Reader:** new to the feature; wants to set it up once.
**Promise:** by the end, the feature is set up in the reader's own project.

## Covers

- First-time setup only: turning the feature on and creating what it needs.
- One short line on what the reader can do next, with no steps.

## Doesn't cover

These live in other pages, linked from **Next steps**:

- Daily use (starting, marking Done, sending back): how-to guide
- Changes after setup (rename, reorder, delete, turn off): FAQ
- Rules, permissions, offline: reference
- Why the feature exists: explanation

## Front matter

```yaml
title: Get started with <Feature>
description: "Set up <Feature> in <Product>: <the whole setup in one clause>."
tags: [<product>, <feature>, tutorial]
keywords: [<Product>, <Feature>, set up <Feature>, ...]
toc_max_heading_level: 2
```

The description is the answer to "How do I set up <Feature>?". It isn't repeated on the page.

## Sections, in order

1. **Intro** (no heading), two short paragraphs:
   - what the feature is, in two lines, with the feature name linked to the explanation page
   - "In this tutorial, you <outcome>."
2. **Before you begin**: "Make sure you have:" then bold-led bullets for access, connection and anything to prepare.
3. **One section for the whole setup**, headed by the outcome ("Add your tracks"). Numbered steps, each one action:
   - the reader's own project, not a named example project ("open your project")
   - a permission line under the step it applies to ("Anyone in the team can turn Tracks on. Only an admin can turn it off.")
   - examples inside the step, starting "For example," and explaining why ("if you're redesigning the sign-in page, the work needs a spec, then design… So add `Design`, `Engineering` and `QA`.")
   - a last step that shows what's now on screen, as bullets ("On the **Tracks** tab, you see a column for each track. Each column has: …")
4. **One closing line** (no heading): "Great! You've <what they did>."
5. **Next steps**: links to the explanation, guide and FAQ, each `[Title](link): what it gets you`.

## Rules

- One fixed path. Examples are in the step they apply to, never in a separate paragraph after the list.
- No sub-tasks, hand-offs or behaviour the PRD doesn't state.
- Name example data so it can't be mistaken for UI (see [../../framework/style_and_tone.md](../../framework/style_and_tone.md)).

## Example

[docs/tasket/tracks/get-started.mdx](../../../docs/tasket/tracks/get-started.mdx)
