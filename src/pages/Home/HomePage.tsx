import React, {useState} from 'react';
import './HomePage.css'
import {useDispatch} from "react-redux";
import {newNameAction} from "../../store/actions/nameAction";
import {nameSlice} from "../../store/slices/nameSlice";

const HomePage = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const changeStateName = () => {
        dispatch(nameSlice.actions.addNewNameReducer(name))
        // dispatch(newNameAction(name));
        setName('');
    }

    return (
        <div>
            <h1 className='label'>
                Home page.
            </h1>
            <div className='inputBox'>
                <div>
                    Enter your name.
                </div>
                <input type='text' value={name} onChange={e => setName(e.target.value)}/>
                <button onClick={() => {changeStateName()}}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default HomePage;