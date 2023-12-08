import React from 'react';
import { Link } from 'react-scroll';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import Header from '../Index/components/Header';
import Footer from '../Index/components/Footer';
import Main from '../../SubscribeImage/img_main1.jpg'
import Basicimg from '../../SubscribeImage/icon_basic_damhwabox.png'
import Sojuimg from '../../SubscribeImage/icon_soju_damhwabox.png'
import Yakchungjuimg from '../../SubscribeImage/icon_yakchungju_damhwabox.png'
import New from '../../SubscribeImage/icon_new.png'
import SpecialTimeImg from '../../SubscribeImage/subscribe_review_02.png'
import AdvantageContent1 from '../../SubscribeImage/subscribe_selling_point_01.png'
import AdvantageContent2 from '../../SubscribeImage/subscribe_selling_point_02.png'
import AdvantageContent3 from '../../SubscribeImage/subscribe_selling_point_03.png'
import Benefitsimg1 from '../../SubscribeImage/icon_coupon.png'
import Benefitsimg2 from '../../SubscribeImage/icon_truck_blue2.png'
import Benefitsimg3 from '../../SubscribeImage/icon_price_down.png'
import ConceptImg2204 from '../../SubscribeImage/damhwabox_archive_2022_04.png'
const Subscribe = () => {

    const navigate = useNavigate();


    return (
        <>
            <Header />
            <Link to="DetailInfo" spy={true} smooth={true}>
                <div>
                    <MainImg src={Main} onClick={() => { navigate(""); }} />
                </div>
            </Link>

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
                <div style={{ display: 'flex', overflow: 'hidden', height: '526px' }}>

                    <ReviewCarousel>
                        <ReviewImg src={SpecialTimeImg} />
                        <ReviewText>
                            <div>🥇2월 저의 베스트 강추!</div>
                            <p>@hahhaya_modern</p>
                        </ReviewText>
                    </ReviewCarousel>

                    <ReviewCarousel>
                        <ReviewImg src={SpecialTimeImg} />
                        <ReviewText>
                            <div>🥇2월 저의 베스트 강추!</div>
                            <p>@hahhaya_modern</p>
                        </ReviewText>
                    </ReviewCarousel>

                    <ReviewCarousel>
                        <ReviewImg src={SpecialTimeImg} />
                        <ReviewText>
                            <div>🥇2월 저의 베스트 강추!</div>
                            <p>@hahhaya_modern</p>
                        </ReviewText>
                    </ReviewCarousel>

                    <ReviewCarousel>
                        <ReviewImg src={SpecialTimeImg} />
                        <ReviewText>
                            <div>🥇2월 저의 베스트 강추!</div>
                            <p>@hahhaya_modern</p>
                        </ReviewText>
                    </ReviewCarousel>

                    <ReviewCarousel>
                        <ReviewImg src={SpecialTimeImg} />
                        <ReviewText>
                            <div>🥇2월 저의 베스트 강추!</div>
                            <p>@hahhaya_modern</p>
                        </ReviewText>
                    </ReviewCarousel>

                </div>
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
            <SubscribeLandingBox id="DetailInfo" src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/origin/a7lU-1699579312456-subscription_PC_background.jpg" ></SubscribeLandingBox>


            <DamhwaConcept>
                <DamhwaConceptTitle>
                    이번 달엔 어떤 술을 < br />
                    만나게 될까요?
                </DamhwaConceptTitle>
                <DamhwaConceptImgContets>
                    <div>
                        <DamhwaConceptImg src={ConceptImg2204}></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.04
                            <div>봄날의 응원</div>
                        </DamhwaConceptImgText>
                    </div>
                    <div>
                        <DamhwaConceptImg src={ConceptImg2204}></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.04
                            <div>봄날의 응원</div>
                        </DamhwaConceptImgText>
                    </div>
                    <div>
                        <DamhwaConceptImg src={ConceptImg2204}></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.04
                            <div>봄날의 응원</div>
                        </DamhwaConceptImgText>
                    </div>
                    <div>
                        <DamhwaConceptImg src={ConceptImg2204}></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.04
                            <div>봄날의 응원</div>
                        </DamhwaConceptImgText>
                    </div>
                    <div>
                        <DamhwaConceptImg src={ConceptImg2204}></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.04
                            <div>봄날의 응원</div>
                        </DamhwaConceptImgText>
                    </div>
                    <div>
                        <DamhwaConceptImg src={ConceptImg2204}></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.04
                            <div>봄날의 응원</div>
                        </DamhwaConceptImgText>
                    </div>
                    <div>
                        <DamhwaConceptImg src={ConceptImg2204}></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.04
                            <div>봄날의 응원</div>
                        </DamhwaConceptImgText>
                    </div>
                    <div>
                        <DamhwaConceptImg src={ConceptImg2204}></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.04
                            <div>봄날의 응원</div>
                        </DamhwaConceptImgText>
                    </div>
                    <div>
                        <DamhwaConceptImg src={ConceptImg2204}></DamhwaConceptImg>
                        <DamhwaConceptImgText>
                            2022.04
                            <div>봄날의 응원</div>
                        </DamhwaConceptImgText>
                    </div>
                </DamhwaConceptImgContets>
            </DamhwaConcept>

            <CheckInAdvance>
                <CheckInAdvanceTitle>
                    미리 확인해보세요
                </CheckInAdvanceTitle>
                <CheckInAdvanceQnA>
                    <li>
                        <CheckInAdvanceQuestion>
                            담화박스 구독 상품에는 몇 가지 상품이 들어있나요?
                        </CheckInAdvanceQuestion>
                        
                        <CheckInAdvanceAnswer>
                        테마에 따라 전통주 3~4병으로 구성되며 프리미엄 테마의 경우, 고가의 술 2병으로< br />
                         구성되기도 합니다. 소믈리에가 추천하는 안주 조합과 술 설명이 담긴 
                         큐레이션 카드도 동봉되며 술자리를 더욱 아름답게 
                         꾸며 줄 ‘이 달의 술자리 포스터’가 함께 배송됩니다. 
                         < br />< br />
                        *이달의 술자리 포스터는 23년 4월 담화박스부터 적용됩니다.
                        </CheckInAdvanceAnswer>
                    </li>
                    <li>
                        <CheckInAdvanceQuestion>
                            여러가지 담화박스를 동시 혹은 번갈아 가며 구독할 수 있나요?
                        </CheckInAdvanceQuestion>
                        <CheckInAdvanceAnswer>
                        두 가지 상품을 모두 구독하고 싶은 경우, 각 상품별로 구독 신청을 
                        진행하시면 됩니다. 두 가지 상품을 모두 구독한 후 쉬어가기 기능을 이용하면 
                        원하는 상품만 원하는 달에 받아볼 수 있습니다.
                        </CheckInAdvanceAnswer>
                    </li>
                    <li>
                        <CheckInAdvanceQuestion>
                            최소 구독 기간이나 해지 위약금이 있나요? 
                        </CheckInAdvanceQuestion>
                        <CheckInAdvanceAnswer>
                        없습니다. 원할 땐 언제든 쉬어가기가 가능하며 최소 구독 기간이 없어 
                        한 달만 구독하는 것도 가능합니다. 쉬어가기란 다가오는 결제와 배송을 잠시 
                        쉬어갈 수 있는 일시정지 버튼입니다.
                        </CheckInAdvanceAnswer>
                    </li>
                    <li>
                        <CheckInAdvanceQuestion>
                            제주도는 추가 배송비가 있나요?
                        </CheckInAdvanceQuestion>
                        <CheckInAdvanceAnswer>
                            없습니다. 모든 구독자분은 구독 박스 배송비가 무료입니다.
                        </CheckInAdvanceAnswer>
                    </li>
                </CheckInAdvanceQnA>
            </CheckInAdvance>

            <Footer />
        </>
    )
};

const CheckInAdvance = styled.div`
    padding: 120px 0 140px;
`

const CheckInAdvanceTitle = styled.div`
    text-align: center;

    font-size: 44px;
    font-weight: 700;
`

const CheckInAdvanceQnA = styled.ul`
    width: 840px;
    margin: 0 auto;
    
    li{
        border-top: 1px solid #999;
        padding-bottom: 40px;
    }
    :first-child{
        border: none;
    }
`

const CheckInAdvanceQuestion = styled.div`
    padding: 40px 0;
    
    font-size: 24px;
    font-weight: 700;

`

const CheckInAdvanceAnswer = styled.div`
    font-size: 24px;
    
    color: #00000099;
`


const MainImg = styled.img`
    display: block;

    margin-top: 56px;
    
    overflow: hidden;
    object-fit: cover;

    width: 100%;
    height: 380px;

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

const SubscribeLandingBox = styled.img`
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

const DamhwaConceptImgContets = styled.div`
    display: flex;
    
    gap: 20px;
    margin: 68px 0 0 252px;

    overflow: hidden;
`
const DamhwaConceptImg = styled.img`
    width: 190px;
    height: 190px;

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

export default Subscribe;