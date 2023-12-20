import React from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Main1 from '../../../images/subscribeImage/img_main.jpg'
import Main2 from '../../../images/subscribeImage/img_main1.jpg'
import Main3 from '../../../images/subscribeImage/img_main2.jpg'
import Main4 from '../../../images/subscribeImage/img_main3.jpg'
import Main5 from '../../../images/subscribeImage/img_main4.jpg'
import Main6 from '../../../images/subscribeImage/img_main5.jpg'

const TopSubscribeImg = () => {

    return (
        <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        slidesPerView={1}
        navigation={true}
        pagination={{
            type: 'fraction',
        }}
        autoplay={{
            delay: 3000,
        }}
    >
        <SwiperSlide>
            <Link to="DetailInfo" spy={true} smooth={true}>
                <MainImg src={Main1} />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="DetailInfo" spy={true} smooth={true}>
                <MainImg src={Main2} />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="DetailInfo" spy={true} smooth={true}>
                <MainImg src={Main3} />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="DetailInfo" spy={true} smooth={true}>
                <MainImg src={Main4} />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="DetailInfo" spy={true} smooth={true}>
                <MainImg src={Main5} />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="DetailInfo" spy={true} smooth={true}>
                <MainImg src={Main6} />
            </Link>
        </SwiperSlide>

        </Swiper>
    )
};

const MainImg = styled.img`
    display: block;

    margin-top: 56px;
    
    overflow: hidden;
    object-fit: cover;

    width: 100%;
    height: 43vh;

    cursor: pointer;
`

export default TopSubscribeImg;