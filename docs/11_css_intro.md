# Introduction to CSS

You have learned how to structure content using HTML — creating headings, paragraphs, lists, images, links, tables, and forms. But a page built with HTML alone, while functional, often appears plain and uninviting. This is where CSS enters the picture.

CSS, or Cascading Style Sheets, is the language that transforms a basic HTML document into a visually engaging, professionally designed web page. It controls everything from colours and fonts to layouts and animations. In this document, you will discover what CSS is, why it matters, and how to apply it to your HTML documents.

---

## Session 1: What is CSS and Why Is It Powerful?

Before you write a single line of CSS, it is essential to understand *what* it is and *why* it revolutionises the way we build websites. This session introduces the core concepts of CSS and demonstrates its transformative power.

### A. Learning Outcome

Understand what CSS is, its role in web development, and how it enhances HTML content visually and semantically.

### B. What Is CSS?

CSS stands for **Cascading Style Sheets**. It is a stylesheet language used to describe the presentation of a document written in HTML. While HTML provides the structure and meaning of content, CSS controls how that content looks and is arranged.

Think of HTML as the **architectural blueprint** of a house — it defines the rooms, walls, and structural elements. CSS is the **interior designer** — it selects the paint colours, the furniture, the lighting, and the overall aesthetic that makes the space inviting and functional.

### C. What Does CSS Control?

CSS gives you control over three primary categories of design:

| Category | What It Controls | Examples |
|----------|------------------|----------|
| **Typography** | How text looks and feels | Font family, size, weight, line height, letter spacing |
| **Layout** | How elements are positioned on the page | Margins, padding, display, positioning, flexbox, grid |
| **Decoration** | Visual enhancements that add polish | Colours, borders, shadows, backgrounds, gradients, animations |

### D. Why Separate Content from Presentation?

One of the most important principles in web development is **separation of concerns**. This means keeping the structure (HTML) separate from the presentation (CSS) and the behaviour (JavaScript). There are several compelling reasons for this approach.

**Maintainability:** When styles are kept in a separate file, you can change the entire look of a website by editing just one CSS file, rather than updating every single HTML page.

**Reusability:** A single CSS file can be linked to multiple HTML pages, ensuring consistent styling across an entire website.

**Accessibility:** Separating content from presentation makes it easier for screen readers and other assistive technologies to interpret the page correctly.

**Performance:** Browsers can cache CSS files, meaning they only need to download them once, reducing load times for subsequent pages.

**Collaboration:** Designers can work on CSS while developers work on HTML, without interfering with each other's work.

### E. The Power of CSS: Visual Remix

To truly appreciate the power of CSS, consider a single HTML document. By applying different CSS stylesheets, the exact same content can look radically different — from a clean, minimalist design to a vibrant, playful layout, or even a retro, vintage aesthetic.

This demonstrates that CSS does not change the content; it changes how that content is *presented*. The HTML remains untouched, while the CSS transforms the visual experience entirely.

### F. Example: The Same HTML, Three Different Styles

**Base HTML (same for all versions):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Visual Remix</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Welcome to My Page</h1>
  </header>
  <section>
    <p>This is a basic webpage. Let's explore how styling can make it pop!</p>
  </section>
</body>
</html>
```

**Style 1: Retro Theme**

```css
/* Retro Theme: warm, vintage, typewriter feel */
body {
  background-color: #fdf6e3;           /* Pale paper-like background */
  font-family: "Courier New", Courier, monospace; /* Typewriter font */
  color: #002b36;                      /* Rich navy text */
}

header {
  border-bottom: 2px solid #073642;
  padding-bottom: 10px;
}

h1 {
  color: #b58900;                      /* Golden yellow heading */
}
```

**Style 2: Futuristic Theme**

```css
/* Futuristic Theme: dark, neon, tech feel */
body {
  background-color: #1a1a1a;           /* Dark background */
  font-family: "Orbitron", sans-serif; /* Techy font */
  color: #00ffe0;                      /* Neon cyan text */
}

h1 {
  text-transform: uppercase;
  text-shadow: 0 0 10px #00ffe0;       /* Neon glow effect */
}

header {
  border-bottom: 1px dashed #00ffe0;
  margin-bottom: 20px;
}
```

**Style 3: Minimalist Theme**

```css
/* Minimalist Theme: clean, spacious, modern */
body {
  background-color: #ffffff;
  font-family: "Helvetica Neue", Arial, sans-serif;
  color: #333333;
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}

header {
  border-bottom: 3px solid #0077cc;
  padding-bottom: 20px;
}

h1 {
  color: #0077cc;
  font-weight: 300;
  letter-spacing: 2px;
}
```

**Key Teaching Points:**

- The HTML structure remains unchanged across all three versions.
- Each CSS file produces a completely different visual experience.
- This demonstrates the power and flexibility of CSS.
- Students can see how design choices (colours, fonts, spacing) affect the mood and readability of a page.

### G. In-Class Activity: Visual Remix

**Goal:** Show the same HTML rendered with different CSS styles to demonstrate its power.

**Instructions:**

1. Provide the HTML file above.
2. Show them the three different CSS stylesheets (Retro, Futuristic, Minimalist).
3. Ask to switch between stylesheets and observe the changes.
4. Discuss: Which style feels most appropriate for a professional portfolio? A personal blog? A tech startup?

**Discussion Prompts:**

- "What's the first thing you notice when the style changes?"
- "How do colours affect the mood of the page?"
- "Why do we apply styles separately from the HTML structure?"
- "Which style would you choose for your own portfolio, and why?"

### H. Homework Prompt

**Topic:** Design Reflection

Find a website you admire visually and describe:

- What makes the site visually appealing?
- Which elements (colours, fonts, layout) do you think are controlled by CSS?
- What kind of impression or emotion do the styles convey?

Submit your response (150-200 words) on the Learning Management System.

### I. Session Summary

| Concept | Key Idea |
|---------|----------|
| CSS Definition | A stylesheet language that controls presentation |
| Separation of Concerns | HTML = structure, CSS = presentation |
| Three CSS Categories | Typography, Layout, Decoration |
| Benefits of CSS | Maintainability, Reusability, Accessibility, Performance |
| Visual Remix | Same HTML, different CSS = completely different look |

---

## Session 2: How to Apply CSS — Placement Methods

Now that you understand what CSS is and why it matters, it is time to learn *how* to apply it to your HTML documents. CSS can be added in three different ways, each with its own use cases, advantages, and disadvantages.

### A. Learning Outcome

Understand the three main CSS placement methods — inline, internal, and external — and know when to use each approach.

### B. The Three Placement Methods

| Method | Location | Best For | Pros | Cons |
|--------|----------|----------|------|------|
| **Inline** | Inside an HTML element's `style` attribute | Quick debugging, single-element exceptions | Fast to apply, high specificity | Hard to maintain, mixes content with style |
| **Internal** | Inside `<style>` tags in the `<head>` | Single-page demos, prototyping | All styles in one file, easy to test | Cannot be reused across multiple pages |
| **External** | In a separate `.css` file linked via `<link>` | Professional websites, multi-page projects | Reusable, maintainable, cacheable | Requires an extra HTTP request |

### C. Method 1: Inline CSS

Inline CSS is applied directly to an HTML element using the `style` attribute. This method applies styles to that specific element only.

**Example:**

```html
<!-- Inline CSS: applied directly to the element -->
<p style="color: red; font-size: 20px;">
  This paragraph uses inline styling.
</p>
```

**When to Use Inline CSS:**
- Quick debugging or testing
- Applying a unique style to a single element that should not affect others
- Email templates (where external CSS is often not supported)

**When NOT to Use Inline CSS:**
- For large projects or production websites
- When styles need to be reused across multiple elements
- When you need to maintain separation of concerns

### D. Method 2: Internal CSS

Internal CSS is placed inside a `<style>` tag within the `<head>` section of an HTML document. These styles apply to the entire page.

**Example:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Internal CSS Example</title>
  <!-- Internal CSS: styles are placed in the <style> tag -->
  <style>
    body {
      background-color: #f0f0f0;
    }

    h1 {
      color: #0066cc;
      font-family: Arial, sans-serif;
    }

    p {
      font-size: 16px;
      line-height: 1.5;
    }
  </style>
</head>
<body>
  <h1>Welcome!</h1>
  <p>This page is styled using internal CSS.</p>
</body>
</html>
```

**When to Use Internal CSS:**
- Single-page websites or demos
- Prototyping and rapid testing
- When you want all styles in one file for easy reference

**When NOT to Use Internal CSS:**
- For multi-page websites (styles cannot be reused)
- When you need to maintain a consistent look across multiple pages

### E. Method 3: External CSS

External CSS is placed in a separate `.css` file and linked to the HTML document using the `<link>` tag. This is the recommended approach for professional web development.

**Example: HTML File (`index.html`)**

```html
<!DOCTYPE html>
<html>
<head>
  <title>External CSS Example</title>
  <!-- External CSS: linked using the <link> tag -->
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>External Stylesheet</h1>
  <p>This content is styled using an external CSS file.</p>
</body>
</html>
```

**Example: CSS File (`styles.css`)**

```css
/* External stylesheet for index.html */

/* Style the page background and text */
body {
  background-color: #fffaf0;        /* Light cream background */
  color: #333;                      /* Readable dark gray text */
  font-family: 'Segoe UI', sans-serif;
}

/* Style the heading */
h1 {
  color: #8a2be2;                   /* Vivid purple */
  text-align: center;
  margin-top: 40px;
}

/* Style the paragraph */
p {
  font-size: 18px;
  padding: 10px 20px;
  border-left: 4px solid #8a2be2;
  background-color: #f9f9f9;
}
```

**When to Use External CSS:**
- Professional websites and applications
- Multi-page projects where consistency is important
- Teams working collaboratively on large projects

**Advantages of External CSS:**
- **Reusability:** One CSS file can style multiple HTML pages
- **Maintainability:** Changes made in one file affect the entire site
- **Caching:** Browsers cache CSS files, improving load times
- **Separation of Concerns:** HTML focuses on structure, CSS on presentation

### F. In-Class Activity: Style Migration

**Goal:** Refactor a page from inline styles to external CSS.

**Scenario:** Students are given a simple HTML file with inline styles and must refactor it by:

1. Moving all inline styles into an internal `<style>` tag
2. Then, refactoring again into a clean external `styles.css` file
3. Testing each version in the browser

**Starting Code (with Inline Styles):**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Migration Challenge</title>
</head>
<body>
  <h1 style="color: blue; font-size: 32px; text-align: center;">My Page</h1>
  <p style="color: #333; font-size: 16px; line-height: 1.6; padding: 20px;">
    This page uses inline styles. Let's refactor it!
  </p>
</body>
</html>
```

**Step 1: Internal CSS Version**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Migration Challenge</title>
  <style>
    h1 {
      color: blue;
      font-size: 32px;
      text-align: center;
    }

    p {
      color: #333;
      font-size: 16px;
      line-height: 1.6;
      padding: 20px;
    }
  </style>
</head>
<body>
  <h1>My Page</h1>
  <p>This page uses internal styles. Let's refactor it!</p>
</body>
</html>
```

**Step 2: External CSS Version**

HTML file (`index.html`):

```html
<!DOCTYPE html>
<html>
<head>
  <title>Migration Challenge</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>My Page</h1>
  <p>This page uses external styles. This is best practice!</p>
</body>
</html>
```

CSS file (`styles.css`):

```css
h1 {
  color: blue;
  font-size: 32px;
  text-align: center;
}

p {
  color: #333;
  font-size: 16px;
  line-height: 1.6;
  padding: 20px;
}
```

**Key Learning Points:**

- Each version works identically in the browser
- The external version is more maintainable and reusable
- Students understand the progression from inline to external

### G. Introduction to Developer Tools

One of the most valuable skills for any web developer is learning how to inspect and debug CSS using browser Developer Tools.

**Opening DevTools:**
- **Chrome/Edge:** Right-click → Inspect (or `Ctrl+Shift+I` / `Cmd+Option+I`)
- **Firefox:** Right-click → Inspect Element (or `Ctrl+Shift+I` / `Cmd+Option+I`)

**What You Can Do with DevTools:**
- Inspect which styles are applied to any element
- See which styles are inherited from parent elements
- Toggle styles on and off to see their effect
- Edit CSS live and see changes instantly
- Debug layout issues using the Box Model inspector

**Activity: Page Debug**

Ask students to:
1. Open any website in their browser
2. Right-click on an element and select "Inspect"
3. Look at the Styles panel to see which CSS rules apply
4. Toggle a style off and on to see how it affects the page

### H. Homework Prompt

**Challenge: Two-Page Mini Site**

Create a mini site with two HTML pages:
- Each page must share the same **external stylesheet**
- The stylesheet should define a consistent **colour palette** and **typography**
- Use headings, paragraphs, and a navigation bar to demonstrate styling

**Additional Requirements:**
- Include a `README.md` describing the CSS placement used and why external CSS was chosen
- Write a short reflection on how styling made the pages feel more "polished"

**Git Workflow:**
- Create a new feature branch: `css-placement`
- Commit working versions for internal and external CSS
- Final push includes `index.html`, `about.html`, `styles.css`, and `README.md`

### I. Session Summary

| Method | Location | Best For | Key Characteristic |
|--------|----------|----------|-------------------|
| Inline | `style` attribute | Single-element exceptions | High specificity, hard to maintain |
| Internal | `<style>` tag in `<head>` | Single-page demos | Styles stay in one file |
| External | Separate `.css` file | Professional projects | Reusable, maintainable, cacheable |

### J. Reflection Questions

1. Why is external CSS considered best practice for professional websites?
2. When might inline CSS be useful despite its drawbacks?
3. How does separating content (HTML) from presentation (CSS) improve collaboration on a team?
4. What did you learn about CSS by using Developer Tools to inspect existing websites?

---
