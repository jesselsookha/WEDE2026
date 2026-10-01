# Grid Fundamentals

CSS Grid Layout is a powerful two-dimensional layout system that allows you to create complex, responsive page structures with ease. Unlike Flexbox, which is designed for one-dimensional layouts (either rows or columns), Grid excels at arranging content in both rows and columns simultaneously. This document introduces the core concepts of CSS Grid and demonstrates how to use it to build sophisticated page layouts.

---

## Session 8B: Grid Fundamentals

### A. Learning Outcome

Understand the principles of CSS Grid, use grid containers and grid items, and create two-dimensional layouts with rows and columns.

### B. What Is CSS Grid?

CSS Grid is a layout model that allows you to divide a page into rows and columns, then place items into specific cells or regions. It gives you precise control over both the structure and the placement of content.

**The Core Idea:**

```
Grid Container
┌───────────────────────────────────────────────────────┐
│ Column 1    Column 2    Column 3    Column 4          │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐       │
│ │ Item 1  │ │ Item 2  │ │ Item 3  │ │ Item 4  │ Row 1 │
│ ├─────────┤ ├─────────┤ ├─────────┤ ├─────────┤       │
│ │ Item 5  │ │ Item 6  │ │ Item 7  │ │ Item 8  │ Row 2 │
│ ├─────────┤ ├─────────┤ ├─────────┤ ├─────────┤       │
│ │ Item 9  │ │ Item 10 │ │ Item 11 │ │ Item 12 │ Row 3 │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘       │
└───────────────────────────────────────────────────────┘
```

**When to Use Grid:**

- Creating page layouts (header, main, sidebar, footer)
- Building dashboards and data displays
- Designing complex, structured layouts
- Creating image galleries with precise control
- Any layout that requires control over both rows and columns

### C. Grid Container vs. Grid Items

To use Grid, you create a grid container and then define the rows and columns that its children (grid items) will occupy.

**Basic Setup:**

```html
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
</div>
```

```css
.grid-container {
  display: grid;    /* Creates a grid container */
}
```

**Key Concepts:**

| Concept | Description |
|---------|-------------|
| **Grid Container** | The parent element with `display: grid` |
| **Grid Item** | Any direct child of a grid container |
| **Grid Track** | A row or column in the grid |
| **Grid Cell** | The intersection of a row and a column |
| **Grid Line** | The lines that divide rows and columns |

### D. Grid Container Properties

**1. `grid-template-columns` and `grid-template-rows`**

These properties define the number and size of columns and rows.

```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 300px 200px;    /* Three columns: 200px, 300px, 200px */
  grid-template-rows: 100px 200px;             /* Two rows: 100px, 200px */
}
```

**Units:**

| Unit | Description | Example |
|------|-------------|---------|
| `px` | Fixed pixels | `grid-template-columns: 200px 300px` |
| `%` | Percentage of container | `grid-template-columns: 30% 70%` |
| `fr` | Fractional unit (proportional) | `grid-template-columns: 1fr 2fr 1fr` |
| `auto` | Based on content size | `grid-template-columns: auto 1fr` |
| `minmax()` | Minimum and maximum size | `grid-template-columns: minmax(100px, 1fr)` |
| `repeat()` | Repeats a pattern | `grid-template-columns: repeat(3, 1fr)` |

**Fractional Units (`fr`):**

The `fr` unit distributes available space proportionally.

```css
/* Three columns: 1 part, 2 parts, 1 part */
.grid-container {
  grid-template-columns: 1fr 2fr 1fr;
}
```

With `1fr 2fr 1fr`, column 2 will be twice as wide as columns 1 and 3.

**`repeat()` Function:**

```css
/* Three equal columns */
.grid-container {
  grid-template-columns: repeat(3, 1fr);
}

/* Four columns with specific sizes */
.grid-container {
  grid-template-columns: repeat(2, 200px 1fr);    /* 200px, 1fr, 200px, 1fr */
}
```

**2. `gap` (formerly `grid-gap`)**

Adds space between grid tracks.

```css
.grid-container {
  gap: 20px;              /* Same for rows and columns */
  gap: 10px 20px;         /* Row gap, Column gap */
  row-gap: 10px;          /* Gap between rows */
  column-gap: 20px;       /* Gap between columns */
}
```

**3. `grid-template-areas`**

Names areas of the grid for easier item placement.

```css
.grid-container {
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main aside"
    "footer footer footer";
}
```

### E. Grid Item Properties

**1. `grid-column` and `grid-row`**

Places items into specific grid cells or spans multiple cells.

```css
.grid-item {
  grid-column: 1 / 3;    /* Starts at column line 1, ends at column line 3 */
  grid-row: 2 / 4;       /* Starts at row line 2, ends at row line 4 */
}
```

**Shortcut with Span:**

```css
.grid-item {
  grid-column: span 2;   /* Spans 2 columns */
  grid-row: span 3;      /* Spans 3 rows */
}
```

**2. `grid-area`**

Either assigns an item to a named area or defines its position.

```css
/* Using named areas */
.grid-item {
  grid-area: header;     /* Places item in the "header" area */
}

/* Or using line numbers */
.grid-item {
  grid-area: 1 / 1 / 3 / 4;    /* row-start / col-start / row-end / col-end */
}
```

**3. `justify-self` and `align-self`**

Controls alignment of individual items within their grid cell.

```css
.grid-item {
  justify-self: start;    /* Horizontal alignment */
  justify-self: center;
  justify-self: end;
  justify-self: stretch;  /* Default */

  align-self: start;      /* Vertical alignment */
  align-self: center;
  align-self: end;
  align-self: stretch;    /* Default */
}
```

### F. Example: Basic Grid Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Basic Grid Layout</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
      background-color: #f8f9fa;
    }

    h1 {
      text-align: center;
      color: #2d3436;
      margin-bottom: 30px;
    }

    .grid-container {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      gap: 20px;
      background: #dfe6e9;
      padding: 20px;
      border-radius: 12px;
    }

    .grid-item {
      background: white;
      padding: 30px;
      border-radius: 8px;
      text-align: center;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
      font-weight: 600;
      color: #2d3436;
    }

    .grid-item:nth-child(1) { background: #74b9ff; }
    .grid-item:nth-child(2) { background: #55efc4; }
    .grid-item:nth-child(3) { background: #ffeaa7; }
    .grid-item:nth-child(4) { background: #fd79a8; }
    .grid-item:nth-child(5) { background: #a29bfe; }
    .grid-item:nth-child(6) { background: #fdcb6e; }
  </style>
</head>
<body>

  <h1>Basic Grid Layout</h1>

  <div class="grid-container">
    <div class="grid-item">1</div>
    <div class="grid-item">2</div>
    <div class="grid-item">3</div>
    <div class="grid-item">4</div>
    <div class="grid-item">5</div>
    <div class="grid-item">6</div>
  </div>

</body>
</html>
```

### G. Example: Holy Grail Layout with Grid

The "Holy Grail" layout — header, footer, main content, and sidebar — is a classic use case for Grid.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Holy Grail Layout</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      min-height: 100vh;
      background: #f8f9fa;
    }

    .grid-container {
      display: grid;
      grid-template-columns: 1fr 3fr 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "header header header"
        "sidebar main aside"
        "footer footer footer";
      gap: 20px;
      min-height: 100vh;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
      box-sizing: border-box;
    }

    .header {
      grid-area: header;
      background: #2d3436;
      color: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      font-size: 1.5rem;
    }

    .sidebar {
      grid-area: sidebar;
      background: #dfe6e9;
      padding: 20px;
      border-radius: 8px;
    }

    .main {
      grid-area: main;
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    }

    .aside {
      grid-area: aside;
      background: #dfe6e9;
      padding: 20px;
      border-radius: 8px;
    }

    .footer {
      grid-area: footer;
      background: #2d3436;
      color: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
    }

    /* Responsive: Stack on mobile */
    @media (max-width: 768px) {
      .grid-container {
        grid-template-columns: 1fr;
        grid-template-areas:
          "header"
          "sidebar"
          "main"
          "aside"
          "footer";
        gap: 15px;
        padding: 15px;
      }
    }
  </style>
</head>
<body>

  <div class="grid-container">
    <header class="header">Header</header>
    <aside class="sidebar">Sidebar</aside>
    <main class="main">
      <h2>Main Content</h2>
      <p>This is the main content area. In a real website, this would contain the primary information for the page.</p>
      <p>With CSS Grid, we can easily create complex layouts that adapt to different screen sizes.</p>
    </main>
    <aside class="aside">Aside</aside>
    <footer class="footer">Footer</footer>
  </div>

</body>
</html>
```

### H. Example: Image Gallery with Grid

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Grid Gallery</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      padding: 40px 20px;
      max-width: 1200px;
      margin: 0 auto;
      background: #f8f9fa;
    }

    h1 {
      text-align: center;
      color: #2d3436;
      margin-bottom: 30px;
    }

    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .gallery-item {
      background: white;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .gallery-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }

    .gallery-item img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      display: block;
    }

    .gallery-item .info {
      padding: 15px;
    }

    .gallery-item .info h3 {
      margin: 0 0 5px 0;
      color: #2d3436;
    }

    .gallery-item .info p {
      margin: 0;
      color: #636e72;
      font-size: 0.9rem;
    }

    /* Featured item spans 2 columns and 2 rows */
    .gallery-item.featured {
      grid-column: span 2;
      grid-row: span 2;
    }

    .gallery-item.featured img {
      height: 400px;
    }

    /* Responsive adjustments */
    @media (max-width: 600px) {
      .gallery-item.featured {
        grid-column: span 1;
        grid-row: span 1;
      }

      .gallery-item.featured img {
        height: 200px;
      }
    }
  </style>
</head>
<body>

  <h1>Grid Gallery</h1>

  <div class="gallery">
    <div class="gallery-item featured">
      <div style="height:200px;background:#74b9ff;display:flex;align-items:center;justify-content:center;color:white;font-size:2rem;">📸</div>
      <div class="info">
        <h3>Featured Image</h3>
        <p>This item spans two columns</p>
      </div>
    </div>
    <div class="gallery-item">
      <div style="height:200px;background:#55efc4;display:flex;align-items:center;justify-content:center;color:#2d3436;font-size:2rem;">🌄</div>
      <div class="info">
        <h3>Mountain</h3>
        <p>Beautiful mountain view</p>
      </div>
    </div>
    <div class="gallery-item">
      <div style="height:200px;background:#ffeaa7;display:flex;align-items:center;justify-content:center;color:#2d3436;font-size:2rem;">🌊</div>
      <div class="info">
        <h3>Ocean</h3>
        <p>Golden hour at the beach</p>
      </div>
    </div>
    <div class="gallery-item">
      <div style="height:200px;background:#fd79a8;display:flex;align-items:center;justify-content:center;color:white;font-size:2rem;">🌺</div>
      <div class="info">
        <h3>Flowers</h3>
        <p>Tropical blooms</p>
      </div>
    </div>
    <div class="gallery-item">
      <div style="height:200px;background:#a29bfe;display:flex;align-items:center;justify-content:center;color:white;font-size:2rem;">🏙️</div>
      <div class="info">
        <h3>City</h3>
        <p>Downtown skyline</p>
      </div>
    </div>
    <div class="gallery-item">
      <div style="height:200px;background:#fdcb6e;display:flex;align-items:center;justify-content:center;color:#2d3436;font-size:2rem;">🌿</div>
      <div class="info">
        <h3>Forest</h3>
        <p>Peaceful woodland path</p>
      </div>
    </div>
  </div>

</body>
</html>
```

### I. Grid vs. Flexbox: When to Use Which

| Use Case | Best Choice | Why |
|----------|-------------|-----|
| Page layout (header, main, footer) | Grid | Two-dimensional control |
| Navigation menu | Flexbox | One-dimensional row |
| Card gallery | Grid | Consistent grid structure |
| Centering content | Flexbox | Simpler alignment |
| Complex dashboard | Grid | Precise row/column control |
| Form layout | Flexbox | Simple alignment |
| Holy Grail layout | Grid | Perfect for this structure |
| Responsive card grid | Grid with `auto-fit` | Automatic wrapping |

**Rule of Thumb:**

- Use **Flexbox** for **one-dimensional** layouts (row OR column)
- Use **Grid** for **two-dimensional** layouts (row AND column)

### J. In-Class Activity: Grid Layout Puzzle

**Goal:** Build a complex page layout using Grid.

**Task:** Create a page with:
- Header (full width, top)
- Sidebar (left, 1/4 of width)
- Main content (right, 3/4 of width)
- Two feature boxes (below main content)
- Footer (full width, bottom)

**Layout Requirements:**

```
┌─────────────────────────────────────────────────────────────┐
│                       HEADER                                │
├───────────────┬─────────────────────────────────────────────┤
│               │                                             │
│   SIDEBAR     │           MAIN CONTENT                      │
│               │                                             │
│               ├──────────────┬──────────────────────────────┤
│               │  Feature 1   │       Feature 2              │
├───────────────┴──────────────┴──────────────────────────────┤
│                       FOOTER                                │
└─────────────────────────────────────────────────────────────┘
```

**Starter Code:**

```html
<div class="grid-layout">
  <header>Header</header>
  <aside>Sidebar</aside>
  <main>Main Content</main>
  <div class="feature-1">Feature 1</div>
  <div class="feature-2">Feature 2</div>
  <footer>Footer</footer>
</div>
```

### K. Homework Prompt

**Challenge: Grid Portfolio Page**

Create a portfolio page using CSS Grid that includes:
- A header with navigation
- A hero section
- A project gallery with at least 6 projects in a grid
- A footer with contact information

**Requirements:**
- Use `display: grid` for layout
- Use `grid-template-areas` for the main layout
- Use `repeat()` and `minmax()` for the gallery
- Make it responsive with media queries (stack on mobile)
- Comment your CSS explaining each Grid property used

**Git Workflow:**
- Branch name: `css-grid-portfolio`
- Include `index.html`, `styles.css`, and `README.md`
- Screenshot of desktop and mobile views

### L. Session Summary

| Concept | Key Idea |
|---------|----------|
| `display: grid` | Creates a grid container |
| `grid-template-columns` | Defines column sizes |
| `grid-template-rows` | Defines row sizes |
| `fr` | Fractional unit for proportional space |
| `repeat()` | Repeats a pattern |
| `minmax()` | Sets min and max sizes |
| `gap` | Space between tracks |
| `grid-template-areas` | Names areas for placement |
| `grid-area` | Places item in a named area |
| `grid-column` / `grid-row` | Places item with line numbers |
| `span` | Spans multiple tracks |
| `auto-fit` | Automatically fits columns |

### M. Reflection Questions

1. What is the difference between Grid and Flexbox?
2. When would you use `1fr` instead of `1` or `100%`?
3. Why is `grid-template-areas` useful for layout planning?
4. How does `auto-fit` help with responsiveness?
5. What is the difference between `grid-column: 1 / 3` and `grid-column: span 2`?

### N. Resources for Further Study

- [MDN: CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids)
- [CSS Tricks: A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Grid Garden](https://cssgridgarden.com/) — Interactive grid game
- [Layout Land](https://www.youtube.com/c/LayoutLand) — Video tutorials on Grid

---
