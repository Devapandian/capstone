import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getMovie, setSelectedMovie } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { Box, Card, CircularProgress } from "@mui/material";
import "./index.css";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const state = useSelector((state) => state);
  // const [found, setFound] = useState(false);
  useEffect(() => {
    // if (id) {
    //   if (state.Movie?.selectedMovies.length) {
    //     const founds = state.Movie?.selectedMovies.filter((obj) => {
    //       console.log(obj._id, id);
    //       return obj._id === id;
    //     });

    //     console.log(Object.assign({}, founds[0]));

    //     if (founds.length) {
    //       setMovie(founds[0]);
    //     } else dispatch(getMovie(id));
    //   } else dispatch(getMovie(id));
    // }
    // if (state.Movie?.selectedMovies.length) {
    //   const founds = state.Movie?.selectedMovies.filter((obj) => {
    //     console.log(obj._id, id);
    //     return obj._id === id;
    //   });
    // }
    if (id && state.Movie?.selectedMovies && !movie)
      dispatch(getMovie(id, state.Movie?.selectedMovies));
  }, [id, state.Movie?.selectedMovies,movie]);

  useEffect(() => {
    // const filtered = state.Movie?.selectedMovies.filter((obj) => {
    //   return obj._id === id;
    // });
    // console.log(Object.assign({}, filtered[0]));
    setMovie(state.Movie.movie);
    setLoading(state.Movie.movieLoading);
  }, [state.Movie.movie,state.Movie.movieLoading]);
console.log(state.Movie.movie,state.Movie?.selectedMovies)
  // useEffect(() => {
  //   if (movie?._id) {
  //     dispatch(setSelectedMovie(state.Movie.selectedMovies, state.Movie.movie));
  //   }
  // }, [movie]);
  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div>
          <Card className="head">
            <div className="main">
              <img src={movie.movieImage} className="pic" alt="no img" />

              <div>
                <h2> {movie.movieName}</h2>
                <p className="txt">Hero:&nbsp;{movie.hero}</p>
                <p className="txt">Heroine:&nbsp;{movie.heroine}</p>

                <p className="desc">{movie.description}</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default DetailPage;
