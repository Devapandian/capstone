import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import Details from "./Details.css";
import { getMovies } from "../../store";
import { useParams } from "react-router-dom";
import Rating from '@mui/material/Rating';




export default function Detail() {
  const Movies = [
    {
      _id: "1",
      movieName: "Product 1",
      movieImage:
      "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
      description:
        "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",
    },
    {
      _id: "2",
      movieName: "Product 2",
      movieImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",
    },

    {
      _id: "3",
      movieName: "Product 3",
      movieImage:
     "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",
    },
    {
      _id: "4",
      movieName: "Product 4",
      movieImage:
      "https://minimal-kit-react.vercel.app/assets/images/products/product_24.jpg",
      description:
        "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",
    },
    {
      _id: "5",
      movieName: "Product 5",
      movieImage:
      " https://minimal-kit-react.vercel.app/assets/images/products/product_21.jpg",
      description:
        "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",
    },
    {
      _id: "6",
      movieName: "Product 6",
      movieImage:
      "https://minimal-kit-react.vercel.app/assets/images/products/product_13.jpg",
       moviedescription: "The standard Lorem Ipsum passage is ",
       description:
       "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",

      },
    {
      _id: "7",
      movieName: "Product 7",
      movieImage:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      description:
        "The standard Lorem Ipsum passage is: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat ",

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
    <div className="card" style={{ display: "flex" }}>
      <Card
        variant="outlined"
        sx={{
          textAlign: "center",
          height:600,
          width: 1650,
          resize: "horizontal",
          overflow: "auto",
          justifyContent: "center",
        }}
      >
        <Typography variant="body1" sx={{ mt: 0.5 }}></Typography>

        <CardContent sx={{ gap: 1.5, minWidth: 200, display: "flex" }}>
          <CardMedia
            component="img"
            height="550"
            image={selectedMovie.movieImage}
            alt=""
          />
          <CardContent>
            <Typography variant="body1" sx={{ mt: 0.5, minWidth: 200 }}>
              <h2>{selectedMovie.movieName}</h2>
              <h4>Detail</h4>
              {selectedMovie.description}
            </Typography>
            &nbsp;
            &nbsp;
            &nbsp;
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            &nbsp;
            &nbsp;
            <button
            style={{
              backgroundColor: "orange",
              color: "white",
              padding: "10px 60px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              // display:"flex",
              marginRight:"390px",
            }}
          >
            Add Cart
          </button>
          </CardContent>
        </CardContent>
      </Card>
    </div>
  );
}
