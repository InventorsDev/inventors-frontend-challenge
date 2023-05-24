

export async function getMovieList(page: number) {
  // const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY }&page=${page}`;
    const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=337276aee7bc33e091493ae6b6aabb77&page=${page}`);
    const data = await response.json();
    const movieList = data.results;
    return movieList;
} 
