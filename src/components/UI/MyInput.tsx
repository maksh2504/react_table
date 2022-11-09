import React, {FC, InputHTMLAttributes} from 'react';

interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

const MyInput : FC <MyInputProps> = ({ label, type, value, ...props}) => {
    return (
        <div>
            <label>{label}</label>
            <input type={type} value={value} {...props}/>
        </div>
    );
};

export default MyInput;