import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonContents from './components/ButtonContents';
import Header from './components/header';
import UserInput from './components/UserInput';

const Login = () => {


    return (
        <div>
            <Header title='Sign in' />
            <UserInput />
            <ButtonContents />
        </div>
    )
};


export default Login;