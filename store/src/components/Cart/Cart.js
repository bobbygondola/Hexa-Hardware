import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';

import useStyles from './styles'

const Cart = ({ cart }) => {
    const classes = useStyles()

    const EmptyCart = () => {
        return (
            <Typography variant="subtitle1">Your Cart is Empty. Add some Products!</Typography>
        )
    }

    console.log(cart)

    const FilledCart = () => {
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <div>
                            {item.name}
                        </div>
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cartDetails}>
                <Typography variant="h4">
                    SubTotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
        </>
    }

    return (
        <Container>
            <div className={classes.toolbar}/>
            <Typography className={classes.title} variant="h3">Your Cart</Typography>
            {/* { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> } */}
        </Container>
    )
}

export default Cart
