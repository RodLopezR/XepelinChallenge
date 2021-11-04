export const selectGetMovieStore = (store) => store.movie;

export const selectPopularMovies = (store) =>
  selectGetMovieStore(store).popular;

export const selectTopRatedMovies = (store) =>
  selectGetMovieStore(store).topRated;

export const selectUpcomingMovies = (store) =>
  selectGetMovieStore(store).upcoming;
