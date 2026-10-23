# Analytics and Measurement

You have built your website. You have published it online. But how do you know if it is actually working? How do you know if people are visiting, what they are doing, and whether they are finding what they need?

This is where **analytics** comes in. Analytics tools collect data about your website visitors — where they come from, what pages they view, how long they stay, and what actions they take. This data helps you understand your audience, measure your success, and make informed decisions about improvements.

In this session, we explore analytics tools, key metrics, and how to connect analytics data back to the success factors we discussed in Document 03.

---

## Session 2 (Part 3): Analytics Tools, Key Metrics, and Measuring Success

### A. Learning Outcome

Understand the purpose of website analytics, identify key metrics, and connect analytics data to website success factors.

### B. What Are Website Analytics?

**Website analytics** is the collection, measurement, and analysis of data about website visitors and their behaviour. Analytics tools track how users interact with your site, providing insights that help you improve user experience, content, and performance.

**Why Analytics Matters:**

| Reason | Explanation |
|--------|-------------|
| **Understand Your Audience** | Who visits your site? Where do they come from? |
| **Measure Success** | Are you achieving your goals? |
| **Identify Problems** | Where are users getting stuck or leaving? |
| **Make Data-Driven Decisions** | Improve based on evidence, not guesses |
| **Demonstrate Value** | Show stakeholders that your website is working |

**A Quick Analogy:**

Think of analytics like **security cameras in a shop**. Without cameras, you might know that people are coming in, but you don't know what they're looking at, how long they stay, or where they leave. Analytics gives you that visibility — it shows you exactly how visitors interact with your website.

### C. Analytics Tools

**1. Google Analytics (GA4)**

Google Analytics is the most widely used web analytics tool. It provides comprehensive data about website traffic, user behaviour, and conversions.

**Key Features:**

| Feature | Description |
|---------|-------------|
| **Real-time Reporting** | See who is on your site right now |
| **Audience Reports** | Demographics, interests, location, devices |
| **Behaviour Reports** | Pages viewed, time on page, events |
| **Traffic Sources** | Where visitors come from (organic, direct, referral, social) |
| **Goals and Conversions** | Track specific actions (e.g., form submissions) |
| **Custom Events** | Track any interaction (e.g., button clicks, video views) |

**2. Google Search Console**

Google Search Console shows how Google sees your site. It focuses on search performance and technical health.

**Key Features:**

| Feature | Description |
|---------|-------------|
| **Search Performance** | Keywords your site ranks for, clicks, impressions |
| **Index Coverage** | Which pages are indexed by Google |
| **Mobile Usability** | Issues affecting mobile users |
| **Core Web Vitals** | Performance metrics (speed, responsiveness, stability) |
| **Sitemap Submission** | Submit and manage your sitemap |
| **Backlink Reports** | Who is linking to your site |

**3. Other Analytics Tools**

| Tool | Features | Free? |
|------|----------|-------|
| **Matomo** | Privacy-focused, self-hosted option | ✓ (self-hosted) |
| **Hotjar** | Heatmaps, session recordings, surveys | ✓ (limited) |
| **Plausible** | Lightweight, privacy-focused, simple | ✗ (paid) |
| **Microsoft Clarity** | Heatmaps, session recordings | ✓ |
| **Crazy Egg** | Heatmaps, A/B testing | ✗ (paid) |

### D. Connecting Analytics to Success Factors

In Document 03, we explored how to measure website success using **KPIs (Key Performance Indicators)** . Analytics tools provide the data needed to track these KPIs.

**KPIs and Their Analytics Sources:**

| KPI | Definition | Where to Find It |
|-----|------------|------------------|
| **New Visitors** | Unique users visiting your site for the first time | Google Analytics → Audience |
| **Bounce Rate** | % of single-page visits (users who leave without interacting) | Google Analytics → Behaviour |
| **Time on Page** | Average time users spend on a page | Google Analytics → Behaviour |
| **Form Submissions** | Number of users completing a form | Google Analytics → Conversions/Events |
| **Conversion Rate** | % of visitors completing a goal | Google Analytics → Conversions |
| **Click-Through Rate** | % of users clicking a specific link or CTA | Google Analytics → Events |
| **Traffic Sources** | Where visitors come from (organic, direct, social, referral) | Google Analytics → Traffic Acquisition |

### E. Key Analytics Metrics Explained

**1. Users vs Pageviews**

| Metric | Definition | What It Tells You |
|--------|------------|-------------------|
| **Users** | Unique visitors to your site | How many different people visited |
| **Pageviews** | Total pages viewed | How much content was consumed |

**Example:**

- 100 users visited your site
- They viewed 300 pages total
- Average pages per user = 3

**2. Bounce Rate**

**Definition:** The percentage of visitors who leave after viewing only one page.

| Bounce Rate | Meaning | Action |
|-------------|---------|--------|
| 30-40% | Excellent | Continue your current approach |
| 40-60% | Average | Could be improved |
| 60-80% | High | Investigate why users are leaving |
| 80%+ | Very High | Urgent attention needed |

**Why Bounce Rate Matters:**

- High bounce rate suggests users aren't finding what they expected
- Could indicate poor content, slow loading, or confusing navigation
- For blogs, higher bounce rates are sometimes acceptable

**3. Session Duration**

**Definition:** The average time users spend on your site during a visit.

| Session Duration | Meaning |
|------------------|---------|
| 0-30 seconds | Users are leaving quickly — content may not match expectations |
| 1-2 minutes | Users are engaging but may not be fully engaged |
| 3-5 minutes | Good engagement — users are reading and exploring |
| 5+ minutes | Excellent — users are deeply engaged |

**4. Traffic Sources**

**Definition:** Where visitors come from when they arrive at your site.

| Source | Description | Example |
|--------|-------------|---------|
| **Organic** | Search engine results | Google, Bing, DuckDuckGo |
| **Direct** | Typing the URL directly or using a bookmark | Typing `mywebsite.com` |
| **Referral** | Links from other websites | A blog linking to your site |
| **Social** | Social media platforms | Facebook, Instagram, LinkedIn |
| **Email** | Links from email campaigns | Newsletter links |

**Why Traffic Sources Matter:**

| Source | What It Tells You |
|--------|-------------------|
| **Organic** | How well your SEO is working |
| **Direct** | Brand awareness and loyalty |
| **Referral** | Your reputation and backlink profile |
| **Social** | Social media engagement |
| **Email** | Email marketing effectiveness |

**5. Conversion Rate**

**Definition:** The percentage of visitors who complete a desired action.

**Formula:**

```
Conversion Rate = (Conversions / Total Visitors) × 100
```

**Example:**

- 1,000 visitors to your site
- 50 completed your contact form
- Conversion Rate = 50 / 1000 × 100 = 5%

**Common Conversions:**

| Conversion Type | Example |
|-----------------|---------|
| Form Submission | Contact form, newsletter sign-up |
| Purchase | E-commerce checkout |
| Download | PDF, e-book, software |
| Account Creation | User registration |
| Page View | Viewing a specific page (e.g., pricing) |

### F. Google Analytics 4 (GA4) — Key Concepts

GA4 is Google's latest analytics platform. It is **event-based**, meaning it tracks interactions (events) rather than just pageviews.

**Key GA4 Concepts:**

| Concept | Description | Example |
|---------|-------------|---------|
| **Event** | Any user interaction | Page view, click, scroll, form submission |
| **Parameter** | Additional data about an event | Which button was clicked |
| **User** | A unique visitor | Identified by a unique ID |
| **Session** | A group of interactions within a time period | A user's visit to your site |
| **Conversion** | An event that you mark as important | A purchase or sign-up |

**Setting Up GA4:**

1. Create a Google Analytics account
2. Set up a new GA4 property
3. Add the tracking code to your website (in `<head>`)
4. Verify that data is being collected

**Tracking Code Example:**

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### G. Connecting Analytics to the HITS Framework

In Document 03, we introduced the **HITS** framework for planning and reviewing website effectiveness:

| Element | Description | Analytics Connection |
|---------|-------------|---------------------|
| **H** (Human/Audience) | Who is the website for? | Analytics shows who is actually visiting |
| **I** (Intent/Organization) | What does the organization need? | Analytics shows if goals are being met |
| **T** (Tools/Content) | What content and features are used? | Analytics shows what users engage with |
| **S** (Success Indicators) | How is success measured? | Analytics provides the data for KPIs |

**How Analytics Informs HITS:**

| HITS Element | Analytics Question | Insight |
|--------------|-------------------|---------|
| **Human/Audience** | "Who is actually visiting?" | Demographics, location, device, interests |
| **Intent** | "Are visitors achieving what we want them to?" | Conversion rate, goal completions |
| **Tools/Content** | "What content is most popular?" | Top pages, time on page, events |
| **Success Indicators** | "Are we meeting our KPIs?" | Traffic, bounce rate, conversions |

### H. In-Class Activity: Analytics Snapshot

**Objective:** Students will analyse a sample analytics dashboard and identify key insights.

**Sample Dashboard Data:**

```
┌─────────────────────────────────────────────────────────────────┐
│  ANALYTICS DASHBOARD — SAMPLE DATA                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  OVERVIEW (Last 30 Days)                                        │
│  • Users: 2,450                                                 │
│  • Pageviews: 8,900                                             │
│  • Bounce Rate: 62%                                             │
│  • Avg. Session Duration: 1m 45s                                │
│                                                                 │
│  DEVICES                                                        │
│  • Mobile: 65%                                                  │
│  • Desktop: 28%                                                 │
│  • Tablet: 7%                                                   │
│                                                                 │
│  TRAFFIC SOURCES                                                │
│  • Organic: 42%                                                 │
│  • Direct: 25%                                                  │
│  • Referral: 18%                                                │
│  • Social: 12%                                                  │
│  • Email: 3%                                                    │
│                                                                 │
│  TOP PAGES                                                      │
│  1. Homepage: 2,100 views                                       │
│  2. Services: 1,800 views                                       │
│  3. Blog Post "10 SEO Tips": 1,200 views                        │
│  4. Contact: 980 views                                          │
│  5. About: 750 views                                            │
│                                                                 │
│  CONVERSIONS                                                    │
│  • Form Submissions: 45                                         │
│  • Newsletter Sign-ups: 120                                     │
│  • Conversion Rate: 2.3%                                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Discussion Prompts:**

1. What is the most popular device? (Mobile — 65%)
2. Which traffic source is the largest? (Organic — 42%)
3. Which page has the most views? (Homepage — 2,100)
4. How many users converted? (45 form submissions + 120 sign-ups = 165 conversions)
5. What is one insight you can draw from this data?
6. What is one recommendation you would make to improve the site?

**Sample Insights:**

- Mobile is the dominant device — ensure mobile experience is optimised
- Organic search is the largest traffic source — SEO is working well
- Contact page has 980 views but only 45 form submissions — conversion rate is low
- Blog post on SEO tips is popular — create more SEO-related content

### I. In-Class Activity: Case Study Discussion

**Scenario:** A bakery notices that users leave the homepage quickly (80% bounce rate on mobile).

**Discussion Prompts:**

1. What might be causing the high bounce rate?
2. How could analytics help diagnose the problem?
3. What changes would you recommend?

**Possible Causes:**

- Slow loading time
- Poor mobile experience
- Unclear navigation
- Content doesn't match user expectations
- No clear call to action

**Recommended Actions:**

- Test page speed (PageSpeed Insights)
- Review mobile experience
- Add clear navigation links
- Add a clear call to action
- Use heatmaps to see where users click

### J. Extra Activity: SMART Goal for Analytics

**Task:** Write a SMART goal for a website using analytics.

**SMART Framework:**

| Element | Description | Example |
|---------|-------------|---------|
| **S**pecific | Clear and focused | Increase newsletter sign-ups |
| **M**easurable | Trackable with data | By 20% |
| **A**chievable | Realistic | Within 3 months |
| **R**elevant | Tied to goals | Supports building an email list |
| **T**ime-bound | Has a deadline | By 31 March 2025 |

**Example SMART Goal:**

> "Increase newsletter sign-ups by 20% within 3 months by adding a prominent sign-up form to the blog sidebar and homepage hero section."

**How to Track:**

| Metric | Source | Target |
|--------|--------|--------|
| Current sign-ups | Google Analytics | 100/month |
| Target sign-ups | Google Analytics | 120/month |

### K. Session Summary

| Concept | Key Idea |
|---------|----------|
| Analytics | Collection and analysis of website visitor data |
| Google Analytics | Most popular analytics tool |
| Search Console | Shows how Google sees your site |
| Bounce Rate | % of visitors who leave after one page |
| Session Duration | Average time visitors spend on your site |
| Traffic Sources | Where visitors come from (organic, direct, referral, social) |
| Conversion Rate | % of visitors completing a goal |
| KPI | Key Performance Indicator — measurable value of success |
| HITS Framework | Human, Intent, Tools, Success Indicators |

---

## Reflection Questions

1. Why is analytics important for website success?
2. What is the difference between users and pageviews?
3. What does a high bounce rate indicate, and what actions could you take to improve it?
4. How does knowing your traffic sources help you make decisions?
5. What is the difference between organic and direct traffic?
6. How can analytics data inform your website development decisions?

---
