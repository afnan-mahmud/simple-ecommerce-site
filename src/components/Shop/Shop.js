import React, { useEffect, useState } from 'react';
import Data from '../../fakeData/products.json';
import './Shop.css';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';

//Local Storage Get Item
const getLocalItems = ()=>{
    let list = localStorage.getItem('cart-list');
    if(list){
        return JSON.parse(localStorage.getItem('cart-list'))
    }
    else{
        return [];
    }
}

const Shop = () => {

    // Set Data
    const [products, setProducts] = useState(Data);

    // Set Cart
    const [cart , setCart] = useState(getLocalItems);

    // Add to cart function
    const addToCart = (product) => {
        const newCart = [...cart , product];
        setCart(newCart);
    };

    // Local Storage Set Item
    useEffect(()=>{
        localStorage.setItem('cart-list', JSON.stringify(cart))
    },[cart])

    
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(productinfo => <Product pdaddToCart={true} product={productinfo} addToCart={addToCart}></Product> )
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;