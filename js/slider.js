const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".btn--left");
const btnRight = document.querySelector(".btn--right");
let baseSliderWidth = slider.offsetWidth;
let activeIndex = 0; // the current page on the slider


let meals =[
    {
      "src": "img/meals/meal-1.jpg",
      "mealTitle": "Guiozas",
      "nutriscore": 92,
      "calories": 412,
      "rating": 4.9,
      "ratings": 8327,
      "mealTags": ["Vegana", "Cetogênica"]
    },
    {
      "src": "img/meals/meal-2.jpg",
      "mealTitle": "Salada de Abacate",
      "nutriscore": 88,
      "calories": 545,
      "rating": 4.1,
      "ratings": 6719,
      "mealTags": ["Vegetariana", "Sem Lactose"]
    },
    {
      "src": "img/gallery/gallery-1.jpg",
      "mealTitle": "Bowl Oriental com Ovo",
      "nutriscore": 97,
      "calories": 388,
      "rating": 4.6,
      "ratings": 5005,
      "mealTags": ["Gluten-Free", "Crianças"]
    },
    {
      "src": "img/gallery/gallery-2.jpg",
      "mealTitle": "Carne com Aspargos",
      "nutriscore": 81,
      "calories": 503,
      "rating": 4.3,
      "ratings": 8364,
      "mealTags": ["Paleo", "Low-Carb"]
    },
    {
      "src": "img/gallery/gallery-3.jpg",
      "mealTitle": "Tábua de Frutas e Frios",
      "nutriscore": 99,
      "calories": 341,
      "rating": 4.4,
      "ratings": 2086,
      "mealTags": ["Vegana", "Vegetariana"]
    },
    {
      "src": "img/gallery/gallery-4.jpg",
      "mealTitle": "Salada de Frutas com yogurte",
      "nutriscore": 83,
      "calories": 576,
      "rating": 4.9,
      "ratings": 5526,
      "mealTags": ["Low-Carb", "Vegetariana"]
    },
    {
      "src": "img/gallery/gallery-6.jpg",
      "mealTitle": "Prato Feito Vegano",
      "nutriscore": 85,
      "calories": 452,
      "rating": 4.7,
      "ratings": 3485,
      "mealTags": ["Cetogênica", "Vegana"]
    },
    {
      "src": "img/gallery/gallery-7.jpg",
      "mealTitle": "Tosta com ovos e abacate",
      "nutriscore": 90,
      "calories": 589,
      "rating": 4.8,
      "ratings": 7121,
      "mealTags": ["Sem Lactose", "Vegana"]
    },
    {
      "src": "img/gallery/gallery-8.jpg",
      "mealTitle": "Mix vegetariano",
      "nutriscore": 86,
      "calories": 396,
      "rating": 4.6,
      "ratings": 9113,
      "mealTags": ["Vegetariana", "Gluten-Free"]
    },
    {
      "src": "img/gallery/gallery-9.jpg",
      "mealTitle": "Peixe grelhado com panados",
      "nutriscore": 95,
      "calories": 317,
      "rating": 4.9,
      "ratings": 3182,
      "mealTags": ["Crianças", "Vegana"]
    }
  ];
  

  // Fill the slider with all the movies in the "movies" array
function populateSlider() {
    meals.forEach((meal) => {
      // Clone the initial movie thats included in the html, then replace the image with a different one
      const newMeal = document.getElementById("meal0");
      let clone = newMeal.cloneNode(true);
  
      let img = clone.querySelector("img");
      let mealTitle = clone.querySelector(".meal-title"); 
      let nutriscore = clone.querySelector(".nutriscore"); 
      let ratings = clone.querySelector(".ratings"); 
      let rating = clone.querySelector(".rating"); 
      let calories = clone.querySelector(".calories"); 
      let mealTags = clone.querySelector(".meal-tags"); 
  
      img.src = meal.src;
      mealTitle.textContent = meal.mealTitle; 
      nutriscore.textContent = meal.nutriscore; 
      rating.textContent = meal.rating;
      ratings.textContent = meal.ratings;
      calories.textContent = meal.calories; 
  
      // Clear existing tags
      mealTags.innerHTML = '';
  
      // Add each tag dynamically
      meal.mealTags.forEach(tag => {
        let tagElement = document.createElement('span');
        tagElement.className = `tag tag--${tag.toLowerCase().replace(/\s/g, "")}`;
        tagElement.textContent = tag;
        mealTags.appendChild(tagElement);
      });
  
      slider.insertBefore(clone, slider.childNodes[slider.childNodes.length - 1]);
    });
  }
  
  
  populateSlider();
  populateSlider();
  
  // delete the initial movie in the html
  const initialMeal = document.getElementById("meal0");
  initialMeal.remove();
  
  // Scroll Left button
  btnLeft.addEventListener("click", function () {
    let mealWidth = document.querySelector(".meal").getBoundingClientRect()
      .width;
    let scrollDistance = mealWidth * 6; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)
  
    slider.scrollBy({
      top: 0,
      left: -scrollDistance,
      behavior: "smooth",
    });
    activeIndex = (activeIndex - 1) % 3;
    console.log(activeIndex);
  });
  
  
  // Scroll Right button
  btnRight.addEventListener("click", function () {
    let mealWidth = document.querySelector(".meal").getBoundingClientRect()
      .width;
    let scrollDistance = mealWidth * 6; // Scroll the length of 6 movies. TODO: make work for mobile because (4 movies/page instead of 6)
  
    console.log(`mealWidth = ${mealWidth}`);
    console.log(`scrolling right ${scrollDistance}`);
  
    // if we're on the last page
    if (activeIndex == 2) {
      // duplicate all the items in the slider (this is how we make 'looping' slider)
      populateSlider();
      slider.scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });
      activeIndex = 0;
    } else {
      slider.scrollBy({
        top: 0,
        left: +scrollDistance,
        behavior: "smooth",
      });
      activeIndex = (activeIndex + 1) % 3;
      console.log(activeIndex);
    }
  });
  
  
  // Adiciona um evento de escuta para detectar mudanças de slide
  slider.addEventListener('scroll', function() {
    // Verifica se o slider foi rolado para a direita
    if (slider.scrollLeft > 0) {
      // Se sim, mostra o botão btn--left
      btnLeft.style.display = 'block';
    } else {
      // Se não, esconde o botão btn--left
      btnLeft.style.display = 'none';
    }
  });