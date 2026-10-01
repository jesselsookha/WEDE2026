# Responsive Navigation and Layout Patterns

Navigation is one of the most critical components of any website. On desktop, users expect a horizontal menu. On mobile, space is limited, and navigation must adapt. This document explores how to build responsive navigation that works across devices, and how frameworks like Bootstrap can accelerate responsive development while maintaining best practices.

---

## Session 7: Building a Responsive Navigation

### A. Learning Outcome

Build a responsive navigation bar that adapts across devices using Flexbox, CSS, and minimal JavaScript, with accessibility considerations.

### B. The Challenge of Responsive Navigation

**Desktop Navigation:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Logo    │  Home  │  About  │  Services  │  Contact  │  Login   │
└─────────────────────────────────────────────────────────────────┘
```

**Mobile Navigation:**

```
┌────────────────────────────────────────────────────────────────┐
│  Logo                                    ☰                    │ 
├────────────────────────────────────────────────────────────────┤
│  Home                                                          │
│  About                                                         │
│  Services                                                      │
│  Contact                                                       │
│  Login                                                         │
└────────────────────────────────────────────────────────────────┘
```

**Key Considerations:**

| Consideration | Why It Matters |
|---------------|----------------|
| **Touch targets** | Buttons must be at least 44px for fingers |
| **Accessibility** | Keyboard navigation, ARIA labels |
| **Performance** | Minimal JavaScript for toggling |
| **User expectations** | Hamburger menu is a familiar pattern |

### C. The Hamburger Menu Pattern

The hamburger menu (three horizontal lines ☰) is the most common pattern for mobile navigation. It signals that a menu is hidden and can be expanded.

**When to Use:**

| Scenario | Recommendation |
|----------|----------------|
| 5+ navigation items | ✓ Use hamburger on mobile |
| 3-4 navigation items | May not need hamburger |
| Simple site | May not need hamburger |
| Complex site | ✓ Use hamburger |

### D. Example: Responsive Navigation with Toggle

**HTML:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Responsive Navigation</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <nav class="navbar" role="navigation" aria-label="Main navigation">
    <div class="navbar-container">
      <!-- Logo -->
      <a href="#" class="logo">MySite</a>

      <!-- Hamburger Button -->
      <button
        id="menuToggle"
        class="menu-toggle"
        aria-label="Toggle menu"
        aria-expanded="false"
      >
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <!-- Navigation Links -->
      <ul id="menu" class="nav-links" role="menubar">
        <li role="none"><a href="#" role="menuitem" class="active">Home</a></li>
        <li role="none"><a href="#" role="menuitem">About</a></li>
        <li role="none"><a href="#" role="menuitem">Services</a></li>
        <li role="none"><a href="#" role="menuitem">Portfolio</a></li>
        <li role="none"><a href="#" role="menuitem">Contact</a></li>
      </ul>
    </div>
  </nav>

  <main>
    <h1>Welcome to My Site</h1>
    <p>Resize your browser to see the navigation adapt.</p>
  </main>

  <script src="script.js"></script>
</body>
</html>
```

**CSS (Mobile-First):**

```css
/* ========================================
   RESET & BASE
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

main {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

h1 {
  color: #2d3436;
  margin-bottom: 10px;
}

/* ========================================
   NAVIGATION (Mobile-First)
   ======================================== */

.navbar {
  background: #2d3436;
  padding: 0 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 64px;
}

/* Logo */
.logo {
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 1px;
}

.logo:hover {
  color: #74b9ff;
}

/* Hamburger Button */
.menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 22px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.3s ease;
}

.menu-toggle:hover {
  transform: scale(1.05);
}

/* Hamburger Lines */
.hamburger-line {
  display: block;
  width: 100%;
  height: 3px;
  background: white;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

/* Hamburger → X animation */
.menu-toggle.active .hamburger-line:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.menu-toggle.active .hamburger-line:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}

.menu-toggle.active .hamburger-line:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Navigation Links (Mobile: Hidden by default) */
.nav-links {
  display: none;
  flex-direction: column;
  list-style: none;
  width: 100%;
  padding: 10px 0 20px;
  margin: 0;
  gap: 5px;
}

.nav-links.open {
  display: flex;
}

.nav-links li {
  width: 100%;
}

.nav-links a {
  display: block;
  color: #dfe6e9;
  text-decoration: none;
  padding: 12px 16px;
  border-radius: 6px;
  font-weight: 500;
  transition: background 0.2s ease, color 0.2s ease;
}

.nav-links a:hover,
.nav-links a:focus {
  background: rgba(255, 255, 255, 0.1);
  color: #74b9ff;
}

.nav-links a.active {
  color: #74b9ff;
  background: rgba(116, 185, 255, 0.1);
}

/* ========================================
   TABLET & DESKTOP: 768px and up
   ======================================== */

@media (min-width: 768px) {
  /* Hide hamburger */
  .menu-toggle {
    display: none;
  }

  /* Show nav links as horizontal */
  .nav-links {
    display: flex !important;
    flex-direction: row;
    width: auto;
    padding: 0;
    gap: 5px;
  }

  .nav-links li {
    width: auto;
  }

  .nav-links a {
    padding: 8px 16px;
    border-radius: 6px;
  }

  /* Fix: Ensure navbar layout doesn't break */
  .navbar-container {
    flex-wrap: nowrap;
  }
}
```

**JavaScript:**

```javascript
// script.js

const toggleBtn = document.getElementById('menuToggle');
const navMenu = document.getElementById('menu');

toggleBtn.addEventListener('click', function() {
  // Toggle menu visibility
  navMenu.classList.toggle('open');

  // Toggle hamburger animation
  this.classList.toggle('active');

  // Update ARIA for accessibility
  const isExpanded = this.classList.contains('active');
  this.setAttribute('aria-expanded', isExpanded);
});

// Close menu when a link is clicked (optional)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
  });
});

// Close menu when clicking outside (optional)
document.addEventListener('click', function(e) {
  const navbar = document.querySelector('.navbar');
  if (!navbar.contains(e.target)) {
    navMenu.classList.remove('open');
    toggleBtn.classList.remove('active');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
});
```

### E. Accessibility in Navigation

**Key Accessibility Considerations:**

| Consideration | Implementation |
|---------------|----------------|
| **Keyboard navigation** | All links focusable with `Tab` |
| **ARIA labels** | `role="navigation"`, `aria-label` |
| **ARIA expanded** | `aria-expanded="false/true"` |
| **Focus management** | Visible focus indicators |
| **Skip link** | Skip to main content |

**Skip Link Example:**

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 50%;
  transform: translateX(-50%);
  background: #2d3436;
  color: white;
  padding: 12px 24px;
  border-radius: 0 0 8px 8px;
  z-index: 100;
  text-decoration: none;
}

.skip-link:focus {
  top: 0;
}
```

### F. In-Class Activity: Build a Responsive Nav

**Goal:** Build a responsive navigation bar that:
- Shows a horizontal menu on desktop
- Collapses to a hamburger menu on mobile
- Includes accessibility features (ARIA labels, focus states)

**Task Timeline:**
1. Write the HTML structure (5 min)
2. Style the mobile version (10 min)
3. Style the desktop version with media queries (10 min)
4. Add JavaScript for toggling (5 min)
5. Test and debug (5 min)

---

## Session 8: Using Responsive Frameworks (Bootstrap and Beyond)

### A. Learning Outcome

Understand how frameworks like Bootstrap implement responsiveness, use framework grid systems, and evaluate when to use a framework versus custom CSS.

### B. What Is a CSS Framework?

A **CSS framework** is a pre-built collection of CSS and sometimes JavaScript that provides:
- A responsive grid system
- Pre-styled components (buttons, cards, navigation)
- Utility classes
- Consistent design patterns

**Popular Frameworks:**

| Framework | Approach | Best For |
|-----------|----------|----------|
| **Bootstrap** | Component-based | Rapid prototyping, admin panels |
| **Tailwind CSS** | Utility-first | Custom designs, modern projects |
| **Foundation** | Component-based | Enterprise applications |
| **Bulma** | Flexbox-based | Clean, modern designs |
| **Pure CSS** | Minimal | Small projects |

### C. Bootstrap: The Industry Standard

**Why Bootstrap?**

| Reason | Explanation |
|--------|-------------|
| **Widely used** | Industry standard, lots of resources |
| **Responsive grid** | Mobile-first grid system |
| **Components** | Navbars, cards, modals, forms |
| **Customizable** | Can override with custom CSS |
| **Documentation** | Excellent, extensive docs |

**How to Get Bootstrap:**

```html
<!-- Bootstrap CSS (CDN) -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JavaScript (for components) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

### D. Bootstrap Grid System

Bootstrap uses a 12-column grid system with responsive breakpoints.

**Breakpoints:**

| Class Prefix | Min Width | Device |
|--------------|-----------|--------|
| `col-` | 0px | Mobile |
| `col-sm-` | 576px | Small tablets |
| `col-md-` | 768px | Tablets |
| `col-lg-` | 992px | Laptops |
| `col-xl-` | 1200px | Large desktops |
| `col-xxl-` | 1400px | Extra large desktops |

**Example: Bootstrap Grid Layout**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Bootstrap Grid</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <div class="container py-4">
    <h1 class="text-center mb-4">Bootstrap Grid Demo</h1>

    <div class="row g-3">
      <div class="col-12 col-md-6 col-lg-4">
        <div class="p-3 bg-light border rounded text-center">Column 1</div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="p-3 bg-light border rounded text-center">Column 2</div>
      </div>
      <div class="col-12 col-md-6 col-lg-4">
        <div class="p-3 bg-light border rounded text-center">Column 3</div>
      </div>
    </div>

    <!-- Responsive Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mt-4 rounded">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">MySite</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navMenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link active" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link" href="#">About</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
            <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

### E. Bootstrap vs. Custom CSS

| Aspect | Bootstrap | Custom CSS |
|--------|-----------|------------|
| **Speed** | ✓ Very fast to build | ✗ Slower development |
| **Flexibility** | ✗ Limited by framework | ✓ Complete control |
| **Learning Curve** | ⚠ Learn framework classes | ⚠ Learn CSS concepts |
| **File Size** | ✗ Larger (200KB+) | ✓ Only what you need |
| **Maintainability** | ✓ Consistent patterns | ⚠ Can become messy |
| **Performance** | ⚠ Can be heavy | ✓ Optimized |

**When to Use Bootstrap:**

- Prototyping quickly
- Admin panels or dashboards
- Team projects with designers
- When you need consistency across many pages

**When to Use Custom CSS:**

- Highly custom designs
- Performance-critical sites
- Learning web development
- When you want complete control

### F. Other Frameworks to Know

**Tailwind CSS**

```html
<!-- Utility-first approach -->
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
  <h1 class="text-2xl font-bold text-gray-900">Tailwind Card</h1>
  <p class="text-gray-600">Utility-first CSS framework.</p>
  <button class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Button</button>
</div>
```

**Bulma**

```html
<!-- Flexbox-based -->
<div class="card">
  <div class="card-content">
    <p class="title">Bulma Card</p>
    <p class="subtitle">Modern CSS framework.</p>
  </div>
</div>
```

### G. Framework Comparison: When to Use What?

| Project Type | Recommended Framework | Why |
|--------------|-----------------------|-----|
| **Admin Dashboard** | Bootstrap | Components ready to use |
| **Custom Brand Site** | Tailwind or Custom | Full design flexibility |
| **Learning CSS** | Custom | Understand the fundamentals |
| **Rapid Prototype** | Bootstrap | Quick to build |
| **Portfolio** | Bulma or Custom | Clean, modern look |

### H. In-Class Activity: Bootstrap Mini-Hack

**Goal:** Replicate a layout using only Bootstrap classes.

**Task:** Build a responsive page with:
1. A container with a row and 3 columns (stacking on mobile)
2. A responsive navbar (collapses on mobile)
3. A card component with an image
4. A button with hover effect

**Time:** 20 minutes

### I. Homework Prompt

**Challenge: Bootstrap Conversion**

Recreate a version of your site using Bootstrap:

**Requirements:**
- Use `container`, `row`, and `col-*` for layout
- Add a responsive navbar
- Use at least 2 Bootstrap components (cards, buttons, alerts, etc.)
- Submit:
  - GitHub repo link
  - Live link on GitHub Pages
  - Reflection: "What parts were faster with Bootstrap? What parts were harder to customize?"

---

## Session Summary

| Concept | Key Idea |
|---------|----------|
| Responsive Navigation | Hamburger menu on mobile, horizontal on desktop |
| Flexbox Nav | Use `display: flex` for alignment |
| JavaScript Toggle | Toggle class for show/hide |
| ARIA | Accessibility for screen readers |
| `aria-expanded` | Indicates menu state |
| Bootstrap | Popular CSS framework |
| Bootstrap Grid | 12-column, mobile-first system |
| `col-*` | Grid column classes |
| Framework Pros | Speed, consistency |
| Framework Cons | File size, limited flexibility |

---

### Reflection Questions

1. Why is the hamburger menu pattern so common on mobile?
2. What accessibility considerations are important for responsive navigation?
3. When would you choose a framework like Bootstrap over custom CSS?
4. What are the trade-offs of using Bootstrap for a project?
5. How does the Bootstrap grid system differ from CSS Grid?

---

### Resources for Further Study

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Bulma](https://bulma.io/)
- [MDN: ARIA Navigation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/Navigation_Role)

---
