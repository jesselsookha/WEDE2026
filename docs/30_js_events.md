# Events and Feedback

You have learned how to access and manipulate the DOM. But a webpage doesn't just sit there — it responds to users. This is where **events** come in. Events are actions that users perform — clicking a button, typing in a field, hovering over an element, or submitting a form. JavaScript can **listen** for these events and **respond** with custom behaviour.

This session introduces event listeners, explains how to handle common events, and explores how to give users clear, accessible feedback.

---

## Session 6: Events and Feedback

### A. Learning Outcome

Use event listeners to respond to user actions, provide clear feedback, and build interactive web experiences.

### B. What Are Events?

An **event** is any action a user performs on a webpage. Events include:

| Event | Description |
|-------|-------------|
| `click` | User clicks an element |
| `mouseover` | Mouse hovers over an element |
| `mouseout` | Mouse leaves an element |
| `keydown` | User presses a key |
| `keyup` | User releases a key |
| `submit` | A form is submitted |
| `change` | Input value changes (e.g., dropdown, checkbox) |
| `input` | User types in a text field |
| `load` | Page finishes loading |
| `scroll` | User scrolls the page |

### C. Two Ways to Handle Events

**1. Inline Event Handling (HTML Attribute)**

This method uses HTML attributes like `onclick`, `onmouseover`, etc.

```html
<button onclick="alert('Clicked!')">Click Me</button>
```

**Pros:** Quick and easy for demos.
**Cons:** Mixes behaviour with structure (poor separation of concerns).

**2. Event Listeners (JavaScript)**

This method uses `addEventListener()` to attach behaviour to elements.

```js
const button = document.getElementById("myBtn");
button.addEventListener("click", function() {
  alert("Clicked!");
});
```

**Pros:** Separates behaviour from structure, allows multiple listeners.
**Cons:** Slightly more code.

**Best Practice:** Use `addEventListener()` for all production code.

### D. The `addEventListener()` Method

**Syntax:**

```js
element.addEventListener(eventType, callbackFunction);
```

**Example:**

```js
const button = document.getElementById("myBtn");

button.addEventListener("click", function() {
  console.log("Button clicked!");
});
```

**Using an Arrow Function:**

```js
button.addEventListener("click", () => {
  console.log("Button clicked!");
});
```

**Using a Named Function:**

```js
function handleClick() {
  console.log("Button clicked!");
}

button.addEventListener("click", handleClick);
```

**Removing an Event Listener:**

```js
button.removeEventListener("click", handleClick);
```

### E. Common Events in Detail

**1. Click Event**

```js
const button = document.getElementById("myBtn");

button.addEventListener("click", function() {
  alert("You clicked the button!");
});
```

**2. Mouseover and Mouseout**

```js
const element = document.getElementById("myElement");

element.addEventListener("mouseover", function() {
  this.style.backgroundColor = "yellow";
});

element.addEventListener("mouseout", function() {
  this.style.backgroundColor = "transparent";
});
```

**3. Keydown and Keyup**

```js
document.addEventListener("keydown", function(event) {
  console.log(`Key pressed: ${event.key}`);
});

document.addEventListener("keyup", function(event) {
  console.log(`Key released: ${event.key}`);
});
```

**4. Submit Event (Forms)**

```js
const form = document.getElementById("myForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();   // Prevent actual submission
  console.log("Form submitted!");
});
```

**5. Input Event (Typing)**

```js
const input = document.getElementById("myInput");

input.addEventListener("input", function() {
  console.log(`Current value: ${this.value}`);
});
```

### F. The Event Object

When an event fires, the browser passes an **event object** to the callback function. This object contains useful information about the event.

**Common Event Object Properties:**

| Property | Description |
|----------|-------------|
| `target` | The element that triggered the event |
| `type` | The type of event (e.g., "click") |
| `key` | The key pressed (for keyboard events) |
| `value` | The value of an input (for input events) |
| `preventDefault()` | Prevents default behaviour (e.g., form submission) |

**Example:**

```js
document.addEventListener("click", function(event) {
  console.log(`Clicked on: ${event.target.tagName}`);
  console.log(`Event type: ${event.type}`);
});
```

### G. User Feedback

**Feedback** helps users understand what's happening on the page. It can be:

- **Visual**: Changing colours, showing/hiding elements, animations.
- **Textual**: Displaying messages like "Form submitted!" or "Invalid input".
- **Accessible**: Using more than just colour — include text, icons, or ARIA labels.

**Best Practices for Feedback:**

| Practice | Why It Matters |
|----------|----------------|
| Clear and immediate | Users shouldn't wonder if their action worked |
| Multiple cues | Use colour + text + icons |
| Accessible | Don't rely only on colour |
| Contextual | Place feedback near the action |
| Non-intrusive | Don't overwhelm users |

### H. In-Class Activity: Toggle Visibility

Let's build a simple webpage that shows or hides a box when a button is clicked.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    /* Hidden box style */
    #hiddenBox {
      display: none;
      padding: 15px;
      background-color: lightgray;
      border-radius: 8px;
      margin-top: 10px;
      transition: all 0.3s ease;
    }

    .container {
      font-family: sans-serif;
      max-width: 400px;
      padding: 20px;
    }

    button {
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
    }

    button:hover {
      background-color: #2980b9;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Toggle Visibility</h2>
    <!-- Button to toggle visibility -->
    <button id="toggleBtn">Show Box</button>

    <!-- Box that appears/disappears -->
    <div id="hiddenBox">This is a hidden box! Click the button to toggle it.</div>
  </div>

  <script>
    // Access elements
    const btn = document.getElementById("toggleBtn");
    const box = document.getElementById("hiddenBox");

    // Add click event listener using addEventListener
    btn.addEventListener("click", function() {
      // Check current display state
      if (box.style.display === "none" || box.style.display === "") {
        box.style.display = "block";      // Show box
        btn.innerText = "Hide Box";       // Update button text
      } else {
        box.style.display = "none";       // Hide box
        btn.innerText = "Show Box";       // Update button text
      }
    });
  </script>
</body>
</html>
```

**Explanation:**

- `addEventListener("click", ...)` listens for button clicks.
- `box.style.display` checks and changes visibility.
- `btn.innerText` updates the button label.

### I. In-Class Activity: Colour Changer

Let's build a page that changes the background colour when buttons are clicked.

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: sans-serif;
      padding: 40px;
      transition: background-color 0.5s ease;
    }

    .color-picker {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
      margin: 20px 0;
    }

    .color-btn {
      width: 60px;
      height: 60px;
      border: 2px solid #ddd;
      border-radius: 50%;
      cursor: pointer;
      transition: transform 0.2s ease, border-color 0.2s ease;
    }

    .color-btn:hover {
      transform: scale(1.1);
      border-color: #333;
    }

    .color-btn.active {
      border-color: #333;
      transform: scale(1.1);
    }

    .info {
      background: rgba(255, 255, 255, 0.8);
      padding: 15px;
      border-radius: 8px;
      max-width: 300px;
    }
  </style>
</head>
<body>
  <h2>Colour Changer</h2>
  <p>Click a colour to change the page background.</p>

  <div class="color-picker">
    <button class="color-btn" style="background-color: #ffffff;" data-colour="#ffffff" onclick="changeColour('#ffffff')"></button>
    <button class="color-btn" style="background-color: #ff6b6b;" data-colour="#ff6b6b" onclick="changeColour('#ff6b6b')"></button>
    <button class="color-btn" style="background-color: #4ecdc4;" data-colour="#4ecdc4" onclick="changeColour('#4ecdc4')"></button>
    <button class="color-btn" style="background-color: #45b7d1;" data-colour="#45b7d1" onclick="changeColour('#45b7d1')"></button>
    <button class="color-btn" style="background-color: #f9ca24;" data-colour="#f9ca24" onclick="changeColour('#f9ca24')"></button>
    <button class="color-btn" style="background-color: #6c5ce7;" data-colour="#6c5ce7" onclick="changeColour('#6c5ce7')"></button>
    <button class="color-btn" style="background-color: #2d3436;" data-colour="#2d3436" onclick="changeColour('#2d3436')"></button>
  </div>

  <div class="info">
    <p>Current colour: <span id="currentColour">#ffffff</span></p>
  </div>

  <script>
    function changeColour(colour) {
      // Change the body background colour
      document.body.style.backgroundColor = colour;

      // Update the current colour display
      document.getElementById("currentColour").innerText = colour;

      // Update text colour for dark backgrounds
      if (colour === "#2d3436") {
        document.body.style.color = "#ffffff";
      } else {
        document.body.style.color = "#2d3436";
      }

      // Highlight the active button
      document.querySelectorAll(".color-btn").forEach(btn => {
        btn.classList.remove("active");
      });
      // Find the button with matching colour and add active class
      document.querySelectorAll(".color-btn").forEach(btn => {
        if (btn.dataset.colour === colour) {
          btn.classList.add("active");
        }
      });
    }
  </script>
</body>
</html>
```

**Explanation:**

- Each colour button has an `onclick` event that calls `changeColour()`.
- The function changes the body background and updates the text.
- `dataset.colour` stores the colour value in the button's data attribute.

### J. Extra Activity: Interactive Colour Toggle

**Can you build a button that toggles the background colour of a paragraph when clicked? Let's try it.**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .highlight {
      background-color: yellow;
      padding: 10px;
      border-radius: 4px;
    }

    .container {
      font-family: sans-serif;
      padding: 20px;
      max-width: 400px;
    }

    button {
      padding: 10px 20px;
      background-color: #2ecc71;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      margin: 10px 0;
    }

    button:hover {
      background-color: #27ae60;
    }
  </style>
</head>
<body>
  <div class="container">
    <p id="text">Click the button to highlight this text.</p>
    <button id="highlightBtn">Toggle Highlight</button>
  </div>

  <script>
    const para = document.getElementById("text");
    const btn = document.getElementById("highlightBtn");

    btn.addEventListener("click", function() {
      // Toggle the highlight class
      para.classList.toggle("highlight");

      // Update button text
      if (para.classList.contains("highlight")) {
        btn.innerText = "Remove Highlight";
      } else {
        btn.innerText = "Toggle Highlight";
      }
    });
  </script>
</body>
</html>
```

**Explanation:**

- `classList.toggle("highlight")` adds the class if missing, removes it if present.
- This reinforces event handling and style manipulation.

### K. Extra Activity: Simple Quiz with Feedback

**Let's build a mini quiz that gives feedback when the user selects an answer.**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: sans-serif;
      padding: 40px;
      max-width: 500px;
      margin: 0 auto;
    }

    .question {
      font-size: 1.2rem;
      margin-bottom: 15px;
    }

    .option {
      display: block;
      width: 100%;
      padding: 12px 15px;
      margin: 8px 0;
      background-color: #f8f9fa;
      border: 2px solid #ddd;
      border-radius: 6px;
      cursor: pointer;
      text-align: left;
      font-size: 1rem;
      transition: all 0.2s ease;
    }

    .option:hover {
      background-color: #e9ecef;
    }

    .option.correct {
      background-color: #d4edda;
      border-color: #28a745;
      color: #155724;
    }

    .option.wrong {
      background-color: #f8d7da;
      border-color: #dc3545;
      color: #721c24;
    }

    .option.disabled {
      cursor: default;
      opacity: 0.8;
    }

    .feedback {
      margin-top: 20px;
      padding: 15px;
      border-radius: 6px;
    }

    .feedback.success {
      background-color: #d4edda;
      border: 1px solid #28a745;
      color: #155724;
    }

    .feedback.error {
      background-color: #f8d7da;
      border: 1px solid #dc3545;
      color: #721c24;
    }

    .reset-btn {
      padding: 10px 20px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      margin-top: 10px;
    }

    .reset-btn:hover {
      background-color: #2980b9;
    }
  </style>
</head>
<body>
  <h2>JavaScript Quiz</h2>

  <div class="question" id="questionText">What is the capital of South Africa?</div>

  <div id="optionsContainer">
    <button class="option" data-answer="wrong">Cape Town</button>
    <button class="option" data-answer="correct">Pretoria</button>
    <button class="option" data-answer="wrong">Durban</button>
    <button class="option" data-answer="wrong">Johannesburg</button>
  </div>

  <div id="feedback" class="feedback" style="display: none;"></div>

  <button class="reset-btn" onclick="resetQuiz()">Try Again</button>

  <script>
    // Get elements
    const options = document.querySelectorAll(".option");
    const feedback = document.getElementById("feedback");
    const questionText = document.getElementById("questionText");

    // Add event listeners to each option
    options.forEach(option => {
      option.addEventListener("click", function() {
        // Check if already answered
        if (this.classList.contains("disabled")) {
          return;
        }

        const answer = this.dataset.answer;
        const isCorrect = answer === "correct";

        // Disable all options
        options.forEach(opt => {
          opt.classList.add("disabled");
        });

        // Highlight correct answer
        options.forEach(opt => {
          if (opt.dataset.answer === "correct") {
            opt.classList.add("correct");
          }
        });

        // Show feedback for selected answer
        if (isCorrect) {
          this.classList.add("correct");
          feedback.className = "feedback success";
          feedback.innerText = "✅ Correct! Well done!";
        } else {
          this.classList.add("wrong");
          feedback.className = "feedback error";
          feedback.innerText = "❌ Not quite. The correct answer is Pretoria.";
        }

        feedback.style.display = "block";
      });
    });

    function resetQuiz() {
      // Reset all options
      options.forEach(opt => {
        opt.classList.remove("correct", "wrong", "disabled");
      });

      // Hide feedback
      feedback.style.display = "none";
      feedback.className = "feedback";
      feedback.innerText = "";
    }
  </script>
</body>
</html>
```

**Explanation:**

- Each option has a `data-answer` attribute indicating if it's correct.
- Clicking an option triggers the event listener.
- The correct answer is highlighted, and feedback is displayed.

### L. Extra Activity: Event Map

**Let's plan where events could occur on a fictional product page.**

**Product Page Sketch:**

```
┌─────────────────────────────────────────────────────────────────┐
│  Logo           Home  Products  About  Contact                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │                                                           │  │
│  │  Product Image    [Zoom on hover]                         │  │
│  │                                                           │  │
│  └───────────────────────────────────────────────────────────┘  │
│                                                                 │
│  Product Name: Premium Laptop                                   │
│  Price: R12,999                                                 │
│                                                                 │
│  [Add to Cart] ← Click shows confirmation                       │
│  [Add to Wishlist] ← Click shows heart animation                │
│                                                                 │
│  Quantity: [▼] ← Change updates total price                     │
│                                                                 │
│  Reviews:                                                       │
│  "Great product!" - ★★★★★                                     │
│  "Excellent value." - ★★★★☆                                   │
│                                                                 │
│  [Write a Review] ← Click opens form                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Events to Plan:**

| Element | Event | Action |
|---------|-------|--------|
| Product Image | `mouseover` | Show zoom effect |
| Add to Cart | `click` | Show confirmation message |
| Add to Wishlist | `click` | Toggle heart icon |
| Quantity dropdown | `change` | Update total price |
| Write a Review | `click` | Show review form |
| Review Form | `submit` | Validate and submit review |

### M. Session Summary

| Concept | Key Idea |
|---------|----------|
| Event | User action (click, keypress, submit, etc.) |
| `addEventListener()` | Attaches behaviour to elements |
| Inline Events | `onclick` attribute — quick but messy |
| Event Object | Contains information about the event |
| `event.target` | The element that triggered the event |
| `event.preventDefault()` | Prevents default behaviour |
| Feedback | Visual or textual response to user actions |
| Accessibility | Don't rely only on colour for feedback |

---

## Reflection Questions

1. What is the difference between inline events (`onclick`) and `addEventListener()`?
2. Why is `addEventListener()` preferred over inline events?
3. What is the event object and what is it used for?
4. Why is user feedback important in interactive web applications?
5. What are some ways to provide accessible feedback?
6. How do you prevent a form from submitting using JavaScript?
7. What is the difference between `click`, `submit`, and `change` events?

---
