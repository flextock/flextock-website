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

Firebase **App Hosting** via GitHub Actions (`.github/workflows/deploy.yml`).

| Branch | Environment | Firebase project | Backend ID | Secret |
|--------|-------------|------------------|------------|--------|
| `staging` | Dev | `flextockdevelopment` | `flextock-website-stg` | `FIREBASE_SERVICE_ACCOUNT_DEV` |
| `master` | Live | `cosmic-tenure-290110` | `flextock-website` | `FIREBASE_SERVICE_ACCOUNT_LIVE` |

- Push/merge to `staging` or `master` → lint + build + `firebase deploy --only apphosting`
- PRs → CI only (`.github/workflows/ci.yml`)

Setup (secrets, backends `flextock-website-stg` / `flextock-website`, smoke checklist): [docs/firebase-app-hosting.md](docs/firebase-app-hosting.md).

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```
