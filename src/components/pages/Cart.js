import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  cartSelector,
} from "../../redux/slices/cartSlice";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Link,
  makeStyles,
} from "@material-ui/core";
import pageStyles from "../styles/pageStyles";

const useStyles = makeStyles(pageStyles);

function Cart() {
  const classes = useStyles();
  const cart = useSelector(cartSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };
  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      {cart.cartItems.length === 0 ? (
        <div className={classes.content}>
          <Typography variant="h3">Your cart is currently empty!</Typography>
          <Link href="/">
            <Typography variant="h4">Start Shopping</Typography>
          </Link>
        </div>
      ) : (
        <div>
          <div>
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                <Card key={cartItem.id} className={classes.root}>
                  <CardMedia
                    className={classes.media}
                    component="img"
                    title="Center"
                    image={cartItem.img_url}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h5"
                      component="div"
                      color="primary"
                    >
                      {cartItem.name}
                    </Typography>
                    <Typography align="center">
                      Price: ${cartItem.price}
                    </Typography>
                    <Typography align="center">
                      {cartItem.isVeg ? "Vegetarian" : "Non-Vegetarian"}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      className={classes.button}
                      onClick={() => handleAddToCart(cartItem.id)}
                    >
                      +
                    </Button>
                    <Button
                      size="small"
                      className={classes.button}
                      onClick={() => handleDecreaseCart(cartItem.id)}
                    >
                      -
                    </Button>
                    <Button
                      size="small"
                      className={classes.button}
                      onClick={() => handleRemoveFromCart(cartItem.id)}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              ))}
          </div>
          <div className={classes.cart}>
            <Typography variant="h5" className={classes.content}>
              Total: ${cart.cartTotalAmount}
            </Typography>
            <Link href="/">
              <Typography>Continue Shopping</Typography>
            </Link>
            <Button
              className={classes.button}
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </Button>
            <Button className={classes.button}>Check out</Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
