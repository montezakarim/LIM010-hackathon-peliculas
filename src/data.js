const app= {
movieData: () =>{
  
},
};
window.app = app;

console.log(app.movieData);


const searchMovie = (data,peli) => {
    const results = data.filter(obj => obj.title.toLowerCase().startsWith(peli));
    return results;
};
window.searchMovie = searchMovie;
