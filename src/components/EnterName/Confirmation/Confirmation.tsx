import React, {Dispatch, SetStateAction} from 'react';
import './Confirmation.css'
import MyButton from "../../UI/MyButton/MyButton";

type IProps = {
    setChoice: Dispatch<SetStateAction<boolean>>;
    setActive: Dispatch<SetStateAction<boolean>>;
    name: string;
}

const Confirmation = ({setChoice, setActive, name} : IProps) => {

    const onOkHandler = () => {
        setChoice(true);
        setActive(false);
    }

    const onCancelHandler = () => {
        setChoice(false);
        setActive(false);
    }

    return (
        <div className='popupContent'>
            <h1>Confirm action</h1>
            <label>Are you sure to set a {name}?</label>
            <div>
                <MyButton type='primary' onClick={() => { onOkHandler() }}>OK</MyButton>
                <MyButton type='secondary' onClick={() => { onCancelHandler() }}>Cancel</MyButton>
            </div>
        </div>
    );
};

export default Confirmation;
