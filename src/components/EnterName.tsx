import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {name} from "../store/slices/name";
import MyInput from "./UI/MyInput/MyInput";
import MyButton from "./UI/MyButton/MyButton";
import './EnterName.css'
import Popup from "./Popup/Popup";
import Confirmation from "./Popup/Confirmation/Confirmation";

const EnterName = () => {
    const [localName, setLocalName] = useState('')
    const dispatch = useDispatch()
    const {newName} = name.actions

    const [activePopup, setActivePopup] = useState(false)
    const [confirm, setConfirm] = useState(false)


    const changeStateName = () => {
        dispatch(newName(localName))
        setLocalName('');
    }

    const areYouSureName = () => {
        confirm && changeStateName()
    }

    useEffect(() => {
        areYouSureName();
        setConfirm(false);
    }, [confirm])

    return (
        <>
            <div className='inputContainer'>
                <div className='inputBox'>
                    <MyInput
                        label='Enter your name:'
                        type='text'
                        value={localName}
                        onChange={e => setLocalName(e.target.value)}
                    />
                    <MyButton type='myBtn' onClick={() => {setActivePopup(true)}}>
                        Save
                    </MyButton>
                </div>
            </div>
            <Popup active={activePopup} setActive={setActivePopup}>
                <Confirmation setChoice={setConfirm} setActive={setActivePopup} name={localName}/>
            </Popup>
        </>
    );
};

export default EnterName;
