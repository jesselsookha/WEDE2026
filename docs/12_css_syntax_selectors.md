# CSS Syntax, Inheritance, and Selectors

Now that you understand what CSS is and how to apply it, it is time to learn the language itself. This document covers the fundamental building blocks of CSS: the syntax that defines every rule, the inheritance that flows through the DOM tree, and the selectors that allow you to target elements with precision.

---

## Session 3: CSS Syntax and Basic Rules

Before you can style anything, you must understand how CSS is written. The syntax is simple and consistent, but mastering it requires practice and attention to detail.

### A. Learning Outcome

Learn CSS syntax, identify and use common selectors, and apply basic styling properties to HTML elements.

### B. The Anatomy of a CSS Rule

Every CSS rule follows the same basic structure:

```css
selector {
  property: value;
  property: value;
}
```

| Component | Description | Example |
|-----------|-------------|---------|
| **Selector** | Identifies which HTML elements to style | `p`, `.highlight`, `#main-title` |
| **Property** | The styling attribute to change | `color`, `font-size`, `margin` |
| **Value** | The new value for the property | `blue`, `16px`, `20px` |
| **Declaration Block** | The `{ }` braces containing all declarations | `{ color: blue; font-size: 16px; }` |
| **Declaration** | A single property-value pair | `color: blue;` |

**Example:**

```css
/* A complete CSS rule: selector + declaration block */
p {
  color: blue;             /* declaration: property + value */
  font-size: 16px;         /* declaration: property + value */
}
```

### C. Type, Class, and ID Selectors

CSS provides several ways to select elements. The three most fundamental selectors are type, class, and ID.

**Type Selector**

The type selector targets all elements of a specific HTML tag.

```css
/* Type selector: affects all <h2> elements */
h2 {
  color: green;
  font-weight: bold;
}
```

**Class Selector**

The class selector targets elements with a specific `class` attribute. Class selectors are prefixed with a dot (`.`). They are reusable across multiple elements.

```css
/* Class selector: affects all elements with class="highlight" */
.highlight {
  background-color: yellow;
  font-weight: bold;
}
```

**ID Selector**

The ID selector targets a single element with a specific `id` attribute. ID selectors are prefixed with a hash (`#`). IDs must be unique within a page.

```css
/* ID selector: affects the element with id="main-title" */
#main-title {
  text-transform: uppercase;
  color: darkred;
}
```

**Example in Context:**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Type selector */
    h2 {
      color: green;
    }

    /* Class selector */
    .highlight {
      background-color: yellow;
      font-weight: bold;
    }

    /* ID selector */
    #main-title {
      text-transform: uppercase;
      color: darkred;
    }
  </style>
</head>
<body>
  <h1 id="main-title">My CSS Practice</h1>
  <h2>Subheading</h2>
  <p>This is a normal paragraph.</p>
  <p class="highlight">This paragraph is highlighted.</p>
  <p class="highlight">This paragraph is also highlighted.</p>
</body>
</html>
```

**Key Points:**

- **Class selectors** (`.highlight`) can be reused on multiple elements.
- **ID selectors** (`#main-title`) should be used only once per page.
- **Type selectors** (`h2`) affect all elements of that type.

### D. CSS Comments

Comments are essential for documenting your code. They help you (and others) understand why certain styles were applied.

```css
/* ✓ CSS comment: explains the purpose of the code */

/* Style the main heading */
h1 {
  color: #2c3e50;
  font-size: 2rem;
}

/* Style the paragraph text */
p {
  color: #444;
  line-height: 1.6;
  margin-bottom: 16px;
}
```

**Comment Guidelines:**

- Use comments to explain *why* a style is applied, not *what* it does
- Group related styles with comments
- Use comments to mark sections of your stylesheet

### E. Formatting Best Practices

Clean, well-formatted CSS is easier to read, debug, and maintain.

**Indentation:**

```css
/* ✓ Good: Consistent indentation */
.container {
  padding: 20px;
  margin: 0 auto;
}

/* ✗ Poor: Inconsistent indentation */
.container {
padding: 20px;
  margin: 0 auto;
}
```

**Spacing:**

```css
/* ✓ Good: Space after colon, property on its own line */
h1 {
  color: blue;
  font-size: 24px;
}

/* ✗ Poor: No spaces, multiple properties on one line */
h1 {
  color: blue; font-size: 24px;
}
```

**Grouping:**

```css
/* ✓ Good: Group related styles together */
/* Typography */
body {
  font-family: 'Segoe UI', sans-serif;
  line-height: 1.6;
}

/* Layout */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
```

### F. In-Class Activity: Selector Matching Challenge

**Goal:** Practice matching selectors to HTML elements.

**Task:** Given the following HTML, write CSS rules to style specific elements:

```html
<p class="notice">This is important!</p>
<div id="hero">Welcome to our site</div>
<ul class="menu">
  <li>Home</li>
  <li>About</li>
  <li>Contact</li>
</ul>
```

**Challenge:**
1. Write a rule to make all paragraphs red.
2. Write a rule to highlight the `.notice` class with a yellow background.
3. Write a rule to give `#hero` a background color and large text.
4. Write a rule to style list items in `.menu` with no bullet points and inline display.

**Suggested Solutions:**

```css
p {
  color: red;
}

.notice {
  background-color: yellow;
}

#hero {
  background-color: #f0f0f0;
  font-size: 2rem;
  padding: 20px;
}

.menu li {
  display: inline;
  list-style: none;
  margin-right: 20px;
}
```

### G. Bonus Challenge: Style Your Own Name Card

Create a "style your own name" card with:
- Background colour
- Font choice
- Border style
- Hover effect (preview of pseudo-classes)

### H. Homework Prompt

**Assignment: Style Starter Page**

Use the provided `starter.html` template and apply internal CSS to:
- Style headings and paragraphs using type selectors
- Use at least one `.class` and one `#id`
- Experiment with two font sizes and two colours

**Requirements:**
- Comment your CSS clearly
- Push to a Git feature branch (`css-syntax-basics`)
- Include a `README.md` reflection explaining:
  - How each selector worked
  - What surprised you about styling

### I. Session Summary

| Concept | Key Idea |
|---------|----------|
| CSS Rule | Selector + Declaration Block |
| Selector | Identifies which elements to style |
| Declaration | Property + Value |
| Type Selector | Targets all elements of a specific tag |
| Class Selector | Targets elements with a specific class |
| ID Selector | Targets a single unique element |
| Comments | Document code for clarity |
| Formatting | Clean code is easier to maintain |

---

## Session 4: Understanding Inheritance and the DOM

CSS styles do not exist in isolation. They flow through the document structure, with some properties passing from parent to child elements and others remaining contained. Understanding inheritance and the DOM tree is essential for writing efficient, predictable CSS.

### A. Learning Outcome

Understand the concept of inheritance in CSS, explore the DOM tree, and recognize when styles are inherited versus overridden.

### B. The DOM Tree

The **DOM (Document Object Model)** is a tree-like representation of an HTML document. Each element in the HTML becomes a node in the tree, with parent-child relationships reflecting the nesting structure of the code.

**Example HTML:**

```html
<body>
  <header>
    <h1>Welcome</h1>
  </header>
  <section>
    <p>This is a paragraph.</p>
    <p>This is another paragraph.</p>
  </section>
</body>
```

**DOM Tree Representation:**

```
body
├── header
│   └── h1
└── section
    ├── p
    └── p
```

### C. Inheritance in CSS

**Inheritance** is the mechanism by which certain CSS properties are passed from parent elements to their children. When a property is inherited, a child element will automatically take on the value of its parent unless explicitly overridden.

**Inherited Properties (Common Examples):**

| Property | Description |
|----------|-------------|
| `color` | Text colour |
| `font-family` | Font typeface |
| `font-size` | Font size |
| `line-height` | Line spacing |
| `text-align` | Text alignment |
| `font-weight` | Boldness of text |

**Non-Inherited Properties (Common Examples):**

| Property | Description |
|----------|-------------|
| `margin` | Space outside an element |
| `padding` | Space inside an element |
| `border` | Outline around an element |
| `width` | Element width |
| `height` | Element height |
| `background` | Background colour or image |

### D. Example: Inheritance in Action

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: 'Georgia', serif;   /* ✓ Inherited by child elements */
      color: #444;                     /* ✓ Inherited by paragraphs and spans */
      margin: 40px;                    /* ✗ NOT inherited */
    }

    p {
      font-size: 18px;                 /* ✓ Inherited by child elements of p */
    }

    span {
      color: blue;                     /* ✓ Overrides inherited color from body */
    }
  </style>
</head>
<body>
  <p>This text uses the font-family from <code>body</code> and gets <span>blue override</span> here.</p>
</body>
</html>
```

**What happens:**

- The `<p>` inherits `font-family` and `color` from `<body>`.
- The `<p>` has its own `font-size` applied directly.
- The `<span>` inherits `font-size` from the `<p>`.
- The `<span>` overrides the inherited `color` with its own blue.

### E. The Cascade: Competing Rules

The **cascade** is the process by which the browser determines which styles to apply when multiple rules target the same element. The cascade considers:

1. **Importance:** `!important` declarations override normal rules.
2. **Specificity:** More specific selectors override less specific ones.
3. **Source Order:** Later rules override earlier ones.

**Example: Competing Rules**

```html
<style>
  /* General paragraph rule (low specificity) */
  p {
    color: green;
  }

  /* Class selector (medium specificity) */
  .warning {
    color: red;
  }

  /* ID selector (high specificity) */
  #urgent {
    color: orange;
  }
</style>

<body>
  <p>This is a normal paragraph.</p>
  <p class="warning">This warning is red.</p>
  <p id="urgent" class="warning">This urgent message is orange due to higher specificity.</p>
</body>
</html>
```

**Key Insight:** ID selectors override class selectors, which override type selectors. This is the beginning of understanding **specificity**.

### F. In-Class Activity: DOM Flow Mapping

**Goal:** Visualize how styles flow through a DOM tree.

**Task:** Given the following HTML, sketch the DOM tree and label inherited styles.

```html
<div class="container">
  <section>
    <article>
      <p>Deep content here</p>
    </article>
  </section>
</div>
```

**CSS:**

```css
.container {
  font-family: Arial, sans-serif;
  color: #333;
}

section {
  padding: 20px;
}

article {
  background-color: #f9f9f9;
}

p {
  font-size: 16px;
}
```

**Questions to Answer:**

1. Does the `<p>` inherit `font-family` from `.container`? (Yes)
2. Does the `<p>` inherit `color` from `.container`? (Yes)
3. Does the `<p>` inherit `padding` from `<section>`? (No — padding is not inherited)
4. Does the `<p>` inherit `background-color` from `<article>`? (No — background is not inherited)
5. Does the `<p>` have its own `font-size`? (Yes — applied directly)

### G. Homework Prompt

**Assignment: Cascade Challenge Page**

Create a nested HTML structure that includes:
- A parent container with text styles
- At least two nested child elements
- A direct override of an inherited style using a class or ID

**CSS Requirements:**
- One inherited property (e.g., `color`, `font-family`)
- One non-inherited property (e.g., `margin`, `padding`)
- One overridden style with higher specificity

**Git Workflow:**
- Feature branch: `css-inheritance-cascade`
- README must explain:
  - Which styles inherited successfully
  - Where override happened and why
  - Which styles didn't inherit and required direct styling

### H. Session Summary

| Concept | Key Idea |
|---------|----------|
| DOM Tree | Hierarchical structure of HTML elements |
| Inheritance | Styles passed from parent to child |
| Inherited Properties | `color`, `font-family`, `line-height`, etc. |
| Non-Inherited Properties | `margin`, `padding`, `border`, `width`, etc. |
| Cascade | Browser's process for resolving competing rules |
| Specificity | ID > Class > Type |

---

## Session 5: Selectors in Depth — Targeting Like a Pro

Now that you understand the basics of selectors, inheritance, and the cascade, it is time to explore more advanced selector techniques. This session equips you with the precision tools needed to target elements with surgical accuracy.

### A. Learning Outcome

Understand selector types, build specific selectors for HTML structure, explore pseudo-classes, and begin reasoning about specificity.

### B. Compound Selectors

Compound selectors combine multiple selectors to target elements more precisely.

| Selector | Example | Description |
|----------|---------|-------------|
| Type + Class | `p.highlight` | Targets `<p>` elements with `class="highlight"` |
| Type + ID | `div#main` | Targets `<div>` with `id="main"` |
| Class + Class | `.alert.warning` | Targets elements with both classes |

**Example:**

```css
/* Targets only <p> elements with class="highlight" */
p.highlight {
  color: red;
  font-weight: bold;
}

/* Targets only <div> elements with id="main" */
div#main {
  padding: 20px;
  background-color: #f0f0f0;
}
```

### C. Descendant and Child Selectors

These combinators target elements based on their position in the DOM tree.

| Combinator | Symbol | Description | Example |
|------------|--------|-------------|---------|
| Descendant | space | Targets any nested element | `.container p` |
| Child | `>` | Targets only direct children | `.container > p` |

**Example:**

```css
/* Descendant: targets ANY <p> inside .container, no matter how deep */
.container p {
  color: navy;
}

/* Child: targets ONLY direct <p> children of .container */
.container > p {
  font-weight: bold;
}
```

**HTML Context:**

```html
<div class="container">
  <p>This is a direct child</p>           <!-- Bold and navy -->
  <section>
    <p>This is a deeper descendant</p>    <!-- Navy only (not bold) -->
  </section>
</div>
```

### D. Pseudo-Classes

Pseudo-classes target elements based on their state or position, not just their type or class. They are prefixed with a colon (`:`).

**Common Pseudo-Classes:**

| Pseudo-Class | Description | Example |
|--------------|-------------|---------|
| `:hover` | When the mouse is over the element | `a:hover` |
| `:first-child` | The first child of its parent | `li:first-child` |
| `:last-child` | The last child of its parent | `li:last-child` |
| `:nth-child(n)` | The nth child of its parent | `tr:nth-child(even)` |
| `:visited` | A link that has been visited | `a:visited` |
| `:active` | An element being clicked | `a:active` |

**Example:**

```css
/* Link hover effect */
a:hover {
  color: crimson;
  text-decoration: underline;
}

/* Highlight first list item */
ul li:first-child {
  font-weight: bold;
}

/* Alternating row colors in a table */
table tr:nth-child(even) {
  background-color: #f2f2f2;
}

table tr:nth-child(odd) {
  background-color: #ffffff;
}
```

### E. Specificity Explained

**Specificity** is the mechanism by which browsers determine which CSS rule to apply when multiple rules target the same element. The more specific a selector, the higher its priority.

**Specificity Hierarchy:**

1. **ID selectors** (`#id`) — Highest specificity
2. **Class selectors** (`.class`) — Medium specificity
3. **Type selectors** (`div`, `p`, etc.) — Lowest specificity

**Example:**

```css
/* Type selector (specificity: 0,0,1) */
p {
  color: blue;
}

/* Class selector (specificity: 0,1,0) */
.warning {
  color: red;
}

/* ID selector (specificity: 1,0,0) */
#urgent {
  color: orange;
}

/* Inline styles (specificity: 1,0,0,0) — highest of all! */
```

### F. In-Class Activity: Selector Relay

**Goal:** Practice writing precise selectors for real HTML structures.

**Challenge Deck:**

1. Style the navigation menu (`<nav>`) with no bullet points and inline display.
2. Highlight every third item in a list (`li:nth-child(3)`).
3. Colour all headings inside `#main-content`.
4. Animate links using `:hover`.
5. Style only the first paragraph in a section (`p:first-child`).

**HTML Template:**

```html
<nav>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>

<div id="main-content">
  <h2>Welcome</h2>
  <p>First paragraph</p>
  <p>Second paragraph</p>
  <p>Third paragraph</p>
</div>
```

### G. Homework Prompt

**Challenge: Menu Styling with Pseudo-Classes**

Build a simple website menu that:
- Uses `<ul>` and `<li>` structure
- Applies class selectors for layout
- Adds `:hover` effects to links
- Uses `:first-child` and `:nth-child()` to customize appearance

**Additional Tasks:**
- Comment all selector decisions
- Create at least three distinct styling behaviours based on element state

**Git Workflow:**
- Branch name: `css-selectors-deep-dive`
- Include:
  - `index.html`, `styles.css`
  - Screenshot of rendered menu
  - `README.md`: explain selector logic and any specificity issues

### H. Session Summary

| Concept | Key Idea |
|---------|----------|
| Compound Selector | Combines multiple selectors for precision |
| Descendant Selector | Targets nested elements (space) |
| Child Selector | Targets only direct children (`>`) |
| Pseudo-Class | Targets elements by state or position |
| Specificity | ID > Class > Type |
| `:hover` | Applies styles on mouse-over |
| `:nth-child()` | Targets elements by position |

### I. Reflection Questions

1. When would you use a child selector (`>`) instead of a descendant selector (space)?
2. Why is it important to understand specificity when writing CSS?
3. How does `:hover` improve user experience on a website?
4. What is the difference between `:first-child` and `:nth-child(1)`?
5. Why might you choose a class selector over an ID selector?

---
