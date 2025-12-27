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
      threshold: 0.2
    }
  );
  
  const heads = document.querySelectorAll(".head");
  
  heads.forEach((head) => observer.observe(head));
  