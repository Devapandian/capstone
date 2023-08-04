import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { ShoppingCart, AddShoppingCart } from "@mui/icons-material";

export default function Page() {
  return (
    <section className="vh-100" style={{ backgroundColor: "#fdccbc" }}>
      <Container className="h-100">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className="h-100"
        >
          <Grid item xs={12}>
            <Typography variant="h5">
              Shopping Cart{" "}
              <Typography variant="h6" component="span">
                (1 item in your cart)
              </Typography>
            </Typography>

            <Card sx={{ mb: 4 }}>
              <CardContent>
                <Grid container alignItems="center">
                  <Grid item md={2}>
                    <CardMedia
                      component="img"
                      src= "https://minimal-kit-react.vercel.app/assets/images/products/product_24.jpg"
                      alt="Generic placeholder image"
                    />
                  </Grid>
                  <Grid item md={2} sx={{ textAlign: "center" }}>
                    <div>
                      <Typography variant="subtitle1" color="textSecondary" mb={2}>
                        Name
                      </Typography>
                      <Typography variant="h6" mb={0}>
                        Product
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item md={2} sx={{ textAlign: "center" }}>
                    <div>
                      <Typography variant="subtitle1" color="textSecondary" mb={2}>
                        Color
                      </Typography>
                      <Typography variant="h6" mb={0}>
                        {/* Use a custom color component here */}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item md={2} sx={{ textAlign: "center" }}>
                    <div>
                      <Typography variant="subtitle1" color="textSecondary" mb={2}>
                        Quantity
                      </Typography>
                      <Typography variant="h6" mb={0}>
                        1
                     </Typography>
                    </div>
                  </Grid>
                  <Grid item md={2} sx={{ textAlign: "center" }}>
                    <div>
                      <Typography variant="subtitle1" color="textSecondary" mb={2}>
                        Price
                      </Typography>
                      <Typography variant="h6" mb={0}>
                        $799
                      </Typography>
                    </div>
                  </Grid>
                  <Grid item md={2} sx={{ textAlign: "center" }}>
                    <div>
                      <Typography variant="subtitle1" color="textSecondary" mb={2}>
                        Total
                      </Typography>
                      <Typography variant="h6" mb={0}>
                        $799
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            <Card sx={{ mb: 45 }}>
              <CardContent>
                <div style={{ float: "right" }}>
                  <Typography variant="subtitle1" color="textSecondary" sx={{ display: "inline-block", marginRight: 1 }}>
                    Order total:
                  </Typography>
                  <Typography variant="h6" component="span">
                    $799
                  </Typography>
                </div>
              </CardContent>
            </Card>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Button variant="outlined" color="primary" size="small" sx={{ marginRight: 2 }}>
                Continue shopping
              </Button>
              <Button variant="contained" color="primary" size="small" startIcon={<AddShoppingCart />}>
                Add to cart
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
