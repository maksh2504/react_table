import React from 'react';
import './HomePage.css'
import EnterName from "../../components/EnterName/EnterName";
import MyLabel from "../../components/UI/MyLabel/MyLabel";

const HomePage = () => {
    return (
        <div>
            <h1 className='label'>
                Home page.
            </h1>
            <EnterName/>
        </div>
    );
};

export default HomePage;
