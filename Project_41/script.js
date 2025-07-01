const navItems = document.querySelectorAll(".nav-item");
const underline = document.querySelector(".underline"); 


function updateUnderline(el) {
    const rect = el.getBoundingClientRect();
    const navRect = el.parentElement.getBoundingClientRect();
    underline.style.width = `${rect.width}px`;
    underline.style.left = `${rect.left - navRect.left}px`;
}


navItems.forEach((item, index) => {
    item.onclick = function () {
        navItems.forEach(i => i.classList.remove('active')); 
        item.classList.add('active');
        updateUnderline(item); 
    }
});


function first() {
    const active = document.querySelector('.nav-item.active');
    updateUnderline(active);
}
first();

AOS.init({
    duration: 1000,
    once: true      
  });