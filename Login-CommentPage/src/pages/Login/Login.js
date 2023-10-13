import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import image from '../../img/img_logo.png'

const Login = () => {

    // User 의 ID 와 PW 를 받아서 저장하는 State 2개 만들기!
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");

    const navigate = useNavigate();

    // e.target.value 를 state에 저장하는 onChange 함수 작성하기!
    const onChangeUserId = (e) => {

        const { value } = e.target;
        setId(value);

    };

    const onChangeUserPw = (e) => {

        const { value } = e.target;
        setPw(value);

    };

    // Login 버튼 클릭 시, id 와 pw를 비교하는 함수 작성하기!
    // - id,pw 모두 같을 시, /main page로 이동하기!
    // - id,pw 틀릴 시, alert() 하기!
    const onClickLoginButton = () => {

        const loginId = "hyemin";
        const loginPw = "1234";

        if (id === loginId) {
            if (pw === loginPw) {
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
        <section>
            <Img src={image} alt='logo'></Img>
            <Header>Login</Header>
            <LoginBox>
                <div>
                    <div>Usename or email address</div>
                    <Input onChange={(e) => onChangeUserId(e)} />
                </div>
                <div>
                    <div>Password</div>
                    <Input type='password' onChange={(e) => onChangeUserPw(e)} />
                </div>
                <LoginButton onClick={() => onClickLoginButton()}>
                    Sign in
                </LoginButton>
            </LoginBox>
        </section>
    )
};

const Img = styled.img`
    display: block;
    width: 90px;
    margin: 100px auto 0;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    font-size: 40px;
    color: #222328;
`;
const Input = styled.input`
    margin: 10px 0;    
    width:100%;
    border-radius: 10px;
    border: 1px solid #ffffff;
    padding:10px;
    box-sizing: border-box;
`;
const LoginBox = styled.div`
    width: 400px;
    height: 330px;
    border: 2px solid #ffffff;
    border-radius: 20px;
    margin: 40px auto 0;
    padding: 50px;
    background-color: #eeeeee;
    box-sizing: border-box;
`;
const LoginButton = styled.button`
    width: 100%;
    padding: 9px;
    background: #95bad6;
    border: 2px solid #ffffff;
    border-radius: 10px;
    color: #ffffff;
    font-weight: bold;
    font-size: 18px;
    margin-top: 20px;
    cursor: pointer;
    text-align: center;
    transition: 0.4s;
    &:hover {
        background: skyblue;
        transition: 0.3s;
    }
`;


export default Login;