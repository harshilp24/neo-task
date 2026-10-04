# Tracks: clarifying questions

Everything I'd need confirmed before the Tracks docs could be called accurate, from a close read of the PRD and the Tracks screen on neo.work. Each row has the assumption I took so the docs could be written, and the pages it affects.

## Questions to ask (when a PRD is shared)

### Questions for the PM or engineering team

- Can you share a Loom video or join a call to walk me through Tracks?
- Is there a test project or staging build I can use to verify labels and screens?
- Turning Tracks off: one section of the PRD says this hides tracks and restores them when turned back on. Another says it clears all tracks and statuses. Which behaviour is correct?
- Who should review the docs for accuracy, and when is Tracks scheduled to launch?

## Data and permissions

| # | Topic | What the PRD says | Question | Assumption taken | Pages affected | Answer shared by PM |
|---|---|---|---|---|---|---|
| 1 | Turning Tracks off | "A hide, not a delete" and "clears all track assignments". | Does it keep the data or clear it? | Clears it. Docs warn first. | FAQ, Reference | |
| 2 | Deleting a track | Not in the permissions table. | Who can delete a track? Can guests? | Any member, guests too. | Reference, FAQ | |
| 3 | Confirmation | "No undo and no recovery window." | Do delete and turn-off ask to confirm? | No confirmation, so the docs warn before the step. | FAQ | |

## Behaviour

| # | Topic | What the PRD says | Question | Assumption taken | Pages affected | Answer shared by PM |
|---|---|---|---|---|---|---|
| 4 | Stop | Listed, never explained. | What happens after Stop? | Back to *Not started*. | Guide, Reference | |
| 5 | Offline | Start, Mark Done, Mark Pending only. | Do Stop and bulk start work offline? | No. | Guide, Reference | |
| 6 | Lost offline changes | "Dropped silently." | Is the user told? | No. | Troubleshooting | |
| 7 | Closed tasks | Can't be started on a new track. | Can other actions run on a closed task? | Only Start is blocked. | Reference | |
| 8 | Pill count | "Out of all the available tracks." | Every track, or only the task's tracks? | Every track. | Reference | |
| 9 | Track names | Must be unique. | Case-sensitive? Any limits? | Not case-sensitive, no limits. | Reference | |
| 10 | Add Track | Can "start tasks with this track". | How do you pick the tasks? | Add the track first, then start tasks on it. | Guide | |

## Placement and wording

| # | Topic | What the PRD says | Question | Assumption taken | Pages affected | Answer shared by PM |
|---|---|---|---|---|---|---|
| 11 | Tracks switch | Members can turn it on. | Is it in **Settings**? | Yes. | Tutorial, FAQ | |
| 12 | Notifications | Not mentioned. | Do track changes notify anyone? | No notifications. | None yet | |
| 13 | Future release | "A future release." | Mention it in the docs? | No. | Reference | |

## Already answered by the real screen

These were unclear in the PRD, but the Tracks screen on neo.work settles them:

- The status is *Pending*, not *In Progress*.
- The column counter "2/4" means Done out of all tasks on that track.
- The tab is called **Work**, not "My Work".
- "Tasket" in the PRD means "task".
