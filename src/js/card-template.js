import * as common from './common';
import { refs } from './refs';

console.log(common);
console.log(refs.ul);

const onTrendSearch = () => {
 return fetch('https://api.themoviedb.org/3/trending/movie/day?api_key=3c9b3437ebab156a512248e157c99300').then(response => response.json);
}

const renderCard = (films) => {
    const collection = films.map((film) => 
   console.dir(films)
   

    )} 


onTrendSearch().then(console.dir);


//return fetch('https://$(common.BASE_URL}/trending/movie/day?api_key=3c9b3437ebab156a512248e157c99300')