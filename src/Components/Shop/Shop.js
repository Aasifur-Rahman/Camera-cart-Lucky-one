import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        if (newCart.length < 5) {
            setCart(newCart);
        } else {
            alert('Only 4 products can be added')
        }

    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <h4 className='text-center mt-3'>Order Summary</h4>
                {
                    cart.map(cart => <Cart
                        cart={cart}
                    ></Cart>)
                }
                <button className='cart-btn'>Choose One</button><br></br>
                <button className='cart-btn'>Clear All</button>

            </div>
        </div>
    );
};

export default Shop;