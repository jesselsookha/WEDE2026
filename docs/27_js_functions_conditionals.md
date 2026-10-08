# Functions and Conditionals

Now that you understand the basic syntax of JavaScript — variables, data types, and operators — it is time to build more intelligent behaviour. This session introduces two fundamental programming structures: **functions**, which allow you to write reusable blocks of code, and **conditionals**, which allow your code to make decisions.

These are the building blocks of logic in any program. By mastering functions and conditionals, you can create scripts that respond dynamically to user input and perform complex tasks.

---

## Session 5A: Functions and Conditionals

### A. Learning Outcome

Write reusable functions, use parameters and return values, and implement conditional logic to control the flow of your programs.

### B. Functions: Reusable Logic

A **function** is a named block of code that performs a specific task. You define a function once and call it whenever you need that task performed.

**Why Use Functions?**

| Benefit | Explanation |
|---------|-------------|
| **Reusability** | Write once, use many times |
| **Modularity** | Break complex problems into smaller pieces |
| **Readability** | Clear, descriptive names make code easier to understand |
| **Maintainability** | Fix a bug in one place, not everywhere |

**Function Syntax:**

```js
function functionName(parameters) {
  // Code to execute
  return value;   // Optional
}
```

**Example:**

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

**Explanation:**

- `function`: Keyword to define a function.
- `greet`: Name of the function (descriptive and meaningful).
- `name`: Parameter — a placeholder for input.
- `return`: Sends back a result.

**Calling a Function:**

```js
const message = greet("Lebo");
console.log(message);   // "Hello, Lebo!"
```

### C. Function Parameters and Arguments

**Parameters** are placeholders defined in the function declaration. **Arguments** are the actual values passed when the function is called.

```js
// Function with two parameters
function add(x, y) {
  return x + y;
}

// Calling with arguments
const result = add(5, 3);   // 8
```

**Multiple Parameters:**

```js
function calculateTotal(price, quantity, taxRate) {
  const subtotal = price * quantity;
  const tax = subtotal * taxRate;
  return subtotal + tax;
}

const total = calculateTotal(100, 3, 0.15);   // 345
```

### D. Return Values

The `return` statement specifies the value a function outputs. Once `return` is executed, the function stops running.

```js
function multiply(a, b) {
  return a * b;
  console.log("This line never runs!");   // Unreachable
}

const product = multiply(4, 5);   // 20
```

**Functions Without Return:**

If a function doesn't have a `return` statement, it returns `undefined` by default.

```js
function sayHello(name) {
  console.log(`Hello, ${name}!`);
  // No return statement
}

const result = sayHello("Lebo");   // undefined
```

### E. Function Scope

Variables declared inside a function are **local** to that function — they cannot be accessed outside it.

```js
function myFunction() {
  let localVar = "I'm local";
  console.log(localVar);   // Works
}

console.log(localVar);     // ❌ Error — localVar is not defined
```

**Global Variables:**

Variables declared outside any function are **global** — they can be accessed anywhere.

```js
const globalVar = "I'm global";

function myFunction() {
  console.log(globalVar);   // Works
}
```

**Best Practice:**

- Limit the use of global variables.
- Keep variables as local as possible to avoid conflicts.

### F. Arrow Functions (ES6)

Arrow functions provide a shorter syntax for writing functions.

```js
// Traditional function
function double(x) {
  return x * 2;
}

// Arrow function
const double = (x) => x * 2;

// With multiple parameters
const add = (a, b) => a + b;

// With no parameters
const greet = () => console.log("Hello!");

// With a function body (multiple statements)
const calculate = (price, quantity) => {
  const subtotal = price * quantity;
  const tax = subtotal * 0.15;
  return subtotal + tax;
};
```

**When to Use Arrow Functions:**

- Simple, single-expression functions
- Callback functions (covered later)
- When you want cleaner, more concise code

### G. Conditionals: Making Decisions

**Conditionals** allow your code to choose between different actions based on conditions.

**The `if...else` Statement:**

```js
if (condition) {
  // Code runs if condition is true
} else {
  // Code runs if condition is false
}
```

**Example:**

```js
const age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}
```

**The `else if` Clause:**

For multiple conditions, use `else if`.

```js
const score = 85;

if (score >= 80) {
  console.log("Grade: A");
} else if (score >= 70) {
  console.log("Grade: B");
} else if (score >= 60) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

### H. Comparison and Logical Operators in Conditionals

**Comparison Operators:**

| Operator | Description | Example |
|----------|-------------|---------|
| `===` | Strict equality | `age === 18` |
| `!==` | Strict inequality | `age !== 18` |
| `<` | Less than | `age < 18` |
| `>` | Greater than | `age > 18` |
| `<=` | Less than or equal | `age <= 18` |
| `>=` | Greater than or equal | `age >= 18` |

**Logical Operators:**

| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | AND (both true) | `age >= 18 && hasID === true` |
| `||` | OR (at least one true) | `role === "admin" || role === "manager"` |
| `!` | NOT (reverses truth) | `!isLoggedIn` |

**Example:**

```js
const age = 20;
const hasID = true;
const isLoggedIn = false;

// AND: both conditions must be true
if (age >= 18 && hasID) {
  console.log("You can vote.");
}

// OR: at least one condition must be true
if (isLoggedIn || role === "guest") {
  console.log("Access granted.");
}

// NOT: reverses the condition
if (!isLoggedIn) {
  console.log("Please log in.");
}
```

### I. The Ternary Operator

The ternary operator is a shorthand for simple `if...else` statements.

```js
condition ? valueIfTrue : valueIfFalse;
```

**Example:**

```js
const age = 18;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status);   // "Adult"

// Equivalent if...else
let status2;
if (age >= 18) {
  status2 = "Adult";
} else {
  status2 = "Minor";
}
```

**When to Use the Ternary Operator:**

- Simple, single-line conditions
- Assigning values based on a condition
- Returning values from functions

### J. The `switch` Statement

The `switch` statement is useful for checking multiple specific values.

```js
switch (expression) {
  case value1:
    // Code for value1
    break;
  case value2:
    // Code for value2
    break;
  default:
    // Code for any other value
}
```

**Example:**

```js
const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Friday":
    console.log("Weekend is near!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;
  default:
    console.log("A regular day.");
}
```

**Explanation:**

- `break` prevents the code from "falling through" to the next case.
- `default` runs if no case matches.
- Multiple cases can share the same code block.

### K. In-Class Activity: Function Lab — Simple Calculator

Let's build a calculator that adds two numbers entered by the user.

```html
<!DOCTYPE html>
<html>
<body>
  <h2>Simple Calculator</h2>
  <input type="number" id="num1" placeholder="Enter first number">
  <input type="number" id="num2" placeholder="Enter second number">
  <button onclick="calculate()">Add</button>
  <p id="result"></p>

  <script>
    // Function to handle button click
    function calculate() {
      // Get values from input fields
      const a = parseFloat(document.getElementById("num1").value);
      const b = parseFloat(document.getElementById("num2").value);

      // Call the add function
      const sum = add(a, b);

      // Display the result
      document.getElementById("result").innerText = `Result: ${sum}`;
    }

    // Function to add two numbers
    function add(x, y) {
      return x + y;
    }
  </script>
</body>
</html>
```

**Explanation:**

- `parseFloat(...)` converts input text to a number.
- `add(x, y)` is a reusable function that returns the sum.
- `innerText` updates the result on the page.

### L. In-Class Activity: Age Checker

Let's build a script that checks a person's age and displays a message.

```html
<!DOCTYPE html>
<html>
<body>
  <h2>Age Checker</h2>
  <input type="number" id="ageInput" placeholder="Enter your age">
  <button onclick="checkAge()">Check</button>
  <p id="message"></p>

  <script>
    function checkAge() {
      const age = parseInt(document.getElementById("ageInput").value);

      let message = "";

      if (age < 0) {
        message = "Age cannot be negative.";
      } else if (age < 13) {
        message = "You are a child.";
      } else if (age < 18) {
        message = "You are a teenager.";
      } else if (age < 65) {
        message = "You are an adult.";
      } else {
        message = "You are a senior citizen.";
      }

      document.getElementById("message").innerText = message;
    }
  </script>
</body>
</html>
```

**Explanation:**

- `parseInt(...)` converts input to an integer.
- Multiple `else if` conditions check different age ranges.
- Each condition produces a different message.

### M. Extra Activity: Grade Calculator Function

**Can you write a function that calculates a grade based on a score?**

```html
<!DOCTYPE html>
<html>
<body>
  <h2>Grade Calculator</h2>
  <input type="number" id="scoreInput" placeholder="Enter score (0-100)">
  <button onclick="showGrade()">Calculate Grade</button>
  <p id="gradeResult"></p>

  <script>
    function calculateGrade(score) {
      if (score >= 80) return "A";
      if (score >= 70) return "B";
      if (score >= 60) return "C";
      if (score >= 50) return "D";
      return "F";
    }

    function showGrade() {
      const score = parseInt(document.getElementById("scoreInput").value);

      if (isNaN(score) || score < 0 || score > 100) {
        document.getElementById("gradeResult").innerText = "Please enter a valid score (0-100).";
        return;
      }

      const grade = calculateGrade(score);
      document.getElementById("gradeResult").innerText = `Your grade is: ${grade}`;
    }
  </script>
</body>
</html>
```

**Explanation:**

- `calculateGrade(score)` is a reusable function that returns a grade.
- The function uses multiple `if` statements (without `else` because each `return` exits early).
- `isNaN(...)` checks if the input is not a number.

### N. Extra Activity: Discount Calculator

**Let's build a function that applies a discount based on a customer's loyalty status.**

```html
<!DOCTYPE html>
<html>
<body>
  <h2>Discount Calculator</h2>
  <label>Customer Type: 
    <select id="customerType">
      <option value="regular">Regular</option>
      <option value="premium">Premium</option>
      <option value="vip">VIP</option>
    </select>
  </label>
  <br><br>
  <label>Purchase Amount: <input type="number" id="amount" placeholder="Enter amount"></label>
  <br><br>
  <button onclick="calculateDiscount()">Calculate Discount</button>
  <p id="discountResult"></p>

  <script>
    function getDiscountRate(customerType) {
      switch (customerType) {
        case "vip":
          return 0.20;  // 20% discount
        case "premium":
          return 0.10;  // 10% discount
        case "regular":
        default:
          return 0.05;  // 5% discount
      }
    }

    function calculateDiscount() {
      const type = document.getElementById("customerType").value;
      const amount = parseFloat(document.getElementById("amount").value);

      if (isNaN(amount) || amount <= 0) {
        document.getElementById("discountResult").innerText = "Please enter a valid amount.";
        return;
      }

      const discountRate = getDiscountRate(type);
      const discount = amount * discountRate;
      const finalPrice = amount - discount;

      document.getElementById("discountResult").innerHTML = `
        <strong>Customer Type:</strong> ${type}<br>
        <strong>Original Amount:</strong> R${amount.toFixed(2)}<br>
        <strong>Discount Rate:</strong> ${(discountRate * 100)}%<br>
        <strong>Discount:</strong> R${discount.toFixed(2)}<br>
        <strong>Final Price:</strong> R${finalPrice.toFixed(2)}
      `;
    }
  </script>
</body>
</html>
```

**Explanation:**

- `switch` statement handles different customer types.
- Each case returns a different discount rate.
- The main function calculates and displays the results.

### O. Session Summary

| Concept | Key Idea |
|---------|----------|
| Function | Reusable block of code |
| Parameter | Placeholder for input |
| Return Value | Output of a function |
| Scope | Local vs global variables |
| Arrow Function | Shorter syntax: `(x) => x * 2` |
| `if...else` | Decision-making |
| `else if` | Multiple conditions |
| Ternary Operator | `condition ? true : false` |
| `switch` | Multiple specific values |
| `&&` | AND (both true) |
| `||` | OR (at least one true) |
| `!` | NOT (reverses truth) |

---

## Reflection Questions

1. Why is it better to use a function than to repeat the same code multiple times?
2. What is the difference between a parameter and an argument?
3. When would you use `else if` instead of multiple `if` statements?
4. What is the difference between `&&` and `||`?
5. When would you use a `switch` statement instead of `if...else`?
6. Why is it important to understand function scope?
7. What is the difference between an arrow function and a traditional function?

---
