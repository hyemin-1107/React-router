import React from "react";
import styled from "styled-components";
import home_icon from '../../../images/subscribeImage/home_icon.png'
import conversation_icon from '../../../images/subscribeImage/conversation_icon.png'
import setting_icon from '../../../images/subscribeImage/setting_icon.png'
import setting_profile from '../../../images/subscribeImage/setting_profile.png'
import changing_information_icon from '../../../images/subscribeImage/changing_information_icon.png'
import icon_right_arrow from '../../../images/subscribeImage/icon_right_arrow.png'
import language_icon from '../../../images/subscribeImage/language_icon.png'
import translation_icon from '../../../images/subscribeImage/translation_icon.png'
import alarm_icon from '../../../images/subscribeImage/alarm_icon.png'
import message_icon from '../../../images/subscribeImage/message_icon.png'
import mail_icon from '../../../images/subscribeImage/mail.icon.png'

const Setting = (props) => {

    const { navStateHandle } = props;

    return (
        <>
            <SettingHeader>설정</SettingHeader>
            <SettingProfile>
                <SettingProfileImg src={setting_profile} alt="프로필사진"/>
                <SettingProfileName>
                    이름
                    <div>연락처 정보</div>
                </SettingProfileName>
                <SettingProfileChangingInformation>
                    <ChangingInformationImg src={changing_information_icon} alt="정보수정"/>
                    정보 수정하기
                </SettingProfileChangingInformation>
            </SettingProfile>
            <Line></Line>
            <Preferences>
                <PreferencesInfo>상담 환경</PreferencesInfo>
                <SettingDetail>
                    <SettingLabel>
                        <SettingIcon src={language_icon} alt="언어"/>
                        언어
                    </SettingLabel>
                    <SettingLanguage>
                        한국어
                        <Arrow src={icon_right_arrow} alt="화살표"/>
                    </SettingLanguage>
                </SettingDetail>
                <SettingDetail>
                    <SettingLabel>
                        <SettingIcon src={translation_icon} alt="번역"/>
                        메세지 번역 표시
                    </SettingLabel>
                    <input type="checkbox" />
                </SettingDetail>
                <SettingDetail>
                    <SettingLabel>
                        <SettingIcon src={alarm_icon} alt="알림"/>
                        알림음
                    </SettingLabel>
                    <input type="checkbox" />
                </SettingDetail>
            </Preferences>
            <Line></Line>
            <Preferences>
                <PreferencesInfo>상담 환경</PreferencesInfo>
                <SettingDetail>
                    <SettingLabel>
                        <SettingIcon src={message_icon} alt="문자 수신 거부"/>
                        문자 수신 거부
                    </SettingLabel>
                    <input type="checkbox" />
                </SettingDetail>
                <SettingDetail>
                    <SettingLabel>
                        <SettingIcon src={mail_icon} alt="이메일 수신 거부"/>
                        이메일 수신 거부
                    </SettingLabel>
                    <input type="checkbox" />
                </SettingDetail>
            </Preferences>
            <PcKakaoNav>
                <PcKakaoHome onClick={() => navStateHandle("home")}><PcKakaoIcon src={home_icon} alt="홈"/>홈</PcKakaoHome>
                <PcKakaoConversation onClick={() => navStateHandle("conversation")}><PcKakaoIcon src={conversation_icon} alt="대화"/>대화</PcKakaoConversation>
                <PcKakaoSetting onClick={() => navStateHandle("setting")}><PcKakaoIcon src={setting_icon} alt="설정"/>설정</PcKakaoSetting>
            </PcKakaoNav>
        </>
    )
};


const SettingHeader = styled.h2`
    padding: 2px 26px;

    font-size: 24px;
    font-weight: 600;
`

const SettingProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    text-align: center;
    
    padding: 0 24px 16px;
    
    width: 100%;
    height: 170px;
    
    box-sizing: border-box;
`

const SettingProfileImg = styled.img`
    width: 56px;
    height: 56px;
    
    border-radius: 20px;
`

const SettingProfileName = styled.div`
    font-size: 18px;
    color: #00000066;

    div{
        font-size: 13px;
    }
`

const SettingProfileChangingInformation = styled.div`
    display: flex;
    align-items: center;
    
    gap: 3px;
    padding: 3px 6px;
    
    font-size: 13px;
    font-weight: 500;

    color: #00000099;
    background-color: rgb(0 0 0 / 5%);
    border-radius: 10px;

    cursor: pointer;
    
    &:hover{
        background-color: rgb(0 0 0 / 10%); 
    }
`

const ChangingInformationImg = styled.img`
    padding-top: 1px;
    
    width: 14px;
    height: 14px;
`

const Line = styled.hr`
    margin: 10px 6px 4px;
    
    border: solid 1px #00000011;
`

const PcKakaoNav = styled.div`
    position: absolute;
    bottom: 4px;
    
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    
    text-align: center;

    margin-top: 60px;

    width: 100%;
    height: 60px;
`

const PcKakaoHome = styled.div`
    width: 100%;

    font-size: 13px;
    color: #00000066;

    cursor: pointer;    

    &:hover{
        font-weight: 500;
        color: rgb(81, 151, 242);
    }
`

const PcKakaoConversation = styled.div`    
    width: 100%;

    font-size: 13px;
    color: #00000066;
    
    cursor: pointer;    
    
    &:hover{
        font-weight: 500;
        color: rgb(81, 151, 242);
    }
`

const PcKakaoSetting = styled.div`
    width: 100%;

    font-size: 13px;
    font-weight: 500;
    color: rgb(81, 151, 242);
    
    cursor: pointer;
`

const PcKakaoIcon = styled.img`
    display: block;

    margin: 0 auto 3px;

    width: 20px;
    height: 20px;
`

const Preferences = styled.div`
    font-size: 15px;
    
    color: #00000088;
`

const PreferencesInfo = styled.div`
    padding: 8px 18px;

    font-size: 13px;
`

const SettingDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 8px 24px 8px 20px;
`

const SettingLabel = styled.div`
    display: flex;
    align-items: center;

    gap: 10px;

    color: #000;
`
const SettingLanguage = styled.div`
    display: flex;
    align-items: center;

    color: #00000099;

    cursor: pointer;
`

const Arrow = styled.img`
    width: 24px;
    height: 24px;
`

const SettingIcon = styled.img`
    width: 18px;
    height: 18px;
`

export default Setting;