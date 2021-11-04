import React, { Fragment } from "react";
import "react-multi-carousel/lib/styles.css";

import Redux from "../redux";
import Banner from "../components/Banner";
import ModalMovie from "../components/ModalMovie";
import MoviesLoader from "../components/MoviesLoader";

const App = () => (
  <Redux>
    <Fragment>
      <Banner />
      <MoviesLoader />
      <ModalMovie />
    </Fragment>
  </Redux>
);

export default App;
