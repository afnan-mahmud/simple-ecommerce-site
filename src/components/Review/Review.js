import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Review.css';

const getLocalItems = ()=>{
    let list = localStorage.getItem('cart-list');
    if(list){
        return JSON.parse(localStorage.getItem('cart-list'))
    }
    else{
        return [];
    }
}

const Review = () => {
    const [data , setData] = useState(getLocalItems);
    console.log(data);

    return (
        <div>
            <h1>Total Cart Item{data.length}</h1>
            {
                data.map(pd => <Product pdaddToCart={false} product={pd}></Product> )
            }
        </div>
    );
};

export default Review;