import React from "react";
import { MenuList } from "../data/data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const Menu = () => {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: "beige",
        }}
      >
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "390px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{
                  minHeight: "350px",
                  height: "300px",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.1)",
                  },
                }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.pricey}
                </Typography>
                <Typography variant="h3" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body1">{menu.description}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;
