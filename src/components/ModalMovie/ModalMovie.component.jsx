import React from "react";
import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import DialogContent from "@mui/material/DialogContent";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch, useSelector } from "react-redux";

import { selectGetModalStore } from "../../redux/stores/modal/modal.selectors";
import { actionCloseModal } from "../../redux/stores/modal/modal.actions";
import Styles from "./ModalMovie.module.scss";

const ModalMovie = () => {
  const dispatch = useDispatch();
  const { modal, movie } = useSelector(selectGetModalStore);
  const handleClose = () => dispatch(actionCloseModal());

  return (
    <Dialog open={modal} onClose={handleClose}>
      <DialogContent className={Styles.modal}>
        {!movie.loading && movie.data ? (
          <Grid container>
            <Grid item className={Styles.imageWrapper} xs={6}>
              <img
                className={Styles.image}
                alt={movie.data.original_title}
                src={`https://image.tmdb.org/t/p/w500/${movie.data.poster_path}`}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h5">{movie.data.original_title}</Typography>
              <br />
              <Typography variant="body1" color="InfoText">
                {movie.data.overview}
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ModalMovie;
