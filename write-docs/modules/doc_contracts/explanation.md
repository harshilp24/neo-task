# Contract: explanation

**Sidebar section:** Concepts
**Title:** What are <Feature>? (or "What is <Feature>?")
**File:** `docs/<product>/<feature>/what-are-<feature>.mdx`, with `slug: /<product>/<feature>`
**Reader:** wants to understand the feature, before or after using it.
**Promise:** a clear mental model, and when to use it. No steps.

## Front matter

```yaml
title: What are <Feature>?
slug: /<product>/<feature>
description: "<Feature> in <Product> <what it does>, <its states>. <How it relates to the nearest existing concept>."
tags: [<product>, <feature>, concept]
keywords: [<Product>, what are <Feature>, <Feature> explained, ...]
toc_max_heading_level: 2
```

The description is the answer to "What are <Feature>?", in one or two sentences.

## Sections, in order

1. **Intro** (no heading): one paragraph saying what it is, feature name in bold. Three bullets with bold lead-ins for its defining properties. One line: "This page explains why <Feature> exists, how it works, and when to use it. It has no steps. To set it up, follow [Get started…]."
2. **Why <the old way> isn't enough**: the problem, using the PRD's own example. One question the reader would ask. Why the obvious workaround fails.
3. **How <Feature> works**: the objects, states and views, in plain words.
4. **How <Feature> differs from <familiar thing>**: a comparison table, if readers will confuse the two.
5. **When to use <Feature>**: the PRD's situation, then when not to use it.
6. **What to know before you turn it on**: two or three things that are hard to change later, with a link to the reference.
7. **See also**: tutorial, guide, FAQ, reference.

## Rules

- No numbered steps, no instructions. Link to the page that has them.
- Use cases and examples come from the PRD. Don't add industries, teams or workflows it doesn't mention.
- Opinions are allowed ("Skip <Feature> when…"), as long as they follow from the PRD's rules.

## Example

[docs/tasket/tracks/what-are-tracks.mdx](../../../docs/tasket/tracks/what-are-tracks.mdx)
