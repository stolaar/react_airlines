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
  const cardBody = {
    height: "fit-content",
    color: "black !important"
  };

  return (
    <div className="card-item">
      <Card className={classes.cardBody}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Contemplative Reptile"
            component="img"
          />
          <CardContent style={cardBody}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.heading}
            </Typography>
            <Typography variant="body2" color="textPrimary" component="span">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ padding: "15px" }}>
          <Button
            onClick={props.onClick}
            size="small"
            variant="outlined"
            color="inherit"
          >
            See More
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
