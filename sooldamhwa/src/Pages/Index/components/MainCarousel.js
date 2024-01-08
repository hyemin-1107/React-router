import React from 'react';
import styled from 'styled-components';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import './swiper.css'
import bubble_conversation from '../../../images/mainImage/bubble_conversation.png'
import comma_left from '../../../images/mainImage/comma_left.png'
import comma_right from '../../../images/mainImage/comma_right.png'

const MainCarousel = () => {

    return (
        
        <RecentDamhwa>
            <RecentDamhwaText>최근 담화, 함께 볼까요?</RecentDamhwaText>
            <RecentDamhwaReview>
                <img src={comma_left} alt='left' />
                <div>
                    <Review>한 달에 한번씩 <br /> 나에게 주는 선물</Review>
                    <ReviewUser>@shin_tea97</ReviewUser>
                </div>
                {/* <div>
                <Review>한 달에 한번씩 <br /> 나에게 주는 선물</Review>
                <ReviewUser>@shin_tea97</ReviewUser>
            </div>
            <div>
                <Review>한 달에 한번씩 <br /> 나에게 주는 선물</Review>
                <ReviewUser>@shin_tea97</ReviewUser>
            </div> */}
                <img src={comma_right} alt='right' />
            </RecentDamhwaReview>
            <RecentDamhwaImg src={bubble_conversation} />
        </RecentDamhwa>
    )

};


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
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 34px auto 40px;
    
    width: 430px;
    height: 116px;
    
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px 0px;
    border-radius: 20px;
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