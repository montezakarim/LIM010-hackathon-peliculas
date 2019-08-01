const objPelis=[];
const app= {
  showAllMovieSerie: (url, arrayData) =>{
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
  filterGeneroMovie: (generoId, objPelis) => {
    const filtroporGenero = generoId.filter(generoId =>  generoId.Genre.includes(objPelis));
    //console.log(generoId);
          //console.log(filtroporGenero);
    return filtroporGenero
},
  };
  window.app = app;