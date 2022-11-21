import React, {FC} from 'react';
import {NavLink} from 'react-router-dom'
import './Header.css'
import {useAppSelector} from "../../hooks/useAppSelector";
import MyLabel from "../UI/MyLabel/MyLabel";
import {Header as AntdHeader} from "antd/es/layout/layout";


const Header: FC = () => {
    const {name} = useAppSelector(state => state.name);

    return (
        <AntdHeader>
            <div className='content'>
                <div className='headerMenu'>
                    <NavLink to={'/home'} className={({isActive}) => isActive ? `link active-link` : `link`}>HOME</NavLink>
                    <NavLink to={'/table'} className={({isActive}) => isActive ? `link active-link` : `link`}>TABLE</NavLink>
                </div>
                <MyLabel type='head'>
                    {name}
                </MyLabel>
            </div>
        </AntdHeader>
    );
};

export default Header;
