const apiURL = 'https://api.themoviedb.org/3/movie/popular?api_key=2969cb5dab804fa038e6147c4bca25d4';
const imgURL = "https://image.tmdb.org/t/p/w1280/"
const trendingUrl = 'https://api.themoviedb.org/3/trending/movie/day?api_key=2969cb5dab804fa038e6147c4bca25d4';
const seriesUrl = 'https://api.themoviedb.org/3/tv/popular?api_key=2969cb5dab804fa038e6147c4bca25d4';
searchAPI =  'https://api.themoviedb.org/3/search/movie?api_key=2969cb5dab804fa038e6147c4bca25d4'

const search = document.getElementById('search');
const form = document.getElementById('form');

const movie_cards = document.getElementsByClassName('movie_cards')[0];
const movie_cards_series = document.getElementsByClassName('movie_cards_series')[0];


viewAllLink = document.querySelector('.trending_top a');
viewAllSeries = document.getElementById('view_all')

// Variable to store the initial 5 movies
let initialMovies = [];
let initialSeries = [];
// Sort variables
let isSortOptionsVisible = false;
//left and right sliding
const movieContainer = document.querySelector('.movie_cards');
const prevButton = document.querySelector('.left_nextIcon');
const nextButton = document.querySelector('.right_nextIcon');
const prevSeriesButton = document.querySelector('.prev_Icon');
const nextSeriesButton = document.querySelector('.next_Icon');

let movieIndex = 0;
let seriesIndex = 0;
//add event listeners to next and prev buttons
prevSeriesButton.addEventListener('click', () => {
    seriesIndex = Math.max(seriesIndex - 1, 0)
    showSeries(initialSeries, movie_cards_series)
    console.log('prev series button')
})
prevButton.addEventListener('click', () => {
    movieIndex = Math.max(movieIndex - 1, 0) //movie index should never be negative
    showMovies(initialMovies, movie_cards)
    console.log('prevButton')
})
nextSeriesButton.addEventListener('click', () => {
    const totalSeries = initialSeries.length;
    seriesIndex = (seriesIndex + 1) % totalSeries;
    const seriesEndIndex = (seriesIndex + 5) % totalSeries;
    const visibleSeries = initialSeries.slice(seriesIndex, seriesEndIndex);
    showSeries(visibleSeries, movie_cards_series);
   
 console.log('clicked next')
});
nextButton.addEventListener('click', () => {
    movieIndex = Math.min(movieIndex + 1, initialMovies.length - 1) 
    showMovies(initialMovies, movie_cards);
});



//get trending movies with initial 5 movies only
trendingMovies(trendingUrl)

//apply backgroundImage
function applyBackgroundImage(imageUrl, title, releaseDate, overview) {
    const backgroundElement = document.querySelector('.background_image');
    backgroundElement.style.backgroundImage = `url(${imageUrl})`;
    backgroundElement.style.backgroundSize = 'cover';
    backgroundElement.style.backgroundPosition = 'center';
    backgroundElement.style.backgroundRepeat = 'no-repeat';
    const backgroundContent = document.createElement('div');
    backgroundContent.classList.add('background_content');
    backgroundContent.innerHTML = `
      <h1>${title}</h1>
      <p>${releaseDate}</p>
      <div class="play_buttons">
      <button class="play_button"><i class="fas fa-play"></i>Play</button>
      <button class="plus_button"><i class="fas fa-plus"></i></button>
    </div>
      <p>${overview}</p>
    `;
  
    backgroundElement.appendChild(backgroundContent);
  
}

async function trendingMovies(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    initialMovies = jsonData.results;
    console.log(initialMovies)
    if (initialMovies.length > 0){
        const firstMovie = initialMovies[0];
        const backgroundImageURL = imgURL + firstMovie.poster_path;
        const title = firstMovie.title;
        const releaseDate = firstMovie.release_date;
        const overview = firstMovie.overview;
        applyBackgroundImage(backgroundImageURL, title, releaseDate, overview);
    }


    showMovies(initialMovies, movie_cards, movieIndex);

   
}

const showMovies = (movies, container) => {
    container.innerHTML = '';
    movies.forEach((movie, i) => {
        const { title, poster_path, vote_average, runtime, genre_ids } = movie;
        const card = document.createElement('div')
        card.classList.add('movie_card');
         card.style.transform = `translateX(${(i - movieIndex) * 2}rem)`;
        card.innerHTML = `
        <img src="${imgURL + poster_path}" alt="${title}"/>  
         `
        //add click listener to movie card
        card.addEventListener('click', () => {
            //populate the modal
            document.getElementById('modal-title').textContent = title;
            document.getElementById('modal-rating').textContent = vote_average;
            document.getElementById('modal-runtime').textContent = runtime;
            document.getElementById('modal-genre').textContent = genre_ids;

            // //show the modal
            const modal = document.getElementById('modal');
            modal.style.display = 'block';
        })
        container.appendChild(card);

        })


    }
  
//close the modal when open
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('close')) {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
    }
});


viewAllSeries.addEventListener('click', () => {
    // Call the trendingMovies function again to fetch and display all the trending movies
    series(seriesUrl)
});
//get series 
series(seriesUrl)
async function series(url) {
    const response = await fetch(url);
    const jsonData = await response.json();
    initialSeries = jsonData.results;
    console.log(initialSeries)
    // if (limit) {
    //     seriesData = seriesData.slice(0, limit);
    // }
    showSeries(initialSeries, movie_cards_series);
}




const showSeries = (series, container) => {
    container.innerHTML = '';
    series.forEach((item, i) => {
        const { original_name, poster_path, vote_average, overview, first_air_date } = item;
        const card = document.createElement('div')
        card.innerHTML = `
        <img src="${imgURL + poster_path}" alt="${original_name}"/>  
         `;
        card.classList.add('movie_card_series');
        card.style.transform = `translateX(${(i - seriesIndex) * 1}rem)`;

        const cardDetails = document.createElement('div');
        cardDetails.classList.add('card_details');
        //limit the overview to a maximum of limited words
        const words = overview.split(' ');
        const limitedWords = words.slice(0, 10).join(' ');
        cardDetails.innerHTML = ` 
            <p class="card_titile">${original_name}<span>${first_air_date}</span></p>
            <p class="card_space">25.26 EP<span></span>3.86 GB</p>
            <p class="card_text">${limitedWords}...</p>
            <div class="hero_play_div">
              <p class="hero_play"><i class="fa fa-play"></i> play</p>
              <p class="paly_plus_icon"><i class="fa fa-arrow-down"></i> </p>
            </div>
        `

        card.appendChild(cardDetails)
        container.appendChild(card);
     

    })
    
};

//search movies
form.addEventListener('submit', async (e) =>{
    e.preventDefault();
    const searchTitle = search.value;
    if(searchTitle) {
        const searchURL = searchAPI + '&query=' + searchTitle;
        const response = await fetch(searchURL);
        const jsonData = await response.json();
        const searchResults = jsonData.results;
        showMovies(searchResults, movie_cards);
        search.value = '';
    }
});

//  event listener to  sort icon
const sortIcon = document.querySelector('.sort i');
const sortOptions = document.querySelector('.sort-options');

sortIcon.addEventListener('click', () => {
    isSortOptionsVisible = !isSortOptionsVisible;
    sortOptions.style.display = isSortOptionsVisible ? 'block' : 'none';
  });

//event listener to the sort options
const sortReleaseDateButton = document.getElementById('sort-release-date');
sortReleaseDateButton.addEventListener('click', () => {
  sortMoviesByReleaseDate();
  sortSeriesByReleaseDate();
});

const sortPopularityButton = document.getElementById('sort-popularity');
sortPopularityButton.addEventListener('click', () => {
  sortMoviesByPopularity();
  sortSeriesByPopularity();
});

// Function to sort the movies by release date
function sortMoviesByReleaseDate() {
    initialMovies.sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return dateA - dateB;
    });
  
    showMovies(initialMovies, movie_cards);
  }
  //sort by popularity
  function sortMoviesByPopularity() {
    initialMovies.sort((a, b) => b.popularity - a.popularity);
  
    showMovies(initialMovies, movie_cards);
  }
  
  //function to sort series
  function sortSeriesByReleaseDate() {
    initialSeries.sort((a, b) => {
      const dateA = new Date(a.first_air_date);
      const dateB = new Date(b.first_air_date);
      return dateA - dateB;
    });
  
    showSeries(initialSeries, movie_cards_series);
  }
  //sort by popularity
  function sortSeriesByPopularity() {
    initialSeries.sort((a, b) => b.popularity - a.popularity);
  
    showSeries(initialSeries, movie_cards_series);
  }

  // Toggle the collapsed class on menu toggle click
const menuToggle = document.querySelector('.menu_toggle');
const navbarSection = document.querySelector('.navbar_section');

menuToggle.addEventListener('click', () => {
  navbarSection.classList.toggle('collapsed');
});