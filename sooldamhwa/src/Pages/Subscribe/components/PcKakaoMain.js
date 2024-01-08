import React from "react";
import styled from "styled-components";
import home_icon from '../../../images/subscribeImage/home_icon.png'
import conversation_icon from '../../../images/subscribeImage/conversation_icon.png'
import setting_icon from '../../../images/subscribeImage/setting_icon.png'
import msg_logo_img from '../../../images/subscribeImage/msg_logo_img.jpeg'
import msg_logo from '../../../images/subscribeImage/msg_logo.jpeg'
import inquiry_img from '../../../images/subscribeImage/inquiry_img.png'
import app_time from '../../../images/subscribeImage/app_time.png'
import app_messenger_kakao from '../../../images/subscribeImage/app_messenger_kakao.png'
import app_messenger_naver_talk from '../../../images/subscribeImage/app_messenger_naver_talk.png'
import app_messenger_call from '../../../images/subscribeImage/app_messenger_call.png'
import ch_logo from '../../../images/subscribeImage/ch_logo.png'

const PcKakaoMain = (props) => {

    const { navStateHandle } = props;

    return (
        <>
            <PcKakaoModalHeader>
                <PcKakaoModalHeaderImg src={msg_logo_img} alt='메신저 로고' />
                <div>
                    <PcKakaoModalHeaderTitle>술담화</PcKakaoModalHeaderTitle>
                    <PcKakaoModalHeaderSub>운영시간 보기 {'>'}</PcKakaoModalHeaderSub>
                </div>
            </PcKakaoModalHeader>
            <PcKakaoDetail>
                <PcKakaoDetailContainer>
                    <PcKakaoDetailImg src={msg_logo} alt='메신저 프로필 로고' />
                    <Detail>술담화
                        <div style={{ height: '2px' }}></div>
                        <div>안녕하세요, 고객님!</div>
                        <div>찾아오는 인생술, 술담화입니다.</div>
                        <div style={{ height: '1rem' }}> </div>
                        <div>현재는 고객센터 운영시간이 아닙니다.</div>
                        <div>성함과 연락처, 문의사항을 남겨주시면 영업 시간 내 순차적으로 안내 드리겠습니다. :)...</div>
                    </Detail>
                </PcKakaoDetailContainer>
                <DetailInquiry>문의하기
                    <InquiryImg src={inquiry_img} alt='문의하기 아이콘' />
                </DetailInquiry>
                <DetailTime>
                    <DetailTimeImg src={app_time} alt='시계 아이콘' />
                    오후 1:30부터 운영해요
                </DetailTime>
            </PcKakaoDetail>
            <OtherWay>
                <OtherWayText>다른 방법으로 문의</OtherWayText>
                <KakaoImg src={app_messenger_kakao} alt='메신저 카카오톡' />
                <NaverImg src={app_messenger_naver_talk} alt='메신저 네이버톡' />
                <CallImgContainer>
                    <CallImg src={app_messenger_call} alt='전화 아이콘' />
                </CallImgContainer>
            </OtherWay>
            <ChannelTalk>
                <ChannelImg src={ch_logo} alt='채널톡 아이콘' />
                채널톡<span>이용중</span>
            </ChannelTalk>

            <PcKakaoNav>
                <PcKakaoHome onClick={() => navStateHandle("home")}><PcKakaoIcon src={home_icon} alt="홈"/>홈</PcKakaoHome>
                <PcKakaoConversation onClick={() => navStateHandle("conversation")}><PcKakaoIcon src={conversation_icon} alt="대화"/>대화</PcKakaoConversation>
                <PcKakaoSetting onClick={() => navStateHandle("setting")}><PcKakaoIcon src={setting_icon} alt="설정"/>설정</PcKakaoSetting>
            </PcKakaoNav>
        </>
    )
};


const PcKakaoDetail = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 12px;
    margin: 0 16px;
    padding: 8px;

    border-radius: 20px;
    background: #fff;
`

const PcKakaoDetailContainer = styled.div`
    display: flex;

    gap: 2px;

    cursor: pointer;
    
    transition: ease .3s;

    &:hover{
        transition: ease .3s;
        border-radius: 20px;
        background-color: #F6F6F6;
    }
`

const PcKakaoModalHeader = styled.div`
    display: flex;
    align-items: center;
    
    gap: 14px;
    margin: 24px;
`

const PcKakaoModalHeaderImg = styled.img`
    width: 56px;
    height: 56px;

    border-radius: 20px;
`

const PcKakaoModalHeaderTitle = styled.div`
    padding-left: 3px;
    
    font-size: 22px;
    font-weight: 600;
`

const PcKakaoModalHeaderSub = styled.div`
    padding: 3px;

    font-size: 13px;
    color: #00000099;
    
    cursor: pointer;

    transition: ease .3s;

    &:hover{
        transition: ease .3s;
        border-radius: 10px;
        background-color: #EFEFF0;
    }
`

const PcKakaoDetailImg = styled.img`
    margin: 8px;
    
    width: 36px;
    height: 36px;
    
    border-radius: 50%;
    border: 1px solid #EFEFF0;
`

const Detail = styled.div`
    padding: 8px 0 12px;

    width: 252px;

    font-size: 14px;
    font-weight: 600;

    div{
        font-size: 15px;
        font-weight: 400;
    }
`

const DetailInquiry = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    
    gap: 6px;
    padding: 14px;
    
    width: 100%;

    font-size: 15px;
    font-weight: 600;

    border: none;
    border-radius: 14px;

    color: #fff;
    background: #0096F3;
    
    cursor: pointer;
    
    transition: 0.3s ease;

    &:hover{
        background: rgb(45, 123, 195);
        transition: 0.3s ease;
    }
`

const InquiryImg = styled.img`
    width: 20px;
`

const DetailTime = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 4px;
    margin-bottom: 8px;

    font-size: 12px;
    font-weight: 500;
    
    color: #00000099;
`

const DetailTimeImg = styled.img`
    width: 16px;
`

const OtherWay = styled.div`
    display: flex;
    align-items: center;

    gap: 6px;
    margin: 14px 16px;
    padding: 14px;

    background: #fff;
    border-radius: 20px;
`

const OtherWayText = styled.div`
    width: 210px;
    
    font-size: 13px;
    font-weight: 500;

    color: #00000066;
`

const KakaoImg = styled.img`
    width: 34px;
    
    border-radius: 10px;
    
    cursor: pointer;
    transition: 0.2s ease;

    &:hover{
        transition: 0.2s ease;
        transform: scale(1.1);
    }
`

const NaverImg = styled.img`
    width: 34px;

    border-radius: 10px;
    
    cursor: pointer;
    transition: 0.2s ease;

    &:hover{
        transition: 0.2s ease;
        transform: scale(1.1);
    }
`

const CallImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 34px;
    height: 34px;
    
    border-radius: 10px;
    background: #329BE733;

    cursor: pointer;
    transition: 0.2s ease;

    &:hover{
        transition: 0.2s ease;
        transform: scale(1.1);
    }
`

const CallImg = styled.img`
    width: 18px;
    height: 18px;
`

const ChannelTalk = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    gap: 3px;

    height: 30px;

    font-size: 12px;
    font-weight: 600;
    color: #00000066;

    cursor: pointer;

    span{
        font-weight: 400;
    }

    &:hover{
        color: #000;
    }
`

const ChannelImg = styled.img`
    width: 20px;
    height: 20px;
`

const PcKakaoNav = styled.div`
    position: absolute;
    bottom: 4px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    text-align: center;

    margin-top: 60px;

    width: 100%;
    height: 60px;
`
const PcKakaoHome = styled.div`
    font-size: 13px;
    font-weight: 500;
    
    color: rgb(81, 151, 242);
`
const PcKakaoConversation = styled.div`    
    width: 100%;

    font-size: 13px;
    color: #00000066;
    
    cursor: pointer;    
    
    &:hover{
        font-weight: 500;
        color: rgb(81, 151, 242);
    }
`
const PcKakaoSetting = styled.div`
    width: 100%;

    font-size: 13px;
    color: #00000066;
    
    cursor: pointer;

    &:hover{
        font-weight: 500;
        color: rgb(81, 151, 242);
    }
`
const PcKakaoIcon = styled.img`
    display: block;

    margin: 0 auto 3px;

    width: 20px;
    height: 20px;
`


export default PcKakaoMain;