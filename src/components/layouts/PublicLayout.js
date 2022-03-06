import React from "react";
import NavBar from "../segments/NavBar";
import { Outlet } from "react-router-dom";
import cardStyles from "../styles/pageStyles";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(cardStyles);

function PublicLayout() {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <footer>
        <span>This is footer</span>
      </footer>
    </div>
  );
}

export default PublicLayout;
