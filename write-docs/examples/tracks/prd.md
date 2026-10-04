# Tracks PRD (as received)

The source material for the worked example. Kept as received, typos included, because the clarifying questions depend on what it actually says.

---

Product Requirements Document · working draft

**What Tasket is**
Tasket is a work management platform.
A user can create their teams on tasket to collaborate with other users in the or out of the organisation. Team consists of members, admins and guests (users that are part of a different org).
Users can create projects within a team. Projects is a repository of tasks.

**Tasks**
A task is a single unit of work and belongs to exactly one project.
A task has a title, a comment thread, attached Studio documents and Friday chat.
Each tasket has one creator, up to ten assignees, and any number of watchers.

**Task status**
A task can be in Open, Completed or Discarded status.
Completed and Discarded are both terminal, and this document calls them closed.
A closed task can be reopened, which returns it to Open.

**Where things appear**
A project has tabs for Open, Closed tabs grouped by sections and Settings, plus a Tracks tab when the Tracks capability is enabled.
My Work lists everything you are assigned to and Updates lists activity on taskets you are participants in.

**Capabilities**
Members will have the capability to switch enable tracks for a project. Disabling tracks will be allowed only to the Admin.

**Offline**
Tasket works offline so that users can continue to work in no-network zones.
Not every action is available offline.

**What are tracks**
A single task usually passes through more than one workstream, a sign-in redesign needs spec, design, then engineering, then QA and then documentation.
Tracks lets one task sit in several track lanes at once, each lane holding its own status for that task.
Example, a task can be in spec and in design at the same point of time.
Completing or discarding a task is independent of which tracks the task is started on.

**Capabilities**
Switch the Tracks capability on and off for a project.
Switching off is a hide, not a delete. Switching back on restores every track and every task assignment exactly as they were before.
Create, rename and delete tracks within a project.
Team members can move a track to a different position on the board.
Start a task on one or more tracks.
Stop a task on a track.
Mark a started task as Done on a track, and Mark Pending to move it back to In Progress.
Select multiple tasks in a track and start them across other tracks in one action.

**Scope**
Tracks are project-scoped. A track created in one project does not exist in another.
A task can be on any number of tracks, and has exactly one status per track it is on - In Progress or Done.
A task that has not been started on a track is Not started on that track.

**The Tracks board: Layout**
The Tracks tab renders one column per track. Each column is split into an In Progress section and a Done section.
Columns show open tasks only, any completed or discarded task is not shown in this list.
Each column header carries a counter in the form X out of Y.
A task started on three tracks appears in three columns at once.

**Managing tracks from the board**
Add track CTA allows user to add tracks, name it and start tasks with this track. Add track CTA is present at the end of all the track panels as well as in between two tracks.
A track has three actions, Rename, Move track and Delete.
Move track action allows the user to move the track to a particular position in the order of tracks on the board.

**Actions on a task in a column**
A task in the In Progress section of a track has three actions, Mark Done, Stop and Select.
A task in the Done section of a track has two actions, Mark Pending and Select.
Select is a multi-select. It allows tasks to be started across other tracks.
If a task is opened from a track, a view of the task is opened where the user can verify the details of a task like assignees, watchers, comments and any attached docs or chats.

**The Tracks pill**
The task detail view shows a Tracks pill wherever the task is accessed from, for example from the Work tab or the Updates tab.
Opening it lists every track in the project with the task's status inline - Not started, In Progress or Done.
There is a Start action for any track the task is Not started on.
There are Mark Done and Stop actions for any track the task is In Progress on.
There is a Mark Pending action for any track the task is Done on.
The pill shows how many tracks are Done out of all the available tracks for a task.
The pill is the only place a task's full track picture is visible in one view.

**Lifecycle rules**
Close and reopen - on close, whether completed or discarded, the task's track memberships and per-track statuses are retained. The task drops out of every column because columns filter to open tasks, but the pill still renders its statuses. On reopen it returns to its columns with every status resumed exactly as before.
Delete a track - a hard, irreversible removal of that track's statuses and assignments everywhere, on open and closed tasks alike. There is no undo and no recovery window.
Rename a track - changes the label on the column and in the pill. Statuses and assignments are untouched.
Move a track - changes the position of the column on the board. Nothing else changes.
Switch the capability off - clears all track assignments and per-track statuses. On switching back on, the admin recreates the tracks and rebuilds the associations from scratch.
Cross-project move - all track assignments are cleared, because tracks are project-scoped and the target project has its own. The task lands with no track started, even where the target project has a track of the same name. Letting the user choose is a future release.

**Permissions**
Guests have the same track permissions as members on projects they have access to.

| Action | Who can perform it |
|---|---|
| Switch the Tracks capability on | Any team member |
| Switch the Tracks capability off | Admin only |
| Create a track | Any team member |
| Rename a track | Any team member |
| Move a track | Any team member |
| Start a task on a track | Any member with access to the task |
| Mark Done, Stop and Mark Pending | Any member with access to the task |
| Select and start across tracks | Any member with access to the tasks selected |
| View the Tracks board | Any member with access to the project |

(No row for Delete a track.)

**User stories**
US-1 — Manage the Tracks capability and tracks. As a team member I switch Tracks on for a project, and tracks are created, renamed, moved and deleted as the shape of the project changes.
- Edge: deleting a track removes its statuses everywhere, including on closed tasks, and is irreversible.
- Edge: two tracks in the same project cannot have the same name.
- Edge: moving a track changes only the order of the columns. No task is affected.

US-2 — Start a task on one or more tracks. As a member I Start an open task on one or more tracks, so each discipline can see it in their own column.
- Edge: starting a task on a track it is already on only highlights the existing placement.
- Edge: a closed task cannot be started on a new track. It has to be reopened first.
- Edge: a multi-select start that includes a task already on the target track leaves that task where it is.

US-3 — Move a task through a track's states. As a member I Mark Done a task that is In Progress on a track, and Mark Pending to move it back.
- Edge: a task already marked Done cannot be stopped.
- Edge: marking the last In Progress item Done leaves the In Progress section empty and updates the counter.
- Edge: marking a task Done on one track has no effect on any other track.

US-4 — See a task's track status from the task. As a member I open a task and see, in one place, which tracks it sits on and where it stands on each.
- Edge: a closed task still renders the pill with its retained per-track statuses.
- Edge: a task in a project where Tracks is switched off does not render the pill at all.

**Offline behaviour**
Start, Mark Done and Mark Pending are available offline. Writes are queued locally and reconciled on reconnect.
Switching the capability on or off, and creating, renaming, moving and deleting tracks, are online-only. They are infrequent, team-level and project-wide in impact.
If a queued membership write syncs after that track has been deleted online, the queued write is dropped silently and the track is not recreated.
If a task was closed offline while its track was deleted online, that track's assignment is dropped on sync, so the pill does not resurrect a dead track on reopen.
