// ============================================
// PORTFOLIO - SHARED NAVIGATION
// Paste this script tag in every HTML page:
// <script src="nav.js"></script>
// ============================================

// This builds the nav automatically on every page.
// Just change YOUR_NAME below once and it updates everywhere.

const YOUR_NAME = "Tracy Stacy"; // ← CHANGE THIS

const NAV_LINKS = [
  { label: "Home",     href: "index.html" },
  { label: "About",    href: "about.html" },
  { label: "Skills",   href: "skills.html" },
  { label: "Projects", href: "projects.html" },
  { label: "Certs",    href: "certifications.html" },
  { label: "Contact",  href: "contact.html" },
];

function buildNav() {
  const nav = document.createElement("nav");

  // Logo links back to home
  const logo = document.createElement("a");
  logo.className = "nav-logo";
  logo.href = "index.html";
  logo.textContent = YOUR_NAME;
  nav.appendChild(logo);

  // Links
  const ul = document.createElement("ul");
  ul.className = "nav-links";

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  NAV_LINKS.forEach(link => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.label;
    if (link.href === currentPage) a.classList.add("active");
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(ul);
  document.body.prepend(nav);
}

// Build the footer too
function buildFooter() {
  const footer = document.createElement("footer");
  footer.innerHTML = `<p>© ${new Date().getFullYear()} ${YOUR_NAME} · Built with intention · Secured by design</p>`;
  document.body.appendChild(footer);
}

document.addEventListener("DOMContentLoaded", () => {
  buildNav();
  buildFooter();
});