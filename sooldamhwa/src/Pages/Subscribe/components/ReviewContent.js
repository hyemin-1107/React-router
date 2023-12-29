import React from "react";
import styled from "styled-components";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import SpecialTimeImg from '../../../images/subscribeImage/subscribe_review_02.png'
import SpecialTimeImg2 from '../../../images/subscribeImage/subscribe_review_03.png'
import SpecialTimeImg3 from '../../../images/subscribeImage/subscribe_review_04.png'
import SpecialTimeImg4 from '../../../images/subscribeImage/subscribe_review_05.png'
import SpecialTimeImg5 from '../../../images/subscribeImage/subscribe_review_07.png'
import SpecialTimeImg7 from '../../../images/subscribeImage/subscribe_review_06.png'
import SpecialTimeImg8 from '../../../images/subscribeImage/subscribe_review_09.png'

const Review = () => {

    return (

        <SubscriptionReview>
            <SpecialTime>
                매월 전통주 구독으로 <br />
                나를 위한 특별한 시간
                <div>
                    취향을 찾아가고 전통주를 알아가요
                </div>
            </SpecialTime>

            <Swiper
                modules={[Autoplay]}
                slidesPerView={4.4}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 3000,
                }} className='review'
            >
                <SwiperSlide>
                    <ReviewCarousel>
                        <ReviewImg src={SpecialTimeImg} alt='베스트리뷰' />
                        <ReviewText>
                            <div>🥇2월 저의 베스트 강추!</div>
                            <p>@hahhaya_modern</p>
                        </ReviewText>
                    </ReviewCarousel>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCarousel>
                        <ReviewImg src={SpecialTimeImg2} alt='베스트리뷰' />
                        <ReviewText>
                            <div>역시 캠핑은 모다? #술담화 #술담화구독</div>
                            <p>@hahhaya_modern</p>
                        </ReviewText>
                    </ReviewCarousel>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCarousel>
                        <ReviewImg src={SpecialTimeImg3} alt='베스트리뷰' />
                        <ReviewText>
                            <div>위스키 진 럼도 좋지만 늦게서야 알게된 전통주 매력에 홀딱!</div>
                            <p>@hahhaya_modern</p>
                        </ReviewText>
                    </ReviewCarousel>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCarousel>
                        <ReviewImg src={SpecialTimeImg4} alt='베스트리뷰' />
                        <ReviewText>
                            <div>디자인 보고 끌렸고 컨셉에서 구매 결정!</div>
                            <p>@hahhaya_modern</p>
                        </ReviewText>
                    </ReviewCarousel>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCarousel>
                        <ReviewImg src={SpecialTimeImg5} alt='베스트리뷰' />
                        <ReviewText>
                            <div>병도 이쁘고 맛도 이쁘고 다음달 구독박스도 기대 되쟈낭😎</div>
                            <p>@hahhaya_modern</p>
                        </ReviewText>
                    </ReviewCarousel>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCarousel>
                        <ReviewImg src={SpecialTimeImg7} alt='베스트리뷰' />
                        <ReviewText>
                            <div>술도 알아가는 재미, 내 취향인 술을 찾는 재미가 정말 톡톡!</div>
                            <p>@hahhaya_modern</p>
                        </ReviewText>
                    </ReviewCarousel>
                </SwiperSlide>
                <SwiperSlide>
                    <ReviewCarousel>
                        <ReviewImg src={SpecialTimeImg8} alt='베스트리뷰' />
                        <ReviewText>
                            <div>족발이 갑자기 땡겼던 날, 그렇다면? 술담화지!</div>
                            <p>@hahhaya_modern</p>
                        </ReviewText>
                    </ReviewCarousel>
                </SwiperSlide>
            </Swiper>
        </SubscriptionReview>

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
    box-shadow: rgba(0, 0, 0, 0.1) 3px 3px 10px 3px;
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
        margin: 20px 0 60px;

        font-size: 24px;
        font-weight: 700;
    }
`


export default Review;