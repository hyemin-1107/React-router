import React, { useState, useEffect } from "react";

import styled, { keyframes } from "styled-components";
import img_profile from '../images/img_profile.png'
import Typewriter from 'typewriter-effect';

const Main = () => {

    const [isAlert, setIsAlert] = useState(false);

    useEffect(() => {
        setTimeout(() => { setIsAlert(true) }, 2000);
    })

    return (
        <>
            <Header>
                <Typewriter
                    options={{
                        strings: ['Park Hyemin Portfolio '],
                        autoStart: true,
                        loop: true,
                        pauseFor: 10000,
                    }}
                />
            </Header>

            <MainContent>
                {isAlert && (
                    <>
                        <div>
                            <ProfileImg src={img_profile} alt='profile' />
                        </div>
                        <ImgFrame></ImgFrame>
                        <ProfileText>
                            <div>Front-End 신입 개발자 박혜민 입니다.</div>
                            <ProfileTextAbout>
                                <div>맡은 일에 책임감을 갖고 얻게 되는 배움에 가치를 느낍니다.</div>
                                <div>긍정적 사고방식으로 개발과정이 즐겁습니다.</div>
                                <div>타인과 융통성 있게 소통합니다.</div>
                                <div>강한 의지로 문제해결에 집념이 있습니다.</div>
                                <div>꾸준히 새로 습득한 지식을 블로그에 기록합니다.</div>
                            </ProfileTextAbout>
                        </ProfileText>
                    </>
                )}
            </MainContent>

        </>
    )
};

export default Main;

const Header = styled.h1`
  text-align: center;
  
  padding: 140px 0; 

  font-size: 40px;
  font-weight: 600;

  border-bottom: 1px solid #6E6D70;
`

const MainContent = styled.article`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 100px 0 200px;
 
 height: 328px;
`


const fadeInLeft = keyframes`
	0% {
		opacity: 0;
		transform: translate3d(-5%, 0, 0);
    /* transition-delay: calc(var(--delay)* .5s); */
	}
	100% {
		opacity: .9;
		transform: translateZ(0);
	}
`


const fadeInRight = keyframes`
	0% {
		opacity: 0;
		transform: translate3d(30%, 0, 0);
    /* transition-delay: calc(var(--delay)* .5s); */
	}
	100% {
		opacity: 1;
		transform: translateZ(0);
	}
`

const ProfileImg = styled.img`
  width: 440px;
  
  border: 1px solid #6E6D70;
  opacity: .9;

  animation: ${fadeInLeft} 2s ease-out;
`

const ImgFrame = styled.div`
  position: absolute;
  top: 13px;
  left: 75px;

  width: 450px;
  height: 347px;
  
  border: 1px solid #6E6D70;
  animation: ${fadeInRight} 2s ease-out;
`

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
    opacity: 1;
	}
  `

const ProfileText = styled.div`
  text-align: end;
  
  font-size: 24px;
  font-weight: 500;
  
  animation: ${fadeIn} 2s ease-out;
`

const ProfileTextAbout = styled.div`
  margin-top: 70px;

  text-align: end;
  
  font-size: 18px;
  font-weight: 400;
  line-height: 2;
`
