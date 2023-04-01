import React from 'react';
import Logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch, faCartShopping} from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <nav>
                <a href="/">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                <form action="">
                    <input type="search" placeholder='Search..' />
                    <button type='submit' className='fa fa-search'><FontAwesomeIcon icon={faSearch} /></button>
                </form>
                <button className='cart'><FontAwesomeIcon icon={faCartShopping} /></button>
            </nav>
        </div>
    );
};

export default Header;