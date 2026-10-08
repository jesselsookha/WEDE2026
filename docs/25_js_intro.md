# Introduction to JavaScript

You have learned how to structure content with HTML and style it with CSS. But a webpage built with HTML and CSS alone, while functional and attractive, remains static — it displays information but does not respond to the user. This is where JavaScript enters the picture.

JavaScript is the programming language that adds **behaviour** and **interactivity** to web pages. It allows you to respond to clicks, validate forms, update content dynamically, and create rich, engaging user experiences.

This document introduces JavaScript: what it is, what it can do, and how it fits into the web development ecosystem.

---

## Session 1: What Is JavaScript and What Can It Do?

### A. Learning Outcome

Understand what JavaScript is, its role in web development, and how it transforms static pages into interactive experiences.

### B. What Is JavaScript?

JavaScript is a programming language that runs in the browser. It allows you to:

- Respond to user actions (clicks, typing, scrolling)
- Change content and styles dynamically
- Communicate with servers to send and receive data
- Create animations and visual effects
- Build games, applications, and interactive tools

**The Three Layers of Web Development:**

Think of a webpage as a human body:

| Layer | Analogy | Role |
|-------|---------|------|
| **HTML** | Skeleton | Structure — headings, paragraphs, images, links |
| **CSS** | Skin | Presentation — colours, fonts, layout, spacing |
| **JavaScript** | Nervous System | Behaviour — responding to stimuli, controlling actions |

Just as a skeleton without a nervous system cannot move or react, an HTML page without JavaScript cannot respond to user input.

### C. Common Use Cases for JavaScript

JavaScript is used in almost every modern website to enhance user experience. Here are some common use cases:

**1. Form Validation**

Before a user submits a form, JavaScript can check that all fields are filled correctly — for example, ensuring an email address contains `@` and a valid domain.

**2. Dynamic Content**

JavaScript can load new content without refreshing the page. This is used in infinite scroll (e.g., social media feeds), live search results, and single-page applications.

**3. Interactive UI Elements**

Dropdown menus, modal boxes, tabs, accordions, and sliders are all powered by JavaScript. They allow users to navigate and interact with content intuitively.

**4. Animations and Effects**

JavaScript can create smooth transitions, fade-ins, slide effects, and complex animations that enhance the visual experience.

**5. Games and Simulations**

JavaScript can handle real-time logic, user input, and rendering to create interactive games, quizzes, and simulations.

**6. Data Handling and APIs**

JavaScript can fetch data from external sources (APIs) and display it on the page — for example, showing live weather, news headlines, or currency exchange rates.

### D. Client-Side vs Server-Side JavaScript

JavaScript can run in two different environments:

**Client-Side JavaScript (Browser):**

- Runs in the user's browser
- Directly interacts with the DOM (the structure of the webpage)
- Responds to user actions in real time
- Fast and responsive
- Cannot access sensitive data (like databases) directly

**Server-Side JavaScript (Node.js):**

- Runs on a server
- Handles requests from the browser
- Can access databases, file systems, and other server resources
- Used to build APIs, handle authentication, and process data

**Example:**

A login form uses **client-side JavaScript** to validate that both fields are filled. The data is then sent to a server running **server-side JavaScript** (Node.js), which checks the credentials in a database and responds with a success or error message.

### E. Static vs Interactive: A Visual Comparison

To understand the power of JavaScript, consider the difference between a static page and an interactive page.

**Static HTML Page (No JavaScript):**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Static Page</title>
</head>
<body>
  <h2>Image Gallery</h2>
  <img src="image1.jpg" width="200">
  <img src="image2.jpg" width="200">
</body>
</html>
```

**Explanation:**

- This page displays two images.
- There is no interaction — the images are simply there.
- The user cannot click, zoom, or interact with the images.

**Interactive Page with JavaScript:**

```html
<!DOCTYPE html>
<html>
<head>
  <title>Interactive Gallery</title>
  <style>
    /* Style for the modal box */
    .modal {
      display: none;          /* Hidden by default */
      position: fixed;
      top: 20%;
      left: 30%;
      background: white;
      padding: 20px;
      border: 2px solid #333;
      z-index: 1000;
    }
  </style>
</head>
<body>
  <h2>Click an image to enlarge</h2>

  <!-- Images with click events -->
  <img src="image1.jpg" width="200" onclick="showModal('image1.jpg')">
  <img src="image2.jpg" width="200" onclick="showModal('image2.jpg')">

  <!-- Modal box to display enlarged image -->
  <div id="modal" class="modal">
    <img id="modalImg" src="" width="400">
    <button onclick="hideModal()">Close</button>
  </div>

  <script>
    // Function to show the modal with selected image
    function showModal(src) {
      document.getElementById("modalImg").src = src;
      document.getElementById("modal").style.display = "block";
    }

    // Function to hide the modal
    function hideModal() {
      document.getElementById("modal").style.display = "none";
    }
  </script>
</body>
</html>
```

**Explanation:**

- Clicking an image opens a modal box displaying the enlarged version.
- JavaScript responds to the click event (`onclick`).
- The `showModal` function dynamically changes the image source and displays the modal.
- The `hideModal` function closes the modal.

**Key JavaScript Concepts Introduced:**

| Concept | Example |
|---------|---------|
| Event Handling | `onclick="showModal('image1.jpg')"` |
| DOM Manipulation | `document.getElementById("modalImg").src = src;` |
| Conditional Styling | `modal.style.display = "block";` |

### F. In-Class Activity: Feature Hunt

**Goal:** Brainstorm interactive features you would like to add to a personal website using JavaScript.

**Examples:**

- Dark mode toggle that switches the background colour
- Live clock that updates every second
- Collapsible FAQ section that expands when clicked
- Image carousel or slideshow
- Weather widget showing current conditions

**Discussion Prompts:**

- "Which of these features would you find most useful on your own site?"
- "What user problem does each feature solve?"

### G. Extra Activity: Revealing a Message with Interaction

**How does interactivity change the way we experience a website?** Let's explore this idea by building a simple message box that appears when a button is clicked.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    #message {
      padding: 10px;
      background-color: lightblue;
      display: none;          /* Hidden by default */
    }
  </style>
</head>
<body>
  <button onclick="showMessage()">Click to Reveal Message</button>
  <div id="message">Interactivity makes websites feel alive and responsive!</div>

  <script>
    function showMessage() {
      document.getElementById("message").style.display = "block";
    }
  </script>
</body>
</html>
```

**Explanation:**

- The button uses `onclick` to trigger the `showMessage` function.
- The function accesses the message element using `document.getElementById`.
- It changes the `display` property from `none` (hidden) to `block` (visible).

**Reflection:** Interactivity improves engagement and gives users control over their experience.

### H. Extra Activity: Logging Interactive Features

**Think about the websites or apps you use every day. What interactive features make them useful or enjoyable?** Let's build a simple logger to record your observations.

```html
<!DOCTYPE html>
<html>
<body>
  <h2>My Favourite Interactive Features</h2>
  <input type="text" id="site" placeholder="Website or App Name">
  <input type="text" id="feature" placeholder="Interactive Feature">
  <button onclick="logFeature()">Add Feature</button>
  <ul id="featureList"></ul>

  <script>
    function logFeature() {
      const site = document.getElementById("site").value.trim();
      const feature = document.getElementById("feature").value.trim();

      if (site && feature) {
        const listItem = document.createElement("li");
        listItem.innerText = `${site}: ${feature}`;
        document.getElementById("featureList").appendChild(listItem);
      }
    }
  </script>
</body>
</html>
```

**Explanation:**

- This activity uses DOM creation (`createElement`) and event handling.
- It builds a dynamic list of features the user observes in real-world websites.
- Students can revisit this example when brainstorming features for their own projects.

### I. Session Summary

| Concept | Key Idea |
|---------|----------|
| JavaScript | Programming language for web interactivity |
| Three Layers | HTML (structure) + CSS (style) + JS (behaviour) |
| Client-Side | Runs in the browser |
| Server-Side | Runs on a server (Node.js) |
| Event Handling | Responding to user actions |
| DOM Manipulation | Changing content and styles dynamically |

---

## Session 2: Where JavaScript Lives in Web Development

### A. Learning Outcome

Understand the three methods of embedding JavaScript, know when to use each, and understand the importance of script placement for performance and functionality.

### B. How JavaScript Is Embedded

JavaScript can be added to a webpage in three ways:

| Method | Location | Best For |
|--------|----------|----------|
| **Inline** | Inside an HTML tag (`onclick`) | Quick demos, single-element exceptions |
| **Internal** | Inside `<script>` tags in the HTML file | Small projects, single-page demos |
| **External** | In a separate `.js` file linked with `<script src="">` | Professional projects, reusability, performance |

### C. Method 1: Inline JavaScript

Inline JavaScript is written directly inside an HTML element using attributes like `onclick`, `onmouseover`, or `onchange`.

```html
<button onclick="alert('Inline script triggered!')">Click Me</button>
```

**Pros:**

- Quick and easy to write
- Useful for simple demos

**Cons:**

- Mixes behaviour with structure (poor separation of concerns)
- Difficult to maintain
- Cannot be reused across elements or pages

**When to Use:**

- Quick testing or debugging
- Very simple interactions in demos

**When NOT to Use:**

- Production websites
- Anything more than a single action

### D. Method 2: Internal JavaScript

Internal JavaScript is placed inside `<script>` tags within the HTML file, typically in the `<head>` or at the end of the `<body>`.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Internal JavaScript</title>
  <script>
    function greet() {
      alert("Hello from internal script!");
    }
  </script>
</head>
<body>
  <button onclick="greet()">Greet</button>
</body>
</html>
```

**Pros:**

- All code in one file
- Useful for small projects and demos

**Cons:**

- Styles are not reusable across multiple pages
- Can make the HTML file large and cluttered

**When to Use:**

- Single-page websites
- Prototyping and testing

**When NOT to Use:**

- Multi-page projects
- Production websites with complex logic

### E. Method 3: External JavaScript

External JavaScript is stored in a separate `.js` file and linked to the HTML document using the `<script src="">` tag.

**HTML File (`index.html`):**

```html
<!DOCTYPE html>
<html>
<head>
  <title>External JavaScript</title>
  <script src="external.js" defer></script>
</head>
<body>
  <button onclick="externalGreet()">External Greet</button>
</body>
</html>
```

**External File (`external.js`):**

```js
function externalGreet() {
  alert("Hello from external file!");
}
```

**Pros:**

- Separation of concerns (HTML = structure, JS = behaviour)
- Reusable across multiple pages
- Cached by browsers for better performance
- Cleaner and more maintainable

**Cons:**

- Requires an extra HTTP request (mitigated by caching)
- Slightly more setup

**When to Use:**

- Professional websites
- Multi-page projects
- Any project where code reuse and maintainability matter

**Best Practice:**

External JavaScript is the **recommended approach** for all production websites.

### F. Script Placement: Where to Put Your Scripts

One of the most important decisions you'll make is **where to place your JavaScript code**. This affects page load time, performance, and whether your code runs correctly.

**Option 1: Scripts in the `<head>`**

```html
<head>
  <script>
    // This code runs before the page content is rendered
    console.log("This runs before the page content is loaded.");
  </script>
</head>
```

**Why Place JS in the `<head>`?**

- Early execution — runs before the page renders
- Useful for configuration, global variables, or critical setup

**The Problem:**

- Scripts in the `<head>` **block page rendering** until they are downloaded and executed.
- This can cause a visible delay in page loading.

**Option 2: Scripts at the End of the `<body>`**

```html
<body>
  <div>Content</div>
  <button id="myButton">Click me!</button>

  <script>
    // This code runs after the DOM is fully loaded
    document.getElementById("myButton").addEventListener("click", function() {
      alert("Button clicked!");
    });
  </script>
</body>
```

**Why Place JS at the End of `<body>`?**

- The page content loads first — users see something immediately.
- The DOM is fully loaded when the script runs — no errors from missing elements.
- Better performance and user experience.

**Option 3: Using the `defer` Attribute**

`defer` tells the browser to download the script in the background and execute it after the HTML is fully parsed.

```html
<head>
  <script src="scripts.js" defer></script>
</head>
```

**Benefits of `defer`:**

- Script runs after the DOM is ready
- Does not block page rendering
- Clean separation: scripts in `<head>`, but behaviour is delayed

**Option 4: Using the `async` Attribute**

`async` downloads the script in the background and executes it **as soon as it is ready** — regardless of whether the DOM is fully loaded.

```html
<head>
  <script src="scripts.js" async></script>
</head>
```

**When to Use `async`:**

- Scripts that do not depend on the DOM (e.g., analytics, ads)
- Independent scripts that can run at any time

### G. Script Placement: Comparison Table

| Placement | Runs | Blocks Rendering | DOM Ready? | Best For |
|-----------|------|------------------|------------|----------|
| `<head>` without defer | Immediately | ✅ Yes | ❌ No | Configuration, critical setup |
| `<head>` with defer | After DOM | ❌ No | ✅ Yes | Most scripts |
| `<head>` with async | When ready | ❌ No | ⚠️ Unpredictable | Independent scripts |
| End of `<body>` | After content | ❌ No | ✅ Yes | DOM-dependent scripts |

### H. Script Placement Lab

Let's see all three embedding methods in one HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- External script with defer -->
  <script src="external.js" defer></script>
</head>
<body>
  <!-- Inline JavaScript -->
  <button onclick="alert('Inline script triggered!')">Click Me</button>

  <!-- Internal JavaScript -->
  <script>
    function greet() {
      alert("Hello from internal script!");
    }
  </script>
  <button onclick="greet()">Greet</button>

  <!-- External JavaScript -->
  <button onclick="externalGreet()">External Greet</button>
</body>
</html>
```

**External File (`external.js`):**

```js
function externalGreet() {
  alert("Hello from external file!");
}
```

**Explanation:**

- Inline: Quick but messy — mixes behaviour with structure.
- Internal: Good for small scripts — all in one file.
- External: Clean, scalable, and reusable — the professional approach.

### I. Common Mistake: Script in `<head>` Without `defer`

```html
<head>
  <script>
    // ❌ This will fail because the DOM isn't ready yet
    document.getElementById("demo").innerText = "Changed!";
  </script>
</head>
<body>
  <p id="demo">Original Text</p>
</body>
</html>
```

**Why It Fails:**

- The script runs before the `<p>` element is loaded.
- `document.getElementById("demo")` returns `null`.
- An error occurs, and the script stops.

**How to Fix:**

| Fix | Explanation |
|-----|-------------|
| Move script to end of `<body>` | Runs after DOM is ready |
| Add `defer` to script in `<head>` | Runs after DOM is ready |

### J. Extra Activity: Page Load Alert

**Let's test how internal scripts behave when placed in the `<head>`. Can you create a script that shows a message as soon as the page opens?**

```html
<!DOCTYPE html>
<html>
<head>
  <script>
    // This script runs immediately when the page loads
    alert("Welcome! The page has loaded.");
  </script>
</head>
<body>
  <h2>Page Load Example</h2>
</body>
</html>
```

**Explanation:**

- This demonstrates how scripts in the `<head>` execute before the body is rendered.
- For DOM manipulation, consider placing scripts at the end of `<body>` or using `defer`.

### K. Extra Activity: External Script Interaction

**Can you create a webpage that uses an external script to change a heading when a button is clicked?**

**HTML File:**

```html
<!DOCTYPE html>
<html>
<head>
  <script src="changeHeading.js" defer></script>
</head>
<body>
  <h2 id="mainHeading">Original Heading</h2>
  <button onclick="updateHeading()">Change Heading</button>
</body>
</html>
```

**External JS File (`changeHeading.js`):**

```js
function updateHeading() {
  const heading = document.getElementById("mainHeading");
  heading.innerText = "Heading Updated!";
}
```

**Explanation:**

- This reinforces the use of external scripts and DOM access.
- Students can reuse this pattern in future projects.

### L. Session Summary

| Concept | Key Idea |
|---------|----------|
| Inline Script | Inside HTML tags — quick but messy |
| Internal Script | Inside `<script>` tags — good for single pages |
| External Script | Separate `.js` file — best practice |
| `defer` | Loads script after DOM is ready |
| `async` | Loads script as soon as ready |
| End of `<body>` | Ensures DOM is ready before script runs |
| `<head>` without defer | Runs early — may cause errors with DOM |

---

## Unit Summary

| Concept | Key Idea |
|---------|----------|
| JavaScript | The behaviour layer of web development |
| Three Embedding Methods | Inline, Internal, External |
| Best Practice | External JavaScript |
| Script Placement | End of `<body>` or use `defer` |
| `defer` | Runs after DOM is ready |
| `async` | Runs when ready (for independent scripts) |
| DOM | The bridge between HTML and JavaScript |

---

## Reflection Questions

1. What is the difference between client-side and server-side JavaScript?
2. Why is external JavaScript preferred over inline or internal?
3. What happens if you place a script in the `<head>` without `defer`?
4. Why is the DOM important for JavaScript to interact with HTML?
5. What is the difference between `defer` and `async`?

---
