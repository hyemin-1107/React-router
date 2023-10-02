import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonContents = () => {
    const navigate = useNavigate();

    const onClick = () => {
        navigate("/LoginCheck");
    }
    const onClickSignUp = () => {
        navigate("/Join");
    }
    return (
        <div>
            <button id='loginCheck' onClick={() => onClick()}>Sign in</button>
            <button id='join' onClick={() => onClickSignUp()}>Sign up</button>
        </div>
    );
};

export default ButtonContents;