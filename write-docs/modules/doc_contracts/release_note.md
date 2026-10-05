# Contract: release note

**Title:** the feature name only: "Tracks"
**File:** `blog/<YYYY-MM-DD>-<slug>.mdx`
**Reader:** an existing user scanning what changed.
**Promise:** in under a minute, they know what's new and whether it affects them.

## Shape

About 60 to 90 words in total.

1. **One sentence** saying what it does, in the reader's terms.
2. **Who it's for, in one or two sentences**: the kind of team or work it suits, from the PRD's own example, and who can turn it on.
3. **Up to three one-line bullets** with concrete facts: where to turn it on, and the main action.
4. **One link**: `[Learn about <Feature> →](/docs/<product>/<feature>)`.

Front matter tags carry the product and the type (`new-feature`, `improvement`, `fix`). Don't repeat them in the text.

## Doesn't include

- Section headings ("What's new", "Good to know")
- A paragraph explaining the problem
- Permissions tables, lifecycle rules or offline details. Those are in the reference.
- Marketing words. See [../../framework/style_and_tone.md](../../framework/style_and_tone.md).

## For an improvement or fix

Same shape. The sentence says what's different now. For a fix, say what used to go wrong in a few words, then that it's fixed.

## Example

[blog/2026-10-02-tracks.mdx](../../../blog/2026-10-02-tracks.mdx)

```mdx
Run one task through several workstreams at once, such as Spec, Design and QA. Each track has its own *Pending* or *Done* status, and the task stays in one place.

Tracks is for teams whose work passes through several disciplines, like a sign-in redesign that needs a spec, design, engineering and QA. Any team member can turn it on, including guests.

- Turn on Tracks in a project's **Settings**, then add a track for each workstream.
- Start a task on a track from the **Tracks** board or the task's Tracks pill.

[Learn about Tracks →](/docs/tasket/tracks)
```
