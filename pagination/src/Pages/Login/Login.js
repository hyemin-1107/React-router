import React from 'react';
import styled from 'styled-components';
import LoginBox from './component/LoginBox';

const Login = () => {

    return (
        <Login1>
            <Header>Login</Header>
            <LoginBox />
        </Login1>
    );

};

const Header = styled.div`
    margin: 50px auto;
    
    width: 100px;
    
    font-size: 32px;
    color: #333;
`

const Login1 = styled.div`
    margin: 100px auto;
    padding: 30px 100px 100px;
    
    width: 500px;
   
    border: 2px solid #666;
    box-shadow: 10px 10px 10px grey;
`;


export default Login;