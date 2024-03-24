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
                                <div>
                                  어릴 적부터 미술이 취미였습니다. 
                                  백지 상태에서 나만의 세상을 그려나가는 과정이 항상 즐거웠고, 
                                  이것이 제 삶의 큰 부분을 차지하게 되었습니다. 
                                  </div>
                                  <div>
                                    그러던 중 컴퓨터 공학을 접하게 되었고, 
                                  그렇게 퍼블리셔 수업을 시작으로 Javascript를 접하게 되어 프로그래밍에 발을 디뎠습니다. 
                                  이렇게 시작한 공부는 점점 확장되어 Front-End까지 관심을 가지게 되었습니다.
                                  </div>
                                  <div>
                                  웹 개발을 공부하면서 항상 사용자의 입장에서 생각하는 습관을 들였습니다. 
                                  웹 접근성과 표준화를 중요하게 생각하고, 이를 바탕으로 사용자 친화적인 
                                  웹 페이지를 제작하는 것을 목표로 하고 있습니다. 
                                  </div>
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
  margin-top: 40px;

  width: 500px;
  
  text-align: end;
  

  font-size: 16px;
  font-weight: 400;
  line-height: 1.8;

  div{
    margin-top: 10px;
  }
`
