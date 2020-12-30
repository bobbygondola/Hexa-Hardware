import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import { commerce } from '../../../lib/commerce'

import useStyles from './styles'

const steps = ['Shipping Address', "Payment Details"]

const Checkout = () => {
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();

    useEffect(() => {
        const generateToken = async () => {
            try {
                
            } catch (err) {
                console.log(err)
            }
        }
    }, [])

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => (activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} />
        : <PaymentForm checkoutToken={checkoutToken} />);

    // Render JSX => useEffect ( dont have the token yet )

    // ERROR, Cannot read property "id" of null. The browser thinks that the Token is null
     // EXPLANATION - React renders() Jsx FIRST! then.. checks functions like useEffect() to see if it has to rerender.
      // CONT. We still dont have the Token, but the <AddressForm /> above relies on the prop.
       // FIX BELOW!!! - Check if we have the checkoutToken and if true i.e && return <Form />

    return (
        <AddressForm>
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : <Form />}
                </Paper>

            </main>
        </AddressForm>
    )
}

export default Checkout
