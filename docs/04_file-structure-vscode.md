# Website File Structure and Visual Studio Code

**Sessions Covered:**
Session 1 – Website File Structure
Session 2 – Visual Studio Code Setup
Session 3 – First HTML Page in VS Code

---

## Ⅰ. Session 1: Building Good Habits — Website File Structure

### A. Learning Outcome

Understand how to organize a basic website project into a clear, scalable folder structure.

### B. Why File Structure Matters

When building websites, it is not just about writing code — it is also about **staying organized**. A clean folder structure helps in several important ways.

**Project Growth**: Your project might begin with one file, but it will grow over time. A good structure helps you scale without confusion or chaos.

**Teamwork**: When others join your project, consistent naming conventions and folder organization help everyone know exactly where things belong.

**Troubleshooting**: It is easier to debug and maintain a site when you know precisely where to look for specific files.

### C. Common Folder Types

Here is a typical structure for a small website project:

```
my-website/
├── index.html
├── pages/
│   └── about.html
├── styles/
│   └── main.css
├── scripts/
│   └── app.js
└── assets/
    ├── images/
    │   └── logo.png
    └── fonts/
```

| Folder | Purpose |
|--------|---------|
| `index.html` | Main landing page of the site |
| `pages/` | Other pages like `about.html`, `contact.html` |
| `styles/` | CSS files to control layout and design |
| `scripts/` | JavaScript files that add behaviour and interaction |
| `assets/` | Static media like images, fonts, and downloadable files |

Think of it like organizing your school bag — each type of content has its own designated place, making everything easy to find when you need it.

### D. Naming Conventions

Keep your file and folder names consistent by following these guidelines.

Use **lowercase** for everything. This helps with compatibility across different operating systems and web servers. Use **hyphens** to separate words, such as `main-style.css`, rather than underscores or camel case. Avoid **spaces and special characters**, as these can cause errors in URLs and commands. Use **descriptive names** that clearly indicate the content, such as `hero-banner.jpg` instead of a vague name like `image1.jpg`.

### E. In-Class Activity: Build a Folder Structure

Create a new folder in Windows Explorer called `simpleWebsite`. Open it in Visual Studio Code. Inside it, create the folder structure shown above. This activity builds habits that will serve you in every future web project.

### F. Bonus Challenge: Fix the Mess

Students are shown a disorganized set of files, such as all files lumped together in one folder or poorly named. Their task is to reorganize the project using the best practices learned in class.

---

## Ⅱ. Understanding Sitemaps

### A. What Is a Sitemap?

A sitemap is a visual or structural representation of the pages that make up a website. It shows how content is organized and how different pages relate to one another. Think of it as a blueprint or a roadmap for your website.

There are two main types of sitemaps.

**Visual Sitemaps** are diagrams used during the planning phase. They help designers, developers, and stakeholders understand the site's structure before any code is written. They show the hierarchy of pages and how users will navigate between them.

**XML Sitemaps** are machine-readable files submitted to search engines like Google. They help search engines discover and index all the pages on your site, even those that might not be easily found through internal links.

### B. Why Sitemaps Matter

Sitemaps are valuable for several reasons.

They help with **planning and organization**, ensuring that all necessary pages are accounted for before development begins. They improve **user experience** by revealing navigation gaps or confusing structures early in the design process. They support **search engine optimization** by helping search engines understand the site's architecture and find all content. They facilitate **team communication**, providing a single visual reference that everyone can use to discuss the project.

### C. Example: Simple Sitemap for a Basic Website

For our `my-website/` project, the sitemap would look like this:

```
Home (index.html)
├── About (pages/about.html)
├── Contact (pages/contact.html)
└── Services (pages/services.html)
```

This simple hierarchy shows three sub-pages linked from the homepage, each containing its own content.

---

## Ⅲ. Scaling Up: Complex Project Scenarios

The principles you learn with a simple website scale directly to much larger, more complex projects. The folder structure adapts to accommodate additional content types, features, and user roles. Below are three real-world scenarios that demonstrate how the same organizational habits apply at scale.

### A. Scenario 1: E-Commerce Website

An online store needs to manage products, categories, user accounts, shopping carts, and checkout processes. The structure must accommodate both customer-facing pages and administrative functions.

**Sitemap Overview:**

```
Home
├── Shop
│   ├── Category: Electronics
│   │   ├── Product: Laptop
│   │   └── Product: Headphones
│   ├── Category: Clothing
│   │   ├── Product: Jacket
│   │   └── Product: T-Shirt
│   └── Category: Books
│       ├── Product: Fiction
│       └── Product: Non-Fiction
├── Cart
├── Checkout
│   ├── Shipping Information
│   ├── Payment Details
│   └── Order Confirmation
├── My Account
│   ├── Order History
│   ├── Profile Settings
│   └── Wishlist
├── About
└── Contact
```

**Folder Structure:**

```
ecommerce-site/
├── index.html
├── shop/
│   ├── electronics/
│   │   ├── laptop.html
│   │   └── headphones.html
│   ├── clothing/
│   │   ├── jacket.html
│   │   └── tshirt.html
│   └── books/
│       ├── fiction.html
│       └── nonfiction.html
├── cart/
│   └── index.html
├── checkout/
│   ├── shipping.html
│   ├── payment.html
│   └── confirmation.html
├── account/
│   ├── orders.html
│   ├── profile.html
│   └── wishlist.html
├── styles/
│   ├── main.css
│   ├── shop.css
│   └── checkout.css
├── scripts/
│   ├── cart.js
│   ├── checkout.js
│   └── account.js
├── assets/
│   ├── images/
│   │   ├── products/
│   │   └── banners/
│   └── fonts/
└── admin/
    ├── index.html
    ├── products.html
    ├── orders.html
    └── customers.html
```

### B. Scenario 2: Dashboard / Management Application

A management dashboard consolidates data, analytics, user administration, and system configuration into a single interface. The focus is on efficiency, clarity, and ease of access for administrators.

**Sitemap Overview:**

```
Dashboard
├── Analytics
│   ├── Overview
│   ├── Reports
│   └── Realtime Data
├── Users
│   ├── All Users
│   ├── Add New User
│   ├── Roles & Permissions
│   └── Activity Logs
├── Content
│   ├── Pages
│   ├── Blog Posts
│   ├── Media Library
│   └── Comments
├── Settings
│   ├── General
│   ├── Security
│   ├── Integrations
│   └── Backups
└── Support
    ├── Tickets
    ├── Knowledge Base
    └── Feedback
```

**Folder Structure:**

```
dashboard-app/
├── index.html
├── analytics/
│   ├── overview.html
│   ├── reports.html
│   └── realtime.html
├── users/
│   ├── index.html
│   ├── add.html
│   ├── roles.html
│   └── logs.html
├── content/
│   ├── pages.html
│   ├── posts.html
│   ├── media.html
│   └── comments.html
├── settings/
│   ├── general.html
│   ├── security.html
│   ├── integrations.html
│   └── backups.html
├── support/
│   ├── tickets.html
│   ├── knowledge.html
│   └── feedback.html
├── styles/
│   ├── main.css
│   ├── dashboard.css
│   └── tables.css
├── scripts/
│   ├── charts.js
│   ├── users.js
│   └── notifications.js
├── assets/
│   ├── images/
│   ├── icons/
│   └── fonts/
└── components/
    ├── sidebar.html
    ├── header.html
    └── footer.html
```

### C. Scenario 3: Content-Rich Publishing Platform

A content-rich platform, such as a news site or educational resource, requires careful organization of articles, topics, authors, and archives. The structure must support both browsing and searching.

**Sitemap Overview:**

```
Home
├── Articles
│   ├── Category: Technology
│   │   ├── Article 1
│   │   ├── Article 2
│   │   └── Article 3
│   ├── Category: Health
│   │   ├── Article 1
│   │   └── Article 2
│   └── Category: Business
│       ├── Article 1
│       └── Article 2
├── Authors
│   ├── Author Profile: Jane Doe
│   └── Author Profile: John Smith
├── Topics
│   ├── Topic: Artificial Intelligence
│   ├── Topic: Sustainability
│   └── Topic: Innovation
├── Archives
│   ├── 2024
│   ├── 2025
│   └── 2026
├── About
└── Contact
```

**Folder Structure:**

```
publishing-platform/
├── index.html
├── articles/
│   ├── technology/
│   │   ├── article1.html
│   │   ├── article2.html
│   │   └── article3.html
│   ├── health/
│   │   ├── article1.html
│   │   └── article2.html
│   └── business/
│       ├── article1.html
│       └── article2.html
├── authors/
│   ├── janedoe.html
│   └── johnsmith.html
├── topics/
│   ├── ai.html
│   ├── sustainability.html
│   └── innovation.html
├── archives/
│   ├── 2024/
│   │   ├── index.html
│   │   ├── january.html
│   │   └── february.html
│   ├── 2025/
│   │   ├── index.html
│   │   └── january.html
│   └── 2026/
│       └── index.html
├── styles/
│   ├── main.css
│   ├── articles.css
│   └── archive.css
├── scripts/
│   ├── search.js
│   └── navigation.js
├── assets/
│   ├── images/
│   │   ├── articles/
│   │   └── authors/
│   └── fonts/
└── partials/
    ├── header.html
    ├── footer.html
    └── sidebar.html
```

---

## Ⅳ. Session 2: Installing and Exploring Visual Studio Code

### A. Learning Outcome

Install VS Code and explore its key features and tools for efficient web development.

### B. Why Use Visual Studio Code?

| Feature | Why It Helps |
|---------|--------------|
| Lightweight | Runs fast even on basic hardware |
| Customizable | Add extensions to suit your workflow |
| Popular | Used by professionals, so your skills will scale |
| Beginner Friendly | Easy to install, navigate, and personalize |

VS Code is like the Swiss Army knife for web development — flexible, powerful, and easy to use.

### C. Key Features You Should Know

**Syntax highlighting** makes your code easier to read and understand at a glance. **IntelliSense and autocomplete** help you write code faster with fewer mistakes by suggesting completions as you type. **Multi-cursor editing** allows you to edit multiple lines simultaneously, which is invaluable for repetitive changes. **Emmet shorthand** lets you type less and code more; for example, `ul>li*5` generates a list with five items instantly. The **integrated terminal** allows you to run commands without leaving VS Code.

### D. Recommended Extensions

| Extension | What It Does |
|-----------|--------------|
| Live Server | Instantly preview your site in the browser with auto-refresh |
| Prettier | Automatically formats your code for consistency and neatness |
| CSS Peek | Jump from HTML to CSS definitions instantly |

Extensions are upgrades for your editor. Students installed these in class to enhance their development workflow.

### E. Homework: Extension Hunt

Students were asked to browse the VS Code Extension Marketplace, install one tool that improves their workflow, and write a short reflection answering: What did it do? Was it helpful? This exercise encourages exploration and self-directed learning.

### F. Case Study: VS Code Versus Other Editors

Students discussed why developers choose VS Code over alternatives such as Notepad, Notepad++, or Brackets. The answers typically include better performance, more extensive community support, and modern tooling that streamlines the development process.

---

## Ⅴ. Session 3: First HTML Page in VS Code

### A. Learning Outcome

Write a simple HTML page using VS Code and preview it in the browser using Live Server.

### B. Writing Basic HTML Boilerplate

In VS Code, type `!` and press `Tab` to generate an HTML5 boilerplate. This is an Emmet shortcut that saves time and ensures you start with a valid structure.

Understanding the structure is equally important.

`<!DOCTYPE html>` declares the document as HTML5. The `<html>` element is the main container for the entire page. The `<head>` contains metadata, the page title, and links to external resources such as CSS files. The `<body>` contains the visible content that users actually see.

### C. Preview with Live Server

Right-click your HTML file and select **Open with Live Server**. Your browser will open with a live preview of your page. When you save your file, the page automatically refreshes to reflect your changes. Live Server creates a local development server, which is useful for testing dynamic content later, such as JavaScript interactions.

### D. Handy VS Code Shortcuts

| Shortcut | What It Does |
|----------|--------------|
| `Ctrl + /` | Comment or uncomment a line |
| `Alt + Shift + F` | Auto-format the entire document |
| `Ctrl + B` | Toggle sidebar visibility |
| `Ctrl + P` | Quick open any file |
| `Ctrl + Shift + E` | Go to File Explorer panel |
| Split View | Open and edit multiple files side-by-side |

### E. In-Class Activities

**Mini Sprint**: Students created a simple homepage (`index.html`) with a heading (`<h1>`), a paragraph (`<p>`), and an image (`<img>`). This activity consolidates the basic HTML elements they have learned.

**Live Editing Relay**: In pairs, one student wrote a basic page. The other student improved it by adding proper structure, adding comments, and fixing indentation or typos. This peer-review approach reinforces good habits and attention to detail.

### F. HTML Boilerplate Breakdown

Students examined what each part of the HTML template does and how VS Code helps reduce repetitive typing through Emmet shorthand, snippets, and code suggestions.

---

## Ⅵ. Summary: What Students Should Now Be Able to Do

| Skill | Outcome |
|-------|---------|
| Organize project files | Use folders like `assets/`, `styles/`, and `pages/` appropriately |
| Use good file naming conventions | Consistent lowercase, no spaces or special characters |
| Install and navigate Visual Studio Code | Understand basic panels, tabs, and sidebar |
| Add useful extensions | Live Server, Prettier, CSS Peek, and more |
| Write basic HTML in VS Code | Use boilerplate, structure content, preview live in browser |
| Use common IDE shortcuts | Work faster and cleaner |

---

### Reflection Questions

1. Why is a clear file structure important in web development, even for small projects?
2. Which VS Code feature or extension made your life easier during this session?
3. What was challenging about writing your first HTML page?
4. How do the complex scenarios presented above help you understand the importance of good organizational habits?
5. What do you want to explore or improve next?

---