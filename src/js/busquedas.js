document.addEventListener("DOMContentLoaded", function() {
    // Obtén referencias a los elementos de entrada y botón de búsqueda
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const cardContainer = document.querySelector(".cardsContainer");
    const separators = document.querySelectorAll(".separador");
    // Agrega un controlador de eventos al botón de búsqueda
    searchButton.addEventListener("click", function() {
      searchCards();
    });
  
    // Agrega un controlador de eventos para la tecla Enter en el campo de entrada
    searchInput.addEventListener("keyup", function(event) {
      if (event.key === "Enter") {
        searchCards();
      }
    });

    searchButton.addEventListener("click", function() {
      searchCards();
    });
  
    // Función para buscar las cartas por título
    function searchCards() {
      const searchTerm = searchInput.value.toLowerCase().trim();
      const cards = cardContainer.querySelectorAll(".carousel-item");
  
      cards.forEach(card => {
        const titleElement = card.querySelector("h2");
        if (titleElement) {
          const title = titleElement.textContent.toLowerCase();
          if (title.includes(searchTerm)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        }
      });
        separators.forEach(separator => {
            separator.style.display="none";
        })
        carrusel.forEach(carrusel =>{
            carrusel.style.display="none";
        })


    }
  });