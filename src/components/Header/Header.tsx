import React from 'react';
import { Link } from 'react-router-dom'
import './style.css'

const Header = () => {
    return (
        <header>
            <Link to={'/'} className='link'>HOME</Link>
            <Link to={'/table'} className='link'>TABLE</Link>
        </header>
    );
};

export default Header;