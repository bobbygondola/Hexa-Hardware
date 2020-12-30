import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce'
import { Products, Navbar, Cart, Checkout } from './components'

//router
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState({})

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();
        setProducts(data);
      };

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve())
    }

    const handleAddToCart = async (productId, quantity) => {
        const res = await commerce.cart.add(productId, quantity)
        setCart(res.cart) //cart after the item has been added
    }

    const handleUpdateCartQuantity = async (productId, quantity) => {
        const res = await commerce.cart.update(productId, {quantity})
        setCart(res.cart) //setting cart to the cart object from res
    }

    const handleRemoveFromCart = async (productId) => {
        const res = await commerce.cart.remove(productId)
        setCart(res.cart) //updated cart
    }

    const handleEmptyCart = async () => {
        const res = await commerce.cart.empty()
        setCart(res.cart) //updated empty cart
    }

    useEffect(() => {
        fetchProducts()
        fetchCart()
    }, [])

    console.log("CURRENT CART", cart)

    return (
    <Router>
      <div style={{ display: 'flex' }}>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/products">
            <Products products={products} handleAddToCart={handleAddToCart} handleUpdateCartQuantity={handleUpdateCartQuantity} />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} handleUpdateCartQuantity={handleUpdateCartQuantity} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />
          </Route>
          <Route exact path="/checkout">
            <Checkout cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router> 
        
    )
}

export default App
