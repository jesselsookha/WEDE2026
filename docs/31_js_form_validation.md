# Form Validation

Forms are how users communicate with your website — whether they're signing up, submitting feedback, making a purchase, or requesting information. But not all user input is correct, complete, or safe. That's why we use **form validation**.

Validation ensures that users fill in required fields, enter data in the correct format, and catch mistakes before submission. This improves user experience, reduces errors, and protects your site from invalid or malicious data.

This session introduces form validation techniques using JavaScript, including required fields, format checks, length validation, and real-time feedback.

---

## Session 7: Validating Form Input Using JavaScript

### A. Learning Outcome

Understand why form validation is important, access and validate user input, provide clear feedback, and prevent invalid form submission.

### B. Why Validate Forms?

**The Problem:**

Users can make mistakes — they might forget to fill in a field, enter an invalid email address, or type letters where numbers are expected. Without validation, these errors can lead to:

- Incomplete or incorrect data being submitted
- Poor user experience (users frustrated by errors after submission)
- Security vulnerabilities (invalid or malicious data)
- Server overload (processing invalid data)

**The Solution:**

| Validation Type | Where It Happens | What It Does |
|-----------------|------------------|--------------|
| **Client-side** | Browser (JavaScript) | Immediate feedback, prevents submission of invalid data |
| **Server-side** | Server (backend) | Final check, security, data integrity |

**Best Practice:** Use both client-side and server-side validation. Client-side improves user experience; server-side ensures security and data integrity.

### C. Types of Input Fields

HTML provides various input types, each with its own characteristics and validation requirements:

| Input Type | Description | Common Validation |
|------------|-------------|-------------------|
| `text` | Freeform text | Required, min/max length |
| `email` | Email address | Format check (must contain @ and .) |
| `password` | Password input | Min length, strength requirements |
| `number` | Numeric input | Min/max range, numeric only |
| `tel` | Phone number | Format check, length |
| `date` | Date input | Valid date, age range |
| `checkbox` | Yes/No selection | Must be checked |
| `radio` | Multiple choice | Must select one |
| `select` | Dropdown | Must select an option |

### D. Accessing Input Values

To validate a form, you first need to access the user's input:

```js
// Get value from an input field
const name = document.getElementById("name").value;

// Get value from a dropdown
const service = document.getElementById("service").value;

// Get value from a checkbox
const agreed = document.getElementById("terms").checked; // true or false

// Get value from a radio button group
const gender = document.querySelector('input[name="gender"]:checked');
```

**Cleaning Up Input:**

```js
// Trim whitespace from the beginning and end
const name = document.getElementById("name").value.trim();

// Convert to lowercase (for case-insensitive comparison)
const email = document.getElementById("email").value.trim().toLowerCase();

// Convert to a number
const age = parseInt(document.getElementById("age").value);
```

### E. Common Validation Techniques

**1. Required Fields (Not Empty)**

```js
function isRequired(value) {
  return value.trim() !== "";
}

// Usage
if (!isRequired(document.getElementById("name").value)) {
  // Show error: Name is required
}
```

**2. Minimum and Maximum Length**

```js
function isValidLength(value, min, max) {
  const length = value.trim().length;
  return length >= min && length <= max;
}

// Usage
if (!isValidLength(document.getElementById("username").value, 3, 20)) {
  // Show error: Username must be 3-20 characters
}
```

**3. Email Format Validation**

```js
function isValidEmail(email) {
  // Basic check: contains @ and .
  return email.includes("@") && email.includes(".");
}

// More robust regex version
function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// Usage
if (!isValidEmail(document.getElementById("email").value)) {
  // Show error: Enter a valid email address
}
```

**4. Numeric Validation**

```js
function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}

function isInRange(value, min, max) {
  const num = parseFloat(value);
  return num >= min && num <= max;
}

// Usage
if (!isNumeric(document.getElementById("age").value)) {
  // Show error: Age must be a number
}

if (!isInRange(document.getElementById("age").value, 18, 100)) {
  // Show error: Age must be between 18 and 100
}
```

**5. Phone Number Validation**

```js
function isValidPhone(phone) {
  // Remove spaces, dashes, and parentheses
  const cleaned = phone.replace(/[\s\-()]/g, "");
  // Check if it's exactly 10 digits (South African format)
  const regex = /^\d{10}$/;
  return regex.test(cleaned);
}

// Usage
if (!isValidPhone(document.getElementById("phone").value)) {
  // Show error: Enter a valid 10-digit phone number
}
```

**6. Password Strength Validation**

```js
function isStrongPassword(password) {
  return password.length >= 8 &&
         /[a-z]/.test(password) &&     // At least one lowercase
         /[A-Z]/.test(password) &&     // At least one uppercase
         /\d/.test(password);          // At least one digit
}

// Usage
if (!isStrongPassword(document.getElementById("password").value)) {
  // Show error: Password must be 8+ chars with uppercase, lowercase, and number
}
```

### F. Displaying Validation Feedback

Good validation includes clear, accessible feedback:

**Inline Error Messages:**

```html
<label>Name:
  <input type="text" id="name">
  <span id="nameError" class="error"></span>
</label>
```

```css
.error {
  color: red;
  font-size: 0.9em;
}

.error-border {
  border-color: red;
}
```

```js
function validateName() {
  const name = document.getElementById("name").value.trim();
  const errorElement = document.getElementById("nameError");

  if (name === "") {
    errorElement.innerText = "Name is required.";
    document.getElementById("name").classList.add("error-border");
    return false;
  } else {
    errorElement.innerText = "";
    document.getElementById("name").classList.remove("error-border");
    return true;
  }
}
```

### G. In-Class Activity: Form Fixer — Basic Validation

Let's build a simple form that checks if the name and email fields are filled correctly.

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

    .error {
      color: red;
      font-size: 0.9em;
      display: block;
      margin-top: 4px;
    }

    .input-error {
      border-color: red;
      border-width: 2px;
    }

    .input-success {
      border-color: green;
      border-width: 2px;
    }

    label {
      display: block;
      margin-top: 15px;
      font-weight: 500;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 2px solid #ddd;
      border-radius: 6px;
      box-sizing: border-box;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    button {
      padding: 12px 24px;
      background-color: #2ecc71;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      margin-top: 20px;
      width: 100%;
    }

    button:hover {
      background-color: #27ae60;
    }

    .success {
      color: green;
      padding: 15px;
      background-color: #d4edda;
      border-radius: 6px;
      margin-top: 20px;
      border: 1px solid #28a745;
    }
  </style>
</head>
<body>

  <h2>Contact Form</h2>
  <p>Please fill in all fields correctly.</p>

  <form id="contactForm" onsubmit="return validateForm()" novalidate>
    <!-- Name Field -->
    <label>Full Name:
      <input type="text" id="name" placeholder="Enter your full name">
      <span id="nameError" class="error"></span>
    </label>

    <!-- Email Field -->
    <label>Email Address:
      <input type="text" id="email" placeholder="Enter your email address">
      <span id="emailError" class="error"></span>
    </label>

    <!-- Phone Field -->
    <label>Phone Number:
      <input type="text" id="phone" placeholder="Enter 10-digit phone number">
      <span id="phoneError" class="error"></span>
    </label>

    <!-- Submit Button -->
    <button type="submit">Submit</button>
  </form>

  <div id="successMessage" style="display: none;" class="success">
    ✅ Form submitted successfully!
  </div>

  <script>
    function validateForm() {
      // Clear previous errors
      clearErrors();

      // Get values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();

      let valid = true;

      // Validate name
      if (name === "") {
        showError("nameError", "Name is required.");
        markInvalid("name");
        valid = false;
      } else if (name.length < 3) {
        showError("nameError", "Name must be at least 3 characters.");
        markInvalid("name");
        valid = false;
      } else {
        markValid("name");
      }

      // Validate email
      if (email === "") {
        showError("emailError", "Email is required.");
        markInvalid("email");
        valid = false;
      } else if (!email.includes("@") || !email.includes(".")) {
        showError("emailError", "Enter a valid email address.");
        markInvalid("email");
        valid = false;
      } else {
        markValid("email");
      }

      // Validate phone
      if (phone === "") {
        showError("phoneError", "Phone number is required.");
        markInvalid("phone");
        valid = false;
      } else {
        // Remove spaces, dashes, parentheses
        const cleaned = phone.replace(/[\s\-()]/g, "");
        if (!/^\d{10}$/.test(cleaned)) {
          showError("phoneError", "Enter a valid 10-digit phone number.");
          markInvalid("phone");
          valid = false;
        } else {
          markValid("phone");
        }
      }

      // If valid, show success message
      if (valid) {
        document.getElementById("successMessage").style.display = "block";
        document.getElementById("contactForm").reset();
      }

      return false; // Prevent actual form submission for demo
    }

    // Helper functions
    function showError(elementId, message) {
      document.getElementById(elementId).innerText = message;
    }

    function markInvalid(elementId) {
      const element = document.getElementById(elementId);
      element.classList.remove("input-success");
      element.classList.add("input-error");
    }

    function markValid(elementId) {
      const element = document.getElementById(elementId);
      element.classList.remove("input-error");
      element.classList.add("input-success");
    }

    function clearErrors() {
      // Clear error messages
      document.querySelectorAll(".error").forEach(el => {
        el.innerText = "";
      });

      // Clear input styles
      document.querySelectorAll("input").forEach(el => {
        el.classList.remove("input-error", "input-success");
      });

      // Hide success message
      document.getElementById("successMessage").style.display = "none";
    }

    // Real-time validation as user types
    document.getElementById("name").addEventListener("input", function() {
      if (this.value.trim().length >= 3) {
        markValid("name");
        document.getElementById("nameError").innerText = "";
      } else if (this.value.trim().length > 0) {
        showError("nameError", "Name must be at least 3 characters.");
        markInvalid("name");
      }
    });

    document.getElementById("email").addEventListener("input", function() {
      const email = this.value.trim();
      if (email.includes("@") && email.includes(".")) {
        markValid("email");
        document.getElementById("emailError").innerText = "";
      } else if (email.length > 0) {
        showError("emailError", "Enter a valid email address.");
        markInvalid("email");
      }
    });

    document.getElementById("phone").addEventListener("input", function() {
      const cleaned = this.value.replace(/[\s\-()]/g, "");
      if (/^\d{10}$/.test(cleaned)) {
        markValid("phone");
        document.getElementById("phoneError").innerText = "";
      } else if (this.value.length > 0) {
        showError("phoneError", "Enter a valid 10-digit phone number.");
        markInvalid("phone");
      }
    });
  </script>

</body>
</html>
```

**Explanation:**

- The form uses `onsubmit="return validateForm()"` to run validation before submission.
- Each field is validated with appropriate checks (required, length, format).
- Real-time validation (`input` events) provides immediate feedback as the user types.
- Error messages are displayed inline near each field.
- Input borders change colour to indicate valid/invalid states.

### H. In-Class Activity: Signup Form with Password Validation

Let's build a signup form with password strength validation and confirmation.

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

    .error {
      color: red;
      font-size: 0.9em;
      display: block;
      margin-top: 4px;
    }

    .success {
      color: green;
      font-size: 0.9em;
      display: block;
      margin-top: 4px;
    }

    .input-error {
      border-color: red;
      border-width: 2px;
    }

    .input-success {
      border-color: green;
      border-width: 2px;
    }

    label {
      display: block;
      margin-top: 15px;
      font-weight: 500;
    }

    input {
      width: 100%;
      padding: 10px;
      margin-top: 5px;
      border: 2px solid #ddd;
      border-radius: 6px;
      box-sizing: border-box;
      font-size: 1rem;
      transition: border-color 0.3s ease;
    }

    button {
      padding: 12px 24px;
      background-color: #3498db;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-size: 1rem;
      margin-top: 20px;
      width: 100%;
    }

    button:hover {
      background-color: #2980b9;
    }

    .password-strength {
      margin-top: 5px;
      font-size: 0.9em;
    }

    .strength-weak {
      color: #e74c3c;
    }

    .strength-medium {
      color: #f39c12;
    }

    .strength-strong {
      color: #2ecc71;
    }

    .success-message {
      background-color: #d4edda;
      color: #155724;
      padding: 15px;
      border-radius: 6px;
      border: 1px solid #28a745;
      margin-top: 20px;
    }
  </style>
</head>
<body>

  <h2>Sign Up</h2>
  <p>Create your account</p>

  <form id="signupForm">
    <!-- Username -->
    <label>Username:
      <input type="text" id="username" placeholder="Choose a username (min 3 chars)">
      <span id="usernameError" class="error"></span>
    </label>

    <!-- Password -->
    <label>Password:
      <input type="password" id="password" placeholder="Create a strong password">
      <span id="passwordError" class="error"></span>
      <div id="strengthIndicator" class="password-strength"></div>
    </label>

    <!-- Confirm Password -->
    <label>Confirm Password:
      <input type="password" id="confirmPassword" placeholder="Confirm your password">
      <span id="confirmError" class="error"></span>
    </label>

    <!-- Terms Checkbox -->
    <label style="display: flex; align-items: center; gap: 10px; margin-top: 15px;">
      <input type="checkbox" id="terms" style="width: auto;">
      I agree to the Terms and Conditions
      <span id="termsError" class="error" style="display: inline;"></span>
    </label>

    <button type="submit">Create Account</button>
  </form>

  <div id="successMessage" style="display: none;"></div>

  <script>
    // Get elements
    const form = document.getElementById("signupForm");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");

    // ============================================
    // Real-time password strength indicator
    // ============================================

    password.addEventListener("input", function() {
      const pwd = this.value;
      const indicator = document.getElementById("strengthIndicator");

      if (pwd.length === 0) {
        indicator.innerText = "";
        indicator.className = "password-strength";
        return;
      }

      let score = 0;
      let feedback = [];

      // Length check
      if (pwd.length >= 8) {
        score++;
      } else {
        feedback.push("at least 8 characters");
      }

      // Lowercase check
      if (/[a-z]/.test(pwd)) {
        score++;
      } else {
        feedback.push("a lowercase letter");
      }

      // Uppercase check
      if (/[A-Z]/.test(pwd)) {
        score++;
      } else {
        feedback.push("an uppercase letter");
      }

      // Number check
      if (/\d/.test(pwd)) {
        score++;
      } else {
        feedback.push("a number");
      }

      // Display strength
      let strengthText = "";
      let strengthClass = "";

      if (score === 4) {
        strengthText = "✅ Strong password!";
        strengthClass = "strength-strong";
      } else if (score >= 2) {
        strengthText = "⚠️ Medium strength. Add: " + feedback.join(", ");
        strengthClass = "strength-medium";
      } else {
        strengthText = "❌ Weak password. Needs: " + feedback.join(", ");
        strengthClass = "strength-weak";
      }

      indicator.innerText = strengthText;
      indicator.className = "password-strength " + strengthClass;
    });

    // ============================================
    // Confirm password real-time check
    // ============================================

    confirmPassword.addEventListener("input", function() {
      const error = document.getElementById("confirmError");
      if (this.value.length === 0) {
        error.innerText = "";
        return;
      }

      if (this.value === password.value) {
        error.innerText = "✅ Passwords match";
        error.className = "success";
        this.classList.remove("input-error");
        this.classList.add("input-success");
      } else {
        error.innerText = "❌ Passwords do not match";
        error.className = "error";
        this.classList.remove("input-success");
        this.classList.add("input-error");
      }
    });

    // ============================================
    // Form submission
    // ============================================

    form.addEventListener("submit", function(e) {
      e.preventDefault();

      // Clear previous errors
      clearErrors();

      let valid = true;

      // Validate username
      const usernameValue = username.value.trim();
      if (usernameValue.length < 3) {
        showError("usernameError", "Username must be at least 3 characters.");
        markInvalid("username");
        valid = false;
      } else {
        markValid("username");
      }

      // Validate password
      const pwd = password.value;
      if (pwd.length < 8) {
        showError("passwordError", "Password must be at least 8 characters.");
        markInvalid("password");
        valid = false;
      } else if (!/[a-z]/.test(pwd) || !/[A-Z]/.test(pwd) || !/\d/.test(pwd)) {
        showError("passwordError", "Password must include uppercase, lowercase, and number.");
        markInvalid("password");
        valid = false;
      } else {
        markValid("password");
      }

      // Validate confirm password
      const confirm = confirmPassword.value;
      if (confirm !== pwd) {
        showError("confirmError", "Passwords do not match.");
        markInvalid("confirmPassword");
        valid = false;
      } else if (confirm.length > 0) {
        markValid("confirmPassword");
      }

      // Validate terms
      if (!terms.checked) {
        showError("termsError", "You must agree to the Terms and Conditions.");
        valid = false;
      }

      if (valid) {
        showSuccess("✅ Account created successfully! Welcome to the community!");
        form.reset();
        // Reset all input styles
        document.querySelectorAll("input").forEach(el => {
          el.classList.remove("input-error", "input-success");
        });
        document.getElementById("strengthIndicator").innerText = "";
        document.getElementById("strengthIndicator").className = "password-strength";
      }
    });

    // ============================================
    // Helper functions
    // ============================================

    function showError(elementId, message) {
      document.getElementById(elementId).innerText = message;
    }

    function markInvalid(elementId) {
      const el = document.getElementById(elementId);
      el.classList.remove("input-success");
      el.classList.add("input-error");
    }

    function markValid(elementId) {
      const el = document.getElementById(elementId);
      el.classList.remove("input-error");
      el.classList.add("input-success");
    }

    function clearErrors() {
      document.querySelectorAll(".error").forEach(el => el.innerText = "");
      document.querySelectorAll("input").forEach(el => {
        el.classList.remove("input-error", "input-success");
      });
      document.getElementById("successMessage").style.display = "none";
    }

    function showSuccess(message) {
      const container = document.getElementById("successMessage");
      container.innerText = message;
      container.className = "success-message";
      container.style.display = "block";
    }
  </script>

</body>
</html>
```

**Explanation:**

- Real-time password strength indicator checks length, uppercase, lowercase, and numbers.
- Confirm password field validates in real-time.
- Terms checkbox must be checked before submission.
- Success message appears when all validation passes.

### I. Extra Activity: Validate and Submit

**Let's build a form with validation and a confirmation message.**

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
    .error {
      color: red;
      font-size: 0.9em;
    }
    label {
      display: block;
      margin-top: 15px;
    }
    input, textarea {
      width: 100%;
      padding: 8px;
      margin-top: 5px;
      box-sizing: border-box;
      border: 2px solid #ddd;
      border-radius: 4px;
    }
    button {
      padding: 10px 20px;
      background-color: #2ecc71;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-top: 20px;
    }
    button:hover {
      background-color: #27ae60;
    }
    .success {
      background-color: #d4edda;
      color: #155724;
      padding: 15px;
      border-radius: 4px;
      border: 1px solid #28a745;
      margin-top: 20px;
    }
  </style>
</head>
<body>

  <h2>Contact Us</h2>

  <form id="contactForm">
    <label>Your Name:
      <input type="text" id="userName">
      <span id="nameError" class="error"></span>
    </label>

    <label>Your Email:
      <input type="text" id="userEmail">
      <span id="emailError" class="error"></span>
    </label>

    <label>Message:
      <textarea id="userMessage" rows="4"></textarea>
      <span id="messageError" class="error"></span>
    </label>

    <button type="submit">Send Message</button>
  </form>

  <div id="result"></div>

  <script>
    document.getElementById("contactForm").addEventListener("submit", function(e) {
      e.preventDefault();

      // Clear previous errors
      document.querySelectorAll(".error").forEach(el => el.innerText = "");
      document.getElementById("result").innerHTML = "";

      // Get values
      const name = document.getElementById("userName").value.trim();
      const email = document.getElementById("userEmail").value.trim();
      const message = document.getElementById("userMessage").value.trim();

      let valid = true;

      // Validate name
      if (name === "") {
        document.getElementById("nameError").innerText = "Name is required.";
        valid = false;
      }

      // Validate email
      if (email === "") {
        document.getElementById("emailError").innerText = "Email is required.";
        valid = false;
      } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerText = "Enter a valid email.";
        valid = false;
      }

      // Validate message
      if (message === "") {
        document.getElementById("messageError").innerText = "Message is required.";
        valid = false;
      } else if (message.length < 10) {
        document.getElementById("messageError").innerText = "Message must be at least 10 characters.";
        valid = false;
      }

      if (valid) {
        document.getElementById("result").innerHTML = `
          <div class="success">
            <strong>✅ Message sent!</strong><br>
            Thank you, ${name}. We'll respond to ${email} within 24 hours.
          </div>
        `;
        this.reset();
      }
    });
  </script>

</body>
</html>
```

### J. Session Summary

| Concept | Key Idea |
|---------|----------|
| Form Validation | Checking user input before submission |
| Client-side | Immediate feedback, better UX |
| Required Fields | Check that fields are not empty |
| Format Checks | Email, phone, date formats |
| Length Checks | Minimum and maximum character limits |
| Password Strength | Check complexity requirements |
| Confirm Password | Ensure passwords match |
| Real-time Validation | Validate as user types |
| Inline Feedback | Show errors near the relevant field |
| Accessibility | Use text, not just colour, for errors |

---

## Reflection Questions

1. Why is form validation important for user experience?
2. What is the difference between client-side and server-side validation?
3. How do you access the value of an input field in JavaScript?
4. Why is real-time validation better than validation only on submission?
5. What are some ways to provide accessible error messages?
6. How do you prevent a form from being submitted if validation fails?
7. What is the difference between `input` and `change` events for validation?

---
