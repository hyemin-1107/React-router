import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import landing_img_pc3 from '../../../images/mainImage/landing_img_pc3.jpg'
import liquor from '../../../images/mainImage/liquor.png'
import damhwabox from '../../../images/mainImage/damhwabox.png'
import back2_img from '../../../images/mainImage/back2_img.png'
import bubble_conversation from '../../../images/mainImage/bubble_conversation.png'
import comma_left from '../../../images/mainImage/comma_left.png'
import comma_right from '../../../images/mainImage/comma_right.png'


const MainContents = () => {

    const navigate = useNavigate();

    return (
        <main>
            <MainText>
                <MainImage src={landing_img_pc3} alt='Main' />
                <MainTitle>
                    고생한 나를<br />
                    좋은 술로 위로하고 싶을 때
                </MainTitle>
            </MainText>
            <MainTextLine1 />
            <MainTextLine2 />
            <MainTextLine3 />

            <SpecialDayText>
                <p>특별한 날을 완성시키는<br />
                    가장 쉬운 방법</p>
                <SpecialDay src={liquor} alt='특별한 날' />
            </SpecialDayText>

            <TraditionalLiquor>
                <TraditionalLiquorText>
                    2,000종이 넘는<br />
                    다채로운 전통주로 시작해보세요.
                </TraditionalLiquorText>
                <TraditionalLiquorTextSub>
                    <p>우리나라 술 <span>2,030</span>종</p>
                    <p>전국 각지 양조장 <span>1,234</span>곳</p>
                </TraditionalLiquorTextSub>
                <TraditionalLiquorGraph>
                    <Graph>
                        <GraphBar1 />
                        <Bar1 />
                        <TraditionalLiquorNumber>1,037개<br />전통주</TraditionalLiquorNumber>
                    </Graph>
                    <Graph>
                        <GraphBar2 />
                        <Bar2 />
                        <OtherDrinksNumber>160개<br />수제 맥주</OtherDrinksNumber>
                    </Graph>
                    <Graph>
                        <GraphBar3 />
                        <Bar2 />
                        <OtherDrinksNumber>20개<br />소주 & 맥주</OtherDrinksNumber>
                    </Graph>
                </TraditionalLiquorGraph>
                <GraphExplanation>2019년 기준 주종별 등록 면허수</GraphExplanation>
            </TraditionalLiquor>

            <LifeAlcohol>
                <p>한 달에 한 번, <br /> 집 앞으로 찾아오는 인생술</p>
                <DamhwaBox src={damhwabox} alt="담화박스" />
                <DamhwaText>수많은 분들이 경험하고 있는
                    <span> '굉장히 신경 쓴' </span>
                    구독서비스, <br /> 한번 구경해볼까요?
                </DamhwaText>
                <SubscribeButton onClick={() => { navigate("/subscribe"); }}>구독하러 가기 {'>'}</SubscribeButton>
            </LifeAlcohol>

            <TraditionalLiquorShoppingMall>
                <TraditionalLiquorShoppingMallImg src={back2_img} alt='다양한 전통주' />
                <TraditionalLiquorShoppingMallText>4도부터 53도까지<br />다양하게 갖춰진 전통주 쇼핑몰</TraditionalLiquorShoppingMallText>
                <DamhwaText>근데 <span>우리 제법 깐깐해요.</span> <br />
                    우리가 만족한 술만 들이고 있거든요!
                </DamhwaText>
                <ShoppingButton onClick={() => { navigate(""); }}>쇼핑하러 가기 {'>'}</ShoppingButton>
            </TraditionalLiquorShoppingMall>

            <RecentDamhwa>
                <RecentDamhwaText>최근 담화, 함께 볼까요?</RecentDamhwaText>
                <RecentDamhwaReview>
                    <img src={comma_left} alt='left' />
                    <div>
                        <Review>한 달에 한번씩 <br /> 나에게 주는 선물</Review>
                        <ReviewUser>@shin_tea97</ReviewUser>
                    </div>
                    {/* <div>
                        <Review>한 달에 한번씩 <br /> 나에게 주는 선물</Review>
                        <ReviewUser>@shin_tea97</ReviewUser>
                    </div>
                    <div>
                        <Review>한 달에 한번씩 <br /> 나에게 주는 선물</Review>
                        <ReviewUser>@shin_tea97</ReviewUser>
                    </div> */}
                    <img src={comma_right} alt='right' />
                </RecentDamhwaReview>
                <RecentDamhwaImg src={bubble_conversation} />
            </RecentDamhwa>
        </main>

    )
};

const MainText = styled.div`
    position: relative;

    width: 100%;
    height: 430px;

    padding-top: 55px;
`

const MainImage = styled.img`
    width: 100%;
    height: 100%;
`

const MainTitle = styled.h1`
    position: absolute;
    text-align: center;
    top: 50%;
	left: 50%;

    line-height: 1.8;
    font-size: 28px;

    color: #fff;

    transform: translate( -50%, -50% );
`

const MainTextLine1 = styled.div`
    border: 5px solid #E0E0E0;
`

const MainTextLine2 = styled.div`
    border: 5px solid #F4bb5F;
`

const MainTextLine3 = styled.div`
    border: 5px solid #5C96CA;
`

const SpecialDay = styled.img`
    width: 170px;
    height: 170px;
`

const SpecialDayText = styled.div`
    text-align: center;
    margin-top: 100px;

    font-size: 28px;
    font-weight: 700;
    line-height: 1.6;

    color: #707070;
`

const TraditionalLiquor = styled.section`
    margin-top: 200px;

    width: 100%;
    height: 750px;

    background: #F8F8F8;
`

const TraditionalLiquorText = styled.p`
    text-align: center;

    padding-top: 80px;
    
    font-size: 28px;
    font-weight: 700;
    line-height: 1.6;
    
    color: #707070;
`

const TraditionalLiquorTextSub = styled.div`
    text-align: center;

    margin-top: 40px;

    font-size: 16px;
    font-weight: 600;
    line-height: 1;

    color: #707070;
    span{
        color: #FFBA00;
    }
`

const TraditionalLiquorGraph = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
    
    gap: 34px;
    margin-top: 80px;
`

const Graph = styled.div`
    width: 80px;
`

const GraphBar1 = styled.div`
    margin: 0 auto;
    
    width: 50px;
    height: 222px;
    
    background: #FFBA00;
    border-radius: 10px 10px 0 0;
`

const Bar1 = styled.div`
    margin: 0 auto;

    width: 58px;
    
    border: 1px solid #FFBA00;
`

const TraditionalLiquorNumber = styled.div`
    text-align: center;

    font-size: 16px;
    font-weight: 800;
    
    color: #707070;
`

const GraphBar2 = styled.div`
    margin: 0 auto;
    
    width: 50px;
    height: 47px;

    background: #D1D1D1;
    border-radius: 10px 10px 0 0;
`

const GraphBar3 = styled.div`
    margin: 0 auto;
    
    width: 50px;
    height: 25px;

    background: #D1D1D1;
    border-radius: 10px 10px 0 0;
`

const Bar2 = styled.div`
    margin: 0 auto;
    
    width: 58px;

    border: 1px solid #D1D1D1;
`

const OtherDrinksNumber = styled.div`
    text-align: center;

    font-size: 16px;
    font-weight: 800;
    
    color: #B2B2B2;
`

const GraphExplanation = styled.div`
    margin-top: 40px;    

    text-align: center;
    font-weight: 500;
    font-size: 13px;

    color: #707070;
`

const LifeAlcohol = styled.div`
    text-align: center;

    padding-top: 220px;

    font-size: 28px;
    font-weight: 700;
    line-height: 1.6;

    color: #707070;
`

const DamhwaBox = styled.img`
    margin-top: 50px;    
    
    width: 304px;
    height: 205px;
`

const DamhwaText = styled.p`
    margin: 60px 0 52px;
    padding-top: 20px;

    font-size: 16px;
    font-weight: 500;
    line-height: 2;
    
    color: #707070;
    span{
        font-weight: 800;
    }
`

const SubscribeButton = styled.button`
    width: 150px;
    height: 45px;
        
    font-size: 18px;
    font-weight: 800;
    
    color: #fff;
    background: #FFBB00;
    border: none;
    border-radius: 6px;

    cursor: pointer;
    transition: 0.3s ease;

    &:hover{
        background: rgb(234, 166, 56);
        transition: 0.3s ease;
    }
`

const TraditionalLiquorShoppingMall = styled.div`
    position: relative; 

    padding-top: 250px;    

    text-align: center;
`

const TraditionalLiquorShoppingMallImg = styled.img`
    width: 680px;
    height: 380px;
`

const TraditionalLiquorShoppingMallText = styled.p`
    position: absolute;
    top: 50%;
	left: 50%;
   
    margin: 0;

    font-size: 20px;
    font-weight: 700;
    line-height: 1.6;

    color: #fff;

    transform: translate( -50%, -50% );
`

const ShoppingButton = styled.button`
    width: 150px;
    height: 45px;

    font-size: 18px;
    font-weight: 800;

    border: none;
    border-radius: 6px;

    color: #fff;
    background: #0096F3;
    
    cursor: pointer;
    transition: 0.3s ease;

    &:hover{
        background: rgb(45, 123, 195);
        transition: 0.3s ease;
    }
`

const RecentDamhwa = styled.div`
    text-align: center;

    margin-top: 230px;
`

const RecentDamhwaText = styled.p`
    font-size: 28px;
    font-weight: 700;

    color: #707070;
`

const RecentDamhwaReview = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 34px auto 40px;
    
    width: 430px;
    height: 116px;
    
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px 0px;
    border-radius: 20px;
`

const Review = styled.div`
    width: 310px;

    font-size: 16px;
    font-weight: 500;
    line-height: 1.7;
    
    color: #000000A6;
`

const ReviewUser = styled.div`
    margin-top: 8px;

    font-size: 13px;
    font-weight: 800;

    color: #000000A6;
`

const RecentDamhwaImg = styled.img`
    width: 160px;
    height: 160px;
`

export default MainContents;