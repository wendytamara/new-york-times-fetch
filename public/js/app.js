const form = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
const responseContainer = document.getElementById('response-container');
let searchedForText;

const uri = `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=974c1989f2064ce996936f08935aa84b`;
form.addEventListener('click', function(e){
  e.preventDefault();
     fetch(uri)
     .then(function(response){
         return response.json()
     }).then(function(data){
       console.log(data);
       const article = data.response.docs;

for (var i = 0; i < article.length; i++) {
  const title = article[i].headline.main;
  const snippet = article[i].snippet;
  const url = article[i].web_url;

  let div = document.createElement('div');
  let titulo = document.createElement('p');
  let paragraph = document.createElement('p');
  let link = document.createElement('a');

  div.className = 'articleClass';
  titulo.className = 'format'
  titulo.innerText = title;
  paragraph.innerText = snippet;
  link.innerText = 'leer la noticia completa aqui';
  link.setAttribute('href', url);

  responseContainer.appendChild(div);
  div.appendChild(titulo);
  div.appendChild(paragraph);
  div.appendChild(link);
}

    })
     .catch(function(error){
         console.log(error);
     })
})
