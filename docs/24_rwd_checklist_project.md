# Project and Reflection

You have now completed the Responsive Web Design unit. You have learned about fluid layouts, media queries, mobile-first design, responsive navigation, frameworks, testing, and debugging. This final session brings everything together in a project showcase and reflection exercise.

The goal is not just to demonstrate what you have built, but to articulate *why* you made certain decisions, *how* you approached challenges, and *what* you would do differently next time. These are the skills that separate developers who can build from developers who can *explain their craft*.

---

## Session 10: Project Showcase and Unit Reflection

### A. Learning Outcome

Present and explain a responsive website project, receive and give constructive feedback, and reflect on the learning journey.

### B. The Project Showcase

**What to Present:**

| Element | Description |
|---------|-------------|
| **Live Demo** | Show the site working on different devices |
| **Code Walkthrough** | Explain key CSS and HTML decisions |
| **Design Decisions** | Why did you choose certain breakpoints, layouts, colours? |
| **Challenges** | What was difficult and how did you overcome it? |
| **What's Next** | What would you improve if you had more time? |

**Presentation Structure (5-7 minutes):**

1. **Introduction** (1 min) — What is the site about?
2. **Live Demo** (2 min) — Show mobile, tablet, and desktop views
3. **Technical Walkthrough** (2 min) — Highlight key code decisions
4. **Challenges and Learnings** (1 min) — What was difficult?
5. **Next Steps** (1 min) — What would you improve?

### C. Responsive Project Templates

Below are two project templates students can use as a starting point for their final project. These are not meant to be copied exactly, but to inspire layout strategies.

**Template A: Flex-Based Service Page (Charity/Community)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Helping Hands</title>
  <style>
    /* ========================================
       BASE: Mobile-First
       ======================================== */

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      line-height: 1.6;
      color: #2d3436;
      background: #f8f9fa;
    }

    /* Header */
    header {
      background: #2d3436;
      color: white;
      padding: 40px 20px;
      text-align: center;
    }

    header h1 {
      font-size: 2rem;
      margin-bottom: 10px;
    }

    header p {
      font-size: 1.1rem;
      color: #b2bec3;
    }

    /* Main Container */
    .flex-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .main-content {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }

    .main-content h2 {
      color: #2d3436;
      margin-bottom: 10px;
    }

    .main-content p {
      color: #636e72;
      margin-bottom: 15px;
    }

    .sidebar {
      background: #dfe6e9;
      padding: 25px;
      border-radius: 12px;
    }

    .sidebar h3 {
      color: #2d3436;
      margin-bottom: 10px;
    }

    .sidebar ul {
      list-style: none;
    }

    .sidebar ul li {
      padding: 8px 0;
      border-bottom: 1px solid #b2bec3;
    }

    .sidebar ul li:last-child {
      border-bottom: none;
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 20px;
      background: #2d3436;
      color: #b2bec3;
      margin-top: 20px;
    }

    /* ========================================
       TABLET: 768px and up
       ======================================== */

    @media (min-width: 768px) {
      header {
        padding: 60px 40px;
      }

      header h1 {
        font-size: 2.5rem;
      }

      .flex-container {
        flex-direction: row;
        align-items: stretch;
        gap: 30px;
      }

      .main-content {
        flex: 3;
      }

      .sidebar {
        flex: 1;
      }
    }

    /* ========================================
       DESKTOP: 1024px and up
       ======================================== */

    @media (min-width: 1024px) {
      header {
        padding: 80px 40px;
      }

      header h1 {
        font-size: 3rem;
      }

      .flex-container {
        padding: 40px;
        gap: 40px;
      }

      .main-content {
        padding: 35px;
        font-size: 1.1rem;
      }

      .sidebar {
        padding: 35px;
      }
    }
  </style>
</head>
<body>

  <header>
    <h1>Helping Hands</h1>
    <p>Supporting our community, one step at a time.</p>
  </header>

  <div class="flex-container">
    <section class="main-content">
      <h2>Our Services</h2>
      <p>We provide food drives, shelter support, and community outreach programmes to those in need.</p>
      <p>Join us in making a difference. Every contribution, whether time or resources, helps build a stronger community.</p>
    </section>

    <aside class="sidebar">
      <h3>Upcoming Events</h3>
      <ul>
        <li>Food Drive – 30 September</li>
        <li>Winter Coat Giveaway – 15 October</li>
        <li>Community Clean-Up – 5 November</li>
      </ul>
    </aside>
  </div>

  <footer>
    <p>&copy; 2025 Helping Hands Foundation</p>
  </footer>

</body>
</html>
```

**Template B: Grid-Based Business Homepage**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BizLaunch</title>
  <style>
    /* ========================================
       BASE: Mobile-First
       ======================================== */

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      background: #f8f9fa;
      color: #2d3436;
    }

    .grid-wrapper {
      display: grid;
      grid-template-areas:
        "header"
        "nav"
        "main"
        "aside"
        "footer";
      gap: 15px;
      padding: 15px;
      max-width: 1200px;
      margin: 0 auto;
      min-height: 100vh;
    }

    /* Header */
    .header {
      grid-area: header;
      background: linear-gradient(135deg, #2d3436, #0984e3);
      color: white;
      padding: 30px 20px;
      text-align: center;
      border-radius: 12px;
      font-size: 1.8rem;
      font-weight: 700;
    }

    /* Navigation */
    .nav {
      grid-area: nav;
      display: flex;
      flex-direction: column;
      gap: 8px;
      background: white;
      padding: 15px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }

    .nav a {
      text-decoration: none;
      color: #2d3436;
      padding: 10px 15px;
      border-radius: 6px;
      font-weight: 500;
      transition: background 0.2s ease, color 0.2s ease;
    }

    .nav a:hover {
      background: #dfe6e9;
      color: #0984e3;
    }

    .nav a.active {
      background: #0984e3;
      color: white;
    }

    /* Main Content */
    .main {
      grid-area: main;
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }

    .main h1 {
      color: #2d3436;
      margin-bottom: 10px;
      font-size: 1.8rem;
    }

    .main p {
      color: #636e72;
      line-height: 1.8;
    }

    .main .cta {
      display: inline-block;
      margin-top: 15px;
      padding: 12px 30px;
      background: #0984e3;
      color: white;
      text-decoration: none;
      border-radius: 30px;
      font-weight: 600;
      transition: background 0.3s ease, transform 0.2s ease;
    }

    .main .cta:hover {
      background: #0873c7;
      transform: translateY(-2px);
    }

    /* Aside */
    .aside {
      grid-area: aside;
      background: #dfe6e9;
      padding: 20px;
      border-radius: 12px;
    }

    .aside h2 {
      color: #2d3436;
      font-size: 1.2rem;
      margin-bottom: 10px;
    }

    .aside p {
      color: #636e72;
      font-size: 0.95rem;
      line-height: 1.6;
    }

    .aside .highlight {
      background: white;
      padding: 15px;
      border-radius: 8px;
      margin-top: 10px;
      border-left: 4px solid #0984e3;
    }

    /* Footer */
    .footer {
      grid-area: footer;
      background: #2d3436;
      color: #b2bec3;
      padding: 20px;
      text-align: center;
      border-radius: 12px;
    }

    /* ========================================
       TABLET & DESKTOP: 768px and up
       ======================================== */

    @media (min-width: 768px) {
      .grid-wrapper {
        grid-template-columns: 1fr 3fr;
        grid-template-areas:
          "header header"
          "nav main"
          "aside main"
          "footer footer";
        gap: 20px;
        padding: 20px;
      }

      .nav {
        flex-direction: column;
        align-items: stretch;
        padding: 15px;
      }

      .nav a {
        text-align: center;
      }

      .header {
        font-size: 2rem;
        padding: 35px 20px;
      }
    }

    /* ========================================
       LARGE DESKTOP: 1024px and up
       ======================================== */

    @media (min-width: 1024px) {
      .grid-wrapper {
        grid-template-columns: 1fr 3fr 1fr;
        grid-template-areas:
          "header header header"
          "nav main aside"
          "footer footer footer";
        gap: 25px;
        padding: 30px;
      }

      .header {
        font-size: 2.5rem;
        padding: 45px 20px;
      }

      .main h1 {
        font-size: 2.2rem;
      }

      .main p {
        font-size: 1.05rem;
      }

      .nav {
        padding: 20px;
      }
    }
  </style>
</head>
<body>

  <div class="grid-wrapper">
    <header class="header">BizLaunch</header>

    <nav class="nav">
      <a href="#" class="active">Home</a>
      <a href="#">Services</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>

    <main class="main">
      <h1>Empowering Startups</h1>
      <p>We provide mentorship, marketing strategies, and funding access to help early-stage businesses scale and succeed.</p>
      <p>Our network of experienced entrepreneurs and investors is dedicated to turning bold ideas into thriving enterprises.</p>
      <a href="#" class="cta">Get Started</a>
    </main>

    <aside class="aside">
      <h2>Latest News</h2>
      <div class="highlight">
        <p><strong>New Cohort</strong></p>
        <p>Applications open October 2025</p>
      </div>
      <div class="highlight">
        <p><strong>Funding Round</strong></p>
        <p>R5M raised for emerging startups</p>
      </div>
    </aside>

    <footer class="footer">
      <p>&copy; 2025 BizLaunch Co. All rights reserved.</p>
    </footer>
  </div>

</body>
</html>
```

### D. Project Checklist

Use this checklist to ensure your project meets all requirements:

**HTML Structure (10 marks)**

- [ ] Semantic HTML5 tags used (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- [ ] Clean, indented, well-commented code
- [ ] Valid HTML (passes W3C validation)
- [ ] Viewport meta tag included
- [ ] Appropriate `alt` text for images

**CSS Styling (15 marks)**

- [ ] External CSS file linked
- [ ] CSS variables used for theming
- [ ] Consistent colour palette
- [ ] Typography uses Google Fonts or font stack
- [ ] Comments explain key sections

**Responsiveness (15 marks)**

- [ ] Mobile-first approach
- [ ] Fluid layout with `%`, `vw`, or `fr` units
- [ ] At least 2 media queries
- [ ] Responsive navigation (hamburger on mobile)
- [ ] Images scale with `max-width: 100%`
- [ ] No horizontal overflow
- [ ] Touch targets are accessible (44px minimum)

**Accessibility (5 marks)**

- [ ] ARIA labels where needed
- [ ] Keyboard-navigable
- [ ] Sufficient colour contrast
- [ ] Focus indicators visible

**Documentation (5 marks)**

- [ ] README.md with project overview
- [ ] Reflection on design decisions
- [ ] Screenshots of mobile, tablet, and desktop views
- [ ] Known issues or future improvements

### E. Peer Feedback Prompts

When reviewing a peer's project, consider these questions:

**Design and UX:**
- What works well at different screen sizes?
- How clear is the content hierarchy?
- Where could spacing, contrast, or readability be improved?

**Technical:**
- Is the code clean and well-commented?
- Are media queries in the right order?
- Does the navigation work on all screen sizes?

**Accessibility:**
- Can you navigate with the keyboard?
- Are images described with `alt` text?
- Is there sufficient colour contrast?

**Overall:**
- What is one thing you would improve?
- What is one thing you would copy for your own project?

### F. Unit Reflection Questions

Use these questions to reflect on your learning journey:

1. **What was the most surprising thing you learned about responsive design?**

2. **What was the most challenging concept, and how did you overcome it?**

3. **What design choices are you most proud of in your project?**

4. **What would you do differently if you started over?**

5. **How has your understanding of mobile-first design changed?**

6. **What is one thing you still want to learn about responsive design?**

### G. Submission Checklist

Each student submits:

- [ ] Link to GitHub repository
- [ ] Live GitHub Pages link
- [ ] README.md with:
  - Summary of the project purpose
  - Techniques used (Flexbox, Grid, media queries, etc.)
  - Screenshots of mobile, tablet, and desktop views
  - Reflection on the learning process

### H. Closing Message

> Responsive design is not a single technique — it's a **philosophy of adaptability**. Whether you are building a site for a coffee shop, a non-profit, or a SaaS platform, your ability to adapt your layout to the user's context is what makes your site modern, inclusive, and effective.
>
> The web is constantly evolving, and new devices will continue to emerge. But with the principles you have learned — mobile-first thinking, fluid layouts, media queries, and content prioritization — you have the foundation to build websites that work for everyone, everywhere.

---

## Session Summary

| Concept | Key Idea |
|---------|----------|
| Project Showcase | Present and explain your work |
| Code Walkthrough | Explain why you made certain decisions |
| Peer Feedback | Learn from others' approaches |
| Reflection | Articulate what you learned |
| Documentation | Write clear README and comments |
| Continuous Learning | The web evolves; keep learning |

---

### Resources for Further Study

- [MDN: Responsive Design](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design)
- [Google: Mobile-First Indexing](https://developers.google.com/search/docs/fundamentals/mobile-friendly)
- [CSS Tricks: Responsive Design](https://css-tricks.com/responsive-design/)
- [WebAIM: Accessibility](https://webaim.org/)

---
