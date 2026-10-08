# Capstone Project — Quotation Form

You have now completed the full JavaScript unit. You have learned about syntax, DOM manipulation, events, form validation, libraries, and APIs. This final session brings everything together in a **complete, real-world project**: a quotation form that collects user information, validates input, calculates a price, and demonstrates multiple data handling pathways.

This capstone project reflects everything you have learned — and prepares you for the next step in your web development journey.

---

## Session 10: Capstone Project — Quotation Form with Data Handling

### A. Learning Outcome

Build a complete, validated quotation form that processes user input, displays results, and demonstrates multiple data handling pathways.

### B. What This Project Covers

| Concept | Session Reference |
|---------|-------------------|
| HTML form structure and semantic tags | Sessions 1, 2 |
| CSS styling and responsive design | CSS Unit, Session 8 |
| Input validation | Session 7 |
| DOM access and manipulation | Session 4 |
| Event handling | Session 6 |
| Conditional logic | Session 5 |
| Functions | Session 5 |
| Data processing and display | Sessions 5, 8 |
| Form submission (GET/POST) | Session 10 |
| Email integration | Session 9, 10 |
| API/Data handling | Session 9, 10 |

### C. Project Overview

**What You Will Build:**

A quotation request form that:

1. Collects user information (name, email, phone, date of birth)
2. Validates all input with clear feedback
3. Calculates a quotation based on service type and age
4. Displays the quotation result
5. Offers multiple data handling pathways:
   - Inline display (JavaScript)
   - GET/POST submission (HTML form attributes)
   - Email integration (`mailto:`)
   - API/data saving (conceptual)

### D. Complete Capstone Project

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Quotation Request</title>
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
      background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
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
      max-width: 560px;
      width: 100%;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
    }

    .form-container h2 {
      color: #2d3436;
      margin-bottom: 6px;
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
      margin-bottom: 18px;
    }

    .form-group label {
      display: block;
      font-weight: 600;
      color: #2d3436;
      margin-bottom: 5px;
      font-size: 0.9rem;
    }

    .form-group input,
    .form-group select {
      width: 100%;
      padding: 12px 15px;
      border: 2px solid #dfe6e9;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.3s ease, box-shadow 0.3s ease;
      font-family: inherit;
      background-color: #fafafa;
    }

    .form-group input:focus,
    .form-group select:focus {
      outline: none;
      border-color: #6c5ce7;
      box-shadow: 0 0 0 3px rgba(108, 92, 231, 0.2);
      background-color: #ffffff;
    }

    .form-group select {
      appearance: none;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23636e72' stroke-width='2' fill='none'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: right 15px center;
      cursor: pointer;
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

    .form-group input.input-error,
    .form-group select.input-error {
      border-color: #e74c3c;
    }

    .form-group input.input-error:focus,
    .form-group select.input-error:focus {
      border-color: #e74c3c;
      box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.2);
    }

    .form-group input.input-success,
    .form-group select.input-success {
      border-color: #27ae60;
    }

    .form-group input.input-success:focus,
    .form-group select.input-success:focus {
      border-color: #27ae60;
      box-shadow: 0 0 0 3px rgba(39, 174, 96, 0.2);
    }

    /* ========================================
       PRICE DISPLAY
       ======================================== */

    .price-display {
      background: #f8f9fa;
      padding: 15px 20px;
      border-radius: 8px;
      margin: 15px 0;
      border-left: 4px solid #6c5ce7;
    }

    .price-display .price-amount {
      font-size: 1.5rem;
      font-weight: 700;
      color: #6c5ce7;
    }

    .price-display .price-label {
      font-size: 0.9rem;
      color: #636e72;
    }

    /* ========================================
       SUBMIT BUTTON
       ======================================== */

    .submit-btn {
      width: 100%;
      padding: 14px;
      background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
      color: white;
      border: none;
      border-radius: 8px;
      font-size: 1.1rem;
      font-weight: 600;
      cursor: pointer;
      transition: transform 0.2s ease, box-shadow 0.3s ease;
      margin-top: 5px;
    }

    .submit-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(108, 92, 231, 0.4);
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
       RESULT DISPLAY
       ======================================== */

    #result {
      margin-top: 25px;
      padding: 20px;
      border-radius: 8px;
      display: none;
    }

    #result.success {
      display: block;
      background: #d4edda;
      border: 1px solid #28a745;
      color: #155724;
    }

    #result.error {
      display: block;
      background: #f8d7da;
      border: 1px solid #dc3545;
      color: #721c24;
    }

    #result .result-header {
      font-weight: 700;
      font-size: 1.1rem;
      margin-bottom: 10px;
    }

    #result .result-details {
      line-height: 1.8;
    }

    #result .result-details span {
      font-weight: 600;
    }

    /* ========================================
       EMAIL & DATA PATHWAY OPTIONS
       ======================================== */

    .pathway-options {
      margin-top: 20px;
      padding-top: 20px;
      border-top: 1px solid #dfe6e9;
    }

    .pathway-options h4 {
      color: #2d3436;
      margin-bottom: 10px;
      font-size: 0.95rem;
    }

    .pathway-options .pathway-buttons {
      display: flex;
      gap: 10px;
      flex-wrap: wrap;
    }

    .pathway-options .pathway-btn {
      padding: 8px 16px;
      border: 2px solid #dfe6e9;
      border-radius: 6px;
      background: white;
      cursor: pointer;
      font-size: 0.85rem;
      font-weight: 500;
      transition: all 0.2s ease;
      color: #2d3436;
      text-decoration: none;
    }

    .pathway-options .pathway-btn:hover {
      border-color: #6c5ce7;
      background: #f8f7ff;
      transform: translateY(-2px);
    }

    .pathway-options .pathway-btn.primary {
      background: #6c5ce7;
      color: white;
      border-color: #6c5ce7;
    }

    .pathway-options .pathway-btn.primary:hover {
      background: #5a4bd1;
      border-color: #5a4bd1;
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

      .form-group input,
      .form-group select {
        padding: 10px 12px;
        font-size: 0.95rem;
      }

      .submit-btn {
        padding: 12px;
        font-size: 1rem;
      }

      .pathway-options .pathway-buttons {
        flex-direction: column;
      }

      .pathway-options .pathway-btn {
        text-align: center;
      }
    }
  </style>
</head>
<body>

  <div class="form-container">
    <h2>Request a Quotation</h2>
    <p class="subtitle">Fill in your details and we'll provide a quote.</p>

    <!-- ============================================
         FORM
         ============================================ -->

    <form id="quoteForm" method="POST" action="quotation-summary.html" novalidate>
      <!-- Full Name -->
      <div class="form-group">
        <label for="name">Full Name *</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name">
        <span class="error-message" id="nameError"></span>
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email">Email Address *</label>
        <input type="email" id="email" name="email" placeholder="Enter your email address">
        <span class="error-message" id="emailError"></span>
      </div>

      <!-- Phone -->
      <div class="form-group">
        <label for="phone">Phone Number *</label>
        <input type="tel" id="phone" name="phone" placeholder="Enter 10-digit phone number">
        <span class="error-message" id="phoneError"></span>
      </div>

      <!-- Date of Birth -->
      <div class="form-group">
        <label for="dob">Date of Birth *</label>
        <input type="date" id="dob" name="dob">
        <span class="error-message" id="dobError"></span>
      </div>

      <!-- Service Type -->
      <div class="form-group">
        <label for="service">Service Type *</label>
        <select id="service" name="service">
          <option value="basic">Basic Package</option>
          <option value="premium">Premium Package</option>
          <option value="enterprise">Enterprise Package</option>
        </select>
      </div>

      <!-- Submit Button -->
      <button type="submit" class="submit-btn" id="submitBtn">Get Quotation</button>
    </form>

    <!-- ============================================
         RESULT DISPLAY
         ============================================ -->

    <div id="result"></div>

    <!-- ============================================
         DATA HANDLING PATHWAYS
         ============================================ -->

    <div class="pathway-options" id="pathwayOptions" style="display: none;">
      <h4>📤 Data Handling Options</h4>
      <div class="pathway-buttons">
        <button class="pathway-btn primary" onclick="sendEmail()">📧 Send via Email</button>
        <button class="pathway-btn" onclick="saveData()">💾 Save Data (Conceptual)</button>
        <a href="#" class="pathway-btn" id="getLink">🔗 Submit via GET</a>
        <button class="pathway-btn" onclick="resetForm()">🔄 Start Over</button>
      </div>
    </div>
  </div>

  <script>
    // ============================================
    // ELEMENT REFERENCES
    // ============================================

    const form = document.getElementById('quoteForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const dobInput = document.getElementById('dob');
    const serviceSelect = document.getElementById('service');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const dobError = document.getElementById('dobError');

    const resultDisplay = document.getElementById('result');
    const pathwayOptions = document.getElementById('pathwayOptions');
    const getLink = document.getElementById('getLink');

    // Store the most recent valid data for pathway options
    let lastValidData = null;

    // ============================================
    // REAL-TIME VALIDATION
    // ============================================

    // Name validation
    nameInput.addEventListener('input', function() {
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
        nameError.textContent = '✅ Looks good!';
        this.classList.remove('input-error');
        this.classList.add('input-success');
      }
    });

    // Email validation
    emailInput.addEventListener('input', function() {
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
        emailError.textContent = '✅ Valid email!';
        this.classList.remove('input-error');
        this.classList.add('input-success');
      }
    });

    // Phone validation
    phoneInput.addEventListener('input', function() {
      const cleaned = this.value.replace(/[\s\-()]/g, '');
      if (this.value.length === 0) {
        phoneError.textContent = '';
        this.classList.remove('input-error', 'input-success');
        return;
      }

      if (!/^\d{10}$/.test(cleaned)) {
        phoneError.textContent = 'Enter a valid 10-digit phone number.';
        this.classList.add('input-error');
        this.classList.remove('input-success');
      } else {
        phoneError.textContent = '✅ Valid phone number!';
        this.classList.remove('input-error');
        this.classList.add('input-success');
      }
    });

    // DOB validation (age check)
    dobInput.addEventListener('change', function() {
      const dob = this.value;
      if (!dob) {
        dobError.textContent = '';
        this.classList.remove('input-error', 'input-success');
        return;
      }

      const birthDate = new Date(dob);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      const dayDiff = today.getDate() - birthDate.getDate();

      // Adjust age if birthday hasn't occurred yet this year
      const finalAge = monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;

      if (finalAge < 18 || finalAge > 100) {
        dobError.textContent = 'Age must be between 18 and 100.';
        this.classList.add('input-error');
        this.classList.remove('input-success');
      } else {
        dobError.textContent = `✅ Age: ${finalAge}`;
        this.classList.remove('input-error');
        this.classList.add('input-success');
      }
    });

    // ============================================
    // FORM SUBMISSION & QUOTATION CALCULATION
    // ============================================

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      // Clear previous results and errors
      resultDisplay.className = '';
      resultDisplay.style.display = 'none';
      clearErrors();

      // Get values
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();
      const dob = dobInput.value;
      const service = serviceSelect.value;

      let valid = true;

      // Validate name
      if (name.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters.';
        nameInput.classList.add('input-error');
        valid = false;
      } else {
        nameInput.classList.remove('input-error');
        nameInput.classList.add('input-success');
      }

      // Validate email
      if (!email || !email.includes('@') || !email.includes('.')) {
        emailError.textContent = 'Enter a valid email address.';
        emailInput.classList.add('input-error');
        valid = false;
      } else {
        emailInput.classList.remove('input-error');
        emailInput.classList.add('input-success');
      }

      // Validate phone
      const cleanedPhone = phone.replace(/[\s\-()]/g, '');
      if (!/^\d{10}$/.test(cleanedPhone)) {
        phoneError.textContent = 'Enter a valid 10-digit phone number.';
        phoneInput.classList.add('input-error');
        valid = false;
      } else {
        phoneInput.classList.remove('input-error');
        phoneInput.classList.add('input-success');
      }

      // Validate DOB and calculate age
      let age = 0;
      if (!dob) {
        dobError.textContent = 'Date of birth is required.';
        dobInput.classList.add('input-error');
        valid = false;
      } else {
        const birthDate = new Date(dob);
        const today = new Date();
        age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();
        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
          age--;
        }

        if (age < 18 || age > 100) {
          dobError.textContent = 'Age must be between 18 and 100.';
          dobInput.classList.add('input-error');
          valid = false;
        } else {
          dobInput.classList.remove('input-error');
          dobInput.classList.add('input-success');
        }
      }

      if (!valid) return;

      // ============================================
      // CALCULATE QUOTATION
      // ============================================

      let basePrice = 0;
      if (service === 'basic') basePrice = 500;
      else if (service === 'premium') basePrice = 1000;
      else if (service === 'enterprise') basePrice = 2000;

      // Apply age-based discount
      let discount = 0;
      if (age < 25) {
        discount = 0.10; // 10% off for young adults
      } else if (age > 60) {
        discount = 0.15; // 15% off for seniors
      }

      const discountAmount = basePrice * discount;
      const finalPrice = basePrice - discountAmount;

      // Store data for pathway options
      lastValidData = { name, email, phone, age, service, basePrice, discount, finalPrice };

      // ============================================
      // DISPLAY RESULT
      // ============================================

      resultDisplay.className = 'success';
      resultDisplay.style.display = 'block';
      resultDisplay.innerHTML = `
        <div class="result-header">✅ Quotation Generated</div>
        <div class="result-details">
          <p><span>Name:</span> ${name}</p>
          <p><span>Email:</span> ${email}</p>
          <p><span>Phone:</span> ${phone}</p>
          <p><span>Age:</span> ${age}</p>
          <p><span>Service:</span> ${service.charAt(0).toUpperCase() + service.slice(1)} Package</p>
          <hr style="margin: 10px 0; border-color: #c3e6cb;">
          <p><span>Base Price:</span> R${basePrice.toFixed(2)}</p>
          <p><span>Discount:</span> ${(discount * 100)}% (R${discountAmount.toFixed(2)})</p>
          <p style="font-size: 1.2rem; font-weight: 700; color: #155724;">
            <span>Total Price:</span> R${finalPrice.toFixed(2)}
          </p>
        </div>
      `;

      // Show pathway options
      pathwayOptions.style.display = 'block';

      // Update GET link
      getLink.href = `quotation-summary.html?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&phone=${encodeURIComponent(phone)}&age=${age}&service=${service}&price=${finalPrice.toFixed(2)}`;
    });

    // ============================================
    // CLEAR ERRORS HELPER
    // ============================================

    function clearErrors() {
      document.querySelectorAll('.error-message').forEach(el => {
        el.textContent = '';
      });
      document.querySelectorAll('input, select').forEach(el => {
        el.classList.remove('input-error', 'input-success');
      });
    }

    // ============================================
    // PATHWAY: SEND EMAIL
    // ============================================

    function sendEmail() {
      if (!lastValidData) {
        alert('Please generate a quotation first.');
        return;
      }

      const { name, email, phone, age, service, finalPrice } = lastValidData;

      // Build email body
      const subject = 'Quotation Request';
      const body = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Age: ${age}
        Service: ${service.charAt(0).toUpperCase() + service.slice(1)} Package
        Estimated Price: R${finalPrice.toFixed(2)}
      `;

      // Open user's email client with pre-filled details
      window.location.href = `mailto:quotes@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }

    // ============================================
    // PATHWAY: SAVE DATA (CONCEPTUAL)
    // ============================================

    function saveData() {
      if (!lastValidData) {
        alert('Please generate a quotation first.');
        return;
      }

      // This is a conceptual example. In a real application, this would send data to a server.
      const { name, email, phone, age, service, finalPrice } = lastValidData;

      // Simulate saving to a database or API
      console.log('📡 Saving data to server...');
      console.log('Data:', { name, email, phone, age, service, finalPrice });

      // Simulated fetch to an API endpoint
      // In production, you would uncomment and use this:
      /*
      fetch('/api/save-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, age, service, finalPrice })
      })
      .then(response => response.json())
      .then(data => {
        console.log('✅ Data saved:', data);
        alert('Quotation saved successfully!');
      })
      .catch(error => {
        console.error('❌ Error saving:', error);
        alert('Error saving quotation. Please try again.');
      });
      */

      // For demonstration, show an alert
      alert(`💾 Data saved (conceptual)\n\nName: ${name}\nEmail: ${email}\nService: ${service}\nPrice: R${finalPrice.toFixed(2)}\n\nIn a real application, this would be sent to a server and stored in a database.`);
    }

    // ============================================
    // PATHWAY: RESET FORM
    // ============================================

    function resetForm() {
      form.reset();
      clearErrors();
      resultDisplay.className = '';
      resultDisplay.style.display = 'none';
      pathwayOptions.style.display = 'none';
      lastValidData = null;
      document.querySelectorAll('input, select').forEach(el => {
        el.classList.remove('input-error', 'input-success');
      });
      // Scroll to top of form
      document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ============================================
    // KEYBOARD ACCESSIBILITY: Enter to submit
    // ============================================

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' && e.target.tagName !== 'BUTTON') {
        const form = document.getElementById('quoteForm');
        if (form && form.contains(e.target)) {
          e.preventDefault();
          form.dispatchEvent(new Event('submit'));
        }
      }
    });

    console.log('✅ Capstone Project loaded successfully!');
    console.log('📝 Built by you, for you. Well done!');
  </script>

</body>
</html>
```

### E. Code Walkthrough

**HTML Structure:**

- The form collects name, email, phone, date of birth, and service type
- Each field has a corresponding error message element
- The result display shows the quotation after validation
- Pathway options appear after quotation generation

**CSS Styling:**

- Clean, modern design with gradient background
- Responsive layout with media query for mobile devices
- Validation states show green (success) and red (error)
- Interactive hover effects on buttons

**JavaScript Behaviour:**

- **Real-time validation** for all fields as the user types
- **Age calculation** from date of birth
- **Quotation calculation** with service-based pricing and age discounts
- **Result display** showing all details and final price
- **Pathway options** for data handling:
  - Email integration (`mailto:`)
  - GET submission (link)
  - Data saving (conceptual)
  - Form reset

### F. Data Handling Pathways Explained

**1. Inline Display (JavaScript)**

The default behaviour: JavaScript processes the data, calculates the quotation, and displays it on the same page. No data is sent to a server.

**2. GET Submission (HTML Form)**

The form can submit data via the `GET` method to `quotation-summary.html`. Data appears in the URL as query parameters:

```
quotation-summary.html?name=Lebo&email=lebo@example.com&phone=0123456789&age=25&service=premium&price=900.00
```

**3. Email Integration (`mailto:`)**

The `sendEmail()` function opens the user's email client with pre-filled subject and body. This demonstrates how to collect data and prepare it for email delivery.

**4. Data Saving (Conceptual)**

The `saveData()` function demonstrates how data could be sent to a server using `fetch()`. In production, this would save to a database or trigger a backend process.

### G. How This Project Prepares You

| Skill | How It's Applied |
|-------|------------------|
| **HTML Forms** | Semantic structure with proper labels and attributes |
| **CSS Styling** | Professional design with responsive layout |
| **DOM Access** | Getting and setting values from input fields |
| **Event Handling** | Real-time validation, form submission, button clicks |
| **Functions** | Reusable logic for validation and calculation |
| **Conditionals** | Age checks, validation rules, discount calculations |
| **Template Literals** | Dynamic HTML generation for results |
| **Async/APIs** | Conceptual data saving with `fetch()` |
| **Accessibility** | Proper labels, focus states, keyboard support |

### H. In-Class Activity: Project Extension

**Goal:** Extend the capstone project with additional features.

**Extension Ideas:**

| Feature | Description |
|---------|-------------|
| **Additional Fields** | Add company name, VAT number, or project description |
| **Multiple Services** | Allow selection of multiple services with combined pricing |
| **Date Selection** | Allow users to select a preferred start date |
| **PDF Generation** | Generate a PDF quotation (using a library) |
| **Local Storage** | Save submitted quotations to `localStorage` |
| **Dark Mode** | Add a dark mode toggle |
| **Export Options** | Allow export as JSON or CSV |

**Example: Adding Local Storage**

```js
function saveToLocalStorage(data) {
  const quotes = JSON.parse(localStorage.getItem('quotes') || '[]');
  quotes.push({ ...data, timestamp: new Date().toISOString() });
  localStorage.setItem('quotes', JSON.stringify(quotes));
  console.log('💾 Saved to localStorage');
}

// Call this in the form submission handler after validation
saveToLocalStorage({ name, email, phone, age, service, finalPrice });
```

### I. Final Reflection

**Before You Submit Your Project**

Take a moment to reflect on your journey through the JavaScript unit:

1. **What was the most surprising thing you learned about JavaScript?**

2. **What was the most challenging concept, and how did you overcome it?**

3. **What part of the capstone project are you most proud of?**

4. **What would you add to the project if you had more time?**

5. **How has your understanding of web development changed?**

### J. Session Summary

| Concept | Key Idea |
|---------|----------|
| Form Validation | Required fields, format checks, age validation |
| Quotation Calculation | Service-based pricing with age discounts |
| Result Display | Dynamic HTML generation with `innerHTML` |
| GET Submission | Form data in URL query parameters |
| Email Integration | `mailto:` with pre-filled subject and body |
| Data Saving | Conceptual `fetch()` POST request |
| Real-time Feedback | Validation as user types |
| Responsive Design | Adapts to different screen sizes |

---

## Resources for Further Study

- [MDN: HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [MDN: Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [MDN: Sending Forms Through JavaScript](https://developer.mozilla.org/en-US/docs/Learn/Forms/Sending_forms_through_JavaScript)
- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN: localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---
