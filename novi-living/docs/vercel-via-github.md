# Get www.noviliving.co.nz on Vercel (GitHub path)

Cursor Origin **cannot** be imported in Vercel (“repository ID is required for Cursor deployments”). Use **GitHub**.

## 1. Create an empty GitHub repo

1. Open https://github.com/new  
2. Repository name: **`novi-living`**  
3. Private  
4. **Do not** add README / .gitignore / license  
5. Create repository  

## 2. Push Origin `main` to GitHub

Your empty GitHub repo: https://github.com/jason97741018-beep/novi-living  

On your Mac (Terminal):

```bash
git clone https://origin.cursor.com/hello-brsz5/novi-living.git
cd novi-living
git checkout main
git remote add github https://github.com/jason97741018-beep/novi-living.git
git push -u github main
```

If GitHub asks for a password, use a **Personal Access Token** (GitHub → Settings → Developer settings → Personal access tokens) with `repo` scope — not your GitHub password. Or install GitHub CLI and run `gh auth login`, then `git push -u github main`.

## 3. Import on Vercel from GitHub (not Cursor)

1. Open https://vercel.com/new  
2. Choose **GitHub** (not Cursor / Origin)  
3. Import **`novi-living`** · branch **`main`**  
4. Framework Vite · Build `npm run build` · Output `dist`  
5. Environment variable:  
   **Name:** `VITE_FORMSPREE_FORM_ID`  
   **Value:** `xaeodoed`  
   (only the id — not `https://formspree.io/f/xaeodoed`)  
6. **Deploy**  
7. Project → **Settings → Domains** → add **`www.noviliving.co.nz`**

## Notes

- Do not use Cursor’s Deploy button for this.  
- The site code accepts either `xaeodoed` or a full Formspree URL in that env var (it strips the URL to the id). Still prefer the id only.  
- After this GitHub-backed project exists, later pushes to `main` on GitHub can auto-deploy.
