import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
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

function App() {

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
          {isAlert && (
            <>
              <div>
                <ProfileImg src={img_profile} alt='profile' />
              </div>
              <ImgFrame></ImgFrame>
              <ProfileText>
                <div>pront-end 신입 개발자 박혜민 입니다.</div>
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

        <ProjectTitle>
          <h2>
            PROJECT
          </h2>
          <div></div>
        </ProjectTitle>

        <Project>

          <ProjectWrap>

            <div>
              <ProjectImg>
                <ProjectWrapImg src={img_com} alt="로고" />
                <ProjectHomepageImg src={img_homepage} alt="로고" />
                <ImgShadow></ImgShadow>
              </ProjectImg>
            </div>
            <ProjectText>
              <ProjectNumber>01</ProjectNumber>
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

          <ProjectWrap>
            <ProjectText>
              <ProjectNumber>02</ProjectNumber>
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

          <ProjectWrap>
            <div>
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

          <ProjectWrap>


            <SubProject>
              <SubProjectNumber>04</SubProjectNumber>
              <SubProjectImg src={img_commentlike} alt=""></SubProjectImg>
              <div></div>
              <SubProjectText>
                <h3>Comment, Like</h3>
                <p>
                  Comment를 남길 수 있고 Like버튼을 누르고 취소 할 수 있는 페이지 입니다.
                </p>
                <em>
                  · React
                </em>
                <span></span>
                <button>Github Source code</button>
              </SubProjectText>
            </SubProject>

            <SubProject>
              <SubProjectNumber>05</SubProjectNumber>
              <SubProjectImg src={img_pagination} alt=""></SubProjectImg>
              <div></div>
              <SubProjectText>
                <h3>Comment, Like</h3>
                <p>
                  Comment를 남길 수 있고 Like버튼을 누르고 취소 할 수 있는 페이지 입니다.
                </p>
                <em>
                  · React
                </em>
                <span></span>
                <button>Github Source code</button>
              </SubProjectText>
            </SubProject>


          </ProjectWrap>

        </Project>


        <ProjectTitle>
          <h2>
            CONTACT
          </h2>
          <div></div>
        </ProjectTitle>

        <ContactWrap>
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
            <button>NOTION</button>
            <button>GITHUB</button>
          </StudyPage>
        </ContactWrap>




        <Footer>

          <p>Park Hyemin portfolio</p>

        </Footer>

        {showTopButton && (
          <ScrollContainer>
            <TopButton onClick={scrollToTop} type="button" >Top</TopButton>
          </ScrollContainer>
        )}


      </Body>
    </>
  );
}

export default App;


const SubProject = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;

  width: 500px;
  height: 600px;
  
  border: 1px solid #999;
  border-radius: 20px;

  div{
    border-top: 1px solid #999;
  }
`

const SubProjectText = styled.section`
  display: flex;
  flex-direction: column;

  margin: 20px 28px;
  gap: 14px;

  h3{
    font-size: 22px;
  }
  
  em{
    font-weight: 600;
  }

  button{
    padding: 8px;  

    font-size: 16px;

    border-radius: 10px;
    color: #6E6D70;

    cursor: pointer;
    transition: all 250ms cubic-bezier(.23, 1, 0.32, 1); 
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, .2),
        inset 0 2px 0 hsla(0, 0%, 100%, .1),
        inset 0 1.2em 0 hsla(0, 0%, 100%, 0.1),
        inset 0 -.2em 0 hsla(0, 0%, 100%, .1),
        inset 0 -.28em 0 hsla(0, 0%, 0%, .25),
        0 .25em .25em hsla(0, 0%, 0%, .05);

  &:hover {
    color: #fff;
    background-color: #6E6D70;

    transform: translateY(-2px);
    box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px,
      inset 0 2px 0 hsla(0, 0%, 100%, .1),
      inset 0 1.2em 0 hsla(0, 0%, 100%, 0.1),
      inset 0 -.2em 0 hsla(0, 0%, 100%, .1),
      inset 0 -.28em 0 hsla(0, 0%, 0%, .25),
      0 .25em .25em hsla(0, 0%, 0%, .05);
  }

  &:active {
    box-shadow: none;
    transform: translateY(0);
  }
}
`


const SubProjectNumber = styled.div`
  position: absolute;
  
  font-size: 170px;
  font-weight: 900;
  opacity: .1;
  top: -160px;
  right: 50%;
  z-index: -1;
`

const SubProjectImg = styled.img`
  width: 500px;
  border-radius: 20px 20px 0 0;
`





const Body = styled.body`
  margin: 0 auto;
  
  width: 1100px;
`

const Nav = styled.h1`
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
  left: 98px;
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
 
  gap: 22px;
 
  padding: 0 40px;
 
  font-size: 18px;
  h3{
    font-size: 22px;
  }
  em{
    font-size: 18px;
    font-weight: 600;
  }
  
  button{
    padding: 8px;  

    font-size: 16px;

    border-radius: 10px;
    color: #6E6D70;

    cursor: pointer;
    transition: all 250ms cubic-bezier(.23, 1, 0.32, 1); 
    box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, .2),
        inset 0 2px 0 hsla(0, 0%, 100%, .1),
        inset 0 1.2em 0 hsla(0, 0%, 100%, 0.1),
        inset 0 -.2em 0 hsla(0, 0%, 100%, .1),
        inset 0 -.28em 0 hsla(0, 0%, 0%, .25),
        0 .25em .25em hsla(0, 0%, 0%, .05);

&:hover {
  color: #fff;
  background-color: #6E6D70;

  transform: translateY(-2px);
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px,
    inset 0 2px 0 hsla(0, 0%, 100%, .1),
    inset 0 1.2em 0 hsla(0, 0%, 100%, 0.1),
    inset 0 -.2em 0 hsla(0, 0%, 100%, .1),
    inset 0 -.28em 0 hsla(0, 0%, 0%, .25),
    0 .25em .25em hsla(0, 0%, 0%, .05);
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
  font-weight: 500;
  text-align: center;
  div{
    margin-bottom: 8px;
  }
  
  div:nth-child(1) {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 40px;
  }
  div:nth-child(3){
    margin-bottom: 42px;
  }
`

const Contact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  gap: 8px;
  
  img{
    margin-bottom: 8px;
    
    width: 24px;
    height: 21px;
  }
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
  padding: 14px;  

  font-size: 18px;
  font-weight: 500;

  border-radius: 10px;
  color: #6E6D70;

  cursor: pointer;
  transition: all 250ms cubic-bezier(.23, 1, 0.32, 1); 
  box-shadow: inset 0 0 0 1px hsla(0, 0%, 0%, .2),
    inset 0 2px 0 hsla(0, 0%, 100%, .1),
    inset 0 1.2em 0 hsla(0, 0%, 100%, 0.1),
    inset 0 -.2em 0 hsla(0, 0%, 100%, .1),
    inset 0 -.28em 0 hsla(0, 0%, 0%, .25),
    0 .25em .25em hsla(0, 0%, 0%, .05);

&:hover {
  color: #fff;
  background-color: #6E6D70;

  transform: translateY(-2px);
  box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px,
    inset 0 2px 0 hsla(0, 0%, 100%, .1),
    inset 0 1.2em 0 hsla(0, 0%, 100%, 0.1),
    inset 0 -.2em 0 hsla(0, 0%, 100%, .1),
    inset 0 -.28em 0 hsla(0, 0%, 0%, .25),
    0 .25em .25em hsla(0, 0%, 0%, .05);
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