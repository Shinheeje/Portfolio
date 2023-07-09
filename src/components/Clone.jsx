import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { BsArrowUp } from "react-icons/bs";
function Clone() {
  const goToTopHandler = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <MogakkoWrap>
        <HeaderTitle>Tinder 클론코딩</HeaderTitle>

        <h2>🔗 Link</h2>
        <ProjectLink to={`https://shinheeje.tistory.com/70`}>주요기능 바로보기</ProjectLink>
        <ProjectLink to={`https://github.com/Shinheeje/HanghaeTinder_FE`}>프론트앤드 깃허브 바로가기</ProjectLink>
        <ProjectLink to={`https://shinheeje.tistory.com/79`}>Troubleshooting 바로가기</ProjectLink>

        <h3>✏️ 프로젝트 설명</h3>

        <p>실시간 채팅 기능, 회원가입, 로그인, user 싫어요 기능, user 좋아요 기능, 좋아요 누른 user 확인 filter 기능, 좋아요를 누른 user채팅 목록 들을 클론 코딩 하였습니다.</p>

        <h3>🛠️ 기술 스택</h3>

        <p>React, React-query, Axios, WebSocket, Stomp, Sock.js, React-Router-dom, Styled-component</p>

        <h3>🗣️ 기술적 의사결정</h3>

        <ProjectContentWrap>
          <ProjectContentTitle>Stomp와 Sock.js활용</ProjectContentTitle>
          <ProjectContentDescWrap>
            <DotFlex>
              <Dot /> <p>클라이언트와 서버 간의 상호 운용성을 향상 및 개발자들이 일관된 방식으로 통신할 수 있도록 도와줄 수 있는 Stomp를 사용</p>
            </DotFlex>

            <DotFlex>
              <Dot /> <p>WebSocket호환성과 라이브러리 호환성이 좋은 Sock.js사용</p>
            </DotFlex>
          </ProjectContentDescWrap>
        </ProjectContentWrap>
        <ThinLine />

        <h3>👩🏻‍💻 구현 기능</h3>

        <p>1. Matching Page UI, API 연동 및 Chatting Page UI, 실시간 채팅 기능 구현</p>
        <ImgWrap>
          <img src={`${process.env.PUBLIC_URL}/image/Chat.gif`} alt="" />

          <ImgContentWrap>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> <p><b>Stomp</b> 와 <b>Sock.js</b> 를 이용한 실시간 채팅 기능 구현</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p><b>scrollIntoView</b>를 이용한 스크롤 이벤트 구현</p>
              </DotFlex>
            </ProjectContentDescWrap>
          </ImgContentWrap>
        </ImgWrap>
        <Line></Line>

        <p>2. 로그인, 회원가입 기능 구현</p>
        <ImgWrap>
          <img src={`${process.env.PUBLIC_URL}/image/SignUp.gif`} alt="" />

          <ImgContentWrap>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> <p><b>useRef</b>와 <b>test()</b>메서드를 이용한 유효성 검사 구현</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p>조건부 스타일링을 통한 버튼 구현</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p>프로필 이미지 파일 업로드 및 수정 구현</p>
              </DotFlex>
            </ProjectContentDescWrap>
          </ImgContentWrap>
        </ImgWrap>
        <Line></Line>

        <p>3. Matching Page UI, API 연동</p>

        <ImgWrap>
          <img src={`${process.env.PUBLIC_URL}/image/Matching.gif`} alt="" />

          <ImgContentWrap>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> <p><b>React-query</b> enable옵션을 이용한 동기적인 데이터 처리</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p>React-query 에 내장된 <b>IsLoading</b>을 이용한 Loading Page 구현</p>
              </DotFlex>
            </ProjectContentDescWrap>
          </ImgContentWrap>
        </ImgWrap>
        <Line></Line>
        <Top onClick={() => {
          goToTopHandler()
        }}><Arrow /></Top>
      </MogakkoWrap>
    </>
  )
}

const Line = styled.div`
  height: 1px;
  margin: 42px 0px;
  background-color: rgb(220, 220, 220);
`

const MogakkoWrap = styled.div`
  position: relative;
  margin-top: 65px;
  h2 {
    font-size: 22px;
    font-weight: 600;
    margin-top: 10px;
    color: rgb(252, 131, 108);
    font-family: 'Pretendard';
  }

  h3 {
    margin-top: 40px;
    margin-bottom: 5px;
    font-weight: 600;
    font-family: 'Pretendard';
  }

  p {
    font-family: 'Pretendard';
  }

  img {
    width: 480px;
    height: 330px;
  }
`
const Top = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    z-index: 1;
    position: fixed;
    bottom: 150px;
    right: 250px;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    &:hover {
        transition: 0.3s;
        transform: scale(1.03);
    }
    &:active {
        transition: 0.2s;
        transform: scale(1);
    }
`

const Arrow = styled(BsArrowUp)`
  font-size: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: rgb(252, 131, 108);
`

const UserFidback = styled.p`
  margin-top: 10px;
  font-size: 14px;
  color: rgb(133, 133, 133);
  font-weight: 600;
`

const HeaderTitle = styled.h1`
  padding: 10px 0px;
  font-size: 2.25em;
  font-weight: 600;
  color: rgb(252, 131, 108);
  font-family: 'Pretendard';
`

const ProjectLink = styled(Link)`
  display: block;
  color: rgb(252, 131, 108);
  font-family: 'Pretendard';
  font-weight: 600;
  margin-top: 5px;
`

const Dot = styled.span`
  width: 5px;
  height: 5px;
  background-color: rgb(252, 131, 108);
  border-radius: 50%;
  margin-right: 7px;
  position: absolute;
  top: 7px;
  left: -10px;
`

const DotFlex = styled.div`
  display: flex;
  align-items: center;
  gap: 7px;
  position: relative;
`

const ThinLine = styled.div`
  height: 1px;
  margin: 22px 0px;
  background-color: rgb(220, 220, 220);
`

const ProjectContentWrap = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-start;
`

const ImgContentWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

const ProjectContentTitle = styled.p`
  width: 260px;
  font-weight: 600;
  font-family: 'Pretendard';
  margin-right: 15px;
`

const ProjectContentDescWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const ImgWrap = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: flex-start;
  gap: 50px;
  margin-block: 20px;
  margin-bottom: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export default Clone