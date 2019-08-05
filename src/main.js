const movieContainer = document.getElementById('all-movies');
const billboard = document.getElementById('billboard');
const filterMovie = document.getElementById('filter-movie');
const filterSerie = document.getElementById('filter-serie');

const carousel = document.getElementById('carousel')

const urlMovie = 'https://www.omdbapi.com/?t=';
const urlSerie = 'https://www.omdbapi.com/?s=';

const arrayPelis = ['Paddleton', '1922', 'Thor: The Dark World', 'Todo o Nada','Okja', 'First Match', 'Cargo', 'American Pie', 'The Hangover', 'The Mask', 'Scary Movie', 'Deadpool', 'Back to the Future', 'Jurassic Park', 'The Lord of the Rings', 'Harry Potter', 'Avengers', 'Pulp Fiction', 'Die Hard', 'Twelve Monkeys', 'Man on Fire', 'Kill Bill', 'The Dark Knight', 'Metropolis', 'Inception', 'A Clockwork Orange', '2001: A Space Odyssey', 'The Exorcist', ' The Shining', 'The Omen', 'Hostel', 'It',
 'Get out', 'Psycho', 'The babadook', 'The cabinet of Dr. Caligari', 'The silence of the Lambs', 'Girls Trip', 'Zoolander', 'I Heart Huckabees', 'Tenacious D in The Pick of Destiny', 'Bridesmaids', 'Indiana Jones', 'Star Wars', 'Jumanji', 'Jurassic Park', 'Pirates of the Caribbean: The Curse of the Black Pearl', 'Mad Max: Fury Road', 'Metropolis', 'Gravity', 'War for the Planet of the Apes', 'Wall-E', 'Die Hard', 'Terminator 2: Judgment Day', 'The Dark Knight', 'Drive', 'E.T. The Extra-Terrestrial', 'Seven Samurai'];
const arraySerie = ['Sex Education','Bobby Kennedy for President', 'GLOW','Stranger Things','Lovesick','Russian Doll','On My Block','Unbreakable Kimmy Schmidt','Big Mouth','Glee', 'Outlander','Lady Dynamite','Mindhunter','Wild Wild Country','The End of the F***ing World','The Keepers','American Vandal', 'Pocoyo and the Space Circus', 'Friends', 'The Sinner', 'Suits', 'The Flash', 'Dark', 'Breaking Bad', 'Zoo', 'Black Mirror: Bandersnatch', 'Merlí', 'Mickey Mouse Clubhouse', 'The Rain', 'Sense8', 'Blindspot', 'The OA'];
const arrayCartelera = ['Friends', 'The Sinner', 'Thor: The Dark World', 'Todo o Nada','Okja', 'First Match', 'Cargo', 'American Pie', 'The Hangover', 'The Mask', 'Scary Movie', 'Deadpool', 'Back to the Future', 'Jurassic Park', 'The Lord of the Rings', 'Harry Potter', 'Avengers', 'Pulp Fiction', 'Die Hard', 'Twelve Monkeys', 'Man on Fire', 'Kill Bill', 'The Dark Knight', 'Metropolis', 'Inception', 'A Clockwork Orange', '2001: A Space Odyssey', 'The Exorcist', ' The Shining', 'The Omen', 'Hostel', 'It', 'The Hangover', 'The Mask', 'Scary Movie', 'Deadpool', 'Back to the Future', 'The Flash', 'Dark', 'Breaking Bad', 'Zoo'];

const createTemplateCard = (data) => {
  let templateCard = '';
  data.forEach(element => {
    const card = `
        <div id="TemplateCard" class="card col-lg-3 col-md-6 col-sm-12">
        <div class="card-body bd-dark style="width = 20rem;">
           <img src="${element.Poster}" class="card-img-top" alt="${element.Title}">
           <div class="card-body">
           <h5 id="product-name" class="card-title d-flex justify-content-center">${element.Title}</h5>
           <h6 id="product-name" class="card-text d-flex justify-content-center">${element.Genre}</h5>
           <h6 id="product-name" class="card-text d-flex justify-content-center">${element.Year}</h5>
           </div>
         </div>
        </div>`;
    templateCard += card;
  });
  movieContainer.innerHTML = templateCard;
};

app.showAllMovieSerie(urlMovie, arrayCartelera);

const showMovies = (event) => {
  event.preventDefault();
  app.showAllMovieSerie(urlMovie, arrayPelis);
  carousel.classList.remove('hide')
};

filterMovie.addEventListener('click', showMovies);

const showSeries = (event) => {
  event.preventDefault();
  app.showAllMovieSerie(urlMovie, arraySerie);
  carousel.classList.remove('hide')
};
filterSerie.addEventListener('click', showSeries);

const showCartelera = (event) => {
  event.preventDefault();
  app.showAllMovieSerie(urlMovie, arrayCartelera);
  carousel.classList.remove('hide')
};
billboard.addEventListener('click', showCartelera);

const searchMovieInput = document.getElementById('input-search-movies');
const buttonSearchMovie = document.getElementById('button-search-movies');

buttonSearchMovie.addEventListener('click', () => {
  let valueSearch;
  debugger;
   valueSearch = searchMovieInput.value;
  showSearchMovie(`https://www.omdbapi.com/?s=${encodeURI(valueSearch)}&apikey=8395a4e3`);
});

const showSearchMovie = (url) => {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      createTemplateCard(data.Search)
    })
    .catch(error => {
      return error;
    });
};


/* const dropdownGenero = document.getElementsByClassName('dropdown-item');
console.log(dropdownGenero);
const selectGenero = () => {
  
  for (let i = 0; i < dropdownGenero.length; i++) {
    dropdownGenero[i].addEventListener("click", () => {
      alert('ok');
      //console.log("hola")
      let generoId = dropdownGenero[i].id;
      // title.innerHTML = "";
      // subtitle.innerHTML = generoId;
      debugger;
      let objPelis1 = [];
      objPelis1 = app.showAllMovieSerie(urlMovie, arrayCartelera);
      const arrayGeneroPeli = app.filtroGenero(objPelis, generoId);
      //console.log(arrayGenero)
      createTemplateCard(arrayGeneroPeli);
      // productWrapper.innerHTML = "";
      return arrayGeneroPeli;
      //getMovies (arrayGeneroPeli)
    })
  }
}; */

 /*  const typeHorror = document.getElementById('Horror');
  typeHorror.addEventListener("click", () => {
    alert('sa');
    const arrayGeneroPeli = app.filtroGenero('app.showAllMovieSerie(urlMovie, arrayCartelera)', generoId);
      //console.log(arrayGenero)
      createTemplateCard(arrayGeneroPeli);
  }); */
