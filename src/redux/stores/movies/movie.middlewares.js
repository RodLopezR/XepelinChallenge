import {
  actionAddPopularMovie,
  actionAddTopRatedMovie,
  actionAddUpcomingMovie,
  actionErrorPopularMovie,
  actionErrorTopRatedMovie,
  actionErrorUpcomingMovie,
} from "./movies.actions";
import {
  GetPopularMovies,
  GetTopRatedMovies,
  GetUpcomingMovies,
} from "../../../services/MovieServices";

export const midLoadMovies = () => {
  return async (dispatch) => {
    try {
      const popular = await GetPopularMovies();
      dispatch(actionAddPopularMovie(popular));
    } catch (e) {
      dispatch(actionErrorPopularMovie());
    }

    try {
      const topRated = await GetTopRatedMovies();
      dispatch(actionAddTopRatedMovie(topRated));
    } catch (e) {
      dispatch(actionErrorTopRatedMovie());
    }

    try {
      const upcoming = await GetUpcomingMovies();
      dispatch(actionAddUpcomingMovie(upcoming));
    } catch (e) {
      dispatch(actionErrorUpcomingMovie());
    }
  };
};
