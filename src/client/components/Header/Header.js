import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './styles.css';

function Header() {
    return (
        <nav>
            <NavLink to='/' exact activeClassName='nav_active__link'>Home</NavLink>
            <NavLink to='/about' activeClassName='nav_active__link'>About</NavLink>
        </nav>
    );
}

export default Header;
