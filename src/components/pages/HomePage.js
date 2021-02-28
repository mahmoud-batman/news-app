import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import NewFeeds from "../layouts/NewFeeds";
import Sidebar from "../components/Sidebar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: "1em",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Homepage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Paper className={`${classes.paper} sticky sidebar`}>
            <Sidebar />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {" "}
            <NewFeeds />
          </Paper>
        </Grid>

        <Grid item xs={6} sm={3}>
          <Paper className={`${classes.paper} sticky sidebar`}>
            sidebar left
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
