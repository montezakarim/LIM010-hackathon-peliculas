const app= {
movieData: (url) =>{
  const objPelis=[];
  const arrayPelis =['American Pie', 'The Hangover', 'The Mask', 'Scary Movie', 'Deadpool', 'Back to the Future', 'Jurassic Park', 'The Lord of the Rings', 'Harry Potter', 'Avengers', 'Pulp Fiction', 'Die Hard', 'Twelve Monkeys', 'Man on Fire', 'Kill Bill', 'The Dark Knight', 'Metropolis', 'Inception', 'A Clockwork Orange', '2001: A Space Odyssey', 'The Exorcist', ' The Shining', 'The Omen', 'Hostel', 'It',
  'Get out','Psycho','The babadook','The cabinet of Dr. Caligari','The silence of the Lambs','Girls Trip','Zoolander','I Heart Huckabees','Tenacious D in The Pick of Destiny','Bridesmaids','Indiana Jones','Star Wars','Jumanji','Jurassic Park','Pirates of the Caribbean: The Curse of the Black Pearl','Mad Max: Fury Road','Metropolis','Gravity','War for the Planet of the Apes','Wall-E','Die Hard','Terminator 2: Judgment Day','The Dark Knight','Drive', 'E.T. The Extra-Terrestrial', 'Seven Samurai'];
  //const arrayPelis =['Get out','Psycho','The babadook','The cabinet of Dr. Caligari',];
    for (let i=0; i< arrayPelis.length; i++)
    {   
       let url_pelis = url+arrayPelis[i]+'&apikey=4c2bc917'
       fetch(url_pelis ) 
      .then(response => response.json())
      .then(data => {
        localStorage.setItem('data', JSON.stringify(data))
        // console.log (data); 
        objPelis.push(data);
        createTemplateCard(objPelis)
       return objPelis;   
      })   
      .catch(err => (err))
    }
},
};
window.app = app;   


