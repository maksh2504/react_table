import React, {FC, InputHTMLAttributes} from 'react';
import './MyInput.css'

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

const MyInput : FC <MyInputProps> = ({
                                         label,
                                         type,
                                         value,
                                         onChange}) => {
    return (
        <div className='myInputContainer'>
            <label className='myInputLabel' style={{fontFamily: 'Arial'}}>{label}</label>
            <input className='myInput' type={type} value={value} onChange={onChange}/>
        </div>
    );
};

export default MyInput;
