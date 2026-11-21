# Novi Living

Marketing site for Novi Living — residential property management in Auckland.

Pages: Home, Company (`/about`), Fees, Contact.

## Run locally

```bash
npm install
npm run dev
```

Dev server: [http://127.0.0.1:4637](http://127.0.0.1:4637)

```bash
npm run build
npm run preview
```

## Stack

Vite, React, TypeScript, Tailwind CSS, React Router.

## Vercel (www.noviliving.co.nz)

Build: `npm run build` → `dist/`. Config: `vercel.json` (SPA rewrite + apex → www redirect).

Deploy and ApprovalMax DNS steps: see [docs/vercel-www-dns.md](docs/vercel-www-dns.md).

Contact form (Formspree → hello@noviliving.co.nz): see [docs/contact-form.md](docs/contact-form.md). Set `VITE_FORMSPREE_FORM_ID` on Vercel, then redeploy.

**Vercel cannot import Cursor Origin** — use GitHub: [docs/vercel-via-github.md](docs/vercel-via-github.md).
