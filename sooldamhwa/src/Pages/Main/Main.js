import React from 'react';
import styled from 'styled-components';
import image from '../../image/main-logo.png' 
const Main = () => {

    return(
        <>
            <Header>
            <LogoImage src={image} alt='Logo' />
            <ul style={{display:'flex', margin:'0', listStyleType: 'none'}}>
            <li><HeaderGnb>구독</HeaderGnb></li>
            <li><HeaderGnb>스토어</HeaderGnb></li>
            <li><HeaderGnbSearch>무엇을 찾고 계신가요?</HeaderGnbSearch></li>
            </ul>
            </Header>
        </>
    )

};
const Header = styled.header`
    width:1530px;

    margin: 15px auto;
    display: flex;
`
const LogoImage = styled.img`
    width: 61px;
    height: 25px;

    margin-left: 188px;
`
const HeaderGnb = styled.a`
    padding-left: 16px;
    
    font-size: 18px;
    font-weight: 700;
`
const HeaderGnbSearch = styled.a`
    margin-left: 30px;
    padding: 2px 30px;
    
    background-color: #F7F7F7;
    color: #999;

`
export default Main;