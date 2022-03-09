import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { pizzaSelector } from "../../redux/slices/pizzaSlice";
import { Button, makeStyles } from "@material-ui/core";
import pageStyles from "../styles/pageStyles";
import { addToCart } from "../../redux/slices/cartSlice";

const useStyles = makeStyles(pageStyles);

function PizzaCustomize({ selectedPizzaId, onCancel }) {
  const classes = useStyles();
  const [size, setSize] = React.useState();
  const [toppings, setToppings] = React.useState();
  const dispatch = useDispatch();

  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const handleToppings = (e) => {
    setToppings(e.target.value);
  };
  const handleAddToCart = (product) => {
    product = {
      ...product,
      size: size,
      toppings: toppings,
    };
    dispatch(addToCart(product));
    onCancel();
  };

  const { pizzas } = useSelector(pizzaSelector);
  const pizza = pizzas.filter((pizza) => pizza.id === selectedPizzaId)[0];

  return (
    <FormControl>
      <FormLabel id="sizes">Size - </FormLabel>
      <RadioGroup aria-labelledby="sizes" name="size" onChange={handleSize}>
        {pizza.size[0].items.map((size) => (
          <FormControlLabel
            value={size.size}
            control={<Radio />}
            label={size.size}
          />
        ))}
      </RadioGroup>
      <br />
      <FormLabel id="toppings">Toppings - </FormLabel>
      <RadioGroup
        aria-labelledby="toppings"
        name="topping"
        onChange={handleToppings}
      >
        {pizza.toppings[0].items.map((topping) => (
          <FormControlLabel
            value={topping.name}
            control={pizza.toppings[0].isRadio ? <Radio /> : <Checkbox />}
            label={topping.name}
          />
        ))}
      </RadioGroup>
      <br />
      <div>
        <Button
          size="small"
          className={classes.button}
          onClick={() => handleAddToCart(pizza)}
        >
          Add to cart
        </Button>
        <Button size="small" className={classes.button} onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </FormControl>
  );
}

export default PizzaCustomize;
