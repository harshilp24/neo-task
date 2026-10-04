# Workflow: review only

Use when asked to review existing pages or a draft. Change nothing; report findings.

## Steps

1. Identify each page's type (tutorial, how-to, explanation, reference, troubleshooting, release note).
2. Check it against its contract in [../modules/doc_contracts/](../modules/doc_contracts/).
3. Run every check in [../quality/checklist.md](../quality/checklist.md).
4. If the PRD is available, check every claim traces to it or to a logged assumption.

## Report format

One line per finding, most serious first:

| Severity | Page and section | Finding | Fix |
|---|---|---|---|
| High | faq.mdx › How do I delete a track? | Warning comes after the steps | Move the warning above step 1 |
| Medium | get-started.mdx › intro | Uses "seamlessly" | Remove the word |

Severity:

- **High:** wrong or invented facts, missing warnings before destructive steps, broken links
- **Medium:** wrong page type for the content, duplicated steps, banned patterns
- **Low:** wording, length, formatting
