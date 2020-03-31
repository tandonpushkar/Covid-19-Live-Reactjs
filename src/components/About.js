import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div style={{ textAlign: "center" }}>
      <Paper className={classes.root}>
        <Typography variant="h4" component="p">
          About Covid-19 (INDIA) app
        </Typography>
        <Typography component="p">
          Simple React Application to view live stats , latest news about
          coronvirus in INDIA.
        </Typography>
        <Typography component="p">Built with React and Material UI</Typography>
        <Typography component="p">v1.0.0</Typography>
      </Paper>
      <Divider />
      <Paper className={classes.root}>
        <Typography variant="h6" component="p">
          Pushkar Tandon
        </Typography>
        <Typography component="p">
          Github Profile :{" "}
          <a
            href="https://github.com/tandonpushkar"
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none", color: "blue" }}
          >
            tandonpushkar
          </a>
        </Typography>

        <Typography component="p">
          LinkedIn Profile :{" "}
          <a
            href="https://in.linkedin.com/in/tandonpushkar"
            rel="noopener noreferrer"
            target="_blank"
            style={{ textDecoration: "none", color: "blue" }}
          >
            tandonpushkar
          </a>
        </Typography>
      </Paper>
    </div>
  );
}
