import MoviesActions from "./movies.actions";
import MoviesState from "./movies.state";

const AppReducer = (
  state = MoviesState,
  action = { type: "", payload: null }
) => {
  switch (action.type) {
    case MoviesActions.ADD_MOVIES_POPULAR:
      return {
        ...state,
        popular: { loading: false, error: false, data: action.payload },
      };
    case MoviesActions.ERROR_MOVIES_POPULAR:
      return {
        ...state,
        popular: { ...state.popular, loading: false, error: true },
      };
    case MoviesActions.ADD_MOVIES_TOP_RATED:
      return {
        ...state,
        topRated: { loading: false, error: false, data: action.payload },
      };
    case MoviesActions.ERROR_MOVIES_TOP_RATED:
      return {
        ...state,
        topRated: { ...state.popular, loading: false, error: true },
      };
    case MoviesActions.ADD_MOVIES_UPCOMING:
      return {
        ...state,
        upcoming: { loading: false, error: false, data: action.payload },
      };
    case MoviesActions.ERROR_MOVIES_UPCOMING:
      return {
        ...state,
        upcoming: { ...state.popular, loading: false, error: true },
      };
    default:
      return state;
  }
};

export default AppReducer;
