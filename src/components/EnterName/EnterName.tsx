import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {name} from "../../store/slices/name";
import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import './EnterName.css'
import Popup from "../Popup/Popup";
import Confirmation from "./Confirmation/Confirmation";
import {Button, Modal, Popconfirm} from "antd";

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

                    <Popconfirm title={`Are you sure to set a ${localName}?`} onConfirm={() => setIsConfirm(true)}>
                        <Button type={'default'} size={'large'}>Save</Button>
                    </Popconfirm>

                    <Button type={'primary'} size={'large'} onClick={() => setIsActivePopup(true)}>Save</Button>
                    <Modal
                        title={'Confirmation'}
                        open={isActivePopup}
                        onOk={() => (
                            setIsActivePopup(false),
                                setIsConfirm(true)
                        )}
                        onCancel={() => setIsActivePopup(false)}
                        okText='Yes'
                        cancelText='No'
                        width={300}
                    >
                        {`Are you sure to set a ${localName}?`}
                    </Modal>
                </div>
            </div>
        </>
    );
};

export default EnterName;
