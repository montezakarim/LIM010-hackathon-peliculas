const movieContainer = document.getElementById('all-movies');
const urlMovie = 'https://www.omdbapi.com/?t=';
const urlSerie = 'https://www.omdbapi.com/?s=';
app.movieData(urlMovie);
const createTemplateCard = list => {
  let templateCard = '';
	list.forEach(element => {
		const card = `
        <div class="card col-lg-3 col-md-6 col-sm-12">
         <div class="card-body" style="width = 20rem;">
           <img src="${element.Poster}" class="card-img-top" alt="${element.Title}">
           <div class="card-body">
           <h5 id="product-name" class="card-title d-flex justify-content-center">${element.Title}</h5>
           </div>
         </div>
        </div>`;
			templateCard += card;
	});
	movieContainer.innerHTML = templateCard;
};
