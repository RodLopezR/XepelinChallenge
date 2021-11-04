import React from "react";
import { Provider } from "react-redux";
//import { PersistGate } from "redux-persist/integration/react";
import { store } from "./config/store";

const Redux = ({ children }) => <Provider store={store}>{children}</Provider>;

export default Redux;
