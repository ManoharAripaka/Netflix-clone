const API = "4dcef1e79c1e9f19c5a49d0e2bc7798d";

const requests = {
  fetchTrending: `https://api.themoviedb.org/3/trending/all/week?api_key=${API}&language=en-US`,
  fetchNetflixOriginals: `https://api.themoviedb.org/3/discover/tv?api_key=${API}&with_networks=213`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API}&language=en-US`,
  fetchActionMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=28`,
  fetchComedyMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=35`,
  fetchHorrorMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=27`,
  fetchRomanceMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=10749`,
  fetchDocumentariesMovies: `https://api.themoviedb.org/3/discover/movie?api_key=${API}&with_genres=99`,
};

export default requests;
