# tayqan Frontend — Theme Map & UI Guide (English)

_A reference for backend developers to understand the RTL frontend structure, behaviors, and—most importantly—the **color system** that encodes fact‑checking **verdicts** and **content categories**. This doc is descriptive only; it does **not** propose UI changes._

---

## At a Glance

- **Type:** RTL news / investigations frontend (HTML + CSS + jQuery).
- **Main stylesheet:** `assets/css/style.css`
- **App scripts:** `assets/js/script.js`, `assets/js/animation.js`
- **Fixed navbar spacing:** `body { padding-top: var(--nav-height) }`

### Tech Stack & Vendor Versions

- **jQuery:** 3.7.1 (`assets/js/jquery-3.7.1.min.js`)
- **Owl Carousel:** 2.3.4 (`assets/js/owl.carousel.min.js`)
- **Bootstrap RTL:** 5.3.3 (`assets/css/bootstrap.rtl.min.css`)
- **Font Awesome:** 6.7.2 (`assets/css/all.min.css`)
- **normalize.css:** 8.0.1 (`assets/css/normalize.css`)

**Load order (CSS):** `normalize.css` → `all.min.css` → `owl.carousel.min.css` → `bootstrap.rtl.min.css` → `style.css`  
**Load order (JS):** jQuery → Owl → Bootstrap bundle → `animation.js` → `script.js` (usually `defer`)

### Folder Layout (essentials)

```
assets/
  css/
    normalize.css
    all.min.css              # Font Awesome
    owl.carousel.min.css
    bootstrap.rtl.min.css
    style.css                # main theme styles (badges, labels, layout)
  js/
    jquery-3.7.1.min.js
    owl.carousel.min.js
    bootstrap.bundle.min.js
    animation.js
    script.js                # preloader, carousels, touch helpers
  img/ ...                   # logos, article images, icons
```

### Design Tokens & Breakpoints

- **Navbar height:** `--nav-height: 72px` (default), `64px` at `@media (max-width: 991.98px)`.
- **Responsive touchpoints used in CSS:** `1180px`, `991.98px`, `992px`, `768px`, `767px` (plus Bootstrap grid utilities).

---

# Color System (Authoritative)

Color is **semantic** in tayqan: it conveys the **fact‑checking verdict** (claim type) and the **content category**. These colors are applied through small “badge” classes and must remain **consistent** wherever badges appear (cards, lists, filters, breadcrumbs).

> All values below are **HSL**, mirroring the project CSS you provided. Treat this as the **single source of truth** for server‑rendered badges.

## A) Claim Type Badges (`.type-*`)

| Class            | Meaning          | Background (HSL)    | Text (HSL)          | Border (HSL)        |
| ---------------- | ---------------- | ------------------- | ------------------- | ------------------- |
| `.type-zayef`    | False            | `hsl(2 64% 98%)`    | `hsl(2 64% 58%)`    | `hsl(2 64% 80%)`    |
| `.type-mudallal` | Misleading       | `hsl(45 100% 98%)`  | `hsl(45 100% 51%)`  | `hsl(45 100% 80%)`  |
| `.type-mufabrak` | Fabricated       | `hsl(261 51% 98%)`  | `hsl(261 51% 51%)`  | `hsl(261 51% 80%)`  |
| `.type-qadim`    | Old / Outdated   | `hsl(210 5% 96%)`   | `hsl(210 5% 38%)`   | `hsl(210 5% 80%)`   |
| `.type-tawdi7`   | Clarification    | `hsl(214 100% 98%)` | `hsl(214 100% 50%)` | `hsl(214 100% 80%)` |
| `.type-ta2kid`   | Confirmed / True | `hsl(134 61% 98%)`  | `hsl(134 61% 41%)`  | `hsl(134 61% 80%)`  |

**Rationale**

- **Red** family → **False**.
- **Amber/Yellow** → **Caution/Misleading**.
- **Purple** → **Fabricated** (distinct from generic falsehood).
- **Gray** → **Old/Outdated**.
- **Blue** → **Clarification** (neutral/informational).
- **Green** → **Confirmed** (verified/positive).

**Sample usage:**

```html
<a class="article-card__label article-card__label--type type-zayef">False</a>
<a class="article-card__label article-card__label--type type-ta2kid"
  >Confirmed</a
>
```

## B) Category Badges (`.cat-*`)

> Several “knowledge” domains lean green/blue to imply neutrality (Health/Environment/Science), but each keeps distinct saturation/lightness for recognition.

### Core categories

| Class           | Category       | Background (HSL)    | Text (HSL)          | Border (HSL)        |
| --------------- | -------------- | ------------------- | ------------------- | ------------------- |
| `.cat-tahqiqat` | Investigations | `hsl(203 100% 98%)` | `hsl(203 100% 30%)` | `hsl(203 100% 80%)` |
| `.cat-seha`     | Health         | `hsl(134 61% 98%)`  | `hsl(134 61% 41%)`  | `hsl(134 61% 80%)`  |
| `.cat-siyasa`   | Politics       | `hsl(214 100% 98%)` | `hsl(214 100% 41%)` | `hsl(214 100% 80%)` |
| `.cat-iqtisad`  | Economy        | `hsl(261 51% 98%)`  | `hsl(261 51% 51%)`  | `hsl(261 51% 80%)`  |
| `.cat-thaqafa`  | Culture        | `hsl(332 79% 98%)`  | `hsl(332 79% 58%)`  | `hsl(332 79% 80%)`  |

### Extended categories

| Class           | Category    | Background (HSL)   | Text (HSL)         | Border (HSL)       |
| --------------- | ----------- | ------------------ | ------------------ | ------------------ |
| `.cat-taghazul` | Technology  | `hsl(190 85% 98%)` | `hsl(190 85% 35%)` | `hsl(190 85% 80%)` |
| `.cat-bi2a`     | Environment | `hsl(148 55% 98%)` | `hsl(148 55% 32%)` | `hsl(148 55% 80%)` |
| `.cat-riyada`   | Sports      | `hsl(22 90% 98%)`  | `hsl(22 90% 45%)`  | `hsl(22 90% 80%)`  |
| `.cat-ta3leem`  | Education   | `hsl(248 54% 98%)` | `hsl(248 54% 44%)` | `hsl(248 54% 80%)` |
| `.cat-mujtama3` | Society     | `hsl(36 90% 98%)`  | `hsl(36 90% 40%)`  | `hsl(36 90% 80%)`  |
| `.cat-3oloom`   | Science     | `hsl(180 60% 98%)` | `hsl(180 60% 35%)` | `hsl(180 60% 78%)` |
| `.cat-tareekh`  | History     | `hsl(25 60% 98%)`  | `hsl(25 60% 40%)`  | `hsl(25 60% 80%)`  |
| `.cat-fann`     | Art         | `hsl(300 60% 98%)` | `hsl(300 60% 45%)` | `hsl(300 60% 80%)` |

**Sample usage:**

```html
<a class="article-card__label article-card__label--category cat-seha">Health</a>
<a class="article-card__label article-card__label--category cat-tahqiqat"
  >Investigations</a
>
```

### Color Consistency Rules

- **One meaning ↔ one class:** choose exactly one `.type-*` per article; attach one `.cat-*` when applicable.
- **No inline colors:** always use classes; backend must not inject inline styles.
- **Consistent visuals:** the same class must render identically in cards, lists, sidebars, filters, breadcrumbs.
- **Accessibility:** keep text contrast on light badges ≥ **WCAG AA (4.5:1)**. Re‑check if you add darker overlays/icons.

### Add a New Category/Type (pattern)

```css
/* Example: Transportation */
.cat-transport {
  background: hsl(200 80% 98%);
  color: hsl(200 70% 35%);
  border-color: hsl(200 75% 80%);
}
```

Update both **CSS** and the **palette JSON** below if you add new classes.

### Machine‑Readable Palette (recommended for APIs/feeds)

```json
{
  "types": {
    "zayef": {
      "bg": "hsl(2 64% 98%)",
      "fg": "hsl(2 64% 58%)",
      "border": "hsl(2 64% 80%)"
    },
    "mudallal": {
      "bg": "hsl(45 100% 98%)",
      "fg": "hsl(45 100% 51%)",
      "border": "hsl(45 100% 80%)"
    },
    "mufabrak": {
      "bg": "hsl(261 51% 98%)",
      "fg": "hsl(261 51% 51%)",
      "border": "hsl(261 51% 80%)"
    },
    "qadim": {
      "bg": "hsl(210 5% 96%)",
      "fg": "hsl(210 5% 38%)",
      "border": "hsl(210 5% 80%)"
    },
    "tawdi7": {
      "bg": "hsl(214 100% 98%)",
      "fg": "hsl(214 100% 50%)",
      "border": "hsl(214 100% 80%)"
    },
    "ta2kid": {
      "bg": "hsl(134 61% 98%)",
      "fg": "hsl(134 61% 41%)",
      "border": "hsl(134 61% 80%)"
    }
  },
  "categories": {
    "tahqiqat": {
      "bg": "hsl(203 100% 98%)",
      "fg": "hsl(203 100% 30%)",
      "border": "hsl(203 100% 80%)"
    },
    "seha": {
      "bg": "hsl(134 61% 98%)",
      "fg": "hsl(134 61% 41%)",
      "border": "hsl(134 61% 80%)"
    },
    "siyasa": {
      "bg": "hsl(214 100% 98%)",
      "fg": "hsl(214 100% 41%)",
      "border": "hsl(214 100% 80%)"
    },
    "iqtisad": {
      "bg": "hsl(261 51% 98%)",
      "fg": "hsl(261 51% 51%)",
      "border": "hsl(261 51% 80%)"
    },
    "thaqafa": {
      "bg": "hsl(332 79% 98%)",
      "fg": "hsl(332 79% 58%)",
      "border": "hsl(332 79% 80%)"
    },
    "taghazul": {
      "bg": "hsl(190 85% 98%)",
      "fg": "hsl(190 85% 35%)",
      "border": "hsl(190 85% 80%)"
    },
    "bi2a": {
      "bg": "hsl(148 55% 98%)",
      "fg": "hsl(148 55% 32%)",
      "border": "hsl(148 55% 80%)"
    },
    "riyada": {
      "bg": "hsl(22 90% 98%)",
      "fg": "hsl(22 90% 45%)",
      "border": "hsl(22 90% 80%)"
    },
    "ta3leem": {
      "bg": "hsl(248 54% 98%)",
      "fg": "hsl(248 54% 44%)",
      "border": "hsl(248 54% 80%)"
    },
    "mujtama3": {
      "bg": "hsl(36 90% 98%)",
      "fg": "hsl(36 90% 40%)",
      "border": "hsl(36 90% 80%)"
    },
    "3oloom": {
      "bg": "hsl(180 60% 98%)",
      "fg": "hsl(180 60% 35%)",
      "border": "hsl(180 60% 78%)"
    },
    "tareekh": {
      "bg": "hsl(25 60% 98%)",
      "fg": "hsl(25 60% 40%)",
      "border": "hsl(25 60% 80%)"
    },
    "fann": {
      "bg": "hsl(300 60% 98%)",
      "fg": "hsl(300 60% 45%)",
      "border": "hsl(300 60% 80%)"
    }
  }
}
```
