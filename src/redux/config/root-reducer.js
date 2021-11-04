import { combineReducers } from "redux";
//import { persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";

import MoviesReducer from "../stores/movies/movies.reducer";
import ModalReducer from "../stores/modal/modal.reducer";

/*const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};*/

const rootReducer = combineReducers({
  movie: MoviesReducer,
  modal: ModalReducer,
});

export default rootReducer; //persistReducer(persistConfig, rootReducer);
