import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

import { midLoadMovie } from "../../redux/stores/modal/modal.middlewares";
import Styles from "./MovieItem.module.scss";

const MovieItem = ({ movie }) => {
  const dispatch = useDispatch();
  const handleClick = () => dispatch(midLoadMovie(movie.id));
  return (
    <div className={Styles.movie} onClick={handleClick}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
      />
      <div>
        <Typography variant="body1">{movie.original_title}</Typography>
        <Typography variant="body1">{movie.release_date}</Typography>
      </div>
    </div>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieItem;
