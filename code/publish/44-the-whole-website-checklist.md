# 44 - Completing Your Website with Supporting Files

> robots.txt, sitemap.xml and 404.html

## Introduction

In Activities 1-5, you created the visible parts of a website, including:

- HTML pages
- CSS stylesheets
- JavaScript functionality
- Navigation systems
- Search engine optimisation (SEO) metadata

Although your website may appear complete, professional websites also contain several supporting files that help search engines, web servers, and browsers work correctly.

These files are often invisible to website visitors, but they play an important role in helping your website be discovered, indexed, and managed effectively.

In this activity, you will learn about:

- `robots.txt`
- `sitemap.xml`
- `404.html`

You will also briefly explore several additional files that are commonly found in modern websites.

## Objectives

By the end of this activity you should be able to:

- Explain the purpose of a `robots.txt` file.
- Create a basic `sitemap.xml` file.
- Design a custom `404.html` page.
- Understand how these files support SEO and website management.
- Organise a website using a professional folder structure.

---

## Part 1 - Understanding robots.txt

### What is robots.txt?

A `robots.txt` file is a plain text file stored in the root directory of a website.

Its primary purpose is to provide instructions to search engine crawlers about which parts of a website should be crawled and which parts should be avoided.

Example location:

```text
https://hendrickscarpentry.co.za/robots.txt
```

### Important Concept

A common misunderstanding is that `robots.txt` prevents pages from appearing in search results.

This is not completely correct.

Remember:

> **robots.txt controls crawling, not indexing.**

This means:

- **Crawling** = a search engine visits a page.
- **Indexing** = a page appears in search results.

A page can still appear in search results if other websites link to it, even if it is blocked in `robots.txt`.

If you want to prevent indexing, you should use a robots meta tag within the HTML page itself:

```html
<meta name="robots" content="noindex">
```

### Example robots.txt File

```text
# Allow all crawlers to access everything
User-agent: *
Allow: /

# Block administration pages
Disallow: /admin/

# Block temporary content
Disallow: /tmp/

# Location of the sitemap
Sitemap: https://hendrickscarpentry.co.za/sitemap.xml
```

### Understanding the Instructions

| Rule | Purpose |
|---|---|
| `User-agent: *` | Applies to all crawlers |
| `Allow: /` | Allows access to the website |
| `Disallow: /admin/` | Blocks access to the admin folder |
| `Disallow: /tmp/` | Blocks temporary content |
| `Sitemap:` | Identifies the sitemap location |

### Activity Task 1

Create a `robots.txt` file for the Hendricks Carpentry website.

Your file must:

- Allow access to the public website.
- Block an imaginary `/admin/` folder.
- Block an imaginary `/tmp/` folder.
- Reference the sitemap.

Save the file as:

```text
robots.txt
```

Store it in the root directory of your website.

---

## Part 2 - Understanding sitemap.xml

### What is a Sitemap?

A sitemap is an XML document that lists the important pages on a website.

Search engines use the sitemap to:

- Discover pages.
- Understand website structure.
- Find updated content.

Think of a sitemap as a roadmap that helps search engines navigate your website.

### Example Sitemap

```xml
<?xml version="1.0" encoding="UTF-8"?>

<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">

    <url>
        <loc>https://hendrickscarpentry.co.za/index.html</loc>
        <lastmod>2026-10-01</lastmod>
    </url>

    <url>
        <loc>https://hendrickscarpentry.co.za/about.html</loc>
        <lastmod>2026-10-01</lastmod>
    </url>

    <url>
        <loc>https://hendrickscarpentry.co.za/services.html</loc>
        <lastmod>2026-10-01</lastmod>
    </url>

    <url>
        <loc>https://hendrickscarpentry.co.za/enquiry.html</loc>
        <lastmod>2026-10-01</lastmod>
    </url>

    <url>
        <loc>https://hendrickscarpentry.co.za/contact.html</loc>
        <lastmod>2026-10-01</lastmod>
    </url>

</urlset>
```

### Understanding the Elements

| Element | Purpose |
|---|---|
| `<urlset>` | Root element |
| `<url>` | One website page |
| `<loc>` | Full page URL |
| `<lastmod>` | Date last updated |

### What Should Be Included?

Include:

- ✓ Public pages
- ✓ Canonical pages
- ✓ Pages available to search engines
- ✓ Pages that return successful responses

Do not include:

- ✗ Login pages
- ✗ Redirect pages
- ✗ Temporary pages
- ✗ Error pages
- ✗ Administrative sections

### Activity Task 2

Create a sitemap for the Hendricks Carpentry website containing:

- Home
- About
- Services
- Enquiry
- Contact

Save the file as:

```text
sitemap.xml
```

Place it in the website root directory.

---

## Part 3 - Creating a Custom 404 Page

### What is a 404 Error?

A 404 error occurs when a visitor requests a page that does not exist.

Examples:

```text
contact-us.html
old-gallery.html
incorrect-page.html
```

If no custom page exists, visitors usually see a generic server error page.

This creates a poor user experience.

### Why Create a Custom 404 Page?

A custom error page helps visitors:

- Understand what happened.
- Stay on the website.
- Return to useful pages.
- Continue browsing.

A useful 404 page should contain:

- A clear heading.
- An explanation of the error.
- A link back to the home page.
- Links to important pages.

### Example 404 Page

```html
<h1>Page Not Found</h1>

<p>Sorry, we could not find the page you requested.</p>

<p>
    <a href="index.html">Return to Home</a>
</p>
```

### Activity Task 3

Create your own:

```text
404.html
```

The page must include:

- A page title.
- Navigation menu.
- Main heading.
- Error explanation.
- Link back to the home page.
- Website footer.

Use the same design style as the rest of your website.

---

## Part 4 - Additional Supporting Files

Professional websites often include additional files that you may encounter later in your studies.

| File | Purpose |
|---|---|
| `favicon.ico` | Browser tab icon |
| `manifest.json` | Progressive Web App configuration |
| `.htaccess` | Apache server configuration |

At this stage, you only need to understand their purpose. You are not required to create them for this activity.

---

## Part 5 - Professional Website Structure

After completing this activity, your website folder should resemble the following structure:

```text
hendrickscarpentry/
│
├── index.html
├── about.html
├── services.html
├── enquiry.html
├── contact.html
├── 404.html
│
├── styles.css
├── script.js
│
├── robots.txt
├── sitemap.xml
├── favicon.ico
│
├── manifest.json
│
└── images/
    ├── table-oak.jpg
    ├── kitchen-modern.jpg
    └── ...
```

---

## Submission Requirements

Before submitting your work, ensure that you have:

- ✓ Created a valid `robots.txt` file.
- ✓ Created a valid `sitemap.xml` file.
- ✓ Created a custom `404.html` page.
- ✓ Stored all files in the correct directory.
- ✓ Tested your page links.
- ✓ Verified that your website structure is organised correctly.

---

## Reflection Questions

Answer the following questions in your own words:

1. What is the purpose of the `robots.txt` file?
2. Why is a sitemap useful for search engines?
3. What is the difference between crawling and indexing?
4. Why should a website include a custom `404.html` page?
5. Which of the files created in this activity are intended primarily for search engines rather than human visitors?

---

## Key Takeaway

A professional website includes more than pages, images, and stylesheets. Supporting files such as `robots.txt`, `sitemap.xml`, and `404.html` help search engines, servers, and visitors interact with your website effectively. These files are an important part of modern web development and contribute to both usability and SEO.