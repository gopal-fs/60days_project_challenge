let content = document.querySelectorAll(".content");
let section3=document.getElementById("section3")

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.2,
    rootMargin: "0px 0px -200px 400px"
  }
);


content.forEach(con => observer.observe(con));
observer.observe(section3)
