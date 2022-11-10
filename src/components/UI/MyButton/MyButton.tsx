import React, {ButtonHTMLAttributes, FC} from 'react';
import './MyButton.css'

// interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//
// }

const MyButton: FC <ButtonHTMLAttributes<HTMLButtonElement>>  = ({children, onClick}) => {
    return (
        <button className='myBtn' onClick={onClick}>
            {children}
        </button>
    );
};

export default MyButton;
