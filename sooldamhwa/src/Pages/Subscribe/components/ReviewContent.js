import React, { Fragment } from "react";
import styled from "styled-components";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import subscribe_review_02 from '../../../images/subscribeImage/subscribe_review_02.png'
import subscribe_review_03 from '../../../images/subscribeImage/subscribe_review_03.png'
import subscribe_review_04 from '../../../images/subscribeImage/subscribe_review_04.png'
import subscribe_review_05 from '../../../images/subscribeImage/subscribe_review_05.png'
import subscribe_review_07 from '../../../images/subscribeImage/subscribe_review_07.png'
import subscribe_review_06 from '../../../images/subscribeImage/subscribe_review_06.png'
import subscribe_review_09 from '../../../images/subscribeImage/subscribe_review_09.png'

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
                {SWIPER_SLIDE_DATA.map((data) => {
                    return (
                        <Fragment key={data.id}>
                            <SwiperSlide>
                                <ReviewCarousel>
                                    <ReviewImg src={data.imgSrc} alt={data.alt} />
                                    <ReviewText>
                                        <div>{data.text}</div>
                                        <p>{data.userId}</p>
                                    </ReviewText>
                                </ReviewCarousel>
                            </SwiperSlide>
                        </Fragment>
                    )
                })}
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

const SWIPER_SLIDE_DATA = [
    {
        id: 1,
        imgSrc: subscribe_review_02,
        alt: '베스트 리뷰',
        text: '🥇2월 저의 베스트 강추!',
        userId: '@hahhaya_modern',
    },
    {
        id: 2,
        imgSrc: subscribe_review_03,
        alt: '베스트 리뷰',
        text: '역시 캠핑은 모다? #술담화 #술담화구독',
        userId: '@hahhaya_modern',
    },
    {
        id: 3,
        imgSrc: subscribe_review_04,
        alt: '베스트 리뷰',
        text: '위스키 진 럼도 좋지만 늦게서야 알게된 전통주 매력에 홀딱!',
        userId: '@hahhaya_modern',
    },
    {
        id: 4,
        imgSrc: subscribe_review_05,
        alt: '베스트 리뷰',
        text: '디자인 보고 끌렸고 컨셉에서 구매 결정!',
        userId: '@hahhaya_modern',
    },
    {
        id: 5,
        imgSrc: subscribe_review_07,
        alt: '베스트 리뷰',
        text: '병도 이쁘고 맛도 이쁘고 다음달 구독박스도 기대 되쟈낭😎',
        userId: '@hahhaya_modern',
    },
    {
        id: 6,
        imgSrc: subscribe_review_06,
        alt: '베스트 리뷰',
        text: '술도 알아가는 재미, 내 취향인 술을 찾는 재미가 정말 톡톡!',
        userId: '@hahhaya_modern',
    },
    {
        id: 7,
        imgSrc: subscribe_review_09,
        alt: '베스트 리뷰',
        text: '족발이 갑자기 땡겼던 날, 그렇다면? 술담화지!',
        userId: '@hahhaya_modern',
    },
]

export default Review;