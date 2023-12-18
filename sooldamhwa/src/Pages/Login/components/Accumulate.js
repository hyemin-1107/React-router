import React from 'react';
import styled from 'styled-components';
import Coin from '../../../loginImage/icon_coin.png'

const Accumulate = () => {

    return(

        <Accumulatecontent>
        지금 회원가입하면 최대 4,000p 적립!
        <LoginCoin src={Coin} />
        </Accumulatecontent>
    
    )

};

const Accumulatecontent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 56px;

    height: 36px;

    font-size: 13px;
    font-weight: 700;

    background: #5197F2;
    color: #fff;
`

const LoginCoin = styled.img`
    margin-left: 5px;
    
    width: 24px;
    height: 24px;
`

export default Accumulate;