import React from 'react';
import styled from 'styled-components';
import image from '../../../img/img_logo.png'


const HeaderContents = () => {

    return (
        <>
            <Img src={image} alt='logo'></Img>
            <Header>Login</Header>
        </>
    );

};

const Img = styled.img`
    display: block;

    margin: 100px auto 0;

    width: 90px;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;
    
    font-size: 40px;
    color: #222328;
`;

export default HeaderContents;