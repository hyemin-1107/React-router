import React from "react";
import styled from "styled-components";
import icon_coupon from '../../../images/subscribeImage/icon_coupon.png'
import icon_truck_blue2 from '../../../images/subscribeImage/icon_truck_blue2.png'
import icon_price_down from '../../../images/subscribeImage/icon_price_down.png'

const PurchaseBenefitsContents = () => {

    return (

        <PurchaseBenefits>
            <BenefitsText>
                계속 추가되는 < br />
                구독자 혜택
            </BenefitsText>
            <BenefitsImg>
                <BenefitsImgBox>
                    <BenefitsIcon src={icon_coupon} alt="할인쿠폰 아이콘"/>
                    <BenefitsSubText>
                        첫 구독은
                        <div>10% 할인</div>
                    </BenefitsSubText>
                </BenefitsImgBox>
                <BenefitsImgBox>
                    <BenefitsIcon src={icon_truck_blue2} alt="배송트럭 아이콘"/>
                    <BenefitsSubText>
                        담화박스는
                        <div>언제나 무료배송</div>
                    </BenefitsSubText>
                </BenefitsImgBox>
                <BenefitsImgBox>
                    <BenefitsIcon src={icon_price_down} alt="가격할인 아이콘"/>
                    <BenefitsSubText>
                        단품구매보다
                        <div>평균 16% 할인</div>
                    </BenefitsSubText>
                </BenefitsImgBox>
            </BenefitsImg>
        </PurchaseBenefits>

    )

};

const PurchaseBenefits = styled.div`
    margin-top: 140px;
    padding: 120px 0 140px;

    background: #F5F5F5;
`

const BenefitsText = styled.div`
    text-align: center;
    
    margin-bottom: 70px;
    
    font-size: 44px;
    font-weight: 700;
`

const BenefitsImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 82px;
`

const BenefitsImgBox = styled.div`
    text-align: center;

    width: 200px;
    height: 157px;
`

const BenefitsIcon = styled.img`
    width: 72px;
    height: 72px;
`

const BenefitsSubText = styled.div`
    margin-top: 10px;

    font-size: 24px;
    font-weight: 500;
    line-height: 1.6;

    div{
        font-weight: 700;
    }
`

export default PurchaseBenefitsContents;