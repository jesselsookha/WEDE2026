# Guide to Publishing the Assignment Website (via Netlify)

## Applicable Scenario

- The assignment code is in a **private repository** under the organization
- You have **write access** to the repository (can push code), but **no admin rights** (cannot access Settings)
- The website is **pure static HTML/CSS/JS**, with no build step required

## Before You Begin: Confirm Two Things

| Check Item | Criterion |
|------------|-----------|
| ✓ Repository access | You can successfully push code to the organization's private repository |
| ✓ Entry file location | `index.html` is at the **root of your GitHub repository** (not inside a subfolder such as `pages/`) |

Your repository lives at a URL like:

```
https://github.com/EMGPSD/wede5020-2026-part-3-[username]
```

The `index.html` must sit at the top level of that repository. The two acceptable structures look like this:

### ✓ Correct — `index.html` at repository root

```
wede5020-2026-part-3-[username]/   ← this is your GitHub repo
├── index.html                      ← entry file, correct location
├── pages/
│   ├── about.html
│   ├── services.html
│   ├── gallery.html
│   ├── enquiry.html
│   ├── response.html
│   ├── contact.html
│   └── 404.html
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

### ✓ Correct — flat structure, `index.html` at repository root

```
wede5020-2026-part-3-[username]/   ← this is your GitHub repo
├── index.html                      ← entry file, correct location
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── gallery.html
├── 404.html
├── css/
├── js/
├── images/
├── assets/
├── sitemap.xml
├── robots.txt
└── README.md
```

### ✗ Problem — `index.html` buried inside a subfolder

```
wede5020-2026-part-3-[username]/
└── pages/
    └── index.html                  ← wrong: Netlify will not find this automatically
```

If your `index.html` is inside a subfolder such as `pages/`, Netlify will show a blank page or 404 unless the "Publish directory" is changed to that subfolder (e.g. `pages`). **The simplest fix is to move `index.html` to the repository root** so the default settings work. If you cannot move it, note the subfolder name — you will enter it as the Publish directory in Step 3.

---

## Step 1: Log in to Netlify with GitHub

1. Open https://app.netlify.com
2. Click **Sign up** → Select **GitHub**
3. Log in with your GitHub account and authorize Netlify to access your basic GitHub information

> ✓ After successful login, you will see the Netlify dashboard (Team overview).

---

## Step 2: Install the Netlify GitHub App and Grant Repository Access

This is the **most critical step**. If not done correctly, you will not be able to find the organization's private repository later.

1. In the Netlify dashboard, click **Add new project** → **Import an existing project**
2. Select **GitHub** as the Git provider
3. A GitHub authorization page will pop up. At the top, select **your organization** (not your personal account)
4. In the repository permissions section, choose one of the following:
   - **All repositories** (simplest, but grants access to all repositories under the organization), or
   - **Only select repositories** → Check your assignment repository (more secure)
5. Click **Install** or **Authorize**

> ✓ After successful authorization, you will return to Netlify and see the repository list, where **your organization's private repository** will appear.
>
> ✗ If the organization or repository does not appear, it means access was not granted to that organization during step 3. You can go to GitHub → Settings → Applications → Netlify, click **Configure**, and add the organization's repository access.

---

## Step 3: Select the Repository and Configure Deployment

1. In the repository list, find and click your assignment repository (`EMGPSD/wede5020-2026-part-3-[username]`)
2. Enter deployment settings page:

| Setting Item | Value to Fill In |
|--------------|------------------|
| Branch to deploy | `main` (or the branch you use) |
| Build command | **Leave blank** (pure static website does not need to build) |
| Publish directory | `.` (a single period, representing the repository root directory) |

> ✓ **Key point**: Because your website does not require compilation or building, the build command remains empty, and the publish directory is `.` (i.e., directly use all files in the repository root). This works only if `index.html` is at the repository root, as shown in the "Before You Begin" section.
>
> ✗ If you fill in `public` or `dist`, Netlify will look for files in those folders; since they do not exist, the website will be blank.
>
> ✗ If your `index.html` is inside a subfolder such as `pages/`, enter that subfolder name here instead of `.`.

3. Click **Deploy site**

---

## Step 4: Wait for Deployment and Get the Live URL

1. Netlify will automatically start deployment; you can view the progress in the **Deploys** tab
2. After the first deployment is complete, you will see a URL in the format `random-name-123456.netlify.app`
3. Click that URL to open your published website

> ✓ The website opens normally, and CSS/styles and images are all displayed correctly.
>
> ✗ If the page is blank or styles are missing, first check whether the "Publish directory" is `.`, and confirm that `index.html` is indeed at the repository root.

---

## Step 5: Verification Checklist (Complete Before Submission)

Please check each item one by one on the **live website** (not local files):

| # | Check Item | Pass Criterion |
|---|------------|----------------|
| 1 | Homepage loads | Entering the Netlify URL shows the complete homepage ✓ |
| 2 | CSS styles | Page layout and colours are normal, not plain text ✓ |
| 3 | Images | All images (logo, gallery, etc.) display correctly ✓ |
| 4 | Page navigation | Clicking links in the navigation bar or buttons jumps to other pages (about, services, etc.) ✓ |
| 5 | JavaScript functionality | Interactive features (form validation, menus, etc.) work properly ✓ |
| 6 | 404 page | Entering a non-existent path (e.g. `/xyz`) shows the 404 page ✓ |
| 7 | Mobile display (optional) | Narrowing the browser window or opening on a phone shows a normal layout ✓ |

---

## Important: The Live Website Does Not Update Automatically After Modifying Code

You must understand: Netlify's deployment is **triggered when you push to GitHub**. Simply modifying files locally, or only pushing to another branch, will not update the live website.

### Correct Process After Each Modification

```
Edit files locally
        ↓
git add
        ↓
git commit
        ↓
git push to the main branch
        ↓
Netlify automatically detects the push
        ↓
Automatic re-deployment (approx. 30 seconds to 2 minutes)
        ↓
Return to the live URL, refresh the page, and re-check every item in the Step 5 checklist
```

> ✓ After pushing, go to the Netlify **Deploys** page and confirm that a new deployment record appears with status **Published**.
>
> ✗ Do not assume "I pushed, so it's done." You must **refresh the live URL** and **re-verify** each item in the Step 5 checklist. This is a required step for the assignment.

---

## Common Issues Quick Reference

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| Cannot find organization's private repository | Netlify App did not grant access to that organization | GitHub → Settings → Applications → Netlify → Configure, add the organization |
| Website blank / 404 | Publish directory set incorrectly | Change to `.`, or to the subfolder containing `index.html` |
| Styles/images missing | Some files not committed or pushed | Run `git status` locally to confirm all files are committed, then push again |
| Modified code but live website unchanged | No push to the correct branch | Check which branch Netlify is monitoring, ensure you pushed to that branch |
| Deployment failed | Build command filled in but not needed | Clear the build command, leave it blank |

---

## Final Note

Netlify's free tier is completely sufficient for your assignment needs. If students want additional build minutes or team features, they can apply for the **GitHub Student Developer Pack** to upgrade to Netlify Pro for free, but this is **not required**; the free tier can complete all steps above.