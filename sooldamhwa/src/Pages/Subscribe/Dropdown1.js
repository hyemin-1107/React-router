import React from "react";
import styled from "styled-components";
const Dropdown1 = () => {

    return (
     
        <CheckInAdvanceAnswer  >
            테마에 따라 전통주 3~4병으로 구성되며 프리미엄 테마의 경우, 고가의 술 2병으로< br />
            구성되기도 합니다. 소믈리에가 추천하는 안주 조합과 술 설명이 담긴
            큐레이션 카드도 동봉되며 술자리를 더욱 아름답게
            꾸며 줄 ‘이 달의 술자리 포스터’가 함께 배송됩니다.
            < br />< br />
            *이달의 술자리 포스터는 23년 4월 담화박스부터 적용됩니다.
        </CheckInAdvanceAnswer>

    )

};

const CheckInAdvanceAnswer = styled.div`
    /* display: none; */
    padding-bottom: 40px;

    font-size: 24px;
    
    color: #00000099;

`
export default Dropdown1;