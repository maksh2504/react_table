import React from 'react';
import { Link } from 'react-router-dom'
import './Header.css'
import {useAppSelector} from "../../hooks/useAppSelector";
import MyLabel from "../UI/MyLabel/MyLabel";
import { Header} from "antd/es/layout/layout";
import {Menu, Row} from "antd";


const MyHeader = () => {
    const {name} = useAppSelector(state => state.name)

    return (
        <Header style={{alignContent: "center"}}>
            <Row justify='start'>
                <Menu theme='dark' mode='horizontal'>
                    <Menu.Item>
                        <Link to={'/'} className='link'>HOME</Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={'/table'} className='link'>TABLE</Link>
                    </Menu.Item>
                </Menu>
            </Row>
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
