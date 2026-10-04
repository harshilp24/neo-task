# Contract: FAQ

**Sidebar section:** Help
**Title:** <Feature> FAQ
**File:** `docs/<product>/<feature>/faq.mdx`
**Reader:** has a quick "How do I…?" question, often from search or an AI assistant.
**Promise:** the answer in the first line, then the steps. Written for answer engines as much as for people.

## What goes here

Rare changes to the feature itself, which aren't worth a guide of their own: add between, rename, reorder, delete, turn off. Destructive actions go here with their warning.

## Front matter

```yaml
title: <Feature> FAQ
description: "<Every answer on the page, compressed into two or three sentences>."
tags: [<product>, <feature>, faq]
keywords: [...]
toc_max_heading_level: 2
```

## Sections, in order

1. **FAQPage JSON-LD** in a `<head>` block: each question with a one-sentence answer.
2. **Intro** (no heading): what the feature is in one line, then "Here are the short answers:" and one bullet per question, then "The steps for each are below." and a link to troubleshooting.
3. **One h2 per question**, written as the reader asks it: "How do I rename a track?". Under it:
   - **one sentence** that answers it: "To rename a track in <Product>, click **Rename** in the track's menu on the **Tracks** board." It may lead straight into the steps: "… To put a new track in a specific place:"
   - for destructive actions, the `:::warning` here, before the steps; for admin-only actions, the answer says "an admin"
   - numbered steps with results
4. **Related**: reference and troubleshooting.

## Rules

- The answer sentence names the product, the control and where it is. Nothing else: who can do it and the connection rule are in the intro bullets.
- No h3s. Each question is its own entry in "On this page".

## Example

[docs/tasket/tracks/faq.mdx](../../../docs/tasket/tracks/faq.mdx)
