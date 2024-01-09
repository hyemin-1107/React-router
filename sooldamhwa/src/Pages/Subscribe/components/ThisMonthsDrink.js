import React, { Fragment } from "react";
import styled from "styled-components";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import damhwabox_archive_2023_06 from '../../../images/subscribeImage/damhwabox_archive_2023_06.jpg'
import damhwabox_archive_2023_05 from '../../../images/subscribeImage/damhwabox_archive_2023_05.jpg'
import damhwabox_archive_2023_04 from '../../../images/subscribeImage/damhwabox_archive_2023_04.jpg'
import damhwabox_archive_2023_03 from '../../../images/subscribeImage/damhwabox_archive_2023_03.jpg'
import damhwabox_archive_2023_02 from '../../../images/subscribeImage/damhwabox_archive_2023_02.jpg'
import damhwabox_archive_2023_01 from '../../../images/subscribeImage/damhwabox_archive_2023_01.jpg'
import damhwabox_archive_2022_12 from '../../../images/subscribeImage/damhwabox_archive_2022_12.png'
import damhwabox_archive_2022_11 from '../../../images/subscribeImage/damhwabox_archive_2022_11.png'
import damhwabox_archive_2022_10 from '../../../images/subscribeImage/damhwabox_archive_2022_10.png'
import damhwabox_archive_2022_09 from '../../../images/subscribeImage/damhwabox_archive_2022_09.png'
import damhwabox_archive_2022_08 from '../../../images/subscribeImage/damhwabox_archive_2022_08.png'
import damhwabox_archive_2022_07 from '../../../images/subscribeImage/damhwabox_archive_2022_07.png'
import damhwabox_archive_2022_06 from '../../../images/subscribeImage/damhwabox_archive_2022_06.png'
import damhwabox_archive_2022_05 from '../../../images/subscribeImage/damhwabox_archive_2022_05.png'
import damhwabox_archive_2022_04 from '../../../images/subscribeImage/damhwabox_archive_2022_04.png'

const ThisMonthsConcept = () => {

    return (
        <DamhwaConcept>
            <DamhwaConceptTitle>
                이번 달엔 어떤 술을 < br />
                만나게 될까요?
            </DamhwaConceptTitle>
            <DamhwaConceptImgContents>
                <Swiper
                    slidesPerView={8.5}
                    navigation={true}
                    // centeredSlides={true}
                    modules={[Navigation]}
                >
                    {SWIPER_SLIDE_DATA.map((data) => {
                        return (
                            <Fragment key={data.id}>
                                <SwiperSlide>
                                    <DamhwaConceptImg src={data.imgSrc} alt={data.alt}></DamhwaConceptImg>
                                    <DamhwaConceptImgText>
                                        {data.date}
                                        <div>{data.text}</div>
                                    </DamhwaConceptImgText>
                                </SwiperSlide>
                            </Fragment>
                        )
                    })}
                </Swiper>
            </DamhwaConceptImgContents>
        </DamhwaConcept>
    )
};

const DamhwaConcept = styled.div`
    padding: 120px 0 140px;
    
    background: #F6F6F6;
`

const DamhwaConceptTitle = styled.div`
    padding-left: 252px;
    
    font-size: 44px;
    font-weight: 700;
`

const DamhwaConceptImgContents = styled.div`
    display: flex;
    
    gap: 20px;
    margin-top: 68px;
    padding: 0 20px;
    
    overflow: hidden;
`

const DamhwaConceptImg = styled.img`
    display: block;
    
    width: 190px;
    height: 190px;

    object-fit: cover;
    border-radius: 20px;
`

const DamhwaConceptImgText = styled.div`
    
    margin-top: 24px;
    font-size: 24px;
    font-weight: 700;

    div{
        font-weight: 500;
    }
`

const SWIPER_SLIDE_DATA = [
    {
        id: 1,
        imgSrc: damhwabox_archive_2023_06,
        alt: '이번 달의 술',
        date: '2023.06',
        text: '초여름밤',
    },
    {
        id: 2,
        imgSrc: damhwabox_archive_2023_05,
        alt: '이번 달의 술',
        date: '2023.05',
        text: '어른이 날',
    },
    {
        id: 3,
        imgSrc: damhwabox_archive_2023_04,
        alt: '이번 달의 술',
        date: '2023.04',
        text: '꽃 놀이의 계절!',
    },
    {
        id: 4,
        imgSrc: damhwabox_archive_2023_03,
        alt: '이번 달의 술',
        date: '2023.03',
        text: '새로운 전통의 맛',
    },
    {
        id: 5,
        imgSrc: damhwabox_archive_2023_02,
        alt: '이번 달의 술',
        date: '2023.02',
        text: '발렌타인 데이',
    },
    {
        id: 6,
        imgSrc: damhwabox_archive_2023_01,
        alt: '이번 달의 술',
        date: '2023.01',
        text: '2023년의 시작',
    },
    {
        id: 7,
        imgSrc: damhwabox_archive_2022_12,
        alt: '이번 달의 술',
        date: '2022.12',
        text: '연말 모임',
    },
    {
        id: 8,
        imgSrc: damhwabox_archive_2022_11,
        alt: '이번 달의 술',
        date: '2022.11',
        text: '가을 끝자락의 정취',
    },
    {
        id: 1,
        imgSrc: damhwabox_archive_2022_10,
        alt: '이번 달의 술',
        date: '2022.10',
        text: '할로윈',
    },
    {
        id: 1,
        imgSrc: damhwabox_archive_2022_09,
        alt: '이번 달의 술',
        date: '2022.09',
        text: '가을 열매 바구니',
    },
    {
        id: 1,
        imgSrc: damhwabox_archive_2022_08,
        alt: '이번 달의 술',
        date: '2022.08',
        text: '풍요로운 추석',
    },
    {
        id: 1,
        imgSrc: damhwabox_archive_2022_07,
        alt: '이번 달의 술',
        date: '2022.07',
        text: '신(맛)들의 잔치',
    },
    {
        id: 1,
        imgSrc: damhwabox_archive_2022_06,
        alt: '이번 달의 술',
        date: '2022.06',
        text: '상생',
    },
    {
        id: 1,
        imgSrc: damhwabox_archive_2022_05,
        alt: '이번 달의 술',
        date: '2022.05',
        text: '농부를 위한',
    },
    {
        id: 1,
        imgSrc: damhwabox_archive_2022_04,
        alt: '이번 달의 술',
        date: '2022.04',
        text: '봄날의 응원',
    },
]

export default ThisMonthsConcept;