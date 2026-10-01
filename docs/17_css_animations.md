# Animations and Transforms

Animation brings web pages to life. Subtle movements can guide attention, provide feedback, and create a more engaging user experience. This document explores CSS transitions, transforms, and keyframe animations — the tools that allow you to add motion and interactivity to your designs without relying on JavaScript.

---

## Session 9A: Transitions, Transforms, and Keyframe Animations

### A. Learning Outcome

Create smooth transitions between states, apply CSS transforms to manipulate elements in 2D and 3D space, and build complex animations using `@keyframes`.

### B. CSS Transitions

Transitions allow you to change property values smoothly over a specified duration. They are triggered by state changes, such as `:hover` or class changes.

**Basic Syntax:**

```css
.element {
  transition: property duration timing-function delay;
}

/* Example */
.button {
  background-color: #3498db;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #2980b9;
}
```

**Transition Properties:**

| Property | Description | Example |
|----------|-------------|---------|
| `transition-property` | Which property to animate | `background-color`, `all` |
| `transition-duration` | How long the transition takes | `0.3s`, `300ms` |
| `transition-timing-function` | The speed curve of the transition | `ease`, `linear`, `ease-in-out` |
| `transition-delay` | Delay before the transition starts | `0.2s` |

**Timing Functions:**

| Function | Description |
|----------|-------------|
| `ease` | Starts slow, speeds up, ends slow (default) |
| `linear` | Constant speed |
| `ease-in` | Starts slow, ends fast |
| `ease-out` | Starts fast, ends slow |
| `ease-in-out` | Starts slow, speeds up, ends slow |
| `cubic-bezier()` | Custom curve |

**Example: Multiple Properties**

```css
.card {
  background: white;
  padding: 20px;
  transform: scale(1);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}
```

**Example: Shorthand**

```css
.element {
  /* property duration timing-function delay */
  transition: all 0.3s ease 0.1s;
}
```

### C. CSS Transforms

Transforms allow you to modify the appearance of an element by moving, rotating, scaling, or skewing it.

**Transform Functions:**

| Function | Description | Example |
|----------|-------------|---------|
| `translate(x, y)` | Moves an element | `transform: translate(20px, 10px)` |
| `translateX(x)` | Moves horizontally | `transform: translateX(30px)` |
| `translateY(y)` | Moves vertically | `transform: translateY(20px)` |
| `scale(x, y)` | Changes size | `transform: scale(1.5, 1.5)` |
| `scaleX(x)` | Changes width | `transform: scaleX(1.5)` |
| `scaleY(y)` | Changes height | `transform: scaleY(0.5)` |
| `rotate(angle)` | Rotates | `transform: rotate(45deg)` |
| `skew(x, y)` | Skews | `transform: skew(10deg, 5deg)` |
| `skewX(x)` | Skews horizontally | `transform: skewX(15deg)` |
| `skewY(y)` | Skews vertically | `transform: skewY(8deg)` |

**Example: Combined Transforms**

```css
.card {
  transform: translate(10px, 20px) rotate(5deg) scale(1.1);
}
```

**3D Transforms:**

| Function | Description | Example |
|----------|-------------|---------|
| `translate3d(x, y, z)` | Moves in 3D space | `transform: translate3d(10px, 20px, 50px)` |
| `rotateX(angle)` | Rotates around X-axis | `transform: rotateX(45deg)` |
| `rotateY(angle)` | Rotates around Y-axis | `transform: rotateY(45deg)` |
| `rotateZ(angle)` | Rotates around Z-axis | `transform: rotateZ(45deg)` |
| `scale3d(x, y, z)` | Scales in 3D | `transform: scale3d(1.5, 1.5, 1.5)` |
| `perspective(d)` | Adds depth | `transform: perspective(500px) rotateX(30deg)` |

### D. Keyframe Animations

While transitions respond to state changes, keyframe animations allow you to create complex, multi-step animations that can run automatically.

**Basic Syntax:**

```css
/* Define the animation */
@keyframes animation-name {
  0% { /* styles at start */ }
  50% { /* styles at midpoint */ }
  100% { /* styles at end */ }
}

/* Apply the animation */
.element {
  animation: animation-name duration timing-function delay iteration-count direction;
}
```

**Example: Bounce Animation**

```css
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
  100% {
    transform: translateY(0);
  }
}

.bouncing-box {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  border-radius: 8px;
  animation: bounce 1s ease-in-out infinite;
}
```

**Animation Properties:**

| Property | Description | Example |
|----------|-------------|---------|
| `animation-name` | Name of the keyframes | `bounce`, `fadeIn` |
| `animation-duration` | Duration of the animation | `2s`, `500ms` |
| `animation-timing-function` | Speed curve | `ease`, `linear` |
| `animation-delay` | Delay before starting | `0.5s` |
| `animation-iteration-count` | Number of repetitions | `2`, `infinite` |
| `animation-direction` | Direction of animation | `normal`, `reverse`, `alternate` |
| `animation-fill-mode` | Styles before/after animation | `forwards`, `backwards` |
| `animation-play-state` | Pause or play | `running`, `paused` |

### E. Complete Example: Button with Hover Effects

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive Buttons</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: #f8f9fa;
      gap: 30px;
      flex-wrap: wrap;
      padding: 40px;
    }

    /* Base button style */
    .btn {
      padding: 14px 32px;
      font-size: 1rem;
      font-weight: 600;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
    }

    /* Button 1: Scale and Shadow */
    .btn-1 {
      background: #3498db;
      color: white;
    }

    .btn-1:hover {
      transform: scale(1.08);
      box-shadow: 0 8px 25px rgba(52, 152, 219, 0.4);
    }

    /* Button 2: Slide and Color */
    .btn-2 {
      background: #2ecc71;
      color: white;
      position: relative;
      overflow: hidden;
    }

    .btn-2::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: rgba(255, 255, 255, 0.2);
      transition: left 0.4s ease;
    }

    .btn-2:hover::after {
      left: 0;
    }

    .btn-2:hover {
      background: #27ae60;
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(46, 204, 113, 0.4);
    }

    /* Button 3: Rotate and Glow */
    .btn-3 {
      background: #e74c3c;
      color: white;
    }

    .btn-3:hover {
      transform: rotate(5deg) scale(1.05);
      box-shadow: 0 0 20px rgba(231, 76, 60, 0.6);
    }

    /* Button 4: Wobble Animation */
    .btn-4 {
      background: #9b59b6;
      color: white;
    }

    .btn-4:hover {
      animation: wobble 0.5s ease;
    }

    @keyframes wobble {
      0%, 100% { transform: rotate(0deg); }
      25% { transform: rotate(-5deg); }
      75% { transform: rotate(5deg); }
    }

    /* Button 5: Flip effect */
    .btn-5 {
      background: #1abc9c;
      color: white;
      transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .btn-5:hover {
      transform: rotateY(180deg);
    }

    /* Button 6: Pulse animation (always running) */
    .btn-6 {
      background: #f39c12;
      color: white;
      animation: pulse 2s ease-in-out infinite;
    }

    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
        box-shadow: 0 0 0 0 rgba(243, 156, 18, 0.4);
      }
      50% {
        transform: scale(1.05);
        box-shadow: 0 0 30px rgba(243, 156, 18, 0.2);
      }
    }

    .btn-6:hover {
      animation-play-state: paused;
    }
  </style>
</head>
<body>

  <button class="btn btn-1">Scale & Shadow</button>
  <button class="btn btn-2">Slide & Color</button>
  <button class="btn btn-3">Rotate & Glow</button>
  <button class="btn btn-4">Wobble</button>
  <button class="btn btn-5">Flip</button>
  <button class="btn btn-6">Pulse (hover to pause)</button>

</body>
</html>
```

### F. Example: Animated Card

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated Card</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 20px;
    }

    .card {
      background: white;
      border-radius: 16px;
      padding: 40px;
      max-width: 400px;
      text-align: center;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
      transform: translateY(0);
      transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease;
    }

    .card:hover {
      transform: translateY(-10px);
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.4);
    }

    .card-icon {
      font-size: 4rem;
      display: inline-block;
      transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    }

    .card:hover .card-icon {
      transform: scale(1.2) rotate(10deg);
    }

    .card h2 {
      color: #2d3436;
      margin: 20px 0 10px;
    }

    .card p {
      color: #636e72;
      line-height: 1.6;
      margin-bottom: 25px;
    }

    .card-btn {
      padding: 12px 30px;
      background: linear-gradient(135deg, #667eea, #764ba2);
      color: white;
      border: none;
      border-radius: 30px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card-btn:hover {
      transform: scale(1.05);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    }

    .card-btn:active {
      transform: scale(0.95);
    }

    /* Entrance animation */
    @keyframes slideUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .card {
      animation: slideUp 0.8s ease forwards;
    }
  </style>
</head>
<body>

  <div class="card">
    <div class="card-icon">🚀</div>
    <h2>Welcome Aboard</h2>
    <p>This card slides in on load and animates on hover. Hover over the icon and button to see the effects!</p>
    <button class="card-btn">Get Started</button>
  </div>

</body>
</html>
```

### G. Example: Loading Spinner

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Loading Spinner</title>
  <style>
    body {
      font-family: 'Segoe UI', sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      margin: 0;
      background: #f8f9fa;
    }

    .spinner-container {
      text-align: center;
    }

    .spinner {
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;
      border: 6px solid #dfe6e9;
      border-top-color: #3498db;
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    /* Alternative spinner with dots */
    .dots-spinner {
      display: flex;
      justify-content: center;
      gap: 12px;
      margin: 20px 0;
    }

    .dot {
      width: 16px;
      height: 16px;
      background: #3498db;
      border-radius: 50%;
      animation: dotBounce 1.4s ease-in-out infinite;
    }

    .dot:nth-child(2) {
      animation-delay: 0.2s;
    }

    .dot:nth-child(3) {
      animation-delay: 0.4s;
    }

    @keyframes dotBounce {
      0%, 80%, 100% {
        transform: scale(0.4);
        opacity: 0.4;
      }
      40% {
        transform: scale(1);
        opacity: 1;
      }
    }

    .pulse-spinner {
      width: 80px;
      height: 80px;
      margin: 0 auto 20px;
      background: #3498db;
      border-radius: 50%;
      animation: pulseRing 1.5s ease-out infinite;
    }

    @keyframes pulseRing {
      0% {
        transform: scale(0.6);
        opacity: 0.8;
      }
      100% {
        transform: scale(1.8);
        opacity: 0;
      }
    }

    h3 {
      color: #2d3436;
      margin-bottom: 10px;
    }

    p {
      color: #636e72;
    }
  </style>
</head>
<body>

  <div class="spinner-container">
    <h3>Loading...</h3>

    <!-- Spinner 1: Rotating -->
    <div class="spinner"></div>
    <p>Classic spinner</p>

    <!-- Spinner 2: Bouncing dots -->
    <div class="dots-spinner">
      <div class="dot"></div>
      <div class="dot"></div>
      <div class="dot"></div>
    </div>
    <p>Bouncing dots</p>

    <!-- Spinner 3: Pulse ring -->
    <div class="pulse-spinner"></div>
    <p>Pulse ring</p>
  </div>

</body>
</html>
```

### H. In-Class Activity: Transition Station

**Goal:** Add simple hover transitions for buttons and links.

**Task:** Create a page with at least 5 different interactive elements, each with a different transition effect:
1. A button that changes background colour
2. A link that underlines on hover
3. A card that scales up
4. An icon that rotates
5. A box that changes shadow

**Requirements:**
- Use `transition` for smooth changes
- Use at least 3 different properties
- Use at least 2 different timing functions

### I. Performance Considerations

While animations are visually appealing, they can impact performance if not used carefully.

**Best Practices:**

| Practice | Why |
|----------|-----|
| Animate `transform` and `opacity` | These properties are GPU-accelerated |
| Use `will-change` sparingly | Hint for browser optimization |
| Limit animation duration | Keep animations short (0.3s-0.8s) |
| Use `requestAnimationFrame` for JS animations | Smoother than `setInterval` |
| Test on low-end devices | Ensure performance is acceptable |
| Respect `prefers-reduced-motion` | Accessibility for users with motion sensitivity |

**Accessibility: Reduced Motion**

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### J. Homework Prompt

**Challenge: Animated Portfolio Page**

Create a portfolio page that includes:
- Animated entrance for elements (slide-up or fade-in)
- Hover effects on cards (scale, shadow, icon rotation)
- An interactive button with a transition
- A loading spinner or animated element

**Requirements:**
- Use at least 3 different `transition` properties
- Use at least 2 different `transform` functions
- Use at least 1 `@keyframes` animation
- Include `prefers-reduced-motion` support
- Comment your CSS explaining each animation choice

**Git Workflow:**
- Branch name: `css-animations-portfolio`
- Include `index.html`, `styles.css`, and `README.md`

### K. Session Summary

| Concept | Key Idea |
|---------|----------|
| `transition` | Smooth changes between states |
| `transition-property` | Which property to animate |
| `transition-duration` | How long the transition takes |
| `transition-timing-function` | Speed curve of the transition |
| `transform: translate()` | Moves an element |
| `transform: scale()` | Changes size |
| `transform: rotate()` | Rotates an element |
| `@keyframes` | Defines complex animations |
| `animation` | Applies keyframe animation |
| `animation-iteration-count: infinite` | Repeats animation forever |
| `prefers-reduced-motion` | Accessibility preference |

### L. Reflection Questions

1. What is the difference between a transition and a keyframe animation?
2. Why is it better to animate `transform` and `opacity` rather than `margin` or `left`?
3. How can animations improve user experience?
4. When might animations hurt user experience?
5. Why should you consider `prefers-reduced-motion` in your designs?

### M. Resources for Further Study

- [MDN: CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions)
- [MDN: CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transforms)
- [MDN: CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [CSS Tricks: A Guide to CSS Animation](https://css-tricks.com/css-animation/)
- [Animista](https://animista.net/) — CSS animation playground
- [Cubic Bezier Generator](https://cubic-bezier.com/) — Custom timing functions

---
