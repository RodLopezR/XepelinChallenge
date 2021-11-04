import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import Styles from "./Banner.module.scss";

const Banner = () => (
  <div className={Styles.banner}>
    <img src="./banner.png" alt="xepelin" />
    <div className={Styles.content}>
      <Grid container>
        <Grid item xs={1} sm={1} md={2} />
        <Grid item xs={10} sm={10} md={8}>
          <div className={Styles.icon}>
            <LocalMoviesIcon />
          </div>
          <div style={{ color: "white", marginTop: "20px" }}>
            <Typography variant="h3">Xepelin Movie Database</Typography>
            <Typography
              variant="h5"
              style={{ fontWeight: "normal", marginTop: "10px" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac
              accumsan odio. Quisque et felis id magna ultricies.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  </div>
);

export default Banner;
