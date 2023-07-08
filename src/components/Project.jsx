import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';
import { useNavigate } from 'react-router-dom';
function Project() {
  const navigate = useNavigate()

  return (
    <>
      <ProjectWrap>
        <h1>Project.</h1>

        <ProjectTitleWrap>
          <h2 onClick={() => {
            navigate('/Mogakko')
            window.scrollTo(0, 0)
          }}>[모각코 ON:]</h2>
          <ProjectLink to={'https://mogakko-on.vercel.app/'}>https://mogakko-on.vercel.app/</ProjectLink>
        </ProjectTitleWrap>
        <ProjectDesc>개발자들을 위한 화상채팅 플랫폼</ProjectDesc>
        <ProjectContentBox>
          <ProjectContentWrap>
            <ProjectContentTitle>팀 프로젝트</ProjectContentTitle>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> FE:(3명), BE:(4명), DE:(1명)
              </DotFlex>
            </ProjectContentDescWrap>
          </ProjectContentWrap>
          <ThinLine />

          <ProjectContentWrap>
            <ProjectContentTitle>프로젝트 기간</ProjectContentTitle>
            <ProjectContentDescWrap>
              <p>23.05.19 ~ 23.06.29 (6주) (설계 및 기획 1주, 구현 3주, 피드백 1주, 개선 1주) </p>
            </ProjectContentDescWrap>
          </ProjectContentWrap>
          <ThinLine />

          <ProjectContentWrap>
            <ProjectContentTitle>사용한 기술스택</ProjectContentTitle>
            <ProjectContentDescWrap>
              <p>React, React-query, Open-vidu, Monaco-Editor, Axios, WebSocket, Stomp, Sock.js, React-Router-dom, Redux, Redux-toolkit, Redux-thunk, Styled-components, react-toastify</p>
            </ProjectContentDescWrap>
          </ProjectContentWrap>
          <ThinLine />

          <ProjectContentWrap>
            <ProjectContentTitle>구현기능</ProjectContentTitle>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> Openvidu를 이용한 실시간 화상채팅 기능 구현
              </DotFlex>

              <DotFlex>
                <Dot /> Stomp, Sock.js을 이용한 실시간 채팅 기능 구현
              </DotFlex>

              <DotFlex>
                <Dot /> SSE를 활용한 실시간 알림 기능
              </DotFlex>

              <DotFlex>
                <Dot /> 유저피드백 반영 - 사용자 테스트 기간을 두어 실제 사용자들의 피드백을 반영
              </DotFlex>

              <DotFlex>
                <Dot /> 라이트 하우스 적용, 웹 서비스 최적화
              </DotFlex>

              <DotFlex>
                <Dot /> Mypage UI, API연동
              </DotFlex>

              <DotFlex>
                <Dot /> 타인 마이페이지 UI, API연동
              </DotFlex>

              <DotFlex>
                <Dot /> 공지사항 팝업 구현
              </DotFlex>

              <DotFlex>
                <Dot /> 로그인 페이지 UI, API연동
              </DotFlex>
            </ProjectContentDescWrap>
          </ProjectContentWrap>
        </ProjectContentBox>


        <ProjectTitleWrap>
          <h2 onClick={() => {
            navigate('/Clone')
            window.scrollTo(0, 0)
          }}>Tinder클론 코딩</h2>
        </ProjectTitleWrap>

        <ProjectDesc>글로벌 소셜 디스커버리 앱 Tinder를 클론코딩 했습니다.</ProjectDesc>

        <ProjectContentBox>
          <ProjectContentWrap>
            <ProjectContentTitle>팀 프로젝트</ProjectContentTitle>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> FE:(2명), BE:(4명)
              </DotFlex>
            </ProjectContentDescWrap>
          </ProjectContentWrap>
          <ThinLine />

          <ProjectContentWrap>
            <ProjectContentTitle>프로젝트 기간</ProjectContentTitle>
            <ProjectContentDescWrap>
              <p>23.05.12 ~ 23.05.18 (1주)</p>
            </ProjectContentDescWrap>
          </ProjectContentWrap>
          <ThinLine />

          <ProjectContentWrap>
            <ProjectContentTitle>사용한 기술스택</ProjectContentTitle>
            <ProjectContentDescWrap>
              <p>React, React-query, Axios, WebSocket, Stomp, Sock.js, React-Router-dom, Styled-components</p>
            </ProjectContentDescWrap>
          </ProjectContentWrap>
          <ThinLine />

          <ProjectContentWrap>
            <ProjectContentTitle>구현기능</ProjectContentTitle>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> Chatting Page UI, 실시간 채팅 기능 구현
              </DotFlex>

              <DotFlex>
                <Dot /> Matching Page UI, API 연동
              </DotFlex>

              <DotFlex>
                <Dot /> Chatting LIst Page UI, API연동
              </DotFlex>
            </ProjectContentDescWrap>
          </ProjectContentWrap>
        </ProjectContentBox>

        <LastSentence>
          <p>Copyright 2023. shinheeje all rights reserved.</p>
        </LastSentence>
      </ProjectWrap>
    </>
  )
}
const Dot = styled.div`
  width: 5px;
  height: 5px;
  background-color: rgb(252, 131, 108);
  border-radius: 50%;
  margin-right: 7px;
`

const DotFlex = styled.div`
  display: flex;
  align-items: center;
`

const ThinLine = styled.div`
  height: 1px;
  margin: 22px 0px;
  background-color: rgb(220, 220, 220);
`

const ProjectWrap = styled.div`
  h1 {
  width: fit-content;
  font-size: 2.25em;
  font-weight: 600;
  color: rgb(252, 131, 108);
  margin-bottom: 20px;
  font-family: 'Pretendard';
  }

  h2 {
    color: rgb(252, 131, 108);
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: 600;
    cursor: pointer;
    padding: 5px 10px;
    transition: all 0.2s;
    border-radius: 4px;
    text-decoration: underline;
    &:hover {
      color: white;
      background-color: rgb(252, 131, 108);
      text-decoration: none;
    }
  }
`

const ProjectTitleWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`

const ProjectLink = styled(Link)`
  color: rgb(252, 131, 108);
  text-decoration: underline;
  font-family: 'Pretendard';
`

const ProjectDesc = styled.p`
  font-family: 'Pretendard';
  font-weight: 600;
  margin-bottom: 25px;
`

const ProjectContentBox = styled.div`
  margin-bottom: 80px;
`

const ProjectContentWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

const ProjectContentTitle = styled.p`
  width: 260px;
  font-weight: 600;
`

const ProjectContentDescWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const LastSentence = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 14px;
  color: rgb(133, 133, 133);
`
export default Project