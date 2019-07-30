import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 600
  },
  media: {
    height: 140
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <div className="card-item">
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.heading}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Some text
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="inherit">
            Share
          </Button>
          <Button size="small" color="inherit">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
