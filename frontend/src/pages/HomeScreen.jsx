import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { Grid, Typography } from "@mui/material";
import products from "../products";

const HomeScreen = () => {
  return (
    <Grid container spacing={2}>
      {products.map((products) => {
        return (
          <Grid margin={3} item xs={12} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={products.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {products.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                   {products.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default HomeScreen;
