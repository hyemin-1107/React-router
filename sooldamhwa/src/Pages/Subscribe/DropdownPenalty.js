import React from "react";
import styled from "styled-components";
const DropdownPenalty = () => {

    return (
                      
            <CheckInAdvanceAnswer>
                            없습니다. 원할 땐 언제든 쉬어가기가 가능하며 최소 구독 기간이 없어
                            한 달만 구독하는 것도 가능합니다. 쉬어가기란 다가오는 결제와 배송을 잠시
                            쉬어갈 수 있는 일시정지 버튼입니다.
            </CheckInAdvanceAnswer>
   
   )

};

const CheckInAdvanceAnswer = styled.div`
    /* display: none; */
    padding-bottom: 40px;

    font-size: 24px;
    
    color: #00000099;

`
export default DropdownPenalty;