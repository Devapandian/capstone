import { Card } from "@mui/material";
import React, { useEffect, useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import "./index.css";
import { Link } from "react-router-dom";
import { getMovies } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import Popover from "@mui/material/Popover";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';



const Movie = () => {
  const [movie, setMovie] = useState([]);
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);


  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);
  useEffect(() => {
    setMovie(state.Movie.movies.docs);
  }, [state]);

  const movies = [
    {
      _id: "1",
      movieName: "UP Movie",
      createdAt: "2023-08-01",
      movieImage:
        "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2019/07/16/gmsZy0/t_5d2d57e5ddbab.jpg",
      description:
        "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
    },
    {
      _id: "2",
      movieName: "The Angry Birds",
      createdAt: "2023-08-02",
      movieImage:
        "https://webneel.com/daily/sites/default/files/images/daily/01-2016/12-the-angry-birds-poster-animation-movie-list-2016.jpg",
      description:
        "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat      ",
    },

    {
      _id: "3",
      movieName: "The Lost Village",
      createdAt: "2023-08-03",
      movieImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64kDXm7HQhRT8MAO99n7elsDwp8Y28ITL5w&usqp=CAU",
      description:
        "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa ",
    },
    {
      _id: "4",
      movieName: "Movie",
      createdAt: "2023-08-04",
      movieImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5I90l8GHAn72VcT2l0RNvs6Sql2VDJb43g&usqp=CAU",
      description:
        "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat      ",
    },
    {
      _id: "5",
      movieName: "Movie",
      createdAt: "2023-08-04",
      movieImage:
        "https://wallpaper-house.com/data/out/6/wallpaper2you_95768.jpg",
      description:
        "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",
    },
  ];
  const [anchorEl, setAnchorEl] = useState(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [popoverId, setPopoverId] = useState(null);
  const [favoriteMovies, setFavoriteMovies] = useState({});

  const handleFavoriteClick = (movieId) => {
    setFavoriteMovies((prevFavorites) => ({
      ...prevFavorites,
      [movieId]: !prevFavorites[movieId], 
    }));
  };


  const handlePopoverClick = (event, id) => {
    setPopoverOpen(true);
    setPopoverId(id);
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setPopoverOpen(false);
    setAnchorEl(null);
  };

  return (
    <Card>
      <div className="crd">
        {movies?.map((movie, index) => (
          <Card sx={{ maxWidth: 250 }} key={index}>
            {/* <Link
              to={`/MovieDetail/${movie._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CardHeader
                // avatar={
                //   <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                //     <img src={movie.movieImage} alt="" />
                //   </Avatar>
                // }
              />
            </Link> */}
            <Link
              to={`/MovieDetail/${movie._id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <CardMedia
                component="img"
                height="250"
                image={movie.movieImage}
                alt=""
              />
            </Link>
            {<span className="title">{movie?.movieName}</span>}
            <CardContent>
              <h5>Movie Review</h5>
              <div><h5>{moment(movie.createdAt).format("MM/DD/YYYY")}</h5>
</div>
              <Typography variant="body2" color="text.secondary">
                {movie.description}
              </Typography>
            </CardContent>
            <IconButton
              aria-label="add to favorites"
              onClick={() => handleFavoriteClick(movie._id)}
              color={favoriteMovies[movie._id] ? "error" : "default"}
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share" onClick={handlePopoverClick}>
              <ShareIcon />
            </IconButton>
            <Popover
              id={popoverId}
              open={popoverOpen}
              anchorEl={anchorEl}
              onClose={handlePopoverClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
            >
              <Typography sx={{ p: 2 }}><WhatsAppIcon/>WhatApp
              </Typography>
              <Typography sx={{ p: 2 }}><FacebookIcon/>Facebook</Typography>
            </Popover>
            <button
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 50px",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Watch
            </button>

          </Card>
        ))}
      </div>
    </Card>
  );
};

export default Movie;
