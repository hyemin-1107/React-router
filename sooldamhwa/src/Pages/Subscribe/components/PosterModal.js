import React from "react";
import styled from "styled-components";

import icon_close_black from '../../../images/subscribeImage/icon_close_black.png'
import popup_poster from '../../../images/subscribeImage/popup_poster.png'

const PosterModal = (props) => {

    const { isPosterModal, onClickPosterButton } = props;

    return (
        <PosterModalWrap isPosterModal={isPosterModal}>
            <PosterModalContainer>
                <ModalButton onClick={onClickPosterButton} src={icon_close_black} alt='닫기' />
                <ModalImg src={popup_poster} alt='포스터 이미지' />
            </PosterModalContainer>
        </PosterModalWrap>
    )
};

const PosterModalContainer = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    display: flex;
    justify-content: center;
    
    padding: 20px 20px 30px;
    
    width: 390px;
    
    
    background: #fff;
    z-index: 100;

    box-shadow: 2px 2px 30px 1px rgba(0,0,0,0.5);
    box-sizing: border-box;
    border-radius: 20px;
`

const PosterModalWrap = styled.div`
    position: fixed;
    display: ${(props) => (props.isPosterModal ? "block" : "none")};

    top: 0;
    left: 0;  
   
    width: 100%;
    height: 100%;
   
    z-index: 99;

    background-color: rgba(0,0,0,0.2);
`

const ModalButton = styled.img`
    position: absolute;
    
    right: 26px;

    width: 33px;
    height: 33px;
    
    cursor: pointer;
`

const ModalImg = styled.img`
    width: 340px;
`

export default PosterModal;

