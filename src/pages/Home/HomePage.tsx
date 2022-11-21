import React from 'react';
import './HomePage.css'
import EnterName from "../../components/EnterName/EnterName";

const HomePage = () => {
    return (
        <div>
            <h1 className='label'>
                Hello! Enter your name to show it in the header.
            </h1>
            <EnterName/>
        </div>
    );
};

export default HomePage;
