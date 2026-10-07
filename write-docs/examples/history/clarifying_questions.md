# History: clarifying questions

Everything I'd need confirmed before the History docs could be called accurate, from a close read of the PRD. No screens were shared, so every UI label comes from the PRD. Each row has the assumption I took so the docs could be written, and the pages it affects.

## Questions for the PM or engineering team

- Is there a staging build or a screenshot of the History tab? Every label in the docs (**History**, **Today**, **Past Week**, **Past Month**, **Re-open**) is taken from the PRD, not the UI.
- Does a task appear once in the whole of History, or once in each section? The PRD says both (question 1).
- Who should review the docs for accuracy, and when does History launch? The release note is dated 2026-10-07 as a placeholder.

## Data and permissions

| # | Topic | What the PRD says | Question | Assumption taken | Pages affected | Answer shared by PM |
|---|---|---|---|---|---|---|
| 1 | Duplicates across sections | "At most once per section", and "moves to the top of Today. Its previous position is vacated." | Can a task used yesterday and today show in both Past Week and Today? | No. A task appears once, in the section of its most recent access. | Reference, Explanation | |
| 2 | Read-only access | A user "removed from assignees and watchers" gets a read-only panel. Participants also include creator and contributor. | What happens to a creator or contributor who loses access? Does the read-only panel show **Re-open**? | Only the two cases in the PRD are documented. Re-open isn't mentioned for read-only. | Reference, Troubleshooting | |
| 3 | Getting access back | Read-only notice only. | How does a user regain edit access? | Not documented. The docs say access is needed again and name no route. | Troubleshooting | |
| 4 | Reopen permission by role | "Any participant (creator, assignee, contributor, watcher)." | How does this map to members, admins and guests? What is a contributor? | Documented by participant type, as the PRD gives it. No member, admin or guest grid. | Reference, Guide | |
| 5 | 90-day retention | Raw access events are kept 90 days; the list shows 30. | Should users be told about the 90 days? | Yes, as one line under Rules and limits. The reason (analysis, a longer window later) is left out. | Reference | |
| 6 | Clearing History | Not mentioned. | Can a user remove a row or clear History? | Not documented. | None yet | |
| 7 | Permanent sync failure | "If sync fails permanently: the access event is lost." | When is a failure permanent, and is the user told? | The user isn't told. The docs describe the effect only. | Reference, Troubleshooting | |

## Behaviour

| # | Topic | What the PRD says | Question | Assumption taken | Pages affected | Answer shared by PM |
|---|---|---|---|---|---|---|
| 8 | Window length | "Last 30 calendar days", and Today plus day 1 to day 30 before today. | Is the window 30 days or 31 including today? | The docs say "the last 30 days" and give the section ranges as written. | Reference | |
| 9 | Overall empty state | Never viewed: all three headers hidden. Elsewhere: "the user sees three section headers always". | Are the headers hidden for a user with no history? | Yes, hidden only when the user has never viewed a task. | Reference | |
| 10 | Older than 30 days | Section empty messages, plus the overall empty state below the headers. | Is this different from "never viewed", which hides the headers? | Yes. Documented as two rows. | Reference | |
| 11 | Empty Past Week and Past Month | Message "inside the collapsed section", and "shown inside when expanded". Sessions start "all expanded". | Does an empty Past Week start collapsed, like Today? | No. Only Today starts collapsed when empty. | Reference, Troubleshooting | |
| 12 | Collapse control | Headers have "expand icons". | What does the user click to collapse a section? | The guide says "from its header" and names only the expand icon. | Guide | |
| 13 | Reopen comment | "A text field is shown below the re-open action." | Is the comment entered before clicking Re-open, or after? | Before. | Guide, Reference | |
| 14 | Real-time update | "Immediately (or on next History tab open)." | Which one? | The docs say History updates without a manual refresh. | Reference | |
| 15 | Read-only visits | Opening the detail panel logs an entry. | Does a read-only open count? | Not stated in the docs either way. | None yet | |
| 16 | Unread red dot | "New unreviewed activity since last access." | Does opening the task from History clear it? | Not documented. | Reference | |
| 17 | Keyboard shortcuts | Actions "via a keyboard shortcut" log an entry. | Which shortcuts exist? | None are named. | Reference | |
| 18 | Timezone change | Boundaries use local midnight. | What happens when a user travels to another timezone? | Not documented. The docs say "your local timezone". | Reference | |
| 19 | Reopen failure message | A toast on network error and on sync failure. | Is the toast the only signal? | Yes. | Troubleshooting | |
| 20 | Retry on load error | "Full-page error state with retry CTA." | What is the button's label? | The docs say "the retry option". | Troubleshooting | |

## Placement and wording

| # | Topic | What the PRD says | Question | Assumption taken | Pages affected | Answer shared by PM |
|---|---|---|---|---|---|---|
| 21 | "Tasket" for a task | "Tasket" throughout, including in UI messages such as "This tasket no longer exists." | Does the UI say "tasket" or "task"? | "Task", as in the published Tracks docs. Messages containing "tasket" are described, not quoted. | All | |
| 22 | Where History lives | "History tab." | Where is the tab, and is that its label? | A **History** tab. The docs don't say where it sits. | Guide | |
| 23 | "My Work" | "My Work" throughout. | Same as the **Work** tab? | Yes. The Tracks screens showed **Work**. | Explanation, Reference | |
| 24 | "Detail panel" | "Tasket detail panel." | Same as the task's detail view? | Yes. The docs say "detail view", as the Tracks docs do. | All | |
| 25 | Re-open label | "Re-open action." | Is the button labelled **Re-open**? | Yes. Prose uses "reopen" as the verb. | Guide, Reference, Troubleshooting | |
| 26 | Workspace | "A workspace the user no longer belongs to." | Is a workspace a team, or the organisation? | The docs keep the word "workspace". | Reference, Troubleshooting | |
| 27 | Silence score | Listed as a row field. | Is there a doc to link to? | Named only, with no explanation. | Reference | |
| 28 | Section labels | "Today, Past Week, Past Month." | Is this the UI's capitalisation? | Yes. | All | |
| 29 | Mark as reviewed | Listed as an action in the detail panel. | Is this the UI's label? | Written in lower case, as an action, not a label. | Reference, Explanation | |

## Left out on purpose

- Server-side detail: IndexedDB, `client_ts` and `server_ts`, the expiry job, deduplication at query time, the IANA timezone string.
- The possibility of a longer display window in future.
- Cross-references to other PRDs (My Work, Updates, Projects, Create Tasket, Timestamp & Timezone).
