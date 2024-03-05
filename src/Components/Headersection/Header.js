import React from 'react';
import CartIcon from "../Cart/CartIcon";
import { Link, useLocation } from 'react-router-dom';
import "./Header.css";

const Header = ({ cartItemsCount }) => {
    // Get the current location
    const location = useLocation();

    // Check if the current pathname is the Store page
    const isStorePage = location.pathname === '/Store';

    return (
        <div className="Header-section">
            <div className="nav-data">
                <Link to='/'>Home</Link> 
                <Link to='/Store'>Store</Link> 
                <Link to='/About'>About</Link>
            </div>
            {isStorePage && <CartIcon cartItemsCount={cartItemsCount} />} {/* Render CartIcon only on Store page */}
        </div>
    );
};

export default Header;
