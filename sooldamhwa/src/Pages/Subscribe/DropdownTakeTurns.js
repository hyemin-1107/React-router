import React from "react";
import styled from "styled-components";
const DropdownTakeTurns = () => {

    return (

            <CheckInAdvanceAnswer>
                두 가지 상품을 모두 구독하고 싶은 경우, 각 상품별로 구독 신청을
                진행하시면 됩니다. 두 가지 상품을 모두 구독한 후 쉬어가기 기능을 이용하면
                원하는 상품만 원하는 달에 받아볼 수 있습니다.
            </CheckInAdvanceAnswer>

    )

};

const CheckInAdvanceAnswer = styled.div`
    /* display: none; */
    padding-bottom: 40px;

    font-size: 24px;
    
    color: #00000099;
`
export default DropdownTakeTurns;