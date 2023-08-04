import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { getMovies } from "../../store";
// import Products from "../Products";
import { useParams } from "react-router-dom";

export default function MovieDetail() {
  const Movies = [
    {
        _id: "1",
        movieName: "UP Movie",
        createdAt: "2023-08-01",
        movieImage: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/indizone/2019/07/16/gmsZy0/t_5d2d57e5ddbab.jpg",
        description: "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      },
      {
        _id: "2",
        movieName: "The Angry Birds",
        createdAt: "2023-08-02",
        movieImage: "https://webneel.com/daily/sites/default/files/images/daily/01-2016/12-the-angry-birds-poster-animation-movie-list-2016.jpg",
        description: "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat      ",
      },
  
      {
        _id: "3",
        movieName: "The Lost Village",
        createdAt: "2023-08-03",
        movieImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT64kDXm7HQhRT8MAO99n7elsDwp8Y28ITL5w&usqp=CAU",
        description: "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequa ",
      },
      {
        _id: "4",
        movieName: "Movie",
        createdAt: "2023-08-04",
        movieImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5I90l8GHAn72VcT2l0RNvs6Sql2VDJb43g&usqp=CAU",
        description: "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat      ",
      },
      {
        _id: "5",
        movieName: "Movie",
        createdAt: "2023-08-04",
        movieImage: "https://wallpaper-house.com/data/out/6/wallpaper2you_95768.jpg",
        description: "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",
      },
  
  ];
  const [selectedMovie, setSelectedMovie] = useState();
  const [cartItems, setCartItems] = useState({});

  const productId = useParams();
  useEffect(() => {
    const movie = Movies.find((movie) => movie._id === productId.id);
    if (movie) {
      setSelectedMovie(movie);
    }
  }, [Movies, productId]);

  if (!selectedMovie) {
    return <div>Product not found</div>;
  }
  const handleAddToCart = (movieId, increment) => {
    setCartItems((prevCartItems) => {
      const currentCount = prevCartItems[movieId] || 0;
      const newCount = currentCount + increment;

      if (newCount < 0) {
        return prevCartItems;
      }

      return {
        ...prevCartItems,
        [movieId]: newCount,
      };
    });
  };
  return (
    // <div className="card">
    <div className="card" style={{ display: "flex" }}>
      <Card
        variant="outlined"
        sx={{
          textAlign: "center",
          // maxWidth: "100%",
          width: 1550,
          resize: "horizontal",
          overflow: "auto",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" sx={{ mt: 0.5 }}></Typography>

        <CardContent sx={{ gap: 1.5, minWidth: 200, display: "flex" }}>
          <CardMedia
            component="img"
            height="610"
            image={selectedMovie.movieImage}
            alt=""
          />
          <CardContent>
            <Typography variant="body1" sx={{ mt: 0.5, minWidth: 200 }}>
              <h2>{selectedMovie.movieName}</h2>
              <h4>Detail</h4>
              {selectedMovie.description}
            </Typography>
            <button
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 50px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              marginLeft:"90px",
            }}
          >
            Watch
          </button>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  );
}
