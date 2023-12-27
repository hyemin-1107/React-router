import React from "react";
import styled from "styled-components";

const IntroductionContents = (props) => {
    const { isImgLeft, imgSource, title, contents } = props;

    return (
        <>
            {isImgLeft ? (
                <IntroductionSection>
                    <AdvantageContentImg src={imgSource} />
                    <div>
                        <AdvantageTitle>{title}</AdvantageTitle>
                        <AdvantageContent>{contents}</AdvantageContent>
                    </div>
                </IntroductionSection>
            ) : (
                <IntroductionSection>
                    <div>
                        <AdvantageTitle>{title}</AdvantageTitle>
                        <AdvantageContent>{contents}</AdvantageContent>
                    </div>
                    <AdvantageContentImg src={imgSource} />
                </IntroductionSection>
            )}
        </>

    )
};

const IntroductionSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 80px;
`

const AdvantageTitle = styled.div`
    font-size: 24px;
    font-weight: 700;

    white-space: pre-line;
`

const AdvantageContent = styled.div`
    margin-top: 6px;

    font-size: 24px;
    font-weight: 400;
    
    white-space: pre-line;
    color: #3D3D3D99;
`

const AdvantageContentImg = styled.img`
    width: 580px;
    height: 388px;
    
    border-radius: 20px;
`

export default IntroductionContents;