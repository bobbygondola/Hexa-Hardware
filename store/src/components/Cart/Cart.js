import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import {Link} from 'react-router-dom';

import CartItem from './CartItem/CartItem';
import useStyles from './styles';

const Cart = ({ cart, handleUpdateCartQuantity, handleRemoveFromCart, handleEmptyCart}) => {
  const classes = useStyles();

  const renderEmptyCart = () => (
    <Typography variant="subtitle1">You have no items in your shopping cart
    <br />
        <Link to="/products" className={classes.link}>Start!</Link>
    </Typography>
  );

  if (!cart.line_items) return 'Loading';

  const renderCart = () => (
    <div style={{width: "100%", border: "3px solid yellow"}}>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem 
            item={lineItem}
            handleUpdateCartQuantity={handleUpdateCartQuantity}
            handleRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_symbol}</Typography>
        <div>
          <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty cart</Button>
          <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
        </div>
      </div>
    </div>
  );

  return (
    <Container style={{border: "2px solid blue", width: "100%"}}>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
      { !cart.line_items.length ? renderEmptyCart() : renderCart() }
    </Container>
  );
};
export default Cart;
