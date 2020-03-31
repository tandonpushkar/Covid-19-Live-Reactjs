import React from "react";
import Loader from "./loader";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    maxWidth: 220
  },
  media: {
    height: 80
  }
});

const UnOfficial = ({ UnOfficialResults, loading }) => {
  const classes = useStyles();
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Card className={classes.card}>
        <CardHeader subheader="Total Cases" />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require("./images/cases.jpeg")}
            title="COVID-19"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {loading ? <Loader /> : UnOfficialResults.confirmed}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.card}>
        <CardHeader subheader="Total deaths" />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require("./images/deaths.jpg")}
            title="COVID-19"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {loading ? <Loader /> : UnOfficialResults.deaths}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.card}>
        <CardHeader subheader="Total recoveries" />
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={require("./images/recovered.png")}
            title="COVID-19"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {loading ? <Loader /> : UnOfficialResults.recovered}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default UnOfficial;
