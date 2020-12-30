import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography, Input } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';

import FormInput from './CustomFormInput'

import { commerce } from '../../lib/commerce'

const AddressForm = () => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisons, setShippingSubdivisons] = useState([]);
    const [shippingSubdivison, setShippingSubdivison] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();
    

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)

        setShippingCountries(countries)
      };


    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="First Name"/>
                        <FormInput required name="LastName" label="Last Name"/>
                        <FormInput required name="address1" label="Address"/>
                        <FormInput required name="email" label="Email"/>
                        <FormInput required name="city" label="City"/>
                        <FormInput required name="zip" label="ZIP / Postal Code"/>

                        {/* <Grid item xs={12} sm={6} >
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={null} fullWidth onChange={null}>
                                <MenuItem key={null} value={null}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6} >
                            <InputLabel>Shipping Subdivison</InputLabel>
                            <Select value={null} fullWidth onChange={null}>
                                <MenuItem key={null} value={null}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6} >
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={null} fullWidth onChange={null}>
                                <MenuItem key={null} value={null}>
                                    Select Me
                                </MenuItem>
                            </Select>
                        </Grid> */}

                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
