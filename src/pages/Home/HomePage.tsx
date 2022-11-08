import React from 'react';
import './HomePage.css'
import EnterName from "../../components/EnterName";

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