import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Observation from "./hook/Observation";

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
// import img_logo from './images/img_logo.png'
import img_com from './images/img_com.png'
import img_homepage from './images/img_homepage.png'
import img_portfolio from './images/img_portfolio.png'
import img_pagination from './images/img_pagination.png'
import img_commentlike from './images/img_commentlike.png'
import ico_phone from './images/ico_phone.png'
import ico_mail from './images/ico_mail.png'
import ico_notion from './images/ico_notion.png'
import ico_notionhover from './images/ico_notionhover.png'
import ico_contactgithub from './images/ico_contactgithub.png'
import ico_githubhover from './images/ico_githubhover.png'

function App() {
  const [activeId, setActiveId] = useState("");
  Observation(setActiveId);

  const [isHover, setIsHover] = useState(false);

  const [isAlert, setisAlert] = useState(false);

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    setTimeout(() => { setisAlert(true) }, 2000);
  })

  const handleMouseOver = () => {
    setIsHover(true);
  };

  const handleMouseOut = () => {
    setIsHover(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const handleTopButton = () => {
      if (window.scrollY > 500) {
        setShowTopButton(true)
      } else {
        setShowTopButton(false)
      }
    }
    window.addEventListener("scroll", handleTopButton)
    return () => {
      window.removeEventListener("scroll", handleTopButton)
    }
  }, [])

  





  return (
    <>
      <Body>
        <Header>
          <Typewriter
            options={{
              strings: ['Park Hyemin Portfolio '],
              autoStart: true,
              loop: true,
              pauseFor: 10000,
            }}
          />
        </Header>

        <Main>
          {isAlert && (
            <>
              <div>
                <ProfileImg src={img_profile} alt='profile' />
              </div>
              <ImgFrame></ImgFrame>
              <ProfileText>
                <div>Front-End 신입 개발자 박혜민 입니다.</div>
                <ProfileTextAbout>
                  <div>맡은 일에 책임감을 갖고 얻게 되는 배움에 가치를 느낍니다.</div>
                  <div>긍정적 사고방식으로 개발과정이 즐겁습니다.</div>
                  <div>타인과 융통성 있게 소통합니다.</div>
                  <div>강한 의지로 문제해결에 집념이 있습니다.</div>
                  <div>꾸준히 새로 습득한 지식을 블로그에 기록합니다.</div>
                </ProfileTextAbout>
              </ProfileText>
            </>
          )}
        </Main>
        {showTopButton && (
          <Nav>
           
              <a href="#nav_skill" className={`nav__items ${activeId === "content_skill" ? "active" : ""}`}>
              · Skill
              </a>
            
           
                  <a href="#nav_subproject" className={`nav__items ${activeId === "content_subproject" ? "active" : ""}`}>
              · Sub Project
              </a>
           
            
                  <a href="#nav_projectclone" className={activeId === "content_clone" ? "active" : ""}>
              · Clone Coding
              </a>
          
         
                  <a href="#nav_projectportfolio" className={activeId === "content_portfolio" ? "active" : ""}>
              · Portfolio
              </a>
         
                  <a href="#nav_projectaws" className={activeId === "content_aws" ? "active" : ""}>
              · AWS 배포
              </a>
           
         
                  <a href="#nav_contact" className={activeId === "content_contact" ? "active" : ""}>
                  · Contact
              </a>
           
                {/* <li></li>
                <li></li>
                <li></li>
            <li></li> */}
          </Nav>
        )}
        <About>
          <Skill id="nav_skill">
            SKILL
            <ul id="content_skill">
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

        <ProjectTitle >
          <h2 id="nav_subproject">
            PROJECT
          </h2>
          <div></div>
        </ProjectTitle>

        <Project>

          <ProjectWrap id="content_subproject">

            <SubProject>
              <SubProjectNumber>01</SubProjectNumber>
              <SubProjectImg src={img_commentlike} alt=""></SubProjectImg>
              <div></div>
              <SubProjectText>
                <h3>Comment, Like · React</h3>
                <p>
                · Comment를 남길 수 있고 Like버튼을 누르고 취소 할 수 있는 <br />페이지 입니다.
                </p>
                <span> 댓글을 저장할 state 생성 </span>
                <span> 댓글, e.target.value를 state에 저장하는 onChange 함수 작성</span>
                <span> onChange 함수를 댓글 입력 input tag에 적용</span>
                <span> Button을 클릭 시, input 내용을 저장</span>
                <span> @ant-design/icons import, 클릭시 체크되고 해제되는 state 작성</span>
                <button>Github Source code</button>
              </SubProjectText>
            </SubProject>

            <SubProject>
              <SubProjectNumber>02</SubProjectNumber>
              <SubProjectImg src={img_pagination} alt=""></SubProjectImg>
              <div></div>
              <SubProjectText>
                <h3>Login, Pagination · React</h3>
                <p>
                · Login을 하면 다음 페이지로 이동하며 받아온 외부API를 Modal창과 Pagination으로 랜더링 합니다. 
                </p>
                <span>ID와 PW를 저장 state 생성, onChange 함수를 input tag에 적용</span>
                <span>ID와 PW를 비교하는 함수 작성, 일치하면 main page, 틀릴시 alert()</span>
                <span>useState로 현재 페이지 limit 설정, fetch로 API 호출</span>
                <span>버튼 컴포넌트를 Styled-components로 조건부 스타일링 설정</span>
                <span>index 클릭 시 Modal창에 해당 데이터가 자세히 보여지도록 구현</span>
                <button>Github Source code</button>
              </SubProjectText>
            </SubProject>


          </ProjectWrap>
          <ProjectWrap id="nav_projectclone">

            <div id="content_clone">
              <ProjectImg>
                <ProjectWrapImg src={img_com} alt="로고" />
                <ProjectHomepageImg src={img_homepage} alt="로고" />
                <ImgShadow></ImgShadow>
              </ProjectImg>
            </div>
            <ProjectText>
              <ProjectNumber>03</ProjectNumber>
              <h3>
                Sooldamhwa Homepage clone coding
              </h3>
              <p>
                전통주를 소개하고 구독 시스템을 통해
                매달 집으로 배송 해주는 사이트 입니다.
              </p>
              <span>
                메인페이지, 구독페이지, 로그인페이지 구현
              </span>
              <em>
                · React
              </em>
              <button>Go To</button>
              <button>Notion Review</button>
              <button>Github Source code</button>
            </ProjectText>
          </ProjectWrap>

          <ProjectWrap id="nav_projectportfolio">
            <ProjectText id="content_portfolio">
              <ProjectNumber>04</ProjectNumber>
              <h3>
                Portfolio Site
              </h3>
              <p>
                전통주를 소개하고 구독 시스템을 통해
                매달 집으로 배송 해주는 사이트 입니다.
              </p>
              <span>
                메인페이지, 구독페이지, 로그인페이지 구현
              </span>
              <em>
                · React
              </em>
              <button>Go To</button>
              <button>Notion Review</button>
              <button>Github Source code</button>
            </ProjectText>
            <div>
              <ProjectImg>
                <ProjectWrapImg src={img_com} alt="로고" />
                <ProjectHomepageImg src={img_portfolio} alt="로고" />
                <ImgShadow></ImgShadow>
              </ProjectImg>
            </div>
          </ProjectWrap>

          <ProjectWrap id="nav_projectaws">
            <div id="content_aws">
              <ProjectImg>
                <ProjectWrapImg src={img_com} alt="로고" />
                <ProjectHomepageImg src={img_homepage} alt="로고" />
                <ImgShadow></ImgShadow>
              </ProjectImg>
            </div>
            <ProjectText>
              <ProjectNumber>05</ProjectNumber>
              <h3>
                Sooldamhwa Homepage clone coding
              </h3>
              <p>
                전통주를 소개하고 구독 시스템을 통해
                매달 집으로 배송 해주는 사이트 입니다.
              </p>
              <span>
                메인페이지, 구독페이지, 로그인페이지 구현
              </span>
              <em>
                · React
              </em>
              <button>Go To</button>
              <button>Notion Review</button>
              <button>Github Source code</button>
            </ProjectText>
          </ProjectWrap>


        </Project>


        <ProjectTitle id="nav_contact">
          <h2>
            CONTACT
          </h2>
          <div></div>
        </ProjectTitle>

        <ContactWrap id="content_contact">
          <ContactBox>
            <div>저의 포트폴리오를 봐주셔서 감사합니다.</div>
            <Contact>
              <img src={ico_phone} alt=""></img>
              <div>PHONE</div>
            </Contact>
            <div>010 4042 0706</div>
            <Contact>
              <img src={ico_mail} alt=""></img>
              <div>MAIL</div>
            </Contact>
            <div>hyem92.11.07@gmail.com</div>
          </ContactBox>
          <StudyPage>
            <p>더 많고 자세한 저의 기록들이 있습니다.</p>
            <button>
              <ContactImg src={ico_notion} alt="" />
              <ContactImgHover src={ico_notionhover} alt="" />
              NOTION</button>
            <button>
              <ContactImg src={ico_contactgithub} alt="" />
              <ContactImgHover src={ico_githubhover} alt="" />
              GITHUB</button>
          </StudyPage>
        </ContactWrap>




        <Footer>

          <p>Park Hyemin portfolio</p>

        </Footer>

        {showTopButton && (
          <ScrollContainer>
            <TopButton onClick={scrollToTop} type="button">Top</TopButton>
          </ScrollContainer>
        )}


      </Body>
    </>
  );
}

export default App;










const Body = styled.body`
  margin: 0 auto;
  
  width: 1100px;
`

const Header = styled.h1`
  text-align: center;
  
  padding: 140px 0; 

  font-size: 40px;
  font-weight: 600;

  border-bottom: 1px solid #6E6D70;
`

const Main = styled.article`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin: 100px 0;
 
 height: 328px;
`

const fadeInLeft = keyframes`
	0% {
		opacity: 0;
		transform: translate3d(-5%, 0, 0);
    /* transition-delay: calc(var(--delay)* .5s); */
	}
	100% {
		opacity: .9;
		transform: translateZ(0);
	}
`

const ProfileImg = styled.img`
  width: 440px;
  
  border: 1px solid #6E6D70;
  opacity: .9;

  animation: ${fadeInLeft} 2s ease-out;
`

const fadeInRight = keyframes`
	0% {
		opacity: 0;
		transform: translate3d(30%, 0, 0);
    /* transition-delay: calc(var(--delay)* .5s); */
	}
	100% {
		opacity: 1;
		transform: translateZ(0);
	}
`

const ImgFrame = styled.div`
  position: absolute;
  top: 13px;
  left: 75px;

  width: 450px;
  height: 347px;
  
  border: 1px solid #6E6D70;
  animation: ${fadeInRight} 2s ease-out;
`

const fadeIn = keyframes`
	0% {
		opacity: 0;
	}
	100% {
    opacity: 1;
	}
  `

const ProfileText = styled.div`
  text-align: end;
  
  font-size: 24px;
  font-weight: 500;
  
  animation: ${fadeIn} 2s ease-out;
`

const ProfileTextAbout = styled.div`
  margin-top: 70px;

  text-align: end;
  
  font-size: 18px;
  font-weight: 400;
  line-height: 2;
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

const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  
  margin-top: 300px;
  gap : 20px;
  
  h2{
    font-size: 30px;
    font-weight: 600;
  }
  
  div{
    margin-top: 5px;
   
    width: 100%;  
    
    border-bottom: 1px solid #6E6D70;
  }
`


const ProjectWrap = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  margin-top: 180px;
`

const SubProject = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;


  width: 510px;
  height: 630px;
  
  border: 1px solid #6E6D70;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px, rgba(0, 0, 0, 0.1) 0px 7px 13px -3px, rgba(0, 0, 0, 0.1) 0px -4px 0px inset;

  div{
    /* border-top: 1px solid #999; */
  }
`

const SubProjectText = styled.section`
  display: flex;
  flex-direction: column;

  margin: 0 32px;
  gap: 8px;

  h3{
    font-size: 22px;
  }

  p{
    margin: 8px 0 12px 0;
  } 

  span{
    line-height: 1;
    font-size: 15px;
  }

  button{
  margin-top: 14px;
  padding: 6px;
  
  font-size: 16px;
  
  box-sizing: border-box;
  color: #6E6D70;
  background-color: #fff;
  border: 1px solid #6E6D70;
  border-radius: 3px;
  
  transition: all 200ms cubic-bezier(.23, 1, 0.32, 1);
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #6E6D70;
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
    transform: translateY(-2px);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
}
`


const SubProjectNumber = styled.span`
  position: absolute;
  
  font-size: 170px;
  font-weight: 900;
  opacity: .1;
  top: -160px;
  right: 50%;
  z-index: -1;
`

const SubProjectImg = styled.img`
  width: 510px;
  height: 310px;
  border-radius: 20px 20px 0 0;
`




const Project = styled.article`
  display: flex;
  flex-direction: column;
  
  gap: 200px;
`


const ProjectImg = styled.div`
  position: relative;
`

const ProjectWrapImg = styled.img`
  position: relative;
  
  width: 600px;
  height: 410px;
`

const ProjectHomepageImg = styled.img`
  position: absolute;
  top: 20px;
  left: 57px;
  
  width: 496px;
  height: 271px;
`

const ImgShadow = styled.div`
  position: absolute;
  bottom: -10px;
  left: 99px;
  z-index: -1;
  
  width: 398px;
  height: 27px;
  
  box-shadow: 10px 10px 10px rgba(0,0,0,.2);
  /* background-color: rgba(0,0,0,.2); */
  border-radius: 100%;
`

const ProjectText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  gap: 18px;
 
  padding: 0 40px;
 
  font-size: 18px;
  h3{
    margin-bottom: 8px;
    font-size: 22px;
  }
  em{
    margin-bottom: 14px;
    font-size: 18px;
    font-weight: 600;
  }
  
  button{
  padding: 6px;
  
  font-size: 16px;
  
  box-sizing: border-box;
  color: #6E6D70;
  background-color: #fff;
  border: 1px solid #6E6D70;
  border-radius: 3px;
  
  transition: all 200ms cubic-bezier(.23, 1, 0.32, 1);
  cursor: pointer;

&:hover {
  color: #fff;
  background-color: #6E6D70;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-2px);
}

&:active {
  box-shadow: none;
  transform: translateY(0);
}
}
`


const ProjectNumber = styled.div`
  position: absolute;
  
  font-size: 170px;
  font-weight: 900;
  opacity: .1;
  top: -140px;
  right: 48%;
  z-index: -1;
`

const ContactWrap = styled.section`
  display: flex;
  justify-content: space-around;
  
  margin: 150px 0;
`

const ContactBox = styled.div`
  
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  div{
    margin-bottom: 6px;
  }
  
  div:nth-child(1) {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 42px;
  }
  div:nth-child(3){
    margin-bottom: 40px;
  }
`

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  gap: 8px;
  
  img{
    margin-bottom: 6px;
    
    width: 23px;
    height: 21px;
  }
`


const ContactImg = styled.img`
  width: 21px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ContactImgHover = styled.img`
  width: 21px;
  display: none;
`

const StudyPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  font-size: 18px;

p{
  margin-bottom: 8px;
}

button{
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 6px;
  padding: 14px;  

  font-size: 18px;
  font-weight: 500;

  border-radius: 10px;
  color: #6E6D70;

  cursor: pointer;
  transition: all .15s cubic-bezier(.23, 1, 0.32, 1); 
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, .2),
    inset 0 2px 0 hsla(0, 0%, 100%, .1),
    inset 0 1.2em 0 hsla(0, 0%, 100%, 0.1),
    inset 0 -.2em 0 hsla(0, 0%, 100%, .1),
    inset 0 -.28em 0 hsla(0, 0%, 0%, .1),
    0 .25em .25em hsla(0, 0%, 0%, .05);

&:hover {
  color: #fff;
  background-color: #6E6D70;

  transform: translateY(-1px);
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px,
    inset 0 2px 0 hsla(0, 0%, 100%, .1),
    inset 0 1.2em 0 hsla(0, 0%, 100%, 0.1),
    inset 0 -.2em 0 hsla(0, 0%, 100%, .1),
    inset 0 -.28em 0 hsla(0, 0%, 0%, .1),
    0 .25em .25em hsla(0, 0%, 0%, .05);
    :first-child{
      display: none;
    }
    :nth-child(2){
      display: block;
    }
}

&:active {
  box-shadow: none;
  transform: translateY(0);
}
}
`







const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
 
  gap: 10px;
  margin-top: 250px;
  padding: 70px 0;

  border-top: 1px solid #6E6D70;
  
  img{
    width: 30px;
  }
`


const ScrollContainer = styled.div`
  position: fixed;
  bottom: 60px;
  right: 60px;
  z-index: 10;
`

const TopButton = styled.button`
  padding: 16px 16px;
  
  min-height: 60px;
  
  font-size: 16px;
  font-weight: 500;
  
  box-sizing: border-box;
  color: #6E6D70;
  border: 1px solid #6E6D70;
  border-radius: 50%;
  
  transition: all 300ms cubic-bezier(.23, 1, 0.32, 1);
  cursor: pointer;
  animation: ${fadeInRight} 2s ease-out;

&:hover {
  color: #fff;
  background-color: #6E6D70;
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
  transform: translateY(-4px);
}

&:active {
  box-shadow: none;
  transform: translateY(0);
}
`

const Nav = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 12px;
  /* background-color: beige; */
  right: 0;
  top: 250px;
  animation: ${fadeInRight} 2s ease-out;
  z-index: 100;
`
  /* li{
    font-weight: 500;
    padding: 10px;
    color: #6E6D70;
    cursor: pointer;

} */
// .active{
//       text-decoration: underline;
//     }
// `




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
]