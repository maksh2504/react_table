import React, {FC, LabelHTMLAttributes} from 'react';
import './MyLabel.css'

interface MyLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
    type?: string;
}

const MyLabel : FC <MyLabelProps> = ({type, children, ...props}) => {
    return (
        <label className={type} {...props}>
            {children}
        </label>
    );
};

export default MyLabel;
