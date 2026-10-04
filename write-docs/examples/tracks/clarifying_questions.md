# Tracks: clarifying questions

Everything I'd need confirmed before the Tracks docs could be called accurate, from a close read of the PRD and the Tracks screen on neo.work. Each row has the assumption I took so the docs could be written, and the pages it affects.

Ordered by impact: data loss and permissions first, then behaviour, then labels and wording.

## Data loss and permissions

| # | Topic | What the PRD says | Question | Assumption taken | Pages affected |
|---|---|---|---|---|---|
| 1 | Turning Tracks off | *Capabilities:* "Switching off is a hide, not a delete. Switching back on restores every track and every task assignment exactly as they were before." *Lifecycle rules:* "Switch the capability off: clears all track assignments and per-track statuses. On switching back on, the admin recreates the tracks and rebuilds the associations from scratch." | These contradict each other. Is turning Tracks off a hide, or does it clear the data? | **It clears everything.** Documenting the safer reading means nobody turns Tracks off expecting their data back. The docs warn before the step. | FAQ, Reference, Release note, Tutorial (Before you begin) |
| 2 | Who rebuilds after turning back on | "The **admin** recreates the tracks and rebuilds the associations" | Members can turn Tracks on and create tracks. Does rebuilding need an admin, or can any member do it? | **Any member**, as with first-time setup. The PRD's permission table gives creating tracks to any team member. | Reference (permissions) |
| 3 | Deleting a track: who can | The permissions table has no row for Delete. US-1: "As a team member I switch Tracks on… and tracks are created, renamed, moved and deleted". | Who can delete a track? It's irreversible and removes statuses from closed tasks too. | **Any team member**, following US-1. I'd recommend reconsidering this for admins only. | Reference (permissions), FAQ, persona notes |
| 4 | Guests and destructive actions | "Guests have the same track permissions as members on projects they have access to." | Is it intended that a guest from another organisation can delete a track, irreversibly, for the whole project? | **Yes, as written.** The docs say so explicitly. Flagged as a product risk. | Reference, Tutorial (Before you begin), guest persona |
| 5 | Delete confirmation | Delete is "a hard, irreversible removal… There is no undo and no recovery window." | Does the UI ask for confirmation, and does it say how many tasks are affected? | **There's a confirmation step.** Not documented as a step until confirmed against the build. | FAQ |
| 6 | Turn-off confirmation | Not stated. | Does turning Tracks off ask for confirmation? | **Yes, it asks to confirm.** | FAQ |

## Behaviour

| # | Topic | What the PRD says | Question | Assumption taken | Pages affected |
|---|---|---|---|---|---|
| 7 | What Stop does | Lists "Stop a task on a track" as an action, but never defines it. | After Stop, is the task *Not started* on that track? Is anything else kept? | **It returns the task to *Not started*** and removes it from the column. | Manage tasks on tracks, Reference, Troubleshooting |
| 8 | Stop offline | "Start, Mark Done and Mark Pending are available offline." Stop isn't listed either way. | Does Stop work offline? | **No.** Only the three listed actions work offline. | Manage tasks on tracks, Reference |
| 9 | Starting several tasks offline | Select / multi-select start isn't listed as online or offline. | Does starting several selected tasks work offline? | **No.** | Manage tasks on tracks, Reference |
| 10 | Actions on closed tasks | "A closed task cannot be started on a new track." The pill "still renders its statuses" on closed tasks. | Can Mark Done, Mark Pending or Stop be used on a closed task from its pill? | **Not documented.** The docs only say a closed task can't be started on a new track. Needs a product answer. | Manage tasks on tracks, Reference |
| 11 | The column counter | "Each column header carries a counter in the form X out of Y." | What are X and Y? | **Done tasks out of all open tasks on that track**, matching the real screen (Discovery shows 2/4 with 2 Pending and 2 Done). | Tutorial, Reference |
| 12 | The pill's count | "The pill shows how many tracks are Done out of all the available tracks for a task." | Is the total all tracks in the project, or only the tracks the task is on? | **All tracks in the project**, since the pill "lists every track in the project". | Tutorial, Reference |
| 13 | Track names | "Two tracks in the same project cannot have the same name." | Is this case-sensitive? Is "QA" the same as "qa"? | **Not case-sensitive.** The docs only say names must be different. | Reference, Tutorial |
| 14 | Track limits | Not stated. | Is there a maximum number of tracks per project, or a name length limit? | **No limits documented.** | Reference |
| 15 | Adding a track and starting tasks at once | "Add track CTA allows user to add tracks, name it and start tasks with this track." | Does the Add Track flow let you pick tasks to start, and how? | **Not documented as part of adding a track.** The tutorial starts tasks from the pill instead. | Tutorial, FAQ |
| 16 | Offline changes that are dropped | "The queued write is dropped silently." | Is the user told when a change made offline is discarded? | **No message.** Covered in troubleshooting as "A change I made offline disappeared". I'd recommend a notice. | Troubleshooting, Reference |
| 17 | Notifications | Not stated. | Do Start, Mark Done or Stop notify assignees or watchers, or show in the **Updates** tab? | **Not documented.** | (none yet) |
| 18 | Friday and Tracks | Tasks have a Friday chat; Tracks never mentions Friday. | Can Friday start tasks on tracks or mark them Done? | **Not documented.** Friday isn't described as acting on tracks. | (none yet) |

## Labels and wording

| # | Topic | What the PRD says | Question | Assumption taken | Pages affected |
|---|---|---|---|---|---|
| 19 | Pending vs In Progress | Statuses are "In Progress or Done"; "Mark Pending to move it back to In Progress". The screen shows *Pending* and *Done* sections. | Which is the user-facing name? | ***Pending*, from the UI.** | All pages |
| 20 | Where the switch is | "Members will have the capability to switch enable tracks for a project." A project has a Settings tab. | Where is the Tracks switch? | **In the project's Settings tab.** | Tutorial, FAQ |
| 21 | Work tab vs My Work | "My Work lists everything you are assigned to" and later "the Work tab". neo.work calls it "Work Tab". | Which name does the UI use? | ***Work* tab**, from neo.work. | Tutorial, Reference |
| 22 | Project tabs | "A project has tabs for Open, Closed tabs grouped by sections and Settings" | Are Open and Closed both lists grouped by section (such as sprints)? | **Yes.** The screen shows open tasks grouped by sprint beside the board. | Reference (board) |
| 23 | "Tasket" for "task" | "Each tasket has one creator…", "taskets you are participants in" | Typos for "task"? | **Yes.** The docs say "task". | (wording only) |
| 24 | Future release | "Letting the user choose is a future release." | Should the docs mention it? | **No.** Docs describe what ships. | Reference |
