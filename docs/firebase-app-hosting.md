# Firebase App Hosting setup

Repo: [flextock/flextock-website](https://github.com/flextock/flextock-website)

## Environments

| Git branch | Firebase alias | Project ID | Backend ID | App Hosting env name | Config | GitHub secret |
|---|---|---|---|---|---|---|
| `staging` | `dev` | `flextockdevelopment` | `flextock-website-stg` | `staging` | `apphosting.staging.yaml` | `FIREBASE_SERVICE_ACCOUNT_DEV` |
| `master` | `live` | `cosmic-tenure-290110` | `flextock-website` | `production` | `apphosting.production.yaml` | `FIREBASE_SERVICE_ACCOUNT_LIVE` |

These match [`.firebaserc`](../.firebaserc).

Both projects must be on the **Blaze** plan (App Hosting uses Cloud Build + Cloud Run).

## Deploy from GitHub Actions (primary)

Workflow: [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml)

```
push / merge → staging  → lint + build + firebase deploy → flextockdevelopment
push / merge → master   → lint + build + firebase deploy → cosmic-tenure-290110
```

PRs still use [`.github/workflows/ci.yml`](../.github/workflows/ci.yml) (`lint` + `build` only).

Deploy uses `firebase deploy --only apphosting:<backendId>` (source upload):

- staging → `apphosting:flextock-website-stg`
- master → `apphosting:flextock-website`

### One-time: GitHub secrets

For each Firebase project, create a GCP service account JSON key and add it as a repo secret:

1. GCP Console → IAM → Service Accounts → Create (e.g. `github-apphosting-deploy`)
2. Grant at least:
   - Firebase Admin (`roles/firebase.admin`) **or** a tighter set that includes App Hosting / Cloud Build / Cloud Run / Storage / Artifact Registry as needed for App Hosting source deploy
   - Service Account User on the App Hosting compute SA (if already created)
3. Create a JSON key → GitHub → **Settings → Secrets and variables → Actions**:
   - Dev project → secret name **`FIREBASE_SERVICE_ACCOUNT_DEV`** (full JSON)
   - Live project → secret name **`FIREBASE_SERVICE_ACCOUNT_LIVE`** (full JSON)

Org path: [flextock/flextock-website secrets](https://github.com/flextock/flextock-website/settings/secrets/actions)

### One-time: App Hosting backend per project

First deploy can create/use the backends below. Prefer creating them once in the console so env names and region are set:

#### Dev (`flextockdevelopment`)

1. Open [App Hosting](https://console.firebase.google.com/project/flextockdevelopment/apphosting)
2. Create backend id **`flextock-website-stg`** (must match `firebase.json`)
3. Prefer **source / CLI** deployment (not required to connect GitHub if CI deploys)
4. Environment name: **`staging`**
5. Region: e.g. `europe-west4`

#### Live (`cosmic-tenure-290110`)

Same with:

- Backend id: **`flextock-website`**
- Environment name: **`production`**

If automatic GitHub rollouts were enabled earlier, turn them **off** so only CI deploys (avoids double rollouts).

### Trigger a deploy

```bash
git push origin staging   # → Deploy workflow (dev)
git push origin master    # → Deploy workflow (live)
```

Or **Actions → Deploy → Run workflow**.

## Local CLI (optional)

```bash
npm i -g firebase-tools@14.9.0
firebase login
firebase use dev    # flextockdevelopment
firebase deploy --only apphosting --non-interactive
```

## Smoke checklist (after first successful Deploy run)

- [ ] Actions → Deploy job is green
- [ ] App Hosting rollout succeeded in Firebase console
- [ ] `/` and `/solutions/cross-border-trade` load on the `*.hosted.app` URL
- [ ] Locale toggle EN / AR
- [ ] Footer dual CTAs
