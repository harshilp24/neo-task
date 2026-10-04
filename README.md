# Neo docs: Tasket and Tracks

Harshil's submission for the Neo Senior Technical Writer case study.

- **Live site:** https://build-nine-sooty.vercel.app
- **Case study page:** https://build-nine-sooty.vercel.app/case-study/

## What's here

| Folder | What it holds |
|---|---|
| `docs/tasket/` | The Tasket overview and the Tracks docs: tutorial, how-to guide, concept page, reference, FAQ and troubleshooting |
| `blog/` | The changelog, including the Tracks release note |
| `write-docs/` | The skill that drafts these docs from a PRD. Start with [write-docs/README.md](write-docs/README.md) |
| `write-docs/examples/tracks/` | The Tracks PRD, the clarifying questions and the page plan |
| `static/case-study/` | The page that walks through the three tasks |
| `src/` | Site theme and components |

## Run it locally

```bash
npm install
npm start
```

The build fails on any broken link or anchor:

```bash
npm run build
```

Search uses Algolia DocSearch. Set `ALGOLIA_APP_ID`, `ALGOLIA_SEARCH_API_KEY` and `ALGOLIA_INDEX_NAME` to turn it on.
