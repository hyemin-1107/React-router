import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import icon_login_greeting from '../../../images/loginImage/icon_login_greeting.png'
import icon_kakao_login from '../../../images/loginImage/icon_kakao_login.png'
import icon_naver_login from '../../../images/loginImage/icon_naver_login.png'
import icon_email_login from '../../../images/loginImage/icon_email_login.png'

const LoginMain = () => {
    
    const navigate = useNavigate();

    return(
        <Main>
                <Title>
                    <TitleText>반가워요!</TitleText>
                    <TittleImg src={icon_login_greeting} />
                </Title>
                <Titlesub>찾아오는 인생술, 술담화입니다.</Titlesub>
                <LiginMethod>
                    <KakaoButton onClick={() => { navigate(""); }}><LoginImg src={icon_kakao_login} alt="카카오톡 로그인"/>카카오로 시작하기</KakaoButton>
                    <NaverButton onClick={() => { navigate(""); }}><LoginImg src={icon_naver_login} alt="카카오톡 로그인"/>네이버로 시작하기</NaverButton>
                    <EmailButton onClick={() => { navigate(""); }}><LoginImg src={icon_email_login} alt="카카오톡 로그인"/>이메일로 시작하기</EmailButton>
                </LiginMethod>
        </Main>
    )
};

const Main = styled.div`
    margin: 0 auto;

    width: 335px;
`

const Title = styled.div`
    display: flex;
    align-items: center;

    margin: 30px 0 14px;

    width: 335px;
`

const TitleText = styled.div`
    font-size: 26px;
    font-weight: 800;

    color: #3E3E3E;
`

const TittleImg = styled.img`
    margin-left: 3px;

    width: 30px;
    height: 30px;
`

const Titlesub = styled.div`
    font-size: 16px;
    font-weight: 500;

    color: #707070;
`

const LiginMethod = styled.div`
    margin-top: 70px;
`

const KakaoButton = styled.button`
    display: flex;
    align-items: center;

    margin-bottom: 16px;
    
    width: 100%;
    height: 50px;
    
    font-size: 15px;
    font-weight: 600;

    border: 1px solid #FFE812;
    border-radius: 5px;
    
    color: #342020;
    background: #FFE812;

    cursor: pointer;
`

const LoginImg = styled.img`
    margin: 0 13px 0 14px;

    width: 24px;
    height: 22px;
`

const NaverButton = styled.button`
    display: flex;
    align-items: center;

    margin-bottom: 16px;

    width: 100%;
    height: 50px;

    font-size: 15px;
    font-weight: 600;

    border: 1px solid #04D461;
    border-radius: 5px;

    background: #04D461;
    color: #fff;

    cursor: pointer;
`

const EmailButton = styled.button`
    display: flex;
    align-items: center;

    width: 100%;
    height: 50px;

    font-size: 15px;
    font-weight: 600;

    border: 1px solid #0096f3;
    border-radius: 5px;

    background: none;
    color: #0096f3;

    cursor: pointer;
`

export default LoginMain;