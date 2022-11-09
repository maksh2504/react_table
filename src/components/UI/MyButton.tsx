import React, {ButtonHTMLAttributes, FC} from 'react';

// interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//
// }

const MyButton: FC <ButtonHTMLAttributes<HTMLButtonElement>>  = ({children, ...props}) => {
    return (
        <button {...props}>
            {children}
        </button>
    );
};

export default MyButton;