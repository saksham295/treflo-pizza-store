import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@material-ui/core";

const styles = {
  footer: {
    padding: 5,
    position: "relative",
    bottom: 0,
    backgroundColor: "#1976d2",
    color: "white",
  },
};
const useStyles = makeStyles(styles);

function Footer() {
  const classes = useStyles();
  return (
    <Box component="footer" className={classes.footer}>
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" component="p">
          Treflo Assignment - Pizza Store - Saksham Jain
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
