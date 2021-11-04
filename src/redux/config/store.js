import { createStore, applyMiddleware, compose } from "redux";
//import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./root-reducer";

const middlewares = [];
middlewares.push(thunk);
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}

const composerEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(
  rootReducer,
  composerEnhancers(applyMiddleware(...middlewares))
);

export const persistor = store;//persistStore(store);
