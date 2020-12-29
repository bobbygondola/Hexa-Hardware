import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typograpghy, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assets/logo.jpg'
import useStyles from './styles'

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    return (
        <>
            <AppBar poisiton="fixed" className={classes.appbar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="logoname" height="25px" className={classes.image} />
                        HardwareCommerce
                    </Typography>
                    <div className={classes.grow} />
                    <div className={classes.button}>
                        <IconButton aria-label="Show Cart Items" color="inherit">
                            <Badge badgeContent={totalItems} color='secondary'>
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
