import React, {Dispatch, SetStateAction} from 'react';
import './Confirmation.css'
import MyButton from "../../UI/MyButton/MyButton";

type IProps = {
    setChoice: Dispatch<SetStateAction<boolean>>;
    setActive: Dispatch<SetStateAction<boolean>>;
    name: string;
}

const Confirmation = ({setChoice, setActive, name} : IProps) => {
    return (
        <div className='popupContent'>
            <h1>Confirm action</h1>
            <label>Are you sure to set a {name}?</label>
            <div>
                <MyButton type='primary' onClick={() => {
                    setChoice(true);
                    setActive(false);
                }}>Yes</MyButton>
                <MyButton type='secondary' onClick={() => {
                    setChoice(false);
                    setActive(false);
                }}>No</MyButton>
            </div>
        </div>
    );
};

export default Confirmation;
