import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props)
    const { photo, name } = props.cart;
    return (
        <div className='cart'>
            <h4 className='text-center mt-3'>Order Summary</h4>
            <img src={photo} alt="" /><span>{name}</span>
        </div>
    );
};

export default Cart;