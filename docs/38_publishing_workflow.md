# Publishing Workflow

You have built your website. You have tested it locally. Now comes the moment of truth: making it live on the internet. Publishing a website involves several steps — choosing a domain name, selecting a hosting provider, and uploading your files to a server.

This session explores the complete publishing workflow, from domain registration to live deployment. We will look at local and international hosting options, free and paid services, and the key considerations that influence your choices.

---

## Session 2 (Part 1): Domain Registration, Hosting Providers, and Deployment Options

### A. Learning Outcome

Understand the website publishing workflow, including domain registration, hosting options, and deployment methods.

### B. The Publishing Workflow Overview

Before diving into the details, let's look at the big picture. Publishing a website follows a logical sequence:

```
┌─────────────────────────────────────────────────────────────────┐
│                    PUBLISHING WORKFLOW                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. CHOOSE A DOMAIN NAME                                        │
│     └── Your website's address (e.g., myportfolio.com)          │
│                                                                 │
│  2. SELECT A HOSTING PROVIDER                                   │
│     └── Where your website files will live                      │
│                                                                 │
│  3. CONNECT DOMAIN TO HOSTING                                   │
│     └── Point your domain to your hosting provider              │
│                                                                 │
│  4. UPLOAD YOUR WEBSITE FILES                                   │
│     └── Transfer files from your computer to the server         │
│                                                                 │
│  5. TEST YOUR LIVE SITE                                         │
│     └── Ensure everything works as expected                     │
│                                                                 │
│  6. LAUNCH AND MAINTAIN                                         │
│     └── Monitor, update, and improve                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### C. Step 1: Choosing a Domain Name

A **domain name** is your website's address on the internet (e.g., `www.mywebsite.com`). It is how users find you online.

**Anatomy of a Domain Name:**

```
https://www.myportfolio.co.za
│       │   │          │
│       │   │          └── Top-Level Domain (TLD) — .co.za
│       │   └── Domain Name — myportfolio
│       └── Subdomain — www
└── Protocol — https:// (secure)
```

**Domain Structure:**

| Component | Description | Example |
|-----------|-------------|---------|
| **Protocol** | How the browser connects to the server | `https://` (secure), `http://` |
| **Subdomain** | A prefix to the domain name | `www`, `blog`, `shop` |
| **Domain Name** | Your unique identifier | `myportfolio` |
| **Top-Level Domain (TLD)** | The extension | `.com`, `.co.za`, `.org`, `.net` |

**Choosing a Domain Name:**

| Tip | Why It Matters |
|-----|----------------|
| **Keep it short** | Easier to remember and type |
| **Make it memorable** | Stands out in a crowded web |
| **Use keywords** | Can help with SEO (e.g., `capetownbakery.co.za`) |
| **Avoid numbers and hyphens** | Can be confusing when spoken |
| **Choose the right TLD** | `.co.za` for South African businesses, `.com` for global |

**Cost Considerations:**

| Expense | Recurrence | Typical Range |
|---------|------------|---------------|
| **Domain Registration** | Annual | R50 – R200 per year (.co.za) |
| **Domain Renewal** | Annual | Similar to registration |
| **Privacy Protection** | Annual | Optional, adds privacy to WHOIS |

> **Note:** Prices vary between registrars. Students should research current prices when making decisions.

**Domain Registrars (South African):**

| Registrar | Known For |
|-----------|-----------|
| **Domain.co.za** | South African .co.za domains, local support |
| **Afrihost Domains** | Integrated with hosting packages |
| **MWeb Domains** | Part of their hosting bundles |
| **Axxess Domains** | Local support, competitive pricing |

**Domain Registrars (International):**

| Registrar | Known For |
|-----------|-----------|
| **Namecheap** | Affordable, good support, free WHOIS privacy |
| **Google Domains** | Simple, integrates with Google services |
| **GoDaddy** | Large selection, often has promotions |
| **Cloudflare Registrar** | At-cost pricing, good security features |

### D. Step 2: Selecting a Hosting Provider

**Web hosting** is a service that stores your website files on a server and makes them accessible to visitors over the internet.

**Types of Hosting:**

| Type | Description | Suitable For |
|------|-------------|--------------|
| **Shared Hosting** | Multiple websites share the same server resources | Small websites, beginners |
| **VPS (Virtual Private Server)** | Dedicated resources within a shared server | Growing websites, more control |
| **Dedicated Server** | Entire server dedicated to one website | Large websites, high traffic |
| **Cloud Hosting** | Resources spread across multiple servers | Scalable, high-traffic websites |
| **Static Hosting** | Hosting for HTML, CSS, JS only (no backend) | Portfolios, personal sites |

**South African Hosting Providers:**

| Provider | Type | Features | Best For |
|----------|------|----------|----------|
| **Afrihost** | Shared, VPS, Dedicated | Local support, affordable, reliable | Small businesses, personal sites |
| **MWeb** | Shared, Cloud | Local support, hosting + domain bundles | Personal sites, small business |
| **Domain.co.za** | Shared, WordPress | Local support, .za domains | Beginners, small websites |
| **Axxess** | Shared, VPS | Local support, competitive pricing | Small to medium businesses |
| **HostAfrica** | Shared, VPS, Dedicated | Local support, flexible packages | Growing businesses |

**International Hosting Providers:**

| Provider | Type | Features | Best For |
|----------|------|----------|----------|
| **GitHub Pages** | Static (Free) | Git-based, automatic SSL | Student projects, portfolios |
| **Netlify** | Static (Free + Paid) | Git-based, serverless functions | Modern static sites |
| **Vercel** | Static (Free + Paid) | Git-based, framework support | React, Next.js projects |
| **Bluehost** | Shared, WordPress | Affordable, beginner-friendly | WordPress sites |
| **SiteGround** | Shared, WordPress | Performance, support | Small business, WordPress |
| **AWS (Amazon)** | Cloud | Scalable, complex | Enterprise, complex apps |
| **Google Cloud** | Cloud | Scalable, complex | Enterprise, complex apps |

**Free Hosting Options (Non-CMS):**

| Platform | What It Offers | Limitations |
|----------|----------------|-------------|
| **GitHub Pages** | Host static sites from Git repositories | No backend/PHP, limited to 100GB/month |
| **Netlify (Free)** | Host static sites, forms | Limited bandwidth and build time |
| **Vercel (Free)** | Host frontend apps | Limited functions and build time |
| **Cloudflare Pages** | Static site hosting | Limited to static content |
| **000WebHost** | Free hosting with PHP & MySQL | Ads, limited resources |
| **InfinityFree** | Free hosting with PHP & MySQL | Limited features, slower performance |

### E. Step 3: Connecting Domain to Hosting

Once you have a domain and hosting, you need to connect them. This is done by updating the **DNS (Domain Name System)** settings.

**How DNS Works:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    DNS RESOLUTION                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  User types: www.mywebsite.com                                  │
│       │                                                         │
│       ▼                                                         │
│  Browser asks: "Where is www.mywebsite.com?"                    │
│       │                                                         │
│       ▼                                                         │
│  DNS Server responds: "192.168.1.100"                           │
│       │                                                         │
│       ▼                                                         │
│  Browser connects to that IP address                            │
│       │                                                         │
│       ▼                                                         │
│  Website loads from the server                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**DNS Record Types:**

| Record Type | Purpose | Example |
|-------------|---------|---------|
| **A Record** | Points domain to an IP address | `mywebsite.com → 192.168.1.100` |
| **CNAME Record** | Points domain to another domain | `www.mywebsite.com → mywebsite.com` |
| **MX Record** | Points email to email servers | Email routing |
| **TXT Record** | Verification or security | SPF, DKIM, domain verification |

**Typical DNS Setup for Hosting:**

| Record | Value | Purpose |
|--------|-------|---------|
| `@` A Record | Hosting IP address | Points main domain to hosting |
| `www` CNAME | `@` | Points www to main domain |

### F. Step 4: Uploading Your Website Files

Once your domain and hosting are set up, you need to upload your website files. There are several methods.

**Upload Methods:**

| Method | Description | Suitable For |
|--------|-------------|--------------|
| **FTP/SFTP** | File Transfer Protocol — upload files using an FTP client | Most hosting setups |
| **Git Deployment** | Push code to a Git repository and deploy automatically | GitHub Pages, Netlify, Vercel |
| **File Manager** | Built-in file upload through hosting control panel | Quick updates, beginners |
| **One-Click Deploy** | Deploy from a repository with one click | Netlify, Vercel, Heroku |

### G. FTP: File Transfer Protocol

**FTP (File Transfer Protocol)** is a standard network protocol used to transfer files between a client and a server. In web development, it is used to upload website files from your local machine to a web server.

**FTP Credentials:**

To connect via FTP, you need:

| Credential | Description | Example |
|------------|-------------|---------|
| **Host** | The server address | `ftp.yourdomain.com` or IP address |
| **Username** | Your FTP username | `mywebsite_user` |
| **Password** | Your FTP password | `********` |
| **Port** | The connection port | `21` (FTP), `22` (SFTP) |

**Popular FTP Clients:**

| Client | Platform | Notes |
|--------|----------|-------|
| **FileZilla** | Windows, Mac, Linux | Free, popular, feature-rich |
| **Cyberduck** | Windows, Mac | Free, user-friendly, cloud support |
| **WinSCP** | Windows | Free, supports SFTP/SCP |
| **Fetch** | Mac | Paid, simple interface |
| **Transmit** | Mac | Paid, powerful, multi-protocol |

**Best Practice:** Use **SFTP (SSH File Transfer Protocol)** instead of FTP whenever possible. SFTP encrypts your credentials and file transfers, making them more secure.

**FTP vs SFTP vs FTPS:**

| Protocol | Security | Description |
|----------|----------|-------------|
| **FTP** | ✗ Insecure (plain text) | Passwords sent in clear text — not recommended |
| **FTPS** | ✓ Secure (SSL/TLS) | FTP with SSL encryption |
| **SFTP** | ✓ Secure (SSH) | SSH File Transfer Protocol — recommended |

### H. Step 5: Testing Your Live Site

After uploading your files, test your site thoroughly.

**Launch Checklist:**

- [ ] Visit your domain and ensure the site loads
- [ ] Test all pages and links (internal and external)
- [ ] Check mobile responsiveness on various devices
- [ ] Verify all images and media load correctly
- [ ] Test forms (submit and receive submissions)
- [ ] Check page speed using PageSpeed Insights
- [ ] Verify SSL certificate is active (https://)
- [ ] Test 404 page (navigate to a non-existent URL)
- [ ] Verify robots.txt is accessible

### I. In-Class Activity: Launch Simulation

**Objective:** Students will publish a simple website using GitHub Pages.

**Step-by-Step Instructions:**

**Step 1: Create a GitHub Repository**

1. Go to [github.com](https://github.com) and log in.
2. Click the **+** icon → "New Repository".
3. Name it something like: `my-portfolio` or `eco-bakery`.
4. Check "Add a README file".
5. Click **Create Repository**.

**Step 2: Upload Your Website Files**

1. On the repository page, click **"Add file" → "Upload files"**.
2. Upload your project files:
   - `index.html`
   - `style.css` (if you have one)
   - Any images or other files
3. Click **"Commit changes"** when done.

**Step 3: Enable GitHub Pages**

1. Click **Settings** in your repo (top right).
2. In the left menu, click **"Pages"**.
3. Under **"Source"**, choose:
   - **Branch**: `main`
   - **Folder**: `/ (root)`
4. Click **Save**.

**Step 4: View Your Live Site**

Your site will be live at:
`https://your-username.github.io/your-repository-name/`

It might take 1–2 minutes to appear.

**Sample Code for Testing:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EcoBakery | Organic Breads in Cape Town</title>
  <meta name="description" content="EcoBakery offers fresh, organic breads made with love in Cape Town. Order online or visit our store.">
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      max-width: 600px;
      margin: 40px auto;
      padding: 20px;
      line-height: 1.6;
      color: #2d3436;
    }
    h1 {
      color: #27ae60;
    }
  </style>
</head>
<body>
  <h1>🌿 Welcome to EcoBakery</h1>
  <p>We bake fresh, organic breads daily. Visit us in-store or order online.</p>
  <p><strong>Contact:</strong> hello@ecobakery.co.za</p>
  <p><a href="#">Learn more about our products →</a></p>
</body>
</html>
```

### J. Homework: Launch Plan

**Task:** Describe how you would launch a fictional website.

**Must Include:**

1. **Brand name** and reason for it
2. **Domain name** and TLD choice
3. **Hosting platform** and why it fits their site
4. **Upload method** (FTP, Git, etc.)
5. **Launch checklist** (at least 5 items)
6. **Analytics goals**: What metric to watch first

**Bonus:** Add a reflection on the costs involved (domain registration, hosting fees).

### K. Session Summary

| Concept | Key Idea |
|---------|----------|
| Domain Name | Your website's address on the internet |
| TLD | Top-Level Domain — .com, .co.za, .org, etc. |
| Registrar | Company that sells domain names |
| Hosting | Service that stores your website files |
| Shared Hosting | Multiple sites on one server |
| VPS | Virtual Private Server — dedicated resources |
| Static Hosting | HTML, CSS, JS only (no backend) |
| DNS | Domain Name System — connects domain to hosting |
| FTP | File Transfer Protocol — upload files to server |
| SFTP | Secure FTP — encrypted file transfers |
| GitHub Pages | Free static hosting from Git repositories |

---

## Reflection Questions

1. What is the difference between a domain name and web hosting?
2. What factors should you consider when choosing a domain name?
3. Why is SFTP preferred over FTP?
4. What is the difference between shared hosting and VPS hosting?
5. Why might a student choose GitHub Pages over a paid hosting service?
6. What is DNS and why is it important?

---
