import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {name} from "../store/slices/name";

const EnterName = () => {
    const [localName, setLocalName] = useState('')
    const dispatch = useDispatch()
    const {newName} = name.actions

    const changeStateName = () => {
        dispatch(newName(localName))
        setLocalName('');
    }

    return (
        <div>
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

export default EnterName;