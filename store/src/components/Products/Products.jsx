import React from 'react';
import Grid from '@material-ui/core/Grid';
import Product from './Product/Product'

//images
import rasp4 from '../../assets/rasp4b.png'
import rasp3 from '../../assets/rasp3a.jpg'

//style
import useStyles from './styles.jsx'

const products = [
    {
        id: 1, 
        name: 'Raspberry Pi 4 Model B', 
        description: 'Your new Raspberry Pi 4 has upgraded USB capacity: along with two USB 2 ports youll find two USB 3 ports, which can transfer data up to ten times faster.',
        price: '$38',
        image: rasp4
    },
    {
        id: 2, 
        name: 'Raspberry Pi 3 Model A+', 
        description: '1.4GHz 64-bit quad-core processor, dual-band wireless LAN, Bluetooth 4.2/BLE in the same mechanical format as the Raspberry Pi 1 Model A+',
        price: '$31',
        image: rasp3
    }
]

const Products = () => {
    const classes = useStyles()
    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center spacing={4}">
            {products.map((product) => {
                return (
                <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
                )
            })}
        </Grid>
    </main>
    )
}

export default Products;