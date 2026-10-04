# Module: page planning

Turn the fact sheet into a set of pages, each serving one reader need.

## 1. List user goals

Rewrite each capability and user story as a goal: "As a <role>, I want to <goal>". Note how often it happens and what it changes.

| Goal | Role | Changes | How often |
|---|---|---|---|
| Turn Tracks on for a project | member | the project | once |
| Add a track for each workstream | member | tracks | once, then rarely |
| Start a task on its tracks | member | a task's status | daily |
| Rename, reorder or delete a track | member | tracks | rarely |
| Turn Tracks off | admin | the project | rarely |
| Send a task back or take it off a track | member | a task's status | sometimes |

## 2. Assign goals to pages

| Goals that are… | Go in |
|---|---|
| Needed to set the feature up and use it once | **Tutorial** (*Get started with <feature>*) |
| Everyday work after setup, on the same object at the same frequency | One **how-to guide** per object, named for the job |
| Rare changes to the feature: add between, rename, reorder, delete, turn off | **FAQ**, one question each, warnings on destructive ones |
| Facts: statuses, actions, permissions, offline, effects, limits | **Reference** |
| Why it exists, how to think about it, when to use it | **Explanation** |
| Things going wrong: errors, missing items, unavailable actions, lost changes | **Troubleshooting** |
| Where the reader starts for the product | **Product overview** cards |
| What changed, for existing users | **Release note** |

Each goal goes in exactly one page. If two pages seem to need the same steps, one of them is wrong; move the steps to the page whose reader needs them first, and link from the other.

## 3. Write the plan table

| Type | Title | File | Reader | Goals or questions covered | PRD source |
|---|---|---|---|---|---|

Check the plan:

- Every goal from step 1 appears once.
- Every fact sheet section has a home (most go in the reference).
- The tutorial covers first setup, and nothing after.
- No guide is a single button. Merge until each guide is a meaningful job.

## 4. Place in the sidebar

Use [../framework/linking_and_navigation.md](../framework/linking_and_navigation.md): the tutorial under **Get started**, guides under a job area named for the goal, the explanation under **Concepts**, the reference under **Reference**, the FAQ and troubleshooting under **Help**.
