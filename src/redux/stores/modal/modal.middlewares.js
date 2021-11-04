import {
  actionAddMovie,
  actionErrorMovie,
  actionOpenModal,
} from "./modal.actions";
import { GetMovieById } from "../../../services/MovieServices";

export const midLoadMovie = (movieId) => {
  return async (dispatch) => {
    dispatch(actionOpenModal());
    try {
      const movie = await GetMovieById(movieId);
      dispatch(actionAddMovie(movie));
    } catch (e) {
      dispatch(actionErrorMovie());
    }
  };
};
