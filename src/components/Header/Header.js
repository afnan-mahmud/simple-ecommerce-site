import React from 'react';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <form action="">
                    <input type="search" placeholder='Search..' />
                    <button type='submit' className='fa fa-search'>Search</button>
                </form>
            </nav>
        </div>
    );
};

export default Header;