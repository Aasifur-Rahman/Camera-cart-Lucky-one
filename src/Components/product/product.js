import React from 'react';
import './Product.css';

const Product = (props) => {
    const { photo, name, id, price } = props.product;
    return (
        <div className='product'>
            <img src={photo} alt="" />
            <p className='product-name'>{name}</p>
        </div>
    );
};

export default Product;