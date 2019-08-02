const app = {
  showAllMovieSerie: (url, arrayData) => {
    const objPelis = [];
    
    for (let i = 0; i < arrayData.length; i++) {
      let url_pelis = url + encodeURI(arrayData[i]) + '&apikey=8395a4e3'
      fetch(url_pelis)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('data', JSON.stringify(data))
           console.log(data);
          objPelis.push(data);
          createTemplateCard(objPelis)
          return objPelis;
        })
        .catch(err => (err))
    }
  },

  showSearch: (url) => {
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
  },

/* filtroGenero: (generoId, objPelis) => {
  const filtroporGenero = generoId.filter(generoId =>  generoId.Genre.includes(objPelis));
  //console.log(generoId);
        //console.log(filtroporGenero);
  return filtroporGenero
}, */
};
window.app = app;
