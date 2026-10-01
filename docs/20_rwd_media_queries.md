# Media Queries and Breakpoints

Now that you understand the philosophy behind responsive design and the importance of fluid and flexible layouts, it is time to learn the technical mechanism that makes responsive design possible: **media queries**. Media queries allow you to apply CSS conditionally based on the characteristics of the device viewing your page — most commonly, its screen width.

This document explores how to write effective media queries, choose meaningful breakpoints, and understand the strategic difference between responsive and adaptive design approaches.

---

## Session 3: Breakpoints and Media Queries

### A. Learning Outcome

Write effective mobile-first media queries, identify common breakpoints for modern devices, and practice styling shifts across screen sizes.

### B. What Are Media Queries?

A **media query** is a CSS technique that allows you to apply styles only when certain conditions are met. The most common condition is screen width, but media queries can also target:

- Screen orientation (portrait/landscape)
- Screen resolution (pixel density)
- Device type (print, screen, speech)
- User preferences (reduced motion, dark mode)

**Basic Syntax:**

```css
@media (condition) {
  /* Styles that apply when the condition is true */
}
```

**Example:**

```css
/* Styles apply when screen is at least 768px wide */
@media (min-width: 768px) {
  body {
    background-color: #f0f0f0;
    font-size: 18px;
  }
}
```

### C. Mobile-First vs. Desktop-First Media Queries

**Mobile-First (Recommended):**

```css
/* Base styles: Mobile (0px and up) */
body {
  font-size: 16px;
  padding: 10px;
}

/* Tablet: 768px and up */
@media (min-width: 768px) {
  body {
    font-size: 18px;
    padding: 20px;
  }
}

/* Desktop: 1024px and up */
@media (min-width: 1024px) {
  body {
    font-size: 20px;
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

**Desktop-First (Not Recommended):**

```css
/* Base styles: Desktop (1024px and up) */
body {
  font-size: 20px;
  padding: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Tablet: 768px to 1023px */
@media (max-width: 1023px) {
  body {
    font-size: 18px;
    padding: 20px;
    max-width: 100%;
  }
}

/* Mobile: 0px to 767px */
@media (max-width: 767px) {
  body {
    font-size: 16px;
    padding: 10px;
  }
}
```

**Why Mobile-First Is Better:**

| Reason | Explanation |
|--------|-------------|
| **Performance** | Mobile users download less CSS (fewer overrides) |
| **Clarity** | Adding styles is easier than overriding them |
| **Content First** | Forces prioritization of essential content |
| **Industry Standard** | Modern best practice |

### D. Common Breakpoints

Breakpoints are the screen widths at which your layout changes. While you should determine breakpoints based on your content, here are common starting points:

| Breakpoint | Typical Devices | When to Use |
|------------|-----------------|-------------|
| `320px` | Small phones | Base styles (mobile-first) |
| `480px` | Large phones | Navigation changes, font adjustments |
| `768px` | Tablets | Layout shifts to multi-column |
| `1024px` | Small laptops | Wider layouts, more columns |
| `1200px` | Desktops | Maximum width, full layout |

**Example: Mobile-First Media Queries**

```css
/* ========================================
   BASE: Mobile-first (0px and up)
   ======================================== */

body {
  font-family: system-ui, sans-serif;
  padding: 20px;
  background-color: #fff;
  font-size: 16px;
  line-height: 1.6;
}

header {
  background-color: #74b9ff;
  color: white;
  padding: 1rem;
  text-align: center;
}

.content {
  font-size: 1rem;
  padding: 1rem;
}

/* ========================================
   TABLET: 768px and up
   ======================================== */

@media (min-width: 768px) {
  header {
    background-color: #55efc4;
    text-align: left;
    padding: 2rem;
  }

  .content {
    font-size: 1.2rem;
    display: flex;
    gap: 20px;
  }
}

/* ========================================
   DESKTOP: 1024px and up
   ======================================== */

@media (min-width: 1024px) {
  body {
    max-width: 1024px;
    margin: 0 auto;
    background-color: #dfe6e9;
  }

  .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
}
```

### E. Media Query Syntax in Detail

**Targeting Specific Width Ranges:**

```css
/* Tablet only (between 768px and 1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .element {
    background: orange;
  }
}

/* Large screens only (1024px and up) */
@media (min-width: 1024px) {
  .element {
    background: green;
  }
}
```

**Multiple Conditions (OR):**

```css
/* Applies to screens OR print */
@media screen, print {
  body {
    font-size: 16px;
  }
}
```

**Feature Detection:**

```css
/* Applies to screens that support hover */
@media (hover: hover) {
  .button:hover {
    background: blue;
  }
}

/* Applies when user prefers dark mode */
@media (prefers-color-scheme: dark) {
  body {
    background: #1a1a1a;
    color: #f0f0f0;
  }
}

/* Applies when user prefers reduced motion */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### F. Complete Example: Card Layout with Breakpoints

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Cards</title>
  <style>
    /* ========================================
       BASE: Mobile-first (0px and up)
       ======================================== */

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', sans-serif;
      padding: 20px;
      background: #f8f9fa;
      color: #2d3436;
    }

    h1 {
      text-align: center;
      margin-bottom: 30px;
      font-size: 1.8rem;
    }

    .card-grid {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .card {
      background: white;
      border-radius: 12px;
      padding: 25px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.08);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    }

    .card h2 {
      font-size: 1.3rem;
      margin-bottom: 10px;
      color: #2d3436;
    }

    .card p {
      color: #636e72;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .card .tag {
      display: inline-block;
      margin-top: 12px;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 600;
      background: #dfe6e9;
      color: #2d3436;
    }

    /* ========================================
       TABLET: 600px and up
       ======================================== */

    @media (min-width: 600px) {
      h1 {
        font-size: 2.2rem;
      }

      .card-grid {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
      }

      .card {
        flex: 1 1 calc(50% - 10px);
        min-width: 250px;
      }
    }

    /* ========================================
       DESKTOP: 1024px and up
       ======================================== */

    @media (min-width: 1024px) {
      body {
        max-width: 1200px;
        margin: 0 auto;
        padding: 40px;
      }

      h1 {
        font-size: 2.8rem;
        margin-bottom: 40px;
      }

      .card {
        flex: 1 1 calc(33.33% - 14px);
        padding: 30px;
      }

      .card h2 {
        font-size: 1.5rem;
      }

      .card p {
        font-size: 1rem;
      }
    }

    /* ========================================
       LARGE DESKTOP: 1400px and up
       ======================================== */

    @media (min-width: 1400px) {
      .card {
        flex: 1 1 calc(25% - 15px);
      }
    }
  </style>
</head>
<body>

  <h1>Responsive Card Gallery</h1>

  <div class="card-grid">
    <div class="card">
      <h2>Card 1</h2>
      <p>This card adapts its layout across breakpoints. On mobile, it stacks vertically. On tablet, it forms two columns. On desktop, three columns.</p>
      <span class="tag">Responsive</span>
    </div>
    <div class="card">
      <h2>Card 2</h2>
      <p>Each card uses the same structure, but their arrangement changes based on screen width.</p>
      <span class="tag">Flexbox</span>
    </div>
    <div class="card">
      <h2>Card 3</h2>
      <p>The card width increases with screen size, and padding becomes more generous on larger screens.</p>
      <span class="tag">Fluid</span>
    </div>
    <div class="card">
      <h2>Card 4</h2>
      <p>On very large screens, the grid expands to show four cards per row.</p>
      <span class="tag">Scalable</span>
    </div>
  </div>

</body>
</html>
```

### G. Debugging Media Queries

**Using DevTools to Debug Breakpoints:**

1. Open DevTools (`Ctrl+Shift+I` or `Cmd+Option+I`)
2. Click the **Device Toolbar** icon
3. Select a device or drag the viewport to resize
4. In the Styles panel, media queries are shown with their breakpoints
5. Click the breakpoint label to see which styles are active

**Show Media Queries in DevTools:**

Chrome DevTools displays active media queries at the top of the Styles panel. You can click on them to see exactly which rules apply at the current width.

### H. In-Class Activity: Add 3 Media Queries

**Task:** Given a simple HTML page, add three media queries that modify:

1. **Background colour** at `600px` (tablet)
2. **Font size and layout** at `768px` (tablet)
3. **Grid layout** at `1024px` (desktop)

**Starting Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Media Query Lab</title>
  <style>
    body {
      font-family: sans-serif;
      padding: 20px;
      background: #fff;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .box {
      background: #74b9ff;
      padding: 30px;
      text-align: center;
      border-radius: 8px;
      color: white;
      font-size: 1.2rem;
    }
  </style>
</head>
<body>
  <h1>Media Query Lab</h1>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
    <div class="box">Box 3</div>
  </div>
</body>
</html>
```

### I. Homework Prompt

**Challenge: Add 3 Media Queries to Your Site**

Add three media queries to your own site or homepage project:

1. One for **tablet** styling (`min-width: 768px`)
2. One for **desktop** layout (`min-width: 1024px`)
3. One for **large desktop** styling (`min-width: 1400px`)

**Requirements:**
- Use DevTools to test each view
- Take screenshots of each view
- Submit GitHub link and a brief reflection:
  - "What changed across breakpoints, and why?"

---

## Session 4: Responsive vs Adaptive Design

### A. Learning Outcome

Understand the difference between responsive and adaptive design, evaluate the pros and cons of each approach, and determine which strategy suits different project contexts.

### B. The Fundamental Distinction

| Approach | Behaviour | Technique |
|----------|-----------|-----------|
| **Responsive** | Layout **continuously adjusts** as screen size changes | Fluid grids, flexible images, media queries |
| **Adaptive** | Layout **switches between fixed layouts** at specific breakpoints | Media queries with fixed widths, server-side detection |

### C. Responsive Design (Fluid Approach)

**Characteristics:**

- Layout flows smoothly across all screen sizes
- Uses percentage-based widths and flexible units
- One codebase serves all devices
- CSS handles the adaptation

**Visual Representation:**

```
Screensize:  320px → 500px → 768px → 1024px → 1440px
Layout:       [A]   → [A]   → [A B]  → [A B C] → [A B C D]
             (Fluidly adjusts at every step)
```

**CSS Approach:**

```css
/* Responsive: Fluid layout */
.container {
  display: flex;
  flex-wrap: wrap;
}

.item {
  flex: 1 1 calc(33.33% - 20px);  /* Fluidly adjusts */
}

/* Breakpoints are "soft" — they enhance, not replace */
@media (min-width: 768px) {
  .item {
    flex: 1 1 calc(25% - 20px);
  }
}
```

### D. Adaptive Design (Fixed Approach)

**Characteristics:**

- Layout switches between pre-defined layouts at breakpoints
- Uses fixed pixel widths at each breakpoint
- Often uses JavaScript or server-side detection
- Different layouts for different device categories

**Visual Representation:**

```
Screensize:   320px → 500px → 768px → 1024px  → 1440px
Layout:       [A]   → [A]   → [A]   → [A B C] → [A B C D]
             (Switches at specific breakpoints)
```

**CSS Approach:**

```css
/* Adaptive: Fixed layouts at breakpoints */

/* Mobile layout (0-767px) */
@media (max-width: 767px) {
  .container {
    width: 100%;
  }
  .item {
    width: 100%;
  }
}

/* Tablet layout (768-1023px) */
@media (min-width: 768px) and (max-width: 1023px) {
  .container {
    width: 720px;
    margin: 0 auto;
  }
  .item {
    width: 220px;
    float: left;
    margin: 10px;
  }
}

/* Desktop layout (1024px+) */
@media (min-width: 1024px) {
  .container {
    width: 960px;
    margin: 0 auto;
  }
  .item {
    width: 300px;
    float: left;
    margin: 10px;
  }
}
```

### E. Comparison: Responsive vs Adaptive

| Feature | Responsive | Adaptive |
|---------|------------|----------|
| **Fluidity** | ✓ Smooth, continuous | ✗ Fixed, step changes |
| **Control** | ⚠ Less precise | ✓ More precise per device |
| **Maintenance** | ✓ One codebase | ⚠ Multiple layouts |
| **Performance** | ✓ CSS-only, efficient | ⚠ May require JS detection |
| **Device Diversity** | ✓ Future-proof | ✗ May miss new devices |
| **Development Time** | ⚠ Can be complex | ⚠ Multiple layouts to build |
| **Mobile-First** | ✓ Easy to implement | ⚠ Harder with max-width |

### F. Real-World Examples

| Platform | Approach | Why? |
|----------|----------|------|
| **Amazon** | Adaptive | Tightly controlled, performance-focused, legacy system |
| **Airbnb** | Responsive | Highly scalable, consistent experience |
| **Apple** | Mostly Adaptive | Custom layouts per device, precise control |
| **BBC News** | Responsive | Prioritizes accessibility and consistency |
| **Google** | Responsive | Scale across billions of devices |
| **Wikipedia** | Responsive | Open source, community-driven |

### G. Example: Side-by-Side Comparison

**HTML (same for both):**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive vs Adaptive</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <header>
    <h1>Welcome</h1>
    <p>This header will behave differently across breakpoints.</p>
  </header>
</body>
</html>
```

**Adaptive CSS:**

```css
/* Adaptive: Fixed layouts at breakpoints */

/* Mobile */
@media (max-width: 600px) {
  header {
    background: #74b9ff;
    padding: 1rem;
    font-size: 1rem;
    text-align: center;
  }
}

/* Tablet */
@media (min-width: 601px) and (max-width: 1024px) {
  header {
    background: #55efc4;
    padding: 2rem;
    font-size: 1.25rem;
    text-align: left;
  }
}

/* Desktop */
@media (min-width: 1025px) {
  header {
    background: #a29bfe;
    padding: 3rem;
    font-size: 1.5rem;
    text-align: center;
    max-width: 960px;
    margin: 0 auto;
  }
}
```

**Responsive CSS:**

```css
/* Responsive: Fluid layout */
header {
  background: linear-gradient(135deg, #74b9ff, #a29bfe);
  font-size: clamp(1rem, 2vw, 2rem);     /* Fluid font scaling */
  padding: clamp(1rem, 3vw, 3rem);       /* Fluid padding */
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
}

/* One "soft" breakpoint for layout change */
@media (min-width: 768px) {
  header {
    text-align: left;
    background: linear-gradient(135deg, #55efc4, #a29bfe);
  }
}
```

### H. Discussion: Which Approach Is Better?

**Student Discussion Prompts:**

1. "If a client asked you to build a site that looked perfect on iPad, which approach would you use?"
2. "When would you choose responsive over adaptive?"
3. "When would you choose adaptive over responsive?"

**Key Insights:**

| Scenario | Recommended Approach |
|----------|----------------------|
| New project, unknown devices | Responsive |
| Complex design, specific devices | Adaptive |
| Tight timeline | Responsive |
| High-performance requirements | Adaptive (if well-planned) |
| Accessibility focus | Responsive |
| Legacy system | Adaptive |

**The Modern Consensus:**

> **Responsive is the default.** Adaptive has specific use cases where you need precise control over device-specific experiences.

### I. In-Class Activity: Design Decision Debate

**Scenario:** Your client runs a large e-commerce site. 40% of traffic comes from mobile. They want a mobile experience that is perfectly optimised.

**Debate Questions:**

1. Which approach would you recommend and why?
2. What research would you do before deciding?
3. What are the trade-offs?

**Suggested Answer:**

- Research: Analyse analytics data to see which devices are most common
- Approach: Responsive with some adaptive enhancements for critical user flows
- Reasoning: One codebase, future-proof, mobile-first

### J. Homework Prompt

**Challenge: Design Decision Reflection**

Draw two versions of a page:

1. One that uses **adaptive breakpoints** (draw the 3 device states)
2. One that uses **fluid design** (illustrate flow, not just screen sizes)

**Label:**
- Breakpoints
- Content changes
- Font/layout adjustments

**Reflection:**
- "Which design approach would you prefer using on your own portfolio, and why?"

---

## Session Summary

| Concept | Key Idea |
|---------|----------|
| Media Query | CSS that applies conditionally |
| `min-width` | Mobile-first (recommended) |
| `max-width` | Desktop-first (not recommended) |
| Breakpoints | Widths where layout changes |
| Content-Driven Breakpoints | Break when the design breaks |
| Responsive Design | Fluid, continuous adaptation |
| Adaptive Design | Fixed layouts that switch |
| Mobile-First | Start small, enhance for larger screens |
| Viewport Meta Tag | Essential for RWD |

---

### Reflection Questions

1. Why is `min-width` preferred over `max-width` for media queries?
2. How do you determine where to place breakpoints?
3. What is the difference between responsive and adaptive design?
4. When would you choose adaptive over responsive?
5. Why should you avoid targeting specific devices with breakpoints?

---

### Resources for Further Study

- [MDN: Using Media Queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
- [CSS Tricks: A Complete Guide to CSS Media Queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)
- [Responsive Breakpoints Generator](https://responsivebreakpoints.com/)
- [Can I Use: Media Queries](https://caniuse.com/css-mediaqueries)

---
