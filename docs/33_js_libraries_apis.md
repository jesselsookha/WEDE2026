# Modern Libraries and Frameworks

You have now built a solid foundation in JavaScript — variables, functions, conditionals, loops, DOM manipulation, events, and form validation. But JavaScript is not just a language you write from scratch. It is also an **ecosystem** of tools, libraries, and frameworks that help developers build faster, cleaner, and more scalable applications.

This session explores the evolution of JavaScript libraries, introduces modern tools like React, GSAP, and Chart.js, and helps you understand why and when to use them.

---

## Session 9A: Modern Libraries and Frameworks

### A. Learning Outcome

Understand the evolution of JavaScript libraries, explore modern tools and frameworks, and recognise when to use them in your projects.

### B. The Evolution of JavaScript

**The Early Days (1995-2005)**

JavaScript was created in 1995 to add simple interactivity to web pages. In its early years, it was used for basic tasks like form validation, image rollovers, and simple animations. Writing JavaScript was often messy and inconsistent across browsers.

**The jQuery Era (2006-2015)**

jQuery was released in 2006 and revolutionised JavaScript development. It solved many of the problems developers faced:

| Problem | jQuery Solution |
|---------|-----------------|
| Browser inconsistencies | Cross-browser compatibility built in |
| Verbose DOM manipulation | Simple `$()` syntax |
| Complex animations | `.fadeIn()`, `.slideToggle()` |
| AJAX requests | `.ajax()` method |

jQuery became the most popular JavaScript library in the world, used by millions of websites.

**Why jQuery Faded**

As browsers evolved and JavaScript improved, many of jQuery's features became native:

| jQuery | Modern JavaScript |
|--------|-------------------|
| `$("#id")` | `document.querySelector("#id")` |
| `$.ajax()` | `fetch()` |
| `.fadeIn()` | CSS transitions |
| `.addClass()` | `classList.add()` |

Today, jQuery is still used in older projects, but modern development favours **native JavaScript** and **modern frameworks**.

### C. What Are Libraries and Frameworks?

**Library:** A collection of pre-written code that helps you perform common tasks. You call the library when you need it.

**Framework:** A structured environment that dictates how you build your application. The framework calls your code.

| Aspect | Library | Framework |
|--------|---------|-----------|
| **Control** | You control the flow | The framework controls the flow |
| **Scope** | Focused on specific tasks | Provides a complete structure |
| **Flexibility** | More flexible | More opinionated |
| **Learning Curve** | Lower | Higher |
| **Examples** | jQuery, GSAP, Axios, Chart.js | React, Angular, Vue, Svelte |

### D. Modern Libraries: What Developers Use Today

**1. React — Component-Based UI**

React is a library for building user interfaces using **components**. It was developed by Facebook and is now one of the most popular tools in web development.

**Key Concepts:**

- **Components** — Reusable building blocks
- **State** — Data that changes over time
- **Props** — Data passed between components
- **Virtual DOM** — Efficient updates

**Example: React Component**

```jsx
// React component (JSX syntax)
function Counter() {
  const [count, setCount] = useState(0);  // State

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

**How It Differs from Vanilla JavaScript:**

- React manages the DOM for you — no `document.getElementById()`.
- State changes automatically re-render the component.
- Code is more predictable and easier to scale.

**Setting Up React:**

```bash
npx create-react-app my-app
cd my-app
npm start
```

**When to Use React:**

- Building complex, interactive user interfaces
- Large-scale applications
- Projects with multiple developers
- When you need efficient state management

---

**2. GSAP — High-Performance Animations**

GSAP (GreenSock Animation Platform) is a library for creating smooth, complex animations. It is known for its performance and precision.

**Key Concepts:**

- **Tweens** — Individual animations
- **Timelines** — Sequences of animations
- **Easing** — Speed curves for animations

**Example: Native JavaScript vs GSAP**

**Native JavaScript:**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    #box {
      width: 50px;
      height: 50px;
      background: teal;
      position: relative;
      left: 0;
    }
  </style>
</head>
<body>
  <div id="box"></div>
  <button onclick="moveBox()">Move</button>

  <script>
    function moveBox() {
      let position = 0;
      const box = document.getElementById("box");
      const interval = setInterval(() => {
        if (position >= 300) clearInterval(interval);
        position += 2;
        box.style.left = position + "px";
      }, 10);
    }
  </script>
</body>
</html>
```

**GSAP Version:**

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Load GSAP from CDN -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
  <style>
    #box {
      width: 50px;
      height: 50px;
      background: teal;
      position: relative;
    }
  </style>
</head>
<body>
  <div id="box"></div>
  <button onclick="moveBox()">Move</button>

  <script>
    function moveBox() {
      // One line of GSAP code
      gsap.to("#box", { duration: 1.5, x: 300, rotation: 360 });
    }
  </script>
</body>
</html>
```

**Key Differences:**

| Aspect | Native JavaScript | GSAP |
|--------|-------------------|------|
| **Code Length** | Longer | Shorter |
| **Complexity** | Manual timing | Automatic |
| **Chaining** | Difficult | Easy |
| **Performance** | Manual optimisation | Optimised |

**When to Use GSAP:**

- Complex animations and transitions
- Scroll-triggered animations
- Interactive storytelling
- Games and visual effects

---

**3. Chart.js — Data Visualisation**

Chart.js is a library for creating charts using the HTML `<canvas>` element. It supports bar, line, pie, doughnut, radar, and more.

**Key Concepts:**

- **Data** — The values to display
- **Labels** — Names for each data point
- **Options** — Customisation (colours, tooltips, etc.)

**Example: Native Canvas vs Chart.js**

**Native Canvas (Manual Drawing):**

```html
<!DOCTYPE html>
<html>
<body>
  <canvas id="myCanvas" width="400" height="200"></canvas>

  <script>
    const ctx = document.getElementById("myCanvas").getContext("2d");

    // Bar 1
    ctx.fillStyle = "red";
    ctx.fillRect(10, 50, 50, 100);

    // Bar 2
    ctx.fillStyle = "blue";
    ctx.fillRect(70, 30, 50, 120);

    // Bar 3
    ctx.fillStyle = "green";
    ctx.fillRect(130, 70, 50, 80);

    // You must calculate positions, sizes, and colours manually
  </script>
</body>
</html>
```

**Chart.js Version:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <canvas id="myChart" width="400" height="200"></canvas>

  <script>
    const ctx = document.getElementById("myChart").getContext("2d");

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Green'],
        datasets: [{
          label: 'Votes',
          data: [12, 19, 3],
          backgroundColor: ['red', 'blue', 'green']
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  </script>
</body>
</html>
```

**Key Differences:**

| Aspect | Native Canvas | Chart.js |
|--------|---------------|----------|
| **Setup** | Complex calculations | Simple configuration |
| **Labels** | Manual | Automatic |
| **Responsive** | Manual | Built-in |
| **Tooltips** | Manual | Built-in |
| **Legend** | Manual | Built-in |

**When to Use Chart.js:**

- Dashboards and reports
- Data analysis tools
- Educational or scientific visualisations
- Any project that needs charts

### E. Other Libraries Worth Knowing

| Library | Purpose | Example Use Case |
|---------|---------|------------------|
| **Axios** | HTTP requests | Fetching data from APIs |
| **Lodash** | Utility functions | Working with arrays and objects |
| **Moment.js** | Date handling | Formatting and manipulating dates |
| **Three.js** | 3D graphics | 3D visualisations and games |
| **D3.js** | Data visualisation | Complex, custom charts |
| **Leaflet.js** | Maps | Interactive maps |

### F. Native JavaScript vs Libraries: When to Choose

| Scenario | Recommendation | Why |
|----------|----------------|-----|
| **Learning** | Native JavaScript | Understand the fundamentals |
| **Simple task** | Native JavaScript | No overhead |
| **Complex UI** | React / Framework | Better structure and maintainability |
| **Animations** | GSAP | Performance and ease of use |
| **Charts** | Chart.js | Quick, professional charts |
| **API calls** | Axios | Cleaner syntax than `fetch()` |

### G. In-Class Activity: Library Explorer

**Goal:** Explore a JavaScript library and identify its features.

**Task:**

1. Choose one of these libraries: React, GSAP, Chart.js, or Axios.
2. Visit the library's official documentation.
3. Find answers to these questions:
   - What problem does this library solve?
   - What is the basic syntax or setup?
   - What is one feature you find interesting?
   - When would you use this library?

4. Share your findings with a partner.

**Example: Chart.js Exploration**

```
Library: Chart.js
Problem: Creating charts without complex canvas code
Basic Setup:
  - Include the CDN script
  - Add a <canvas> element with an ID
  - Use new Chart(ctx, { type, data, options })
Interesting Feature: Tooltips and legends are automatic
When to use: Dashboards, reports, data visualisation
```

### H. Extra Activity: Library Research Reflection

**Let's think about how libraries fit into your development journey.**

**Reflection Prompts:**

1. What problem does React solve that vanilla JavaScript doesn't?
2. Why might a developer choose GSAP over CSS animations?
3. How does Chart.js make data visualisation more accessible?
4. When would you choose to use a library instead of writing native JavaScript?

### I. Session Summary

| Concept | Key Idea |
|---------|----------|
| Library | Collection of pre-written code |
| Framework | Structured environment for applications |
| jQuery | Popular library that faded as JavaScript evolved |
| React | Component-based UI library |
| GSAP | High-performance animation library |
| Chart.js | Data visualisation library |
| Axios | HTTP request library |
| Native JS | Often sufficient for simple tasks |

---

## Reflection Questions

1. What is the difference between a library and a framework?
2. Why did jQuery's popularity decline?
3. What problem does React solve in modern web development?
4. When would you use GSAP instead of CSS animations?
5. How does Chart.js make data visualisation easier than native canvas?
6. Why is it important to learn native JavaScript before using libraries?
7. What criteria would you use to choose a library for a project?

---

## Resources for Further Study

- [React Documentation](https://react.dev/)
- [GSAP Documentation](https://greensock.com/docs/)
- [Chart.js Documentation](https://www.chartjs.org/docs/)
- [Axios Documentation](https://axios-http.com/docs/intro)
- [jQuery History and Evolution](https://jquery.com/)

---
