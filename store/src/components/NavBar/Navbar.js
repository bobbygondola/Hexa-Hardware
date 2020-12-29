import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import {Link, useLocation} from 'react-router-dom'

import logo from '../../assets/logo.jpg'
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar poisiton="fixed" className={classes.appbar}>
                <Toolbar className={classes.navv}>
                    <Typography component={Link} to="/products" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="logoname" height="25px" className={classes.image} />
                        HexaHardware
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/products' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
