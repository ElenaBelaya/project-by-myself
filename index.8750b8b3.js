function e(e,n,t,i){Object.defineProperty(e,n,{get:t,set:i,enumerable:!0,configurable:!0})}var n={};e(n,"BASE_URL",(function(){return t})),e(n,"KEY",(function(){return i}));const t="https://api.themoviedb.org/3",i="476dab1d501621899284a1a134c160d7",s={ul:document.querySelector(".film-list")};console.log(n),console.log(s.ul);fetch("https://api.themoviedb.org/3/trending/movie/day?api_key=3c9b3437ebab156a512248e157c99300").then((e=>e.json())).then((e=>{e.results.map((({id:e,poster_path:n,title:t,genre_ids:i,release_date:s})=>`\n    <li class="film-card" id=${e}>\n        <img class="film-img" src="http://image.tmdb.org/t/p/w500/${n}" alt="${t}"/>\n        <div class="film-description">\n        <p class="film-name">${t}</p>\n        <span class="film-genre">${i} |</span>\n        <span class="film-year_of_issue">${s}</span>\n        </div>\n    </li>\n        `))}));
//# sourceMappingURL=index.8750b8b3.js.map
