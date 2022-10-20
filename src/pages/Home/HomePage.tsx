import React, {useState} from 'react';
import './HomePage.css'
import {UseTypedSelector} from "../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {newNameAction} from "../../store/actionsCreator/nameReducer";
import {NameAction} from "../../store/types/nameReducer";

const HomePage = () => {
    const [name, setName] = useState('')
    const store = UseTypedSelector(state => state.userName)
    const dispatch = useDispatch()

    const changeStateName = () => {
        dispatch(newNameAction(name));
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