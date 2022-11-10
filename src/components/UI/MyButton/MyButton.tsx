import React, {ButtonHTMLAttributes, FC} from 'react';
import './MyButton.css'

// interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//
// }

const MyButton: FC <ButtonHTMLAttributes<HTMLButtonElement>>  = ({children, ...props}) => {
    return (
        <button className='myBtn' {...props}>
            {children}
        </button>
    );
};

export default MyButton;