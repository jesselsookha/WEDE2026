# HTML Basics

Welcome to your practical journey into HTML coding. Before we dive into writing code, it is important to understand the foundational structure and principles that underpin every webpage. This document introduces the essential framework of HTML documents, the attributes that configure elements, and the natural flow of content within a page.

---

## Session 1: The Top-Level Structure of an HTML Document

In this session, we introduce the essential structure of an HTML document. Understanding this layout is foundational to all web development, as every webpage begins with this framework.

### A. Learning Outcome

Understand the skeleton of every HTML document and the purpose of each required component.

### B. The Document Declaration: `<!DOCTYPE html>`

The very first line in any HTML5 document should be:

```html
<!DOCTYPE html>
```

This declaration serves a critical purpose. It is not an HTML tag; rather, it is an instruction to the browser. It tells the browser to use the HTML5 standard to render the page, ensuring it runs in **standards mode** rather than "quirks mode" — an outdated compatibility mode that mimics old browser bugs.

This line must appear at the very top of your HTML file, before anything else. Omitting it can cause your page to render inconsistently across different browsers.

### C. The Root Element: `<html>`

The `<html>` element is the outermost container for everything on the webpage.

```html
<html lang="en"> ... </html>
```

Everything on the page — both visible content and invisible metadata — goes inside the `<html>` tag. The `lang="en"` attribute specifies the language of the content, which is important for both accessibility (screen readers use it for correct pronunciation) and search engine optimization.

### D. The `<head>` Section: Metadata and Page Settings

The `<head>` element contains information about the page, not the content the user will see directly.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First HTML Page</title>
</head>
```

The table below outlines common `<head>` elements and their purposes.

| Tag | Purpose |
|-----|---------|
| `<meta charset="UTF-8">` | Sets the character encoding (UTF-8 handles most characters, including accents and emojis) |
| `<meta name="viewport">` | Makes the page responsive on mobile devices |
| `<title>` | Sets the text that appears in the browser tab and search engine results |
| `<link>` | Links external resources like CSS stylesheets or favicons |
| `<style>` | Embeds internal CSS styles (covered later in the course) |
| `<script>` | Includes JavaScript logic (covered in later sessions) |

Content in the `<head>` does **not** display on the webpage itself. Its purpose is to configure how the page behaves and how it is presented to browsers and search engines.

### E. The `<body>` Section: Visible Content

This is where you place everything you want your users to see and interact with.

```html
<body>
  <h1>Hello, Web!</h1>
  <p>This is the body of the document.</p>
</body>
```

The `<body>` contains all visible elements: headings, paragraphs, images, links, forms, buttons, and more.

### F. Full Example: Basic HTML Document

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First HTML Page</title>
  </head>
  <body>
    <h1>Hello, Web!</h1>
    <p>This is the body of the document.</p>
  </body>
</html>
```

### G. Tag Reference Summary

| Tag | Description |
|-----|-------------|
| `<!DOCTYPE html>` | Declares HTML5 document type |
| `<html>` | Root of the page; wraps all content |
| `<head>` | Metadata, styles, scripts |
| `<meta>` | Metadata like charset and viewport |
| `<title>` | Title shown in the browser tab |
| `<link>` | Links external resources |
| `<style>` | Internal CSS styles |
| `<script>` | JavaScript (logic covered later) |
| `<body>` | Everything visible to the user |

---

## Session 2: HTML Attributes and Semantic Meaning

In this session, we explore two foundational ideas in HTML: attributes, which add extra information to tags, and semantics, which involves writing HTML that clearly describes content and structure rather than just appearance. Together, these skills lead to better code, stronger accessibility, and websites that are easier to maintain and understand for both humans and machines.

### A. Learning Outcome

Understand how to use HTML attributes effectively and write semantic HTML that conveys meaning.

### B. Understanding HTML Attributes

**What Are Attributes?**

Attributes provide additional configuration to an HTML element. They usually appear inside the opening tag and follow this format:

```html
attributeName="value"
```

They never appear in closing tags.

For example:

```html
<img src="cat.jpg" alt="A sleeping cat on a windowsill">
```

In this example, `src="cat.jpg"` is a functional attribute that sets the image source, while `alt="A sleeping cat on a windowsill"` is an informational attribute that describes the image for users who cannot see it.

**Functional Versus Informational Attributes**

| Type | Examples | Purpose |
|------|----------|---------|
| Functional | `href`, `src`, `target`, `type` | Control behaviour or link resources |
| Informational | `alt`, `title`, `lang`, `width` | Add descriptions or context |

Always match the attribute type with the element's role. For example, links use `href`, while images need `alt`.

### C. Boolean Attributes

Some attributes — such as `required`, `disabled`, and `checked` — are Boolean. Their presence alone means "true."

```html
<input type="text" required>         <!-- Correct -->
<input type="text" required="true">  <!-- Technically works, but unnecessary -->
<input type="text" required="false"> <!-- Still treated as required -->
```

For Boolean attributes, simply including the attribute is sufficient. There is no need to assign a value.

### D. Introduction to Semantic HTML

**What Is Semantics?**

Semantic HTML means choosing tags based on their meaning — what they represent — rather than how they look.

Use semantic tags like `<header>`, `<nav>`, `<main>`, `<article>`, and `<footer>`. Avoid relying solely on `<div>` and `<span>`, which carry no semantic meaning. For example, use `<header>` instead of `<div class="header">`.

**Why Semantic Tags Matter**

| Benefit | Explanation |
|---------|-------------|
| Accessibility | Screen readers use semantic tags to help users navigate pages |
| SEO | Search engines prioritize structured content like headings and `<main>` |
| Maintenance | Semantic HTML is easier to read, understand, and update |

### E. Code Examples

**Image with Descriptive Attributes**

```html
<img 
  src="cat.jpg" 
  alt="A sleeping cat on a sunny windowsill" 
  width="300" 
  title="Click to enlarge image">
```

**Link with Behaviour Controls**

```html
<a 
  href="https://example.com" 
  target="_blank" 
  rel="noopener" 
  title="Opens in a new tab">
  Visit Example
</a>
```

The `rel="noopener"` attribute improves security when using `target="_blank"` by preventing the new page from accessing the original page via JavaScript.

### F. Attribute Reference Table

| Attribute | Used With | Description |
|-----------|-----------|-------------|
| `src` | `<img>`, `<script>` | Source file location |
| `alt` | `<img>` | Text alternative for screen readers and fallback |
| `href` | `<a>`, `<link>` | Hyperlink target |
| `target` | `<a>` | Open link in new tab or window |
| `title` | Most elements | Tooltip on hover |
| `width`, `height` | `<img>`, `<video>` | Dimensions of media |

### G. Accessibility and Advanced Attributes

| Attribute/Tag | Purpose | Notes |
|---------------|---------|-------|
| `alt=""` | Describes or hides images from screen readers | Use empty alt (`""`) for decorative images |
| `aria-label="..."` | Adds invisible labels for screen readers | Use on unlabelled buttons or icons |
| `<meta name="description" content="...">` | Describes the page for search engines | Recommended for SEO (under 160 characters) |
| `<button type="button">` | Prevents form submission unless desired | Default type is `"submit"` — specify if needed |

### H. Real-World Examples

**Accessible Image Gallery**

```html
<figure>
  <img 
    src="artwork.jpg" 
    alt="Abstract painting with red and gold swirls" 
    loading="lazy" 
    width="600">
  <figcaption>Artwork by <cite>Jane Doe</cite>, 2023.</figcaption>
</figure>
```

Key takeaways: `loading="lazy"` improves performance by delaying image load, and `<figcaption>` provides context that is accessible to screen readers.

**Semantic Navigation Menu**

```html
<nav aria-label="Primary navigation">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/about">About</a></li>
  </ul>
</nav>
```

Here, `aria-label` describes the navigation role for screen readers, and `aria-current="page"` identifies the active page.

### I. Summary

| Concept | Why It Is Important |
|---------|---------------------|
| HTML Attributes | Control behaviour and add context to elements |
| Boolean Attributes | Only need to be present — no need for `"true"` or `"false"` |
| Semantic Tags | Describe purpose, improve accessibility and SEO |
| Accessibility Attributes | Help screen readers understand and navigate your content |

---

## Session 3: Document Flow and Layout Logic

Understanding how HTML elements naturally flow and interact on a page is essential to building layouts that are both visually clean and structurally sound. This session focuses on the default flow of content, the differences between block and inline elements, and proper nesting practices.

### A. Learning Outcome

Understand the normal document flow, the distinction between block and inline elements, and how to nest elements correctly.

### B. The Normal Document Flow

Before any CSS is applied, the browser uses a default stylesheet to lay out content in a top-to-bottom flow — often referred to as normal flow.

Content appears in the order it is written in the HTML. Block elements stack vertically, while inline elements flow horizontally within block containers.

```html
<h1>Title</h1>
<p>Paragraph one.</p>
<p>Paragraph two.</p>
```

Each new block starts on its own line.

### C. Block Versus Inline Elements

**Block-Level Elements**

Block elements start on a new line and take up the full available width by default. They can contain other block or inline elements and accept width, height, padding, and margin on all sides.

Examples: `<div>`, `<p>`, `<h1>`–`<h6>`, `<section>`, `<article>`

```html
<div>
  <p>This is a paragraph.</p>
</div>
```

**Inline Elements**

Inline elements do not start on a new line and only take up as much width as needed. They flow inside block-level containers and generally ignore top and bottom margins and height.

Examples: `<a>`, `<span>`, `<strong>`, `<em>`, `<img>`

```html
<p>This is <strong>important</strong> text.</p>
```

**Summary Table: Block Versus Inline**

| Tag | Type | Common Use |
|-----|------|------------|
| `<div>` | Block | Generic container |
| `<p>` | Block | Paragraph text |
| `<h1>`–`<h6>` | Block | Headings with semantic meaning |
| `<section>` | Block | Logical page divisions |
| `<span>` | Inline | Generic inline container |
| `<a>` | Inline | Hyperlinks |
| `<strong>` | Inline | Emphasize with bold meaning |
| `<em>` | Inline | Emphasize with italic meaning |
| `<br>` | Inline | Force line break inside inline content |

### D. Nesting and Whitespace Behaviour

HTML requires proper nesting. Inline elements can live inside block elements, but block elements should not go inside inline elements.

```html
<!-- Valid -->
<p>This is a <strong>bold</strong> word.</p>

<!-- Invalid -->
<strong><div>This breaks the layout!</div></strong>
```

Extra spaces and line breaks in HTML are ignored by the browser. Use `<br>` to manually insert a line break, but use it sparingly.

```html
<p>This<br>is<br>a<br>list.</p>
```

### E. How Browsers Render Elements

**Block Elements**
- Stack vertically by default
- Respect vertical spacing (margins and padding)
- Accept layout properties like `width` and `height`

```html
<p>This is paragraph one.</p>
<p>This is paragraph two.</p>
```

**Inline Elements**
- Sit side-by-side in the same line
- Do not respond to `width` or vertical `margin`
- Best for text-level styling or small UI components

```html
<p>Click <a href="#">here</a> for more info.</p>
```

**Inline-Block Elements**

Some elements, like `<img>` or styled `<button>`, behave inline but can also respect `width` and `height` while sitting inline with text.

```html
<img src="logo.png" alt="Logo" width="100">
```

### F. Visual Example

```html
<div style="border: 2px solid blue;">
  <h2 style="background: lightyellow;">Block Heading</h2>
  <span style="background: pink;">Inline text</span>
  <span style="background: lightgreen;">More inline</span>
</div>
```

In this example, the `<h2>` spans the full width, while the `<span>` elements appear side-by-side.

### G. Common Pitfalls and Fixes

| Problem | Cause | Solution |
|---------|-------|----------|
| Unexpected gaps between elements | Default margins on block tags | Use CSS to reset margins or use flexbox |
| Inline elements not sizing correctly | Inline ignores `width` and `height` | Use `display: inline-block` |
| Improper nesting causes bugs | Block tags inside inline tags | Follow correct nesting hierarchy |
| Margins collapsing | Block elements with vertical spacing | Use padding or `overflow: hidden` |

### H. Resetting Flow with CSS

```html
<style>
  .reset-flow > * {
    margin: 0;
    padding: 0;
  }
</style>

<div class="reset-flow">
  <h3>No Gaps</h3>
  <p>Default spacing removed</p>
</div>
```

### I. Summary

| Concept | Key Idea |
|---------|----------|
| Normal Flow | HTML renders top-to-bottom by default |
| Block Elements | Start on new lines, take full width |
| Inline Elements | Flow inline with surrounding text |
| Nesting Rules | Inline can go inside block, but not the other way around |
| Whitespace and Line Breaks | Extra spacing is ignored; use `<br>` sparingly |

### J. Session Wrap-Up Questions

Use these for classroom discussion, reflection, or homework.

1. Why does a `<div>` break onto a new line while a `<span>` does not?
2. When should you use `<br>` instead of a new `<p>` tag?
3. How can poor nesting or misuse of inline and block tags affect accessibility?

---
