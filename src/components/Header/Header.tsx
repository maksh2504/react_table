import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import {useAppSelector} from "../../hooks/useAppSelector";
import MyLabel from "../UI/MyLabel/MyLabel";

const Header = () => {
    const {name} = useAppSelector(state => state.name)

    return (
        <header>
            <div className='content'>
                <div className='headerMenu'>
                    <Link to={'/'} className='link'>HOME</Link>
                    <Link to={'/table'} className='link'>TABLE</Link>
                </div>
                <MyLabel type='head'>
                    {name}
                </MyLabel>
            </div>
        </header>
    );
};

export default Header;
