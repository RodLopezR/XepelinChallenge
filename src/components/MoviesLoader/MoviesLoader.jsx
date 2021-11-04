import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import SectionList from "../SectionList";
import {
  selectPopularMovies,
  selectTopRatedMovies,
  selectUpcomingMovies,
} from "../../redux/stores/movies/movie.selectors";
import { midLoadMovies } from "../../redux/stores/movies/movie.middlewares";

const MoviesLoader = () => {
  const dispatch = useDispatch();
  const populars = useSelector(selectPopularMovies);
  const topRated = useSelector(selectTopRatedMovies);
  const upcoming = useSelector(selectUpcomingMovies);

  useEffect(() => {
    dispatch(midLoadMovies());
  }, [dispatch]);

  console.log(topRated);
  console.log(upcoming);

  return (
    <Container maxWidth="lg">
      <Grid item xs={12}>
        <br />
        <br />
      </Grid>
      <SectionList
        title="Más populares"
        subtitle="Nullam sapien arcu tempor"
        {...populars}
      />
      <SectionList
        title="Peliculas"
        subtitle="Subtitulo"
        {...topRated}
      />
      <SectionList
        title="Peliculas"
        subtitle="Subtitulo"
        {...upcoming}
      />
    </Container>
  );
};

export default MoviesLoader;
