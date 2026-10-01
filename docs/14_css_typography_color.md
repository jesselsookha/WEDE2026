# Typography, Color (Colour), and Decoration

Now that you understand the box model and positioning, it is time to focus on the visual details that make a website engaging and readable. This document explores typography — the art of arranging text — along with colour theory, decorative elements, and interactive link styling. These are the techniques that transform a functional layout into a polished, professional design.

---

## Session 7: Typography, Colo(u)r, Decoration, and Link Styling

This session is where students move from functional styling into expressive, aesthetic design. You will explore how fonts and colours affect mood, master link states for better user experience, and decorate pages to add polish and personality.

### A. Learning Outcome

Apply font families, sizes, and spacing for readable typography; use colour values effectively; style link states for interactivity; and add decorative styles such as borders, shadows, and backgrounds.

### B. Typography Fundamentals

Typography is one of the most important aspects of web design. Good typography makes content readable, establishes hierarchy, and reinforces brand identity.

**Font Families**

The `font-family` property specifies the typeface for an element. Multiple fonts can be listed as a "font stack" — the browser will use the first available font in the list.

```css
/* Font stack: first choice, then fallbacks, then a generic family */
body {
  font-family: 'Georgia', 'Times New Roman', serif;
}

h1 {
  font-family: 'Helvetica Neue', Arial, sans-serif;
}
```

**Web-Safe Fonts**

Web-safe fonts are fonts that are pre-installed on most operating systems. They are reliable fallbacks.

| Font | Category | Example |
|------|----------|---------|
| Arial | Sans-serif | Clean, modern |
| Helvetica | Sans-serif | Clean, modern |
| Georgia | Serif | Elegant, readable |
| Times New Roman | Serif | Traditional, formal |
| Courier New | Monospace | Typewriter, code |
| Verdana | Sans-serif | Highly readable |

**Google Fonts**

Google Fonts provides hundreds of free, web-optimized fonts that can be embedded in your site. This gives you much more design flexibility than web-safe fonts alone.

**How to Use Google Fonts:**

1. Visit [fonts.google.com](https://fonts.google.com/)
2. Choose a font (e.g., "Roboto")
3. Select the styles you need (e.g., Regular 400, Bold 700)
4. Copy the `<link>` tag and paste it into your HTML `<head>`
5. Apply the font using `font-family` in your CSS

**Example:**

```html
<!-- In the <head> section -->
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet">
```

```css
/* In the CSS */
body {
  font-family: 'Roboto', Arial, sans-serif;
}

h1, h2, h3 {
  font-family: 'Playfair Display', Georgia, serif;
}
```

### C. Font Properties

| Property | Description | Example |
|----------|-------------|---------|
| `font-family` | Typeface or font stack | `font-family: Arial, sans-serif;` |
| `font-size` | Size of the text | `font-size: 16px;` |
| `font-weight` | Boldness (100-900 or keywords) | `font-weight: bold;` |
| `font-style` | Italic or normal | `font-style: italic;` |
| `line-height` | Space between lines | `line-height: 1.6;` |
| `letter-spacing` | Space between characters | `letter-spacing: 2px;` |
| `text-align` | Horizontal alignment | `text-align: center;` |
| `text-decoration` | Underline, overline, line-through | `text-decoration: underline;` |
| `text-transform` | Uppercase, lowercase, capitalize | `text-transform: uppercase;` |

### D. Example: Typography in Practice

```html
<style>
  body {
    font-family: 'Georgia', serif;
    font-size: 16px;
    line-height: 1.6;
    color: #2d3436;
    max-width: 700px;
    margin: 0 auto;
    padding: 40px 20px;
  }

  h1 {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 2.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-align: center;
    color: #0984e3;
    margin-bottom: 30px;
  }

  h2 {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    margin-top: 30px;
    color: #2d3436;
    border-bottom: 2px solid #dfe6e9;
    padding-bottom: 10px;
  }

  p {
    margin-bottom: 16px;
  }

  .highlight {
    font-weight: bold;
    color: #e17055;
  }

  .small-text {
    font-size: 0.875rem;
    color: #636e72;
  }

  .fancy-heading {
    font-family: 'Georgia', serif;
    font-style: italic;
    letter-spacing: 3px;
    text-transform: uppercase;
  }
</style>

<body>
  <h1>Typography Showcase</h1>

  <h2>Understanding Type</h2>
  <p>Good typography makes content <span class="highlight">readable</span> and engaging. It establishes a visual hierarchy that guides the reader through the page.</p>

  <h2>Font Combinations</h2>
  <p>Pairing a <strong>serif</strong> font with a <strong>sans-serif</strong> font creates contrast and visual interest.</p>

  <p class="fancy-heading">This heading is all caps with wide letter spacing</p>
  <p class="small-text">Small, muted text for secondary information</p>
</body>
```

### E. Colour Values

CSS offers several ways to specify colours.

**Named Colours:**

```css
.color-example {
  color: red;
  background-color: lightblue;
  border-color: darkgreen;
}
```

**Hexadecimal (Hex):**

```css
.color-example {
  color: #FF5733;    /* 6-digit hex */
  background-color: #FFF;    /* 3-digit shorthand (white) */
  border-color: #2C3E50;    /* Dark blue-grey */
}
```

**RGB (Red, Green, Blue):**

```css
.color-example {
  color: rgb(50, 50, 50);        /* 0-255 values */
  background-color: rgb(255, 200, 200);
  border-color: rgba(0, 0, 0, 0.5);    /* With alpha (transparency) */
}
```

**HSL (Hue, Saturation, Lightness):**

```css
.color-example {
  color: hsl(0, 100%, 50%);      /* Red */
  background-color: hsl(210, 100%, 90%);    /* Light blue */
  border-color: hsla(120, 80%, 40%, 0.6);   /* Green with transparency */
}
```

**Which Format to Use?**

| Format | Best For |
|--------|----------|
| Named Colours | Quick prototyping, common colours |
| Hex | Most common in web design |
| RGB | When you need alpha transparency |
| HSL | When you need to adjust hue/saturation easily |

### F. Example: Colour in Action

```html
<style>
  .color-demo {
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 20px;
  }

  .hex-example {
    background-color: #f5f5f5;
    color: #2c3e50;
    border-left: 6px solid #3498db;
  }

  .rgb-example {
    background-color: rgb(240, 248, 255);
    color: rgb(44, 62, 80);
    border-left: 6px solid rgb(52, 152, 219);
  }

  .hsl-example {
    background-color: hsl(210, 100%, 96%);
    color: hsl(200, 20%, 30%);
    border-left: 6px solid hsl(210, 80%, 50%);
  }

  .rgba-example {
    background-color: rgba(52, 152, 219, 0.15);
    color: #2c3e50;
    border-left: 6px solid rgba(52, 152, 219, 0.8);
  }
</style>

<div class="color-demo hex-example">Hex Colour: #f5f5f5 background with #3498db border</div>
<div class="color-demo rgb-example">RGB Colour: rgb(240, 248, 255) background</div>
<div class="color-demo hsl-example">HSL Colour: hsl(210, 100%, 96%) background</div>
<div class="color-demo rgba-example">RGBA with transparency: subtle blue background</div>
```

### G. Styling Link States

Links are interactive elements with multiple states. Each state can be styled differently to provide visual feedback to the user.

**The Four Link States:**

| State | Selector | Description |
|-------|----------|-------------|
| Unvisited | `:link` | Default state of an unclicked link |
| Visited | `:visited` | State after the link has been clicked |
| Hover | `:hover` | State when the mouse is over the link |
| Active | `:active` | State while the link is being clicked |

**Order Matters:** The order of these selectors in your CSS is important. The common pattern is:

```
a:link { ... }
a:visited { ... }
a:hover { ... }
a:active { ... }
```

**LoVe HAte** is a common mnemonic: **L**ink, **V**isited, **H**over, **A**ctive.

**Example:**

```css
/* Default link */
a:link {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

/* Visited link */
a:visited {
  color: #8e44ad;
}

/* Hover state */
a:hover {
  color: #e74c3c;
  text-decoration: underline;
  transform: scale(1.05);
}

/* Active state (while clicking) */
a:active {
  color: #c0392b;
  transform: scale(0.95);
}

/* Focus state (keyboard navigation) */
a:focus {
  outline: 2px solid #3498db;
  outline-offset: 2px;
}
```

### H. Styling Buttons

Buttons are essential interactive elements that should be styled consistently and accessibly.

**Example:**

```css
.button {
  display: inline-block;
  padding: 12px 24px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.button:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
}

.button:active {
  transform: translateY(0px);
}

.button-secondary {
  background-color: #2ecc71;
}

.button-secondary:hover {
  background-color: #27ae60;
}

.button-danger {
  background-color: #e74c3c;
}

.button-danger:hover {
  background-color: #c0392b;
}
```

```html
<a href="#" class="button">Primary Button</a>
<a href="#" class="button button-secondary">Secondary Button</a>
<a href="#" class="button button-danger">Danger Button</a>
```

### I. Decorative Elements

**Borders**

```css
.border-example {
  border: 2px solid #333;           /* Solid border */
  border: 2px dashed #e74c3c;       /* Dashed border */
  border: 4px dotted #2ecc71;       /* Dotted border */
  border: 2px double #3498db;       /* Double border */
  border-radius: 10px;              /* Rounded corners */
  border-radius: 50%;               /* Circle */
}
```

**Box Shadows**

```css
.shadow-example {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);    /* Subtle shadow */
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.15); /* Bigger shadow */
  box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1); /* Inner shadow */
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 10px 20px rgba(0, 0, 0, 0.05); /* Multiple shadows */
}
```

**Text Shadows**

```css
.text-shadow-example {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);    /* Simple drop shadow */
  text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.4);    /* Heavier shadow */
  text-shadow: 0 0 10px rgba(255, 0, 0, 0.5);     /* Glow effect */
}
```

**Background Images**

```css
.background-example {
  background-image: url('hero.jpg');
  background-size: cover;              /* Stretch to cover the element */
  background-position: center;
  background-repeat: no-repeat;
  min-height: 400px;
}

/* Gradient background */
.gradient-example {
  background: linear-gradient(to right, #3498db, #2ecc71);
  background: radial-gradient(circle, #3498db, #2c3e50);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### J. Complete Example: Styled Biography Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Biography Page</title>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
  <style>
    /* Global Styles */
    body {
      font-family: 'Roboto', Arial, sans-serif;
      font-weight: 300;
      font-size: 16px;
      line-height: 1.8;
      color: #2d3436;
      max-width: 800px;
      margin: 0 auto;
      padding: 40px 20px;
      background-color: #fafafa;
    }

    /* Typography */
    h1 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 3rem;
      color: #2d3436;
      text-align: center;
      margin-bottom: 10px;
      letter-spacing: 2px;
    }

    .subtitle {
      text-align: center;
      color: #636e72;
      font-size: 1.1rem;
      letter-spacing: 3px;
      text-transform: uppercase;
      border-bottom: 2px solid #dfe6e9;
      padding-bottom: 30px;
      margin-bottom: 30px;
    }

    h2 {
      font-family: 'Playfair Display', Georgia, serif;
      font-size: 1.8rem;
      color: #0984e3;
      margin-top: 40px;
      border-left: 4px solid #0984e3;
      padding-left: 15px;
    }

    /* Link Styles */
    a:link {
      color: #0984e3;
      text-decoration: none;
      font-weight: 400;
      border-bottom: 1px solid transparent;
      transition: all 0.3s ease;
    }

    a:visited {
      color: #6c5ce7;
    }

    a:hover {
      color: #e17055;
      border-bottom-color: #e17055;
    }

    a:active {
      color: #d63031;
    }

    /* Button Styles */
    .button {
      display: inline-block;
      background: linear-gradient(135deg, #0984e3, #6c5ce7);
      color: white;
      padding: 12px 30px;
      border-radius: 30px;
      text-decoration: none;
      font-weight: 700;
      transition: transform 0.2s ease, box-shadow 0.3s ease;
      box-shadow: 0 4px 15px rgba(9, 132, 227, 0.3);
      border: none;
    }

    .button:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 25px rgba(9, 132, 227, 0.4);
      color: white;
    }

    .button:active {
      transform: translateY(0px);
    }

    /* Decorative Elements */
    .hero {
      background: linear-gradient(135deg, #dfe6e9, #b2bec3);
      padding: 40px;
      border-radius: 12px;
      text-align: center;
      margin-bottom: 30px;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    }

    .hero h1 {
      margin-bottom: 5px;
      color: #2d3436;
    }

    .card {
      background: white;
      padding: 25px;
      border-radius: 12px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
      margin-bottom: 20px;
      border-left: 4px solid #0984e3;
    }

    .card-highlight {
      border-left-color: #e17055;
    }

    .badge {
      display: inline-block;
      background: #dfe6e9;
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 1px;
      color: #2d3436;
      margin-right: 5px;
    }

    .badge-primary {
      background: #0984e3;
      color: white;
    }
  </style>
</head>
<body>

  <div class="hero">
    <h1>Jane Doe</h1>
    <p class="subtitle">Web Developer &amp; Designer</p>
  </div>

  <section>
    <h2>About Me</h2>
    <div class="card">
      <p>I am a passionate web developer with a love for creating clean, responsive, and accessible websites. I believe that good design is <strong>not just about how things look</strong>, but about how they <em>work</em> for the people using them.</p>
      <p><span class="badge">HTML</span><span class="badge badge-primary">CSS</span><span class="badge">JavaScript</span></p>
    </div>
  </section>

  <section>
    <h2>My Work</h2>
    <div class="card card-highlight">
      <h3>Portfolio Website</h3>
      <p>Built a responsive portfolio site to showcase my projects and design skills.</p>
      <a href="#" class="button">View Project</a>
    </div>
    <div class="card card-highlight">
      <h3>Community Blog</h3>
      <p>Created a blog platform for local community members to share their stories.</p>
      <a href="#" class="button">View Project</a>
    </div>
  </section>

  <section>
    <h2>Get in Touch</h2>
    <p>I'm always open to new opportunities and collaborations. Feel free to <a href="#">reach out</a>!</p>
  </section>

</body>
</html>
```

### K. In-Class Activity: Link Makeover

**Goal:** Transform basic links into styled interactive buttons.

**Task:** Given a set of basic links, apply styles to create a polished button component.

**Starting Code:**

```html
<a href="#">Home</a>
<a href="#">About</a>
<a href="#">Contact</a>
```

**Requirements:**
- Remove underline from default state
- Add underline on hover
- Change colour on hover
- Add a subtle transition
- Make them look like buttons (padding, background, border-radius)

### L. Homework Prompt

**Assignment: Stylized Biography Page**

Create a one-page biography that includes:
- Stylized headings and paragraphs using distinct fonts (including a Google Font)
- A background colour or gradient
- Styled links with hover effects
- Decorative touches: border, shadow, colour palette
- At least one button or call-to-action element

**Requirements:**
- Internal or external CSS file
- Screenshot of finished layout
- Branch name: `css-typography-decoration`
- `README.md` discussing:
  - Font choices and how they reflect tone
  - Link styling for better UX
  - Any decoration that added visual clarity or flair

### M. Session Summary

| Concept | Key Idea |
|---------|----------|
| `font-family` | Specifies typeface, use font stacks |
| Google Fonts | Free web fonts for professional design |
| `font-size` | Size of text (px, rem, em) |
| `line-height` | Space between lines of text |
| `letter-spacing` | Space between characters |
| Named Colours | Easy, limited palette |
| Hex Colours | Most common in web design |
| RGB / RGBA | Allows transparency |
| HSL / HSLA | Great for adjusting hue/saturation |
| Link States | `:link`, `:visited`, `:hover`, `:active` |
| Transitions | Smooth changes between states |
| Borders | Lines around elements |
| Box Shadow | Adds depth and dimension |
| Text Shadow | Adds depth to text |
| Gradients | Smooth colour transitions |

### N. Reflection Questions

1. Why is it important to use a font stack in CSS?
2. When would you use `rem` vs `px` for font sizing?
3. How do colours affect the mood and readability of a website?
4. Why should you style `:focus` states in addition to `:hover` states?
5. How can you ensure text is readable over a background image?
6. What is the difference between a text-shadow and a box-shadow?

### O. Resources for Further Study

- [Google Fonts](https://fonts.google.com/)
- [MDN: Web Fonts](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Web_fonts)
- [MDN: CSS Colour](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- [Coolors](https://coolors.co/) — Colour palette generator
- [CSS Tricks: A Complete Guide to Links and Buttons](https://css-tricks.com/a-complete-guide-to-links-and-buttons/)

---
