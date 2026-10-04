# Contract: product overview

**Sidebar:** the first item, "<Product> overview"
**Title:** <Product>
**File:** `docs/<product>/index.mdx`, with `slug: /<product>`
**Reader:** arriving at a product's docs; deciding where to go.
**Promise:** what the product is, how it's organised, and a way into every page.

## Front matter

```yaml
title: <Product>
slug: /<product>
description: "<Product> is Neo's <one-line purpose>. <The feature this section covers, in one clause>."
tags: [<product>]
hide_table_of_contents: true
```

## Layout

Uses the components in `src/components/ProductOverview`:

```mdx
import {Overview, JobCards, TracksPreview} from '@site/src/components/ProductOverview';

<Overview
  intro={<>… across three layers: <b>…</b>, <b>…</b> and <b>…</b>. Use this section to …</>}
  layers={[{icon, title, text}, … three items]}
  preview={<TracksPreview />}
/>

## <Feature>

<JobCards items={[{icon, title, text, to}, … one per page]} />
```

1. **Intro paragraph**: what the product is and its three layers, from the PRD's "what it is" section.
2. **Three layer rows**, each an icon, a bold title and one line.
3. **Preview**: a small static mock of the real UI, built only from screens and PRD facts. Show the feature's main view (for Tracks, the board: `Team › Project`, **Open** and **Tracks** tabs, numbered columns with counter and **Start**, *Pending* and *Done* sections, **+ Add Track**).
Keep the existing preview when adding a feature. Only replace it if the new feature is the product's main view, and then build it from that feature's screens.

4. **One h2 per feature**, then a card for each of its pages: tutorial, guide, explanation, reference, FAQ, troubleshooting. Card text is one line on what the reader gets.
5. A line linking the feature's release note.

## Example

[docs/tasket/index.mdx](../../../docs/tasket/index.mdx)
