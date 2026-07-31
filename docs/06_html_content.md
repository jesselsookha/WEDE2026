# HTML Content Tags

Now that you understand the foundational structure of an HTML document, the purpose of attributes, and the natural flow of content, it is time to explore the tags you will use most frequently. This document introduces headings, paragraphs, lists, images, links, and semantic text tags — the building blocks of almost every webpage.

---

## Session 4: Headings and Paragraphs

Learning how to organize content using semantic HTML tags that structure text properly is essential for producing web pages that are accessible, search-engine-friendly, and readable. This session focuses on headings and paragraphs — the most fundamental content elements.

### A. Learning Outcome

Understand how to use headings to create a clear content hierarchy and how to structure text into readable paragraphs.

### B. What Are Headings?

HTML provides six heading tags: `<h1>` through `<h6>`. The `<h1>` tag is the most important heading, typically used for the main title of the page. The `<h6>` tag is the least important, used for sub-sub-sub-sections.

**Example:**

```html
<h1>Welcome to My Website</h1>
<h2>About Me</h2>
<h3>Hobbies</h3>
<h2>Projects</h2>
```

In this example, `<h1>` serves as the main page title. The `<h2>` tags introduce major sections ("About Me" and "Projects"), while `<h3>` introduces a sub-section ("Hobbies") within a major section.

**Rule of Thumb:** Do not skip heading levels. An `<h3>` should follow an `<h2>`, not jump from `<h1>` to `<h4>`. Screen readers and search engines rely on this hierarchy to understand the structure of your content.

### C. Paragraphs with `<p>`

Use the `<p>` tag to group sentences into readable chunks.

```html
<p>HTML is a markup language used to create web pages. It provides structure to content and enables browsers to render text, images, and other media.</p>
```

Paragraphs break text into digestible blocks, improving both readability and accessibility. A screen reader announces each paragraph as a distinct unit, helping users navigate through content.

### D. Line Breaks with `<br>`

The `<br>` tag forces a line break within a paragraph. It is useful for addresses, poetry, or any content where line breaks are semantically meaningful.

```html
<p>123 Green Street<br>London, UK<br>W1A 1AA</p>
```

Do not use `<br>` to create spacing between paragraphs. That is a job for CSS.

### E. Reflection Prompt

Why should we avoid jumping from `<h1>` to `<h4>`? Consider how a screen reader or a search engine might interpret your content structure.

### F. Full Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Content Tags Example</title>
</head>
<body>
  <h1>My Personal Blog</h1>
  
  <h2>About This Blog</h2>
  <p>Welcome to my personal blog where I share thoughts on web development, design, and technology.</p>
  
  <h2>Recent Posts</h2>
  <h3>Learning HTML</h3>
  <p>HTML is the foundation of every webpage. It provides structure and meaning to content.</p>
  
  <h3>Understanding CSS</h3>
  <p>CSS brings style to our web pages, controlling layout, colours, and typography.</p>
  
  <p>123 Web Street<br>Digital City, DC 12345</p>
</body>
</html>
```

---

## Session 5: Lists, Images, and Links

Lists, images, and links are essential elements that make websites navigable, understandable, and visually rich. When used semantically and accessibly, they significantly enhance the user experience.

### A. Learning Outcome

Understand how to organize content using lists, embed meaningful and accessible images, and create links that support navigation and user interaction.

### B. HTML Lists

Lists help group related items in a logical, scannable format, aiding screen readers and users alike. HTML offers three types of lists.

| Type | Tags Used | Purpose |
|------|-----------|---------|
| Unordered | `<ul>` + `<li>` | Non-sequential items |
| Ordered | `<ol>` + `<li>` | Steps, rankings, instructions |
| Definition | `<dl>`, `<dt>`, `<dd>` | Pairs of terms and their descriptions |

**Unordered List (`<ul>`)**

```html
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
```

Use unordered lists for site navigation, checklists, and feature lists where order does not matter.

**Ordered List (`<ol>`)**

```html
<ol>
  <li>Boil water</li>
  <li>Add pasta</li>
  <li>Cook for 10 minutes</li>
</ol>
```

Use ordered lists for instructions, recipes, rankings, and any content where sequence matters.

**Definition List (`<dl>`)**

```html
<dl>
  <dt>HTML</dt>
  <dd>HyperText Markup Language</dd>
  <dt>CSS</dt>
  <dd>Cascading Style Sheets</dd>
</dl>
```

Use definition lists for glossaries, FAQs, and term definitions.

**Accessibility Note:** Use `aria-label` when the list's purpose is not obvious from the surrounding content.

```html
<ul aria-label="Site Navigation">
  <li><a href="/">Home</a></li>
  <li><a href="/about">About</a></li>
</ul>
```

### C. Embedding Images

The `<img>` tag embeds images into your webpage.

**Basic Syntax:**

```html
<img src="photo.jpg" alt="A smiling child holding a balloon">
```

| Attribute | Purpose |
|-----------|---------|
| `src` | Path to the image file |
| `alt` | Description for screen readers and fallback text |
| `width` / `height` | Set image dimensions |
| `loading="lazy"` | Improve performance by delaying loading of offscreen images |

**Example with Additional Attributes:**

```html
<img 
  src="eco-logo.png" 
  alt="EcoPlanet logo: a green leaf with text"
  width="200" 
  height="100" 
  loading="lazy" 
  decoding="async">
```

**Common Mistakes to Avoid:**

- Using `alt="image"` — this is not descriptive enough.
- Using `alt=""` for decorative images is correct; it tells screen readers to skip the image.
- Omitting the `alt` attribute entirely — this fails accessibility audits.

**Image with Caption:**

```html
<figure>
  <img src="sunset.jpg" alt="Sunset over a mountain lake">
  <figcaption>Photo by Jane Doe</figcaption>
</figure>
```

The `<figure>` element groups the image and its caption, while `<figcaption>` provides a description that is semantically linked to the image.

### D. Creating Links with `<a>`

The `<a>` (anchor) tag creates hyperlinks.

**Basic Syntax:**

```html
<a href="https://example.com">Visit Our Site</a>
```

| Attribute | Purpose |
|-----------|---------|
| `href` | Destination of the link |
| `target="_blank"` | Opens in a new tab |
| `rel="noopener noreferrer"` | Prevents security risks with new tab links |
| `aria-label` | Improves accessibility when link text is vague |

**Example with Security and Accessibility:**

```html
<a 
  href="https://example.com" 
  target="_blank" 
  rel="noopener noreferrer"
  aria-label="Visit Example.com (opens in new tab)">
  Learn More
</a>
```

**Internal Versus External Links:**

| Type | Example | Use Case |
|------|---------|----------|
| Internal | `<a href="/about">About</a>` | Navigating within your site |
| External | `<a href="https://github.com">GitHub</a>` | Linking to other sites |
| Anchor | `<a href="#section2">Jump to Section 2</a>` | In-page navigation |

### E. Real-World Examples

**Navigation Menu**

```html
<nav aria-label="Main menu">
  <ul>
    <li><a href="/" aria-current="page">Home</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
</nav>
```

In this example, `aria-label` describes the navigation's purpose, while `aria-current="page"` indicates the current page for screen readers.

**Image Gallery Card**

```html
<figure>
  <img 
    src="gallery/beach.jpg" 
    alt="Waves crashing on a rocky shore"
    width="600" 
    height="400"
    loading="lazy">
  <figcaption>Summer 2025 — Portugal Coast</figcaption>
</figure>
```

### F. Hands-On Activities

**Activity 1: List Lab**

Create a nested list with proper structure and semantic tags.

1. Create an unordered list of three countries.
2. For each country, nest an ordered list of two cities.

**Expected Output:**

```html
<ul>
  <li>Italy
    <ol>
      <li>Rome</li>
      <li>Venice</li>
    </ol>
  </li>
  <li>Japan
    <ol>
      <li>Tokyo</li>
      <li>Kyoto</li>
    </ol>
  </li>
</ul>
```

**Activity 2: Image and Link Audit**

Choose a news or e-commerce website. Identify three images and evaluate their `alt` text. Is it descriptive? Is it too long or vague? Then examine links that open in new tabs. Do they use `rel="noopener noreferrer"`? Is there an `aria-label` if the link text is ambiguous (such as "Click here")?

### G. Reflection Prompts

1. Why is `<ul>` better than using multiple `<br>` tags for bullet points?
2. What happens if you do not include `alt` text for an image?
3. What is the difference between an internal and external link — and why does it matter?

### H. Quick Reference Summary

| Tag | Purpose | Notes |
|-----|---------|-------|
| `<ul>` / `<ol>` | Lists of items | Use `<li>` inside |
| `<dl>` | Definitions list | Use with `<dt>` + `<dd>` |
| `<img>` | Embed images | Always add `alt`; use `loading="lazy"` |
| `<a>` | Create a hyperlink | Use `href`, `target`, `rel`, `aria-label` |

### I. Professional and Legal Relevance

**SEO Impacts:** Images with meaningful `alt` text rank better in Google Image Search. Internal linking improves site structure and crawlability.

**Accessibility Requirements:** WCAG 2.1 requires `alt` for all meaningful images. Inaccessible links and missing image descriptions can lead to legal liability under accessibility laws.

---

## Session 6: Inline Emphasis and Semantic Text Tags

Semantic HTML means using tags that convey meaning about the content, not just how it looks. This session explores inline text tags that add emphasis, importance, and meaning to your content.

### A. Learning Outcome

Understand the difference between presentational tags (like `<b>` and `<i>`) and semantic tags (like `<strong>` and `<em>`), and use them appropriately.

### B. The Difference Between Semantic and Presentational Tags

Semantic tags convey meaning. They tell browsers, screen readers, and search engines *why* the text is formatted in a particular way. Presentational tags only convey appearance.

| Semantic Tag | Meaning | Presentational Equivalent | Appearance |
|--------------|---------|---------------------------|------------|
| `<strong>` | Important content | `<b>` | Bold |
| `<em>` | Emphasis | `<i>` | Italic |

### C. `<strong>` Versus `<b>`

The `<strong>` tag indicates that the enclosed text is important. Screen readers emphasize it vocally, and search engines may give it additional weight.

The `<b>` tag only makes text visually bold. It carries no semantic meaning.

```html
<p><strong>Warning:</strong> Do not share your password.</p>
<p>This <b>model</b> is available in stores.</p>
```

Use `<strong>` when the text has genuine importance. Use `<b>` only when you need bold text for purely stylistic reasons.

### D. `<em>` Versus `<i>`

The `<em>` tag indicates emphasis. It changes the meaning of the sentence. Screen readers emphasize it vocally.

The `<i>` tag only makes text visually italic. It carries no semantic meaning.

```html
<p>I <em>really</em> like coding.</p>
<p>The word "fiancé" is italicized for language style: <i>fiancé</i></p>
```

Use `<em>` when the emphasis changes meaning. Use `<i>` for foreign words, technical terms, or stylistic italicization.

### E. Other Semantic Inline Tags

| Tag | Use Case | Example |
|-----|----------|---------|
| `<q>` | Short, inline quote | `<p>He said, <q>Hello</q>.</p>` |
| `<cite>` | Titles of books, movies, works | `<cite>The Great Gatsby</cite>` |
| `<code>` | Inline code | `<code>console.log()</code>` |
| `<span>` | Generic container | Use for grouping text when no semantic tag fits |

### F. Block Quotes and Preformatted Text

**Block Quotes (`<blockquote>`)**

The `<blockquote>` tag is used for long, multi-line quotations from external sources.

```html
<blockquote cite="https://www.example.com">
  <p>"Accessibility is essential for developers who care about quality."</p>
</blockquote>
```

The `cite` attribute is optional but recommended. It references the source of the quotation. Screen readers may announce this as a quotation.

**Preformatted Text (`<pre>`)**

The `<pre>` tag preserves spacing and line breaks exactly as they appear in the code.

```html
<pre>
function greet() {
  console.log("Hello!");
}
</pre>
```

Use `<code>` for inline code and `<pre>` for blocks of code or ASCII diagrams.

### G. Full Example

```html
<p><strong>Important:</strong> Always write semantic HTML. <em>Not</em> just visual HTML.</p>
<p>Use <code>&lt;strong&gt;</code> and <code>&lt;em&gt;</code> for meaning, not just <code>&lt;b&gt;</code> or <code>&lt;i&gt;</code>.</p>
```

### H. Real-World Article Example

```html
<article>
  <h1>What Is Semantic HTML?</h1>
  <p>Semantic HTML helps browsers and screen readers understand your content.</p>

  <section>
    <h2>Importance</h2>
    <blockquote>
      <p>"Good semantics is good accessibility."</p>
      <footer>— <cite>WebAIM</cite></footer>
    </blockquote>
  </section>
</article>
```

### I. Hands-On Activities

**Activity 1: Headings Audit**

1. Open a Wikipedia article.
2. Right-click and select Inspect, then go to the Elements tab.
3. Search for heading tags `<h1>` through `<h6>`.
4. Use the Accessibility Tree to see how screen readers perceive the structure.

**Questions to Reflect On:**
- Does the article use a single `<h1>`?
- Are headings nested properly?

**Activity 2: Semantic Markup Challenge**

You are given this old-style, non-semantic HTML:

```html
<div>  
  <font size="+2">About Us</font><br><br>  
  Our company was <i>founded in 2010</i>.  
  <div>"We prioritize quality," says the CEO.</div>  
</div>
```

**Instructions:**
Convert this into semantic HTML using appropriate headings, emphasis, and blockquote elements.

**Example Solution:**

```html
<section>
  <h2>About Us</h2>
  <p>Our company was <em>founded in 2010</em>.</p>
  <blockquote>
    <p>"We prioritize quality," says the CEO.</p>
  </blockquote>
</section>
```

### J. Reflection Prompts

1. Why is using `<em>` more accessible than using `<i>`?
2. How does proper heading order benefit both users and search engines?
3. Why might a `<blockquote>` be more than just a stylistic decision?

### K. Summary Table

| Concept | Key Idea |
|---------|----------|
| Semantic HTML | Use tags that describe the purpose of content |
| Headings | Create a clear hierarchy from `<h1>` to `<h6>` |
| Paragraphs | Group related sentences into readable chunks |
| Lists | Organize related items logically |
| Images | Always include meaningful `alt` text |
| Links | Use descriptive link text and appropriate attributes |
| Emphasis | Use `<strong>` and `<em>` for meaning, not just style |

---