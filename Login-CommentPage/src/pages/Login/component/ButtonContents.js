import React from 'react';
import styled from 'styled-components';


const ButtonContents = (props) => {

    const { onClickLoginButton } = props;

    return (
        <LoginButton onClick={() => onClickLoginButton()}>
            Sign in
        </LoginButton>
    );
    
};

const LoginButton = styled.button`
    text-align: center;
    
    margin-top: 20px;
    padding: 9px;
    
    width: 100%;
    
    font-weight: bold;
    font-size: 18px;

    border: 2px solid #ffffff;
    border-radius: 10px;
    background: #95bad6;
    color: #ffffff;

    cursor: pointer;
    transition: 0.4s;
    
    &:hover {
        background: skyblue;
        transition: 0.3s;
    }
`;

export default ButtonContents;