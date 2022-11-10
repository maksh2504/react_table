import React from 'react';
import './HomePage.css'
import EnterName from "../../components/EnterName";
import MyLabel from "../../components/UI/MyLabel/MyLabel";

const HomePage = () => {
    return (
        <div>
            <h1 className='label'>
                Home page.
            </h1>
            <EnterName/>
            <MyLabel type='default'>Hello</MyLabel>
            <MyLabel type='primary'>Hello</MyLabel>
            <MyLabel type='secondary'>Hello</MyLabel>
        </div>
    );
};

export default HomePage;
