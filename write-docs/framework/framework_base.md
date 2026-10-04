# Framework base

The principles behind every page in Neo docs. Read this before any workflow.

## What Neo docs are for

Neo docs help people get work done in Tasket, Friday, Studio and Drive. A reader arrives with one need: to learn, to do a task, to look up a fact, or to understand why. Each page serves one of those needs. See [diataxis.md](diataxis.md).

Docs are a product. They live in Git, change through review like code, and are built with the site (Docusaurus). A broken link fails the build.

## Sources of truth, in order

1. **The product as shipped**, from screenshots, prototypes or a live account. UI labels and status names come from here.
2. **The PRD** and its supporting tickets. Behaviour, rules, permissions and edge cases come from here.
3. **A logged assumption**, when the first two are silent or disagree. Every assumption goes in the clarifying questions list. See [../modules/prd_analysis.md](../modules/prd_analysis.md).

When the UI and the PRD use different words for the same thing, use the UI's word in the docs and log the difference. For example, the Tracks PRD says *In Progress* and the UI says *Pending*, so the docs say *Pending*.

## Principles

- **Don't invent.** No features, limits, numbers or behaviour that aren't in the sources. If a reader would need it and the PRD doesn't say, log a question.
- **One fact, one place.** Each step, rule or warning lives on exactly one page. Others link to it. This keeps pages short and stops them disagreeing after a change.
- **Lead with the reader's goal.** Titles and sections name what the reader wants to do, not how the product is built.
- **Show the result.** After an action, say what the reader should now see.
- **Warn before damage.** Anything that can't be undone gets one warning, placed before the step that does it.
- **Use the PRD's own example.** Pick one concrete scenario from the PRD and follow it through the tutorial.
- **Prefer the safer reading.** When the PRD contradicts itself about data loss, document the reading that protects the reader's data, and log the conflict.

## What not to do

- Don't explain *why* inside a how-to guide, or give steps inside a concept page.
- Don't repeat a guide's steps in the tutorial, or the reverse.
- Don't add future plans from the PRD ("letting the user choose is a future release"). Docs describe what ships.
- Don't mention internal names, ticket numbers, or the PRD itself in user-facing pages.
