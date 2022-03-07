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
      <footer className={classes.footer}>
        <span>Treflo Assignment - Pizza Store - Saksham Jain</span>
      </footer>
      <Outlet />
    </div>
  );
}

export default PublicLayout;
