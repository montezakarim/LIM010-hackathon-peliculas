const app= {
showAllMovieSerie: (url, arrayData) =>{
  const objPelis=[];
    for (let i=0; i< arrayData.length; i++)
    {   
       let url_pelis = url+arrayData[i]+'&apikey=4c2bc917'
       fetch(url_pelis ) 
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('data', JSON.stringify(data))
        objPelis.push(data);
        createTemplateCard(objPelis)
       return objPelis;   
      })   
      .catch(err => (err))
    }
},
};
<<<<<<< HEAD
window.app = app;

console.log(app.movieData);
=======
window.app = app;   
>>>>>>> 31a725149c2ee0967ca972d89b81dbe66db72ee3


const searchMovie = (data,peli) => {
    const results = data.filter(obj => obj.title.toLowerCase().startsWith(peli));
    return results;
};
window.searchMovie = searchMovie;
