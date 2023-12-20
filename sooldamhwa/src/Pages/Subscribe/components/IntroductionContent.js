import React from "react";
import styled from "styled-components";
import AdvantageContent1 from '../../../images/subscribeImage/subscribe_selling_point_01.png'
import AdvantageContent2 from '../../../images/subscribeImage/subscribe_selling_point_02.png'
import AdvantageContent3 from '../../../images/subscribeImage/subscribe_selling_point_03.png'

const IntroductionContent = () => {

    return (
        <SubscriptionIntroduction>
            <Introduction>
                <div>인생술을 찾는 여정</div>
                우리 오늘부터 만날까요? < br />
                제대로!
            </Introduction>

            <IntroductionSection>
                <div>
                    <AdvantageTitle>
                        세심한 주류 품질 점검
                    </AdvantageTitle>
                    <AdvantageContent>
                        좋은 술을 찾기 위한 고집. < br />
                        전국 양조장에 직접 방문해 < br />
                        품질·위생을 검사해요.
                    </AdvantageContent>
                </div>
                <AdvantageContentImg src={AdvantageContent1} />
            </IntroductionSection>
            <IntroductionSection>
                <AdvantageContentImg src={AdvantageContent2} />
                <div>
                    <AdvantageTitle>
                        없어요, 최소 유지 기간 < br />
                        있어요, 언제든 쉬어가기
                    </AdvantageTitle>
                    <AdvantageContent>
                        술담화에서는 한 달 구독도 < br />
                        가능해요. 내가 원하는 달만 < br />
                        구독할 수도 있죠.
                    </AdvantageContent>
                </div>
            </IntroductionSection>
            <IntroductionSection>
                <div>
                    <AdvantageTitle>
                        집으로 찾아오는 < br />
                        나만의 소믈리에
                    </AdvantageTitle>
                    <AdvantageContent>
                        소믈리에가 직접 먹어본 조합! < br />
                        추천 안주와 재미있는 술 스토리가 < br />
                        담긴 큐레이션 카드도 들어있어요.
                    </AdvantageContent>
                </div>
                <AdvantageContentImg src={AdvantageContent3} />
            </IntroductionSection>
        </SubscriptionIntroduction>
    )
};


const SubscriptionIntroduction = styled.div`
    width: 1176px;
    margin: 0 auto;
`

const Introduction = styled.div`
    font-size: 44px;
    font-weight: 700;

    div{
        font-size: 24px;
        margin: 120px 0 20px;
    }
`

const IntroductionSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 80px;
`

const AdvantageTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
`

const AdvantageContent = styled.div`
    margin-top: 6px;

    font-size: 24px;
    font-weight: 400;

    color: #3D3D3D99;
`

const AdvantageContentImg = styled.img`
    width: 580px;
    height: 388px;
    
    border-radius: 20px;
`

export default IntroductionContent;