# Mobile-First and Content Prioritization

Responsive design is not just about making things fit on smaller screens. It is about **rethinking** what content matters most and how users interact with it. On a mobile device, screen space is limited, attention is divided, and context is different. This document explores the mobile-first philosophy, content prioritization strategies, and techniques for serving responsive images and media.

---

## Session 5: Mobile-First Design and Content Prioritization

### A. Learning Outcome

Apply mobile-first thinking to HTML structure and CSS layout, prioritize essential content when space is limited, and reorder layouts using Flexbox and CSS Grid.

### B. The Mobile-First Philosophy

**The Core Principle:**

> "Design for the most constrained case first. Then add complexity as space allows."

Mobile-first means starting with the **smallest screen** and progressively enhancing the design as screen space increases. This forces you to focus on what truly matters.

**Why Mobile-First Works:**

| Reason | Explanation |
|--------|-------------|
| **Content Focus** | You must decide what's essential |
| **Performance** | Mobile users get leaner CSS and faster load times |
| **Accessibility** | Clean, simple layouts benefit all users |
| **Future-Proof** | New devices are often smaller, not larger |

### C. Content Prioritization

**The Question Every Mobile-First Designer Asks:**

> "If a user has only 10 seconds on their phone, what MUST they see?"

**Content Hierarchy Principles:**

1. **Identify Core Content** — What is the primary purpose of this page?
2. **Remove Non-Essentials** — What can be hidden, collapsed, or moved?
3. **Design for Scanning** — Users scan, they don't read
4. **Progressive Disclosure** — Reveal more content as screen space allows

**Example: Content Priority on a Product Page**

| Priority | Content | Mobile | Desktop |
|----------|---------|--------|---------|
| 1 | Product name and price | ✓ Always visible | ✓ Always visible |
| 2 | Add to cart button | ✓ Always visible | ✓ Always visible |
| 3 | Product image | ✓ Visible | ✓ Enlarged |
| 4 | Key features (short) | ✓ Visible | ✓ Visible |
| 5 | Full description | Collapsed (read more) | ✓ Fully visible |
| 6 | Reviews | Below the fold | Sidebar |
| 7 | Related products | Hidden | ✓ Visible |
| 8 | Newsletter signup | Hidden | Footer |

### D. Reordering Content with CSS

One of the most powerful techniques for mobile-first design is reordering content without changing the HTML structure. This allows you to maintain a logical order for accessibility while presenting a different visual order.

**Using Flexbox `order`:**

```html
<div class="container">
  <div class="main">Main Content</div>
  <div class="sidebar">Sidebar Info</div>
</div>
```

```css
/* Mobile: Main first, Sidebar second */
.container {
  display: flex;
  flex-direction: column;
}

.main {
  order: 1;
}

.sidebar {
  order: 2;
}

/* Desktop: Sidebar first, Main second */
@media (min-width: 1024px) {
  .container {
    flex-direction: row;
  }

  .main {
    order: 2;
    flex: 3;
  }

  .sidebar {
    order: 1;
    flex: 1;
  }
}
```

**Using Grid `grid-template-areas`:**

```css
/* Mobile: Single column */
.grid-container {
  display: grid;
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
}

/* Desktop: Full layout with sidebar on the left */
@media (min-width: 1024px) {
  .grid-container {
    grid-template-columns: 1fr 3fr;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }
}
```

### E. Example: Mobile-First Reordering Challenge

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mobile-First Reordering</title>
  <style>
    /* ========================================
       BASE: Mobile-first
       ======================================== */

    body {
      font-family: 'Segoe UI', sans-serif;
      margin: 0;
      padding: 20px;
      background: #f8f9fa;
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    .item {
      padding: 30px;
      border-radius: 8px;
      text-align: center;
      font-weight: 600;
      font-size: 1.2rem;
    }

    /* Mobile order: Hero → Features → About → Contact */
    .hero {
      background: #74b9ff;
      color: white;
      order: 1;
      padding: 60px 30px;
      font-size: 1.8rem;
    }

    .features {
      background: #dfe6e9;
      order: 2;
    }

    .about {
      background: #ffeaa7;
      order: 3;
    }

    .contact {
      background: #55efc4;
      order: 4;
    }

    /* ========================================
       DESKTOP: 768px and up
       ======================================== */

    @media (min-width: 768px) {
      .container {
        display: grid;
        grid-template-columns: 2fr 1fr;
        grid-template-areas:
          "hero hero"
          "about features"
          "contact contact";
        gap: 20px;
      }

      .hero {
        grid-area: hero;
        font-size: 2.5rem;
        padding: 80px 40px;
      }

      .features {
        grid-area: features;
      }

      .about {
        grid-area: about;
      }

      .contact {
        grid-area: contact;
      }
    }

    /* ========================================
       LARGE DESKTOP: 1024px and up
       ======================================== */

    @media (min-width: 1024px) {
      .container {
        grid-template-columns: 2fr 1fr 1fr;
        grid-template-areas:
          "hero about features"
          "contact contact contact";
      }
    }
  </style>
</head>
<body>

  <div class="container">
    <div class="item hero">🏆 Hero Section</div>
    <div class="item features">📋 Features</div>
    <div class="item about">ℹ️ About Us</div>
    <div class="item contact">📞 Contact</div>
  </div>

</body>
</html>
```

### F. Techniques for Content Prioritization

**1. Collapsible Sections (Accordion Style)**

```html
<details>
  <summary>Full Description</summary>
  <p>This content is hidden on mobile until the user clicks "read more".</p>
</details>
```

**2. Display: None on Mobile**

```css
/* Hide non-essential content on mobile */
.sidebar {
  display: none;
}

@media (min-width: 768px) {
  .sidebar {
    display: block;
  }
}
```

**3. Truncation with `text-overflow`**

```css
/* Truncate long text on mobile */
.long-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

@media (min-width: 768px) {
  .long-text {
    -webkit-line-clamp: none;
    overflow: visible;
  }
}
```

### G. In-Class Activity: Content Reordering Challenge

**Task:** Given a page with a sidebar and main content, reorder the layout using:

1. Flexbox `order` for mobile-first
2. Grid `grid-template-areas` for desktop

**Starting HTML:**

```html
<div class="container">
  <header>Header</header>
  <main>Main Content</main>
  <aside>Sidebar</aside>
  <footer>Footer</footer>
</div>
```

**Mobile Layout:**
- Header
- Main Content
- Sidebar
- Footer

**Desktop Layout:**
- Header (full width)
- Sidebar (left) + Main Content (right)
- Footer (full width)

### H. Homework Prompt

**Challenge: Mobile-First Redesign**

Pick one of your project pages and:
- Reorder the layout to show **main content first** on mobile
- Push **secondary content** (sidebar, footer) lower or hide it
- Use `order`, `flex-direction`, or `grid-template-areas`
- Write a reflection: "How did content reordering affect usability on small screens?"

---

## Session 6: Responsive Images and Media

### A. Learning Outcome

Use the `<picture>` element, `srcset`, and lazy loading to serve the right image for the right device.

### B. Why Responsive Images Matter

**The Problem:**

```html
<img src="desktop-hero.jpg" alt="Hero image">
```

This loads the **same image** on every device — a 2000px desktop image on a 320px phone screen. The result:

| Issue | Impact |
|-------|--------|
| **Data waste** | Mobile users pay for data they don't need |
| **Slow loading** | Large images delay page rendering |
| **Poor UX** | Slow pages frustrate users |
| **SEO penalty** | Google penalises slow pages |

**The Solution:**

Serve **different images** based on:
- Screen size
- Screen resolution
- Connection speed
- Image format support

### C. The `srcset` Attribute

The `srcset` attribute allows the browser to choose the best image based on screen width and pixel density.

**Basic Syntax:**

```html
<img
  src="small.jpg"
  srcset="medium.jpg 768w, large.jpg 1200w, xlarge.jpg 2000w"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  alt="Responsive image"
>
```

**How It Works:**

| Attribute | Purpose |
|-----------|---------|
| `src` | Fallback image (smallest) |
| `srcset` | List of images with their widths (in `w`) |
| `sizes` | Tells the browser how wide the image will be at each breakpoint |

**Breakdown:**

```html
srcset="medium.jpg 768w, large.jpg 1200w, xlarge.jpg 2000w"
```

- `medium.jpg` is 768px wide
- `large.jpg` is 1200px wide
- `xlarge.jpg` is 2000px wide

```html
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
```

- On screens ≤768px: image fills 100% of viewport
- On screens ≤1200px: image fills 50% of viewport
- On screens >1200px: image fills 33% of viewport

### D. The `<picture>` Element

The `<picture>` element gives you even more control, allowing you to swap images based on layout needs or art direction.

**Syntax:**

```html
<picture>
  <source media="(min-width: 1200px)" srcset="desktop.jpg">
  <source media="(min-width: 768px)" srcset="tablet.jpg">
  <img src="mobile.jpg" alt="Responsive image">
</picture>
```

**Art Direction Use Case:**

```html
<picture>
  <!-- Desktop: wide landscape crop -->
  <source media="(min-width: 1024px)" srcset="hero-desktop.jpg">
  <!-- Tablet: medium crop -->
  <source media="(min-width: 600px)" srcset="hero-tablet.jpg">
  <!-- Mobile: portrait crop that focuses on the subject -->
  <img src="hero-mobile.jpg" alt="Person using a laptop">
</picture>
```

**Format Selection (WebP/AVIF):**

```html
<picture>
  <!-- Modern format: WebP -->
  <source type="image/webp" srcset="image.webp">
  <!-- Modern format: AVIF -->
  <source type="image/avif" srcset="image.avif">
  <!-- Fallback: JPG -->
  <img src="image.jpg" alt="Image description">
</picture>
```

### E. Lazy Loading

Lazy loading defers loading images until they are about to appear in the viewport. This dramatically improves initial page load time.

**Basic Lazy Loading:**

```html
<!-- Add loading="lazy" to defer loading -->
<img src="large-image.jpg" alt="Descriptive text" loading="lazy">
```

**When to Use Lazy Loading:**

| Scenario | Recommendation |
|----------|----------------|
| Above-the-fold images | ❌ Don't lazy load — they should load immediately |
| Below-the-fold images | ✓ Lazy load |
| Large image galleries | ✓ Lazy load |
| Hero images | ❌ Don't lazy load |
| Decorative images | ✓ Lazy load |

### F. Complete Example: Responsive Images

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Images Demo</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background: #f8f9fa;
    }

    h1 {
      text-align: center;
      color: #2d3436;
    }

    .image-container {
      margin: 30px 0;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    }

    .image-container img {
      width: 100%;
      height: auto;
      display: block;
    }

    .caption {
      text-align: center;
      color: #636e72;
      font-size: 0.9rem;
      margin-top: 8px;
    }

    .info-box {
      background: white;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      border-left: 4px solid #74b9ff;
    }

    code {
      background: #dfe6e9;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 0.85rem;
    }
  </style>
</head>
<body>

  <h1>Responsive Images</h1>

  <div class="info-box">
    <h3>How This Works</h3>
    <p>
      This image uses <code>srcset</code> and <code>sizes</code> to serve different images
      based on screen width. Open DevTools and inspect the image to see which version is loaded.
    </p>
  </div>

  <div class="image-container">
    <img
      src="https://picsum.photos/400/300"
      srcset="https://picsum.photos/400/300 400w,
              https://picsum.photos/800/600 800w,
              https://picsum.photos/1200/800 1200w,
              https://picsum.photos/2000/1200 2000w"
      sizes="(max-width: 600px) 100vw,
             (max-width: 1024px) 80vw,
             50vw"
      alt="Responsive demo image from Lorem Picsum"
      loading="lazy"
    >
  </div>

  <p class="caption">This image adapts to your screen size. Try resizing the browser!</p>

  <div class="info-box">
    <h3>Image Information</h3>
    <p><strong>Loaded image:</strong> <span id="imageSrc">—</span></p>
    <p><strong>Screen width:</strong> <span id="screenWidth">—</span></p>
    <p><strong>Image width:</strong> <span id="imageWidth">—</span></p>
  </div>

  <script>
    // Display information about the loaded image
    const img = document.querySelector('img');
    const imageSrc = document.getElementById('imageSrc');
    const screenWidth = document.getElementById('screenWidth');
    const imageWidth = document.getElementById('imageWidth');

    img.addEventListener('load', function() {
      imageSrc.textContent = this.currentSrc;
      screenWidth.textContent = window.innerWidth + 'px';
      imageWidth.textContent = this.naturalWidth + 'px';
    });

    window.addEventListener('resize', function() {
      screenWidth.textContent = window.innerWidth + 'px';
      // Reload image information
      setTimeout(() => {
        imageWidth.textContent = img.naturalWidth + 'px';
        imageSrc.textContent = img.currentSrc;
      }, 100);
    });
  </script>

</body>
</html>
```

### G. Image Formats and Optimization

| Format | Best For | Notes |
|--------|----------|-------|
| **JPG** | Photos | Good quality, widely supported |
| **PNG** | Graphics with transparency | Larger files, lossless |
| **WebP** | Modern browsers | 30% smaller than JPG |
| **AVIF** | Cutting-edge browsers | Even smaller than WebP |
| **SVG** | Logos, icons, UI elements | Infinite scaling, tiny files |

**Optimization Tools:**

| Tool | Purpose |
|------|---------|
| [Squoosh](https://squoosh.app/) | Browser-based image compression |
| [TinyPNG](https://tinypng.com/) | Compress JPG and PNG |
| [ImageOptim](https://imageoptim.com/) | Desktop compression tool |
| [Cloudinary](https://cloudinary.com/) | Cloud-based image management |

### H. In-Class Activity: Image Optimization Lab

**Task:** Optimize 3 images in your project:

1. Replace `img` with `<picture>` or `srcset`
2. Add `loading="lazy"` to below-the-fold images
3. Convert at least one image to WebP or AVIF (using Squoosh)

**Reflection:**
- "How much did your image sizes shrink?"
- "Did the page load faster?"

### I. Homework Prompt

**Challenge: Image Optimization Task**

Pick 3 images in your project and:

1. Replace `img` with `<picture>` or `srcset`
2. Add `loading="lazy"` to below-the-fold images
3. Convert at least one image to WebP or AVIF (via Squoosh)

**Submit:** GitHub link to commit + 2-3 sentence reflection:
- "How much did your image sizes shrink?"
- "Did the page load faster?"

---

## Session Summary

| Concept | Key Idea |
|---------|----------|
| Mobile-First | Start with mobile, enhance for larger screens |
| Content Prioritization | Identify what matters most |
| `order` | Reorder flex items without changing HTML |
| `grid-template-areas` | Reorder grid items |
| `srcset` | Serve different images based on screen width |
| `sizes` | Tell browser how wide the image will be |
| `<picture>` | Art direction and format selection |
| `loading="lazy"` | Defer loading off-screen images |
| Image Optimization | Compress and convert to modern formats |

---

### Reflection Questions

1. Why is mobile-first design considered a best practice?
2. How does content prioritization affect the mobile user experience?
3. What is the difference between `srcset` and `<picture>`?
4. When should you use `loading="lazy"`?
5. Why is WebP preferable to JPG for modern browsers?
6. How does image optimization affect SEO?

---

### Resources for Further Study

- [MDN: Responsive Images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Squoosh](https://squoosh.app/) — Image compression tool
- [Cloudinary: Responsive Images](https://cloudinary.com/features/responsive_images)
- [WebP Browser Support](https://caniuse.com/webp)

---
