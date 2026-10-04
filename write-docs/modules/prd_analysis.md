# Module: PRD analysis

Read the PRD like a spec you'll be held to. Pull out every fact the docs need, and every place where the PRD is silent, unclear or contradicts itself.

## 1. Read it all, twice

Read the whole PRD once without taking notes. On the second pass, fill the fact sheet below. Also read any screens or tickets; note every label and status name exactly as shown.

## 2. Fill the fact sheet

| Section | Questions to answer | Tracks example |
|---|---|---|
| **Actors** | Who touches the feature? Where do permissions differ? | member, admin, guest |
| **Objects** | What things does the feature add or change? | track, a task's status on a track |
| **Actions** | What can each actor do to each object? Where in the UI? | Start, Mark Done, Mark Pending, Stop, Select, Add Track, Rename, Move track, Delete, switch on/off |
| **States** | What statuses exist? How do you move between them? | Not started, Pending, Done |
| **Views** | Where does the feature appear? | Tracks tab (board), Tracks pill on a task |
| **Rules** | What's always true? | names unique per project; tracks are project-scoped |
| **Edge cases** | What happens at the boundaries? Read every user story's "Edge:" lines. | already on a track, closed task, Done can't be stopped |
| **Permissions** | Who can do each action? | table in the PRD |
| **Offline** | What works offline? What happens on sync? | Start, Mark Done, Mark Pending queue; deleted-track writes dropped |
| **Lifecycle** | What happens to the feature's data when related things change? | close, reopen, delete track, switch off, move project |
| **Out of scope** | What does the PRD say is a future release? | choosing tracks on cross-project move |

## 3. Find gaps and conflicts

Go through the fact sheet and look for:

- **Contradictions**: two parts of the PRD that can't both be true. Tracks: "switching off is a hide, not a delete" vs "switch off clears all track assignments".
- **Missing rows**: an action with no permission, a state with no way out, an action not listed as online or offline.
- **Undefined terms**: a word the PRD uses but never explains. Tracks: what **Stop** does.
- **Label mismatches**: the PRD's word differs from the UI's. Tracks: *In Progress* vs *Pending*; "Work tab" vs "My Work".
- **Ambiguous counts or formats**: "X out of Y" where X and Y aren't defined.
- **Risky permissions**: destructive actions open to roles that may not expect them.
- **Typos that change meaning**: "tasket" used for "task".

## 4. Write the clarifying questions

One row per gap. Every row must have an assumption, so drafting can continue.

| # | Topic | What the PRD says | Question | Assumption taken | Pages affected |
|---|---|---|---|---|---|

Rules for assumptions:

- Prefer **UI evidence** over PRD wording.
- When data could be lost, assume the reading that **protects data**, and warn the reader.
- When permissions are unclear, assume the **narrower** permission unless a user story says otherwise.
- Never assume a feature exists because it would be useful.

Order the questions by impact: data loss and permissions first, then behaviour, then labels and wording.
