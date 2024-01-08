import React, { useState } from "react";
import styled from "styled-components";
import icon_close_black from '../../../images/subscribeImage/icon_close_black.png'
import channel_talk_pc from '../../../images/subscribeImage/channel_talk_pc.png'
import { onClickModal } from "../../../utills/onClickModal";
import PcKakaoMain from "./PcKakaoMain";
import Conversation from "./Conversation";
import Setting from "./Setting";

const PcKakaoModal = () => {

    const [isPcKakaoModal, setIsPcKakaoModal] = useState(false);

    const [navState, setIsNavState] = useState("home");

    const navStateHandle = (navState) => {
        setIsNavState(navState);
    }

    return (
        <>
            <PcKakao src={channel_talk_pc} alt='채널톡 아이콘'
                isPcKakoModal={isPcKakaoModal}
                onClick={() =>
                    onClickModal(isPcKakaoModal, setIsPcKakaoModal)
                } />

            <PcKakaoModalButton
                isPcKakoModal={isPcKakaoModal}
                onClick={() =>
                    onClickModal(isPcKakaoModal, setIsPcKakaoModal)} >
                <PcKakaoModalButtonImg src={icon_close_black} alt='닫기' />
            </PcKakaoModalButton>

            <PcKakaoModalContainer isPcKakoModal={isPcKakaoModal}>
                {navState === "home" && (
                    <PcKakaoMain navStateHandle={navStateHandle} />
                )}

                {navState === "conversation" && (
                    <Conversation navStateHandle={navStateHandle} />
                )}

                {navState === "setting" && (
                    <Setting navStateHandle={navStateHandle} />
                )}
            </PcKakaoModalContainer>
        </>
    )
};

const PcKakao = styled.img`
    position: fixed;
    display: ${(props) => (props.isPcKakoModal ? "none" : "block")};
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

const PcKakaoModalButton = styled.div`
    position: fixed;
    display: ${(props) => (props.isPcKakoModal ? "block" : "none")};
    right: 50px;
    bottom: 50px;
    z-index: 100;

    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.1) 0px 4px 6px, rgba(0, 0, 0, 0.15) 0px 8px 30px;
    background: #fff;
    border-radius: 24px;

    cursor: pointer;
    transition: ease .3s;

    &:hover{
        transition: ease .3s;
        box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.1) 0px 0px 6px 9px, rgba(0, 0, 0, 0.15) 0px 8px 30px;
    }
`

const PcKakaoModalButtonImg = styled.img`
    display: block;

    padding: 14px;
    
    width: 32px;
    height: 32px;
`

const PcKakaoModalContainer = styled.div`
    position: fixed;
    right: 50px;
    bottom: 120px;

    display: ${(props) => (props.isPcKakoModal ? "block" : "none")};

    
    width: 390px;
    height: 650px;
    
    z-index: 100;
    background: #F9F9F9;
    border-radius: 20px;
    box-shadow: 2px 2px 30px 1px rgba(0,0,0,0.4);
`


export default PcKakaoModal;