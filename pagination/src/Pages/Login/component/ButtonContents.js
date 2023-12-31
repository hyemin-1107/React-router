import React from 'react';
import styled from 'styled-components';

const ButtonContents = (props) => {

    const { onClickLoginButton } = props;

    return (
        <LoginButton onClick={() => onClickLoginButton()}>
            Sign in
        </LoginButton>
    )

};

const LoginButton = styled.button`
    text-align: center;
    
    margin-top: 20px;
    padding: 10px;
    
    width: 100%;
    
    font-weight: bold;
    font-size: 18px;

    border: none;
    border-radius: 4px;
    background: #999;
    color: #ffffff;

    cursor: pointer;
    transition: 0.4s;
    
    &:hover {
        background: #000;
        transition: 0.3s;
    }
`;


export default ButtonContents;