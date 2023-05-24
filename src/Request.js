const key='23e7ac24756e5baa43f7931cc9c1af8b';

export const requests  ={
NowPlaying:`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,   
Popular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,   
TopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,   
Trending:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1&include_ad`,   
Horror:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,   
UpComing:`https://api.themoviedb.org/3/movie/trending?api_key=${key}&language=en-US&page=1`,   

};