import React from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';
import icon_basic_damhwabox from '../../../images/subscribeImage/icon_basic_damhwabox.png'
import icon_soju_damhwabox from '../../../images/subscribeImage/icon_soju_damhwabox.png'
import icon_yakchungju_damhwabox from '../../../images/subscribeImage/icon_yakchungju_damhwabox.png'
import icon_new from '../../../images/subscribeImage/icon_new.png'

const SubscriptionImgContent = () => {

    return (
        <SubscriptionImg>
            <Link to="DetailInfo" spy={true} smooth={true} style={{ cursor: 'pointer' }}>
                <SubscriptionBox>
                    <SubscriptionAlcohol src={icon_basic_damhwabox} alt="종합 구독"/>
                    <div>종합 구독</div>
                </SubscriptionBox>
            </Link>
            <Link to="DetailInfo" spy={true} smooth={true} style={{ cursor: 'pointer' }}>
                <SubscriptionBox>
                    <SubscriptionAlcohol src={icon_soju_damhwabox} alt="증류주 구독"/>
                    <div>증류주 구독</div>
                </SubscriptionBox>
            </Link>
            <Link to="DetailInfo" spy={true} smooth={true} style={{ cursor: 'pointer' }}>
                <SubscriptionBox>
                    <SubscriptionAlcohol src={icon_yakchungju_damhwabox} alt="약,청주 구독"/>
                    <SubscriptionAlcoholNew src={icon_new} alt="신상 아이콘"/>
                    <div>약ㆍ청주 구독</div>
                </SubscriptionBox>
            </Link>
        </SubscriptionImg>
    )
};

const SubscriptionImg = styled.div`
    display: flex;
    justify-content: center;
    align-items : center;

    margin-top: 10px;

    height: 127px;
`

const SubscriptionBox = styled.div`
    position: relative;
    text-align: center;

    width: 110px;

    font-size: 14px;
    font-weight: 600;
`

const SubscriptionAlcohol = styled.img`
    width: 44px;
    height: 44px;
`

const SubscriptionAlcoholNew = styled.img`
    position: absolute;
    right: 18px;
    top: -10px;
    
    width: 22px;
`


export default SubscriptionImgContent;