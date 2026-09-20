# Wedding Invitation

Two invitation pages served from a single Vite + React app:

- `/invite-stay` — full invitation for guests staying over (`pages/Wedding.tsx`)
- `/invite-day` — day-guest invitation (`pages/WeddingDayGuest.tsx`)

Any other path redirects to `/invite-stay`.

## Development

```bash
npm install
npm run dev
```

## Build & deploy

```bash
npm run build
```

The build copies `dist/index.html` to `dist/404.html` so GitHub Pages can serve the
client-side routes directly (e.g. a hard refresh on `/invite-day`).
Pushing to `main` deploys via `.github/workflows/deploy.yml`.

The previous architecture portfolio lives on the `portfolio` branch.
