# Module: content generation

How to write a page once you know its type. The page's contract in [doc_contracts/](doc_contracts/) says what sections it has; this module says how to fill them.

## Pick the running example

Choose one concrete scenario from the PRD and use it through the tutorial, the explanation and any examples in the guides. Name the project, the items and the people's roles.

Tracks example: tracks `Spec`, `Design`, `Engineering` and `QA`, and one task called *Redesign the sign-in page*, in the reader's own project. The PRD itself gives "a sign-in redesign needs spec, design, then engineering, then QA".

Name examples so they can't be mistaken for buttons or menu items: a task title that reads as a task, a project name with no UI words, and "named" or "called" the first time each appears in a step.

## Writing a section

1. **Open with one or two lines** saying what this section achieves and anything the reader must know first.
2. **Steps**, one action each, with the UI label in bold.
3. **Result** under each step that changes something on screen.
4. In tutorials, the example goes inside the step it applies to, starting "For example," and saying why.

## Writing steps

- Start with the verb: "Click", "Open", "Enter", "Turn on".
- Say where before what when the location isn't obvious: "In the track's column, click **Mark Done**."
- Conditions come first: "If the task is *Done*, click **Mark Pending** first."
- Don't write "Navigate to", "Select the option", "Proceed to". Write what the reader does.

## Writing results

- Present tense, what the reader sees: "The task moves to the *Done* section."
- Name the change, not the system: "A **Tracks** tab appears", not "The Tracks capability is enabled".

## Writing explanations

- Lead with the problem in the reader's words, using the running example.
- Compare to something the reader knows, when it helps. Tracks: a status board, where a task is in one column.
- Give an opinion on when to use it and when not to.

## Writing reference

- Describe; never instruct. "Stop: Pending → Not started", not "Click Stop to…".
- Use tables with the same columns for the same kind of thing.
- Put every edge case in, even the obvious ones.

## Before you hand a page over

- Read it as the reader: could you do the task, or answer the question, with only this page and its links?
- Run [../quality/checklist.md](../quality/checklist.md).
