# Contact form → hello@noviliving.co.nz

The site uses **Formspree** so the Vite SPA on Vercel can email submissions without putting an API key in the browser or git.

## Env var (Vercel)

| Name | Where | Value |
|------|--------|--------|
| `VITE_FORMSPREE_FORM_ID` | Vercel → Project → **Settings → Environment Variables** (Production, Preview, Development) | **Form id only** — e.g. `xaeodoed`. Not the full URL. If your endpoint is `https://formspree.io/f/xaeodoed`, the value is `xaeodoed`. |

Vite inlines `VITE_*` at **build** time. After adding or changing the variable, **Redeploy** the project.

If the env var is missing, the site defaults to form id **`xaeodoed`** (emails hello@noviliving.co.nz via Formspree). Env still overrides when set.

**Important:** a Vercel **prebuilt** upload of an older build will keep the old mailto form until you ship a **new** build (GitHub Import, CLI upload of a fresh `dist`, or claim a new temporary deploy). Hardcoding only helps once that new build is live.

Local: copy `.env.example` → `.env.local` and fill the same name (`.env.local` is gitignored).

## Signup steps (you do this once)

1. Sign up at [formspree.io](https://formspree.io) with **hello@noviliving.co.nz** (or any account that can receive form alerts).
2. **New form** → set the email destination to **hello@noviliving.co.nz**.
3. Copy the form id from the endpoint URL: `https://formspree.io/f/<FORM_ID>`.
4. In Vercel: add `VITE_FORMSPREE_FORM_ID` = `<FORM_ID>` for Production (and Preview if you want).
5. Confirm Formspree allows your domain (`www.noviliving.co.nz` / `noviliving.co.nz`) under the form’s settings if it asks for allowed origins.
6. Create a **new Git-backed deployment** that builds with that env (see below). Prebuilt/temporary deploys cannot Redeploy.
7. Submit a test from https://www.noviliving.co.nz/contact and check the inbox (and spam).

No Resend/API keys are required for this path. Do not commit real form ids into git if you prefer to keep them only in Vercel; the id is public in the client bundle once deployed.

## Deploy via GitHub (Vercel cannot import Cursor Origin)

If Vercel shows **“A repository ID is required for Cursor deployments”**, do **not** import Cursor Origin and do **not** use Cursor Deploy. Use **GitHub**:

1. [github.com/new](https://github.com/new) → private repo **`novi-living`** (empty, no README).
2. Push Origin `main` to that GitHub repo from your computer:

```bash
git clone https://origin.cursor.com/hello-brsz5/novi-living.git
cd novi-living
git checkout main
git remote add github https://github.com/<your-github-user>/novi-living.git
git push -u github main
```

3. [vercel.com/new](https://vercel.com/new) → import the **GitHub** repo → branch **`main`**.
4. Vite · `npm run build` · output `dist`.
5. Env `VITE_FORMSPREE_FORM_ID` = **`xaeodoed`** (id only).
6. **Deploy** → **Settings → Domains** → add `www.noviliving.co.nz`.

The app accepts a form id, or will strip a pasted `https://formspree.io/f/...` URL down to the id — still set **`xaeodoed`** in Vercel.