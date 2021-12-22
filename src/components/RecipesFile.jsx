import React from "react";
import "./_recipe.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function RecipesFile(props) {
  // console.log(props);
  return (
    <ul className="recipe">
      {props.recipe.map((rec) => (
        <li className="recipe__list">
          <Card className="recipe__card" sx={{ maxWidth: 400 }}>
            <CardMedia
              component="img"
              height="200"
              image={rec.recipe.image}
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {rec.recipe.label}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {rec.recipe.ingredientLines}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" href={rec.recipe.shareAs}>
                Share
              </Button>
              <Button size="small" href={rec.recipe.url}>
                Learn More
              </Button>
            </CardActions>
          </Card>
        </li>
      ))}
    </ul>
  );
}

export default RecipesFile;
