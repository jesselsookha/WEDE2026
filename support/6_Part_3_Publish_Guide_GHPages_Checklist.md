# Publishing Your Assignment Website via GitHub Pages

## ◆ Introduction: What Changed and Why

Recently, you were given a guide that suggested **Netlify** as a way to publish your website from the private EMGPSD organisation repository.

We have since tested that approach and identified a problem:

- The EMGPSD organisation owner (your lecturer) **did** approve the Netlify GitHub App for the organisation and granted access to all repositories.
- However, **Netlify's Free plan does not allow publishing from private organisation repositories**. When you attempt to import such a repository, Netlify requires an upgrade to a **Pro** account.
- This is a **Netlify billing limitation**, not a GitHub permissions problem. The GitHub-side approval was necessary but not sufficient.

**The new approach**: You will publish a **public copy** of your website on **your own GitHub account** using **GitHub Pages**. GitHub Pages is free for public repositories and does not require any organisation-level approval.

> **Important**: The private EMGPSD organisation repository remains your **official submission**. The lecturer marks what is in that repository. The public copy exists only so that your website has a live URL. Any changes to your official submission must be manually copied to the public copy and pushed again (see Section 7).

---

## ◆ Terminology Used in This Guide

| Term | Meaning |
|------|---------|
| **Official folder** | The project folder on your computer that is connected to the EMGPSD organisation repository. This is your **submission**. Do not modify its Git remote. |
| **Pages version** | A separate copy of your project, in its own folder, connected to **your own public GitHub repository**. This is what gets published as your live website. |

You will have **two separate folders** on your computer, each with its own hidden `.git` folder, each connected to a different repository.

---

## ◆ Before You Begin: What You Need

| Check Item | Requirement |
|------------|-------------|
| GitHub account | Your own personal GitHub account |
| Official project | A local copy of your project, already connected to the EMGPSD repository |
| `index.html` location | Must be at the **root** of the project folder (not inside a subfolder) |
| `404.html` location | Must also be at the **root** of the project folder |
| Asset paths | All links to CSS, JS, and images must be **relative** (not starting with `/`) |

### Correct folder structures

**Structure A — content pages in a subfolder, but entry and 404 files at root:**

```
wede5020-2026-part-3-[username]/
├── index.html                      ← entry file, root
├── 404.html                        ← must be at root for GitHub Pages
├── pages/
│   ├── about.html
│   ├── services.html
│   ├── gallery.html
│   ├── enquiry.html
│   ├── response.html
│   └── contact.html
├── css/
│   └── styles.css
├── js/
│   ├── script.js
│   └── app.js
├── assets/
│   └── images/
│       ├── logo.jpg
│       ├── icon.jpg
│       └── pages_images/
│           ├── image1.jpg
│           └── image2.jpg
├── sitemap.xml
├── robots.txt
└── README.md
```

**Structure B — flat, everything at root:**

```
wede5020-2026-part-3-[username]/
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── gallery.html
├── 404.html
├── css/
│   └── styles.css
├── js/
│   ├── script.js
│   └── app.js
├── images/
│       ├── image1.jpg
│       └── image2.jpg
├── assets/
│       ├── logo.jpg
│       └── icon.jpg
├── sitemap.xml
├── robots.txt
└── README.md
```

**✗ Incorrect — `index.html` or `404.html` inside a subfolder:**

```
wede5020-2026-part-3-[username]/
└── pages/
    ├── index.html      ← wrong: GitHub Pages will not find this automatically
    └── 404.html        ← wrong: custom 404 will not be served
```

If your `index.html` or `404.html` is inside `pages/`, move it to the repository root. If you cannot move it, GitHub Pages will show a 404 at the base URL and will not serve your custom 404 page.

---

## ◆ Section 2: Create the Public Repository (Empty)

1. On GitHub, click **New repository**.
2. Name it something like `wede5020-part-3-website-pages` (any name is fine; it does not need to match the organisation repository name).
3. Set visibility to **Public**.
4. **Do NOT** check "Add a README file", "Add .gitignore", or "Choose a license". Leave every initialisation option unchecked.
5. Click **Create repository**.

GitHub will show a page with push instructions. Keep this page open — you will use the commands shown there in Section 4.

---

## ◆ Section 3: Create Your Pages Version Folder

> **⚠ Critical safety rule**
> You will create a **new folder** that is a copy of your project. Your **official folder** (the one connected to the EMGPSD repository) must **not** be modified during this section. Do not delete the `.git` folder in either folder.

### Step A — Create the destination folder

1. In File Explorer (Windows) or Finder (macOS), create a new empty folder named:

   ```
   wede5020-2026-part-3-[username]-for-Pages
   ```

2. Place this folder **outside** your official project folder. Side-by-side is fine; **nested inside the official folder is not**.
3. The `-for-Pages` suffix is important. It makes it immediately obvious *which folder is which* when you open them in VS Code or File Explorer.

### Step B — Copy the contents of the official folder into it

1. Open your **official project folder** (the one connected to EMGPSD).
2. Select **all items inside** the folder — files and subfolders — but **not the folder itself**. On Windows: `Ctrl+A`. On macOS: `Cmd+A`.
3. Copy.
4. Open the `-for-Pages` folder and paste.
5. You now have a `-for-Pages` folder containing `index.html`, `css/`, `js/`, `assets/`, etc., **and** a hidden `.git` folder.

> **Why is there a `.git` folder?** Select-all inside the official folder includes its hidden `.git` folder. That is intentional — the `.git` inside the `-for-Pages` folder is a **copy** of your project history. In Section 4, you will detach it from the EMGPSD remote and point it at your public repository.
>
> At this point you have **two independent `.git` folders**:
> - One inside the **official folder** → still connected to the EMGPSD repository (untouched).
> - One inside the **`-for-Pages` folder** → a copy, about to be re-pointed to your public repository.

### Step C — Open the Pages version in VS Code

1. Open **VS Code**.
2. File → Open Folder → select the **`-for-Pages` folder** (not the official folder).
3. The VS Code title bar and Explorer sidebar should show `...-for-Pages`. This is your visual confirmation that you are in the right folder.
4. Open a terminal: **Terminal → New Terminal**. The terminal will start in the `-for-Pages` folder.
5. Confirm the terminal location:
   - macOS / Linux: run `pwd` — the output must end with `-for-Pages`.
   - Windows: run `cd` with no arguments — the output must end with `-for-Pages`.

**Do not run any Git commands until you have confirmed the terminal is inside the `-for-Pages` folder.**

---

## ◆ Section 4: Point the Pages Version at Your Public Repository

All commands in this section must be run in the **terminal inside the `-for-Pages` folder**.

### Step 1 — Check the current remote

```bash
git remote -v
```

Expected output:

```
origin  https://github.com/EMGPSD/wede5020-2026-part-3-[username].git (fetch)
origin  https://github.com/EMGPSD/wede5020-2026-part-3-[username].git (push)
```

This confirms the copy is still pointing at the organisation repository. You will now change that.

### Step 2 — Remove the old remote

```bash
git remote remove origin
```

This usually produces no output. Verify it worked:

```bash
git remote -v
```

Expected output:

```
# No output
```

If nothing appears, the old remote was removed.

### Step 3 — Add your public repository as the new remote

Replace the URL below with the HTTPS URL of **your own public repository** (the one you created in Section 2):

```bash
git remote add origin https://github.com/[your-username]/[your-repo-name].git
```

Verify:

```bash
git remote -v
```

Expected output:

```
origin  https://github.com/[your-username]/[your-repo-name].git (fetch)
origin  https://github.com/[your-username]/[your-repo-name].git (push)
```

### Step 4 — Push to the public repository

```bash
git push -u origin main
```

Example output:

```
Enumerating objects: ...
Writing objects: ...
To https://github.com/[your-username]/[your-repo-name].git
 * [new branch]      main -> main
```

> **⚠ Do not run `git pull --allow-unrelated-histories`.**
> The public repository is **empty** (no README, no starter files), so there is nothing to pull. If you run the pull command, Git will report that it cannot find the remote `main` branch. Skip that step entirely.

After the push succeeds, open your public repository on GitHub. You should see **all your project files** and **your full commit history**.

---

## ◆ Section 5: Enable GitHub Pages

1. On your public repository page, click **Settings**.
   (You have Admin rights here because you own the repository.)
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment**:
   - **Source**: select **Deploy from a branch**.
   - **Branch**: select **main**.
   - **Folder**: select **/ (root)**.
4. Click **Save**.
5. Wait 1–2 minutes. Refresh the Pages settings page. A banner will appear showing your live URL:

   ```
   https://[your-username].github.io/[your-repo-name]/
   ```

Click that URL. Your website is now live.

---

## ◆ Section 6: Verify the Live Site

Check each item on the **live website** (not your local files):

| # | Check Item | Pass Criterion |
|---|------------|----------------|
| 1 | Base URL loads | `https://[your-username].github.io/[your-repo-name]/` shows the homepage, not a 404 |
| 2 | CSS styles | Layout and colours are normal, not plain text — confirms relative paths are correct |
| 3 | Images | Logo, gallery, and other images display correctly |
| 4 | Page navigation | Links between pages resolve under the `/repo-name/` subpath |
| 5 | JavaScript functionality | Interactive features (form validation, menus) work |
| 6 | 404 page | Entering a non-existent path under the repo URL shows your custom 404 (only if `404.html` is at the root) |
| 7 | Mobile display | Narrowing the browser window shows the responsive layout |

**Most common failure**: The homepage loads but CSS and images are missing. This is almost always caused by **absolute paths** (e.g. `/css/styles.css`) instead of **relative paths** (e.g. `css/styles.css` or `./css/styles.css`). GitHub Pages serves your site under a subpath (`/repo-name/`), so a leading `/` points to the domain root, not your repository root. Change every such reference to a relative path and push again.

---

## ◆ Section 7: Keeping the Pages Version in Sync

Your **official folder** is the submission your lecturer marks. Your **`-for-Pages` folder** is the live website. They are independent — changes do not flow between them automatically.

### When to sync

Whenever you change your official project (the EMGPSD repository) and want those changes reflected on the live website, follow the workflow below.

### Recommended workflow — copy only the changed files

1. In your **official folder**, commit and push your changes to the EMGPSD repository as normal. This is your submission.
2. Identify **which files you changed** (e.g. `index.html`, `pages/about.html`, `css/styles.css`).
3. Open the official folder and the `-for-Pages` folder **side by side** in two File Explorer / Finder windows.
4. Navigate to the same relative location in both windows.
5. Copy the changed files from the official folder into the `-for-Pages` folder, replacing when prompted.
6. Switch to VS Code (with the `-for-Pages` folder open) and run:

   ```bash
   git status
   ```

   **Check the output carefully:**
   - It should list **only the files you actually changed**.
   - It should **not** list `.git` as modified.
   - If `git status` shows nothing, your files did not actually copy — check the folder paths.

7. Stage, commit, and push:

   ```bash
   git add .
   git commit -m "Sync from official submission"
   git push
   ```

8. Wait ~1 minute for GitHub Pages to rebuild, then refresh the live URL and re-run the Section 6 checklist.

### ⚠ Never copy the `.git` folder between folders

Your official folder and your `-for-Pages` folder each have their own `.git` folder, linked to **different repositories**:

- Official `.git` → EMGPSD organisation repository (private).
- `-for-Pages` `.git` → your public repository.

If you copy the official `.git` over the `-for-Pages` one, the Pages version will start pointing at the EMGPSD repository instead of your public repository. Your next push will fail, or worse, push to the wrong place.

**The safe rule**: When syncing updates, copy **the specific files you changed** — never the whole folder. After copying, run `git status` in the `-for-Pages` folder. It should show exactly the files you edited, nothing more, and it should **not** list `.git` as modified.

### If something goes wrong — reset the Pages version

If you accidentally copy the wrong `.git` and the Pages version becomes confused, you can reset it cleanly:

1. **Delete the `-for-Pages` folder entirely** (not the official folder — that one stays untouched).
2. Recreate it as in Section 3 Steps A and B (copy the contents of the official folder into a new `-for-Pages` folder).
3. Open it in VS Code, then repeat Section 4 (remove origin → add origin → push).
4. Because the public repository already has a `main` branch from your previous push, you will need to force-push:

   ```bash
   git push -u origin main --force
   ```

   The `--force` overwrites the public repository's history with the fresh copy. This is safe because the public repository only holds the live website — nothing of value is lost.

---

## ◆ Section 8: Common Issues Quick Reference

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| `git remote -v` inside the **official folder** shows the public repository URL | You ran the Section 4 commands in the wrong folder | In the official folder, remove the public origin and re-add the EMGPSD URL. Then redo Section 4 inside the `-for-Pages` folder. |
| `git remote add origin` → "remote origin already exists" | You did not run `git remote remove origin` first, or you are in the wrong folder | Run `git remote remove origin`, then add the correct URL. |
| `git pull` in the Pages version reports "couldn't find remote ref main" | The public repository is empty (correct) — there is nothing to pull | Skip the pull step entirely. Just `git push -u origin main`. |
| Homepage 404 on GitHub Pages | `index.html` not at root, or Pages not enabled, or the build is still running | Check the file location; wait 2 minutes; check Settings → Pages. |
| CSS/images missing on live site | Absolute paths (`/css/...`) | Change to relative (`css/...`) and push again. |
| Custom 404 not shown | `404.html` is inside `pages/` | Move `404.html` to the repository root. |
| `git status` shows many unexpected changes after syncing, or push fails | You copied the official `.git` over the `-for-Pages` `.git` | Reset the Pages version using the workflow in Section 7 ("If something goes wrong"). |
| `git push` rejected with "non-fast-forward" after a reset | The public repository already has a `main` branch from the previous push | Use `git push -u origin main --force`. |
| Changes not appearing on the live site | Pushed to the wrong branch, or Pages is still building | Check the Pages branch setting; check the Actions/Pages build status; wait 1–2 minutes. |

---

## ◆ Section 9: Why Not Publish the Organisation Repository Directly?

For transparency, here is why the public-copy approach is necessary:

- **GitHub Pages on a private repository** requires a **paid GitHub plan** (Pro, Team, or Enterprise) for the organisation. On the free organisation plan, Pages is only available for **public** repositories.
- Enabling Pages on the organisation's private repositories would also require **Admin access per repository**. Students have **Write** access, which allows pushing code but not changing Settings. A lecturer could enable Pages per repository, but doing it for approximately 120 repositories manually is error-prone and creates a single point of failure.
- **Netlify's Free plan** blocks private organisation repositories, as confirmed by testing. An upgrade to Netlify Pro would be required, which is not part of this module.

The public-copy-on-personal-account approach is the most reliable free path for this cohort. It also teaches you the public-repository workflow you will use in professional projects.

---

## ◆ Summary Checklist

Before you consider the publishing task complete, confirm:

- [ ] Public repository created (empty, no README/license/.gitignore)
- [ ] `-for-Pages` folder created outside the official folder
- [ ] Contents of official folder copied into `-for-Pages` (including the copied `.git`)
- [ ] Terminal in VS Code confirmed to be inside `-for-Pages`
- [ ] `git remote remove origin` and `git remote add origin <public-repo-url>` completed
- [ ] `git push -u origin main` succeeded; public repository shows all files and full history
- [ ] GitHub Pages enabled (Settings → Pages → Deploy from a branch → `main` → `/ (root)`)
- [ ] Live URL opens and passes all Section 6 checks
- [ ] Official folder's remote still points to the EMGPSD repository (`git remote -v` in the official folder)
- [ ] You understand the sync workflow in Section 7 for future updates

Once all items are checked, your website is published and your official submission is intact.