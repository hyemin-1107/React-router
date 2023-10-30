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
    padding: 9px;
    
    width: 100%;
    
    font-weight: bold;
    font-size: 18px;

    border: 2px solid #000;
    border-radius: 4px;
    background: #666;
    color: #ffffff;

    cursor: pointer;
    transition: 0.4s;
    
    &:hover {
        background: #000;
        transition: 0.3s;
    }
`;


export default ButtonContents;