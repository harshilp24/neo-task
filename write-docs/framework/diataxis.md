# Diátaxis

Every page is one of four types, chosen by what the reader needs at that moment. Most unclear docs mix types: steps interrupted by background, rules buried in a story, a tutorial that tries to cover every option.

## The compass

|                         | Learning (studying) | Working (applying) |
|-------------------------|---------------------|--------------------|
| **Doing** (action)      | Tutorial            | How-to guide       |
| **Knowing** (cognition) | Explanation         | Reference          |

If a sentence answers a different question from the rest of its page, move it to the page that answers that question, and link to it.

## The four types at Neo

| Type | Reader | Neo page | Contract |
|---|---|---|---|
| Tutorial | New to the feature; wants to set it up and see it work | *Get started with <feature>* | [tutorial.md](../modules/doc_contracts/tutorial.md) |
| How-to guide | Knows the feature; has one goal now | Named for the job, such as *Manage tasks on tracks* | [how_to_guide.md](../modules/doc_contracts/how_to_guide.md) |
| Explanation | Stepping back to understand why and when | *What are <feature>?* | [explanation.md](../modules/doc_contracts/explanation.md) |
| Reference | Looking up a fact: a status, permission, limit or effect | *<Feature> reference* | [reference.md](../modules/doc_contracts/reference.md) |

Two more page types sit alongside them:

- **FAQ**: one-sentence answers to "How do I…?" questions, then steps. Holds rare changes to the feature, such as rename, delete and turn off. Written for search and AI answer engines as well as people. Contract: [faq.md](../modules/doc_contracts/faq.md).
- **Troubleshooting**: issue, cause, solution. A how-to for things going wrong. Contract: [troubleshooting.md](../modules/doc_contracts/troubleshooting.md).
- **Product overview**: the landing page for a product, with a card for every page. Contract: [product_overview.md](../modules/doc_contracts/product_overview.md).
- **Release note**: not a Diátaxis type. It tells existing users what changed and links into the four types. Contract: [release_note.md](../modules/doc_contracts/release_note.md).

## How granular a guide should be

Write a guide for a **meaningful goal**, not for every button. Diátaxis warns against guides at the level of "turn on a device with the power switch".

- Group actions that change the **same object** and happen at the **same frequency**. For Tracks: changing a task's status on a track (daily) is the guide.
- Rare, one-off changes to the feature (rename, reorder, delete, turn off) are **FAQ questions**, not a guide. A destructive one keeps its warning before the steps, and its full effect goes in the reference.
- If a guide's steps change by role or by state, use a section or tabs for the real fork. Don't write a near-copy.

## Mapping to the case study deliverables

| Deliverable in the brief | Written for | Diátaxis pages |
|---|---|---|
| User-facing feature document | Someone using the feature for the first time | Tutorial + explanation |
| How-to guide | Someone with a specific task in hand | The how-to guide, plus the FAQ for rare changes |
| Release note | An existing user scanning what changed | Release note, linking to the above |

The reference, FAQ and troubleshooting pages back up all three.
