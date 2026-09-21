# Firebase Hosting deploy (merchant-ui pattern)

Repo: [flextock/flextock-website](https://github.com/flextock/flextock-website)

This site deploys like **merchant-ui**: static build → classic **Firebase Hosting** with Workload Identity Federation (no JSON service-account secrets).

## Environments

| Branch | Workflow | Firebase project | Hosting site | Auth |
|--------|----------|------------------|--------------|------|
| `staging` | `deploy-staging.yml` | `flexdevelopment` | `flextock-website-stg` | WIF → `github-deploy-gcloud-workflow@flexdevelopment.iam.gserviceaccount.com` |
| `master` | `deploy-live.yml` | `cosmic-tenure-290110` | `flextock-website` | WIF → `flextock-project-deployments@cosmic-tenure-290110.iam.gserviceaccount.com` |

Same WIF pools / deploy SAs as merchant-ui.

## One-time setup

### 1. Create Hosting sites (if missing)

```bash
npx firebase-tools@13 hosting:sites:create flextock-website-stg --project flexdevelopment
npx firebase-tools@13 hosting:sites:create flextock-website --project cosmic-tenure-290110
```

Or Firebase Console → Hosting → Add site.

### 2. Allow this repo on Workload Identity

If deploy fails with WIF / `Unable to acquire impersonated credentials` / attribute condition errors, an org admin must allow **`flextock/flextock-website`** on the same GitHub→GCP pools used by merchant-ui (same as other Flextock UI repos).

### 3. No GitHub secrets required for Firebase

Unlike App Hosting JSON keys, Hosting deploy uses OIDC (`id-token: write`) + `google-github-actions/auth@v2`.

(`FIREBASE_SERVICE_ACCOUNT_DEV` / `_LIVE` are unused and can be deleted.)

## How deploy works

1. `npm run build` → Next.js `output: "export"` writes static files to `out/`
2. `firebase deploy --only hosting:<site> --project <project>` uploads `out/` (same as merchant-ui’s `dist/…`)

## Local deploy (optional)

```bash
npm ci
npm run build
npx firebase-tools@13 login
npx firebase-tools@13 deploy --only hosting:flextock-website-stg --project flexdevelopment
```

## Smoke checklist

- [ ] Actions → **Deploy staging** green
- [ ] Site opens on the Firebase Hosting URL for `flextock-website-stg`
- [ ] `/` and `/solutions/cross-border-trade` work
- [ ] Locale toggle EN / AR
