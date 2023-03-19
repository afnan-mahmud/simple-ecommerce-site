import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img , name, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div className='img-site'>
                <img src={img} alt="" />
            </div>
            <div className='body-site'>
                <h4 className='product-name'>{name}</h4>
                <p className='text-small'>by: {seller}</p>
                <h4>$ {price}</h4>
                <p className='text-small'>Only {stock} left in stock - order soon</p>
                <button onClick={() => props.addToCart(props.product)} className='add-cart-btn'><FontAwesomeIcon icon={faCartShopping} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;