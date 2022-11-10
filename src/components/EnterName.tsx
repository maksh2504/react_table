import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {name} from "../store/slices/name";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import MyLabel from "./UI/MyLabel/MyLabel";

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
                <MyInput
                    label='Enter your name'
                    type='text'
                    value={localName}
                    onChange={e => setLocalName(e.target.value)}
                />
                <MyButton onClick={() => {changeStateName()}}>
                    Save
                </MyButton>
            </div>
            <MyLabel type='default'>default</MyLabel>
            <MyLabel type='primary'>primary</MyLabel>
            <MyLabel type='secondary'>secondary</MyLabel>
        </div>
    );
};

export default EnterName;
