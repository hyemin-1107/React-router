import React, { useState } from 'react';
// import { Link } from 'react-scroll';
// import { useNavigate } from "react-router-dom";
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
import ThisMonthsConcept from './components/ThisMonthsDrink';
import QnAContents from './components/QnAContents';
import ApplyModal from './components/ApplyModal';
import Review from './components/ReviewContent';
import Footer from '../Index/components/Footer';

import TotalActiveImg from '../../images/subscribeImage/icon_basic_damhwabox.png'
import SojuImg from '../../images/subscribeImage/grey_soju_subscription_icon.png'
import ChungjuImg from '../../images/subscribeImage/grey_chungju_subscription_icon.png'
import MonthSoolImg from '../../images/subscribeImage/sool_icon.png'
import GreyArrow from '../../images/subscribeImage/grey_arrow_right.png'
import CurationCardImg from '../../images/subscribeImage/curation_card.png'

import PosterImg from '../../images/subscribeImage/poster.png'

import CreditcardImg from '../../images/subscribeImage/grey_creditcard.png'
import TruckImg from '../../images/subscribeImage/grey_truck.png'

import ModalClose from '../../images/subscribeImage/icon_close_black.png'
import PosterModalImg from '../../images/subscribeImage/popup_poster.png'
import CurationModalImg from '../../images/subscribeImage/popup_curation.png'

import PcKakaoImg from '../../images/subscribeImage/channel_talk_pc.png'
import MessengerLogo from '../../images/subscribeImage/msg_logo_img.jpeg'
import DetailLogo from '../../images/subscribeImage/msg_logo.jpeg'
import Inquiryimg from '../../images/subscribeImage/inquiry_img.png'
import TimeImg from '../../images/subscribeImage/app_time.png'
import KakaoIco from '../../images/subscribeImage/app_messenger_kakao.png'
import NaverIco from '../../images/subscribeImage/app_messenger_naver_talk.png'
import CallIco from '../../images/subscribeImage/app_messenger_call.png'
import ChannelIco from '../../images/subscribeImage/ch_logo.png'

const Subscribe = () => {

    const [isModal, setIsModal] = useState(false);

    const [isMonthSoolModal, setIsMonthSoolModal] = useState(false);
    const [isCurationModal, setIsCurationModal] = useState(false);
    const [isPostModal, setIsPostModal] = useState(false);
    const [isPcKakoModal, setIsPcKakoModal] = useState(false);

    const onClickModal = () => {
        setIsModal(true);
    };

    const onClickButton = () => {
        setIsModal(false);
    }


    const onClickMonthSoolModal = () => {
        setIsMonthSoolModal(true);
    };

    const onClickMonthSoolButton = () => {
        setIsMonthSoolModal(false);
    }


    const onClickCurationModal = () => {
        setIsCurationModal(true);
    };

    const onClickCurationButton = () => {
        setIsCurationModal(false);
    }


    const onClickPosterModal = () => {
        setIsPostModal(true);
    };

    const onClickPostButton = () => {
        setIsPostModal(false);
    }


    const onClickPcKakoModal = () => {
        setIsPcKakoModal(true);
    };

    const onClickPcKakoButton = () => {
        setIsPcKakoModal(false);
    }





    // const navigate = useNavigate();


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
                    <div>
                        <LandingBoxNameContents>
                            <LandingBoxNameActive><NameActiveImg src={TotalActiveImg} />종합</LandingBoxNameActive>
                            <LandingBoxName><NameImg src={SojuImg} />증류주</LandingBoxName>
                            <LandingBoxName><NameImg src={ChungjuImg} />약·청주</LandingBoxName>
                        </LandingBoxNameContents>
                        <TotalBox>
                            <TotalBoxInpo>종합 담화박스</TotalBoxInpo>
                            <SubscribePrice>
                                ₩ 39,000/월
                                <span>₩ 42,000</span>
                            </SubscribePrice>
                            <SubscribeHashtag>
                                <div>입문용</div>
                                <div>매월 무료 배송</div>
                                <div>첫 구독 10% 할인</div>
                            </SubscribeHashtag>
                            <TotalBoxSubDescription>
                                전통주 소믈리에가 엄선한 다양한 주종. <br />
                                나의 전통주 취향을 알아볼 수 있어요.
                            </TotalBoxSubDescription>

                            <TotalBoxButton onClick={onClickMonthSoolModal}>
                                <div>
                                    <TotalBoxButtonImg src={MonthSoolImg} />
                                    <TotalBoxButtonTitle>1월의 술 3종</TotalBoxButtonTitle>
                                </div>
                                <div>
                                    <SeeMore>힌트보기</SeeMore>
                                    <SeeMoreImg src={GreyArrow} />
                                </div>
                            </TotalBoxButton>

                            <TotalBoxButton onClick={onClickCurationModal}>
                                <div>
                                    <TotalBoxButtonImg src={CurationCardImg} />
                                    <TotalBoxButtonTitle>큐레이션 카드</TotalBoxButtonTitle>
                                </div>
                                <div>
                                    <SeeMore>더보기</SeeMore>
                                    <SeeMoreImg src={GreyArrow} />
                                </div>
                            </TotalBoxButton>

                            <TotalBoxButton onClick={onClickPosterModal}>
                                <div>
                                    <TotalBoxButtonImg src={PosterImg} />
                                    <TotalBoxButtonTitle>포스터</TotalBoxButtonTitle>
                                </div>
                                <div>
                                    <SeeMore>더보기</SeeMore>
                                    <SeeMoreImg src={GreyArrow} />
                                </div>
                            </TotalBoxButton>

                            <Datebox>
                                <DateboxImg src={CreditcardImg} />
                                <DateboxTitle>
                                    결제일
                                    <div>2024년 1월 15일 월요일 오전 8시 30분</div>
                                </DateboxTitle>
                            </Datebox>
                            <Datebox>
                                <DateboxImg src={TruckImg} />
                                <DateboxTitle>
                                    도착일
                                    <div>2024년 1월 18일 목요일</div>
                                </DateboxTitle>
                            </Datebox>
                        </TotalBox>
                    </div>
                </LandingBox>

            </SubscribeLandingBox>


            <ThisMonthsConcept />
            <QnAContents />
            <PcKakao src={PcKakaoImg} onClick={onClickPcKakoModal} isPcKakoModal={isPcKakoModal} />

            <PcKakaoModalContainer isPcKakoModal={isPcKakoModal}>
                <PcKakaoModalHeader>
                    <PcKakaoModalHeaderImg src={MessengerLogo} />
                    <div>
                        <PcKakaoModalHeaderTitle>술담화</PcKakaoModalHeaderTitle>
                        <PcKakaoModalHeaderSub>운영시간 보기 {'>'}</PcKakaoModalHeaderSub>
                    </div>
                </PcKakaoModalHeader>
                <PcKakaoDetail>
                    <PcKakaoDetailContainer>
                        <PcKakaoDetailImg src={DetailLogo} />
                        <Detail>술담화
                            <div style={{ height: '2px' }}></div>
                            <div>안녕하세요, 고객님!</div>
                            <div>찾아오는 인생술, 술담화입니다.</div>
                            <div style={{ height: '1rem' }}> </div>
                            <div>현재는 고객센터 운영시간이 아닙니다.</div>
                            <div>성함과 연락처, 문의사항을 남겨주시면 영업 시간 내 순차적으로 안내 드리겠습니다. :)...</div>
                        </Detail>
                    </PcKakaoDetailContainer>
                    <DetailInquiry>문의하기
                        <InquiryImg src={Inquiryimg} />
                    </DetailInquiry>
                    <DetailTime>
                        <DetailTimeImg src={TimeImg} />
                        오후 1:30부터 운영해요
                    </DetailTime>
                </PcKakaoDetail>
                <OtherWay>
                    <OtherWayText>다른 방법으로 문의</OtherWayText>
                    <KakaoImg src={KakaoIco} />
                    <NaverImg src={NaverIco} />
                    <CallImgContainer>
                        <CallImg src={CallIco} />
                    </CallImgContainer>
                </OtherWay>
                <ChannelTalk>
                    <ChannelImg src={ChannelIco}/>
                    채널톡<span>이용중</span>
                </ChannelTalk>

            </PcKakaoModalContainer>

            <PcKakaoModalButton isPcKakoModal={isPcKakoModal} onClick={onClickPcKakoButton}>
                <PcKakaoModalButtonImg src={ModalClose} />
            </PcKakaoModalButton>

            <Footer />
            <PopupContent />

            <ApplyButton onClick={onClickModal}>지금 신청하기</ApplyButton>
            <ApplyModal isModal={isModal}
                onClickButton={onClickButton} />

            <MonthSoolModalWrap isMonthSoolModal={isMonthSoolModal}>
                <MonthSoolModalContainer>
                    <ModalButton onClick={onClickMonthSoolButton} src={ModalClose} />
                </MonthSoolModalContainer>
            </MonthSoolModalWrap>

            <CurationModalWrap isCurationModal={isCurationModal}>
                <ModalContainer>
                    <ModalButton onClick={onClickCurationButton} src={ModalClose} />
                    <ModalImg src={CurationModalImg} />
                </ModalContainer>
            </CurationModalWrap>

            <PosterModalWrap isPostModal={isPostModal}>
                <ModalContainer>
                    <ModalButton onClick={onClickPostButton} src={ModalClose} />
                    <ModalImg src={PosterModalImg} />
                </ModalContainer>
            </PosterModalWrap>

        </>
    )
};



const SubscribeLandingBox = styled.div`
    position: relative;
`

const SubscribeLandingBoxBg = styled.img`
    overflow: hidden;
    object-fit: cover;

    width: 100%;
    height: 947px;
`

const LandingBox = styled.div`
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    display: flex;
    justify-content: space-between;
    
    width: 1150px;
`

const LandingTotalBoxTitle = styled.div`
    font-size: 44px;
    font-weight: 700;

    color: #fff;
    text-shadow:rgb(0, 0, 0) 0px 4px 30px;
    
    div{
        margin-bottom: 20px;
        font-size: 22px;
    }
`

const LandingBoxNameContents = styled.div`
    display: flex;
    justify-content: center;

    font-size: 16px;
    font-weight: 600;
    
    box-sizing: border-box;

    cursor: pointer;
`

const NameActiveImg = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 3px;
`

const LandingBoxNameActive = styled.div`
    display: flex;
    align-items: center;

    padding-left: 14px;
    
    width: 124px;
    height: 47px;
    
    box-shadow: rgb(1, 151, 243) 0px 4px 0px inset;
    border-radius: 10px 10px 0 0;
    background: #fff;

    box-sizing: border-box;
`

const NameImg = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 3px;
`

const LandingBoxName = styled.div`
    display: flex;
    align-items: center;

    padding-left: 14px;

    width: 124px;
    height: 47px;

    color: rgba(61, 61, 61, 0.3);
    border-radius: 10px 10px 0 0;
    background-color: #DCDCDC;

    box-sizing: border-box;

    transition: all 0.3s ease 0s;

    &:hover{
        background-color: rgb(178, 178, 178);
        color: rgb(112, 112, 112);

        transition: all 0.3s ease 0s;
    }
`

const TotalBox = styled.div`
    padding: 38px 30px;

    width: 430px;
    height: 570px;

    background: #fff;
    border-radius: 18px;
    
    box-sizing: border-box;
`

const TotalBoxInpo = styled.div`
    margin-bottom: 12px;

    font-size: 28px;
    font-weight: 700;
`

const SubscribePrice = styled.div`
    font-size: 20px;
    font-weight: 800;

    span{
        margin-left:18px;

        font-size: 16px;
        
        text-decoration: line-through;
        color: rgba(61, 61, 61, 0.3);
    }
`

const SubscribeHashtag = styled.div`
    display: flex;
    
    gap: 8px;
    margin-top: 22px;

    div{
        padding: 5px 6px;

        background: rgb(227, 242, 253);
        border-radius: 5px;
       
        font-size: 12px;
        font-weight: 600;
       
        color: rgb(0, 150, 243);
        line-height: 12px;
    }
`

const TotalBoxSubDescription = styled.div`
    margin-top: 14px;

    height: 60px;

    font-size: 13px;
    font-weight: 500;
    line-height: 20px;

    color: rgba(61, 61, 61, 0.6);
`

const TotalBoxButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 15px;
    padding: 8px 12px;

    width: 100%;

    background-color: rgb(241, 241, 241);
    border: none;
    border-radius: 5px;

    transition: all 0.3s ease 0s;

    cursor: pointer;
    
    div{
        display: flex;
        align-items: center;
    }

    &:hover{
        background-color: rgb(229, 229, 229);
        color: rgb(112, 112, 112);
        transition: all 0.3s ease 0s;
    }
`

const TotalBoxButtonImg = styled.img`
    width: 36px;
    height: 36px;
`

const TotalBoxButtonTitle = styled.div`
    margin-left: 7px;
    
    font-size: 15px;
    font-weight: 700;
`

const SeeMore = styled.div`
    margin-right: 7px;

    font-size: 14px;
    font-weight: 700;
    
    color: rgba(61, 61, 61, 0.3);
`

const SeeMoreImg = styled.img`
    width: 7px;
    height: 13px;
`

const Datebox = styled.div`
    display: flex;
    
    gap: 8px;
    margin-top: 22px;

    font-weight: 500;
`

const DateboxImg = styled.img`
    width: 20px;
    height: 20px;
`

const DateboxTitle = styled.div`
    font-size: 12px;

    div{
        color: rgba(61, 61, 61, 0.6);
    }
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
    transform: translate( 50%, -50% );

    &:hover{
        background: rgb(45, 123, 195);
        transition: 0.3s ease;
    }
`

const MonthSoolModalWrap = styled.div`
    display: ${(props) => (props.isMonthSoolModal ? "block" : "none")};
    position: fixed;

    top: 0;
    left: 0;  
   
    width: 100%;
    height: 100%;
   
    z-index: 99;

    background-color: rgba(0,0,0,0.2);
`

const MonthSoolModalContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;

    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);

    padding: 20px 20px 30px;

    width: 390px;
    height: 660px;

    background: #fff;

    box-shadow: 2px 2px 30px 1px rgba(0,0,0,0.5);
    box-sizing: border-box;
    border-radius: 20px;
`


const CurationModalWrap = styled.div`
    display: ${(props) => (props.isCurationModal ? "block" : "none")};
    position: fixed;

    top: 0;
    left: 0;  
   
    width: 100%;
    height: 100%;
   
    z-index: 99;

    background-color: rgba(0,0,0,0.2);
`

const PosterModalWrap = styled.div`
    display: ${(props) => (props.isPostModal ? "block" : "none")};
    position: fixed;

    top: 0;
    left: 0;  
   
    width: 100%;
    height: 100%;
   
    z-index: 99;

    background-color: rgba(0,0,0,0.2);
`

const ModalContainer = styled.div`
    position: relative;

    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);
    
    padding: 20px 20px 30px;

    width: 390px;
    
    display: flex;
    justify-content: center;

    background: #fff;

    box-shadow: 2px 2px 30px 1px rgba(0,0,0,0.5);
    box-sizing: border-box;
    border-radius: 20px;
`

const ModalButton = styled.img`
    position: absolute;
    
    right: 26px;

    width: 33px;
    height: 33px;
    
    cursor: pointer;
`

const ModalImg = styled.img`
    width: 340px;
`


const PcKakao = styled.img`
    position: fixed;
    display: ${(props) => (props.isPcKakoModal ? "none" : "block")};
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

const PcKakaoModalButton = styled.div`
    position: fixed;
    display: ${(props) => (props.isPcKakoModal ? "block" : "none")};
    right: 50px;
    bottom: 50px;
    z-index: 100;

    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.15) 0px 8px 30px;
    background: #fff;
    border-radius: 24px;

    cursor: pointer;
    transition: ease .3s;

    &:hover{
        transition: ease .3s;
        box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.1) 0px 0px 6px 6px, rgba(0, 0, 0, 0.15) 0px 8px 30px;
    }
`

const PcKakaoModalButtonImg = styled.img`
    display: block;
    padding: 14px;
    
    width: 32px;
    height: 32px;
`

const PcKakaoModalContainer = styled.div`
    display: ${(props) => (props.isPcKakoModal ? "block" : "none")};
    position: fixed;
    
    right: 50px;
    bottom: 120px;

    z-index: 1;

    width: 390px;
    height: 650px;

    background: #F9F9F9;
    border-radius: 20px;
    box-shadow: 2px 2px 30px 1px rgba(0,0,0,0.4);
`

const PcKakaoDetail = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 12px;
    margin: 0 16px;
    padding: 8px;

    border-radius: 20px;
    background: #fff;
`

const PcKakaoDetailContainer = styled.div`
    display: flex;

    gap: 2px;

    cursor: pointer;
    
    transition: ease .3s;

    &:hover{
        transition: ease .3s;
        border-radius: 20px;
        background-color: #F6F6F6;
    }
`

const PcKakaoModalHeader = styled.div`
    display: flex;
    align-items: center;
    
    gap: 14px;
    margin: 24px;
`

const PcKakaoModalHeaderImg = styled.img`
    width: 56px;
    height: 56px;

    border-radius: 20px;
`

const PcKakaoModalHeaderTitle = styled.div`
    padding-left: 3px;
    
    font-size: 22px;
    font-weight: 600;
`

const PcKakaoModalHeaderSub = styled.div`
    padding: 3px;

    font-size: 13px;
    color: #00000099;
    
    cursor: pointer;

    transition: ease .3s;

    &:hover{
        transition: ease .3s;
        border-radius: 10px;
        background-color: #EFEFF0;
    }
`

const PcKakaoDetailImg = styled.img`
    margin: 8px;
    
    width: 36px;
    height: 36px;
    
    border-radius: 50%;
    border: 1px solid #EFEFF0;
`

const Detail = styled.div`
    padding: 8px 0 12px;

    width: 252px;

    font-size: 14px;
    font-weight: 600;

    div{
        font-size: 15px;
        font-weight: 400;
    }
`

const DetailInquiry = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    
    gap: 6px;
    padding: 14px;
    
    width: 100%;

    font-size: 15px;
    font-weight: 600;

    border: none;
    border-radius: 20px;

    color: #fff;
    background: #0096F3;
    
    cursor: pointer;
    
    transition: 0.3s ease;

    &:hover{
        background: rgb(45, 123, 195);
        transition: 0.3s ease;
    }
`

const InquiryImg = styled.img`
    width: 20px;
`

const DetailTime = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 4px;
    margin-bottom: 8px;

    font-size: 12px;
    font-weight: 500;
    
    color: #00000099;
`

const DetailTimeImg = styled.img`
    width: 16px;
`

const OtherWay = styled.div`
    display: flex;
    align-items: center;

    gap: 6px;
    margin: 14px 16px;
    padding: 14px;

    background: #fff;
    border-radius: 20px;
`

const OtherWayText = styled.div`
    width: 210px;
    
    font-size: 13px;
    font-weight: 500;

    color: #00000066;
`

const KakaoImg = styled.img`
    width: 34px;
    
    border-radius: 10px;
    cursor: pointer;

    transition: 0.2s ease;

    &:hover{
        transition: 0.2s ease;
        transform: scale(1.1);
    }
`

const NaverImg = styled.img`
    width: 34px;

    border-radius: 10px;
    cursor: pointer;

    transition: 0.2s ease;

    &:hover{
        transition: 0.2s ease;
        transform: scale(1.1);
    }
`

const CallImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 34px;
    height: 34px;
    
    border-radius: 10px;
    background: #329BE733;
    cursor: pointer;

    transition: 0.2s ease;

    &:hover{
        transition: 0.2s ease;
        transform: scale(1.1);
    }
`

const CallImg = styled.img`
    width: 18px;
    height: 18px;
`

const ChannelTalk = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 3px;

    height: 30px;

    font-size: 12px;
    font-weight: 600;
    color: #00000066;

    cursor: pointer;

    span{
        font-weight: 400;
    }

    &:hover{
        color: #000;
    }
`

const ChannelImg = styled.img`
    width: 20px;
    height: 20px;
`


export default Subscribe;