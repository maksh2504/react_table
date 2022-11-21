import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {name} from "../../store/slices/name";
import './EnterName.css'
import {Button, Input, Modal} from "antd";
import { UserOutlined } from '@ant-design/icons';


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
                    <Input
                        size="large"
                        prefix={<UserOutlined/>}
                        placeholder="Enter your name:"
                        value={localName}
                        onChange={e => setLocalName(e.target.value)}
                    />

                    <Button
                        type='primary'
                        size='large'
                        onClick={() => setIsActivePopup(true)}
                        disabled={localName ? false : true}
                    >
                        Save
                    </Button>

                    <Modal
                        title='Confirmation'
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
