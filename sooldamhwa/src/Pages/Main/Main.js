import React from 'react';
import styled from 'styled-components';
import Logo from '../../image/main-logo-christmas.png'
import Headericon from '../../image/icon-header-basket.png'
import Mainimg from '../../image/landingImgPc3.jpg'
import Specialday from '../../image/liquor.png'
import Damhwabox from '../../image/damhwabox.png'
import TraditionalLiquorimg from '../../image/backImg2.png'
import RecentDamhwaimg from '../../image/bubble_conversation.png'
import instargram from '../../image/icon_instagram.png'
import youtube from '../../image/icon_youtube.png'
import kakao from '../../image/icon_kakao.png'
import facebook from '../../image/icon_facebook.png'
import naver from '../../image/icon_naver.png'

const Main = () => {

    return (
        <>
            <Header>
                <GnbNav>
                    <Gnb>
                        <LogoImage src={Logo} alt='Logo' />
                        <HeaderGnb>
                            <li><HeaderGnbList>구독</HeaderGnbList></li>
                            <li><HeaderGnbList>스토어</HeaderGnbList></li>
                            <li><HeaderGnbSearch>무엇을 찾고 계신가요?</HeaderGnbSearch></li>
                        </HeaderGnb>
                    </Gnb>
                    <GnbSub>
                        <li><HeaderGnbLogin>로그인/회원가입 {'>'}</HeaderGnbLogin></li>
                        <li><HeaderIcon src={Headericon} alt='icon' /></li>
                    </GnbSub>
                </GnbNav>
            </Header>

            <main>
                <MainText>
                    <MainImage src={Mainimg} alt='Main' />
                    <MainTitle>
                        <p>고생한 나를</p>
                        <p>좋은 술로 위로하고 싶을 때</p>
                    </MainTitle>
                </MainText>
                <MainTextLine1 />
                <MainTextLine2 />
                <MainTextLine3 />
                <section>
                    <SpecialDayText>
                        <p>특별한 날을 완성시키는<br />
                            가장 쉬운 방법</p>
                        <SpecialDay src={Specialday} alt='특별한 날' />
                    </SpecialDayText>
                </section>
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
                    <DamhwaBox src={Damhwabox} alt="담화박스" />
                    <DamhwaText>수많은 분들이 경험하고 있는
                        <span> '굉장히 신경 쓴' </span>
                        구독서비스, <br /> 한번 구경해볼까요?
                    </DamhwaText>
                    <SubscribeButton>구독하러 가기 {'>'}</SubscribeButton>
                </LifeAlcohol>

                <TraditionalLiquorShoppingMall>
                    <TraditionalLiquorShoppingMallImg src={TraditionalLiquorimg} alt='다양한 전통주' />
                    <TraditionalLiquorShoppingMallText>4도부터 53도까지<br />다양하게 갖춰진 전통주 쇼핑몰</TraditionalLiquorShoppingMallText>
                    <DamhwaText>근데 <span>우리 제법 깐깐해요.</span> <br />
                        우리가 만족한 술만 들이고 있거든요!
                    </DamhwaText>
                    <ShoppingButton>쇼핑하러 가기 {'>'}</ShoppingButton>
                </TraditionalLiquorShoppingMall>
                <RecentDamhwa>
                    <RecentDamhwaText>최근 담화, 함께 볼까요?</RecentDamhwaText>
                    <RecentDamhwaReview></RecentDamhwaReview>
                    <RecentDamhwaImg src={RecentDamhwaimg} />
                </RecentDamhwa>
            </main>

            <Footer>
                <div style={{ paddingTop: '30px', width: '1240px', margin: '0 auto', color: '#3E3E3E' }}>
                    <Fnb>
                        <div>
                            <SiteName>담화컴퍼니 주식회사</SiteName>
                            <Company>고객센터 : 070-5014-1282</Company>
                            <Company>평일 10:00 - 18:00, 주말 휴무</Company>
                        </div>
                        <FooterFnb>
                            <FooterFnbImg src={instargram} alt='인스타 채널' />
                            <FooterFnbImg src={youtube} alt='유튜브 채널' />
                            <FooterFnbImg src={kakao} alt='카카오 채널' />
                            <FooterFnbImg src={facebook} alt='페이스북 채널' />
                            <FooterFnbImg src={naver} alt='네이버 채널' />
                        </FooterFnb>
                    </Fnb>
                    <div style={{ display: 'flex' }}>
                        <div>이용약관</div>
                        <div>개인정보처리방침</div>
                        <div>입점문의</div>
                    </div>
                    <div>
                        <p>대표 : 이재욱 사업자등록번호 : 620-81-58299
                            <span>사업자확인</span>
                            통신판매 신고번호: 2021-서울서초-2084
                        </p>
                        <p>
                            주소 : 서울특별시 서초구 강남대로65길 10, 8층 술담화 정보보호 책임자 : 박준형
                            대표 전화 : 070-5014-1282 이메일 : info@sooldamhwa.com
                        </p>
                    </div>
                    <div>
                        <p>술담화는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가 등록한 상품정보 및 거래에 대해 술담화는 책임을 지지 않습니다.</p>
                        <p>고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 NICE구매안전 (에스크로) 서비스를 이용하실 수 있습니다.</p>
                    </div>
                    <div>서비스가입사실 확인</div>
                </div>
            </Footer>
        </>
    )

};


const Header = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;    

    margin: 0 auto;

    background: #fff;
    border-bottom: 1px solid #D2D2D2;
    z-index:1;
`

const GnbNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 11px auto;

    width: 1150px;
`

const Gnb = styled.div`
    display: flex;

    align-items: center;
`

const LogoImage = styled.img`
    width: 60px;
    height: 24px;
`

const HeaderGnb = styled.ul`
    display: flex;

    margin: 0;
    padding-left: 12px;
    align-items: center;

    list-style-type: none;
`

const HeaderGnbList = styled.a`
    padding-left: 16px;

    font-size: 17px;
    font-weight: 700;
`

const HeaderGnbSearch = styled.a`
    display: flex;
    margin-left: 28px;
    padding: 6px 40px;

    background-color: #F7F7F7;
    color: #999;
`

const GnbSub = styled.ul`
    display: flex;
    align-items: center;

    margin: 0;
    
    list-style-type: none;
`

const HeaderGnbLogin = styled.a`
    margin-right: 26px;

    font-size: 14px;
`

const HeaderIcon = styled.img`
    display: flex;
    
    width: 28px;
    height: 28px;
`

const MainText = styled.div`
    position: relative;

    widthL: 100%;
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

    line-height: .8;
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
    
    margin-top: 80px;
    gap: 34px;
  
`

const Graph = styled.div`
    width: 80px;
`

const GraphBar1 = styled.div`
    width: 50px;
    height: 222px;
    
    margin: 0 auto;

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
    width: 50px;
    height: 47px;
    
    margin: 0 auto;

    background: #D1D1D1;
    border-radius: 10px 10px 0 0;
`

const GraphBar3 = styled.div`
    width: 50px;
    height: 25px;
    
    margin: 0 auto;

    background: #D1D1D1;
    border-radius: 10px 10px 0 0;
`

const Bar2 = styled.div`
    width: 58px;
    margin: 0 auto;
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
    width: 304px;
    height: 205px;
    
    margin-top: 50px;
`

const DamhwaText = styled.p`
    margin-top: 60px;
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
    margin-top: 26px;

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
    margin-top: 26px;

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
    margin: 30px auto 40px;
    
    width: 430px;
    height: 116px;
    
    box-shadow: rgba(0, 0, 0, 0.16) 0px 0px 3px 0px;
    border-radius: 20px;
`

const RecentDamhwaImg = styled.img`
    width: 160px;
    height: 160px;
`

const Footer = styled.footer`
    margin: 150px 0 100px;
    
    border-top: 1px solid #D1D1D1;
`

const Fnb = styled.div`
    display: flex;
    justify-content: space-between;
`

const SiteName = styled.div`
    margin-bottom: 12px;
    
    font-size: 16px;
    font-weight: 800;
`

const Company = styled.div`
    font-size: 12px;
    font-weight: 500;
    line-height: 1.8;
`

const FooterFnb = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;

    width: 207px;
`

const FooterFnbImg = styled.img`
    width: 35px;
    height: 35px;
`

export default Main;