import React from "react";
import NavBar from "../segments/NavBar";
import { Outlet } from "react-router-dom";
import cardStyles from "../styles/pageStyles";
import { makeStyles } from "@material-ui/core";
import Footer from "../segments/Footer";

const useStyles = makeStyles(cardStyles);

function PublicLayout() {
  const classes = useStyles();
  return (
    <div className={classes.page}>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
}

export default PublicLayout;
