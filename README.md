# 🌐 Personal Portfolio — React.js

A professional, responsive portfolio website built with React.js and Vite. Features a navy/blue corporate theme with smooth animations, modular component architecture, and SEO-friendly structure.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── resume.pdf            ← Add your resume here
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        ← Sticky nav with active section tracking
│   │   ├── Navbar.module.css
│   │   ├── Hero.jsx          ← Landing section with avatar card
│   │   ├── Hero.module.css
│   │   ├── About.jsx         ← Bio + skills grid
│   │   ├── About.module.css
│   │   ├── Projects.jsx      ← Filterable project cards
│   │   ├── Projects.module.css
│   │   ├── Resume.jsx        ← Timeline experience + certifications
│   │   ├── Resume.module.css
│   │   ├── Contact.jsx       ← Contact form + info cards
│   │   ├── Contact.module.css
│   │   ├── Footer.jsx
│   │   └── Footer.module.css
│   ├── styles/
│   │   └── global.css        ← Design tokens, resets, shared classes
│   ├── App.jsx               ← Root component, scroll-reveal observer
│   └── main.jsx              ← React entry point
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## ✏️ How to Customize

Search for `✏️ EDIT` comments throughout the source files — every placeholder is marked:

| File | What to Edit |
|------|-------------|
| `Hero.jsx` | Your name, tagline, bio, social links, stats |
| `About.jsx` | Bio paragraphs, skills list, quick facts |
| `Projects.jsx` | Project titles, descriptions, GitHub/live links |
| `Resume.jsx` | Work experience, education, certifications |
| `Contact.jsx` | Email, LinkedIn, GitHub, location |
| `Footer.jsx` | Tagline, social links, quick info |
| `Navbar.jsx` | Logo initials, resume PDF path |

To add your **photo**: replace the initials `<div>` in `Hero.jsx` and `About.jsx` with:
```jsx
<img src="/your-photo.jpg" alt="Your Name" />
```
Place the image in the `public/` folder.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# Clone your repo
git clone https://github.com/yourusername/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📧 Enabling the Contact Form

The form is ready — just plug in a service:

### Option A — Formspree (Recommended, Free)
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form → copy your Form ID
3. In `Contact.jsx`, uncomment the fetch block and replace `YOUR_FORM_ID`:
```js
const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

### Option B — EmailJS (No backend)
```bash
npm install @emailjs/browser
```
Follow the [EmailJS docs](https://www.emailjs.com/docs/).

---

## 📦 Build for Production

```bash
npm run build
```
Output goes to the `dist/` folder — ready to deploy.

---

## 🌍 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```
Or connect your GitHub repo at [vercel.com](https://vercel.com) for auto-deploy on every push.

### Netlify
```bash
npm run build
# Drag and drop the dist/ folder at netlify.com/drop
```
Or connect GitHub repo at [netlify.com](https://netlify.com).

### GitHub Pages
```bash
npm install --save-dev gh-pages
```
Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
Then run:
```bash
npm run deploy
```

---

## 🛠️ Tech Stack

- **React 18** — Component-based UI
- **Vite** — Lightning-fast build tool
- **CSS Modules** — Scoped, collision-free styling
- **Google Fonts** — Playfair Display + Mulish
- **Intersection Observer API** — Scroll-reveal animations

---

## 📄 License

MIT — free to use and modify for personal and commercial projects.
