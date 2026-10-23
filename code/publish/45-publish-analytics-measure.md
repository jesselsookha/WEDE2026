# 45 — Publishing, Analytics & Measuring ROI

## From Local Machine to Live Website to Proof It Works

---

## Introduction

In this final activity, you will take the website you have built locally and publish it to the world. You have already added SEO and created the supporting files (`robots.txt`, `sitemap.xml`, `404.html`). Now the question is: **how does the website actually get to the world, and how do we know it was worth the effort?**

This activity has three parts:

1. **Publishing** — moving the site from `file://` on your laptop to a live URL that anyone can reach.
2. **Analytics** — installing the tools that tell us what visitors actually do.
3. **ROI** — translating that data into a story that answers the question every stakeholder asks: *"Was this worth it?"*

**The central message of this activity:**

> **A website is not finished when it is uploaded. It is finished when it is measured, and the measurement justifies the investment.**

---

## Part 1 — Publishing: From Local to Live

### The conceptual shift

So far, you have been developing at `file:///C:/Users/.../index.html` or `localhost:4000`. This is fine for building, but it has three problems:

| Local (`file://` or `localhost`) | Live (a real URL) |
|-----------------------------------|-------------------|
| Only you can see it | Anyone with the URL can see it |
| Search engines cannot crawl it | Google can index it |
| Some browser features refuse to work (clipboard, geolocation) | All features work |

**Publishing** means putting the site on a **web server** that is connected to the internet, with a **domain name** that people can type.

### The two things you need

**1. A domain name** — the address people type: `hendrickscarpentry.co.za`. You rent it from a **registrar** (Namecheap, GoDaddy, Google Domains, etc.) for an annual fee.

**2. Web hosting** — a folder on a server connected to the internet. You upload your files there, and the server sends them to anyone who visits your domain.

**If both are with the same company**, they often configure themselves. **If they are with different companies**, you must point the domain at the hosting server using **DNS records** — specifically an **A record** (mapping the domain to an IP address) or a **CNAME record** (mapping one name to another).

### Three publishing paths (for different skill levels)

**Option A — Shared hosting (cPanel + FTP)**

The traditional route. Buy hosting (e.g. R50–R100 per month), get a cPanel login, and upload files to the `public_html` folder using either:

- **cPanel File Manager** — a web-based drag-and-drop interface.
- **FTP client** (FileZilla) — a desktop program that shows your local files on one side and the server files on the other, with a drag-and-drop transfer.

This is what the carpenter's business would realistically use.

**Option B — Git-based hosting (GitHub Pages, Netlify, Cloudflare Pages)**

For developers who use Git. Push your code to a repository, connect the repository to the hosting service, and it deploys automatically on every push. Free for static sites, with optional custom domains. This is the modern default for developers.

**Option C — Website builders (Wix, Squarespace)**

Fully hosted and managed. You click "Publish" and the platform handles everything. Not appropriate for hand-coded sites, but worth knowing about so you understand the landscape.

### The staging concept

Professional teams do not edit the live site directly. They work in a **staging environment** that mirrors production, test everything there, and only then deploy to **production** (the live site users see).

For a small static site, the simplest version of this is:

1. Develop locally.
2. Upload to a subfolder (`/staging/`) or a preview URL.
3. Test all pages, links, forms.
4. Move to the live root.

**Key point:** The difference between *staging* and *production* is the difference between *testing* and *trusting*. You test in staging. You trust in production.

---

## Part 2 — Analytics: Installing the Tools That Tell You What Happened

Once the site is live, you need to know what visitors do. This is not optional for a professional site — it is how you justify the work.

### The core toolkit (all free)

| Tool | What it tells you | Install effort |
|------|------------------|----------------|
| **Google Analytics 4 (GA4)** | Traffic, engagement, conversions, traffic sources | Add a `<script>` snippet to every page |
| **Google Search Console (GSC)** | How Google sees your site: queries, impressions, clicks, indexing | Verify ownership, submit sitemap |
| **Microsoft Clarity** | Heatmaps, session recordings, rage-click detection | Add a script snippet |
| **UptimeRobot** | Alerts you if the site goes down | Enter your URL, set check interval |

### The setup checklist

**Step 1 — Install GA4**

Create a GA4 property, get the Measurement ID (starts with `G-`), and paste the gtag snippet into the `<head>` of every page. On a platform like WordPress, a plugin does this automatically. On a hand-coded site, you paste it once per page.

**Step 2 — Verify in Google Search Console**

Add your domain as a property, verify ownership (via DNS record, HTML tag, or GA4 tag), and **immediately submit your sitemap** at `sitemap.xml`.

**Step 3 — Request indexing for key pages**

In GSC, use the "Request indexing" tool on your 5–10 most important URLs. Google may take weeks to discover a new site on its own. This nudges it.

**Step 4 — Set up conversion events**

Page views alone do not tell you if the site worked. In GA4, define events for the actions that matter:

- Contact form submitted
- Enquiry form submitted
- Phone number clicked
- Email address clicked
- Brochure downloaded

**Step 5 — Install a heatmap tool**

Microsoft Clarity (free) shows you where people click, how far they scroll, and where they rage-click. Analytics tells you *what* happened; heatmaps show you *why*.

### UTM parameters — tracking where traffic comes from

When you share a link in an email, a social post, or a newsletter, the referral data alone is often not enough. You add **UTM parameters** to the URL to label the campaign.

Example:

```text
https://hendrickscarpentry.co.za/enquiry.html?utm_source=newsletter&utm_medium=email&utm_campaign=october-2026
```

The five core parameters:

| Parameter | Purpose | Example |
|-----------|---------|---------|
| `utm_source` | The specific platform | `newsletter`, `facebook`, `google` |
| `utm_medium` | The type of marketing | `email`, `social`, `cpc` |
| `utm_campaign` | The initiative | `october-2026`, `spring-sale` |
| `utm_content` | The specific link or creative | `header-button`, `footer-link` |
| `utm_term` | Paid search keyword | `carpenter+cape+town` |

**Critical rule:** Never add UTM parameters to internal links on your own site. Doing so overwrites the visitor's original acquisition data and fragments your analytics.

---

## Part 3 — ROI: Translating Data into a Story That Justifies the Investment

This is where many developers and marketing teams fail. They collect data, but they cannot answer the question the client, the manager, or the donor actually asks: **"Was this worth it?"**

### The question changes depending on who asks

| Stakeholder | What they actually want to know |
|-------------|--------------------------------|
| **Client (business owner)** | "Did I get more enquiries / sales?" |
| **Donor (non-profit)** | "Did the site help us reach more people or raise more money?" |
| **Executive / C-suite** | "What was the return on the money we spent?" |

Your job is not to guess. It is to **install the tools that capture the right data**, and then to **present that data in the language the stakeholder understands**.

### Defining what "success" means

Before you can measure ROI, you must define the **conversion goals** for the site. A conversion is any action a visitor takes that has value to the organisation.

For the carpenter's site, the goals might be:

| Goal | How to measure it |
|------|-------------------|
| Enquiry form submitted | GA4 event on form submit |
| Phone number clicked | GA4 event on `tel:` link click |
| Email address clicked | GA4 event on `mailto:` link click |
| Services page viewed | GA4 page view |
| Quote requested | GA4 event on enquiry form success |

For a non-profit:

| Goal | How to measure it |
|------|-------------------|
| Donation made | GA4 eCommerce event |
| Volunteer form submitted | GA4 event |
| Newsletter signup | GA4 event |
| Program page viewed | GA4 page view |
| Resource downloaded | GA4 event |

**Key point:** You implement the *tracking*. The client or SEO Manager defines *what counts as success*. This is the same collaboration pattern as in Activity 5.

### The ROI calculation

The formula is simple, but it requires a before-and-after baseline:

```text
Website ROI = (Incremental Revenue - Investment Cost) / Investment Cost × 100%
```

**Example for the carpenter:**

Before the website:

- 5 enquiries per month from word-of-mouth.
- Average job value: R15,000.
- Monthly revenue from word-of-mouth: R75,000.

After the website (3 months):

- 5 enquiries from word-of-mouth + 8 enquiries from the website.
- Conversion rate on website enquiries: 25% (2 become jobs).
- Average job value: R15,000.
- Additional monthly revenue: 2 × R15,000 = R30,000.
- Website investment: R15,000 (design + development).
- Monthly hosting: R100.

**ROI calculation (first 3 months):**

```text
Incremental revenue: 3 × R30,000 = R90,000
Investment: R15,000 + (3 × R100) = R15,300
ROI = (90,000 - 15,300) / 15,300 × 100% = 488%
```

**Key point:** The website paid for itself in the first month. This is the number that justifies the investment.

### What executives actually care about (beyond page views)

Traditional metrics like page views and bounce rate do not impress decision-makers. They want to see:

| Metric | What it means |
|--------|--------------|
| **Conversion rate** | What percentage of visitors took the desired action? |
| **Customer acquisition cost (CAC) reduction** | Did the website reduce the cost of getting a new customer? |
| **Customer lifetime value (CLV)** | Are we attracting customers who stay and spend more over time? |
| **Cost savings from self-service** | Did the FAQ page reduce support tickets? |
| **Speed-to-market** | Can we launch a new service faster because of the website? |

### The central dashboard

Do not scatter data across ten tools. Build **one dashboard** that shows the numbers that matter:

- GA4: sessions, conversions, traffic sources.
- Search Console: impressions, clicks, average position.
- Uptime: current status.
- Conversion rate over time.

Google Looker Studio (free) can pull all of these into one screen.

**Key point:** The dashboard is not for you, the developer. It is for the **stakeholder**. It answers their question in one glance.

---

## The Complete Publishing & Analytics Checklist

### Before publishing

- [ ] All pages tested locally.
- [ ] All links work.
- [ ] Forms submit correctly.
- [ ] `robots.txt` in place.
- [ ] `sitemap.xml` in place.
- [ ] `404.html` in place and server configured to use it.
- [ ] `favicon.ico` referenced in every page.
- [ ] Every image has `alt` text.
- [ ] One `<h1>` per page.
- [ ] Meta descriptions written for every page.
- [ ] Canonical URLs set.
- [ ] Open Graph tags set.

### Publishing

- [ ] Domain registered.
- [ ] Hosting purchased (or Git-based hosting configured).
- [ ] Files uploaded to the correct folder (`public_html` or equivalent).
- [ ] DNS records point domain to hosting server.
- [ ] SSL certificate installed (HTTPS) — most hosts do this automatically.

### After publishing — Day 1

- [ ] Visit the live URL. Verify the site loads.
- [ ] Test all pages, links, forms.
- [ ] Install GA4 on every page.
- [ ] Verify site in Google Search Console.
- [ ] Submit `sitemap.xml` to GSC.
- [ ] Request indexing for 5–10 key pages.
- [ ] Set up UTM parameters for any campaign links.
- [ ] Install Microsoft Clarity (or similar).
- [ ] Set up UptimeRobot (or similar).

### After publishing — Week 1

- [ ] Check GSC for indexing errors.
- [ ] Check GA4 for any traffic (even your own visits).
- [ ] Test conversion events — submit the form, check GA4 Realtime.
- [ ] Build the central dashboard.

### After publishing — Month 1

- [ ] Review GSC Performance report: which queries bring impressions?
- [ ] Review GA4: which pages get traffic? Which sources?
- [ ] Review conversion events: how many enquiries?
- [ ] Check Clarity: where do users click? Where do they drop off?
- [ ] Calculate preliminary ROI.

---

## Connecting Back to the SEO Manager

The publishing and analytics checklist is **jointly owned**:

| Task | Developer | SEO Manager |
|------|-----------|-------------|
| Upload files, configure DNS | **Owns it** | — |
| Install GA4 script | Implements | **Specifies which events to track** |
| Verify in GSC | Implements | **Owns the verification** |
| Submit sitemap | Implements | **Owns the submission** |
| Define conversion goals | Implements tracking | **Decides what counts as a conversion** |
| Set up UTM parameters | Implements in URLs | **Decides naming convention** |
| Build the dashboard | Implements | **Decides which metrics matter** |
| Calculate ROI | Provides data | **Presents the story to stakeholders** |

**Key point:** The developer makes it *possible* to measure. The SEO Manager makes it *meaningful*. Neither can answer "was this worth it?" alone.

---

## The Final Teaching Message

```text
LOCAL DEVELOPMENT
       │
       ▼
   PUBLISHING
   (domain + hosting)
       │
       ▼
   THE LIVE SITE
       │
       ├── Google Analytics 4
       ├── Google Search Console
       ├── Heatmaps
       └── Uptime monitoring
       │
       ▼
   THE DATA
       │
       ├── Traffic sources
       ├── Conversion events
       ├── User behaviour
       └── Technical health
       │
       ▼
   THE ROI STORY
       │
       └── "The website generated X enquiries
            worth Y, against an investment of Z.
            ROI = (Y - Z) / Z × 100%"
```

> **A website is not finished when it is uploaded. It is finished when it is measured, and the measurement justifies the investment.**

---

## Closing Reflection for Students

1. **What is the difference between a domain and hosting?** (Domain is the address; hosting is where the files live.)
2. **Why do we verify the site in Google Search Console?** (To see how Google sees it, submit the sitemap, and request indexing.)
3. **What is a conversion, and why does it matter more than a page view?** (A conversion is an action with value; page views alone do not prove ROI.)
4. **What is the difference between the developer's role and the SEO Manager's role in analytics?** (Developer implements tracking; SEO Manager defines what to track and presents the story.)
5. **If you were building the carpenter's site, what would you set as the primary conversion goal?** (Enquiry form submitted.)