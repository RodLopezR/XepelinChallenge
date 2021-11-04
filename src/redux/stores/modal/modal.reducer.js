import MoviesActions from "./modal.actions";
import MoviesState from "./modal.state";

const ModalReducer = (
  state = MoviesState,
  action = { type: "", payload: null }
) => {
  switch (action.type) {
    case MoviesActions.OPEN_MODAL:
      return {
        ...state,
        modal: true,
      };
    case MoviesActions.CLOSE_MODAL:
      return {
        ...state,
        modal: false,
        movie: { loading: true, error: false, data: null },
      };
    case MoviesActions.ADD_MOVIE_MODAL:
      return {
        ...state,
        movie: { loading: false, error: false, data: action.payload },
      };
    case MoviesActions.ERROR_MOVIE_MODAL:
      return {
        ...state,
        modal: false,
        movie: { ...state.movie, loading: false, error: true },
      };
    default:
      return state;
  }
};

export default ModalReducer;
