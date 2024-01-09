import React, { useState } from "react";
import styled from "styled-components";
import icon_close_black from '../../../images/subscribeImage/icon_close_black.png'
import total_damhwabox_img from '../../../images/subscribeImage/total_damhwabox_img.png'
import soju_damhwabox_img from '../../../images/subscribeImage/soju_damhwabox_img.png'
import chungju_damhwabox_img from '../../../images/subscribeImage/chungju_damhwabox_img.png'
import basic_subscription_icon from '../../../images/subscribeImage/basic_subscription_icon.png'
import soju_subscription_icon from '../../../images/subscribeImage/soju_subscription_icon.png'
import chungju_subscription_icon from '../../../images/subscribeImage/chungju_subscription_icon.png'
import { onClickModal } from "../../../utills/onClickModal";

const ApplyModal = () => {

    const [isApplyModal, setIsApplyModal] = useState(false);

    return (
        <>
            <ApplyButton
                isApplyModal={isApplyModal}
                onClick={() =>
                    onClickModal(isApplyModal, setIsApplyModal)}>
                지금 신청하기
            </ApplyButton>

            <ApplyModalWrap isApplyModal={isApplyModal} >
                <ApplyModalContainer>
                    <ModalButton onClick={() =>
                        onClickModal(isApplyModal, setIsApplyModal)} src={icon_close_black} alt="닫기 버튼" />
                    <ModalTitle>구독하실 상품을 선택해주세요!</ModalTitle>
                    <ApplyGoodsBox>
                        <ApplyGoods>
                            <TotalBoxImg src={total_damhwabox_img} alt="종합 담화박스 구독 이미지" />
                            <TotalBox>
                                <TotalBoxTitle>
                                    <TotalBoxIcon src={basic_subscription_icon} alt="종합 담화박스 아이콘" />
                                    종합 담화박스
                                </TotalBoxTitle>
                                <TotalBoxPrice>
                                    ₩39,000/월
                                    <span>₩42,000</span>
                                </TotalBoxPrice>
                                <TotalBoxText>전통주 소믈리에가 엄선한 다양한 주종</TotalBoxText>
                            </TotalBox>
                        </ApplyGoods>

                        <ApplyGoods>
                            <TotalBoxImg src={soju_damhwabox_img} alt="증류주 담화박스 구독 이미지" />
                            <TotalBox>
                                <TotalBoxTitle>
                                    <TotalBoxIcon src={soju_subscription_icon} alt="증류주 담화박스 아이콘" />
                                    증류주 담화박스
                                </TotalBoxTitle>
                                <TotalBoxPrice>
                                    ₩49,000/월
                                    <span>₩52,000</span>
                                </TotalBoxPrice>
                                <TotalBoxText>곡물·과일·꽃 등이 원재료인 고도수 술</TotalBoxText>
                            </TotalBox>
                        </ApplyGoods>

                        <ApplyGoods>
                            <TotalBoxImg src={chungju_damhwabox_img} alt="청주 담화박스 구독 이미지" />
                            <TotalBox>
                                <TotalBoxTitle>
                                    <TotalBoxIcon src={chungju_subscription_icon} alt="청주 담화박스 아이콘" />
                                    약·청주 담화박스
                                </TotalBoxTitle>
                                <TotalBoxPrice>
                                    ₩52,000/월
                                    <span>₩55,000</span>
                                </TotalBoxPrice>
                                <TotalBoxText>오랜 시간 걸러내어 맑고 깨끗한 맛</TotalBoxText>
                            </TotalBox>
                        </ApplyGoods>
                    </ApplyGoodsBox>
                    <SelectButton>이걸로 할게요</SelectButton>
                </ApplyModalContainer>
            </ApplyModalWrap>
        </>
    )
};

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
    transform: translate( 50%, -50% );

    &:hover{
        background: rgb(45, 123, 195);
        transition: 0.3s ease;
    }
`

const TotalBoxImg = styled.img`
    display: block;

    width: 100%;
    height: 236px;
`

const TotalBox = styled.div`
    display: flex;
    flex-direction: column;
    
    gap: 5px;
    padding: 15px;
`

const TotalBoxTitle = styled.div`
    display: flex;
    align-items: center;
    
    font-size: 16px;
    font-weight: 700;
`

const TotalBoxIcon = styled.img`
    margin-right: 2px;
    
    width: 16px;
    height: 16px;
`

const TotalBoxPrice = styled.div`
    font-size: 13px;
    font-weight: 800;
    letter-spacing: .3px;
    
    span{
        margin-left: 8px;
    
        font-weight: 500;
        text-decoration: line-through;
        
        color: #3D3D3D4D;
    }
`

const TotalBoxText = styled.div`
    font-size: 13px;
    font-weight: 500;
`



const SelectButton = styled.button`
    margin-top: 55px;

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

    margin-top: 40px;
`

const ApplyGoods = styled.div`
    width: 239px;
    height: 336px;

    overflow: hidden;
    border-radius: 10px;
    border: 1px solid rgba(61, 61, 61, 0.18);

    cursor: pointer;

    &:hover{
        scale: calc(1.01);
        box-shadow: rgba(235, 235, 235, 1) 0 4px 12px;
    }
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
    display: ${(props) => (props.isApplyModal ? "block" : "none")};
    position: fixed;

    top: 0;
    left: 0;  
   
    width: 100%;
    height: 100%;
   
    z-index: 99;

    background-color: rgba(0,0,0,0.2);
`

const ApplyModalContainer = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    padding: 20px 30px 16px;
    
    font-size: 20px;    
    
    width: 800px;
    height: 550px;
    
    z-index: 100;
    overflow: hidden;

    background: #fff;
    box-shadow: 2px 2px 30px 1px rgba(0,0,0,0.5);
    box-sizing: border-box;
    border-radius: 20px;
`

export default ApplyModal;