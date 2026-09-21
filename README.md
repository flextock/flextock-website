# Flextock website

Marketing site for Flextock (Next.js 16, static export).

**GitHub:** [flextock/flextock-website](https://github.com/flextock/flextock-website)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Same pattern as **merchant-ui**: build static files → Firebase **Hosting** via Workload Identity (no Firebase JSON secrets).

| Branch | Project | Hosting site | Workflow |
|--------|---------|--------------|----------|
| `staging` | `flexdevelopment` | `flextock-website-stg` | `deploy-staging.yml` |
| `master` | `cosmic-tenure-290110` | `flextock-website` | `deploy-live.yml` |

Details: [docs/firebase-app-hosting.md](docs/firebase-app-hosting.md).

## Scripts

```bash
npm run dev
npm run build   # writes static site to out/
npm run lint
```
