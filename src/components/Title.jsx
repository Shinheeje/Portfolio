import React, { useEffect, useMemo, useState } from 'react'
import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';
function Title() {

  return (
    <>
      <TitleWrap>
        <IntroduceWrap>
          <IntroduceName>
            신희제 <span>(Heeje Shin)</span>
          </IntroduceName>
        </IntroduceWrap>
        <ImageWrap>
          <Image image={`${process.env.PUBLIC_URL}/image/Photo.jpg`} />
          <div>
            <ContactWrap>
              <h1>Contact</h1>
              <ContactItem>
                <p>Phone.</p>
                <span>010-7536-2636</span>
              </ContactItem>
              <ContactItem>
                <p>Email.</p>
                <ContactLink>tlsgmlwp37@gmail.com</ContactLink>
              </ContactItem>
              <ContactItem>
                <p>Github.</p>
                <ContactLink to={'https://github.com/Shinheeje'}>https://github.com/Shinheeje</ContactLink>
              </ContactItem>
              <ContactItem>
                <p>Blog.</p>
                <ContactLink to={'https://shinheeje.tistory.com/'}>https://shinheeje.tistory.com/</ContactLink>
              </ContactItem>
              <ContactItem>
                <p>Portfolio.</p>
                <ContactLink to={'https://shinheeje.vercel.app/'}>https://shinheeje.vercel.app/</ContactLink>
              </ContactItem>
            </ContactWrap>
            <SkillWrap>
              <h1>Skill</h1>
              <SkillItem>
                <p>Front-End.</p>
                <span>Js(ES6), React(v18), HTML,CSS, Styled-component, Openvidu, webRTC</span>
              </SkillItem>
              <SkillItem>
                <p>Tools.</p>
                <span>Figma, Git, Github</span>
              </SkillItem>
            </SkillWrap>
          </div>
        </ImageWrap>
      </TitleWrap>
      <Line></Line>
    </>
  )
}


const Line = styled.div`
  height: 1px;
  margin: 42px 0px;
  background-color: rgb(220, 220, 220);
`

const TitleWrap = styled.div`
  height: 350px;
  margin-top: 65px;
`

const IntroduceWrap = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 100%;
    background-color: #FC836C;
  }
`

const IntroduceName = styled.h1`
  font-family: 'Pretendard';
  font-size: 32px;
  font-weight: 700;
  position: relative;
  margin-left: 12px;
  span {
      font-family: 'Pretendard';
      font-size: 18px;
      font-weight: 700;
  }
`

const ImageWrap = styled.div`
  display: flex;
`

const Image = styled.div`
  width: 250px;
  height: 250px;
  margin: 20px;
  background-image: ${(props) =>
    `url('${props.image}')`
  };
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`

const ContactWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  margin-left: 15px;
  h1 {
    color: rgb(252, 131, 108);
    font-size: 1.3em;
    font-weight: 600;
    font-family: 'Pretendard';
  }
`

const ContactItem = styled.div`
  display: flex;
  
  p {
    font-weight: 500;
    width: 100px;
    font-family: 'Pretendard';
  }

  span {
    cursor: pointer;
    font-size: 12px;
    color: rgb(151, 151, 151);
    text-decoration: underline;
    font-family: 'Pretendard';
  }
`

const ContactLink = styled(Link)`
  font-size: 14px;
  color: rgb(151, 151, 151);
  text-decoration: underline;
  font-family: 'Pretendard';
`

const SkillWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
  margin-left: 15px;
  h1 {
    color: rgb(252, 131, 108);
    font-size: 1.3em;
    font-weight: 600;
    font-family: 'Pretendard';
  }
`

const SkillItem = styled.div`
  display: flex;
  align-items: end;
  p {
    font-weight: 500;
    width: 100px;
    font-family: 'Pretendard';
  }

  span {
    font-size: 12px;
    color: rgb(151, 151, 151);
    font-family: 'Pretendard';
  }
`

export default Title