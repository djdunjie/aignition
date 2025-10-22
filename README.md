# AIgnition

AIgnition is a simple web platform created as part of a university project.  
The project demonstrates how businesses can explore AI solutions, starting with a landing page.

---

## 🚀 Tech Stack
- [Next.js 14](https://nextjs.org/) (React Framework)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/)

---

## 📦 Getting Started

### 1) Clone the repository
```bash
git clone https://github.com/djdunjie/aignition.git
cd aignition
````

### 2) Install dependencies

```bash
npm ci   # or: npm install
```

### 3) Run locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🌐 Deployment (Hostinger, static export)

This project is configured for **static export** and hosted on **Hostinger Business Web Hosting**.

### Build

```bash
npm run build
```

This generates a static site in `/out`.

### Manual deploy (fallback)

1. Zip the **contents** of `/out` (files inside, not the folder itself).
2. Hostinger → Files → File Manager → `public_html/`
3. Upload the ZIP and **Extract** (tick “Overwrite existing files”).
4. Visit [https://aignition.org](https://aignition.org) (hard refresh if needed).

### CI deploy (recommended)

GitHub Actions automatically builds & deploys on every push to `main`:

* Workflow: `.github/workflows/deploy.yml`
* Secrets required (Repository → Settings → Secrets and variables → Actions):

  * `FTP_SERVER` – Hostinger FTP hostname/IP
  * `FTP_USERNAME` – your FTP user
  * `FTP_PASSWORD` – FTP password (set/reset in Hostinger)
  * `FTP_REMOTE_DIR` – `/public_html`

The workflow runs:

* `npm ci`
* `npm run build` (which runs `next build && next export`)
* Uploads the contents of `/out` to `/public_html` via FTP/FTPS.

> **Note**
>
> * To completely clean old files after a major restructure, set `dangerous-clean-slate: true` for one run, then switch it back to `false`.
> * Since this is a static export, avoid SSR-only features (API routes, `getServerSideProps`, image optimization).
> * `next.config.js` sets `images.unoptimized = true` for export compatibility.

---

## 🔁 Release Checklist

1. `git pull`
2. `npm ci`
3. Make changes & test locally
4. `git commit -m "feat/fix: ..."` → `git push`
5. GitHub → Actions → verify **Deploy static site to Hostinger** succeeds
6. Visit [https://aignition.org](https://aignition.org) and hard refresh (Ctrl/Cmd+Shift+R)

---

## 📂 Project Structure

```
aignition/
 ├─ components/      # Reusable UI components
 ├─ pages/           # Next.js pages
 ├─ public/          # Static assets (logo.png, favicon.ico, etc.)
 ├─ styles/          # Global styles
 ├─ .github/workflows/deploy.yml  # CI deploy to Hostinger
 ├─ package.json
 └─ README.md
```

---

## 📝 License

MIT License