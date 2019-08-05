const app = {
  showAllMovieSerie: (url, arrayData) => {
    const objPelis = [];
<<<<<<< HEAD
    for (let i = 0; i < arrayData.length; i++) {
      let url_pelis = url + arrayData[i] + '&apikey=4c2bc917'
=======

    for (let i = 0; i < arrayData.length; i++) {
      let url_pelis = url + encodeURI(arrayData[i]) + '&apikey=8395a4e3'
>>>>>>> 299ed7ba55aaa1231c8be253154ff6c50f13bc54
      fetch(url_pelis)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('data', JSON.stringify(data))
          // console.log(data);
          objPelis.push(data);
          createTemplateCard(objPelis)
          return objPelis;
        })
        .catch(err => (err))
    }
  },
<<<<<<< HEAD
};

const apps = {
  showAllMovieSeries: (url, arrayData) => {
    const objPelis = [];
    for (let i = 0; i < arrayData.length; i++) {
      let url_pelis = url + arrayData[i] + '&apikey=4c2bc917'
      fetch(url_pelis)
        .then(response => response.json())
        .then(data => {
          localStorage.setItem('data', JSON.stringify(data))
          objPelis.push(data);
          createTemplateCardSeries(objPelis)
          return objPelis;
        })
        .catch(err => (err))
    }
  },
};

window.app = app;
window.apps = apps;
=======

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
>>>>>>> 299ed7ba55aaa1231c8be253154ff6c50f13bc54
