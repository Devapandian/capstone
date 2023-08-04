import React, { useEffect, useState } from "react";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { getMovies } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { red } from "@mui/material/colors";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import "./index.css";
import { Card, Modal } from "@mui/material";
import { styled } from "@mui/system";
import Rating from '@mui/material/Rating';


const Products = () => {
  const [Products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const state = useSelector((state) => state);
  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  useEffect(() => {
    setProducts(state.Movie.movies.docs);
  }, [state]);

  let [toggle, setToggle] = useState(true);
  const [cartValue, setCartValue] = useState(0);
  const [cartItems, setCartItems] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [newMovieName, setNewMovieName] = useState("");
  const [newMovieImage, setNewMovieImage] = useState("");

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
  
  const [Movies, setMovies] = useState([
    {
      _id: "1",
      movieName: "Product 1",
      movieImage:
     "https://minimal-kit-react.vercel.app/assets/images/products/product_1.jpg",
       movieprice: "15",
       moviedescription: "The standard Lorem Ipsum passage is",

    },
    {
      _id: "2",
      movieName: "Product 2",
      movieImage:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      movieprice: "25",
      moviedescription: "The standard Lorem Ipsum passage is",

      },

    {
      _id: "3",
      movieName: "Product 3",
      movieImage:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        movieprice: "30",
        moviedescription: "The standard Lorem Ipsum passage is ",

      },
    {
      _id: "4",
      movieName: "Product 4",
      movieImage:
      "https://minimal-kit-react.vercel.app/assets/images/products/product_24.jpg",
        movieprice: "55",
       moviedescription: "The standard Lorem Ipsum passage is",

      },
    {
      _id: "5",
      movieName: "Product 5",
      movieImage:
      " https://minimal-kit-react.vercel.app/assets/images/products/product_21.jpg",
        movieprice: "10",
       moviedescription: "The standard Lorem Ipsum passage is ",

      },
    {
      _id: "6",
      movieName: "Product 6",
      movieImage:
      "https://minimal-kit-react.vercel.app/assets/images/products/product_13.jpg",
       moviedescription: "The standard Lorem Ipsum passage is ",
        movieprice: "40",

      },
    {
      _id: "7",
      movieName: "Product 7",
      movieImage:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
        movieprice: "50",
      },

  ]);
  const handleAddCard = () => {
    setShowForm(true);
  };

  const SaveMovie = () => {
    // console.log("Saving movie:", newMovieName, newMovieImage);
    if (newMovieName && newMovieImage) {
      const newCard = {
        _id: `${Movies.length + 1}`,
        movieName: newMovieName,
        movieImage: newMovieImage,
      };

      setMovies((prevMovies) => [...prevMovies, newCard]);
      setShowForm(false);
      setNewMovieName("");
      setNewMovieImage("");
    }
  };
  // const handleCancel = () => {
  //   console.log("Canceling");
  //   setShowForm(false);
  //   setNewMovieName("");
  //   setNewMovieImage("");
  // };
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewMovieName("");
    setNewMovieImage("");
  };
  return (
    <div>
      <Card >
      <h1>Products</h1>
        <div className="btn">
          <button
            style={{
              backgroundColor: "blue",
              color: "white",
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={handleOpenModal}
          >
            Add Card
          </button>
        </div>
        <Modal
          open={isModalOpen}
          onClose={handleCloseModal} 
          aria-labelledby="add-card-modal"
        >
          <div className="form">
            <h1>Products</h1>
            <input
              type="text"
              placeholder="Product Name"
              value={newMovieName}
              onChange={(e) => setNewMovieName(e.target.value)}
              className="input-field"
            />
            &nbsp;
            <input
              type="text"
              placeholder="Product Image URL"
              value={newMovieImage}
              onChange={(e) => setNewMovieImage(e.target.value)}
              className="input-field"
            />
            &nbsp;
            <button
              onClick={SaveMovie}
              style={{
                backgroundColor: "blue",
                color: "white",
                padding: "10px 10px",
                borderRadius: "20px",
                fontSize: "10px",
                width: "80px",
                gap: "20px",
              }}
            >
              Save
            </button>
            &nbsp;
          </div>
        </Modal>
        <div className="crd">
          {Movies?.map((movie, index) => (
            <Card sx={{ maxWidth: 450 }} key={index}>
              <Link
                to={`/Detail/${movie._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
              <CardMedia
                component="img"
                height="200"
                image={movie.movieImage}
                alt=""
              />
              {<h5 className="title">{movie?.movieName}</h5>}
              </Link>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <h2 className="title1">${movie?.movieprice}</h2> 
              <CardContent>
                <Typography variant="body3" color="text.secondary">
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => handleAddToCart(movie._id, -1)}
                    >
                      -
                    </Button>
                    <Typography variant="body">
                      {cartItems[movie._id] || 0}
                    </Typography>
                    <Button
                      size="small"
                      onClick={() => handleAddToCart(movie._id, +1)}
                    >
                      +
                    </Button>
                    <button
            style={{
              backgroundColor: "orange",
              color: "white",
              padding: "10px 55px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Add Cart
          </button>

                  </CardActions>
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>
      </Card>
    </div>
  );
};
export default Products;
