import {refs} from './refs';
//import {onRenderCard} from './card-template';

const baseUrlForImg = "http://image.tmdb.org/t/p/"; //base_url

console.log(refs.btnWatched);

refs.btnWatched.addEventListener(`click`, onSearch);
 
function onSearch() {
    return fetch('https://api.themoviedb.org/3/configuration?api_key=3c9b3437ebab156a512248e157c99300')
    .then(response => response.json()); 
}

const onCardSizes = (films) => {
    
    const sizes = films.images;
    console.dir(sizes);  
} 


onSearch().then(onCardSizes).catch((error) => console.log(error.message));


