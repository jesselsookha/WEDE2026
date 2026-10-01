# Flexbox Fundamentals

Flexbox, or the Flexible Box Layout Module, is a powerful CSS layout tool that makes it easy to arrange items in rows or columns. Unlike older layout methods like floats and positioning, Flexbox was designed specifically for one-dimensional layouts — distributing space along a single axis and aligning items within a container. This document introduces the core concepts of Flexbox and demonstrates how to use it to create flexible, responsive layouts with minimal code.

---

## Session 8A: Flexbox Fundamentals

### A. Learning Outcome

Understand the principles of Flexbox, use flex containers and flex items, and apply alignment and distribution properties to create flexible layouts.

### B. What Is Flexbox?

Flexbox is a layout model that allows you to design complex layouts with less code and greater predictability. It works by defining a **flex container** and its **flex items**, then controlling how those items are arranged, aligned, and distributed.

**The Core Idea:**

Flexbox operates on two axes:

- **Main Axis** — The primary direction in which flex items are laid out (row or column)
- **Cross Axis** — The perpendicular direction

```
Main Axis (Row)
┌─────────────────────────────────────────────┐
│  [Item 1]  [Item 2]  [Item 3]  [Item 4]     │  ← Items flow along main axis
└─────────────────────────────────────────────┘
   ↑
Cross Axis
```

**When to Use Flexbox:**

- Aligning items vertically or horizontally
- Creating navigation menus
- Building card layouts
- Centering content
- Distributing space evenly between items

### C. Flex Container vs. Flex Items

To use Flexbox, you create a flex container and then define how its children (flex items) behave.

**Basic Setup:**

```html
<div class="flex-container">
  <div class="flex-item">Item 1</div>
  <div class="flex-item">Item 2</div>
  <div class="flex-item">Item 3</div>
</div>
```

```css
.flex-container {
  display: flex;    /* Creates a flex container */
}
```

**Key Concepts:**

| Concept | Description |
|---------|-------------|
| **Flex Container** | The parent element with `display: flex` |
| **Flex Item** | Any direct child of a flex container |
| **Main Axis** | The primary direction of layout |
| **Cross Axis** | The perpendicular direction |

### D. Flex Container Properties

**1. `flex-direction`**

Controls the direction of the main axis.

```css
.flex-container {
  flex-direction: row;        /* Default: left to right */
  flex-direction: row-reverse; /* Right to left */
  flex-direction: column;     /* Top to bottom */
  flex-direction: column-reverse; /* Bottom to top */
}
```

**Visual Examples:**

```
row:         [1] [2] [3] [4]
row-reverse: [4] [3] [2] [1]
column:      [1]
             [2]
             [3]
             [4]
column-reverse: [4]
                [3]
                [2]
                [1]
```

**2. `justify-content`**

Controls alignment along the **main axis**.

```css
.flex-container {
  justify-content: flex-start;    /* Default: items at start */
  justify-content: flex-end;      /* Items at end */
  justify-content: center;        /* Items centered */
  justify-content: space-between; /* Equal space between items */
  justify-content: space-around;  /* Equal space around items */
  justify-content: space-evenly;  /* Equal space between and around */
}
```

**Visual Examples:**

```
flex-start:  [1] [2] [3]  (space after)
flex-end:    (space before)  [1] [2] [3]
center:      (space) [1] [2] [3] (space)
space-between: [1]     [2]     [3]
space-around:  [1]  [2]  [3]
space-evenly:  [1]  [2]  [3]
```

**3. `align-items`**

Controls alignment along the **cross axis**.

```css
.flex-container {
  align-items: stretch;    /* Default: stretch to fill height */
  align-items: flex-start; /* Align to start of cross axis */
  align-items: flex-end;   /* Align to end of cross axis */
  align-items: center;     /* Align to center of cross axis */
  align-items: baseline;   /* Align by text baseline */
}
```

**Visual Examples (with flex-direction: row):**

```
flex-start:  ┌───┐ ┌───┐
             │ 1 │ │ 2 │
             └───┘ └───┘

center:      ┌───┐ ┌───┐
             │ 1 │ │ 2 │
             └───┘ └───┘

flex-end:    ┌───┐ ┌───┐
             │ 1 │ │ 2 │
             └───┘ └───┘

stretch:     ┌───────┐ ┌───────┐
             │   1   │ │   2   │
             └───────┘ └───────┘
```

**4. `flex-wrap`**

Controls whether items wrap to the next line.

```css
.flex-container {
  flex-wrap: nowrap;    /* Default: all on one line */
  flex-wrap: wrap;      /* Wrap to next line if needed */
  flex-wrap: wrap-reverse; /* Wrap to previous line */
}
```

**5. `gap`**

Adds space between flex items.

```css
.flex-container {
  gap: 20px;           /* Space between all items */
  gap: 10px 20px;      /* Row gap, column gap */
  row-gap: 10px;       /* Gap between rows */
  column-gap: 20px;    /* Gap between columns */
}
```

### E. Flex Item Properties

**1. `flex-grow`**

Specifies how much an item should grow relative to others.

```css
.flex-item {
  flex-grow: 0;    /* Default: do not grow */
  flex-grow: 1;    /* Grow to fill available space */
  flex-grow: 2;    /* Grow twice as much as others */
}
```

**Example:**

```css
.item-1 { flex-grow: 1; }
.item-2 { flex-grow: 2; }
.item-3 { flex-grow: 1; }
```

With `flex-grow`, item 2 will take twice as much extra space as items 1 and 3.

**2. `flex-shrink`**

Specifies how much an item should shrink relative to others.

```css
.flex-item {
  flex-shrink: 1;    /* Default: can shrink */
  flex-shrink: 0;    /* Do not shrink */
}
```

**3. `flex-basis`**

Specifies the initial size of an item before `flex-grow` and `flex-shrink` are applied.

```css
.flex-item {
  flex-basis: auto;     /* Default: based on content */
  flex-basis: 200px;    /* Initial width of 200px */
  flex-basis: 30%;      /* Initial width of 30% */
}
```

**4. `flex` Shorthand**

The `flex` property combines `flex-grow`, `flex-shrink`, and `flex-basis`.

```css
.flex-item {
  flex: 1 1 auto;    /* grow, shrink, basis */
  flex: 1;           /* flex-grow: 1, flex-shrink: 1, flex-basis: 0 */
  flex: 0 1 auto;    /* Default: don't grow, can shrink, auto basis */
}
```

**5. `align-self`**

Overrides `align-items` for individual items.

```css
.flex-item {
  align-self: flex-start;
  align-self: flex-end;
  align-self: center;
  align-self: stretch;
}
```

### F. Example: Flexbox Gallery

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Gallery</title>
  <style>
    /* Base styles */
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

    /* Flex Container */
    .gallery {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }

    /* Flex Items */
    .card {
      flex: 0 1 280px;   /* Don't grow, can shrink, 280px basis */
      background: white;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }

    .card img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 8px;
      background: #dfe6e9;
    }

    .card h3 {
      color: #2d3436;
      margin: 15px 0 5px;
    }

    .card p {
      color: #636e72;
      font-size: 0.9rem;
      margin-bottom: 15px;
    }

    .tag {
      display: inline-block;
      background: #dfe6e9;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      color: #2d3436;
    }

    .tag-primary {
      background: #0984e3;
      color: white;
    }
  </style>
</head>
<body>

  <h1>Photo Gallery</h1>

  <div class="gallery">
    <div class="card">
      <div style="height:200px;background:#dfe6e9;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#636e72;">📸</div>
      <h3>Mountain View</h3>
      <p>Beautiful sunset over the mountains.</p>
      <span class="tag">Nature</span>
      <span class="tag tag-primary">Featured</span>
    </div>

    <div class="card">
      <div style="height:200px;background:#dfe6e9;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#636e72;">🌊</div>
      <h3>Ocean Sunset</h3>
      <p>Golden hour over the Pacific Ocean.</p>
      <span class="tag">Ocean</span>
    </div>

    <div class="card">
      <div style="height:200px;background:#dfe6e9;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#636e72;">🌺</div>
      <h3>Garden</h3>
      <p>Vibrant tropical flowers in full bloom.</p>
      <span class="tag">Nature</span>
    </div>

    <div class="card">
      <div style="height:200px;background:#dfe6e9;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#636e72;">🏙️</div>
      <h3>City Lights</h3>
      <p>Downtown skyline at night.</p>
      <span class="tag">Urban</span>
    </div>

    <div class="card">
      <div style="height:200px;background:#dfe6e9;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#636e72;">🌿</div>
      <h3>Forest Path</h3>
      <p>Peaceful walking trail through the woods.</p>
      <span class="tag">Nature</span>
    </div>

    <div class="card">
      <div style="height:200px;background:#dfe6e9;border-radius:8px;display:flex;align-items:center;justify-content:center;color:#636e72;">🏔️</div>
      <h3>Snowy Peak</h3>
      <p>Majestic mountain covered in fresh snow.</p>
      <span class="tag">Adventure</span>
    </div>
  </div>

</body>
</html>
```

### G. Example: Responsive Navigation with Flexbox

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Flexbox Navigation</title>
  <style>
    /* Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      padding: 20px;
    }

    /* Flex Container: Nav */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #2d3436;
      padding: 15px 30px;
      border-radius: 8px;
      flex-wrap: wrap;
      gap: 15px;
    }

    .logo {
      color: white;
      font-size: 1.5rem;
      font-weight: 700;
      text-decoration: none;
    }

    /* Flex Container: Nav Links */
    .nav-links {
      display: flex;
      gap: 30px;
      list-style: none;
      flex-wrap: wrap;
    }

    .nav-links a {
      color: #dfe6e9;
      text-decoration: none;
      font-weight: 500;
      padding: 5px 0;
      border-bottom: 2px solid transparent;
      transition: border-color 0.3s ease, color 0.3s ease;
    }

    .nav-links a:hover {
      color: #74b9ff;
      border-bottom-color: #74b9ff;
    }

    .nav-links a.active {
      color: #74b9ff;
      border-bottom-color: #74b9ff;
    }

    /* Responsive: Stack on mobile */
    @media (max-width: 600px) {
      .navbar {
        flex-direction: column;
        text-align: center;
      }

      .nav-links {
        flex-direction: column;
        gap: 10px;
        width: 100%;
      }

      .nav-links li {
        width: 100%;
      }

      .nav-links a {
        display: block;
        padding: 10px;
        border-radius: 4px;
        border-bottom: none;
      }

      .nav-links a:hover {
        background: rgba(255, 255, 255, 0.1);
        border-bottom: none;
      }
    }
  </style>
</head>
<body>

  <nav class="navbar">
    <a href="#" class="logo">MySite</a>
    <ul class="nav-links">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Portfolio</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>

</body>
</html>
```

### H. In-Class Activity: Flexbox Gallery

**Goal:** Build a responsive image gallery using Flexbox.

**Task:** Create a gallery of cards (at least 6) that:
- Use Flexbox for layout
- Wrap to multiple lines on smaller screens
- Have consistent spacing between items
- Include hover effects

**Requirements:**
- `display: flex` on the container
- `flex-wrap: wrap` for responsiveness
- `gap` for spacing
- Cards with images (or placeholder divs), titles, and tags

### I. Common Flexbox Patterns

**1. Centering Content**

```css
.center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;   /* Full viewport height */
}
```

**2. Holy Grail Layout**

```html
<div class="holy-grail">
  <header>Header</header>
  <div class="content">
    <main>Main Content</main>
    <aside>Sidebar</aside>
  </div>
  <footer>Footer</footer>
</div>
```

```css
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  display: flex;
  flex: 1;
}

main {
  flex: 3;
}

aside {
  flex: 1;
}
```

**3. Navigation with Logo on Left, Links on Right**

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  gap: 20px;
}
```

### I. Homework Prompt

**Challenge: Flexbox Portfolio Page**

Create a portfolio page that includes:
- A responsive navigation bar (Flexbox)
- A gallery of at least 4 project cards (Flexbox)
- Cards that wrap on smaller screens
- Hover effects on cards and navigation links

**Requirements:**
- Use `display: flex` for layout
- Include `flex-wrap`, `gap`, `justify-content`, and `align-items`
- Make it responsive with media queries (stack on mobile)
- Comment your CSS explaining each Flexbox property used

**Git Workflow:**
- Branch name: `css-flexbox-portfolio`
- Include `index.html`, `styles.css`, and `README.md`
- Screenshot of desktop and mobile views

### J. Session Summary

| Property | Purpose |
|----------|---------|
| `display: flex` | Creates a flex container |
| `flex-direction` | Sets main axis direction (row/column) |
| `justify-content` | Aligns items along the main axis |
| `align-items` | Aligns items along the cross axis |
| `flex-wrap` | Allows items to wrap to new lines |
| `gap` | Adds space between items |
| `flex-grow` | Controls item growth relative to others |
| `flex-shrink` | Controls item shrinkage relative to others |
| `flex-basis` | Sets initial item size |
| `align-self` | Overrides `align-items` for individual items |

### K. Reflection Questions

1. What is the difference between `justify-content` and `align-items`?
2. When would you use `flex-direction: column` instead of `row`?
3. Why is Flexbox better than floats for layout?
4. How does `flex-wrap` help with responsiveness?
5. What is the difference between `space-between` and `space-around`?

### L. Resources for Further Study

- [MDN: Flexbox](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)
- [CSS Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](https://flexboxfroggy.com/) — Interactive flexbox game
- [Flexbox Defense](http://www.flexboxdefense.com/) — Another interactive game

---
