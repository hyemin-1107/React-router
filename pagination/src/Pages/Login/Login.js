import React from 'react';
import styled from 'styled-components';
import LoginBox from './component/LoginBox';

const Login = () => {

    return (
        <LoginContainer>
            <Header>Login</Header>
            <LoginBox />
        </LoginContainer>
    );

};

const Header = styled.div`
    margin: 50px auto;
    
    width: 100px;
    
    font-size: 32px;
    color: #333;
`

const LoginContainer = styled.div`
    margin: 100px auto;
    padding: 30px 100px 100px;
    
    width: 500px;
   
    border: 2px solid #666;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.3) 0px 0px 0px inset;
`;


export default Login;