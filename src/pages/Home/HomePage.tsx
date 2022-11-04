import React, {useState} from 'react';
import './HomePage.css'
import {useDispatch} from "react-redux";
import {name} from "../../store/slices/name";

const HomePage = () => {
    const [localName, setLocalName] = useState('')
    const dispatch = useDispatch()
    const {newName} = name.actions

    const changeStateName = () => {
        dispatch(newName(localName))
        setLocalName('');
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
                <input type='text' value={localName} onChange={e => setLocalName(e.target.value)}/>
                <button onClick={() => {changeStateName()}}>
                    Save
                </button>
            </div>
        </div>
    );
};

export default HomePage;