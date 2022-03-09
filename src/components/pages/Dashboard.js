import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPizzas,
  pizzaSelector,
  sortByPrice,
  sortByRating,
  sortVeg,
  sortNonVeg,
} from "../../redux/slices/pizzaSlice";
import { decreaseCart } from "../../redux/slices/cartSlice";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import {
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import PizzaCustomize from "../segments/PizzaCustomize";
import pageStyles from "../styles/pageStyles";

const useStyles = makeStyles(pageStyles);

function Dashboard() {
  const classes = useStyles();
  const [alignment, setAlignment] = React.useState("");
  const dispatch = useDispatch();

  const { pizzas, loading } = useSelector(pizzaSelector);
  useEffect(() => {
    dispatch(fetchPizzas());
  }, [dispatch]);

  const handleClickPrice = () => {
    dispatch(sortByPrice());
  };

  const handleClickRating = () => {
    dispatch(sortByRating());
  };

  const handleClickVeg = (event, newAlignment) => {
    setAlignment(newAlignment);
    dispatch(sortVeg());
  };

  const handleClickNonVeg = (event, newAlignment) => {
    setAlignment(newAlignment);
    dispatch(sortNonVeg());
  };

  const handleClickAll = () => {
    setAlignment("");
    dispatch(fetchPizzas());
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();

  const handleClickOpen = (selectedPizzaId) => {
    setOpen(true);
    setSelectedValue(selectedPizzaId);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      {loading ? (
        <div className={classes.loading} style={{ height: "100vh" }}>
          <CircularProgress
            color="primary"
            size={200}
            sx={{ marginBottom: "50px" }}
          />
          <Typography variant="h2" className={classes.content}>
            Pizzas Are Loading! Please Wait 🤤
          </Typography>
        </div>
      ) : (
        <>
          <Toolbar className={classes.dash}>
            <Typography variant="h5" className={classes.content}>
              Sort Pizzas -
            </Typography>
            <Button
              size="small"
              className={classes.button}
              onClick={handleClickPrice}
            >
              Price
            </Button>
            <Button
              size="small"
              className={classes.button}
              onClick={handleClickRating}
            >
              Rating
            </Button>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              sx={{ margin: "2px 10px" }}
            >
              <ToggleButton value="Veg" onClick={handleClickVeg}>
                <Typography>Veg</Typography>
              </ToggleButton>
              <ToggleButton value="NonVeg" onClick={handleClickNonVeg}>
                <Typography>Non-Veg</Typography>
              </ToggleButton>
            </ToggleButtonGroup>
            <Button
              size="small"
              className={classes.button}
              onClick={handleClickAll}
            >
              Clear Filters
            </Button>
          </Toolbar>
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
                  <Typography align="center">{row.description}</Typography>
                  <Rating
                    name="rating"
                    value={row.rating}
                    precision={0.5}
                    readOnly
                  />
                  <Typography align="center">Price: ${row.price}</Typography>
                  <Typography align="center">
                    {row.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    className={classes.button}
                    onClick={() => handleClickOpen(row.id)}
                  >
                    +
                  </Button>
                  <Button
                    size="small"
                    className={classes.button}
                    onClick={() => handleDecreaseCart(row.id)}
                  >
                    -
                  </Button>
                </CardActions>
              </Card>
            ))}
            {loading ? (
              <CircularProgress color="primary" size={20} />
            ) : (
              <Dialog
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
                fullWidth
                maxWidth="sm"
              >
                <DialogTitle align="center">
                  Choose Size and Toppings
                </DialogTitle>
                <DialogContent>
                  <PizzaCustomize
                    selectedPizzaId={selectedValue}
                    onCancel={handleClose}
                  />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Dashboard;
