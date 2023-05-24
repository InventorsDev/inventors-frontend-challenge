const imgUrl = "https://image.tmdb.org/t/p/w500";

fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=70c9b853811aa8a0655ce96ab13cb6b3"
)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data.results);
    const containerPath = document.querySelector(".middle");
    const moviePath = document.querySelector(".movies-list");
    const bodymsg = document.querySelector(".msg");
    // document.querySelector("body").style.backgroundImage = url(
    //   "${imgUrl + data.results[15].poster_path}"
    // );

    for (let i = 0; i < 1; i++) {
      const mgs = `
     <h1 class="title">
     <bold>${data.results[15].original_title}</bold>
   </h1>
   <h6 class="data">2023 2h 2m + cc + 4k</h6>
   <div class="play">
     <i class="fa fa-play-circle" aria-hidden="true"></i>
     <input type="submit" value="play" />
     <i id="plus" class="fa fa-plus" aria-hidden="true"></i>
   </div>
   <p class="des">
     <small
       >${data.results[15].overview}</small
     >
   </p>
   <h5 class="txt">Honour. Mystery. Thriller</h5>
   <div class="down">
     <a href="#"><h6>scroll</h6></a>

     <i class="fa fa-angle-double-down" aria-hidden="true"></i>
   </div>`;
      bodymsg.innerHTML += mgs;
    }
    for (let i = 0; i < 5; i++) {
      const movieMarkup = `
      <div class="film">
            <i id="plus" class="fa fa-plus" aria-hidden="true"></i>
            <img src="${imgUrl + data.results[i].poster_path}" alt="image" />
          </div>
      `;
      containerPath.innerHTML += movieMarkup;
    }
    for (let i = 0; i < 2; i++) {
      const trendMorvies = `
      <div class ="movies">
    
      <img src="${imgUrl + data.results[i].poster_path}" />
      <div class="movie-info">
        <h3>${data.results[i].original_title} <span>${
        data.results[i].genre_ids
      }</span></h3>
        <span class="period">${data.results[i].popularity}</span>

        <p>
          ${data.results[i].overview}
        </p>
        <div class="play">
          <i class="fa fa-play-circle" aria-hidden="true"></i>
          <input type="submit" value="play" />
          <i id="arrow" class="fa fa-arrow-down" aria-hidden="true"></i>
        </div>
        </div>
      `;
      moviePath.innerHTML += trendMorvies;
    }
  })
  .catch((err) => console.log(err));
const search = () => {
  const searchBox = document.getElementById("search-item").value.toUppercase();
};
