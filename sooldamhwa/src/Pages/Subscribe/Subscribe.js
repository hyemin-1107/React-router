import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from "react-router-dom";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper.css'
import styled from 'styled-components';
import DropdownContents from './components/DropdownContents';
import Header from '../Index/components/Header';
import Footer from '../Index/components/Footer';
import Main1 from '../../images/subscribeImage/img_main.jpg'
import Main2 from '../../images/subscribeImage/img_main1.jpg'
import Main3 from '../../images/subscribeImage/img_main2.jpg'
import Main4 from '../../images/subscribeImage/img_main3.jpg'
import Main5 from '../../images/subscribeImage/img_main4.jpg'
import Main6 from '../../images/subscribeImage/img_main5.jpg'
import Basicimg from '../../images/subscribeImage/icon_basic_damhwabox.png'
import Sojuimg from '../../images/subscribeImage/icon_soju_damhwabox.png'
import Yakchungjuimg from '../../images/subscribeImage/icon_yakchungju_damhwabox.png'
import New from '../../images/subscribeImage/icon_new.png'
import SpecialTimeImg from '../../images/subscribeImage/subscribe_review_02.png'
import SpecialTimeImg2 from '../../images/subscribeImage/subscribe_review_03.png'
import SpecialTimeImg3 from '../../images/subscribeImage/subscribe_review_04.png'
import SpecialTimeImg4 from '../../images/subscribeImage/subscribe_review_05.png'
import SpecialTimeImg5 from '../../images/subscribeImage/subscribe_review_07.png'
import SpecialTimeImg7 from '../../images/subscribeImage/subscribe_review_06.png'
import SpecialTimeImg8 from '../../images/subscribeImage/subscribe_review_09.png'
import AdvantageContent1 from '../../images/subscribeImage/subscribe_selling_point_01.png'
import AdvantageContent2 from '../../images/subscribeImage/subscribe_selling_point_02.png'
import AdvantageContent3 from '../../images/subscribeImage/subscribe_selling_point_03.png'
import Benefitsimg1 from '../../images/subscribeImage/icon_coupon.png'
import Benefitsimg2 from '../../images/subscribeImage/icon_truck_blue2.png'
import Benefitsimg3 from '../../images/subscribeImage/icon_price_down.png'
import ConceptImg2306 from '../../images/subscribeImage/damhwabox_archive_2023_06.jpg'
import ConceptImg2305 from '../../images/subscribeImage/damhwabox_archive_2023_05.jpg'
import ConceptImg2304 from '../../images/subscribeImage/damhwabox_archive_2023_04.jpg'
import ConceptImg2303 from '../../images/subscribeImage/damhwabox_archive_2023_03.jpg'
import ConceptImg2302 from '../../images/subscribeImage/damhwabox_archive_2023_02.jpg'
import ConceptImg2301 from '../../images/subscribeImage/damhwabox_archive_2023_01.jpg'
import ConceptImg2212 from '../../images/subscribeImage/damhwabox_archive_2022_12.png'
import ConceptImg2211 from '../../images/subscribeImage/damhwabox_archive_2022_11.png'
import ConceptImg2210 from '../../images/subscribeImage/damhwabox_archive_2022_10.png'
import ConceptImg2209 from '../../images/subscribeImage/damhwabox_archive_2022_09.png'
import ConceptImg2208 from '../../images/subscribeImage/damhwabox_archive_2022_08.png'
import ConceptImg2207 from '../../images/subscribeImage/damhwabox_archive_2022_07.png'
import ConceptImg2206 from '../../images/subscribeImage/damhwabox_archive_2022_06.png'
import ConceptImg2205 from '../../images/subscribeImage/damhwabox_archive_2022_05.png'
import ConceptImg2204 from '../../images/subscribeImage/damhwabox_archive_2022_04.png'
import PcKakaoImg from '../../images/subscribeImage/channel_talk_pc.png'
import ModalClose from '../../images/subscribeImage/icon-close-black.png'
import Arrow from '../../images/subscribeImage/arrow.png'
import Popupimg from '../../images/subscribeImage/popup_img.jpg'


const Subscribe = () => {


    const [isDropdownView1, setDropdownView1] = useState(false)
    const [isDropdownView2, setDropdownView2] = useState(false)
    const [isDropdownView3, setDropdownView3] = useState(false)
    const [isDropdownView4, setDropdownView4] = useState(false)

    const [isModal, setIsModal] = useState(false);
    const onClickModal = () => {
        setIsModal(true);
    };
    const onClickButton = () => {
        setIsModal(false);
    }

    const navigate = useNavigate();
    const [isPopup, setIsPopup] = useState(true);
    const closePopup = () => {
        setIsPopup(!isPopup);
    };


    return (
        <>
            <Header />
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




            <SubscriptionImg>
                <Link to="DetailInfo" spy={true} smooth={true} style={{ cursor: 'pointer' }}>
                    <SubscriptionBox>
                        <SubscriptionAlcohol src={Basicimg} />
                        <div>종합 구독</div>
                    </SubscriptionBox>
                </Link>
                <Link to="DetailInfo" spy={true} smooth={true} style={{ cursor: 'pointer' }}>
                    <SubscriptionBox>
                        <SubscriptionAlcohol src={Sojuimg} />
                        <div>증류주 구독</div>
                    </SubscriptionBox>
                </Link>
                <Link to="DetailInfo" spy={true} smooth={true} style={{ cursor: 'pointer' }}>
                    <SubscriptionBox>
                        <SubscriptionAlcohol src={Yakchungjuimg} />
                        <SubscriptionAlcoholNew src={New} />
                        <div>약ㆍ청주 구독</div>
                    </SubscriptionBox>
                </Link>
            </SubscriptionImg>

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
                    slidesPerView={4.7}
                    spaceBetween={10}
                    loop={true}
                    autoplay={{
                        delay: 3000,
                    }} className='review'
                >
                    <SwiperSlide>
                        <ReviewCarousel>
                            <ReviewImg src={SpecialTimeImg} alt='베스트리뷰'/>
                            <ReviewText>
                                <div>🥇2월 저의 베스트 강추!</div>
                                <p>@hahhaya_modern</p>
                            </ReviewText>
                        </ReviewCarousel>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCarousel>
                            <ReviewImg src={SpecialTimeImg2} alt='베스트리뷰'/>
                            <ReviewText>
                                <div>역시 캠핑은 모다? #술담화 #술담화구독</div>
                                <p>@hahhaya_modern</p>
                            </ReviewText>
                        </ReviewCarousel>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCarousel>
                            <ReviewImg src={SpecialTimeImg3} alt='베스트리뷰'/>
                            <ReviewText>
                                <div>위스키 진 럼도 좋지만 늦게서야 알게된 전통주 매력에 홀딱!</div>
                                <p>@hahhaya_modern</p>
                            </ReviewText>
                        </ReviewCarousel>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCarousel>
                            <ReviewImg src={SpecialTimeImg4} alt='베스트리뷰'/>
                            <ReviewText>
                                <div>디자인 보고 끌렸고 컨셉에서 구매 결정!</div>
                                <p>@hahhaya_modern</p>
                            </ReviewText>
                        </ReviewCarousel>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCarousel>
                            <ReviewImg src={SpecialTimeImg5} alt='베스트리뷰'/>
                            <ReviewText>
                                <div>병도 이쁘고 맛도 이쁘고 다음달 구독박스도 기대 되쟈낭😎</div>
                                <p>@hahhaya_modern</p>
                            </ReviewText>
                        </ReviewCarousel>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCarousel>
                            <ReviewImg src={SpecialTimeImg7} alt='베스트리뷰'/>
                            <ReviewText>
                                <div>술도 알아가는 재미, 내 취향인 술을 찾는 재미가 정말 톡톡!</div>
                                <p>@hahhaya_modern</p>
                            </ReviewText>
                        </ReviewCarousel>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ReviewCarousel>
                            <ReviewImg src={SpecialTimeImg8} alt='베스트리뷰'/>
                            <ReviewText>
                                <div>족발이 갑자기 땡겼던 날, 그렇다면? 술담화지!</div>
                                <p>@hahhaya_modern</p>
                            </ReviewText>
                        </ReviewCarousel>
                    </SwiperSlide>
                </Swiper>
            </SubscriptionReview>

            <SubscriptionIntroduction>
                <Introduction>
                    <div>인생술을 찾는 여정</div>
                    우리 오늘부터 만날까요? < br />
                    제대로!
                </Introduction>

                <IntroductionSection>
                    <div>
                        <AdvantageTitle>
                            세심한 주류 품질 점검
                        </AdvantageTitle>
                        <AdvantageContent>
                            좋은 술을 찾기 위한 고집. < br />
                            전국 양조장에 직접 방문해 < br />
                            품질·위생을 검사해요.
                        </AdvantageContent>
                    </div>
                    <AdvantageContentImg src={AdvantageContent1} />
                </IntroductionSection>
                <IntroductionSection>
                    <AdvantageContentImg src={AdvantageContent2} />
                    <div>
                        <AdvantageTitle>
                            없어요, 최소 유지 기간 < br />
                            있어요, 언제든 쉬어가기
                        </AdvantageTitle>
                        <AdvantageContent>
                            술담화에서는 한 달 구독도 < br />
                            가능해요. 내가 원하는 달만 < br />
                            구독할 수도 있죠.
                        </AdvantageContent>
                    </div>
                </IntroductionSection>
                <IntroductionSection>
                    <div>
                        <AdvantageTitle>
                            집으로 찾아오는 < br />
                            나만의 소믈리에
                        </AdvantageTitle>
                        <AdvantageContent>
                            소믈리에가 직접 먹어본 조합! < br />
                            추천 안주와 재미있는 술 스토리가 < br />
                            담긴 큐레이션 카드도 들어있어요.
                        </AdvantageContent>
                    </div>
                    <AdvantageContentImg src={AdvantageContent3} />
                </IntroductionSection>
            </SubscriptionIntroduction>

            <PurchaseBenefits>
                <BenefitsText>
                    계속 추가되는 < br />
                    구독자 혜택
                </BenefitsText>

                <BenefitsImg>
                    <BenefitsImgBox>
                        <BenefitsIcon src={Benefitsimg1} />
                        <BenefitsSubText>
                            첫 구독은
                            <div>10% 할인</div>
                        </BenefitsSubText>
                    </BenefitsImgBox>
                    <BenefitsImgBox>
                        <BenefitsIcon src={Benefitsimg2} />
                        <BenefitsSubText>
                            담화박스는
                            <div>언제나 무료배송</div>
                        </BenefitsSubText>
                    </BenefitsImgBox>
                    <BenefitsImgBox>
                        <BenefitsIcon src={Benefitsimg3} />
                        <BenefitsSubText>
                            단품구매보다
                            <div>평균 16% 할인</div>
                        </BenefitsSubText>
                    </BenefitsImgBox>
                </BenefitsImg>

            </PurchaseBenefits>

            <SubscribeLandingBox>
                <SubscribeLandingBoxBg id="DetailInfo" src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/origin/a7lU-1699579312456-subscription_PC_background.jpg" ></SubscribeLandingBoxBg>
                <></>
            </SubscribeLandingBox>

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

            <CheckInAdvance>
                <CheckInAdvanceTitle>
                    미리 확인해보세요
                </CheckInAdvanceTitle>
                <CheckInAdvanceQnA>
                    <li>
                        <CheckInAdvanceQuestionContents onClick={e => setDropdownView1(!isDropdownView1)}>
                            <CheckInAdvanceQuestion >
                                담화박스 구독 상품에는 몇 가지 상품이 들어있나요?
                            </CheckInAdvanceQuestion>
                            <ArrowImg src={Arrow} />
                        </CheckInAdvanceQuestionContents>
                        {isDropdownView1 &&
                        (<DropdownContents 
                            text='테마에 따라 전통주 3~4병으로 구성되며 프리미엄 테마의 경우, 고가의 술 2병으로
                        구성되기도 합니다. 소믈리에가 추천하는 안주 조합과 술 설명이 담긴
                        큐레이션 카드도 동봉되며 술자리를 더욱 아름답게
                        꾸며 줄 ‘이 달의 술자리 포스터’가 함께 배송됩니다.&nbsp;&nbsp;&nbsp;
                         *이달의 술자리 포스터는 23년 4월 담화박스부터 적용됩니다.'/>)}
                    </li>
                    <li>
                        <CheckInAdvanceQuestionContents onClick={e => setDropdownView2(!isDropdownView2)}>
                            <CheckInAdvanceQuestion>
                                여러가지 담화박스를 동시 혹은 번갈아 가며 구독할 수 있나요?
                            </CheckInAdvanceQuestion>
                            <ArrowImg src={Arrow} />
                        </CheckInAdvanceQuestionContents>
                        {isDropdownView2 &&
                        (<DropdownContents 
                            text='두 가지 상품을 모두 구독하고 싶은 경우, 각 상품별로 구독 신청을
                        진행하시면 됩니다. 두 가지 상품을 모두 구독한 후 쉬어가기 기능을 이용하면
                        원하는 상품만 원하는 달에 받아볼 수 있습니다.'/>)}
                    </li>
                    <li>
                        <CheckInAdvanceQuestionContents onClick={e => setDropdownView3(!isDropdownView3)}>
                            <CheckInAdvanceQuestion>
                                최소 구독 기간이나 해지 위약금이 있나요?
                            </CheckInAdvanceQuestion>
                            <ArrowImg src={Arrow} />
                        </CheckInAdvanceQuestionContents>
                        {isDropdownView3 && 
                        (<DropdownContents 
                        text=' 없습니다. 원할 땐 언제든 쉬어가기가 가능하며 최소 구독 기간이 없어
                        한 달만 구독하는 것도 가능합니다. 쉬어가기란 다가오는 결제와 배송을 잠시
                        쉬어갈 수 있는 일시정지 버튼입니다.'/>)}
                    </li>
                    <li>
                        <CheckInAdvanceQuestionContents onClick={e => setDropdownView4(!isDropdownView4)}>
                            <CheckInAdvanceQuestion>
                                제주도는 추가 배송비가 있나요?
                            </CheckInAdvanceQuestion>
                            <ArrowImg src={Arrow} />
                        </CheckInAdvanceQuestionContents>
                        {isDropdownView4 &&
                        (<DropdownContents text='없습니다. 모든 구독자분은 구독 박스 배송비가 무료입니다.'/>)}
                    </li>
                </CheckInAdvanceQnA>
            </CheckInAdvance>
            <ApplyButton onClick={onClickModal}>지금 신청하기</ApplyButton>

            <ApplyModalWrap isModal={isModal}>
                <ModalContainer>
                    <ModalButton onClick={onClickButton} src={ModalClose}></ModalButton>
                    <ModalTitle>구독하실 상품을 선택해주세요!</ModalTitle>
                    <ApplyGoodsBox>
                        <ApplyGoods></ApplyGoods>
                        <ApplyGoods></ApplyGoods>
                        <ApplyGoods></ApplyGoods>
                    </ApplyGoodsBox>
                    <SelectButton>이걸로 할게요</SelectButton>
                </ModalContainer>

            </ApplyModalWrap>

            <PcKakao src={PcKakaoImg} onClick={() => { navigate(" "); }} />
            <Footer />
            
            {isPopup && (
                <Popup>
                 <Link to="DetailInfo" spy={true} smooth={true} style={{ cursor: 'pointer' }}>
                 <PopupImg src={Popupimg} />
                 </Link>
                <PopupCloseButton>
                    <PopupOnedayClose onClick={closePopup}>오늘 하루 열지 않음</PopupOnedayClose>
                    <PopupClose onClick={closePopup}>닫기</PopupClose>
                </PopupCloseButton>
                </Popup>
            )}
            
        </>
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

const SubscriptionIntroduction = styled.div`
    width: 1176px;
    margin: 0 auto;
`

const Introduction = styled.div`
    font-size: 44px;
    font-weight: 700;

    div{
        font-size: 24px;
        margin: 120px 0 20px;
    }
`

const IntroductionSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 80px;
`

const AdvantageTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
`

const AdvantageContent = styled.div`
    margin-top: 6px;

    font-size: 24px;
    font-weight: 400;

    color: #3D3D3D99;
`

const AdvantageContentImg = styled.img`
    width: 580px;
    height: 388px;
    
    border-radius: 20px;
`

const PurchaseBenefits = styled.div`
    margin-top: 140px;
    padding: 120px 0 140px;

    background: #F5F5F5;
`

const BenefitsText = styled.div`
    text-align: center;
    
    margin-bottom: 70px;
    
    font-size: 44px;
    font-weight: 700;
`

const BenefitsImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 82px;
`

const BenefitsImgBox = styled.div`
    text-align: center;

    width: 200px;
    height: 157px;
`

const BenefitsIcon = styled.img`
    width: 72px;
    height: 72px;
`

const BenefitsSubText = styled.div`
    margin-top: 10px;

    font-size: 24px;
    font-weight: 500;
    line-height: 1.6;

    div{
        font-weight: 700;
    }
`

const SubscribeLandingBox = styled.div`

`


const SubscribeLandingBoxBg = styled.img`
    overflow: hidden;
    object-fit: cover;

    width: 100%;
    height: 947px;
`

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

const CheckInAdvance = styled.div`
    padding: 120px 0 0;
`

const CheckInAdvanceTitle = styled.div`
    text-align: center;

    margin-bottom: 20px;

    font-size: 44px;
    font-weight: 700;
`

const CheckInAdvanceQnA = styled.ul`
    width: 840px;
    margin: 0 auto;
    
    li{
        border-top: 1px solid #999;
    }
    :first-child{
        border: none;
    }
`

const CheckInAdvanceQuestionContents = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
`

const CheckInAdvanceQuestion = styled.div`
    padding: 40px 0;
    
    font-size: 24px;
    font-weight: 700;
`

const ArrowImg = styled.img`
    width: 20px;
    height: 20px;
`


const ApplyButton = styled.button`
    position: fixed;
    bottom: 0px;
    right: 50%;

    width: 300px;
    height: 50px;

    font-size: 16px;
    font-weight: 700;

    border: none;
    border-radius: 6px;

    color: #fff;
    background: #0096F3;
    
    cursor: pointer;
    z-index: 1;
    
    transition: 0.3s ease;
    transform: translate( 52%, -50% );

    &:hover{
        background: rgb(45, 123, 195);
        transition: 0.3s ease;
    }
`

const SelectButton = styled.button`
    margin-top: 60px;

    width: 100%;
    height: 50px;

    font-size: 16px;
    font-weight: 700;

    border: none;
    border-radius: 6px;

    color: #fff;
    background: #0096F3;
    
    cursor: pointer;
    
    transition: 0.3s ease;
    &:hover{
        background: rgb(45, 123, 195);
        transition: 0.3s ease;
    }
`

const ApplyGoodsBox = styled.div`
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 1fr 1fr;

    margin-top: 33px;
`

const ApplyGoods = styled.div`
    width: 239px;
    height: 336px;

    border-radius: 10px;
    border: 1px solid #888;
`

const ModalTitle = styled.div`
    text-align: center;
    
    font-size: 20px;
    font-weight: 800;
`

const ModalButton = styled.img`
    position: absolute;
    
    right: 30px;

    width: 32px;
    height: 32px;
    
    cursor: pointer;
`

const ApplyModalWrap = styled.div`
    display: ${(props) => (props.isModal ? "block" : "none")};
    position: fixed;

    top: 0;
    left: 0;  
   
    width: 100%;
    height: 100%;
   
    z-index: 99;

    background-color: rgba(0,0,0,0.2);
`

const ModalContainer = styled.div`
    position: relative;

    top: 50%;
    left: 50%;
    z-index: 100;
    transform: translate(-50%, -50%);

    padding: 20px 30px 16px;

    text-align: center;
    font-size: 20px;    

    overflow: hidden;

    width: 800px;
    height: 550px;

    background: #fff;

    box-shadow: 2px 2px 30px 1px rgba(0,0,0,0.5);
    box-sizing: border-box;
    border-radius: 20px;
`

const PcKakao = styled.img`
    position: fixed;
    right: 50px;
    bottom: 50px;

    width: 75px;
    height: 75px;

    z-index: 1 ;
    cursor: pointer;

    animation: motion 0.5s linear 0s infinite alternate;
    @keyframes motion {
	    0% {bottom: 50px;}
	    100% {bottom: 60px;}
}
`

const PopupCloseButton = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
   
    font-size: 16px;
    font-weight: 600;

    background: #fff;
    border-radius: 0 0 10px 10px;
    box-shadow: 2px 2px 30px 1px rgba(0,0,0,0.3);
`

const PopupOnedayClose = styled.div`
    padding: 12px;  

    cursor: pointer;  
`

const PopupClose = styled.div`
    border-left: 1px solid rgba(0,0,0,0.2);
    padding: 12px;

    cursor: pointer;
`

const Popup = styled.div`
    position: fixed;
    
    top: 50%;
    left: 50%;
   
    z-index: 100;
    transform: translate(-50%, -50%);
    border-radius: 0 0 10px 10px;
`

const PopupImg = styled.img`
    display: block;

    width: 440px;
    height: 462px;

    box-shadow: 2px 2px 30px 1px rgba(0,0,0,0.3);
    border-radius: 10px 10px 0 0;
`

export default Subscribe;