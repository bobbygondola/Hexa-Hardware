import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography, Input } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';
import FormInput from './CustomFormInput';

import { commerce } from '../../lib/commerce'

const AddressForm = ({ checkoutToken, next }) => {
    const [shippingCountries, setShippingCountries] = useState([]);
    const [shippingCountry, setShippingCountry] = useState('');
    const [shippingSubdivisons, setShippingSubdivisons] = useState([]);
    const [shippingSubdivison, setShippingSubdivison] = useState('');
    const [shippingOptions, setShippingOptions] = useState([]);
    const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();
    
    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name})) //convert from OBJ to 2D array, map over each, turn each array into Labeled key,value pairs
    const relevantSubdivisions = Object.entries(shippingSubdivisons).map(([code, name]) => ({id: code, label: name}))
    const options = shippingOptions.map((sO) => ({ id: sO.id, label: `${sO.description} - (${sO.price.formatted_with_symbol})` }))

    console.log(shippingOptions)

    const fetchShippingCountries = async (checkoutTokenId) => {
        const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId)

        console.log(countries)
        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
      };

    const fetchSubdivisons = async (countryCode) => {
        const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode)
        setShippingSubdivisons(subdivisions)
        setShippingSubdivison(Object.keys(subdivisions)[0])
    }

    const fetchShippingOptions = async (checkoutTokenId, country, reigon) => {
        const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, reigon})
        setShippingOptions(options)
        setShippingOption(options[0].id)
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [])

    useEffect(() => {
        if (shippingCountry) {fetchSubdivisons(shippingCountry)}
    }, [shippingCountry])

    useEffect(() => {
        if(shippingSubdivison) {fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivison)}
    }, [shippingSubdivison])

    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivison, shippingOption}))}>
                    <Grid container spacing={3}>
                        <FormInput required name="firstName" label="First Name"/>
                        <FormInput required name="LastName" label="Last Name"/>
                        <FormInput required name="address1" label="Address"/>
                        <FormInput required name="email" label="Email"/>
                        <FormInput required name="city" label="City"/>
                        <FormInput required name="zip" label="ZIP / Postal Code"/>

                        <Grid item xs={12} sm={6} >
                            <InputLabel>Shipping Country</InputLabel>
                            <Select value={shippingCountry} fullWidth onChange={(e) => {setShippingCountry(e.target.value)}}>
                                {countries.map((country) => (
                                    <MenuItem 
                                    key={country.id} 
                                    value={country.id}>
                                    {country.label}
                                    </MenuItem>
                                ))}
                                
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6} >
                            <InputLabel>State/Subdivison</InputLabel>
                            <Select value={shippingSubdivison} fullWidth onChange={(e) => {setShippingSubdivison(e.target.value)}}>
                                {relevantSubdivisions.map((subdivison) => (
                                    <MenuItem 
                                    key={subdivison.id} 
                                    value={subdivison.id}>
                                    {subdivison.label}
                                    </MenuItem>
                                ))}
                                
                            </Select>
                        </Grid>

                        <Grid item xs={12} sm={6} >
                            <InputLabel>Shipping Options</InputLabel>
                            <Select value={shippingOption} fullWidth onChange={(e) => setShippingOption(e.target.value)}>
                                {options.map((option) => (
                                    <MenuItem 
                                    key={option.id} 
                                    value={option.id}>
                                    {option.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                    <br />
                    <div style={{display: 'flex', justifyContent: "space-between"}}>
                        <Button component={Link} to="/cart" variant="outlined">Back to Cart?</Button>
                        <Button type="submit" variant="contained" color="primary">Continue</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
