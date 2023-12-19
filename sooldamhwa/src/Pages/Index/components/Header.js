import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Logo from '../../../images/mainImage/main_logo_christmas.png'
import Headersearch from '../../../images/mainImage/search_icon.svg'
import Headericon from '../../../images/mainImage/icon_header_basket.png'

const Header = () => {
    const navigate = useNavigate();

    return (
        <HeaderContents>
            <GnbNav>
                <Gnb>
                    <LogoLink onClick={() => { navigate("/"); }}>
                        <LogoImage src={Logo} alt='Logo' />
                    </LogoLink>
                    <HeaderGnb>
                        <li onClick={() => { navigate("/subscribe"); }}><HeaderGnbList>구독</HeaderGnbList></li>
                        <li onClick={() => { navigate(""); }}><HeaderGnbList>스토어</HeaderGnbList></li>
                        <li onClick={() => { navigate(""); }}><HeaderGnbSearch><img src={Headersearch} alt='검색기능' />무엇을 찾고 계신가요?</HeaderGnbSearch></li>
                    </HeaderGnb>
                </Gnb>
                <GnbSub>
                    <li onClick={() => { navigate("/login"); }}><HeaderGnbLogin>로그인/회원가입 {'>'}</HeaderGnbLogin></li>
                    <li onClick={() => { navigate(""); }}><HeaderIcon src={Headericon} alt='icon' /></li>
                </GnbSub>
            </GnbNav>
        </HeaderContents>
    )
};

const HeaderContents = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;    

    margin: 0 auto;

    background: #fff;
    border-bottom: 1px solid #D2D2D2;
    z-index: 10;
`

const GnbNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    width: 1150px;
`

const Gnb = styled.div`
    display: flex;

    align-items: center;
`

const LogoLink = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 70px;
    height: 55px;
    cursor: pointer;
`
const LogoImage = styled.img`
    width: 60px;
    height: 24px;
`

const HeaderGnb = styled.ul`
    display: flex;
    align-items: center;

    margin: 0;
    padding-left: 18px;
`

const HeaderGnbList = styled.div`
    text-align: center;

    width: 60px;

    font-size: 16px;
    font-weight: 800;

    color: #3E3E3E;
    cursor: pointer;
`

const HeaderGnbSearch = styled.div`
    display: flex;
    align-items: center;

    gap:10px;
    padding-left: 14px;
    margin-left: 14px;
    
    width: 230px;
    height: 40px;
    
    font-size: 14px;
    font-weight: 500;
    
    box-sizing: border-box;
    border-radius: 6px;

    background-color: #F7F7F7;
    color: #B2B2B2;
    cursor: pointer;
`

const GnbSub = styled.ul`
    display: flex;
    align-items: center;

    margin: 0;    
`

const HeaderGnbLogin = styled.div`
    margin-right: 26px;
    
    padding: 10px 0;

    font-size: 14px;
    font-weight: 500;
    
    color: #3E3E3E;
    cursor: pointer;
`

const HeaderIcon = styled.img`
    display: flex;

    width: 28px;
    height: 29px;
    cursor: pointer;
`

export default Header;