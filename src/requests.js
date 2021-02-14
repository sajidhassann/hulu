const API_KEY = process.env.REACT_APP_API_KEY;
const fetch = {
  trending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  topRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  actionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  comedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  horrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  romanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  mystery: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
  sciFi: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
  western: `/discover/movie?api_key=${API_KEY}&with_genres=37`,
  animated: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  tv: `/discover/movie?api_key=${API_KEY}&with_genres=10770`,
};

export default fetch;
