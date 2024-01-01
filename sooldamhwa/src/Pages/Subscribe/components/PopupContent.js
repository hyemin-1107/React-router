import React from "react";
import { useState } from "react";
import { Link } from 'react-scroll';
import styled from "styled-components";
import popup_img from '../../../images/subscribeImage/popup_img.jpg'

const PopupContent = () => {
    
    const [isPopup, setIsPopup] = useState(true);
    const closePopup = () => {
        setIsPopup(!isPopup);
    };

    return (
        <>
        {isPopup && (
            <Popup>
             <Link to="DetailInfo" spy={true} smooth={true} style={{ cursor: 'pointer' }}>
             <PopupImg src={popup_img} alt="팝업창 구독 이미지"/>
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

export default PopupContent;