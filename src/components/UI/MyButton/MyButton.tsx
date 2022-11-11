import React, {FC} from 'react';
import './MyButton.css'

interface MyButtonProps {
    type?: 'default' | 'primary' | 'secondary' | 'myBtn';
    children: React.ReactNode;
    onClick:  React.MouseEventHandler<HTMLButtonElement>;
}

const MyButton: FC <MyButtonProps>  = ({
                                           type,
                                           children,
                                           onClick}) => {
    return (
        <button className={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;
