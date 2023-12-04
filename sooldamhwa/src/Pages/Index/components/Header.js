import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import Logo from '../../../image/main-logo-christmas.png'
import Headersearch from '../../../image/searchIcon.svg'
import Headericon from '../../../image/icon-header-basket.png'

const Header = () => {

    return (
        <Headercontents>
            <GnbNav>
                <Gnb>
                    <LogoLink to="/">
                        <LogoImage src={Logo} alt='Logo' />
                    </LogoLink>
                    <HeaderGnb>
                        <li><HeaderGnbList to="/">구독</HeaderGnbList></li>
                        <li><HeaderGnbList to="/">스토어</HeaderGnbList></li>
                        <li><HeaderGnbSearch to="/"><img src={Headersearch} alt='검색기능' />무엇을 찾고 계신가요?</HeaderGnbSearch></li>
                    </HeaderGnb>
                </Gnb>
                <GnbSub>
                    <li><HeaderGnbLogin to="/">로그인/회원가입 {'>'}</HeaderGnbLogin></li>
                    <li><Link to='/'><HeaderIcon src={Headericon} alt='icon' /></Link></li>
                </GnbSub>
            </GnbNav>
        </Headercontents>
    )
};

const Headercontents = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;    

    margin: 0 auto;

    background: #fff;
    border-bottom: 1px solid #D2D2D2;
    z-index:1;
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
    li{
        padding: 0 10px;
    }
`

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    
    width: 70px;
    height: 55px;
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

const HeaderGnbList = styled(Link)`
    text-align: center;

    width: 60px;

    font-size: 16px;
    font-weight: 800;

    color: #3E3E3E;
`

const HeaderGnbSearch = styled(Link)`
    display: flex;
    align-items: center;

    gap:10px;
    padding-left: 14px;
    
    width: 230px;
    height: 40px;
    
    font-size: 14px;
    font-weight: 500;
    
    box-sizing: border-box;
    border-radius: 6px;

    background-color: #F7F7F7;
    color: #B2B2B2;
`

const GnbSub = styled.ul`
    display: flex;
    align-items: center;

    margin: 0;    
`

const HeaderGnbLogin = styled(Link)`
    margin-right: 26px;
    
    padding: 10px 0;

    font-size: 14px;
    font-weight: 500;
    
    color: #3E3E3E;
`

const HeaderIcon = styled.img`
    display: flex;

    width: 28px;
    height: 29px;
`

export default Header;