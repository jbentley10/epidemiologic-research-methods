/**
 * @file expert-card.js
 */

// Import dependencies
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function ExpertCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="250"
        image={"/images" + props.imageLink}
        alt={props.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="subtitle" color="text.hint">
          {props.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a target="_blank" href={props.resumeLink} rel={"noreferrer"}>
          <Button size="small" color="primary">
            View CV
          </Button>
        </a>
      </CardActions>
    </Card>
  );
}
