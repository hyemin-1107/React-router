import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ButtonContents from './ButtonContents';
import UserInput from './UserInput';


const LoginBox = () => {

    const navigate = useNavigate();

    // User 의 ID 와 PW 를 받아서 저장하는 State 2개 만들기!
    // const [id, setId] = useState("");
    // const [pw, setPw] = useState("");
    const [userLogin, setUserLogin] = useState({
        id: "",
        pw: ""
    });

    // e.target.value 를 state에 저장하는 onChange 함수 작성하기!
    const onChange = e => {
        const { value, name } = e.target;
        setUserLogin({
            ...userLogin,
            [name]: value
        });
    };

    // Login 버튼 클릭 시, id 와 pw를 비교하는 함수 작성하기!
    // - id,pw 모두 같을 시, /main page로 이동하기!
    // - id,pw 틀릴 시, alert() 하기!
    const onClickLoginButton = () => {

        const loginId = "hyemin";
        const loginPw = "1234";

        if (userLogin.id === loginId) {
            if (userLogin.pw === loginPw) {
                alert("로그인 성공!");
                navigate("/main");
            } else {
                alert("아이디 혹은 비밀번호를 확인해주세요!");
            }
        } else {
            alert("아이디 혹은 비밀번호를 확인해주세요!");
        };

    };

    return (
        <LoginContainer>
            <UserInput onChange={onChange} />
            <ButtonContents onClickLoginButton={onClickLoginButton} />
        </LoginContainer>
    );

};

const LoginContainer = styled.div`
    box-sizing: border-box;    

    margin: 40px auto 0;
    padding: 50px;
    
    width: 400px;
    height: 330px;
   
    border: 2px solid #ffffff;
    border-radius: 20px;
    
    background-color: #eeeeee;
`;


export default LoginBox;