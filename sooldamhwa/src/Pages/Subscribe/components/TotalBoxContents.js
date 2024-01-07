import React, { useState } from "react";
import styled from "styled-components";
import MonthSoolModal from './MonthSoolModal';
import CurationModal from './CurationModal';
import PosterModal from './PosterModal';
import { onClickModal } from "../../../utills/onClickModal";
import icon_basic_damhwabox from '../../../images/subscribeImage/icon_basic_damhwabox.png'
import grey_soju_subscription_icon from '../../../images/subscribeImage/grey_soju_subscription_icon.png'
import grey_chungju_subscription_icon from '../../../images/subscribeImage/grey_chungju_subscription_icon.png'
import sool_icon from '../../../images/subscribeImage/sool_icon.png'
import grey_arrow_right from '../../../images/subscribeImage/grey_arrow_right.png'
import curation_card from '../../../images/subscribeImage/curation_card.png'
import poster from '../../../images/subscribeImage/poster.png'
import grey_creditcard from '../../../images/subscribeImage/grey_creditcard.png'
import grey_truck from '../../../images/subscribeImage/grey_truck.png'


const TotalBoxContents = (props) => {
    const { landingStateHandle } = props;
    const [isMonthSoolModal, setIsMonthSoolModal] = useState(false);
    const [isCurationModal, setIsCurationModal] = useState(false);
    const [isPosterModal, setIsPosterModal] = useState(false);

    return (
        <>
            <SubscribeLandingBox>
                <SubscribeLandingBoxBg id="DetailInfo" src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/origin/Pabz-1702000694497-PC_subscription%20concept.jpg" />
                <LandingBox>
                    <LandingTotalBoxTitle>
                        <div>2024년 1월의 종합 담화박스</div>
                        화합의 상징 청룡, <br />
                        술자리의 조화로움을 이끌다.
                    </LandingTotalBoxTitle>
                    <div>
                        <LandingBoxNameContents>
                            <LandingBoxNameActive onClick={() => landingStateHandle("total")}>
                                <NameActiveImg src={icon_basic_damhwabox} alt='종합' />종합</LandingBoxNameActive>
                            <LandingBoxName onClick={() => landingStateHandle("soju")}>
                                <NameImg src={grey_soju_subscription_icon} alt='증류주' />증류주</LandingBoxName>
                            <LandingBoxName onClick={() => landingStateHandle("chungju")}>
                                <NameImg src={grey_chungju_subscription_icon} alt='약,청주' />약·청주</LandingBoxName>
                        </LandingBoxNameContents>
                        <TotalBox>
                            <TotalBoxInpo>종합 담화박스</TotalBoxInpo>
                            <SubscribePrice>
                                ₩ 39,000/월
                                <span>₩ 42,000</span>
                            </SubscribePrice>
                            <SubscribeHashtag>
                                <div>입문용</div>
                                <div>매월 무료 배송</div>
                                <div>첫 구독 10% 할인</div>
                            </SubscribeHashtag>
                            <TotalBoxSubDescription>
                                전통주 소믈리에가 엄선한 다양한 주종. <br />
                                나의 전통주 취향을 알아볼 수 있어요.
                            </TotalBoxSubDescription>

                            <TotalBoxButton onClick={() =>
                                onClickModal(isMonthSoolModal, setIsMonthSoolModal)}>
                                <div>
                                    <TotalBoxButtonImg src={sool_icon} alt='술 아이콘' />
                                    <TotalBoxButtonTitle>1월의 술 3종</TotalBoxButtonTitle>
                                </div>
                                <div>
                                    <SeeMore>힌트보기</SeeMore>
                                    <SeeMoreImg src={grey_arrow_right} alt='열기버튼 화살표' />
                                </div>
                            </TotalBoxButton>

                            <TotalBoxButton onClick={() =>
                                onClickModal(isCurationModal, setIsCurationModal)}>
                                <div>
                                    <TotalBoxButtonImg src={curation_card} alt='큐레이션 카드' />
                                    <TotalBoxButtonTitle>큐레이션 카드</TotalBoxButtonTitle>
                                </div>
                                <div>
                                    <SeeMore>더보기</SeeMore>
                                    <SeeMoreImg src={grey_arrow_right} alt='열기버튼 화살표' />
                                </div>
                            </TotalBoxButton>

                            <TotalBoxButton onClick={() =>
                                onClickModal(isPosterModal, setIsPosterModal)}>
                                <div>
                                    <TotalBoxButtonImg src={poster} alt='포스터' />
                                    <TotalBoxButtonTitle>포스터</TotalBoxButtonTitle>
                                </div>
                                <div>
                                    <SeeMore>더보기</SeeMore>
                                    <SeeMoreImg src={grey_arrow_right} alt='열기버튼 화살표' />
                                </div>
                            </TotalBoxButton>

                            <Datebox>
                                <DateboxImg src={grey_creditcard} alt='결제 아이콘' />
                                <DateboxTitle>
                                    결제일
                                    <div>2024년 1월 15일 월요일 오전 8시 30분</div>
                                </DateboxTitle>
                            </Datebox>
                            <Datebox>
                                <DateboxImg src={grey_truck} alt='배송 날짜' />
                                <DateboxTitle>
                                    도착일
                                    <div>2024년 1월 18일 목요일</div>
                                </DateboxTitle>
                            </Datebox>
                        </TotalBox>
                    </div>
                </LandingBox>

            </SubscribeLandingBox>
            <MonthSoolModal
                isMonthSoolModal={isMonthSoolModal}
                onClickMonthSoolButton={() =>
                    onClickModal(isMonthSoolModal, setIsMonthSoolModal)
                } />

            <CurationModal
                isCurationModal={isCurationModal}
                onClickCurationButton={() =>
                    onClickModal(isCurationModal, setIsCurationModal)
                } />

            <PosterModal
                isPosterModal={isPosterModal}
                onClickPosterButton={() =>
                    onClickModal(isPosterModal, setIsPosterModal)
                } />
        </>
    )

};



const SubscribeLandingBox = styled.div`
    position: relative;
`

const SubscribeLandingBoxBg = styled.img`
    overflow: hidden;
    object-fit: cover;

    width: 100%;
    height: 947px;
`

const LandingBox = styled.div`
    position: absolute;
    top: 47%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    display: flex;
    justify-content: space-between;
    
    width: 1150px;
`

const LandingTotalBoxTitle = styled.div`
    font-size: 44px;
    font-weight: 700;

    color: #fff;
    text-shadow:rgb(0, 0, 0) 0px 4px 30px;
    
    div{
        margin-bottom: 20px;
        font-size: 24px;
    }
`

const LandingBoxNameContents = styled.div`
    display: flex;
    justify-content: center;

    font-size: 16px;
    font-weight: 600;
    
    box-sizing: border-box;

    cursor: pointer;
`

const NameActiveImg = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 3px;
`

const LandingBoxNameActive = styled.div`
    display: flex;
    align-items: center;

    padding-left: 14px;
    
    width: 124px;
    height: 47px;
    
    box-shadow: rgb(1, 151, 243) 0px 4px 0px inset;
    border-radius: 10px 10px 0 0;
    background: #fff;

    box-sizing: border-box;
`

const NameImg = styled.img`
    margin-right: 3px;

    width: 18px;
    height: 18px;
`

const LandingBoxName = styled.div`
    display: flex;
    align-items: center;

    padding-left: 14px;

    width: 124px;
    height: 47px;

    color: rgba(61, 61, 61, 0.3);
    border-radius: 10px 10px 0 0;
    background-color: #DCDCDC;

    box-sizing: border-box;

    transition: all 0.3s ease 0s;

    &:hover{
        background-color: rgb(178, 178, 178);
        color: rgb(112, 112, 112);

        transition: all 0.3s ease 0s;
    }
`

const TotalBox = styled.div`
    padding: 38px 30px;

    width: 430px;
    height: 570px;

    background: #fff;
    border-radius: 18px;
    
    box-sizing: border-box;
`

const TotalBoxInpo = styled.div`
    margin-bottom: 12px;

    font-size: 28px;
    font-weight: 700;
`

const SubscribePrice = styled.div`
    font-size: 20px;
    font-weight: 800;

    span{
        margin-left:18px;

        font-size: 16px;
        
        text-decoration: line-through;
        color: rgba(61, 61, 61, 0.3);
    }
`

const SubscribeHashtag = styled.div`
    display: flex;
    
    gap: 8px;
    margin-top: 22px;

    div{
        padding: 5px 6px;

        background: rgb(227, 242, 253);
        border-radius: 5px;
       
        font-size: 12px;
        font-weight: 600;
       
        color: rgb(0, 150, 243);
        line-height: 12px;
    }
`

const TotalBoxSubDescription = styled.div`
    margin-top: 14px;

    height: 60px;

    font-size: 13px;
    font-weight: 500;
    line-height: 20px;

    color: rgba(61, 61, 61, 0.6);
`

const TotalBoxButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 15px;
    padding: 8px 12px;

    width: 100%;

    background-color: rgb(241, 241, 241);
    border: none;
    border-radius: 5px;

    transition: all 0.3s ease 0s;

    cursor: pointer;
    
    div{
        display: flex;
        align-items: center;
    }

    &:hover{
        background-color: rgb(229, 229, 229);
        color: rgb(112, 112, 112);
        transition: all 0.3s ease 0s;
    }
`

const TotalBoxButtonImg = styled.img`
    width: 36px;
    height: 36px;
`

const TotalBoxButtonTitle = styled.div`
    margin-left: 7px;
    
    font-size: 15px;
    font-weight: 700;
`

const SeeMore = styled.div`
    margin-right: 7px;

    font-size: 14px;
    font-weight: 700;
    
    color: rgba(61, 61, 61, 0.3);
`

const SeeMoreImg = styled.img`
    width: 7px;
    height: 13px;
`

const Datebox = styled.div`
    display: flex;
    
    gap: 8px;
    margin-top: 22px;

    font-weight: 500;
`

const DateboxImg = styled.img`
    width: 20px;
    height: 20px;
`

const DateboxTitle = styled.div`
    font-size: 12px;

    div{
        color: rgba(61, 61, 61, 0.6);
    }
`

export default TotalBoxContents;