import { useState } from "react";
import styled from "styled-components";
import Typewriter from 'typewriter-effect';
import './App.css';
import img_profile from './images/img_profile.png'
import ico_html from './images/ico_html.png'
import ico_css from './images/ico_css.png'
import ico_figma from './images/ico_figma.png'
import ico_javascript from './images/ico_javascript.png'
import ico_jquery from './images/ico_jquery.png'
import ico_react from './images/ico_react.png'
import ico_sc from './images/ico_sc.png'
import ico_github from './images/ico_github.png'
import img_logo from './images/img_logo.png'

function App() {

  const [isHover, setIsHover] = useState(false);
  
  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  return (
    <>
      <Body>
        <Nav>
          <Typewriter
            options={{
              strings: ['Park Hyemin Portfolio '],
              autoStart: true,
              loop: true,
              pauseFor: 10000,
            }}
          />
        </Nav>
        <Main>
          <div>
            <ProfileImg src={img_profile} alt='profile' />
          </div>
          <ImgFrame></ImgFrame>
          <ProfileText>
            <div>pront-end 신입 개발자 박혜민 입니다.</div>
            <ProfileTextAbout>
              <div>맡은일에 책임감을 갖고 얻게 되는 배움에 가치를 느낍니다.</div>
              <div>긍정적 사고방식으로 개발과정이 즐겁습니다.</div>
              <div>타인과 융통성 있게 소통합니다.</div>
              <div>강한 의지로 문제해결에 집념이 있습니다.</div>
              <div>꾸준히 새로 습득한 지식을 블로그에 기록합니다.</div>
            </ProfileTextAbout>
          </ProfileText>
        </Main>
          <About>
            <Skill>
              SKILL
              <ul>
                {SKILL_DATA.map((data) => {
                  return (
                    <li
                      isHover={isHover}
                      className={isHover ? "text" : ""}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                      key={data.id}
                    >
                      <SkillIco src={data.imgSrc} alt='' />
                      {/* {isHover && <span style={{display:"block"}}>{data.text}</span>} */}
                    </li>
                  )
                })}
              </ul>
            </Skill>
            <SkillLanguage>
              <li>HTML
                <ul>
                  <li>시멘틱 마크업</li>
                  <li>웹 표준/접근성</li>
                </ul>
              </li>
              <li>CSS
                <ul>
                  <li>Animation</li>
                  <li>Media Query 사용경험</li>
                  <li>styled-components</li>
                </ul>
              </li>
              <li>JAVASCRIPT
                <ul>
                  <li>ES6</li>
                  <li>React</li>
                  <li>Jquery</li>
                </ul>
              </li>
              <li>ETC
                <ul>
                  <li>Figma</li>
                  <li>Github</li>
                  <li>AWS 서버 배포</li>
                </ul>
              </li>
            </SkillLanguage>
            <Experience>
              <section>
                EXPERIENCE
                <div>
                  CERTIFICATE
                </div>
              </section>
              <ExperienceLine></ExperienceLine>
              <section>
                <ExperienceText>
                  Figma활용 UI/UX 퍼블리셔 과정
                </ExperienceText>
                <ExperienceText>
                  웹디자인기능사
                </ExperienceText>
              </section>
            </Experience>
          </About>
          <div>
            <ProjectTitle>
              <h2>
                Project
              </h2>
              <span></span>
            </ProjectTitle>
          </div>


          <Footer>
            <img src={img_logo} alt="로고"/>
            <p>Park Hyemin portfolio</p>
            <img src={img_logo} alt="로고"/>
          </Footer>
      </Body>
    </>
  );
}

export default App;

const ProjectTitle = styled.div`

` 


const Body = styled.body`
  width: 1000px;
  margin: 0 auto;
`

const Nav = styled.h1`
  text-align: center;
  padding: 120px 0; 

  font-size: 40px;
  font-weight: 600;

  border-bottom: 1px solid #6E6D70;
`

const Main = styled.article`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 100px;
`

const ImgFrame = styled.div`
  position: absolute;
  top: 13px;
  left: 50px;

  width: 450px;
  height: 347px;
  
  border: 1px solid #6E6D70;
`

const ProfileText = styled.div`
  text-align: end;

  font-size: 24px;
  font-weight: 500;
`

const ProfileTextAbout = styled.div`
  margin-top: 70px;

  text-align: end;
  
  font-size: 18px;
  font-weight: 400;
  line-height: 2;
`

const ProfileImg = styled.img`
  width: 440px;
  border: 1px solid #6E6D70;
`

const About = styled.ul`
  margin-top: 260px;
`

const Skill = styled.li`
  text-align: center;
  
  font-size: 24px;
  font-weight: 500;
  
  ul{
    display: flex;
    justify-content: center;

    margin: 30px 0 0;
    gap: 47px;
    
    padding: 30px 0;
    
    border-top: 1px solid #6E6D70;
  }
  span{
    position: absolute;
    
    padding: 2px;

    font-size: 14px;
    
    border: 1px solid #6E6D70;
    border-radius: 5px;
  }
`

const SkillIco = styled.img`
  width: 36px;
`

const SkillLanguage = styled.ul`
  display: flex;
  justify-content: space-around;

  margin-top: 80px;
  
  ul{
    margin: 20px 0 0;
    
    padding: 20px 0;
  }
  
  >li{
    font-size: 24px;
    font-weight: 500;
  }
 
  ul>li{
    padding-bottom: 10px;
    font-size: 16px;
    font-weight: 400;
  }
`

const Experience = styled.div`
  margin-top: 100px;

  font-size: 24px;
  font-weight: 500;
  
  section{
    display: grid;
    grid-template-columns: 1fr 1fr;
    
    text-align: center;
    padding: 30px 0 0;
  }
`

const ExperienceText = styled.div`
  font-size: 16px;
  font-weight: 400;
`

const ExperienceLine = styled.div`
  margin: 30px 0 0;
  
  border-bottom: 1px solid #6E6D70;
`










const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
 
  gap: 10px;
  margin-top: 300px;
  padding: 70px 0;

  border-top: 1px solid #6E6D70;
  
  img{
    width: 30px;
  }
`

const SKILL_DATA = [
  {
    id: 1,
    imgSrc: ico_html,
    text: 'HTML',
  },
  {
    id: 2,
    imgSrc: ico_css,
    text: 'CSS',
  },
  {
    id: 3,
    imgSrc: ico_figma,
    text: 'Figma',
  },
  {
    id: 4,
    imgSrc: ico_javascript,
    text: 'Javascript',
  },
  {
    id: 5,
    imgSrc: ico_jquery,
    text: 'Jquery',
  },
  {
    id: 6,
    imgSrc: ico_react,
    text: 'React',
  },
  {
    id: 7,
    imgSrc: ico_sc,
    text: 'Styled-components',
  },
  {
    id: 8,
    imgSrc: ico_github,
    text: 'Github',
  },
  {
    id: 9,
    imgSrc: ico_html,
    text: 'HTML',
  },
]