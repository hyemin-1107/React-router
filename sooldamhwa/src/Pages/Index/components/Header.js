import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate, NavLink } from "react-router-dom";
import main_logo_christmas from '../../../images/mainImage/main_logo_christmas.png'
import icon_search from '../../../images/mainImage/icon_search.svg'
import icon_header_basket from '../../../images/mainImage/icon_header_basket.png'
import icon_close_black from '../../../images/subscribeImage/icon_close_black.png'


const Header = () => {

    const navigate = useNavigate();
    const [isJoinPopup, setIsJoinPopup] = useState(true);
    const closeJoinPopup = () => {
        setIsJoinPopup(!isJoinPopup);
    };
  
    const activeStyle = {
        color:'rgb(0, 150, 243)'
    }
    
    const style = {
        color: '#3E3E3E'
    }

    
    return (
        <HeaderContents>
            <GnbNav>
                <Gnb>
                    <LogoLink onClick={() => { navigate("/"); }}>
                        <LogoImage src={main_logo_christmas} alt='Logo' />
                    </LogoLink>
                    <HeaderGnb>
                        <li><HeaderGnbList><NavLink style={({isActive})=>(isActive ? activeStyle : style)} to="/subscribe">구독</NavLink></HeaderGnbList></li>
                        <li onClick={() => { navigate(""); }}><HeaderGnbList>스토어</HeaderGnbList></li>
                        <li onClick={() => { navigate(""); }}><HeaderGnbSearch><img src={icon_search} alt='검색기능' />무엇을 찾고 계신가요?</HeaderGnbSearch></li>
                    </HeaderGnb>
                </Gnb>
                <GnbSub>
                    <li onClick={() => { navigate("/login"); }}><HeaderGnbLogin>로그인/회원가입 {'>'}</HeaderGnbLogin></li>
                    <li onClick={() => { navigate("/login"); }}><HeaderIcon src={icon_header_basket} alt='장바구니아이콘' /></li>
                    {isJoinPopup && (
                        <JoinPopup>
                            <JoinPopupText>
                                <JoinPopupCloseImg src={icon_close_black} onClick={closeJoinPopup} alt='팝업닫기' />
                                지금 회원가입하면 <br />
                                <span>신규 회원 쿠폰 & 최대 4,000 포인트</span> 적립!
                            </JoinPopupText>
                        </JoinPopup>
                    )}
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
    margin-left: 14px;
    padding-left: 14px;
    
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
    position: relative;
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

const JoinPopup = styled.div`
    position: absolute;
    top: 40px;
    right: 60px;

    padding: 10px 12px;
    
    width: 250px;

    background: rgb(237, 245, 255);
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.09) 0 4px 4px;
`

const JoinPopupText = styled.div`
    font-size: 13px;
    font-weight: 500;

    span{
        font-weight: 700;
        color: #0096F3;
    }
`

const JoinPopupCloseImg = styled.img`
    float: right;
    
    width: 18px;
    height: 18px;

    cursor: pointer;
`

export default Header;