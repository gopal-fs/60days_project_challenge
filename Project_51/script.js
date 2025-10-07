const movies = [
    {
      title: "Inception",
      genre: "Sci-Fi",
      rating: "⭐ 8.8",
      description: "A skilled thief leads a mission to plant an idea into a target's subconscious.",
      poster: "https://m.media-amazon.com/images/I/51zUbui+gbL._AC_.jpg"
    },
    {
      title: "The Dark Knight",
      genre: "Action",
      rating: "⭐ 9.0",
      description: "Batman battles the Joker in Gotham City.",
      poster: "https://m.media-amazon.com/images/I/71pox3Qy3eL._AC_SL1024_.jpg"
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      rating: "⭐ 8.6",
      description: "A team travels through a wormhole in search of a new habitable planet.",
      poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SL1500_.jpg"
    },
    {
      title: "The Hangover",
      genre: "Comedy",
      rating: "⭐ 7.7",
      description: "A bachelor party in Las Vegas goes hilariously wrong.",
      poster: "https://m.media-amazon.com/images/I/81w0s0xX7xL._AC_SL1500_.jpg"
    },
    {
      title: "Titanic",
      genre: "Romance",
      rating: "⭐ 7.8",
      description: "A love story unfolds aboard the ill-fated Titanic.",
      poster: "https://m.media-amazon.com/images/I/71yAzKATZNL._AC_SL1024_.jpg"
    }
  ];
  
  const movieContainer = document.getElementById("movie-container");
  const searchInput = document.getElementById("search");
  const filterButtons = document.querySelectorAll(".filter-btn");
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("close-modal");
  
  // Modal elements
  const modalPoster = document.getElementById("modal-poster");
  const modalTitle = document.getElementById("modal-title");
  const modalGenre = document.getElementById("modal-genre");
  const modalRating = document.getElementById("modal-rating");
  const modalDescription = document.getElementById("modal-description");
  
  function displayMovies(data) {
    movieContainer.innerHTML = "";
    data.forEach(movie => {
      const card = document.createElement("div");
      card.classList.add("movie-card");
      card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}" />
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <p>${movie.rating}</p>
        </div>
      `;
      card.addEventListener("click", () => openModal(movie));
      movieContainer.appendChild(card);
    });
  }
  
  function openModal(movie) {
    modal.style.display = "flex";
    modalPoster.src = movie.poster;
    modalTitle.textContent = movie.title;
    modalGenre.textContent = "Genre: " + movie.genre;
    modalRating.textContent = "Rating: " + movie.rating;
    modalDescription.textContent = movie.description;
  }
  
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });
  
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
  });
  
 
  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();
    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(query)
    );
    displayMovies(filtered);
  });
  

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const genre = btn.dataset.genre;
      if (genre === "All") {
        displayMovies(movies);
      } else {
        const filtered = movies.filter(movie => movie.genre === genre);
        displayMovies(filtered);
      }
    });
  });

  displayMovies(movies);
  