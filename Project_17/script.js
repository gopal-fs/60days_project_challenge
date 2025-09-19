const preview = document.getElementById("preview");
const images = document.querySelectorAll(".slider img");

images.forEach(img => {
  img.addEventListener("click", () => {
    // Set preview image
    preview.src = img.src;

    // Reset all images opacity
    images.forEach(i => i.classList.remove("active"));

    // Highlight clicked one
    img.classList.add("active");
  });
});