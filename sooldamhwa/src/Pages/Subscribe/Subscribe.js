import React, { useState } from 'react';
// import { Link } from 'react-scroll';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'

import Header from '../Index/components/Header';
import TopSubscribeImg from './components/TopSubscribeImg';
import SubscriptionImgContent from './components/SubscriptionImgContent';
import IntroductionContent from './components/IntroductionContent';
import PurchaseBenefitsContents from './components/PurchaseBenefitsContent';
import PopupContent from './components/PopupContent';
import DamhwaThisMonthsConcept from './components/ThisMonthsDrink';
import QnA from './components/QnA';
import Modal from './components/Modal';
import Review from './components/ReviewContent';
import Footer from '../Index/components/Footer';

import PcKakaoImg from '../../images/subscribeImage/channel_talk_pc.png'

const Subscribe = () => {

    const [isModal, setIsModal] = useState(false);

    const onClickModal = () => {
        setIsModal(true);
    };

    const onClickButton = () => {
        setIsModal(false);
    }

    const navigate = useNavigate();


    return (
        <>
            <Header />
            <TopSubscribeImg />
            <SubscriptionImgContent />
            <Review />
            <IntroductionContent />
            <PurchaseBenefitsContents />
            <SubscribeLandingBox>
                <SubscribeLandingBoxBg id="DetailInfo" src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/origin/Pabz-1702000694497-PC_subscription%20concept.jpg" />
                <LandingBox>
                    <LandingTotalBoxTitle>
                        <div>2024년 1월의 종합 담화박스</div>
                        화합의 상징 청룡, <br />
                        술자리의 조화로움을 이끌다.
                    </LandingTotalBoxTitle>
                    <TotalBox></TotalBox>
                </LandingBox>
            </SubscribeLandingBox>
            <DamhwaThisMonthsConcept />
            <QnA />
            <PcKakao src={PcKakaoImg} onClick={() => { navigate(" "); }} />
            <Footer />
            <PopupContent />
            <ApplyButton onClick={onClickModal}>지금 신청하기</ApplyButton>
            <Modal isModal={isModal}
                onClickButton={onClickButton} />

        </>
    )
};

const LandingBox = styled.div`

`
const LandingTotalBoxTitle = styled.div`

`
const TotalBox = styled.div`

`

const SubscribeLandingBox = styled.div`

`

const SubscribeLandingBoxBg = styled.img`
    overflow: hidden;
    object-fit: cover;

    width: 100%;
    height: 947px;
`

const ApplyButton = styled.button`
    position: fixed;
    bottom: 0px;
    right: 50%;

    width: 300px;
    height: 50px;

    font-size: 16px;
    font-weight: 700;

    border: none;
    border-radius: 6px;

    color: #fff;
    background: #0096F3;
    
    cursor: pointer;
    z-index: 1;
    
    transition: 0.3s ease;
    transform: translate( 52%, -50% );

    &:hover{
        background: rgb(45, 123, 195);
        transition: 0.3s ease;
    }
`

const PcKakao = styled.img`
    position: fixed;
    right: 50px;
    bottom: 50px;

    width: 75px;
    height: 75px;

    z-index: 1 ;
    cursor: pointer;

    animation: motion 0.5s linear 0s infinite alternate;
    @keyframes motion {
	    0% {bottom: 50px;}
	    100% {bottom: 60px;}
}
`

export default Subscribe;