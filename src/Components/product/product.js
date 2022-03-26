import React from 'react';
import './Product.css';

const Product = (props) => {
    const { photo, name, price } = props.product;
    const handleAddToCart = () => {
        console.log('clicked')
    }
    return (
        <div className='product container'>
            <img src={photo} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price: {price} </p>
            </div>
            <button className='btn-cart '>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;