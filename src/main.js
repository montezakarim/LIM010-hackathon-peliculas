const movieContainer = document.getElementById('all-movies');
const urlMovie = 'https://www.omdbapi.com/?t=';
const urlSerie = 'http://www.omdbapi.com/?s=';
const arrayPelis =['American Pie', 'The Hangover', 'The Mask', 'Scary Movie', 'Deadpool', 'Back to the Future', 'Jurassic Park', 'The Lord of the Rings', 'Harry Potter', 'Avengers', 'Pulp Fiction', 'Die Hard', 'Twelve Monkeys', 'Man on Fire', 'Kill Bill', 'The Dark Knight', 'Metropolis', 'Inception', 'A Clockwork Orange', '2001: A Space Odyssey', 'The Exorcist', ' The Shining', 'The Omen', 'Hostel', 'It',
  'Get out','Psycho','The babadook','The cabinet of Dr. Caligari','The silence of the Lambs','Girls Trip','Zoolander','I Heart Huckabees','Tenacious D in The Pick of Destiny','Bridesmaids','Indiana Jones','Star Wars','Jumanji','Jurassic Park','Pirates of the Caribbean: The Curse of the Black Pearl','Mad Max: Fury Road','Metropolis','Gravity','War for the Planet of the Apes','Wall-E','Die Hard','Terminator 2: Judgment Day','The Dark Knight','Drive', 'E.T. The Extra-Terrestrial', 'Seven Samurai'];
const arraySeries =['Sex Education', 'Pocoyo and the Space Circus','Friends', 'Suits', 'The Flash', 'Dark', 'Breaking Bad', 'Zoo','Black Mirror: Bandersnatch', 'Merlí','Mickey Mouse Clubhouse', 'The Rain', 'Sense8','Blindspot','The OA'];
// app.showAllMovieSerie(urlMovie,arrayPelis);
app.showAllMovieSerie(urlSerie,arraySeries);
// const createTemplateCard = list => {
//   let templateCard = '';
//   list.forEach(element => {
//     const card = `
//         <div class="card col-lg-3 col-md-6 col-sm-12">
//          <div class="card-body" style="width = 20rem;">
//            <img src="${element.Poster}" class="card-img-top" alt="${element.Title}">
//            <div class="card-body">
//            <h5 id="product-name" class="card-title d-flex justify-content-center">${element.Title}</h5>
//            </div>
//          </div>
//         </div>`;
//     templateCard += card;
//   });
//   movieContainer.innerHTML = templateCard;
// };

const createTemplateCard = list => {
  let templateCard = '';
  list.forEach(element => {
    const card = `
        <div class="card col-lg-3 col-md-6 col-sm-12">
         <div class="card-body" style="width = 20rem;">
           <img src="${element.Search[0].Poster}" class="card-img-top" alt="${element.Search[0].Title}">
           <div class="card-body">
           <h5 id="product-name" class="card-title d-flex justify-content-center">${element.Search[0].Title}</h5>
           </div>
         </div>
        </div>`;
    templateCard += card;
  });
  movieContainer.innerHTML = templateCard;
};