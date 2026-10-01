# WEDE5020 POE Part 2 — Submission & Marking Checklist

## Before You Start

- [ ] Review the feedback that was discussed in class to help update/edit the contents of Part 1.
- [ ] Correct any HTML issues identified during Part 1 marking.
- [ ] Record every correction and improvement in your `README.md` changelog.

> **Marks are awarded for implementing feedback and maintaining a detailed changelog.** — **10 Marks**

---

## Section 1: Desktop CSS Styling — 40 Marks

### 1. External Stylesheet — 10 Marks

- [ ] Create an external CSS file (e.g. `style.css`).
- [ ] Link the stylesheet to **every** HTML page.
- [ ] Confirm styling loads correctly on:
  - [ ] `index.html`
  - [ ] `about.html`
  - [ ] `products/services.html`
  - [ ] `enquiry.html`
  - [ ] `contact.html`

> A stylesheet linked to only some pages will lose marks.

### 2. Default Website Styling — 5 Marks

Your CSS should include:

- [ ] Global font family
- [ ] Global font size
- [ ] Colour palette
- [ ] Margin reset
- [ ] Padding reset
- [ ] Consistent styling across all pages
- [ ] CSS Reset or Universal Selector

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```

> Don't leave browser defaults unchanged. The rubric specifically awards marks for base style code.

### 3. Typography Styling — 5 Marks

Ensure CSS styles:

- [ ] Headings (H1–H6)
- [ ] Paragraphs
- [ ] Navigation links
- [ ] Lists
- [ ] Buttons

Should include:

- [ ] `font-family`
- [ ] `font-size`
- [ ] `font-weight`
- [ ] `line-height`
- [ ] `letter-spacing`
- [ ] Good readability

> Using only one default font throughout the site will not achieve the highest mark band.

### 4. Layout Structure — 5 Marks

Must use proper layout techniques:

- [ ] Flexbox **OR**
- [ ] CSS Grid **OR**
- [ ] Combination of both

```css
display: flex;
justify-content: center;
align-items: center;
```

```css
display: grid;
grid-template-columns: repeat(3, 1fr);
```

- [ ] Content aligned correctly
- [ ] Consistent spacing
- [ ] Good visual hierarchy

> Simply stacking elements vertically is not enough for full marks.

### 5. Colour and Decoration — 5 Marks

Ensure your website includes:

- [ ] Consistent colour palette
- [ ] Background colours
- [ ] Text colours
- [ ] Borders
- [ ] `border-radius`
- [ ] Box shadows
- [ ] Buttons styled
- [ ] Cards/sections styled
- [ ] Professional appearance

> Marks are awarded for visual appeal and consistency.

### 6. Pseudo-Classes — 10 Marks

You **MUST** use:

- [ ] `:hover`
- [ ] `:focus`
- [ ] `:active`

```css
a:hover
button:hover
input:focus
button:active
```

> Many forget this entirely. It is a dedicated rubric category worth 10 marks.

---

## Section 2: Responsive Design — 30 Marks

### 7. Media Queries and Breakpoints — 10 Marks

Must include:

- [ ] Desktop Layout
- [ ] Tablet Layout
- [ ] Mobile Layout

Suggested breakpoints:

```css
@media (max-width: 1024px)
@media (max-width: 768px)
@media (max-width: 480px)
```

> You may use updated breakpoint data. Please remember to reference your sources. 
> No media queries = major mark loss.

### 8. Responsive Layout Adjustments — 5 Marks

**Desktop:**

- [ ] Multiple columns

**Mobile:**

- [ ] Single-column layout
- [ ] Stacked content
- [ ] Readable spacing
- [ ] No horizontal scrolling

> The rubric marks layout responsiveness separately from media queries.

### 9. Responsive Typography — 5 Marks

- [ ] Font sizes adapt on smaller screens
- [ ] Headings resize appropriately
- [ ] Paragraphs remain readable
- [ ] Relative units used

Recommended:

```css
font-size: 1rem;
font-size: 1.2rem;
```

- [ ] Use `rem` and `em` values

> Fixed pixel text sizes often perform poorly on mobile.

### 10. Responsive Navigation Menu — 5 Marks

- [ ] Navigation works on desktop
- [ ] Navigation works on tablet
- [ ] Navigation works on mobile

Possible approaches:

- Stacked menu
- Hamburger menu
- Collapsible navigation

> Navigation responsiveness has its own mark allocation.

### 11. Responsive Images — 5 Marks

- [ ] Images scale correctly
- [ ] Images never overflow screen width
- [ ] Use:

```css
img {
    max-width: 100%;
    height: auto;
}
```

- [ ] Consider `srcset`
- [ ] Consider `picture` element

> Images stretching or causing horizontal scrolling will lose marks.

---

## Section 3: README and GitHub — 20 Marks

### 12. GitHub Commits — 5 Marks

- [ ] Multiple commits
- [ ] Regular commits
- [ ] Descriptive messages

**Good examples:**

- Created base stylesheet and typography
- Added responsive breakpoints
- Updated navigation responsiveness
- Implemented hover and focus effects

**Bad example:** `update`

### 13. README.md Updates — 5 Marks

README should now include:

- [ ] Updated Project Overview
- [ ] Part 2 Information
- [ ] CSS Overview
- [ ] Responsive Design Overview
- [ ] Device Testing Summary
- [ ] Screenshots
- [ ] Updated References

### 14. Changelog — 5 Marks

Include:

- [ ] Part 1 fixes
- [ ] CSS changes
- [ ] Layout changes
- [ ] Responsive changes
- [ ] Testing changes

**Example:**

```
Version 2.0
- Added responsive navigation
- Implemented mobile breakpoint
- Updated typography scale
- Fixed HTML validation issues from Part 1 feedback
```

> Detailed entries score higher.

### 15. References — 5 Marks

Reference all:

- [ ] Images
- [ ] Icons
- [ ] Fonts
- [ ] Colour palette resources
- [ ] Tutorials
- [ ] Code snippets
- [ ] AI tools used

> Missing references can result in both rubric mark deductions and referencing penalties.

---

## Important: Screenshot Evidence *(Frequently Missed)*

Although the rubric does not allocate a standalone mark for screenshots, the instructions explicitly require:

- [ ] Desktop screenshot
- [ ] Tablet screenshot
- [ ] Mobile screenshot
- [ ] Place screenshots in `README.md`
- [ ] Show different screen sizes/devices

> Students who do not include evidence may struggle to demonstrate responsive design implementation.

---

## Quick "Full Marks" Self-Check

**Styling & Layout**
- [ ] Did I create **one** external stylesheet and link it to **all** pages?
- [ ] Did I style fonts, colours, layout and spacing?
- [ ] Did I use Flexbox and/or Grid?
- [ ] Did I use `:hover`, `:focus` and `:active`?

**Responsive Design**
- [ ] Did I create tablet and mobile media queries?
- [ ] Does my layout change between desktop and mobile?
- [ ] Does my navigation adapt on smaller screens?
- [ ] Do images resize properly?

**Documentation & Submission**
- [ ] Did I update `README.md`?
- [ ] Did I update the changelog?
- [ ] Did I commit regularly to GitHub?
- [ ] Did I add screenshots of desktop, tablet and mobile views?
- [ ] Did I update references?

> If every box above is ticked, you are covering every explicitly assessable area in the Part 2 rubric and positioning yourself for the highest mark band.

---

## Marks Breakdown Summary

| Category | Marks |
|---|---|
| Feedback from Part 1 | 10 |
| Desktop CSS Styling | 40 |
| Responsive Design | 30 |
| GitHub, README & Documentation | 20 |
| **TOTAL** | **100** |

---

## Additional Requirements Mentioned in the Instructions

Although not listed as standalone rubric categories, the following are specifically required in the Part 2 instructions and support the marks above:

| Requirement | Why It Matters |
|---|---|
| Screenshots of Desktop View | Evidence of responsive testing in README |
| Screenshots of Tablet View | Evidence of responsive testing in README |
| Screenshots of Mobile View | Evidence of responsive testing in README |
| Testing Using Browser Developer Tools | Supports responsive design marks |
| Use of Relative Units (rem, em, %) | Supports responsiveness marks |
| Responsive Images (srcset, picture) | Supports image responsiveness marks |
| Regular GitHub Pushes | Supports GitHub assessment sections |

---

## Marking Checklist (Rubric Reference)

| Rubric Topic | Key Points to Remember | Marks |
|---|---|---|
| Feedback from Part 1 | Implement lecturer feedback. Record corrections and improvements in the README changelog. Detailed entries expected. | 10 |
| External Stylesheet | Create `style.css` and link it correctly to every page. | 10 |
| CSS — Default Style Code | Base styling: font family, margins, padding, colours, `box-sizing`, CSS reset. Consistent across site. | 5 |
| CSS — Typography | `font-family`, `font-size`, `font-weight`, `line-height`, spacing. Headings, paragraphs, nav styled consistently. | 5 |
| CSS — Layout Structure | Flexbox and/or Grid for professional desktop layout. Correct alignment, spacing, structure. | 5 |
| CSS — Decoration & Colour | Attractive palette, backgrounds, borders, `border-radius`, shadows, button styling. | 5 |
| CSS — Pseudo-Classes | `:hover`, `:focus`, `:active`. | 10 |
| Media Queries / Breakpoints | Responsive breakpoints for desktop, tablet, mobile. | 10 |
| Responsive — Layout | Adapts correctly for smaller screens (multi-column → single-column). | 5 |
| Responsive — Typography | Font sizes and spacing adjust for tablet/mobile. Relative units where possible. | 5 |
| Responsive — Navigation | Navigation remains usable on tablet and mobile. Adapts to smaller screens. | 5 |
| Responsive — Images | Resize correctly, never overflow. Responsive image techniques used. | 5 |
| GitHub Commits | Regular commits with meaningful, descriptive messages. | 5 |
| README Document | Part 2 info, responsive design details, screenshots, references, project updates. | 5 |
| Changelog | Detailed record of improvements, feedback corrections, CSS additions, responsive changes. | 5 |
| References | All images, icons, fonts, tutorials, code sources, AI tools. | 5 |
| **TOTAL** | | **100** |

---

*End of checklist.*