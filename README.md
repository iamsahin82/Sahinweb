# Shahin Web — Agency Website

Dark-theme 3D agency website for **Shahin Web** — a digital growth agency serving Kolkata, Delhi, and Pan-India. Founded by Sahin Molla.

**Services:** Performance Marketing · Video Editing · Web Development · Design · AI Automation · E-commerce Management

## Features

- 3D hero with particle constellation, floating dashboard cards, and mouse parallax
- Scroll-drawn growth graph and center "rope" line that draws as you scroll
- Custom cursor (dot + lagging ring), magnetic buttons, skeleton preloader
- Lead Catcher mini-game that converts play into lead capture
- Video popup (drop `Ad-Duha.mp4` in the root folder to enable)
- Full SVG icon system — no emojis, no icon fonts
- SEO: JSON-LD structured data (Organization + Person)
- **Admin panel** (`admin.html`) — 162 editable content fields, leads inbox with CSV export, schema-driven editor

## Structure

```
index.html            Homepage (all sections)
about.html            Story, credentials, team
services.html         8 services + process
case-studies.html     Results (client names kept private)
contact.html          Contact form + info
book-call.html        Strategy-call booking page
admin.html            Admin panel (default passcode: change it!)
assets/
  style.css           Design system
  main.js             All interactions & effects
  schema.js           Content schema (single source of truth)
  img/                Photos & logos
```

## Running locally

No build step. Open `index.html` in a browser, or serve the folder:

```
python3 -m http.server 8000
```

## Notes

- Content edits are made in `admin.html` and stored in the browser's localStorage. For production, connect the forms to a backend or service (Formspree, Web3Forms, WordPress, etc.).
- Client performance data shown is real; client identities are intentionally kept private.

---

© Shahin Web. Made with code, chai, and a healthy obsession with ROAS.
