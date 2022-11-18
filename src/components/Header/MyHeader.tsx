import React, {FC} from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import {useAppSelector} from "../../hooks/useAppSelector";
import MyLabel from "../UI/MyLabel/MyLabel";
import { Header} from "antd/es/layout/layout";
import {Menu, MenuProps, Row} from "antd";


const MyHeader : FC = () => {
    const {name} = useAppSelector(state => state.name);
    const router = useNavigate();

    const menuItems : MenuProps['items'] = [
        {
            label: (
                <Link to={('/')}>HOME</Link>
            ),
            key: 'home'
        },
        {
            label: (
                <Link to={('/table')}>TABLE</Link>
            ),
            key: 'table'
        },
    ]

    return (
        <Header>
            <Menu theme='dark' mode='horizontal' items={menuItems}/>

            {/*<Row justify='start'>*/}
            {/*    <Menu theme='dark' mode='horizontal'>*/}
            {/*        <Menu.Item  onClick={() => router('/')}>HOME</Menu.Item>*/}
            {/*        <Menu.Item  onClick={() => router('/table')}>TABLE</Menu.Item>*/}
            {/*    </Menu>*/}
            {/*</Row>*/}

            {/*<Row justify='start'>*/}
            {/*    <Menu theme='dark' mode='horizontal'>*/}
            {/*        <Menu.Item >*/}
            {/*            <Link to={'/'} className='link'>HOME</Link>*/}
            {/*        </Menu.Item>*/}
            {/*        <Menu.Item>*/}
            {/*            <Link to={'/table'} className='link'>TABLE</Link>*/}
            {/*        </Menu.Item>*/}
            {/*    </Menu>*/}
            {/*</Row>*/}
            <MyLabel type='head'>
                {name}
            </MyLabel>
        </Header>

        // <header>
        //     <div className='content'>
        //         <div className='headerMenu'>
        //             <Link to={'/'} className='link'>HOME</Link>
        //             <Link to={'/table'} className='link'>TABLE</Link>
        //         </div>
        //         <MyLabel type='head'>
        //             {name}
        //         </MyLabel>
        //     </div>
        // </header>
    );
};

export default MyHeader;
