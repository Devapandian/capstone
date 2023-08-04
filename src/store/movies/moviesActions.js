import {
  GETMOVIE,
  GETMOVIES,
  SETMOVIELOADING,
  GETSLECTEDMOVIES,
} from "./movieTypes";

import { GetMovies, getMovieByid } from "../../services/api.service";

export const getMovie = (id, existingData) => {
  return async (dispatch) => {
    dispatch(GetMovieLoading());
    let newdata = existingData;
    const filtered = existingData?.find((obj) => {
      console.log(obj._id === id,obj._id , id)
      return obj._id === id;
    });
    console.log(existingData,filtered);
    if(filtered){
      return dispatch(GetMovieResponse(filtered));
    }
    let result;
    try {
      result = await getMovieByid(id);
    } catch (e) {
      console.log(e.message);
    }

    if (result && result.success) {
      try {
        newdata.push(result.movie)
        dispatch(GetMovieResponse(result.movie));
        dispatch(SetSelectedMovie(newdata));
      } catch (e) {
        console.log(e.message);
      }
    }
  };
};
export const setSelectedMovie = (existingData, data) => {
  return async (dispatch) => {
    dispatch(GetMovieLoading());
    let newdata = existingData;
    const found = existingData.some((element) => {
      if (element._id === data._id) {
        return true;
      }

      return false;
    });
    if (!found) newdata?.push(data);
    dispatch(SetSelectedMovie(newdata));
  };
};
export const getMovies = () => {
  return async (dispatch) => {
    let result;

    try {
      result = await GetMovies();
    } catch (e) {
      console.log(e);
    }

    if (result && result.success) {
      try {
        dispatch(GetMoviesResponse(result.movie));
      } catch (e) {}
    }
  };
};

export const GetMoviesResponse = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: GETMOVIES,
      payload: payload,
    });
  };
};
export const GetMovieResponse = (payload) => {
  console.log("first")
  return (dispatch) => {
    return dispatch({
      type: GETMOVIE,
      payload: payload,
    });
  };
};
export const GetMovieLoading = () => {
  return (dispatch) => {
    return dispatch({
      type: SETMOVIELOADING,
    });
  };
};
export const SetSelectedMovie = (payload) => {
  return (dispatch) => {
    return dispatch({
      type: GETSLECTEDMOVIES,
      payload: payload,
    });
  };
};
