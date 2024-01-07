import React, { useState } from 'react';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'

import Header from '../../components/Header';
import TopSubscribeImg from './components/TopSubscribeImg';
import SubscriptionImgContent from './components/SubscriptionImgContent';
import IntroductionContent from './components/IntroductionContent';
import PurchaseBenefitsContents from './components/PurchaseBenefitsContent';
import PopupContent from './components/PopupContent';
import ThisMonthsConcept from './components/ThisMonthsDrink';
import QnAContents from './components/QnAContents';
import Review from './components/ReviewContent';
import Footer from '../../components/Footer';
import TotalBoxContents from './components/TotalBoxContents';
import SojuBoxContents from './components/SojuBoxContents';
import ChungjuBoxContents from './components/ChungjuBoxContents'
import ApplyModal from './components/ApplyModal';
import PcKakaoModal from './components/PcKakaoModal';

const Subscribe = () => {

    const [landingState, setIsLandingState] = useState("total");

    const landingStateHandle = (landingState) => {
        setIsLandingState(landingState);
    }

    return (
        <>
            <Header />
            <TopSubscribeImg />
            <SubscriptionImgContent />
            <Review />
            <IntroductionContent />
            <PurchaseBenefitsContents />

            {landingState === "total" && (
                <TotalBoxContents landingStateHandle={landingStateHandle} />
            )}

            {landingState === "soju" && (
                <SojuBoxContents landingStateHandle={landingStateHandle} />
            )}

            {landingState === "chungju" && (
                <ChungjuBoxContents landingStateHandle={landingStateHandle} />
            )}

            <ThisMonthsConcept />
            <QnAContents />
            <Footer />
            <PopupContent />
            <PcKakaoModal />
            <ApplyModal />
        </>
    )
};

export default Subscribe;