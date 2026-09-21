# Flextock website

Marketing site for Flextock (Next.js 16).

**GitHub:** [flextock/flextock-website](https://github.com/flextock/flextock-website)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Production deploys use **Firebase App Hosting** (not Vercel).

| Branch | Environment | Firebase project |
|--------|-------------|------------------|
| `staging` | Dev | `flextock-4373e` |
| `master` | Live | `cosmic-tenure-290110` |

- Merge to `staging` → automatic App Hosting rollout (dev)
- Merge to `master` → automatic App Hosting rollout (live)
- PRs into those branches run CI (`lint` + `build`) via `.github/workflows/ci.yml`

Full setup (console backends, environment names, smoke checklist): [docs/firebase-app-hosting.md](docs/firebase-app-hosting.md).

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
