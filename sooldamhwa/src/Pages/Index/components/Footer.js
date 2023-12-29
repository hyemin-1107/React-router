import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import Instargram from '../../../images/mainImage/icon_instagram.png'
import Youtube from '../../../images/mainImage/icon_youtube.png'
import Kakao from '../../../images/mainImage/icon_kakao.png'
import Facebook from '../../../images/mainImage/icon_facebook.png'
import Naver from '../../../images/mainImage/icon_naver.png'

const Footer = () => {

    const navigate = useNavigate();

    return (
        <Footercontents>
            <FooterInfo>
                <Fnb>
                    <div>
                        <SiteName>담화컴퍼니 주식회사</SiteName>
                        <Company>고객센터 : 070-5014-1282</Company>
                        <Company>평일 10:00 - 18:00, 주말 휴무</Company>
                    </div>
                    <FooterFnb>
                        {FNB_ICON.map((el) => {
                            return (
                                <>
                                    <a href={el.link} target='_blank' rel="noreferrer"><FooterFnbImg src={el.src}></FooterFnbImg></a>
                                </>
                            )
                        })}
                    </FooterFnb>
                </Fnb>

                <FooterTerms>
                    {COMPANY_TERMS.map((el) => {
                        return (
                            <>
                                <div onClick={() => { navigate(""); }}>{el.Term}</div>
                            </>
                        )
                    })}
                </FooterTerms>

                <CompanyInformationText>
                    <span>대표 : 이재욱</span>
                    <span>사업자등록번호 : 620-81-58299</span>
                    <div onClick={() => { navigate(""); }}> 사업자확인 </div>
                    <span>통신판매 신고번호: 2021-서울서초-2084</span>
                </CompanyInformationText>
                <CompanyInformationText>
                    <span>주소 : 서울특별시 서초구 강남대로65길 10, 8층 술담화</span>
                    <span>정보보호 책임자 : 박준형</span>
                    <span> 대표 전화 : 070-5014-1282 </span>
                    <span>이메일 : info@sooldamhwa.com</span>
                </CompanyInformationText>

                <SubscriptionInformation>
                    <p>
                        술담화는 통신판매중개자로서 통신판매 당사자가 아니며, 판매자가 등록한 상품정보 및 거래에 대해 술담화는 책임을 지지 않습니다. <br />
                        고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한 NICE구매안전 (에스크로) 서비스를 이용하실 수 있습니다.
                    </p>
                    <div onClick={() => { navigate(""); }}>서비스가입사실 확인</div>
                </SubscriptionInformation>

            </FooterInfo>
        </Footercontents>
    )
};


const Footercontents = styled.footer`
    margin: 150px 0 100px;
    
    border-top: 1px solid #D1D1D1;
`

const FooterInfo = styled.div`
    margin: 0 auto;
    padding-top: 30px;
    
    width: 1240px;

    color: #3E3E3E;
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

    cursor: pointer;
`

const FooterTerms = styled.div`
    display: flex;

    gap: 20px;
    margin: 24px 0;
    
    font-size: 12px;
    font-weight: 800;

    div{
        cursor: pointer;
    }
`

const CompanyInformationText = styled.div`
    display: flex;

    gap: 12px;
    margin-bottom: 4px;

    font-size: 12px;
    font-weight: 600;
    
    color: #707070;
    div{
        text-decoration: underline;
        cursor: pointer;
    }
`

const SubscriptionInformation = styled.div`
    margin-top: 20px;

    font-size: 12px;
    font-weight: 500;

    color: #B2B2B2;
    div{  
        text-decoration: underline;
        cursor: pointer;
    }
`

const FNB_ICON = [
    {
        id: 1,
        src: Instargram,
        alt: "인스타 채널",
        link: "https://www.instagram.com/sooldamhwa/?hl=ko",
    
    },
    {
        id: 2,
        src: Youtube,
        alt: "유튜브 채널",
        link:"https://www.youtube.com/channel/UCuhTvdO3VD-S3md_CkWYtbw",
    },
    {
        id: 3,
        src: Kakao,
        alt: "카카오 채널",
        link:"https://pf.kakao.com/_xktAgj"
    },
    {
        id: 4,
        src: Facebook,
        alt: "페이스북 채널",
        link: "https://www.facebook.com/sooldamhwa",

    },
    {
        id: 5,
        src: Naver,
        alt: "네이버 채널",
        link:"https://blog.naver.com/sooldamhwa",
    },
];

const COMPANY_TERMS = [

    {
        id: 1,
        Term: "이용약관",

    },
    {
        id: 2,
        Term: "개인정보처리방침",

    },
    {
        id: 3,
        Term: "입점문의",

    },

];

export default Footer;