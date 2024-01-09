import React from "react";
import styled from "styled-components";
import home_icon from '../../../images/subscribeImage/home_icon.png'
import conversation_icon from '../../../images/subscribeImage/conversation_icon.png'
import setting_icon from '../../../images/subscribeImage/setting_icon.png'
import msg_logo from '../../../images/subscribeImage/msg_logo.jpeg'
import inquiry_img from '../../../images/subscribeImage/inquiry_img.png'

const Conversation = (props) => {

    const { navStateHandle } = props;
    
    return (
        <>
           <ConversationHeader>대화</ConversationHeader>
           <PcKakaoDetailContainer>
                    <PcKakaoDetailImg src={msg_logo} alt='메신저 프로필 로고' />
                    <Detail>술담화 <span>2023-12-28</span>
                        <div style={{ height: '3px' }}></div>
                        <div>술담화는 종합 담화박스 / 증류주 담화박스 /</div>
                        <div>약, 청주 담화박스 총 세 개의 구독...</div>
                    </Detail>
            </PcKakaoDetailContainer>
            <NewInquiryButton>
                새 문의하기<InquiryImg src={inquiry_img} alt='문의하기 아이콘' />
            </NewInquiryButton>
            <PcKakaoNav>
                <PcKakaoHome onClick={() => navStateHandle("home")}><PcKakaoIcon src={home_icon} alt="홈"/>홈</PcKakaoHome>
                <PcKakaoConversation onClick={() => navStateHandle("conversation")}><PcKakaoIcon src={conversation_icon} alt="대화" />대화</PcKakaoConversation>
                <PcKakaoSetting onClick={() => navStateHandle("setting")}><PcKakaoIcon src={setting_icon} alt="설정"/>설정</PcKakaoSetting>
            </PcKakaoNav>
        </>
    )
};

const NewInquiryButton = styled.button`
    position: absolute;
    bottom: 120px;
    right: 50%;
    transform: translate( 50%, 0 );

    display: flex;
    justify-content: center;
    align-items: center;
    
    gap: 6px;
    padding: 14px;
    
    width: 150px;
    height: 44px;

    font-size: 15px;
    font-weight: 600;

    border: none;
    border-radius: 14px;

    color: #fff;
    box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 2px 0px inset, rgba(0, 0, 0, 0.05) 0px 0px 2px 1px, rgba(0, 0, 0, 0.08) 0px 2px 6px;
    background: linear-gradient(135deg, rgb(81, 151, 242) 0%, rgb(81, 124, 242)) 100% center;
    cursor: pointer;
    
    transition: 0.2s ease;

    &:hover{
        box-shadow: rgba(255, 255, 255, 0.12) 0px 0px 2px 0px inset, rgba(0, 0, 0, 0.1) 0px 0px 2px 1px, rgba(0, 0, 0, 0.4) 0px 4px 12px;
        transition: 0.2s ease;
    }
`

const InquiryImg = styled.img`
    width: 20px;
`

const ConversationHeader = styled.h2`
    padding: 2px 26px;

    font-size: 24px;
    font-weight: 600;
`

const PcKakaoDetailContainer = styled.div`
    display: flex;

    gap: 2px;
    margin: 12px;

    border-radius: 20px;
    cursor: pointer;
    
    transition: ease .2s;

    &:hover{
        transition: ease .2s;
        border-radius: 20px;
        background-color: rgb(0 0 0 / 7%);
    }
`

const PcKakaoDetailImg = styled.img`
    margin: 8px;
    
    width: 37px;
    height: 37px;
    
    border-radius: 50%;
    background-color: #fff;
    border: 1px solid #EFEFF0;
`

const Detail = styled.div`
    padding: 8px 0 12px;

    font-size: 15px;
    font-weight: 600;

    div{
        font-size: 15px;
        font-weight: 400;
    }

    span{
        margin-left: 6px;
        
        font-size: 12px;
        font-weight: 400;

        color: #999;
    }
`

const PcKakaoNav = styled.div`
    position: absolute;
    bottom: 4px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    text-align: center;


    width: 100%;
    height: 60px;
`

const PcKakaoHome = styled.div`
    width: 100%;

    font-size: 13px;
    color: #00000066;

    cursor: pointer;   

    &:hover{
        font-weight: 500;
        color: rgb(81, 151, 242);
    }
`

const PcKakaoConversation = styled.div`    
    width: 100%;

    font-size: 13px;
    font-weight: 500;
    color: rgb(81, 151, 242);
    
    cursor: pointer;    
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


export default Conversation;