const images = document.querySelectorAll(".img-container img");

images.forEach(img => {
  img.addEventListener("click", () => {
    window.open(img.src, "_blank"); // Opens full-size image in a new tab
  });
});
