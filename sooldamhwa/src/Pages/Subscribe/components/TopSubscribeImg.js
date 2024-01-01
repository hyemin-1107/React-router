import React from "react";
import styled from "styled-components";
import { Link } from 'react-scroll';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import img_main from '../../../images/subscribeImage/img_main.jpg'
import img_main1 from '../../../images/subscribeImage/img_main1.jpg'
import img_main2 from '../../../images/subscribeImage/img_main2.jpg'
import img_main3 from '../../../images/subscribeImage/img_main3.jpg'
import img_main4 from '../../../images/subscribeImage/img_main4.jpg'
import img_main5 from '../../../images/subscribeImage/img_main5.jpg'

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
                <MainImg src={img_main} />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="DetailInfo" spy={true} smooth={true}>
                <MainImg src={img_main1} />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="DetailInfo" spy={true} smooth={true}>
                <MainImg src={img_main2} />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="DetailInfo" spy={true} smooth={true}>
                <MainImg src={img_main3} />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="DetailInfo" spy={true} smooth={true}>
                <MainImg src={img_main4} />
            </Link>
        </SwiperSlide>
        <SwiperSlide>
            <Link to="DetailInfo" spy={true} smooth={true}>
                <MainImg src={img_main5} />
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