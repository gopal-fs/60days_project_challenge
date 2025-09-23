// Elements
const toggleBtn = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;
const prefersAnimCheckbox = document.getElementById("prefers-animation");

// Keys
const STORAGE_KEY = "site-theme";
const ANIM_KEY = "site-anim";

// Helpers
function setTheme(theme) {
  if (theme === "dark") {
    htmlEl.setAttribute("data-theme", "dark");
    htmlEl.setAttribute("data-theme-set", "true");
    toggleBtn.querySelector(".icon").textContent = "☀️";
    toggleBtn.querySelector(".label").textContent = "Light";
    toggleBtn.setAttribute("aria-pressed", "true");
    localStorage.setItem(STORAGE_KEY, "dark");
  } else {
    htmlEl.removeAttribute("data-theme");
    htmlEl.setAttribute("data-theme-set", "true");
    toggleBtn.querySelector(".icon").textContent = "🌙";
    toggleBtn.querySelector(".label").textContent = "Dark";
    toggleBtn.setAttribute("aria-pressed", "false");
    localStorage.setItem(STORAGE_KEY, "light");
  }
}

function initTheme() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark") {
    setTheme("dark");
    return;
  }
  if (saved === "light") {
    setTheme("light");
    return;
  }
  const prefersDark = window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  if (prefersDark) {
    setTheme("dark");
  } else {
    setTheme("light");
  }
}

function setAnimationsEnabled(enabled) {
  if (enabled) {
    htmlEl.setAttribute("data-animate", "true");
    localStorage.setItem(ANIM_KEY, "true");
    prefersAnimCheckbox.checked = true;
  } else {
    htmlEl.removeAttribute("data-animate");
    localStorage.setItem(ANIM_KEY, "false");
    prefersAnimCheckbox.checked = false;
  }
}

// Event listeners
toggleBtn.addEventListener("click", function () {
  const current = localStorage.getItem(STORAGE_KEY)
    || (htmlEl.getAttribute("data-theme") === "dark" ? "dark" : "light");

  if (current === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
});

prefersAnimCheckbox.addEventListener("change", function (e) {
  setAnimationsEnabled(e.target.checked);
});

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  initTheme();
  const animSaved = localStorage.getItem(ANIM_KEY);
  if (animSaved === "true") {
    setAnimationsEnabled(true);
  } else if (animSaved === "false") {
    setAnimationsEnabled(false);
  } else {
    setAnimationsEnabled(true);
  }
});
