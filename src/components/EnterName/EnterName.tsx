import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {name} from "../../store/slices/name";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import './EnterName.css'
import Popup from "../Popup/Popup";
import Confirmation from "./Confirmation/Confirmation";

const EnterName = () => {
    const [localName, setLocalName] = useState('')
    const dispatch = useDispatch()
    const {newName} = name.actions

    const [isActivePopup, setIsActivePopup] = useState(false)
    const [isConfirm, setIsConfirm] = useState(false)


    const changeStateName = () => {
        dispatch(newName(localName))
        setLocalName('');
    }

    const areYouSureName = () => {
        isConfirm && changeStateName()
    }

    useEffect(() => {
        areYouSureName();
        setIsConfirm(false);
    }, [isConfirm])

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
                    <MyButton type='myBtn' onClick={() => {setIsActivePopup(true)}}>
                        Save
                    </MyButton>
                </div>
            </div>
            <Popup active={isActivePopup} setActive={setIsActivePopup}>
                <Confirmation setChoice={setIsConfirm} setActive={setIsActivePopup} name={localName}/>
            </Popup>
        </>
    );
};

export default EnterName;
