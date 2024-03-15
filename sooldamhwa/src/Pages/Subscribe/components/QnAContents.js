import React, { useState }from "react";
import styled from "styled-components";
import DropdownContents from './DropdownContents';
import arrow from '../../../images/subscribeImage/arrow.png'

const QnAContents = () => {

    const [isDropdownView1, setDropdownView1] = useState(false)
    const [isDropdownView2, setDropdownView2] = useState(false)
    const [isDropdownView3, setDropdownView3] = useState(false)
    const [isDropdownView4, setDropdownView4] = useState(false)

    return(
        <CheckInAdvance>
                <CheckInAdvanceTitle>
                    미리 확인해보세요
                </CheckInAdvanceTitle>
                <CheckInAdvanceQnA>
                    <li>
                        <CheckInAdvanceQuestionContents onClick={e => setDropdownView1(!isDropdownView1)}>
                            <CheckInAdvanceQuestion>
                                담화박스 구독 상품에는 몇 가지 상품이 들어있나요?
                            </CheckInAdvanceQuestion>
                            <ArrowImg src={arrow} alt="화살표"/>
                        </CheckInAdvanceQuestionContents>
                        {isDropdownView1 &&
                        (<DropdownContents 
                            text='테마에 따라 전통주 3~4병으로 구성되며 프리미엄 테마의 경우, 고가의 술 2병으로
                        구성되기도 합니다. 소믈리에가 추천하는 안주 조합과 술 설명이 담긴
                        큐레이션 카드도 동봉되며 술자리를 더욱 아름답게
                        꾸며 줄 ‘이 달의 술자리 포스터’가 함께 배송됩니다.&nbsp;&nbsp;&nbsp;
                         *이달의 술자리 포스터는 23년 4월 담화박스부터 적용됩니다.'/>)}
                    </li>
                    <li>
                        <CheckInAdvanceQuestionContents onClick={e => setDropdownView2(!isDropdownView2)}>
                            <CheckInAdvanceQuestion>
                                여러가지 담화박스를 동시 혹은 번갈아 가며 구독할 수 있나요?
                            </CheckInAdvanceQuestion>
                            <ArrowImg src={arrow} />
                        </CheckInAdvanceQuestionContents>
                        {isDropdownView2 &&
                        (<DropdownContents 
                            text='두 가지 상품을 모두 구독하고 싶은 경우, 각 상품별로 구독 신청을
                        진행하시면 됩니다. 두 가지 상품을 모두 구독한 후 쉬어가기 기능을 이용하면
                        원하는 상품만 원하는 달에 받아볼 수 있습니다.'/>)}
                    </li>
                    <li>
                        <CheckInAdvanceQuestionContents onClick={e => setDropdownView3(!isDropdownView3)}>
                            <CheckInAdvanceQuestion>
                                최소 구독 기간이나 해지 위약금이 있나요?
                            </CheckInAdvanceQuestion>
                            <ArrowImg src={arrow} />
                        </CheckInAdvanceQuestionContents>
                        {isDropdownView3 && 
                        (<DropdownContents 
                        text=' 없습니다. 원할 땐 언제든 쉬어가기가 가능하며 최소 구독 기간이 없어
                        한 달만 구독하는 것도 가능합니다. 쉬어가기란 다가오는 결제와 배송을 잠시
                        쉬어갈 수 있는 일시정지 버튼입니다.'/>)}
                    </li>
                    <li>
                        <CheckInAdvanceQuestionContents onClick={e => setDropdownView4(!isDropdownView4)}>
                            <CheckInAdvanceQuestion>
                                제주도는 추가 배송비가 있나요?
                            </CheckInAdvanceQuestion>
                            <ArrowImg src={arrow} />
                        </CheckInAdvanceQuestionContents>
                        {isDropdownView4 &&
                        (<DropdownContents text='없습니다. 모든 구독자분은 구독 박스 배송비가 무료입니다.'/>)}
                    </li>
                </CheckInAdvanceQnA>
            </CheckInAdvance>

    )

};

const CheckInAdvance = styled.div`
    padding: 120px 0 0;
`

const CheckInAdvanceTitle = styled.div`
    text-align: center;

    margin-bottom: 20px;

    font-size: 44px;
    font-weight: 700;
`

const CheckInAdvanceQnA = styled.ul`
    width: 840px;
    margin: 0 auto;
    
    li{
        border-top: 1px solid #999;
    }
    
    :first-child{
        border: none;
    }
`

const CheckInAdvanceQuestionContents = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
`

const CheckInAdvanceQuestion = styled.div`
    padding: 40px 0;
    
    font-size: 24px;
    font-weight: 700;
`

const ArrowImg = styled.img`
    width: 20px;
    height: 20px;
`

export default QnAContents;