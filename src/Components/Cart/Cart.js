import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { photo, name } = props.cart;
    return (
        <div className='cart'>
            <img src={photo} alt="" /><span>{name}</span>
        </div>
    );
};

export default Cart;