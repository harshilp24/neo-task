# Callouts and formatting

The building blocks available on every page, and when to use each.

## Callouts

Always give a callout a title in square brackets. Untitled callouts render a lowercase default.

| Type | Use for | Example title |
|---|---|---|
| `:::info` | A summary the reader should see first. On reference pages only, as **At a glance**. | `[At a glance]` |
| `:::note` | A fact that changes how the reader does the next step | `[Tracks are set up per project]` |
| `:::warning` | Anything that can't be undone, placed directly before the step that does it | `[Deleting a track can't be undone]` |
| `:::tip` | Rarely. Only for a faster way to do the same task. | `[Start several tasks at once]` |

On **troubleshooting** pages, each issue opens with one labelled callout that says what the reader sees. Cause and Solution are plain text, not callouts.

| Label | Callout | Colour |
|---|---|---|
| Error | `:::danger[Error]` | red |
| Symptom | `:::info[Symptom]` | blue |
| Offline | `:::caution[Offline]` | amber |
| Permission | `:::caution[Permission]` | amber |
| Data loss | `:::danger[Data loss]` | red |

Rules:

- At most one callout per section.
- A warning states the consequence first, then the safer alternative: "It removes the track and every status on it. To change the layout instead, rename or reorder the track."
- Don't put steps inside a callout.

## Numbered steps

- One action per step. If a step has "and then", split it.
- Put the result on its own line under the step, indented, in plain text: "The task appears in the *Pending* section."
- Steps are a plain numbered list. Don't add custom numbering.

## "For example" lines

In tutorials, examples go **inside the step** they apply to, as an indented line starting "For example," that says why: "For example, if you're redesigning the sign-in page, the work needs a spec, then design… So add `Design`, `Engineering` and `QA`." Never a separate paragraph after the list.

## Tables

Use tables for facts that have the same shape: statuses, actions, permissions, effects.

- Keep tables to five columns or fewer.
- The first column names the thing; it doesn't wrap.
- State a rule that applies to every row once, above the table, not in each row.
- Use ✓ and — for yes/no columns, centred.
- For permissions, use a grid: actions as rows, roles as columns.

## Status chips

Use the `<Chip>` component for statuses and yes/no outcomes in tables. No import needed.

| Chip | Renders |
|---|---|
| `<Chip>Not started</Chip>` | grey outline |
| `<Chip kind="pending">Pending</Chip>` | blue |
| `<Chip kind="done">Done</Chip>` | green |
| `<Chip kind="yes">Yes</Chip>` | green, for "can be undone" |
| `<Chip kind="no">No</Chip>` | red, for "can't be undone" |
| `<Chip kind="admin">Admins</Chip>` | blue, for role restrictions |

## Tabs

Use tabs only for a real fork in the same task, such as "One task" and "Several tasks at once". Never for content the reader needs both of.

```mdx
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

## Code style

Use code style for text the reader types (`Spec`) and for file names. Not for UI labels; those are bold.
