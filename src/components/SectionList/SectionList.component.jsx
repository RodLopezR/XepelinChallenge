import React from "react";
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";
import Carousel from "react-multi-carousel";
import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MovieItem from "../MovieItem/MovieItem.component";

const responsiveCarousel = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 736, min: 0 },
    items: 3,
  },
};

const SectionList = ({ title, subtitle, error, loading, data }) => {
  if (error) {
    return <div>Error</div>;
  }

  return (
    <Grid container style={{ marginBottom: "20px" }}>
      <Grid item xs={12}>
        <Typography variant="h6" style={{ display: "inline-block" }}>
          {title}
        </Typography>
        <ArrowForwardIcon
          style={{ verticalAlign: "top", marginTop: "5px", marginLeft: "5px" }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1">{subtitle}</Typography>
      </Grid>
      <Grid item xs={12} style={{ paddingTop: "10px" }}>
        {loading ? (
          <Skeleton width="100%" height="100px" />
        ) : (
          <Carousel responsive={responsiveCarousel}>
            {data.results.map((item) => (
              <MovieItem key={item.id} movie={item} />
            ))}
          </Carousel>
        )}
      </Grid>
    </Grid>
  );
};

SectionList.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  data: PropTypes.shape({}),
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
};

SectionList.defaultProps = {
  items: [],
  loading: true,
  error: false,
};

export default SectionList;
