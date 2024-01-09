import React from 'react';
// import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import icon_login_greeting from '../../../images/loginImage/icon_login_greeting.png'
import icon_kakao_login from '../../../images/loginImage/icon_kakao_login.png'
import icon_naver_login from '../../../images/loginImage/icon_naver_login.png'
import icon_email_login from '../../../images/loginImage/icon_email_login.png'

const LoginMain = () => {

    // const navigate = useNavigate();

    return (
        <Main>
            <Title>
                <TitleText>반가워요!</TitleText>
                <TittleImg src={icon_login_greeting} />
            </Title>
            <Titlesub>찾아오는 인생술, 술담화입니다.</Titlesub>
            <LiginMethod>
                <a href='https://accounts.kakao.com/login/?continue=https%3A%2F%2Fkauth.kakao.com%2Foauth%2Fauthorize%3Fresponse_type%3Dcode%26redirect_uri%3Dhttps%253A%252F%252Fwww.sooldamhwa.com%252Flogin%26through_account%3Dtrue%26client_id%3Db14405f58beace8dcc622c8a463b3ea1#login' target='_blank' rel="noreferrer">
                    <KakaoButton><LoginImg src={icon_kakao_login} alt="카카오톡 로그인" />카카오로 시작하기</KakaoButton>
                </a>
                <a href='https://nid.naver.com/nidlogin.login?oauth_token=ucIH3NRvLTX3kSDQgp&consumer_key=J9vRa2vDyGGB3U0ks0cL&logintp=oauth2&nurl=https%3A%2F%2Fnid.naver.com%2Foauth2.0%2Fauthorize%3Fresponse_type%3Dtoken%26state%3D9d7681c6-36d1-4eeb-baac-2a604e09f39e%26client_id%3DJ9vRa2vDyGGB3U0ks0cL%26redirect_uri%3Dhttps%253A%252F%252Fwww.sooldamhwa.com%252Flogin%26locale%3Dko_KR%26inapp_view%3D%26oauth_os%3D&locale=ko_KR&inapp_view=&svctype=1' target='_blank' rel="noreferrer">
                    <NaverButton><LoginImg src={icon_naver_login} alt="카카오톡 로그인" />네이버로 시작하기</NaverButton>
                </a>
                <EmailButton><LoginImg src={icon_email_login} alt="카카오톡 로그인" />이메일로 시작하기</EmailButton>
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