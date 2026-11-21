# Deploy www.noviliving.co.nz on Vercel

Vite SPA: `npm run build` → `dist/`. SPA rewrites and apex→www redirect are in `vercel.json`.

## Import from Git (required for Redeploy / Formspree env)

Prebuilt or temporary uploads **cannot** Redeploy after you add env vars. Connect Git and create a **new** deployment:

1. Open [vercel.com/new](https://vercel.com/new) → **Add New… → Project** if you are already in the dashboard.
2. Connect **Cursor Origin** / Git if prompted → import **`hello-brsz5/novi-living`**.
3. Branch: **`cursor/novi-living-site-dff1`** (Formspree at commit `88f67ce`). Framework **Vite**, build `npm run build`, output `dist`, root `.`.
4. Add env `VITE_FORMSPREE_FORM_ID` (see [contact-form.md](contact-form.md)) → **Deploy**.
5. **Settings → Domains → Add** `www.noviliving.co.nz` (and optionally apex) on this project.

Full click-path for the Formspree env bake-in: [contact-form.md](contact-form.md#if-redeploy-says-prebuilt-deployments-cannot-be-redeployed).
## DNS at ApprovalMax (paste after adding the domain in Vercel)

Vercel shows the **exact** CNAME/A values under **Settings → Domains** for this project. Copy those — do not reuse another project’s target.

### Required for www

| Type  | Name / Host | Value |
|-------|-------------|--------|
| CNAME | `www`       | **\<paste Vercel’s www CNAME target\>** (example shape: `xxxx.vercel-dns-017.com` or as shown in the Domains panel) |

TTL: 300–3600s is fine. Remove any old A/AAAA/CNAME for `www` first.

### Recommended for apex `noviliving.co.nz` → www

Add the apex domain in Vercel Domains as well, set **www** as primary (redirect apex → www), then at ApprovalMax:

| Type | Name / Host | Value |
|------|-------------|--------|
| A    | `@` (apex)  | **\<paste Vercel’s apex A value\>** (often shown in Domains; commonly `76.76.21.21` but confirm in the UI) |

Remove conflicting apex A/AAAA records. Do **not** invent or copy IPs from another site.

### Email / other records

Leave MX/TXT for email and third parties untouched unless Vercel asks for a verification TXT.
