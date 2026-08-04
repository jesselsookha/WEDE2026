# Tables and Forms

Tables and forms are among the most powerful and practical elements in HTML. Tables allow you to present structured data in rows and columns, making complex information easy to scan and understand. Forms enable interaction with users, collecting input and sending it to servers for processing. Together, these elements transform static web pages into dynamic, functional applications.

---

## Session 7: HTML Tables

Tables are used to present tabular data — rows and columns of related information. They should **never** be used for layout or positioning. Using tables for layout creates accessibility barriers, complicates maintenance, and is considered an outdated practice.

### A. Learning Outcome

Create semantic, accessible tables for displaying structured data.

### B. Basic Table Tags

| Tag | Purpose |
|-----|---------|
| `<table>` | Wraps the entire table |
| `<tr>` | Table row |
| `<th>` | Header cell (usually bold and centered by default) |
| `<td>` | Data cell |
| `<caption>` | Describes the table's purpose |
| `<thead>` | Groups header rows |
| `<tbody>` | Groups body rows |
| `<tfoot>` | Groups summary or footer rows |

### C. Example: Semantic Table

```html
<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>R5,000</td>
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>R6,000</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>R11,000</td>
    </tr>
  </tfoot>
</table>
```

### D. Explanation of Key Attributes

The `scope="col"` attribute defines a `<th>` as a column header, indicating that it applies to all cells in that column. The `scope="row"` attribute defines a `<th>` as a row header, indicating that it applies to all cells in that row.

The `<caption>` element should be the first child of `<table>` and is read by screen readers to provide context for the table's content.

### E. Why Semantic Tables Matter

Using `<th>` with proper `scope` is far better for accessibility than using `<td>` for headers. Screen readers announce header information when navigating through table cells, helping users understand the relationship between data points. Without proper headers, tables become confusing or entirely unusable for screen reader users.

The `<thead>`, `<tbody>`, and `<tfoot>` elements also improve accessibility by clearly separating the table's structure. Screen readers can identify and navigate these sections independently.

### F. Common Mistakes to Avoid

Avoid using `<div>` elements to simulate tables. This breaks accessibility and makes maintenance more difficult. Avoid skipping `<th>` elements for headers; data cells are not suitable substitutes. Avoid complex nested tables unless absolutely necessary; they confuse both screen readers and developers.

### G. Hands-On Activity: Table Remediation

**Objective:** Convert this non-semantic "table" into a proper HTML table.

**Original (Non-Semantic):**

```html
<div class="table">
  <div class="row">
    <div class="cell">Product</div>
    <div class="cell">Price</div>
  </div>
  <div class="row">
    <div class="cell">Laptop</div>
    <div class="cell">R999</div>
  </div>
</div>
```

**Semantic Version:**

```html
<table>
  <caption>Product Pricing</caption>
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Laptop</td>
      <td>R999</td>
    </tr>
  </tbody>
</table>
```

### H. Reflection Prompts

1. Why is using `<th>` with proper `scope` better for accessibility than just using `<td>`?
2. Why might screen readers misinterpret data if `<thead>` and `<tbody>` are not used?
3. What problems arise from using tables for page layout instead of CSS?

---

## Session 8: HTML Forms and Inputs

Forms are interactive HTML elements that allow users to input data and send it to a server for processing. Forms power everything from login systems and registration pages to surveys and online shopping carts.

### A. Learning Outcome

Build accessible, user-friendly HTML forms with appropriate input types and validation.

### B. Key Form Tags

| Tag | Purpose |
|-----|---------|
| `<form>` | Wraps the entire form |
| `<input>` | Text fields, checkboxes, radio buttons, and more |
| `<label>` | Describes input fields (linked via `for` + `id`) |
| `<textarea>` | Multi-line text input |
| `<select>` + `<option>` | Dropdown menu |
| `<fieldset>` | Groups related inputs |
| `<legend>` | Title for a `<fieldset>` group |
| `<button>` or `<input type="submit">` | Submits the form |

### C. Basic Form Structure

```html
<form action="/submit" method="POST">
  <fieldset>
    <legend>Contact Information</legend>

    <label for="name">Name:</label>
    <input type="text" id="name" name="name" required>

    <label for="email">Email:</label>
    <input type="email" id="email" name="email" required>
  </fieldset>

  <button type="submit">Submit</button>
</form>
```

### D. `<form>` Attributes Explained

| Attribute | Description |
|-----------|-------------|
| `action` | URL to send the form data to (for example, `/submit` or an external API endpoint) |
| `method` | HTTP method: `GET` (data visible in URL) or `POST` (data hidden, more secure) |
| `autocomplete` | Optional: can be `on` or `off` to enable or disable browser autofill |
| `novalidate` | Optional: disables built-in HTML5 validation |

### E. Types of `<input>`

| `type` value | Use Case | Notes |
|--------------|----------|-------|
| `text` | Short text input | Default input type |
| `email` | Email address | Triggers browser validation |
| `password` | Hidden input | Characters are masked |
| `number` | Numeric input | Can add `min`, `max`, `step` |
| `date` | Date picker | Modern browsers only |
| `checkbox` | Multiple selections | Must have same `name` if grouped |
| `radio` | One selection in a group | Must have same `name` |
| `file` | Upload a file | Requires `enctype="multipart/form-data"` |
| `submit` | Submit button | Can be replaced with `<button>` |

### F. Example: Various Inputs

```html
<form action="/register" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required>

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" minlength="8" required>

  <fieldset>
    <legend>Gender</legend>
    <input type="radio" name="gender" value="male" id="male">
    <label for="male">Male</label>
    <input type="radio" name="gender" value="female" id="female">
    <label for="female">Female</label>
  </fieldset>

  <fieldset>
    <legend>Choose Your Interests</legend>
    <input type="checkbox" name="interests" value="coding" id="coding">
    <label for="coding">Coding</label>
    <input type="checkbox" name="interests" value="music" id="music">
    <label for="music">Music</label>
  </fieldset>

  <label for="bio">Bio:</label>
  <textarea id="bio" name="bio" rows="4" cols="50"></textarea>

  <label for="country">Country:</label>
  <select id="country" name="country">
    <option value="za">South Africa</option>
    <option value="uk">United Kingdom</option>
    <option value="us">United States</option>
  </select>

  <button type="submit">Register</button>
</form>
```

### G. HTML5 Validation Attributes

| Attribute | Purpose |
|-----------|---------|
| `required` | Field must be filled before submission |
| `min` / `max` | Sets numeric or date limits |
| `minlength` / `maxlength` | Sets character limits |
| `pattern` | RegEx validation for complex patterns |
| `placeholder` | Shows hint text (not a substitute for a label!) |

### H. Password Field with Validation

```html
<label for="pwd">Password:</label>
<input 
  type="password" 
  id="pwd" 
  name="pwd" 
  minlength="8" 
  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
  required
  aria-describedby="pwd-help">
<small id="pwd-help">
  Must be at least 8 characters, with at least one uppercase letter, one lowercase letter, and one number.
</small>
```

The `aria-describedby` attribute links the help text to the input field, ensuring screen reader users hear the validation requirements.

### I. How Forms Process Data

When the submit button is clicked, the form checks for client-side validation. If valid, the data is sent to the server defined in the `action` attribute.

- With `method="GET"`, data appears in the URL as query parameters (`?name=value&email=value`). This is appropriate for search forms and bookmarkable pages.
- With `method="POST"`, data is sent behind the scenes in the request body. This is required for login, registration, and any form that handles sensitive information.

The server receives the data and can store it in a database, send an email, process a payment, or return a success or failure page.

### J. Hands-On Activities

**Activity 1: Form Accessibility Audit**

Analyze a live form for accessibility issues.

1. Visit a real website (such as a university or bank login page).
2. Check the following:
   - Do labels exist for each input?
   - Are `for` and `id` used correctly?
   - Is `aria-describedby` used for hints?
   - Are form fields using the correct input types?
3. List three things done well and three things to improve.

**Activity 2: Build a Registration Form**

Create a complete registration form that includes:
- Full name (text input, required)
- Email address (email input, required)
- Password (password input, with validation attributes)
- Date of birth (date input)
- Country (dropdown select)
- Gender (radio buttons)
- Interests (checkboxes)
- Terms and conditions (checkbox, required)
- Submit button

Ensure all labels are correctly associated with their inputs.

### K. The Importance of `<label>`

A `<label>` is not just a visual convenience; it is an accessibility requirement. When a label is correctly associated with an input using the `for` and `id` attributes, clicking the label focuses the input. Screen readers announce the label when the input is selected.

A `placeholder` attribute is not a substitute for a `<label>`. Placeholders disappear when users start typing, leaving screen reader users without context. Always use `<label>` for every form input.

### L. Legal and Practical Importance

**Accessibility:** WCAG 2.1 requires label associations for all form inputs. Forms without proper labels fail accessibility audits and may violate legal requirements.

**Security:** The `POST` method prevents sensitive information — such as passwords and personally identifiable information — from being exposed in URLs.

**Data Collection:** Forms power everything from login systems to surveys to online shopping carts. Understanding forms is essential for building interactive web applications.

### M. Quick Reference Summary

| Tag | Purpose |
|-----|---------|
| `<form>` | Wraps the form and defines submission behaviour |
| `<input>` | Collects user data in various formats |
| `<label>` | Describes the input and improves accessibility |
| `<select>` / `<option>` | Dropdown menu |
| `<textarea>` | Multi-line text input |
| `<button>` | Triggers form submission |
| `<fieldset>` | Groups related inputs |
| `<legend>` | Titles a fieldset group |

### N. Reflection Prompts

1. What is the difference between a `<label>` and a `placeholder`?
2. When would you use `POST` instead of `GET` for form submission?
3. Why should you always include `alt`, `aria`, and `required` attributes where appropriate?
4. How does proper form structure benefit users with disabilities?

### O. Resources for Further Study

- [MDN Web Docs: HTML Forms](https://developer.mozilla.org/en-US/docs/Learn/Forms)
- [WebAIM Form Accessibility Guide](https://webaim.org/techniques/forms/)
- [HTML Tables Tutorial (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/table)
- [W3C Web Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)

---
