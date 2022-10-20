import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import {useSelector} from "react-redux";
import {UseTypedSelector} from "../../hooks/useTypedSelector";

const Header = () => {
    const {name} = UseTypedSelector(state => state.userName)

    return (
        <header>
            <div className='content'>
                <div className='headerMenu'>
                    <Link to={'/'} className='link'>HOME</Link>
                    <Link to={'/table'} className='link'>TABLE</Link>
                </div>

                <div className='mainName'>
                    {name}
                </div>
            </div>
        </header>
    );
};

export default Header;