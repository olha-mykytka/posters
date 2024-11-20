import {films} from '../data/films.js'

console.log(films)

const pathStart = "//www.starwars-visualguide.com/assets/img/films/"

const cardsDiv = document.querySelector('.Cards')

for (let x = 0; x < films.length; x++) {
  let barDiv = document.createElement('div')
  barDiv.innerHTML = `<p>${films[x].title}<p>`

  let myFigure = document.createElement('figure')
  let myImage = document.createElement('img')
  myImage.setAttribute("src", pathStart+films[x].episode_id+".jpg")
  console.log(pathStart+films[x].episode_id+".jpg")
  myImage.setAttribute("alt", films[x].title)
  myFigure.appendChild(myImage)


  let myCaption = document.createElement('figcaption');
  myCaption.innerHTML = `Director: ${films[x].director}<br>
  Producer: ${films[x].producer}<br>
  Released: ${films[x].release_date}` 
  myFigure.appendChild(myCaption)
  
  barDiv.appendChild(myFigure)
  cardsDiv.appendChild(barDiv)

}

const btnGrid = document.querySelector("#gridLayout")
const btnList = document.querySelector("#listLayout")
const pageBody = document.querySelector("body")

btnGrid.addEventListener('click', () => pageBody.className = "paintGrid")
btnList.addEventListener('click', () => pageBody.className = "paintList")


const container = document.querySelector('.posterContainer');

// Function to display movies with either grid or list layout
//function displayMovies(films, layout = 'grid') {
   // container.innerHTML = ''; // Clear container

   // films.forEach(film => {
       // const card = document.createElement('div');
       // card.classList.add('movieCard', layout);

        // Set up the poster image using episode_id as the image number
      //  const poster = document.createElement('img');
      //  poster.src = `https://starwars-visualguide.com/assets/img/films/${film.episode_id}.jpg`;
       // poster.alt = `${film.title} poster`;

        // Movie details
      //  const title = document.createElement('h2');
       // title.textContent = film.title;

       // const director = document.createElement('p');
       // director.textContent = `Director: ${film.director}`;

        //const producer = document.createElement('p');
       // producer.textContent = `Producer: ${film.producer}`;

       // const releaseDate = document.createElement('p');
       // releaseDate.textContent = `Release Date: ${film.release_date}`;

        // Append all elements to the card
      //  card.append(poster, title, director, producer, releaseDate);
      //  container.appendChild(card);
   // });
//}

// Initial display of movies in grid layout
//displayMovies(films);

// Layout switch buttons
//const gridButton = document.querySelector("#gridLayout");
//const listButton = document.querySelector("#listLayout");

// Event listeners for layout switch
//gridButton.addEventListener("click", () => displayMovies(films, 'grid'));
//listButton.addEventListener("click", () => displayMovies(films, 'list'));
