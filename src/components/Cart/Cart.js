import React from 'react';
import './Cart.css';

const Cart = (props) => {
    console.log(props.cart);
    const cart = props.cart;
    const total = cart.reduce((total , prd) => total + prd.price , 0);

    let shipping = 0;
    if (total > 0 && total < 49) {
        shipping = 12;
    } 
    else if(total > 50 && total < 99){
        shipping = 8;
    } 
    else if(total > 100){
        shipping = 2;
    }

    const tax = (total / 100) * 7;

    return (
        <div>
            <h3 className='order-summary'>Order Summary</h3>
                <p className='order-summary'>Items Orderd: {cart.length}</p>
                <table>
                    <tbody>
                        <tr>
                            <td>Items Price: </td>
                            <td>${(total).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Shipping: </td>
                            <td>${(shipping).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total before tax: </td>
                            <td>${(total + shipping).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Estimated Tax: </td>
                            <td>${(tax).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td>Total Price: </td>
                            <td>${(total + shipping + tax).toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
};

export default Cart;