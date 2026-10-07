# History: page plan

The plan the skill produced for History, and where each page lives.

## User goals

| Goal | Role | Changes | How often | Page |
|---|---|---|---|---|
| See the tasks I used recently | any user | nothing | daily | Return to recent tasks |
| Open a task from History | any user | History order | daily | Return to recent tasks |
| Collapse sections I don't need | any user | the view, for one session | sometimes | Return to recent tasks |
| Reopen a completed or discarded task | participant | the task's status | sometimes | Return to recent tasks |
| Use History offline | any user | nothing | sometimes | Return to recent tasks |
| Understand what History records and for how long | any user | nothing | once | What is History? |
| Look up a section, row field, empty state or offline rule | any user | nothing | sometimes | History reference |
| Fix an empty list, a missing task or a failed reopen | any user | nothing | rarely | Troubleshoot History |

## Pages

| Type | Title | File | Reader | Covers | PRD source |
|---|---|---|---|---|---|
| Overview | Tasket | `docs/tasket/index.mdx` | Anyone arriving | A History heading with a card per page | Introduction |
| How-to | Return to recent tasks | `docs/tasket/history/return-to-recent-tasks.mdx` | Someone with a task to find | Open a task, collapse a section, reopen, offline | US-01, US-02, US-04, US-05 |
| Explanation | What is History? | `docs/tasket/history/what-is-history.mdx` | Anyone wanting the why | What it records, sections, Work tab comparison, when to use | Introduction, Capabilities, Group definitions |
| Reference | History reference | `docs/tasket/history/reference.mdx` | Someone looking up a fact | Sections, triggers, row fields, empty states, reopen, access, offline, limits | Capabilities, all user stories, Offline edge cases |
| Troubleshooting | Troubleshoot History | `docs/tasket/history/troubleshooting.mdx` | Someone stuck | Twelve issues, each with cause and solution | Edge cases, Failure scenarios |
| Release note | History | `blog/2026-10-07-history.mdx` | Existing user | What's new, in about 80 words | Introduction, Retention |

## Pages not written

| Type | Why |
|---|---|
| Tutorial | History has nothing to set up. It records automatically, so a tutorial would repeat the guide's first section. |
| FAQ | The FAQ holds rare changes to a feature: rename, delete, turn off. History has no settings, so every answer would repeat the reference. |

Because of this, the required links to a tutorial and an FAQ point to the guide and the reference instead.

## Sidebar

```
Tasket overview
GET STARTED             Get started with Tracks
RUN WORK ACROSS TEAMS   Manage tasks on tracks
FIND YOUR WORK          Return to recent tasks                    (new job area)
CONCEPTS                What are Tracks? · What is History?
REFERENCE               Tracks reference · History reference
HELP                    Tracks FAQ · Troubleshoot Tracks · Troubleshoot History
```
