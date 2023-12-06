import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../Index/components/Header';
import Footer from '../Index/components/Footer';
import Main from '../../SubscribeImage/img_main1.jpg'
import Basicimg from '../../SubscribeImage/icon_basic_damhwabox.png'
import Sojuimg from '../../SubscribeImage/icon_soju_damhwabox.png'
import Yakchungjuimg from '../../SubscribeImage/icon_yakchungju_damhwabox.png'
import New from '../../SubscribeImage/icon_new.png' 
import SpecialTimeImg from '../../SubscribeImage/subscribe_review_02.png'

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
                    <SubscriptionAlcohol src={Basicimg} />
                    <div>종합 구독</div>
                </SubscriptionBox>
                <SubscriptionBox>
                    <SubscriptionAlcohol src={Sojuimg} />
                    <div>증류주 구독</div>
                </SubscriptionBox>
                <SubscriptionBox>
                    <SubscriptionAlcohol src={Yakchungjuimg} />
                    <SubscriptionAlcoholNew src={New} />
                    <div>약ㆍ청주 구독</div>
                </SubscriptionBox>
            </SubscriptionImg>

            <SubscriptionReview>
                <SpecialTime>
                    매월 전통주 구독으로 <br />
                    나를 위한 특별한 시간
                    <div>
                    취향을 찾아가고 전통주를 알아가요
                    </div>
                </SpecialTime>
               <div style={{display:'flex', overflow:'hidden', height:'520px'}}>
                <ReviewCarousel>
                    <ReviewImg src={SpecialTimeImg} />
                    <ReviewText>
                        <div>🥇2월 저의 베스트 강추!</div>
                        <p>@hahhaya_modern</p>
                    </ReviewText>
                </ReviewCarousel>
                <ReviewCarousel>
                    <ReviewImg src={SpecialTimeImg} />
                    <ReviewText>
                        <div>🥇2월 저의 베스트 강추!</div>
                        <p>@hahhaya_modern</p>
                    </ReviewText>
                </ReviewCarousel>
                <ReviewCarousel>
                    <ReviewImg src={SpecialTimeImg} />
                    <ReviewText>
                        <div>🥇2월 저의 베스트 강추!</div>
                        <p>@hahhaya_modern</p>
                    </ReviewText>
                </ReviewCarousel>
                <ReviewCarousel>
                    <ReviewImg src={SpecialTimeImg} />
                    <ReviewText>
                        <div>🥇2월 저의 베스트 강추!</div>
                        <p>@hahhaya_modern</p>
                    </ReviewText>
                </ReviewCarousel>
                <ReviewCarousel>
                    <ReviewImg src={SpecialTimeImg} />
                    <ReviewText>
                        <div>🥇2월 저의 베스트 강추!</div>
                        <p>@hahhaya_modern</p>
                    </ReviewText>
                </ReviewCarousel>
                </div>
            </SubscriptionReview>
            
            <Footer />
        </>
    )

};

const SubscriptionReview = styled.div`
    height: 1022px;

    background: #F5F5F5;

`

const ReviewCarousel = styled.div`
    position: relative;

    margin-left: 20px;

    width: 400px;
    height: 513px;

    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 3px 3px;
    border-radius: 20px;
`

const ReviewText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 14px 20px;
    
    height: 74px;
    
    font-size: 16px;
    font-weight: 800;
    
        p{
        margin: 0;
        
        font-size: 14px;
        font-weight: 800;

        color: #3D3D3D99;
    }
`

const ReviewImg = styled.img`
    width: 400px;
    height: 400px;
    
    border-radius: 20px 20px 0 0;
`

const SpecialTime = styled.div`
    padding: 120px 0 0 252px;

    font-size: 44px;
    font-weight: 700;

    div{
        font-size: 24px;
        font-weight: 700;

        margin: 20px 0 60px;
    }
`

const MainImg = styled.img`
    display: block;

    margin-top: 56px;
    
    overflow: hidden;
    object-fit: cover;

    width: 100%;
    height: 380px;

    cursor: pointer;
`

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

export default Subscribe;