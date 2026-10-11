# Project Atlas — ORYNT Detail Demo

> **Demonstration repository:** this project exists to test ORYNT's discovery, ranking, metadata, and repository-detail experience. It is not a production service.

Project Atlas is a small, dependency-light catalog engine for organizing developer tools into searchable collections. It models the kind of well-documented open-source project ORYNT should present clearly.

## Why it exists

A useful discovery listing needs more than a name. This repository deliberately includes:

- a clear summary and use cases;
- multiple languages and technologies;
- an MIT license;
- current repository activity;
- searchable topics and keywords;
- installation and usage instructions;
- maintenance and security notes.

## Features

- Filter projects by category, language, license, health, and keyword.
- Score results with a transparent freshness signal.
- Export a collection as portable JSON.
- Run completely in the browser with no required backend.

## Quick start

```bash
npm install
npm test
npm run demo
```

```ts
import { rankProjects } from "./src/index";

const results = rankProjects(
  [{ name: "Example", votes: 12, saves: 4, updatedAt: new Date().toISOString() }],
  { freshnessWeight: 0.5, saveWeight: 0.35 },
);
```

## Repository health

| Signal | Value |
| --- | --- |
| Status | Actively maintained demo |
| License | MIT |
| Primary language | TypeScript |
| Runtime | Browser / Node.js |
| Accessibility | Semantic HTML, keyboard friendly |
| Security | No credentials, telemetry, or network calls |

## Roadmap

- Screenshot gallery
- Saved collection notes
- Import and export adapters
- Additional ranking strategies

## Contributing

Issues and small pull requests are welcome for testing repository activity and ORYNT synchronization. Please keep the project clearly marked as a demo.

## Security

Do not include secrets or personal data in test collections. Report security concerns through the repository's issue tracker.

## License

MIT © 2026 Site Sculptors.