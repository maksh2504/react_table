import React, {FC, LabelHTMLAttributes} from 'react';

const MyLabel : FC <LabelHTMLAttributes<HTMLLabelElement>> = ({children, ...props}) => {
    return (
        <label {...props}>
            {children}
        </label>
    );
};

export default MyLabel;