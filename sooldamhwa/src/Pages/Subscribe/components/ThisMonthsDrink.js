import React from "react";
import styled from "styled-components";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import ConceptImg2306 from '../../../images/subscribeImage/damhwabox_archive_2023_06.jpg'
import ConceptImg2305 from '../../../images/subscribeImage/damhwabox_archive_2023_05.jpg'
import ConceptImg2304 from '../../../images/subscribeImage/damhwabox_archive_2023_04.jpg'
import ConceptImg2303 from '../../../images/subscribeImage/damhwabox_archive_2023_03.jpg'
import ConceptImg2302 from '../../../images/subscribeImage/damhwabox_archive_2023_02.jpg'
import ConceptImg2301 from '../../../images/subscribeImage/damhwabox_archive_2023_01.jpg'
import ConceptImg2212 from '../../../images/subscribeImage/damhwabox_archive_2022_12.png'
import ConceptImg2211 from '../../../images/subscribeImage/damhwabox_archive_2022_11.png'
import ConceptImg2210 from '../../../images/subscribeImage/damhwabox_archive_2022_10.png'
import ConceptImg2209 from '../../../images/subscribeImage/damhwabox_archive_2022_09.png'
import ConceptImg2208 from '../../../images/subscribeImage/damhwabox_archive_2022_08.png'
import ConceptImg2207 from '../../../images/subscribeImage/damhwabox_archive_2022_07.png'
import ConceptImg2206 from '../../../images/subscribeImage/damhwabox_archive_2022_06.png'
import ConceptImg2205 from '../../../images/subscribeImage/damhwabox_archive_2022_05.png'
import ConceptImg2204 from '../../../images/subscribeImage/damhwabox_archive_2022_04.png'

const ThisMonthsConcept = () => {

    return (

        <DamhwaConcept>
            <DamhwaConceptTitle>
                이번 달엔 어떤 술을 < br />
                만나게 될까요?
            </DamhwaConceptTitle>
            <DamhwaConceptImgContents>
                <Swiper
                    slidesPerView={7.5}
                    spaceBetween={5}
                    navigation={true}
                    centeredSlides={true}
                    modules={[Navigation]}
                    className='month'
                >
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2306} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2023.06
                            <div>초여름밤</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2305} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2023.05
                            <div>어른이 날</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2304} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2023.04
                            <div>꽃 놀이의 계절!</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2303} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2023.03
                            <div>새로운 전통의 맛</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2302} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2023.02
                            <div>발렌타인 데이</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2301} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2023.01
                            <div>2023년의 시작</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2212} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.12
                            <div>연말 모임</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2211} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.11
                            <div>가을 끝자락의 정취</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2210} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.10
                            <div>할로윈</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2209} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.09
                            <div>가을 열매 바구니</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2208} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.08
                            <div>풍요로운 추석</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2207} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.07
                            <div>신(맛)들의 잔치</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2206} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.06
                            <div>상생</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2205} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.05
                            <div>농부를 위한</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
                    <SwiperSlide>
                        <DamhwaConceptImg src={ConceptImg2204} alt='이번 달의 술'></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.04
                            <div>봄날의 응원</div>
                        </DamhwaConceptImgText>
                    </SwiperSlide>
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


export default ThisMonthsConcept;