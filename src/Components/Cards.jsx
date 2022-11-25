import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { data } from "../helpers/data";

const Cards = ({ item }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ maxWidth: 345 }}
      onClick={() => navigate(`/details`, { state: item })}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={item?.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item?.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
