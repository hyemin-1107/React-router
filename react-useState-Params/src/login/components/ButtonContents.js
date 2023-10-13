import React from 'react';
import { useNavigate } from 'react-router-dom';

const ButtonContents = () => {
    
    const navigate = useNavigate();

    const practice = () => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((response) => response.json())
            .then((json) => console.log(json));
            navigate("/LoginCheck");
    }
   

    const onClickSignUp = () => {
        navigate("/Join");
    }
    return (
        <div>
            <button id='loginCheck' onClick={() => practice()}>Sign in</button>
            <button id='join' onClick={() => onClickSignUp()}>Sign up</button>
        </div>
    );
};

export default ButtonContents;