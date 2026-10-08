# Loops and Arrays

Functions and conditionals allow you to write reusable logic and make decisions. But what happens when you need to perform the same action repeatedly — perhaps on a list of items? This is where **loops** and **arrays** come in.

Loops allow you to repeat code efficiently. Arrays allow you to store and manage collections of data. Together, they are essential for working with lists, menus, galleries, search results, and dynamic content.

---

## Session 5B: Loops, Arrays, and Array Methods

### A. Learning Outcome

Understand how to use loops to repeat actions, work with arrays to store collections of data, and apply array methods to manipulate and transform data.

### B. What Is an Array?

An **array** is a data structure that stores a collection of values in a single variable. Think of it as a list of items, each with its own position (index).

**Creating an Array:**

```js
// Array of strings
const fruits = ["Apple", "Banana", "Cherry", "Date"];

// Array of numbers
const scores = [85, 92, 78, 95, 88];

// Array of mixed types
const mixed = ["Hello", 42, true, null];

// Empty array
const empty = [];
```

**Accessing Array Elements:**

Array elements are accessed using their **index** — the position in the array. Indexes start at `0`.

```js
const fruits = ["Apple", "Banana", "Cherry", "Date"];

console.log(fruits[0]);   // "Apple"
console.log(fruits[2]);   // "Cherry"
console.log(fruits[3]);   // "Date"
console.log(fruits[4]);   // undefined (out of bounds)
```

**Array Length:**

The `length` property tells you how many elements are in the array.

```js
const fruits = ["Apple", "Banana", "Cherry", "Date"];
console.log(fruits.length);   // 4
```

### C. Common Array Methods

| Method | Description | Example |
|--------|-------------|---------|
| `push()` | Adds an element to the end | `fruits.push("Elderberry")` |
| `pop()` | Removes the last element | `fruits.pop()` |
| `unshift()` | Adds an element to the beginning | `fruits.unshift("Apricot")` |
| `shift()` | Removes the first element | `fruits.shift()` |
| `indexOf()` | Finds the index of an element | `fruits.indexOf("Banana")` |
| `includes()` | Checks if an element exists | `fruits.includes("Cherry")` |

**Example:**

```js
const fruits = ["Apple", "Banana", "Cherry"];

// Add to end
fruits.push("Date");
console.log(fruits);   // ["Apple", "Banana", "Cherry", "Date"]

// Remove from end
const last = fruits.pop();
console.log(last);     // "Date"
console.log(fruits);   // ["Apple", "Banana", "Cherry"]

// Add to beginning
fruits.unshift("Apricot");
console.log(fruits);   // ["Apricot", "Apple", "Banana", "Cherry"]

// Find index
const index = fruits.indexOf("Banana");
console.log(index);    // 2

// Check if exists
const hasCherry = fruits.includes("Cherry");
console.log(hasCherry); // true
```

### D. What Is a Loop?

A **loop** is a programming structure that repeats a block of code while a condition is true. Loops are essential for automating repetitive tasks.

**Why Use Loops?**

| Benefit | Explanation |
|---------|-------------|
| **Efficiency** | Write once, repeat many times |
| **Dynamic Content** | Generate content based on data |
| **Data Processing** | Iterate through lists and collections |
| **Automation** | Perform repetitive tasks without manual effort |

### E. The `for` Loop

The `for` loop is the most common loop in JavaScript. It runs a specific number of times.

**Syntax:**

```js
for (initialization; condition; increment) {
  // Code to repeat
}
```

**Example:**

```js
for (let i = 0; i < 5; i++) {
  console.log(`Count: ${i}`);
}
// Output:
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4
```

**Explanation:**

| Part | Description | Example |
|------|-------------|---------|
| **Initialization** | Runs once before the loop starts | `let i = 0` |
| **Condition** | Checked before each iteration; loop continues if `true` | `i < 5` |
| **Increment** | Runs after each iteration | `i++` |

**Looping Through an Array:**

```js
const fruits = ["Apple", "Banana", "Cherry", "Date"];

for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}
// Output:
// Fruit 1: Apple
// Fruit 2: Banana
// Fruit 3: Cherry
// Fruit 4: Date
```

**Explanation:**

- `i` is the index (starting at 0).
- `i < fruits.length` ensures the loop stops at the last element.
- `i++` moves to the next index each time.
- `fruits[i]` accesses the element at the current index.

### F. The `while` Loop

The `while` loop repeats while a condition is true. Use it when you don't know how many times the loop should run.

**Syntax:**

```js
while (condition) {
  // Code to repeat
}
```

**Example:**

```js
let count = 0;

while (count < 5) {
  console.log(`Count: ${count}`);
  count++;
}
// Output:
// Count: 0
// Count: 1
// Count: 2
// Count: 3
// Count: 4
```

**Example: User Input Validation:**

```js
let userInput = "";

while (userInput === "") {
  userInput = prompt("Please enter your name:");
}

console.log(`Hello, ${userInput}!`);
```

### G. The `for...of` Loop

The `for...of` loop is a modern way to iterate over arrays. It gives you the value directly, without needing an index.

**Syntax:**

```js
for (const element of array) {
  // Code to repeat
}
```

**Example:**

```js
const fruits = ["Apple", "Banana", "Cherry", "Date"];

for (const fruit of fruits) {
  console.log(fruit);
}
// Output:
// Apple
// Banana
// Cherry
// Date
```

**When to Use `for...of`:**

- When you only need the value (not the index).
- For cleaner, more readable code.

### H. The `forEach` Method

The `forEach` method is another way to iterate over arrays. It runs a function for each element.

**Syntax:**

```js
array.forEach(function(element, index, array) {
  // Code to repeat
});
```

**Example:**

```js
const fruits = ["Apple", "Banana", "Cherry", "Date"];

fruits.forEach(function(fruit) {
  console.log(fruit);
});
// Output:
// Apple
// Banana
// Cherry
// Date
```

**Using Arrow Function:**

```js
fruits.forEach((fruit) => {
  console.log(fruit);
});

// Or one-liner
fruits.forEach(fruit => console.log(fruit));
```

**With Index:**

```js
fruits.forEach((fruit, index) => {
  console.log(`${index + 1}: ${fruit}`);
});
// Output:
// 1: Apple
// 2: Banana
// 3: Cherry
// 4: Date
```

### I. Array Methods: `map`, `filter`, and `reduce`

These methods are used to **transform** and **process** arrays.

**1. `map()` — Transform Each Element**

`map()` creates a new array by applying a function to each element.

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(function(num) {
  return num * 2;
});

console.log(doubled);   // [2, 4, 6, 8, 10]

// Using arrow function
const tripled = numbers.map(num => num * 3);
console.log(tripled);   // [3, 6, 9, 12, 15]
```

**Real-World Example: Formatting Data**

```js
const products = [
  { name: "Laptop", price: 12000 },
  { name: "Headphones", price: 800 },
  { name: "Mouse", price: 300 }
];

const productNames = products.map(product => product.name);
console.log(productNames);   // ["Laptop", "Headphones", "Mouse"]

const formatted = products.map(product => ({
  name: product.name.toUpperCase(),
  price: `R${product.price.toFixed(2)}`
}));
console.log(formatted);
// [
//   { name: "LAPTOP", price: "R12000.00" },
//   { name: "HEADPHONES", price: "R800.00" },
//   { name: "MOUSE", price: "R300.00" }
// ]
```

**2. `filter()` — Select Elements**

`filter()` creates a new array with only elements that pass a test.

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);   // [2, 4, 6, 8, 10]

const largeNumbers = numbers.filter(num => num > 5);
console.log(largeNumbers);  // [6, 7, 8, 9, 10]
```

**Real-World Example: Filtering Products**

```js
const products = [
  { name: "Laptop", price: 12000, inStock: true },
  { name: "Headphones", price: 800, inStock: true },
  { name: "Mouse", price: 300, inStock: false },
  { name: "Keyboard", price: 500, inStock: true }
];

const inStockProducts = products.filter(product => product.inStock);
console.log(inStockProducts);
// [
//   { name: "Laptop", price: 12000, inStock: true },
//   { name: "Headphones", price: 800, inStock: true },
//   { name: "Keyboard", price: 500, inStock: true }
// ]

const affordableProducts = products.filter(product => product.price < 1000);
console.log(affordableProducts);
// [
//   { name: "Headphones", price: 800, inStock: true },
//   { name: "Mouse", price: 300, inStock: false },
//   { name: "Keyboard", price: 500, inStock: true }
// ]
```

**3. `reduce()` — Combine Values**

`reduce()` reduces an array to a single value by applying a function.

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce(function(accumulator, current) {
  return accumulator + current;
}, 0);

console.log(sum);   // 15

// Using arrow function
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log(product);   // 120
```

**Real-World Example: Calculating Total Price**

```js
const cart = [
  { name: "Laptop", price: 12000, quantity: 1 },
  { name: "Headphones", price: 800, quantity: 2 },
  { name: "Mouse", price: 300, quantity: 3 }
];

const total = cart.reduce((acc, item) => {
  return acc + (item.price * item.quantity);
}, 0);

console.log(total);   // 12000 + 1600 + 900 = 14500
```

### J. In-Class Activity: Loop Puzzle — Generate List Items

Let's use a loop to dynamically create a list of fruits.

```html
<!DOCTYPE html>
<html>
<body>
  <h2>Fruit List</h2>
  <div id="listContainer"></div>

  <script>
    const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

    // Using a for loop
    let html = "<h3>Using a for loop:</h3><ul>";
    for (let i = 0; i < fruits.length; i++) {
      html += `<li>${fruits[i]}</li>`;
    }
    html += "</ul>";

    // Using forEach
    html += "<h3>Using forEach:</h3><ul>";
    fruits.forEach(function(fruit) {
      html += `<li>${fruit}</li>`;
    });
    html += "</ul>";

    document.getElementById("listContainer").innerHTML = html;
  </script>
</body>
</html>
```

**Explanation:**

- The `for` loop iterates through the array using an index.
- The `forEach` method iterates using a callback function.
- Both produce the same result — a dynamically generated list.

### K. In-Class Activity: Loop-Based Content Generator

Let's simulate a dynamic FAQ section using a loop.

```html
<!DOCTYPE html>
<html>
<body>
  <h2>Frequently Asked Questions</h2>
  <div id="faqSection"></div>

  <script>
    const faqs = [
      { question: "What is JavaScript?", answer: "A programming language for web interactivity." },
      { question: "How do I link a script?", answer: "Use the <script> tag with src attribute." },
      { question: "What is the DOM?", answer: "The Document Object Model — a tree of HTML elements." },
      { question: "How do I write a function?", answer: "Use the 'function' keyword or arrow functions." }
    ];

    let output = "<ul>";

    faqs.forEach(function(faq) {
      output += `
        <li style="margin-bottom: 15px;">
          <strong>Q: ${faq.question}</strong><br>
          A: ${faq.answer}
        </li>
      `;
    });

    output += "</ul>";
    document.getElementById("faqSection").innerHTML = output;
  </script>
</body>
</html>
```

**Explanation:**

- The `forEach` loop iterates through the FAQ array.
- Each FAQ is displayed as a list item with question and answer.
- This technique is used in real-world sites to display dynamic content.

### L. Extra Activity: Array of Products with Display

**Let's build a product gallery using an array and loops.**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    .product {
      border: 1px solid #ddd;
      padding: 15px;
      margin: 10px 0;
      border-radius: 8px;
    }
    .product h3 {
      margin: 0 0 5px;
    }
    .product .price {
      color: #2ecc71;
      font-weight: bold;
    }
    .product .stock {
      color: #e74c3c;
      font-size: 0.9em;
    }
    .product .in-stock {
      color: #2ecc71;
    }
  </style>
</head>
<body>
  <h2>Product Gallery</h2>
  <div id="productContainer"></div>

  <script>
    const products = [
      { name: "Laptop", price: 12000, inStock: true },
      { name: "Headphones", price: 800, inStock: true },
      { name: "Mouse", price: 300, inStock: false },
      { name: "Keyboard", price: 500, inStock: true },
      { name: "Monitor", price: 2500, inStock: false }
    ];

    let html = "";

    // Using map to transform data
    const productCards = products.map(function(product) {
      const stockStatus = product.inStock
        ? '<span class="in-stock">In Stock</span>'
        : '<span class="stock">Out of Stock</span>';

      return `
        <div class="product">
          <h3>${product.name}</h3>
          <p class="price">R${product.price.toFixed(2)}</p>
          <p>${stockStatus}</p>
        </div>
      `;
    });

    // Join the array into a single string
    html = productCards.join("");

    document.getElementById("productContainer").innerHTML = html;
  </script>
</body>
</html>
```

**Explanation:**

- `map()` transforms each product into an HTML card.
- The stock status is conditionally displayed using a ternary operator.
- `join("")` combines all the cards into a single string.

### M. Extra Activity: Shopping Cart Total

**Let's calculate the total price of a shopping cart using `reduce()`.**

```html
<!DOCTYPE html>
<html>
<body>
  <h2>Shopping Cart</h2>
  <div id="cartContainer"></div>
  <p id="totalContainer"></p>

  <script>
    const cart = [
      { name: "Laptop", price: 12000, quantity: 1 },
      { name: "Headphones", price: 800, quantity: 2 },
      { name: "Mouse", price: 300, quantity: 3 },
      { name: "Keyboard", price: 500, quantity: 1 }
    ];

    // Display cart items
    let html = "<ul>";
    cart.forEach(item => {
      html += `
        <li>
          ${item.name} × ${item.quantity} = R${(item.price * item.quantity).toFixed(2)}
        </li>
      `;
    });
    html += "</ul>";
    document.getElementById("cartContainer").innerHTML = html;

    // Calculate total using reduce
    const total = cart.reduce((acc, item) => {
      return acc + (item.price * item.quantity);
    }, 0);

    document.getElementById("totalContainer").innerHTML = `
      <strong>Total: R${total.toFixed(2)}</strong>
    `;
  </script>
</body>
</html>
```

**Explanation:**

- `forEach` displays each cart item.
- `reduce()` calculates the total price by summing `price × quantity` for each item.

### N. Extra Activity: Filter and Display

**Let's filter an array of students and display only those who passed.**

```html
<!DOCTYPE html>
<html>
<body>
  <h2>Student Results</h2>
  <div id="resultsContainer"></div>

  <script>
    const students = [
      { name: "Thabo", score: 85 },
      { name: "Lebo", score: 62 },
      { name: "Amina", score: 43 },
      { name: "Sipho", score: 78 },
      { name: "Zara", score: 55 },
      { name: "Kofi", score: 91 }
    ];

    // Filter students who passed (score >= 50)
    const passed = students.filter(student => student.score >= 50);

    // Sort by score (highest first)
    const sorted = passed.sort((a, b) => b.score - a.score);

    // Generate HTML
    let html = `<h3>Passing Students (${sorted.length} of ${students.length})</h3><ul>`;
    sorted.forEach(student => {
      const grade = student.score >= 80 ? "A" :
                    student.score >= 70 ? "B" :
                    student.score >= 60 ? "C" : "D";
      html += `<li>${student.name}: ${student.score}% (Grade ${grade})</li>`;
    });
    html += "</ul>";

    document.getElementById("resultsContainer").innerHTML = html;
  </script>
</body>
</html>
```

**Explanation:**

- `filter()` selects only students with score ≥ 50.
- `sort()` orders the results from highest to lowest.
- A ternary chain assigns grades based on scores.

### O. Session Summary

| Concept | Key Idea |
|---------|----------|
| Array | Collection of values |
| `array[index]` | Access element by position |
| `length` | Number of elements |
| `push()` | Add to end |
| `pop()` | Remove from end |
| `unshift()` | Add to beginning |
| `shift()` | Remove from beginning |
| `for` loop | Repeats a specific number of times |
| `while` loop | Repeats while condition is true |
| `for...of` | Iterates over values |
| `forEach` | Iterates with callback |
| `map()` | Transforms each element |
| `filter()` | Selects elements that pass a test |
| `reduce()` | Reduces to a single value |

---

## Reflection Questions

1. Why are loops useful when working with arrays?
2. What is the difference between `for` and `while` loops?
3. When would you use `map()` instead of `forEach()`?
4. What is the difference between `filter()` and `map()`?
5. How does `reduce()` work, and when would you use it?
6. What is the difference between `push()` and `unshift()`?
7. Why is it important to understand array methods when working with data?

---

## Note: Why Arrays and Loops Matter

Arrays and loops are fundamental to modern web development. Here are some real-world scenarios where they are essential:

| Scenario | How Arrays and Loops Help |
|----------|---------------------------|
| **Product Gallery** | Store product data in an array and loop to display each item |
| **Shopping Cart** | Store cart items in an array and calculate totals using `reduce()` |
| **Search Results** | Filter results using `filter()` and display them |
| **Image Gallery** | Store image URLs in an array and generate thumbnails |
| **User Lists** | Display user profiles from an array of objects |
| **Data Tables** | Generate table rows from array data |
| **Notifications** | Show a list of notifications using `forEach` |
| **Dashboard Charts** | Process data using `map()` and `reduce()` for visualisation |

**Key Insight:** Whenever you work with lists of data — products, users, posts, images — you will use arrays and loops. Mastering these concepts is essential for building dynamic, data-driven websites.

---
