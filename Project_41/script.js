const navItems = document.querySelectorAll(".nav-item");
const underline = document.querySelector(".underline");  // Corrected variable

// ✅ Main function that moves the underline
function updateUnderline(el) {
    const rect = el.getBoundingClientRect();
    const navRect = el.parentElement.getBoundingClientRect();
    underline.style.width = `${rect.width}px`;
    underline.style.left = `${rect.left - navRect.left}px`;
}

// ✅ Loop through all nav items and add click handler
navItems.forEach((item, index) => {
    item.onclick = function () {
        navItems.forEach(i => i.classList.remove('active')); // ✅ Fixed forEach syntax
        item.classList.add('active');
        updateUnderline(item); // ✅ Correct function name
    }
});

// ✅ On page load, position underline under the active one
function first() {
    const active = document.querySelector('.nav-item.active');
    updateUnderline(active);
}
first();

AOS.init({
    duration: 1000, // animation duration (in ms)
    once: true      // animate only once on scroll
  });