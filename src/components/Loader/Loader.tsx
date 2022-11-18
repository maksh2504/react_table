import React from 'react';
import './Loader.css'
import {Spin} from "antd";

const Loader = () => {
    return (
        <div className='loader'>
            <Spin size='large'/>
            {/*<h1>LOADING...</h1>*/}
        </div>
    );
};

export default Loader;
