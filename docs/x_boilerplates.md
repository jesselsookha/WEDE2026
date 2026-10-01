# Boilerplates: Your Starter Kit for Every Project

Think of a boilerplate as a form you fill in. It's not a rulebook, it's not homework, and it's not something you have to memorise. It's the scaffolding you keep within arm's reach so you don't have to rebuild the boring parts every time you start something new.

Every web project — a landing page, a portfolio, a contact form, a small app — needs the *same* handful of setup pieces before you can start building. A doctype. A character encoding. A viewport tag. A link to your CSS. A script tag. These aren't exciting, but if you forget one, the whole page can fall apart in strange, hard-to-debug ways. So instead of trying to remember them all from scratch, you keep a boilerplate: a clean, ready-to-fill template that already has the essentials in place.

Come back to this document whenever you need to. Before a new project. Halfway through one when something has broken and you're not sure why. Or just when you've forgotten which meta tag does what. Nothing here is meant to be read once and memorised — it's meant to be kept.

---

## How to use this document

There are three files described below — `index.html`, `styles.css`, and `script.js`. Each one is presented in full, so you can copy and paste it directly into your project without needing to hunt for anything.

Inside the HTML file in particular, you'll see sections marked like this:

```html
<!-- [OPTIONAL] Favicons -->
...
<!-- [/OPTIONAL] -->
```

Anything inside `[OPTIONAL]` brackets is genuinely optional. You can leave it out, delete it, or leave it in — it won't break anything. It's there so you know that *if you ever need it*, this is where it would go, and this is what it looks like. The unmarked parts are the pieces you should keep.

Everything else in this document is the *why* behind the *what*. Skim it now, come back to it later. Use it however suits you.

---

## File names and extensions

Before we look at the code, a quick note on naming. Keep these habits and you'll save yourself a lot of grief:

- **Use lowercase.** `index.html`, not `Index.html` or `INDEX.HTML`. Some servers are case-sensitive and will fail silently if the case doesn't match.
- **No spaces in file names.** If you need a multi-word name, use a hyphen: `contact-form.html`, not `contact form.html`. Spaces confuse browsers and servers.
- **Extensions matter.** `.html` for pages, `.css` for stylesheets, `.js` for scripts. Don't skip them or mix them up.
- **`index.html` is special.** When someone visits your folder, the server automatically looks for a file called `index.html` first. That's why the homepage of nearly every site you've ever visited is called exactly that.

You can name your other files whatever makes sense to you — `about.html`, `contact.html`, `projects.html` — as long as you follow the rules above. For this document, we're using the three standard names: `index.html`, `styles.css`, `script.js`.

---

## The HTML boilerplate

Here's the full `index.html`. Read it top to bottom once, then we'll walk through what each part is doing.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>Page Title — Site Name</title>

  <meta name="description" content="A short, unique description of this page.">

  <link rel="stylesheet" href="styles.css">

  <!-- [OPTIONAL] Print stylesheet — only loads when the page is printed -->
  <link rel="stylesheet" href="print.css" media="print">
  <!-- [/OPTIONAL] -->

  <!-- [OPTIONAL] Favicons — the little icon in the browser tab -->
  <link rel="icon" href="favicon.ico">
  <link rel="icon" href="favicon.svg" type="image/svg+xml">
  <link rel="apple-touch-icon" href="apple-touch-icon.png">
  <!-- [/OPTIONAL] -->

  <!-- [OPTIONAL] Social sharing preview (Open Graph + Twitter) -->
  <meta property="og:title" content="Page Title — Site Name">
  <meta property="og:description" content="A short, unique description of this page.">
  <meta property="og:image" content="https://example.com/preview.jpg">
  <meta property="og:image:alt" content="Description of the preview image.">
  <meta property="og:url" content="https://example.com/page">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="en_GB">
  <meta name="twitter:card" content="summary_large_image">
  <!-- [/OPTIONAL] -->

  <!-- [OPTIONAL] Theme colour for mobile browser UI -->
  <meta name="theme-color" content="#ffffff">
  <!-- [/OPTIONAL] -->

  <link rel="canonical" href="https://example.com/page">

  <!-- [OPTIONAL] Web app manifest (for installable / Android support) -->
  <link rel="manifest" href="site.webmanifest">
  <!-- [/OPTIONAL] -->
</head>

<body>

  <header>
    <!-- Site title, logo, and main navigation go here -->
  </header>

  <main>
    <!-- The main content of this page goes here -->
  </main>

  <footer>
    <!-- Copyright, contact links, small print go here -->
  </footer>

  <!-- [OPTIONAL] JavaScript — defer means: wait until the HTML is parsed,
       then run this file. Keeps the page from freezing while it loads. -->
  <script src="script.js" defer></script>
  <!-- [/OPTIONAL] -->

</body>
</html>
```

### Walking through it

**`<!DOCTYPE html>`** — This tells the browser "this is modern HTML, please treat it that way." It's not technically an HTML tag — it's an instruction. Leave it as the very first line of every page. If you forget it, browsers fall into "quirks mode" and render things unpredictably.

**`<html lang="en">`** — The root of the page. `lang="en"` says the page is written in English. Change it if you're writing in another language (`lang="af"` for Afrikaans, `lang="zu"` for isiZulu, `lang="fr"` for French, and so on). This matters for screen readers and search engines.

**`<head>`** — Everything in here is *information about the page*, not the page itself. The title, the description, links to stylesheets, meta instructions. None of it is visible to the user directly.

**`<meta charset="UTF-8">`** — Sets the character encoding. UTF-8 handles every character you're likely to need — accented letters, emoji, symbols, non-Latin scripts. Without it, some browsers guess wrong and show garbled text. It must appear before `<title>`.

**`<meta name="viewport" content="width=device-width, initial-scale=1">`** — Tells mobile browsers to render the page at the actual screen width rather than pretending it's a desktop screen and shrinking everything down. Without it, your page will look tiny and zoomed-out on phones. This is not optional in 2025 — mobile is the default.

**`<title>`** — The text that appears on the browser tab, in search results, and when someone bookmarks your page. Make it unique and descriptive. `"Page Title — Site Name"` is a common pattern: the specific page first, the site second.

**`<meta name="description">`** — A short summary of the page. Search engines use this as the snippet under your page in results. Keep it around 150 characters. Make it specific and useful, not just "Welcome to my site."

**`<link rel="stylesheet" href="styles.css">`** — Connects your CSS file to the page. Without this, your styles won't load. The `href` is a path to the file — if it's in the same folder as your HTML, just the filename is enough.

**`<link rel="canonical">`** — Tells search engines which URL is the "official" one if your content can be reached through more than one path. Not critical for small sites, but good practice to include.

### The `[OPTIONAL]` sections

**Print stylesheet** — A separate CSS file that only loads when the page is being printed. Useful if you want a clean, ink-friendly layout for printing — no dark backgrounds, no navigation, just the content.

**Favicons** — The little icon in the browser tab. The three lines cover different browsers and devices: `.ico` for legacy, `.svg` for modern browsers, and `apple-touch-icon.png` for iOS home-screen shortcuts.

**Open Graph / Twitter meta tags** — These control how your page *looks when shared on social media or chat apps*. When someone pastes your URL into WhatsApp, Slack, or Twitter, these tags tell the scraper what title, description, and image to show. Without them, the platform guesses — often badly.

**Theme colour** — On some mobile browsers, the address bar picks up a colour from the page. This sets it explicitly. It's a small touch, but it makes a site feel finished.

**Web app manifest** — Points to a `site.webmanifest` file that lets the site be "installed" like an app on Android and desktop. If you're not building an installable app, skip it.

### The body

**`<header>`, `<main>`, `<footer>`** — These are the three structural landmarks of a page. `<header>` is for the site title, logo, and navigation. `<main>` holds the main content of *this specific page* — there should only be one per page. `<footer>` is for copyright, contact info, small print. Using these instead of generic `<div>`s makes your HTML more meaningful and helps screen readers navigate.

**`<script src="script.js" defer></script>`** — Loads your JavaScript. The `defer` attribute is important: it tells the browser "download this file in the background, but don't run it until the HTML has been fully read." Without `defer`, your script might run before the elements it's trying to select exist — and you'll get mysterious errors like "cannot read property of null." With `defer`, everything just works.

Notice the script tag is at the *end of the body*, not in the head. This is a deliberate choice — it means the user sees the page render before any script work begins. You can technically put it in the head with `defer`, and it'll behave the same, but end-of-body is a good habit.

---

## The CSS boilerplate

Here's `styles.css`. It's split into two parts: a reset, and a set of design tokens.

```css
/* =========================================================
   styles.css
   A starter stylesheet. Delete what you don't need,
   change what you don't like, keep what's useful.
   ========================================================= */

/* ----- Reset -----
   These rules remove browser inconsistencies so that
   every element starts from the same place. */

*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html,
body {
  height: 100%;
}

body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}

img,
picture,
video,
canvas,
svg {
  display: block;
  max-width: 100%;
}

input,
button,
textarea,
select {
  font: inherit;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

/* ----- Design tokens -----
   Placeholders — change the values, rename the variables,
   or delete the ones you don't use. They exist to keep
   your colours and spacing consistent across the site. */

:root {
  /* Colours */
  --color-text: #222;
  --color-bg: #fff;
  --color-accent: #0066cc;
  --color-muted: #666;

  /* Spacing */
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;

  /* Typography */
  --font-body: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-heading: var(--font-body);
}

/* ----- Base ----- */

body {
  font-family: var(--font-body);
  color: var(--color-text);
  background-color: var(--color-bg);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  line-height: 1.2;
}

a {
  color: var(--color-accent);
}

/* ----- Your styles below this line ----- */
```

### Walking through it

**The reset** — Every browser ships with its own default styles. Chrome thinks an `<h1>` should be 32px with a specific margin. Firefox thinks it should be slightly different. Safari disagrees with both. The reset strips those defaults away so you start from a level playing field.

- `box-sizing: border-box` — When you set a width of 200px, the element is *actually* 200px wide, including padding and border. Without this, padding and borders are *added on top* of your width, which is almost never what you want.
- `margin: 0` on everything — Removes default margins so you control spacing yourself.
- `img, video, canvas, svg { display: block }` — By default, images are inline elements, which adds a small gap below them. Making them `block` removes that gap.
- `font: inherit` on form elements — Form inputs don't inherit fonts by default. This makes them match the rest of your page.
- `overflow-wrap: break-word` — Long words (like URLs) won't overflow their container.

You don't need to fully understand every line right now. What matters is: it's small, it's well-tested, and it gives you a clean canvas.

**Design tokens (`:root`)** — This is where CSS gets genuinely useful for keeping a project consistent. A design token is just a named value. Instead of writing `#0066cc` in twenty places, you write `var(--color-accent)` in twenty places, and define `--color-accent: #0066cc` once. Want to change your brand colour? Change one line.

The tokens here are **placeholders**. Change the values. Rename them. Delete the ones you don't use. If you've already chosen colours for your assignment, replace these with yours. They're here to show you the pattern, not to dictate your design.

**The base styles** — These apply your tokens to the page. `body` picks up the font, text colour, and background. Headings get the heading font. Links get the accent colour. Simple, but it means every element on the page starts with a coherent look.

**Your styles below this line** — Everything after this point is yours. Write freely.

---

## The JavaScript boilerplate

Here's `script.js`. It's a working example of the pattern you'll use again and again: **read input → process it → write output back to the page.**

```js
'use strict';

/* =========================================================
   script.js
   A starter script that shows the form-handling pattern:
   read input → process it → write the result back to the page.
   ========================================================= */

// ----- 1. Grab the elements we need -----

const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const commentInput = document.querySelector('#comment');
const output = document.querySelector('#output');

// ----- 2. A function to process the data -----

function buildMessage(name, email, comment) {
  return `Thanks, ${name}! We received your message from ${email}. You said: "${comment}"`;
}

// ----- 3. Listen for the form being submitted -----

form.addEventListener('submit', function (event) {
  event.preventDefault(); // stop the page reloading

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const comment = commentInput.value.trim();

  if (!name || !email || !comment) {
    output.textContent = 'Please fill in every field before sending.';
    return;
  }

  const message = buildMessage(name, email, comment);
  output.textContent = message;

  form.reset();
});

/* ----- Notes for you -----
   - `event.preventDefault()` stops the browser's default
     behaviour (reloading the page when a form is submitted).
   - `.trim()` removes accidental spaces at the start/end.
   - `output.textContent = ...` is the safest way to write
     text to the page. Avoid `.innerHTML` with user input.
*/
```

For this script to work, your HTML needs a form with these IDs. Here's the matching snippet you'd drop inside `<main>`:

```html
<form id="contact-form">
  <label for="name">Name</label>
  <input id="name" type="text" name="name">

  <label for="email">Email</label>
  <input id="email" type="email" name="email">

  <label for="comment">Comment</label>
  <textarea id="comment" name="comment"></textarea>

  <button type="submit">Send</button>
</form>

<p id="output" aria-live="polite"></p>
```

### Walking through it

**`'use strict';`** — Puts JavaScript into "strict mode," which is just a stricter, more helpful version of the language. It catches common mistakes (like using a variable before declaring it) and turns them into clear errors instead of silent bugs. Always keep this at the top of your scripts.

**Step 1 — Grab the elements** — `document.querySelector('#contact-form')` finds the first element on the page with `id="contact-form"` and stores a reference to it in a variable. Same for each input and for the `<p>` where we'll write output.

Notice these lines run at the top of the file. This is safe *because* we used `defer` on the script tag in the HTML — by the time the script runs, all those elements exist.

**Step 2 — A function to process the data** — `buildMessage()` takes three values and returns a single string. This is the "process" part of the pattern. Keeping it in its own function means it's easy to test, easy to change, and easy to reuse.

**Step 3 — Listen for the form being submitted** — `form.addEventListener('submit', ...)` says: "when this form is submitted, run this function." The function receives an `event` object, which is the browser's way of describing what just happened.

- `event.preventDefault()` — By default, submitting a form reloads the page (or navigates away). We don't want that — we want to handle the data ourselves. `preventDefault()` stops the browser's default behaviour.
- `nameInput.value` — The current text inside an input.
- `.trim()` — Removes accidental spaces from the start and end. If someone types `"  Lerato  "`, you get `"Lerato"`.
- The `if (!name || !email || !comment)` check — If any field is empty, show a message and stop. This is basic validation.
- `output.textContent = message` — Writes text into the `<p id="output">`. Using `.textContent` (not `.innerHTML`) is important when the text might come from a user — it prevents a class of security bugs.
- `form.reset()` — Clears the form fields after a successful submission.

**The `aria-live="polite"` on the output paragraph** — This tells screen readers to announce the contents of that paragraph when it changes. It's a small accessibility win that costs nothing.

---

## How the three files work together

Here's the file tree you'll have:

```
your-project/
├── index.html
├── styles.css
└── script.js
```

And here's the order things happen when someone visits your page:

1. The browser requests `index.html` and starts reading it top to bottom.
2. In the `<head>`, it sees the `<link rel="stylesheet" href="styles.css">` and starts downloading your CSS.
3. It reads through the `<body>`, building the page as it goes.
4. At the bottom, it sees `<script src="script.js" defer>`. Because of `defer`, it downloads the script in the background but *waits* until the HTML is finished.
5. Once the HTML is parsed, the script runs — and by now, every element it needs is on the page.

That's the whole dance. HTML describes the structure. CSS styles it. JavaScript adds behaviour. Each file stays in its lane, and they meet each other through `id`s (`#contact-form`) and `class`es (`.card`).

---

## Common mistakes to avoid

- **Forgetting the viewport meta tag** — Your page will look zoomed-out and broken on phones.
- **Putting `<script>` in the head without `defer`** — Your script will try to select elements that don't exist yet, and fail silently.
- **Writing `<script src="script.js"></script>` before the closing `</body>` but *without* defer and *inside the head*** — two conflicting locations. Pick one: end of body, or head with defer.
- **Forgetting `rel="stylesheet"`** — Your CSS won't load. `<link href="styles.css">` alone does nothing.
- **Wrong file paths** — `styles.css` (no folder) and `/assets/css/styles.css` (folder structure) mean different things. If your styles aren't loading, check the path first.
- **Spaces or capital letters in file names** — Will work locally on some systems, will break once uploaded. Get in the habit of lowercase-and-hyphens now.
- **Using `.innerHTML` with user input** — Can open your site up to script injection. Use `.textContent` unless you have a good reason not to.
- **Missing `id` on the form or its inputs** — JavaScript's `querySelector('#...')` won't find anything, and you'll get "cannot read properties of null."

---

## Where to go next

This document is here whenever you need it. Use it as a starting point for new projects, a reference when something breaks, or a refresher when you've forgotten a detail.

The three files are yours now — copy them, change them, grow them. Add more meta tags when you need them. Add more design tokens when you find yourself repeating a value. Add more event listeners as your forms get more complex. The boilerplate is a beginning, not a ceiling.

A resource worth bookmarking as you go further:

- **MDN Web Docs** (developer.mozilla.org) — the definitive reference for HTML, CSS, and JavaScript. When in doubt, look here first.

---