import React, {Dispatch, SetStateAction} from 'react';
import './Popup.css'

type IProps = {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    children: React.ReactNode;
}

const Popup = ({active, setActive, children} : IProps) => {
    return (
        <div className={active ? 'mainPopupContainer active' : 'mainPopupContainer'} onClick={() => setActive(false)}>
            <div className='popupContainer' onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Popup;
