import { GETMOVIE, GETMOVIES, SETMOVIELOADING,GETSLECTEDMOVIES } from "./movieTypes";

const initialState = {
  movie: { },
  movies: [],
  selectedMovies: [],
  movieLoading: true,
  moviesLoading: true,
  createUser: true,
};

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETMOVIE:
      return { ...state, movie: action.payload, movieLoading: false };
    case GETMOVIES:
      return { ...state, movies: action.payload, moviesLoading: false };
      case GETSLECTEDMOVIES:
      return { ...state, selectedMovies: action.payload, movieLoading: false };
    case SETMOVIELOADING:
      return { ...state, movieLoading: true };
    default:
      return state;
  }
};

export default MovieReducer;
