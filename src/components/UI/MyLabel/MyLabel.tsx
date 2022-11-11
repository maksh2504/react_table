import React, {FC} from 'react';
import './MyLabel.css'

interface MyLabelProps {
    type?: string;
    children: React.ReactNode;
}

const MyLabel : FC <MyLabelProps> = ({ type, children}) => {
    return (
        <label className={type}>
            {children}
        </label>
    );
};

export default MyLabel;
