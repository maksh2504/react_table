import React, {useState} from 'react';
import './HomePage.css'
import {useDispatch} from "react-redux";
import {name} from "../../store/slices/name";
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