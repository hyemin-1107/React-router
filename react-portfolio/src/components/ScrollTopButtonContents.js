import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const ScrollTopButtonContents = () => {

    const [showTopButton, setShowTopButton] = useState(false);

    useEffect(() => {
        const handleTopButton = () => {
            if (window.scrollY > 400) {
                setShowTopButton(true)
            } else {
                setShowTopButton(false)
            }
        }
        window.addEventListener("scroll", handleTopButton)
        return () => {
            window.removeEventListener("scroll", handleTopButton)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            {showTopButton && (
                <ScrollContainer>
                    <TopButton onClick={scrollToTop} type="button">Top</TopButton>
                </ScrollContainer>
            )}
        </>
    )

};

export default ScrollTopButtonContents;

const ScrollContainer = styled.div`
  position: fixed;
  bottom: 60px;
  right: 54px;
  z-index: 100;
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

const TopButton = styled.button`
  padding: 12px 22px;
  
  font-size: 16px;
  font-weight: 500;
  
  box-sizing: border-box;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px, rgba(0, 0, 0, 0.1) 0px 3px 7px 1px, rgba(0, 0, 0, 0.1) 0px -2px 0px inset;
  border-radius: 4px;

  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  cursor: pointer;
  animation: ${fadeInRight} 2s ease-out;

&:hover {
  color: #fff;
  background-color: #6E6D70;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

&:active {
  box-shadow: none;
  transform: translateY(0);
}
`
