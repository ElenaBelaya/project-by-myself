import * as common from './common';
import { refs } from './refs';

console.log(common.BASE_URL);


const onTrendSearch = () => {
 return fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=3c9b3437ebab156a512248e157c99300')
 .then(response => response.json());
}

export const onRenderCard = (films) => {
    console.dir(films);
    const collection = films.results.map(({id, poster_path, title, genre_ids, release_date}) => 
        `
    <li class="film-card" id=${id}>
        <img class="film-img" src="http://image.tmdb.org/t/p/w780/${poster_path}" alt="${title}"/>
        <div class="film-description">
        <p class="film-name">${title}</p>
        <span class="film-genre">${genre_ids} |</span>
        <span class="film-year_of_issue">${release_date}</span>
        </div>
    </li>
        `
             
    )
 refs.ul.insertAdjacentHTML('beforeend', collection);  
} 


onTrendSearch().then(onRenderCard).catch((error) => console.log(error.message));


