import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPizzas, pizzaSelector } from "../redux/pizzas/pizzaSlice";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Rating, Dialog, DialogTitle, DialogContent } from "@mui/material";
import cardStyles from "./styles/pageStyles";

const useStyles = makeStyles(cardStyles);

function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const { pizzas, loading, hasErrors } = useSelector(pizzaSelector);
  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className={classes.dash}>
      {pizzas.map((row) => (
        <Card key={row.id} className={classes.root}>
          <CardMedia
            className={classes.media}
            component="img"
            title="Center"
            image={row.img_url}
          />
          <CardContent className={classes.content}>
            <Typography
              align="center"
              gutterBottom
              variant="h5"
              component="div"
              color="primary"
            >
              {row.name}
            </Typography>
            <Typography align="center">
              Description: {row.description}
            </Typography>
            <Rating name="rating" value={row.rating} precision={0.5} readOnly />
            <Typography align="center">Price: ${row.price}</Typography>
            <Typography align="center">
              {row.isVeg ? "Vegetarian" : "Non Vegetarian"}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              className={classes.button}
              onClick={handleClickOpen}
            >
              +
            </Button>
            <Button size="small" className={classes.button}>
              -
            </Button>
          </CardActions>
        </Card>
      ))}
      <Dialog selectedValue={selectedValue} open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">
          Choose Size and Toppings
        </DialogTitle>
        <DialogContent></DialogContent>
      </Dialog>
    </div>
  );
}

export default Dashboard;
