!function(){var n={ul:document.querySelector(".film-list"),btnWatched:document.querySelector("button")};function e(){return fetch("https://api.themoviedb.org/3/configuration?api_key=3c9b3437ebab156a512248e157c99300").then((function(n){return n.json()}))}console.log(n.btnWatched),n.btnWatched.addEventListener("click",e);e().then((function(n){var e=n.images;console.dir(e)})).catch((function(n){return console.log(n.message)}));console.log("https://api.themoviedb.org/3");fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=3c9b3437ebab156a512248e157c99300").then((function(n){return n.json()})).then((function(e){console.dir(e);var t=e.results.map((function(n){var e=n.id,t=n.poster_path,c=n.title,o=n.genre_ids,a=n.release_date;return'\n    <li class="film-card" id='.concat(e,'>\n        <img class="film-img" src="http://image.tmdb.org/t/p/w780/').concat(t,'" alt="').concat(c,'"/>\n        <div class="film-description">\n        <p class="film-name">').concat(c,'</p>\n        <span class="film-genre">').concat(o,' |</span>\n        <span class="film-year_of_issue">').concat(a,"</span>\n        </div>\n    </li>\n        ")}));n.ul.insertAdjacentHTML("beforeend",t)})).catch((function(n){return console.log(n.message)}))}();
//# sourceMappingURL=index.78374d45.js.map