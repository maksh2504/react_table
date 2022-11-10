import React, {FC, InputHTMLAttributes} from 'react';
import './MyInput.css'

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const MyInput : FC <MyInputProps> = ({ label, type, value, ...props}) => {
    return (
        <div className='myInputContainer'>
            <label>{label}</label>
            <input className='myInput' type={type} value={value} {...props}/>
        </div>
    );
};

export default MyInput;