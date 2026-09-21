# Firebase App Hosting setup

Repo: [flextock/flextock-website](https://github.com/flextock/flextock-website)

## Environments

| Git branch | Firebase alias | Project ID | App Hosting env name | Config |
|---|---|---|---|---|
| `staging` | `dev` | `flextock-4373e` | `staging` | `apphosting.staging.yaml` |
| `master` | `live` | `cosmic-tenure-290110` | `production` | `apphosting.production.yaml` |

Project IDs come from the existing Flextock landing-page Firebase setup. Confirm they are the intended **dev** / **live** projects for this site (update `.firebaserc` if not).

Both projects must be on the **Blaze** plan (App Hosting uses Cloud Build + Cloud Run).

## Deploy-on-merge (automatic)

Deploy is **not** a custom GitHub Actions deploy job. Firebase App Hosting rolls out when the backend’s live branch receives a push/merge:

```
feature → PR → staging  → auto deploy DEV
staging → PR → master   → auto deploy LIVE
```

PR quality gate: `.github/workflows/ci.yml` runs `lint` + `build` on PRs into `staging` and `master`.

## One-time console setup (required)

Do this once per Firebase project after the repo lives at `flextock/flextock-website`.

### A. Dev project (`flextock-4373e`)

1. Open [Firebase console](https://console.firebase.google.com/) → project `flextock-4373e`.
2. Go to **App Hosting** → **Get started** / **Create backend**.
3. Connect GitHub (Developer Connect) → grant the Firebase GitHub App access to **`flextock/flextock-website`**.
4. Backend settings:
   - Root directory: `/`
   - Live branch: **`staging`**
   - Automatic rollouts: **On**
   - Environment name: **`staging`** (must match `apphosting.staging.yaml`)
   - Region: pick closest to users (e.g. `europe-west4` or `me-west1` if available)
5. Create / finish first rollout. Save the `*.hosted.app` URL.

### B. Live project (`cosmic-tenure-290110`)

Same steps with:

- Live branch: **`master`**
- Environment name: **`production`**
- Automatic rollouts: **On**

### C. After backends exist

1. Merge or push a commit that includes `apphosting*.yaml` so both backends pick up env configs.
2. Watch rollouts in Firebase → App Hosting → backend → Rollouts (also surfaces as a GitHub check).
3. Optional later: attach custom domains (staging subdomain + `www.flextock.com`) under each backend’s domain settings.

## CLI notes

```bash
npm i -g firebase-tools
firebase login
firebase use dev    # flextock-4373e
firebase use live   # cosmic-tenure-290110
```

App Hosting backends are primarily managed in the console / `firebase apphosting:` CLI; day-to-day deploys still happen via Git push to `staging` / `master`.

## Smoke checklist (after first rollouts)

- [ ] `/` hero + engine + system + proof sections
- [ ] `/solutions/cross-border-trade` Flexborders page
- [ ] Locale toggle EN / AR
- [ ] Footer dual CTAs (Talk to our team / See how it works)
- [ ] Staging URL reflects `staging` merges; live URL reflects `master` merges
