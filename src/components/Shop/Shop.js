import React, { useEffect, useState } from 'react';
import Data from '../../fakeData/products.json';
import './Shop.css';
import Product from '../Product/Product'
import Cart from '../Cart/Cart';

const Shop = () => {

    const first10 = Data.slice(0,10);
    const [products, setProducts] = useState(Data);
    const [cart , setCart] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart , product];
        setCart(newCart);
    };
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(productinfo => <Product product={productinfo} addToCart={addToCart}></Product> )
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;