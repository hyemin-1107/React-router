import React from "react";
import styled from "styled-components";
import ModalClose from '../../../images/subscribeImage/icon-close-black.png'

const Modal = (props) => {

    const {isModal, onClickButton} = props;

    
    return (

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
    )
};


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


export default Modal;