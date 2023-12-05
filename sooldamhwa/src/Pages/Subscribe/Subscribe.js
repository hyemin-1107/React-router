import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../Index/components/Header';
import Footer from '../Index/components/Footer';
import Main from '../../SubscribeImage/img_main1.jpg'
import Basicimg from '../../SubscribeImage/icon_basic_damhwabox.png'
import Sojuimg from '../../SubscribeImage/icon_soju_damhwabox.png'
import Yakchungjuimg from '../../SubscribeImage/icon_yakchungju_damhwabox.png'


const Subscribe = () => {

    const navigate = useNavigate();

    return(
        <>
            <Header />

            <div>
                <MainImg  src={Main}  onClick={() => { navigate(""); }} />
            </div>
            <SubscriptionImg>
                <SubscriptionBox>
                    <SubscriptionAlcohol src={Basicimg}></SubscriptionAlcohol>
                    <p>종합 구독</p>
                </SubscriptionBox>
                <SubscriptionBox>
                    <SubscriptionAlcohol src={Sojuimg}></SubscriptionAlcohol>
                    <p>증류주 구독</p>
                </SubscriptionBox>
                <SubscriptionBox>
                    <SubscriptionAlcohol src={Yakchungjuimg}></SubscriptionAlcohol>
                    <p>약ㆍ청주 구독</p>
                </SubscriptionBox>
            </SubscriptionImg>

            <Footer />
        </>
    )

};


const SubscriptionImg = styled.div`
    display: flex;
    justify-content: center;

    margin: 0 auto;
`

const SubscriptionBox = styled.div`
    text-align: center;
    
    width: 110px;
    height: 125px;
`


const SubscriptionAlcohol = styled.img`
    width: 44px;
    height: 44px;
`





const MainImg = styled.img`
    overflow: hidden;
    display: block;
    margin-top: 56px;

    width: auto;
    height: 380px;

    cursor: pointer;
`

export default Subscribe;