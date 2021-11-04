const MoviesActions = {
  OPEN_MODAL: "OPEN_MODAL",
  CLOSE_MODAL: "CLOSE_MODAL",
  ADD_MOVIE_MODAL: "ADD_MOVIE_MODAL",
  ERROR_MOVIE_MODAL: "ERROR_MOVIE_MODAL",
};

export const actionOpenModal = () => ({
  type: MoviesActions.OPEN_MODAL,
});

export const actionCloseModal = () => ({
  type: MoviesActions.CLOSE_MODAL,
});

export const actionAddMovie = (movie) => ({
  type: MoviesActions.ADD_MOVIE_MODAL,
  payload: movie,
});

export const actionErrorMovie = () => ({
  type: MoviesActions.ERROR_MOVIE_MODAL,
});

export default MoviesActions;
