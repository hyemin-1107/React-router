import React from "react";
import styled from "styled-components";
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import icon_close_black from '../../../images/subscribeImage/icon_close_black.png'
import hintsool1_img from '../../../images/subscribeImage/hintsool1_img.png'
import hintsool2_img from '../../../images/subscribeImage/hintsool2_img.png'
import hintsool3_img from '../../../images/subscribeImage/hintsool3_img.png'
import icon_ricebowl from '../../../images/subscribeImage/icon_ricebowl.png'
import icon_apple from '../../../images/subscribeImage/icon_apple.png'
import icon_rating_three from '../../../images/subscribeImage/icon_rating_three.png'
import icon_rating_two from '../../../images/subscribeImage/icon_rating_two.png'
import icon_rating_four from '../../../images/subscribeImage/icon_rating_four.png'


const MonthSoolModal = (props) => {

    const { isMonthSoolModal, onClickMonthSoolButton } = props;

    return (

        <MonthSoolModalWrap isMonthSoolModal={isMonthSoolModal}>

            <MonthSoolModalContainer>
                
                <ModalButton onClick={onClickMonthSoolButton} src={icon_close_black} alt='닫기' />
                
                <HintHeader>
                    1월의 종합 담화박스
                </HintHeader>
                
                <Swiper
                    modules={[Navigation, Pagination]}
                    slidesPerView={1}
                    navigation={true}
                    pagination={{
                        type: 'fraction',
                    }}
                    className="MonthSoolModal"
                >
                    <SwiperSlide>
                        <HintHeaderSub>
                            <div>힌트 #1</div>
                        </HintHeaderSub>
                        <HintHeaderText>청룡의 해를 맞이하며 ‘용’ 한 잔 어떤가요? <br />
                            산뜻하고 부드러운 감압 증류식 소주
                        </HintHeaderText>
                        <div style={{ borderBottom: '2px solid #3D3D3D33' }}></div>

                        <HintCardStyleWrap>
                            <HintCardStyleImg src={hintsool1_img} alt="이달의 술"/>
                            <HintCardStyleContainer>
                                <ProductInfo>
                                    <ProductLabel>용량</ProductLabel>
                                    <ProductData>375ml</ProductData>
                                </ProductInfo>
                                <ProductInfo>
                                    <ProductLabel>도수</ProductLabel>
                                    <ProductData>25%</ProductData>
                                </ProductInfo>
                                <ProductInfo>
                                    <ProductLabel>소매가</ProductLabel>
                                    <ProductData>15,000원</ProductData>
                                </ProductInfo>
                                <ProductInfo>
                                    <ProductLabel>유통기한</ProductLabel>
                                    <ProductData>없음</ProductData>
                                </ProductInfo>
                            </HintCardStyleContainer>
                        </HintCardStyleWrap>

                        <HintDetailContainer>
                            <HintDetailInfo>
                                <HintDetailLabel>향의 계열</HintDetailLabel>
                                <HintDetailData>
                                    <Data>달콤</Data>
                                    <DataActive>고소</DataActive>
                                    <Data>화사</Data>
                                </HintDetailData>
                            </HintDetailInfo>
                            <HintDetailInfo>
                                <HintDetailLabel>연상되는 향</HintDetailLabel>
                                <HintDetailTaste>
                                    <DataHashtag><DataHashtagImg src={icon_ricebowl} alt='쌀밥' />쌀밥</DataHashtag>
                                    <DataHashtag><DataHashtagImg src={icon_apple} alt='사과' />사과</DataHashtag>
                                </HintDetailTaste>
                            </HintDetailInfo>
                            <HintDetailInfo>
                                <HintDetailLabel>향의 강도</HintDetailLabel>
                                <div>
                                    <DetailGraphImg src={icon_rating_three} alt="3단계 그래프"/>
                                </div>
                            </HintDetailInfo>
                        </HintDetailContainer>
                        <HintDetailGraph>
                            <section>
                                <HintDetailLabel>여운</HintDetailLabel>
                                <DetailGraphImg src={icon_rating_two} alt="2단계 그래프" />
                            </section>
                            <section style={{ border: 'none' }}>
                                <HintDetailLabel>바디</HintDetailLabel>
                                <DetailGraphImg src={icon_rating_two} alt="2단계 그래프" />
                            </section>
                        </HintDetailGraph>
                    </SwiperSlide>

                    <SwiperSlide>
                        <HintHeaderSub>
                            <div>힌트 #2</div>
                        </HintHeaderSub>
                        <HintHeaderText>효모 박사 형과 양조 박사 동생의 합작품,   <br />
                        입 안에 부드러운 산미 그윽하게 깔아주는 약주 
                        </HintHeaderText>
                        <div style={{ borderBottom: '2px solid #3D3D3D33' }}></div>

                        <HintCardStyleWrap>
                            <HintCardStyleImg src={hintsool2_img} alt="이달의 술"/>
                            <HintCardStyleContainer>
                                <ProductInfo>
                                    <ProductLabel>용량</ProductLabel>
                                    <ProductData>350ml</ProductData>
                                </ProductInfo>
                                <ProductInfo>
                                    <ProductLabel>도수</ProductLabel>
                                    <ProductData>14.2%</ProductData>
                                </ProductInfo>
                                <ProductInfo>
                                    <ProductLabel>소매가</ProductLabel>
                                    <ProductData>14,000원</ProductData>
                                </ProductInfo>
                                <ProductInfo>
                                    <ProductLabel>유통기한</ProductLabel>
                                    <ProductData>제조일로부터 6개월</ProductData>
                                </ProductInfo>
                            </HintCardStyleContainer>
                        </HintCardStyleWrap>

                        <HintDetailGraph style={{borderRadius:'5px'}}>
                            <section >
                                <HintDetailLabel>단맛</HintDetailLabel>
                                <DetailGraphImg src={icon_rating_two} alt="2단계 그래프" />
                            </section>
                            <section>
                                <HintDetailLabel>산미</HintDetailLabel>
                                <DetailGraphImg src={icon_rating_four} alt="4단계 그래프" />
                            </section>
                            <section>
                                <HintDetailLabel>씁쓸</HintDetailLabel>
                                <DetailGraphImg src={icon_rating_three} alt="3단계 그래프" />
                            </section>
                            <section style={{ border: 'none' }}>
                                <HintDetailLabel>바디</HintDetailLabel>
                                <DetailGraphImg src={icon_rating_two} alt="2단계 그래프" />
                            </section>
                        </HintDetailGraph>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <HintHeaderSub>
                            <div>힌트 #3</div>
                        </HintHeaderSub>
                        <HintHeaderText>국가무형문화재를 지키기 위한 끈끈한 연대의 힘!<br />
                                    진달래 풍미 달콤하게 담고 있는 약주 
                        </HintHeaderText>
                        <div style={{ borderBottom: '2px solid #3D3D3D33' }}></div>
                        <HintCardStyleWrap>
                            <HintCardStyleImg src={hintsool3_img} alt="이달의 술"/>
                            <HintCardStyleContainer>
                                <ProductInfo>
                                    <ProductLabel>용량</ProductLabel>
                                    <ProductData>360ml</ProductData>
                                </ProductInfo>
                                <ProductInfo>
                                    <ProductLabel>도수</ProductLabel>
                                    <ProductData>18%</ProductData>
                                </ProductInfo>
                                <ProductInfo>
                                    <ProductLabel>소매가</ProductLabel>
                                    <ProductData>13,000원</ProductData>
                                </ProductInfo>
                                <ProductInfo>
                                    <ProductLabel>유통기한</ProductLabel>
                                    <ProductData>제조일로부터 90일</ProductData>
                                </ProductInfo>
                            </HintCardStyleContainer>
                        </HintCardStyleWrap>

                        <HintDetailGraph style={{borderRadius:'5px'}}>
                            <section>
                                <HintDetailLabel>단맛</HintDetailLabel>
                                <DetailGraphImg src={icon_rating_four} alt="4단계 그래프" />
                            </section>
                            <section>
                                <HintDetailLabel>산미</HintDetailLabel>
                                <DetailGraphImg src={icon_rating_two} alt="2단계 그래프" />
                            </section>
                            <section>
                                <HintDetailLabel>씁쓸</HintDetailLabel>
                                <DetailGraphImg src={icon_rating_three} alt="3단계 그래프" />
                            </section>
                            <section style={{ border: 'none' }}>
                                <HintDetailLabel>바디</HintDetailLabel>
                                <DetailGraphImg src={icon_rating_four} alt="4단계 그래프" />
                            </section>
                        </HintDetailGraph>
                    </SwiperSlide>
                </Swiper>
            </MonthSoolModalContainer>
        </MonthSoolModalWrap>
    )
};

const ModalButton = styled.img`
    position: absolute;
    
    right: 23px;

    width: 33px;
    height: 33px;
    
    cursor: pointer;
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    padding: 20px 20px 30px;
    
    width: 375px;
    height: 686px;
    
    background: #fff;
    z-index: 100;

    box-shadow: 2px 2px 30px 1px rgba(0,0,0,0.5);
    box-sizing: border-box;
    border-radius: 20px;
`

const HintHeader = styled.div`
    margin-top: 30px;

    font-size: 13px;
    font-weight: 800;

    color: #3D3D3D4d;
`

const HintHeaderSub = styled.div`
    font-size: 18px;
    font-weight: 800;

    color: #000;
`

const HintHeaderText = styled.p`
    margin: 16px 0 22px;
    
    font-size: 13px;
    font-weight: 600;
    line-height: 1.4;
`

const HintCardStyleWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 24px auto 20px;

    height: 89px;
`

const HintCardStyleImg = styled.img`
    margin: 4px 14px 0 0;

    width: 78px;
    height: 78px;
`

const HintCardStyleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 86px;
`

const ProductInfo = styled.div`
    display: flex;
    justify-content: space-between;

    width: 215px;
`

const ProductLabel = styled.div`
    font-size: 13px;
    font-weight: 500;

    color: #3D3D3D99;
`

const ProductData = styled.div`
    font-size: 13px;
    font-weight: 700;
`

const HintDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 14px;

    height: 140px;

    background-color: rgb(246, 246, 246);
    border-radius: 5px 5px 0px 0px;
    border-bottom: 1px solid rgba(61, 61, 61, 0.18);
`

const HintDetailInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 3px 0;
`

const HintDetailLabel = styled.div`
    font-size: 14px;
    font-weight: 500;

    color: #3D3D3D99;
`

const HintDetailData = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 136px;
`

const Data = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 34px;
    height: 34px;

    font-size: 11px;
    line-height: 10px;
    font-weight: 500;

    box-sizing: border-box;
    border-radius: 50%;
 
    background-color: rgba(235, 235, 235, 0.7);
    color: rgba(61, 61, 61, 0.6);
`

const DataActive = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;
    
    font-size: 13px;
    line-height: 10px;
    font-weight: 600;

    box-sizing: border-box;
    border-radius: 50%;

    background-color: rgb(0, 150, 243);
    color: #fff;
    
    &:before{
        content: "";
        position: absolute;
        top: -4px;
        left: -4px;
        display: block;
        
        width: 48px;
        height: 48px;
        
        box-sizing: border-box;
        border-radius: 50%;
        border: 2px solid rgb(141, 202, 249);
    }

    &:after{
        content: "";
        position: absolute;
        top: -7px;
        left: -7px;
        display: block;
        
        width: 54px;
        height: 54px;
        
        box-sizing: border-box;
        border-radius: 50%;
        border: 1px solid rgb(186, 222, 251);
    }
`

const HintDetailTaste = styled.div`
    display: flex;
`

const DataHashtag = styled.div`
    display: flex;
 
    gap: 4px;
    margin-left: 6px;
    padding: 4px 6px;

    font-size: 12px;
    font-weight: 500;
    line-height: 12px;

    border: 0.5px solid rgba(61, 61, 61, 0.18);
    border-radius: 5px;
    background-color: #FFF;
`

const DataHashtagImg = styled.img`
    width: 12px;
    height: 12px;
`

const DetailGraphImg = styled.img`
    width: 188px;
    height: 12px;
`

const HintDetailGraph = styled.div`
    background-color: rgb(246, 246, 246);
    border-radius: 0 0 5px 5px;
    
    section{
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 0 14px;


        height: 46px;
        border-bottom: 0.5px solid rgba(61, 61, 61, 0.18);
    }
`

export default MonthSoolModal;