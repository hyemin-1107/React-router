import React from 'react';
import styled from 'styled-components';
import Logo from '../../image/main-logo.png'
import Headericon from '../../image/icon-header-basket.png'
import Mainimg from '../../image/landingImgPc3.jpg'
import Specialday from '../../image/liquor.png'

const Main = () => {

    return (
        <>
            <Header>
                <div style={{ display: 'flex' }}>
                    <LogoImage src={Logo} alt='Logo' />
                    <ul style={{ display: 'flex', margin: '0', paddingLeft: '12px', listStyleType: 'none' }}>
                        <li><HeaderGnb>구독</HeaderGnb></li>
                        <li><HeaderGnb>스토어</HeaderGnb></li>
                        <li><HeaderGnbSearch>무엇을 찾고 계신가요?</HeaderGnbSearch></li>
                    </ul>
                </div>
                <ul style={{ display: 'flex', margin: '0', listStyleType: 'none', alignItems: 'center' }}>
                    <li><HeaderGnbLogin>로그인/회원가입</HeaderGnbLogin></li>
                    <li><HeaderIcon src={Headericon} alt='icon' /></li>
                </ul>
            </Header>
            <main>
                <div style={{ position: 'relative', width: '100%', height: '430px' }}>
                    <MainImage src={Mainimg} alt='Main' />
                    <MainTitle>
                        <p>고생한 나를</p>
                        <p>좋은 술로 위로하고 싶을 때</p>
                    </MainTitle>
                </div>
                <div style={{ border: '5px solid #E0E0E0' }}></div>
                <div style={{ border: '5px solid #F4bb5F' }}></div>
                <div style={{ border: '5px solid #5C96CA' }}></div>
                <section>
                    <div style={{
                        textAlign: 'center',
                        marginTop: '100px',
                        fontSize: '28px',
                        fontWeight: '700',
                        lineHeight: '1.6',
                        color: '#707070'
                    }}>
                        <p>특별한 날을 완성시키는<br />
                            가장 쉬운 방법</p>
                        <SpecialDay src={Specialday} alt='특별한 날' />
                    </div>
                </section>
            </main>
        </>
    )

};

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 11px auto;
    
    width: 1130px;
`
const LogoImage = styled.img`
    width: 61px;
    height: 25px;
`

const HeaderGnb = styled.a`
    padding-left: 16px;

    font-size: 17px;
    font-weight: 700;
`

const HeaderGnbSearch = styled.a`
    margin-left: 30px;
    padding: 6px 40px;
    
    background-color: #F7F7F7;
    color: #999;
`

const HeaderGnbLogin = styled.a`
    margin-right: 30px;

    font-size: 14px;
`

const HeaderIcon = styled.img`
   width: 28px;
   height: 28px;
`

const MainImage = styled.img`
    width: 100%;
    height: 100%;
    
`

const MainTitle = styled.h1`
    position: absolute;
    text-align: center;

    color: #fff;
    line-height: .8;
    font-size: 28px;

    top: 50%;
	left: 50%;
    transform: translate( -50%, -50% );
`

const SpecialDay = styled.img`
    width: 170px;
    height: 170px;
`

export default Main;