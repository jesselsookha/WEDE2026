# Project Sprint — Responsive Form

You have learned how to structure HTML, style with CSS, and add interactivity with JavaScript. Now it is time to combine all these skills into a single, complete project. This session is a **project sprint** — you will build a responsive signup form that includes validation, feedback, and a polished user interface.

This project simulates a real development workflow: planning, building, testing, and refining. By the end, you will have a functional, user-friendly form that demonstrates the core skills of web development.

---

## Session 8: JavaScript Project Sprint — Build a Responsive Form

### A. Learning Outcome

Combine HTML, CSS, and JavaScript to build a responsive, validated form with user feedback.

### B. The Project Workflow

Building a complete form follows a structured workflow:

```
┌─────────────────────────────────────────────────────────────────┐
│                     PROJECT WORKFLOW                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1. SKETCH THE LAYOUT                                           │
│     └── Decide what fields and features are needed              │
│                                                                 │
│  2. WRITE THE HTML STRUCTURE                                    │
│     └── Use semantic tags and unique IDs                        │
│                                                                 │
│  3. STYLE WITH CSS                                              │
│     └── Make it clean, responsive, and accessible               │
│                                                                 │
│  4. ADD JAVASCRIPT BEHAVIOUR                                    │
│     └── Validation, feedback, interactivity                     │
│                                                                 │
│  5. TEST AND REFINE                                             │
│     └── Test all scenarios and fix any issues                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### C. Project Requirements

**What You Will Build:**

A responsive signup form that includes:

| Feature | Requirement |
|---------|-------------|
| **HTML** | Semantic tags, proper labels, unique IDs |
| **CSS** | Clean styling, responsive layout, error states |
| **JavaScript** | Validation, real-time feedback, success message |
| **Validation** | Required fields, length checks, email format, password strength |

**Stretch Features:**

- Password strength indicator
- Show/hide password toggle
- Responsive design for mobile and desktop

### D. In-Class Activity: Project Sprint — Signup Form

Let's build a complete signup form with all the features described above.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Up Form</title>
  <style>
    /* ========================================
       RESET & BASE STYLES
       ======================================== */

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    /* ========================================
       FORM CONTAINER
       ======================================== */

    .form-container {
      background: white;
      border-radius: 16px;
      padding: 40px;
      max-width: 500px;
      width: 100%;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    }

    .form-container h2 {
      color: #2d3436;
      margin-bottom: 8px;
      font-size: 1.8rem;
    }

    .form-container .subtitle {
      color: #636e72;
      margin-bottom: 30px;
      font-size: 0.95rem;
    }

    /* ========================================
       FORM ELEMENTS
       ======================================== */

    .form-group {
      margin-bottom: 20px;
    }

    .form-group label {
      display: block;
      font-weight: 600;
      color: #2d3436;
      margin-bottom: 5px;
      font-size: 0.9rem;
    }

    .form-group input {
      width: 100%;
      padding: 12px 15px;
      border: 2px solid #dfe6e9;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      font-family: inherit;
    }

    .form-group input:focus {
      outline: none;
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.2);
    }

    /* Password input with toggle */
    .password-wrapper {
      position: relative;
    }

    .password-wrapper input {
      padding-right: 50px;
    }

    .toggle-password {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.1rem;
      color: #636e72;
      padding: 5px;
    }

    .toggle-password:hover {
      color: #2d3436;
    }

    /* ========================================
       VALIDATION STATES
       ======================================== */

    .form-group .error-message {
      color: #e74c3c;
      font-size: 0.85rem;
      margin-top: 5px;
      display: block;
      min-height: 20px;
    }

    .form-group .success-message {
      color: #27ae60;
      font-size: 0.85rem;
      margin-top: 5px;
      display: block;
      min-height: 20px;
    }

    .form-group input.input-error {
      border-color: #e74c3c;
    }

    .form-group input.input-error:focus {
      border-color: #e74c3c;
      box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2);
    }

    .form-group input.input-success {
      border-color: #27ae60;
    }

    .form-group input.input-success:focus {
      border-color: #27ae60;
      box-shadow: 0 0 0 3px rgba(39, 174, 96, 0.2);
    }

    /* ========================================
       PASSWORD STRENGTH INDICATOR
       ======================================== */

    .strength-meter {
      margin-top: 8px;
      height: 4px;
      background: #dfe6e9;
      border-radius: 4px;
      overflow: hidden;
      transition: all 0.3s ease;
    }

    .strength-meter .strength-bar {
      height: 100%;
      width: 0%;
      border-radius: 4px;
      transition: width 0.3s ease, background-color 0.3s ease;
    }

    .strength-text {
      font-size: 0.8rem;
      margin-top: 5px;
      min-height: 20px;
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

    /* ========================================
       SUBMIT BUTTON
       ======================================== */

    .submit-btn {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.3s ease;
      margin-top: 10px;
    }

    .submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
    }

    .submit-btn:active {
      transform: translateY(0);
    }

    .submit-btn:disabled {
      opacity: 0.6;
      cursor: not-allowed;
      transform: none;
    }

    /* ========================================
       SUCCESS MESSAGE
       ======================================== */

    .success-container {
      display: none;
      text-align: center;
      padding: 30px 20px;
    }

    .success-container .icon {
      font-size: 4rem;
      margin-bottom: 15px;
    }

    .success-container h3 {
      color: #2d3436;
      margin-bottom: 10px;
    }

    .success-container p {
      color: #636e72;
      margin-bottom: 20px;
    }

    .success-container .reset-btn {
      padding: 10px 30px;
      background: #2d3436;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-size: 0.95rem;
      transition: background 0.3s ease;
    }

    .success-container .reset-btn:hover {
      background: #1a1a1a;
    }

    /* ========================================
       RESPONSIVE DESIGN
       ======================================== */

    @media (max-width: 600px) {
      .form-container {
        padding: 25px;
      }

      .form-container h2 {
        font-size: 1.5rem;
      }

      .form-group input {
        padding: 10px 12px;
        font-size: 0.95rem;
      }

      .submit-btn {
        padding: 12px;
        font-size: 1rem;
      }
    }
  </style>
</head>
<body>

  <div class="form-container" id="formContainer">
    <!-- ============================================
         FORM
         ============================================ -->
    <div id="formView">
      <h2>Create Account</h2>
      <p class="subtitle">Join our community today</p>

      <form id="signupForm" novalidate>
        <!-- Full Name -->
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="Enter your full name">
          <span class="error-message" id="nameError"></span>
        </div>

        <!-- Email -->
        <div class="form-group">
          <label for="email">Email Address</label>
          <input type="email" id="email" placeholder="Enter your email address">
          <span class="error-message" id="emailError"></span>
        </div>

        <!-- Password -->
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-wrapper">
            <input type="password" id="password" placeholder="Create a strong password">
            <button type="button" class="toggle-password" id="togglePassword" aria-label="Toggle password visibility">
              👁️
            </button>
          </div>
          <div class="strength-meter">
            <div class="strength-bar" id="strengthBar"></div>
          </div>
          <div class="strength-text" id="strengthText"></div>
          <span class="error-message" id="passwordError"></span>
        </div>

        <!-- Confirm Password -->
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" placeholder="Confirm your password">
          <span class="error-message" id="confirmError"></span>
        </div>

        <!-- Submit Button -->
        <button type="submit" class="submit-btn" id="submitBtn">Create Account</button>
      </form>
    </div>

    <!-- ============================================
         SUCCESS VIEW
         ============================================ -->
    <div class="success-container" id="successView">
      <div class="icon">🎉</div>
      <h3>Account Created!</h3>
      <p>Welcome to the community. We've sent a confirmation email to <span id="successEmail"></span></p>
      <button class="reset-btn" onclick="resetForm()">Create Another Account</button>
    </div>
  </div>

  <script>
    // ============================================
    // ELEMENT REFERENCES
    // ============================================

    const form = document.getElementById('signupForm');
    const fullName = document.getElementById('fullName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const togglePassword = document.getElementById('togglePassword');
    const strengthBar = document.getElementById('strengthBar');
    const strengthText = document.getElementById('strengthText');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const confirmError = document.getElementById('confirmError');

    const formView = document.getElementById('formView');
    const successView = document.getElementById('successView');
    const successEmail = document.getElementById('successEmail');

    // ============================================
    // PASSWORD VISIBILITY TOGGLE
    // ============================================

    togglePassword.addEventListener('click', function() {
      const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
      password.setAttribute('type', type);
      this.textContent = type === 'password' ? '👁️' : '👁️‍🗨️';
    });

    // ============================================
    // PASSWORD STRENGTH INDICATOR
    // ============================================

    password.addEventListener('input', function() {
      const pwd = this.value;
      const bar = strengthBar;
      const text = strengthText;

      if (pwd.length === 0) {
        bar.style.width = '0%';
        text.textContent = '';
        text.className = 'strength-text';
        return;
      }

      let score = 0;
      let feedback = [];

      // Criteria checks
      if (pwd.length >= 8) {
        score++;
      } else {
        feedback.push('at least 8 characters');
      }

      if (/[a-z]/.test(pwd)) {
        score++;
      } else {
        feedback.push('a lowercase letter');
      }

      if (/[A-Z]/.test(pwd)) {
        score++;
      } else {
        feedback.push('an uppercase letter');
      }

      if (/\d/.test(pwd)) {
        score++;
      } else {
        feedback.push('a number');
      }

      // Determine strength level
      let percentage, label, className;

      if (score === 4) {
        percentage = 100;
        label = 'Strong password!';
        className = 'strength-strong';
      } else if (score >= 2) {
        percentage = (score / 4) * 100;
        label = 'Medium: add ' + feedback.join(', ');
        className = 'strength-medium';
      } else {
        percentage = (score / 4) * 100;
        label = 'Weak: needs ' + feedback.join(', ');
        className = 'strength-weak';
      }

      // Update UI
      bar.style.width = percentage + '%';
      bar.style.backgroundColor = getStrengthColor(score);
      text.textContent = label;
      text.className = 'strength-text ' + className;
    });

    function getStrengthColor(score) {
      if (score === 4) return '#2ecc71';
      if (score >= 2) return '#f39c12';
      return '#e74c3c';
    }

    // ============================================
    // REAL-TIME VALIDATION
    // ============================================

    // Name validation on input
    fullName.addEventListener('input', function() {
      const value = this.value.trim();
      if (value.length === 0) {
        nameError.textContent = '';
        this.classList.remove('input-error', 'input-success');
        return;
      }

      if (value.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters.';
        this.classList.add('input-error');
        this.classList.remove('input-success');
      } else {
        nameError.textContent = '';
        this.classList.remove('input-error');
        this.classList.add('input-success');
      }
    });

    // Email validation on input
    email.addEventListener('input', function() {
      const value = this.value.trim();
      if (value.length === 0) {
        emailError.textContent = '';
        this.classList.remove('input-error', 'input-success');
        return;
      }

      const isValid = value.includes('@') && value.includes('.');
      if (!isValid) {
        emailError.textContent = 'Enter a valid email address.';
        this.classList.add('input-error');
        this.classList.remove('input-success');
      } else {
        emailError.textContent = '';
        this.classList.remove('input-error');
        this.classList.add('input-success');
      }
    });

    // Confirm password validation on input
    confirmPassword.addEventListener('input', function() {
      const value = this.value.trim();
      if (value.length === 0) {
        confirmError.textContent = '';
        this.classList.remove('input-error', 'input-success');
        return;
      }

      if (value !== password.value) {
        confirmError.textContent = 'Passwords do not match.';
        this.classList.add('input-error');
        this.classList.remove('input-success');
      } else {
        confirmError.textContent = '✅ Passwords match';
        this.classList.remove('input-error');
        this.classList.add('input-success');
      }
    });

    // ============================================
    // FORM SUBMISSION
    // ============================================

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Clear previous errors
      clearErrors();

      // Get trimmed values
      const name = fullName.value.trim();
      const emailValue = email.value.trim();
      const pwd = password.value;
      const confirm = confirmPassword.value;

      let isValid = true;

      // Validate name
      if (name.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters.';
        fullName.classList.add('input-error');
        isValid = false;
      } else {
        fullName.classList.remove('input-error');
        fullName.classList.add('input-success');
      }

      // Validate email
      if (emailValue === '' || !emailValue.includes('@') || !emailValue.includes('.')) {
        emailError.textContent = 'Enter a valid email address.';
        email.classList.add('input-error');
        isValid = false;
      } else {
        email.classList.remove('input-error');
        email.classList.add('input-success');
      }

      // Validate password
      if (pwd.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters.';
        password.classList.add('input-error');
        isValid = false;
      } else if (!/[a-z]/.test(pwd) || !/[A-Z]/.test(pwd) || !/\d/.test(pwd)) {
        passwordError.textContent = 'Password must include uppercase, lowercase, and a number.';
        password.classList.add('input-error');
        isValid = false;
      } else {
        password.classList.remove('input-error');
        password.classList.add('input-success');
      }

      // Validate confirm password
      if (confirm !== pwd) {
        confirmError.textContent = 'Passwords do not match.';
        confirmPassword.classList.add('input-error');
        isValid = false;
      } else if (confirm.length > 0) {
        confirmPassword.classList.remove('input-error');
        confirmPassword.classList.add('input-success');
      }

      if (isValid) {
        showSuccess(emailValue);
      }
    });

    // ============================================
    // HELPER FUNCTIONS
    // ============================================

    function clearErrors() {
      document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
      });
      document.querySelectorAll('input').forEach(el => {
        el.classList.remove('input-error', 'input-success');
      });
    }

    function showSuccess(emailValue) {
      // Hide form, show success
      formView.style.display = 'none';
      successView.style.display = 'block';
      successEmail.textContent = emailValue;

      // Reset form for next time
      form.reset();
      strengthBar.style.width = '0%';
      strengthText.textContent = '';
      strengthText.className = 'strength-text';
    }

    function resetForm() {
      // Show form, hide success
      formView.style.display = 'block';
      successView.style.display = 'none';

      // Clear all styles
      document.querySelectorAll('input').forEach(el => {
        el.classList.remove('input-error', 'input-success');
      });
      document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
      });
    }
  </script>

</body>
</html>
```

### E. Code Walkthrough

**HTML Structure:**

- The form uses semantic HTML with proper labels and IDs.
- Each input has a corresponding error message element.
- The password field includes a toggle button and strength indicator.
- The form has a success view that appears after validation passes.

**CSS Styling:**

- The form uses a modern, clean design with gradient backgrounds.
- Validation states show green (success) and red (error) borders.
- The password strength meter animates as the user types.
- The design is fully responsive with a media query for mobile devices.

**JavaScript Behaviour:**

- **Real-time validation** for name, email, and confirm password.
- **Password strength indicator** that checks length, uppercase, lowercase, and numbers.
- **Password visibility toggle** that shows/hides the password.
- **Form validation** on submission with clear error messages.
- **Success view** that displays a confirmation message.

### F. In-Class Activity: Peer Testing

**Goal:** Test a peer's form and provide constructive feedback.

**Testing Checklist:**

| Area | What to Check |
|------|---------------|
| **HTML** | Semantic tags, proper labels, unique IDs |
| **CSS** | Clean styling, responsive on mobile, error states |
| **JavaScript** | All fields validate, real-time feedback works |
| **Validation** | Required fields, email format, password strength |
| **UX** | Clear error messages, easy to use, accessible |

**Feedback Prompts:**

- "What worked well at different screen sizes?"
- "How clear were the error messages?"
- "Where could spacing, contrast, or readability be improved?"
- "How accessible did it feel?"

### G. Extra Activity: Polish Your Form

**Challenge:** Improve your form by adding:

1. **Field-specific icons** — Add icons to input fields (using Unicode or emojis)
2. **Loading indicator** — Show a loading spinner while processing
3. **Animation** — Add smooth transitions for error messages and success view
4. **Additional validation** — Phone number, date, or URL validation

**Example: Adding a Loading Indicator:**

```html
<!-- Add to HTML -->
<div id="loadingSpinner" style="display: none; text-align: center; padding: 20px;">
  ⏳ Creating your account...
</div>
```

```js
// In the submit handler
document.getElementById('loadingSpinner').style.display = 'block';
document.getElementById('submitBtn').disabled = true;

setTimeout(() => {
  document.getElementById('loadingSpinner').style.display = 'none';
  document.getElementById('submitBtn').disabled = false;
  // Then show success
}, 1500);
```

### H. Session Summary

| Concept | Key Idea |
|---------|----------|
| Project Workflow | Sketch → HTML → CSS → JS → Test |
| Semantic HTML | Use proper tags and attributes |
| Responsive CSS | Adapt to different screen sizes |
| Form Validation | Required, format, length checks |
| Real-time Feedback | Validate as user types |
| Password Strength | Check complexity criteria |
| Success View | Show confirmation after submission |
| Peer Testing | Get feedback and improve |

---

## Reflection Questions

1. What was the most challenging part of building this form?
2. Why is real-time validation better than validation only on submission?
3. How does responsive design improve the user experience of a form?
4. What accessibility considerations did you make in your form?
5. What would you add to this form if you had more time?

---
