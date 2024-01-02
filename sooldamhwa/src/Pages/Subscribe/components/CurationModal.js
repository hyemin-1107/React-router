import React from "react";
import styled from "styled-components";
import icon_close_black from '../../../images/subscribeImage/icon_close_black.png'
import popup_curation from '../../../images/subscribeImage/popup_curation.png'

const CurationModal = (props) => {

    const { isCurationModal, onClickCurationButton } = props;

    return (
        <CurationModalWrap isCurationModal={isCurationModal}>
            <ModalContainer>
                <ModalButton onClick={onClickCurationButton} src={icon_close_black} alt='닫기' />
                <ModalImg src={popup_curation} alt='큐레이션 이미지' />
            </ModalContainer>
        </CurationModalWrap>
    )

};

const CurationModalWrap = styled.div`
    position: fixed;
    display: ${(props) => (props.isCurationModal ? "block" : "none")};

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

export default CurationModal;