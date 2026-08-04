# Best Practices and Standards Compliance

As web technologies evolve, some HTML tags become outdated and are replaced by more modern, accessible alternatives. Understanding which tags to avoid, why they were deprecated, and how to write standards-compliant code is essential for professional web development. This document explores deprecated tags, the evolution from HTML4 to HTML5, and the importance of validation and browser consistency.

---

## Session 9: Deprecated Tags and HTML4 versus HTML5

As web technologies evolve, some HTML tags have become **deprecated** — meaning they are no longer supported in current standards. These tags may still work in some browsers, but they are considered outdated, inaccessible, and bad practice for modern web development.

### A. Learning Outcome

Identify deprecated HTML tags, understand why they were phased out, and replace them with semantic HTML and CSS.

### B. What Are Deprecated Tags?

A **deprecated** tag is one that has been removed from modern HTML specifications. While browsers may still support it for backward compatibility, its use is discouraged. Deprecated tags often:

- Mix structure with styling (violating separation of concerns)
- Break accessibility for screen readers and assistive technologies
- Fail to work properly on mobile devices
- Create maintenance challenges for developers

**Why Are Tags Deprecated?**

Consider this outdated code:

```html
<font color="blue">Welcome to My Website</font>
```

This mixes content with styling. The `<font>` tag is a **deprecated** tag used to change text colour and font directly in HTML. Modern best practices move these styles to CSS, separating content from design.

```html
<p class="welcome-text">Welcome to My Website</p>
```

```css
.welcome-text {
  color: blue;
}
```

### C. HTML4 versus HTML5: A Brief History

HTML has evolved significantly over time. Understanding this evolution helps explain why certain tags are deprecated.

**HTML4** was released in 1999. It contained many tags that controlled styling directly, such as `<font>`, `<center>`, and `<marquee>`. HTML4 also relied heavily on presentational attributes like `bgcolor` and `align`. The approach at the time was to mix content and presentation within the same document.

**HTML5** is the current standard. It emphasises **separation of concerns** — structure (HTML), style (CSS), and behaviour (JavaScript) should be kept separate. HTML5 introduced semantic tags that describe the meaning of content, not just its appearance. It also prioritises accessibility and mobile responsiveness.

**Why Some Tags Survived While Others Disappeared**

Consider `<font>` versus `<strong>`. The `<font>` tag controls appearance only — it has no semantic meaning. The `<strong>` tag conveys meaning and emphasis, which can be understood by screen readers. Semantic tags stay; visual-only tags are deprecated.

### D. From Old to Modern: Common Replacements

| Deprecated Tag | Problem | Use Instead |
|----------------|---------|-------------|
| `<center>` | Purely visual, no meaning | `text-align: center` in CSS |
| `<font>` | Messy inline styling | CSS `color`, `font-family`, etc. |
| `<frameset>` | Does not work on mobile, breaks UX | `<iframe>` or responsive layouts |
| `<marquee>` | Distracting, unreadable, inaccessible | CSS animations or JavaScript |
| `<tt>` | Old teletype styling | `<code>` or `font-family: monospace` in CSS |
| `<blink>` | Distracting, inaccessible | CSS animations (if necessary) |

### E. Code Autopsy: Before and After

**Old Way (Deprecated):**

```html
<center>
  <font color="green" size="5">Hello!</font>
</center>
```

**New Way (Modern):**

```html
<h1 class="greeting">Hello!</h1>
```

```css
.greeting {
  color: green;
  font-size: 2rem;
  text-align: center;
}
```

### F. How Deprecated Tags Affect Accessibility

Assistive technologies, such as screen readers, depend on **semantic tags** to interpret and present content. Using `<font>` or `<center>` offers no meaning to those users. By contrast, tags like `<strong>`, `<section>`, and `<header>` help users understand content structure and navigate efficiently.

Deprecated tags like `<blink>`, `<marquee>`, and `<frameset>` can:
- Create unusable layouts for screen readers
- Violate WCAG accessibility guidelines
- Even cause health issues with flashing content

### G. Real-World Consequences

**SEO Problems:** Deprecated tags like `<marquee>` may be ignored by search engines. Poor structure or mobile incompatibility can lower page rankings.

**Accessibility Risks:** Using non-semantic or deprecated tags can make content completely inaccessible to users with disabilities. This is not only unethical but may also violate legal requirements in many jurisdictions.

### H. Hands-On Activities

**Activity 1: Fix the Zombie Code**

**Task:** You are working on an old website. You find the following code:

```html
<marquee>Latest News: Site Under Construction</marquee>
```

**Question:** Why is this a problem, and how would you modernize it?

**Solution:**

The `<marquee>` tag creates a scrolling effect but has zero accessibility, causes distraction, and is deprecated. Replace it with a CSS animation.

```html
<p class="news-banner">Latest News: Site Under Construction</p>
```

```css
.news-banner {
  animation: scroll-left 8s linear infinite;
  white-space: nowrap;
  display: inline-block;
}

@keyframes scroll-left {
  from { transform: translateX(100%); }
  to   { transform: translateX(-100%); }
}
```

**Activity 2: Accessibility Test**

**Task:** You are reviewing two similar HTML snippets:

```html
<b>Breaking News</b>
```

versus

```html
<strong>Breaking News</strong>
```

**Question:** Which one should you use and why?

**Solution:**

Use `<strong>`. While both tags display bold text, `<b>` is presentational only, while `<strong>` is semantic, telling screen readers the text is important.

### I. Tool Tip

Use the [W3C Validator](https://validator.w3.org/) to test for deprecated tags and invalid HTML. This is a quick and reliable way to catch problems before they cause issues.

### J. Summary

| Concept | Takeaway |
|---------|----------|
| Deprecated Tags | Removed from standards; do not use them |
| Semantic HTML | Use tags that describe the purpose of content |
| Style with CSS | Keep HTML clean and focused on structure |
| Accessibility Matters | Semantic tags improve screen reader experiences |
| Validation is Key | Use tools to check for outdated or broken HTML |

### K. Reflection Questions

1. What is the difference between deprecated and semantic HTML?
2. How can outdated tags harm a modern website?
3. How does using CSS improve maintainability compared to using presentational HTML tags?
4. Why did some tags survive the transition from HTML4 to HTML5 while others were deprecated?

---

## Session 10: Standards Compliance and Browser Consistency

Have you ever noticed that your webpage looks perfect in one browser but completely broken in another? That is often due to invalid HTML or missing crucial elements like `<!DOCTYPE html>`. This session shows why standards compliance matters, how different browsers interpret bad code, and how to ensure consistent behaviour.

### A. Learning Outcome

Understand the importance of standards compliance, the difference between standards mode and quirks mode, and how to use validation tools to write clean HTML.

### B. Standards Mode Versus Quirks Mode

**What happens if I forget to include `<!DOCTYPE html>` at the top of my HTML file?**

Without a doctype, your browser falls into **quirks mode** — a backward-compatibility setting that mimics old browser bugs, particularly from Internet Explorer. In quirks mode:

- Padding and borders behave incorrectly
- CSS layouts may break
- Your site may render differently in each browser

**Real Example: The Box Model Problem**

Consider this `<div>` styled with CSS:

```css
div {
  width: 100px;
  padding: 20px;
  border: 2px solid black;
}
```

**With `<!DOCTYPE html>` (Standards Mode):**

The total width equals 100 (content) plus 20+20 (padding) plus 2+2 (border) = **144px**.

**Without DOCTYPE (Quirks Mode):**

The browser tries to fit everything into the 100px width. The padding and border squeeze the content, resulting in a box that is smaller and inconsistent across browsers.

### C. Common HTML Errors and What They Break

Even small mistakes in HTML can lead to significant problems.

| Error | What the Browser Does | Risk |
|-------|-----------------------|------|
| Missing `</li>` | Browser guesses where to close | Messed-up lists |
| Unquoted attribute: `alt=cat photo` | Might be accepted unless there is a space | Image fails to load |
| Duplicate IDs | JavaScript and CSS only affects the first match | Buttons or scripts stop working |
| Bad nesting: `<p><div>` | Breaks document structure | Screen readers get confused |

### D. What Does It Mean When the Browser "Fixes" My HTML?

Browsers try to repair broken HTML to display something usable. But each browser — Chrome, Firefox, Safari — guesses differently, leading to inconsistent layouts and unpredictable bugs.

Consider this invalid code:

```html
<p><strong>Hello<span>World</p></strong></span>
```

The tags are not properly closed or nested. Chrome might close the `<p>` early, Firefox might treat `<span>` as outside `<strong>`, and Edge may interpret it entirely differently.

This is why **validation matters**. Writing valid HTML ensures consistent behaviour across all browsers.

### E. Hands-On Activity: Cross-Browser Behaviour

**Task:** Paste the following broken code into a new HTML file:

```html
<p><strong>Hello<span>World</p></strong></span>
```

1. Open the file in Chrome, Firefox, and Edge.
2. Right-click and select **Inspect Element**.
3. Look at how each browser fixes the structure in the Elements tab.
4. Fix the nesting yourself to see how it should look:

```html
<p><strong>Hello <span>World</span></strong></p>
```

**Takeaway:** Invalid HTML might seem "fine" at first but can behave unpredictably across platforms.

### F. Validating Your HTML

Use these tools to catch problems early.

| Tool | What It Does |
|------|--------------|
| [W3C Validator](https://validator.w3.org/) | Checks for invalid or deprecated HTML |
| [Can I Use](https://caniuse.com/) | Verifies browser support for HTML and CSS features |
| [BrowserStack](https://www.browserstack.com/) | Allows testing on real devices and browsers |
| `html-validate` (npm) | Adds HTML validation to your build process |

### G. Real-World Relevance

**Technical Debt and Maintenance Costs**

Every unclosed tag or syntax shortcut might save you two seconds today but cost you two hours when your layout suddenly breaks in Safari. A 2023 developer report showed that development teams spend approximately 19% of their time debugging layout bugs caused by inconsistent HTML structure.

**Accessibility Risks**

Screen readers and assistive technologies depend on proper structure. Poorly written HTML can:
- Skip over content entirely
- Misread table rows or lists
- Confuse headings and navigation

```html
<p><div>This is not okay</div></p>  <!-- Invalid -->
```

Correct structure:

```html
<p>This is okay.</p>
<div>This is okay too.</div>
```

### H. The Box Model in Standards Mode

In standards mode, the CSS box model works as intended:

- `width` applies to the content area only
- `padding` and `border` are added on top of the width
- `margin` is applied outside the border

In quirks mode, browsers use an older box model where `width` includes `padding` and `border`. This causes layouts to behave differently across browsers and is one of the most common sources of frustration for developers.

### I. Hands-On Activity: DOCTYPE Detective

**Task:** Create two HTML files. In both, include the following in the body:

```html
<div>This box should look the same</div>
```

Add this CSS:

```css
div {
  width: 200px;
  padding: 50px;
  background: lightgray;
}
```

- In File A, include `<!DOCTYPE html>` at the top.
- In File B, leave it out.

**What to Observe:**
- The box will look normal in File A (standards mode).
- The box will appear shrunk or broken in File B (quirks mode).

### J. Final Check: What You Should Know

Ask yourself, or discuss with a peer:

1. What does `<!DOCTYPE html>` do?
2. What is the difference between standards mode and quirks mode?
3. Why is it risky to rely on browsers "fixing" your mistakes?
4. How do validation tools help professional developers?
5. What is the CSS box model, and how does it behave differently in standards versus quirks mode?

### K. Summary

| Concept | Key Idea |
|---------|----------|
| DOCTYPE | Enables standards mode and consistent behaviour |
| Standards Mode | Correct CSS box model and modern rendering |
| Quirks Mode | Backward compatibility with old browsers |
| Validation | Catches errors before they cause problems |
| Cross-Browser Testing | Ensures consistent behaviour across browsers |

### L. Resources for Further Study

- [W3C HTML Validator](https://validator.w3.org/)
- [MDN: Quirks Mode versus Standards Mode](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
- [Web.dev – Learn HTML](https://web.dev/learn/html/)
- [Can I Use](https://caniuse.com/)

---