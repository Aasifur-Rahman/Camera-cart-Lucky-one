import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='cart'>
            <h4 className='text-center mt-3'>Order Summary</h4>
            <p className='ms-5 fs-5'>Product name: {cart.name}</p>
        </div>
    );
};

export default Cart;