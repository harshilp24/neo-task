# Contract: how-to guide

**Sidebar section:** a job area named for the goal, such as "Run work across teams"
**Title:** names the job from the reader's side: "Manage tasks on tracks"
**File:** `docs/<product>/<feature>/<title-in-kebab-case>.mdx`
**Reader:** already uses the feature; has one goal now.
**Promise:** the shortest reliable way to get it done.

## Scope

- Everyday work on one object at one frequency. For Tracks: a task's status on a track (daily).
- Rare changes to the feature itself (rename, reorder, delete, turn off) go in the **FAQ**, not here.
- Never repeat the tutorial's steps.

## Front matter

```yaml
title: <Job>
description: "<Job> in <Product>: <each task in the guide, with the control that does it>."
tags: [<product>, <feature>, how-to]
keywords: [...]
toc_max_heading_level: 2
```

## Sections, in order

1. **Intro** (no heading), two short paragraphs:
   - one line of context, linking the feature name to the explanation ("Once a project has [tracks](…), each task has its own status on every track…")
   - "In this guide, you <task>, <task> and <task>."
2. **Before you begin**: "Make sure you have:" then bold-led bullets for state ("Tracks is on, and the project has tracks"), access, and connection.
3. **One section per task.** Heading starts with a verb: "Start several tasks at once", "Send a task back for more work". Each section:
   - an optional one-line condition ("If a track marked a task Done too early:")
   - numbered steps, with results
4. **See also**: links to the FAQ, reference and troubleshooting.

## Doesn't include

- Why the feature works this way. Link to the explanation.
- Full rule lists. Link to the reference.
- Problems. They go on the troubleshooting page.

## Example

[docs/tasket/tracks/manage-tasks-on-tracks.mdx](../../../docs/tasket/tracks/manage-tasks-on-tracks.mdx)
