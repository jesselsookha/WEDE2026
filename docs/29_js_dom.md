# DOM Basics — Connecting JavaScript to HTML

You have learned how to write JavaScript syntax, create variables, use functions, and build logic with conditionals and loops. But how does JavaScript actually interact with the HTML page?

The answer is the **DOM** — the Document Object Model. The DOM is the bridge between your JavaScript code and the HTML elements on the page. It allows you to access, modify, add, and remove elements dynamically.

This session introduces the DOM, explains how to access elements, and demonstrates how to manipulate content, styles, and structure.

---

## Session 4: DOM Basics — Access and Manipulation

### A. Learning Outcome

Understand the Document Object Model, use DOM access methods to locate elements, and manipulate content, styles, and structure dynamically.

### B. What Is the DOM?

The **Document Object Model (DOM)** is a structured representation of your webpage. When a browser loads an HTML document, it builds a **tree-like model** of all the elements on the page. This model allows JavaScript to interact with the page: reading content, changing styles, responding to clicks, and more.

**Think of the DOM as a live blueprint of your webpage.** Every HTML tag becomes a **node** in this blueprint, and JavaScript can access, modify, or remove these nodes at any time.

**Visualising the DOM Tree:**

```
Document
└── html
    ├── head
    │   ├── title
    │   └── meta
    └── body
        ├── header
        │   └── h1
        ├── main
        │   ├── section
        │   │   ├── h2
        │   │   └── p
        │   └── section
        │       ├── h2
        │       └── ul
        │           ├── li
        │           ├── li
        │           └── li
        └── footer
            └── p
```

**Key Terms:**

| Term | Definition |
|------|------------|
| **DOM** | Document Object Model — a tree structure representing HTML elements |
| **Node** | An individual item in the DOM tree (e.g., a tag, text, or comment) |
| **Element** | A specific HTML tag represented in the DOM |
| **Parent** | An element that contains another element |
| **Child** | An element contained within another element |
| **Sibling** | Elements at the same level in the tree |

### C. Accessing Elements in the DOM

JavaScript provides several methods to locate elements in the DOM.

**1. `getElementById()`**

Accesses an element by its unique `id` attribute.

```js
const heading = document.getElementById("mainHeading");
```

**HTML:**

```html
<h1 id="mainHeading">Welcome to My Page</h1>
```

**2. `querySelector()`**

Accesses the first element that matches a CSS selector.

```js
const heading = document.querySelector("#mainHeading");
const paragraph = document.querySelector(".intro");
const firstButton = document.querySelector("button");
```

**3. `querySelectorAll()`**

Returns a NodeList (array-like list) of all elements that match a CSS selector.

```js
const allParagraphs = document.querySelectorAll("p");
const allButtons = document.querySelectorAll(".btn");
const allItems = document.querySelectorAll("ul li");
```

**4. `getElementsByClassName()`**

Returns a collection of elements with a specific class name.

```js
const highlights = document.getElementsByClassName("highlight");
```

**5. `getElementsByTagName()`**

Returns a collection of elements with a specific tag name.

```js
const allImages = document.getElementsByTagName("img");
```

**Comparison: Which Method to Use?**

| Method | Use Case | Returns |
|--------|----------|---------|
| `getElementById` | Single element with unique ID | Single element |
| `querySelector` | First matching CSS selector | Single element |
| `querySelectorAll` | All matching CSS selectors | NodeList |
| `getElementsByClassName` | Elements with a class | HTMLCollection |
| `getElementsByTagName` | Elements with a tag | HTMLCollection |

**Best Practice:** Use `querySelector` and `querySelectorAll` for most cases — they are flexible and consistent.

### D. Manipulating Content

Once you have accessed an element, you can change its content.

**1. `innerText`**

Changes or retrieves the visible text of an element.

```js
const heading = document.getElementById("mainHeading");
heading.innerText = "New Heading Text";
```

**2. `innerHTML`**

Changes or retrieves the HTML content of an element (including tags).

```js
const container = document.getElementById("content");
container.innerHTML = "<strong>Bold text</strong> and <em>italic text</em>";
```

**3. `textContent`**

Similar to `innerText`, but includes all text regardless of visibility.

```js
const heading = document.getElementById("mainHeading");
const text = heading.textContent;   // Gets all text, including hidden
```

**Comparison:**

| Property | What It Gets | What It Sets | Use Case |
|----------|--------------|--------------|----------|
| `innerText` | Visible text | Plain text | Updating text content |
| `innerHTML` | HTML content | HTML string | Inserting HTML elements |
| `textContent` | All text (including hidden) | Plain text | Reading all text |

### E. Manipulating Styles

**1. Inline Styles (`style`)**

Changes the inline style of an element.

```js
const heading = document.getElementById("mainHeading");
heading.style.color = "blue";
heading.style.fontSize = "2rem";
heading.style.backgroundColor = "#f0f0f0";
```

**2. CSS Classes (`classList`)**

Adds, removes, or toggles CSS classes.

```js
const element = document.getElementById("myElement");

// Add a class
element.classList.add("highlight");

// Remove a class
element.classList.remove("highlight");

// Toggle a class (add if missing, remove if present)
element.classList.toggle("active");

// Check if a class exists
const hasHighlight = element.classList.contains("highlight");
```

**Example: Styling with Classes**

```css
.highlight {
  color: white;
  background-color: teal;
  padding: 10px;
  border-radius: 8px;
}
```

```js
const heading = document.getElementById("mainHeading");
heading.classList.add("highlight");
```

### F. Creating and Removing Elements

**1. Creating Elements**

Use `createElement()` to create a new element and `appendChild()` to add it to the DOM.

```js
// Create a new paragraph
const newParagraph = document.createElement("p");
newParagraph.innerText = "This is a new paragraph.";

// Add it to the page
const container = document.getElementById("content");
container.appendChild(newParagraph);
```

**2. Removing Elements**

Use `remove()` to remove an element from the DOM.

```js
const element = document.getElementById("oldElement");
element.remove();
```

**3. Inserting Elements**

```js
// Create new element
const newItem = document.createElement("li");
newItem.innerText = "New Item";

// Insert before an existing element
const reference = document.getElementById("reference");
const parent = reference.parentNode;
parent.insertBefore(newItem, reference);

// Insert after an existing element (using after)
reference.after(newItem);
```

### G. In-Class Activity: DOM Lab — Change Text and Style

Let's build a simple webpage that changes a heading's text and style when a button is clicked.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* CSS class to highlight the heading */
    .highlight {
      color: white;
      background-color: teal;
      padding: 10px;
      border-radius: 8px;
    }

    .container {
      text-align: center;
      padding: 40px;
      font-family: sans-serif;
    }

    button {
      padding: 10px 20px;
      font-size: 1rem;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }

    button:hover {
      background-color: #2980b9;
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Heading with an ID -->
    <h2 id="title">Welcome to My Page</h2>

    <!-- Button that triggers the change -->
    <button onclick="changeContent()">Click Me</button>
  </div>

  <script>
    // Function that changes the heading text and style
    function changeContent() {
      // Access the heading using its ID
      const heading = document.getElementById("title");

      // Change the text content
      heading.innerText = "You clicked the button!";

      // Add the CSS class for styling
      heading.classList.add("highlight");
    }
  </script>
</body>
</html>
```

**Explanation:**

- `document.getElementById("title")` accesses the heading element.
- `innerText` updates the visible text.
- `classList.add("highlight")` applies the CSS class.

### H. In-Class Activity: DOM Explorer

Let's build a mini DOM explorer that reveals information about an element.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: sans-serif;
      padding: 40px;
    }
    .card {
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 8px;
      max-width: 400px;
      margin: 20px 0;
    }
    button {
      padding: 10px 20px;
      background-color: #2ecc71;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <h2 id="heading">DOM Explorer</h2>

  <div class="card" id="infoCard">
    <p id="description">This is a sample element.</p>
    <p>Tag: <span id="tagDisplay"></span></p>
    <p>ID: <span id="idDisplay"></span></p>
    <p>Class: <span id="classDisplay"></span></p>
  </div>

  <button onclick="explore()">Reveal Element Info</button>

  <script>
    function explore() {
      // Get the heading element
      const heading = document.getElementById("heading");
      const card = document.getElementById("infoCard");
      const description = document.getElementById("description");

      // Display element information
      document.getElementById("tagDisplay").innerText = heading.tagName;
      document.getElementById("idDisplay").innerText = heading.id;

      // Get class names
      const classes = card.className || "No classes";
      document.getElementById("classDisplay").innerText = classes;

      // Change the description
      description.innerText = `This is a <${heading.tagName.toLowerCase()}> tag with ID "${heading.id}".`;
    }
  </script>
</body>
</html>
```

**Explanation:**

- `tagName` returns the HTML tag of the element.
- `id` returns the ID attribute.
- `className` returns the class attribute.

### I. Extra Activity: Paragraph Styler

**Can you create a webpage with a button that changes a paragraph's text and colour when clicked? Let's build it.**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .styled {
      color: darkred;
      font-weight: bold;
      font-size: 1.2rem;
      background-color: #fef9e7;
      padding: 15px;
      border-left: 4px solid darkred;
    }

    button {
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      margin: 10px 0;
    }

    button:hover {
      background-color: #2980b9;
    }
  </style>
</head>
<body>
  <p id="info">This is a normal paragraph. Click the button to style it!</p>
  <button onclick="styleParagraph()">Style Me</button>

  <script>
    function styleParagraph() {
      // Access the paragraph
      const para = document.getElementById("info");

      // Change text and style
      para.innerText = "This paragraph has been styled!";
      para.classList.add("styled");
    }
  </script>
</body>
</html>
```

**Explanation:**

- This reinforces DOM access and styling.
- `classList.add("styled")` applies multiple styles from a CSS class.

### J. Extra Activity: Dynamic List Builder

**Let's build a dynamic list that adds items when a button is clicked.**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: sans-serif;
      padding: 40px;
    }

    input {
      padding: 8px;
      margin-right: 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }

    button {
      padding: 8px 16px;
      background-color: #2ecc71;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #27ae60;
    }

    ul {
      margin-top: 20px;
      list-style: none;
      padding: 0;
    }

    li {
      padding: 10px;
      background-color: #f8f9fa;
      margin: 5px 0;
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .delete-btn {
      background-color: #e74c3c;
      color: white;
      border: none;
      border-radius: 4px;
      padding: 4px 12px;
      cursor: pointer;
    }

    .delete-btn:hover {
      background-color: #c0392b;
    }
  </style>
</head>
<body>
  <h2>Dynamic List Builder</h2>
  <input type="text" id="itemInput" placeholder="Enter an item...">
  <button onclick="addItem()">Add Item</button>

  <ul id="itemList"></ul>

  <script>
    function addItem() {
      // Get the input value
      const input = document.getElementById("itemInput");
      const itemText = input.value.trim();

      // Don't add empty items
      if (itemText === "") {
        alert("Please enter an item.");
        return;
      }

      // Create new list item
      const listItem = document.createElement("li");

      // Create text span
      const textSpan = document.createElement("span");
      textSpan.innerText = itemText;

      // Create delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.classList.add("delete-btn");
      deleteBtn.onclick = function() {
        listItem.remove();
      };

      // Add elements to list item
      listItem.appendChild(textSpan);
      listItem.appendChild(deleteBtn);

      // Add list item to the list
      document.getElementById("itemList").appendChild(listItem);

      // Clear the input
      input.value = "";
      input.focus();
    }

    // Allow pressing Enter to add item
    document.getElementById("itemInput").addEventListener("keydown", function(e) {
      if (e.key === "Enter") {
        addItem();
      }
    });
  </script>
</body>
</html>
```

**Explanation:**

- `createElement()` creates new DOM elements.
- `appendChild()` adds elements to the DOM.
- `remove()` deletes elements from the DOM.
- Event listener allows Enter key to trigger the function.

### K. Extra Activity: DOM Manipulation Challenge

**Let's build a page that demonstrates multiple DOM manipulation techniques.**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: sans-serif;
      padding: 40px;
      max-width: 600px;
      margin: 0 auto;
    }

    .card {
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 8px;
      margin: 10px 0;
      transition: all 0.3s ease;
    }

    .highlight-card {
      background-color: #fef9e7;
      border-color: #f39c12;
      box-shadow: 0 4px 12px rgba(243, 156, 18, 0.2);
    }

    .hidden {
      display: none;
    }

    button {
      padding: 8px 16px;
      margin: 5px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #2980b9;
    }

    .btn-success {
      background-color: #2ecc71;
    }

    .btn-success:hover {
      background-color: #27ae60;
    }

    .btn-danger {
      background-color: #e74c3c;
    }

    .btn-danger:hover {
      background-color: #c0392b;
    }

    .btn-warning {
      background-color: #f39c12;
    }

    .btn-warning:hover {
      background-color: #e67e22;
    }

    .counter {
      font-size: 2rem;
      font-weight: bold;
      color: #2d3436;
    }
  </style>
</head>
<body>
  <h2>DOM Manipulation Challenge</h2>

  <!-- Card 1: Text and Style -->
  <div class="card" id="demoCard">
    <p id="demoText">This text can be changed.</p>
    <button onclick="changeText()">Change Text</button>
    <button onclick="toggleHighlight()" class="btn-warning">Toggle Highlight</button>
    <button onclick="resetCard()" class="btn-danger">Reset</button>
  </div>

  <!-- Card 2: Counter -->
  <div class="card">
    <p>Counter: <span id="counterDisplay" class="counter">0</span></p>
    <button onclick="incrementCounter()" class="btn-success">+1</button>
    <button onclick="decrementCounter()" class="btn-danger">-1</button>
    <button onclick="resetCounter()" class="btn-warning">Reset</button>
  </div>

  <!-- Card 3: Dynamic Elements -->
  <div class="card">
    <p>Dynamic Elements</p>
    <button onclick="addElement()" class="btn-success">Add Element</button>
    <button onclick="clearElements()" class="btn-danger">Clear All</button>
    <div id="dynamicContainer"></div>
  </div>

  <script>
    // ============================================
    // Card 1: Text and Style
    // ============================================

    function changeText() {
      const text = document.getElementById("demoText");
      const messages = [
        "You clicked the button!",
        "This text is dynamic!",
        "JavaScript is powerful!",
        "DOM manipulation is fun!",
        "Keep exploring!"
      ];
      const randomIndex = Math.floor(Math.random() * messages.length);
      text.innerText = messages[randomIndex];
    }

    function toggleHighlight() {
      const card = document.getElementById("demoCard");
      card.classList.toggle("highlight-card");
    }

    function resetCard() {
      const card = document.getElementById("demoCard");
      const text = document.getElementById("demoText");
      card.classList.remove("highlight-card");
      text.innerText = "This text can be changed.";
    }

    // ============================================
    // Card 2: Counter
    // ============================================

    let counter = 0;

    function incrementCounter() {
      counter++;
      document.getElementById("counterDisplay").innerText = counter;
    }

    function decrementCounter() {
      if (counter > 0) {
        counter--;
        document.getElementById("counterDisplay").innerText = counter;
      }
    }

    function resetCounter() {
      counter = 0;
      document.getElementById("counterDisplay").innerText = counter;
    }

    // ============================================
    // Card 3: Dynamic Elements
    // ============================================

    let elementCount = 0;

    function addElement() {
      elementCount++;

      const container = document.getElementById("dynamicContainer");
      const newElement = document.createElement("div");
      newElement.className = "card";
      newElement.style.padding = "10px";
      newElement.style.margin = "5px 0";
      newElement.style.backgroundColor = "#f8f9fa";

      const text = document.createElement("span");
      text.innerText = `Element #${elementCount}`;

      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "×";
      deleteBtn.className = "btn-danger";
      deleteBtn.style.padding = "2px 8px";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.onclick = function() {
        newElement.remove();
      };

      newElement.appendChild(text);
      newElement.appendChild(deleteBtn);
      container.appendChild(newElement);
    }

    function clearElements() {
      const container = document.getElementById("dynamicContainer");
      container.innerHTML = "";
      elementCount = 0;
    }
  </script>
</body>
</html>
```

**Explanation:**

- This demonstrates a range of DOM manipulation techniques:
  - Accessing elements with `getElementById`
  - Changing text with `innerText`
  - Toggling classes with `classList.toggle`
  - Creating elements with `createElement`
  - Adding elements with `appendChild`
  - Removing elements with `remove`
  - Updating content with `innerHTML`

### L. Session Summary

| Concept | Key Idea |
|---------|----------|
| DOM | Tree-like representation of HTML |
| `getElementById()` | Access by unique ID |
| `querySelector()` | Access by CSS selector |
| `querySelectorAll()` | Access all matching elements |
| `innerText` | Get or set visible text |
| `innerHTML` | Get or set HTML content |
| `style` | Change inline styles |
| `classList.add()` | Add a CSS class |
| `classList.remove()` | Remove a CSS class |
| `classList.toggle()` | Add or remove a class |
| `createElement()` | Create a new element |
| `appendChild()` | Add an element to the DOM |
| `remove()` | Remove an element from the DOM |

---

## Reflection Questions

1. What is the DOM and why is it important for JavaScript?
2. What is the difference between `innerText` and `innerHTML`?
3. When would you use `querySelector` instead of `getElementById`?
4. What is the difference between `classList.add()` and setting `className`?
5. How do you create a new element and add it to the page?
6. Why is it important to understand the DOM tree structure?
7. What is the difference between `appendChild()` and `insertBefore()`?

---
