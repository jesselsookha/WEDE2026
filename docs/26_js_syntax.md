# JavaScript Syntax — The Building Blocks

JavaScript is a programming language, which means it has its own grammar, vocabulary, and rules. Just like learning a spoken language, you start with basic expressions — variables, data types, operators, and statements — and gradually build up to more complex logic.

This session introduces the **core syntax** of JavaScript and helps you understand how to write simple scripts that perform calculations, display messages, and respond to conditions.

---

## Session 3: Writing JavaScript — Syntax and Basics

### A. Learning Outcome

Understand the fundamental building blocks of JavaScript: variables, data types, operators, statements, and modern ES6 features.

### B. Variables: Storing Data

A **variable** is a named container used to store data. Think of it as a labelled box where you can put values and retrieve them later.

**Declaring Variables:**

JavaScript offers three ways to declare variables:

```js
var name = "Lebo";   // Legacy — function-scoped (avoid in modern code)
let age = 25;        // Preferred — block-scoped and mutable (can change)
const country = "South Africa"; // Block-scoped and immutable (cannot change)
```

**When to Use Each:**

| Keyword | Scope | Can Reassign? | When to Use |
|---------|-------|---------------|-------------|
| `var` | Function | Yes | **Avoid** — legacy, behaves unpredictably |
| `let` | Block | Yes | When the value might change |
| `const` | Block | No | When the value should stay the same |

**Example:**

```js
let score = 10;        // score can change
score = 15;            // ✅ Allowed — value updated

const PI = 3.14159;    // PI cannot change
PI = 3.14;             // ❌ Error — cannot reassign a constant
```

**Best Practice:**

- Use `const` by default.
- Use `let` only when you know the value needs to change.
- Never use `var` in modern JavaScript.

### C. Data Types: Kinds of Values

JavaScript supports both **primitive** (simple) and **non-primitive** (complex) data types.

**Primitive Data Types:**

| Type | Description | Example |
|------|-------------|---------|
| `string` | Text | `"Hello"`, `'World'`, `` `Hello` `` |
| `number` | Numeric values | `42`, `3.14`, `-10` |
| `boolean` | True or false | `true`, `false` |
| `null` | Intentional absence of value | `null` |
| `undefined` | Variable declared but not assigned | `undefined` |
| `symbol` | Unique identifier (advanced) | `Symbol("id")` |
| `BigInt` | Very large integers | `9007199254740991n` |

**Non-Primitive Data Types:**

| Type | Description | Example |
|------|-------------|---------|
| `object` | Key-value pairs | `{ name: "Lebo", age: 25 }` |
| `array` | Ordered list of values | `[1, 2, 3, 4, 5]` |
| `function` | Reusable block of code | `function greet() { ... }` |

**Example:**

```js
// Primitive types
const name = "Lebo";        // string
const age = 25;             // number
const isStudent = true;     // boolean
const address = null;       // null
let phone;                  // undefined

// Non-primitive types
const user = {              // object
  name: "Lebo",
  age: 25
};

const fruits = ["Apple", "Banana", "Cherry"];  // array

function greet() {          // function
  console.log("Hello!");
}
```

### D. Operators: Performing Actions

**Operators** are symbols that perform calculations or comparisons on values.

**Arithmetic Operators:**

| Operator | Description | Example |
|----------|-------------|---------|
| `+` | Addition | `5 + 3` → `8` |
| `-` | Subtraction | `5 - 3` → `2` |
| `*` | Multiplication | `5 * 3` → `15` |
| `/` | Division | `15 / 3` → `5` |
| `%` | Modulus (remainder) | `10 % 3` → `1` |
| `**` | Exponentiation | `2 ** 3` → `8` |

**Comparison Operators:**

| Operator | Description | Example |
|----------|-------------|---------|
| `===` | Strict equality (value AND type) | `5 === 5` → `true` |
| `!==` | Strict inequality | `5 !== "5"` → `true` |
| `==` | Loose equality (value only) | `5 == "5"` → `true` (avoid) |
| `<` | Less than | `5 < 10` → `true` |
| `>` | Greater than | `10 > 5` → `true` |
| `<=` | Less than or equal | `5 <= 5` → `true` |
| `>=` | Greater than or equal | `10 >= 5` → `true` |

**Logical Operators:**

| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | AND (both must be true) | `true && false` → `false` |
| `||` | OR (at least one must be true) | `true || false` → `true` |
| `!` | NOT (reverses truth value) | `!true` → `false` |

**Assignment Operators:**

| Operator | Description | Example |
|----------|-------------|---------|
| `=` | Assign value | `let x = 5;` |
| `+=` | Add and assign | `x += 3` → `x = x + 3` |
| `-=` | Subtract and assign | `x -= 3` → `x = x - 3` |
| `*=` | Multiply and assign | `x *= 3` → `x = x * 3` |
| `/=` | Divide and assign | `x /= 3` → `x = x / 3` |
| `++` | Increment by 1 | `x++` → `x = x + 1` |
| `--` | Decrement by 1 | `x--` → `x = x - 1` |

**Example:**

```js
// Arithmetic
const total = 10 + 5 * 2;        // 20 (multiplication before addition)
const remainder = 10 % 3;        // 1

// Comparison
const isAdult = age >= 18;       // true or false
const isCorrect = 5 === "5";     // false (number vs string)

// Logical
const canVote = isAdult && hasID; // both must be true

// Assignment
let score = 10;
score += 5;                      // score = 15
score++;                         // score = 16
```

### E. Statements and Expressions

**Statement:** A complete instruction that performs an action.

```js
let x = 5;              // Assignment statement
console.log(x);         // Output statement
if (x > 0) { ... }      // Conditional statement
```

**Expression:** A combination of values and operators that produces a result.

```js
x + y                   // Expression that adds two values
x > 0                   // Expression that returns true or false
"Hello" + " World"      // Expression that produces a string
```

**Important Distinction:**

- A **statement** performs an action (like assigning a value).
- An **expression** produces a value (like `x + y`).

### F. ES6 Features: Modern JavaScript

ES6 (ECMAScript 2015) introduced cleaner, more powerful syntax. These features are now widely used in modern JavaScript development.

**1. Template Literals**

Template literals allow you to embed variables and expressions directly in strings using backticks (`` ` ``) and `${}`.

```js
// Old way (string concatenation)
const name = "Lebo";
console.log("Hello, " + name + "!");

// ES6 way (template literals)
console.log(`Hello, ${name}!`);

// With expressions
const a = 5;
const b = 10;
console.log(`The sum is ${a + b}`);
```

**2. Arrow Functions**

Arrow functions provide a shorter syntax for writing functions.

```js
// Old way
function double(x) {
  return x * 2;
}

// ES6 way (arrow function)
const double = (x) => x * 2;

// With multiple parameters
const add = (a, b) => a + b;

// With no parameters
const greet = () => console.log("Hello!");
```

**3. Destructuring**

Destructuring allows you to extract values from objects or arrays and assign them to variables.

```js
// Object destructuring
const user = { name: "Lebo", age: 25, country: "South Africa" };
const { name, age } = user;   // Extracts name and age

console.log(name);             // "Lebo"
console.log(age);              // 25

// Array destructuring
const fruits = ["Apple", "Banana", "Cherry"];
const [first, second] = fruits;

console.log(first);            // "Apple"
console.log(second);           // "Banana"
```

**4. Spread Operator**

The spread operator (`...`) allows you to expand arrays or objects.

```js
// Expanding an array
const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];   // [1, 2, 3, 4, 5]

// Expanding an object
const user = { name: "Lebo", age: 25 };
const userWithCountry = { ...user, country: "South Africa" };
// { name: "Lebo", age: 25, country: "South Africa" }
```

### G. In-Class Activity: Code Clinic — Mini Challenges

These challenges help you practise variables, arithmetic, and conditionals — the foundation of all programming logic.

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    // Challenge 1: Greeting
    const name = "Lebo";
    console.log(`Hello, ${name}!`);

    // Challenge 2: Total Price
    let quantity = 3;
    let price = 50;
    let total = quantity * price;
    console.log(`Total: R${total}`);

    // Challenge 3: Toggle Message
    let show = true;
    if (show) {
      console.log("Message is visible");
    } else {
      console.log("Message is hidden");
    }

    // Challenge 4: Age Check
    const age = 18;
    const canVote = age >= 18;
    console.log(`Can vote: ${canVote}`);

    // Challenge 5: String Template
    const product = "Laptop";
    const price2 = 12000;
    console.log(`The ${product} costs R${price2}`);
  </script>
</body>
</html>
```

**Explanation:**

- `const name = "Lebo"`: Declares a constant string.
- `let total = quantity * price`: Uses arithmetic to calculate a value.
- `if (show) { ... }`: Uses a conditional to decide what message to show.
- `const canVote = age >= 18`: Uses a comparison to produce a boolean.

### H. In-Class Activity: Syntax Speed Round

Compare older syntax with modern ES6 improvements.

**Broken Code (Older Syntax):**

```js
var name = "Sam"
console.log("Hello" + name)
```

**Refactored ES6:**

```js
const name = "Sam";
console.log(`Hello, ${name}`);
```

**Explanation:**

- Template literals (`${name}`) are cleaner and easier to read.
- `const` is preferred over `var` for fixed values.
- Semicolons help avoid unexpected behaviour.

### I. Extra Activity: Greeting Script

**Can you write a script that greets the user using a predefined name variable? Let's build it step by step.**

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    // Define a name variable
    const userName = "Amina";

    // Use template literal to display greeting
    console.log(`Welcome, ${userName}!`);

    // Display on the page (optional)
    document.write(`<h2>Welcome, ${userName}!</h2>`);
  </script>
</body>
</html>
```

**Explanation:**

- This script introduces variable declaration and output using `console.log`.
- You can change the name to test different greetings.
- `document.write` demonstrates how to output content directly to the page.

### J. Extra Activity: ES6 Syntax Fixer

**Let's practise identifying and correcting syntax errors using modern JavaScript.**

**Broken Code:**

```js
var age = 20
console.log("Age is " + age)
```

**Refactored Version:**

```js
const age = 20;
console.log(`Age is ${age}`);
```

**Explanation:**

- `const` is used for values that don't change.
- Template literals improve readability.
- Semicolons mark the end of statements.

### K. Extra Activity: Simple Calculator

**Let's build a script that calculates a total price including tax.**

```html
<!DOCTYPE html>
<html>
<body>
  <script>
    // Define variables
    const itemPrice = 250;
    const quantity = 3;
    const taxRate = 0.15;  // 15% tax

    // Calculate totals
    const subtotal = itemPrice * quantity;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    // Display results
    console.log(`Subtotal: R${subtotal.toFixed(2)}`);
    console.log(`Tax: R${tax.toFixed(2)}`);
    console.log(`Total: R${total.toFixed(2)}`);
  </script>
</body>
</html>
```

**Explanation:**

- `toFixed(2)` rounds to two decimal places (currency format).
- This demonstrates arithmetic operators and template literals.

### L. Session Summary

| Concept | Key Idea |
|---------|----------|
| Variables | `let` for changing values, `const` for fixed values |
| `var` | Legacy — avoid in modern code |
| Data Types | String, number, boolean, null, undefined, object, array |
| Arithmetic | `+`, `-`, `*`, `/`, `%`, `**` |
| Comparison | `===`, `!==`, `<`, `>`, `<=`, `>=` |
| Logical | `&&`, `||`, `!` |
| Assignment | `=`, `+=`, `-=`, `++`, `--` |
| Template Literals | `${expression}` inside backticks |
| Arrow Functions | `(x) => x * 2` |
| Destructuring | Extract values from objects/arrays |
| Spread Operator | `...` to expand arrays/objects |

---

## Reflection Questions

1. Why is `const` preferred over `var` for declaring variables?
2. What is the difference between `let` and `const`?
3. When would you use template literals instead of string concatenation?
4. What is the difference between `==` and `===`? Why should you use `===`?
5. How does the spread operator `...` help when working with arrays?
6. What is the difference between a statement and an expression?
7. Why is it important to understand data types in JavaScript?

---
