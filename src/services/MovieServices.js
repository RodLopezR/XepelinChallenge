import axios from "axios";

export const GetMovieById = async (movieId) => {
  try {
    const apiKey = process.env.REACT_APP_TOKEN_API;
    const oAxiosResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`
    );
    if (
      oAxiosResponse &&
      oAxiosResponse.data &&
      oAxiosResponse.status === 200
    ) {
      return oAxiosResponse.data;
    }
    throw new Error("No se pudo cargar películas populares");
  } catch (e) {
    throw e;
  }
};

export const GetPopularMovies = async () => {
  try {
    const apiKey = process.env.REACT_APP_TOKEN_API;
    const oAxiosResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );
    if (
      oAxiosResponse &&
      oAxiosResponse.data &&
      oAxiosResponse.status === 200
    ) {
      return oAxiosResponse.data;
    }
    throw new Error("No se pudo cargar películas populares");
  } catch (e) {
    throw e;
  }
};

export const GetTopRatedMovies = async () => {
  try {
    const apiKey = process.env.REACT_APP_TOKEN_API;
    const oAxiosResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}`
    );
    if (
      oAxiosResponse &&
      oAxiosResponse.data &&
      oAxiosResponse.status === 200
    ) {
      return oAxiosResponse.data;
    }
    throw new Error("No se pudo cargar películas populares");
  } catch (e) {
    throw e;
  }
};

export const GetUpcomingMovies = async () => {
  try {
    const apiKey = process.env.REACT_APP_TOKEN_API;
    const oAxiosResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`
    );
    if (
      oAxiosResponse &&
      oAxiosResponse.data &&
      oAxiosResponse.status === 200
    ) {
      return oAxiosResponse.data;
    }
    throw new Error("No se pudo cargar películas populares");
  } catch (e) {
    throw e;
  }
};
