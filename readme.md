# 📁 YOUR PORTFOLIO — FILE STRUCTURE & SETUP GUIDE

## How Everything Links Together

Your portfolio is made of these files. Keep them ALL in the same folder.

```
portfolio/
│
├── index.html          ← Home / Hero page
├── about.html          ← About me page
├── skills.html         ← Skills page
├── projects.html       ← Projects page
├── certifications.html ← Certifications page
├── contact.html        ← Contact page
│
├── styles.css          ← Shared styles (used by ALL pages)
├── nav.js              ← Shared navigation (used by ALL pages)
│
├── resume.pdf          ← Add your resume here (optional)
└── README.md           ← This file
```

---

## ⚡ Quick Start (3 steps)

1. **Open `nav.js`** and change `YOUR_NAME` at the top to your real name.
   ```js
   const YOUR_NAME = "Jane Doe"; // ← change this
   ```

2. **Open each `.html` file** and look for `✏️` comments — those mark places to update.

3. **Open `index.html`** in your browser to preview it!

---

## 🔗 How the Files Are Linked

Every HTML page links two shared files at the top and bottom:

```html
) -->


<!-- BOTTOM of every page (before ) -->

```

That's it! The nav and footer are automatically added to every page by `nav.js`.
You never need to copy/paste navigation code.

---

## ✏️ Editing Checklist

### nav.js
- [ ] Change `YOUR_NAME` to your real name

### index.html (Home)
- [ ] Replace "Your Name" in the hero heading
- [ ] Update hero title and bio

### about.html
- [ ] Fill in your degree, school, and year
- [ ] Write your personal story
- [ ] Update the stats (projects, certs, etc.)
- [ ] Add `resume.pdf` to the folder

### skills.html
- [ ] Remove skills you don't have yet
- [ ] Add any skills that are missing
- [ ] Adjust the progress bar percentages (be honest!)

### projects.html
- [ ] Replace sample projects with your real ones
- [ ] Update GitHub and write-up links
- [ ] Change status to "Completed" or "In Progress"

### certifications.html
- [ ] Update cert statuses (Earned / In Progress / Planned)
- [ ] Add verification links from Credly when you earn them

### contact.html
- [ ] Add your real email, LinkedIn, GitHub, TryHackMe links
- [ ] Sign up at formspree.io and replace YOUR_FORM_ID

---

## 🚀 Publishing on GitHub Pages (Free Hosting)

1. Create a free account at github.com
2. Create a new repository named: `yourusername.github.io`
3. Upload all your portfolio files to that repo
4. Go to Settings → Pages → set Source to "main branch"
5. Your site will be live at: `https://yourusername.github.io`

---

## 💡 Tips

- Always test by opening `index.html` in your browser first
- Don't rename `styles.css` or `nav.js` — the HTML files depend on those exact names
- Add your profile photo by saving it as `photo.jpg` in the folder,
  then adding `<img src="photo.jpg"/>` in about.html