import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'
import bubble_conversation from '../../../images/mainImage/bubble_conversation.png'
import comma_left from '../../../images/mainImage/comma_left.png'
import comma_right from '../../../images/mainImage/comma_right.png'

const MainCarousel = () => {

    return (
        <RecentDamhwa>
            <RecentDamhwaText>최근 담화, 함께 볼까요?</RecentDamhwaText>
            <RecentDamhwaReview>
                <Arrow>
                    <img src={comma_left} alt='left' />
                </Arrow>
                <Swiper
                    loop={true}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3000,
                    }}
                    modules={[Autoplay]}
                >
                    <SwiperSlide>
                        <div>
                            <Review>한 달에 한번씩 <br /> 나에게 주는 선물</Review>
                            <ReviewUser>@shin_tea97</ReviewUser>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Review>안주페어링, 스토리텔링 등이  <br />적힌 친절한 큐카드에 감동 ;)</Review>
                            <ReviewUser>@me9mi_hye</ReviewUser>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div>
                            <Review>전통주 구독 서비스란게 있다길래 지체없이 월 정기 구독 박스를 신청했다.</Review>
                            <ReviewUser>@1_jong_r-2</ReviewUser>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <Arrow>
                    <img src={comma_right} alt='right' />
                </Arrow>
            </RecentDamhwaReview>
            <RecentDamhwaImg src={bubble_conversation} />
        </RecentDamhwa>
    )

};

const Arrow = styled.div`
    width: 30px;
`
const RecentDamhwa = styled.div`
    text-align: center;

    margin-top: 230px;
`

const RecentDamhwaText = styled.p`
    font-size: 28px;
    font-weight: 700;

    color: #707070;
`

const RecentDamhwaReview = styled.div`
    display: grid;
    grid-template-columns: 1fr 300px 1fr;
    align-items: center;

    margin: 34px auto 40px;
    
    width: 430px;
    height: 116px;
    
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px 0px;
    border-radius: 20px;
    div{
        width: 100%;
    }
`

const Review = styled.div`
    width: 310px;

    font-size: 16px;
    font-weight: 500;
    line-height: 1.7;
    
    color: #000000A6;
`

const ReviewUser = styled.div`
    margin-top: 8px;

    font-size: 13px;
    font-weight: 800;

    color: #000000A6;
`

const RecentDamhwaImg = styled.img`
    width: 160px;
    height: 160px;
`

export default MainCarousel;