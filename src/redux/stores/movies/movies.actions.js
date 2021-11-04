const MoviesActions = {
  ERROR_MOVIES_POPULAR: "ERROR_MOVIES_POPULAR",
  ADD_MOVIES_POPULAR: "ADD_MOVIES_POPULAR",

  ERROR_MOVIES_TOP_RATED: "ERROR_MOVIES_TOP_RATED",
  ADD_MOVIES_TOP_RATED: "ADD_MOVIES_TOP_RATED",

  ERROR_MOVIES_UPCOMING: "ERROR_MOVIES_UPCOMING",
  ADD_MOVIES_UPCOMING: "ADD_MOVIES_UPCOMING",
};

export const actionAddPopularMovie = (movies) => ({
  type: MoviesActions.ADD_MOVIES_POPULAR,
  payload: movies,
});

export const actionAddTopRatedMovie = (movies) => ({
  type: MoviesActions.ADD_MOVIES_TOP_RATED,
  payload: movies,
});

export const actionAddUpcomingMovie = (movies) => ({
  type: MoviesActions.ADD_MOVIES_UPCOMING,
  payload: movies,
});

export const actionErrorPopularMovie = () => ({
  type: MoviesActions.ERROR_MOVIES_POPULAR,
});

export const actionErrorTopRatedMovie = () => ({
  type: MoviesActions.ERROR_MOVIES_TOP_RATED,
});

export const actionErrorUpcomingMovie = () => ({
  type: MoviesActions.ERROR_MOVIES_UPCOMING,
});

export default MoviesActions;
