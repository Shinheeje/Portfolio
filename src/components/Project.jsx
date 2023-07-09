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

        <h1>Experience.</h1>

        <ExperienceTitleWrap>
          <div>
            <ExperienceTitle>항해99 14기</ExperienceTitle>
            <span>진행 기간 : 03.03 ~ 07.07</span>
          </div>
          <ProjectContentWrap>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> React, Javascript, 알고리즘
              </DotFlex>

              <DotFlex>
                <Dot /> 미니프로젝트, 클론프로젝트, 최종 팀 프로젝트 진행
              </DotFlex>

              <DotFlex>
                <Dot /> 여러번의 팀 프로젝트 과정을 통해 백앤드-프론트앤드-디자이너 협업 과정 경험.
              </DotFlex>

              <DotFlex>
                <Dot /> 프로젝트 배포후 63건의 유저 피드백 수용 경험
              </DotFlex>
            </ProjectContentDescWrap>
          </ProjectContentWrap>
        </ExperienceTitleWrap>

        <ExperienceTitleWrap>
          <FlexBox>
            <ExperienceTitle>프론트 언어
              기술 스터디</ExperienceTitle>
            <span>진행 기간 : 04.14 ~ 07.02</span>
            <p>🔗 Link</p>
            <LinkWrap>
              <ProjectLink to={'https://www.notion.so/6919d4d1829c41e7a97ded46b95b5c29?pvs=4'}>스터디 노션 바로가기</ProjectLink>
              <ProjectLink to={'https://github.com/hanghae99-14-interview-study/interview-study'}>스터디 깃허브 바로가기</ProjectLink>
            </LinkWrap>
          </FlexBox>
          <ProjectContentWrap>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> <p style={{ fontWeight: '600' }}>진행 동기</p>
              </DotFlex>

              <DotFlexTwo>
                <p>혼자서 공부하는 것보단 같이 공부하는게 지속 가능하고 부족한 의지를 같이 동기부여해서 나아갈 수 있다고 생각해서 스터디를 개설하게 되었습니다.</p>
              </DotFlexTwo>

              <DotFlex>
                <Dot /> <p style={{ fontWeight: '600' }}>진행 방향</p>
              </DotFlex>

              <DotFlexTwo>
                <p>2023.04.14 ~ 2023.05.05 1주일에 1회 진행</p>
              </DotFlexTwo>

              <DotFlexTwo>
                <p>프론트 언어 기술에 대해 공부 후 발표</p>
              </DotFlexTwo>

              <DotFlexTwo>
                <p>2023.06.04 ~ 2023.07.02 1주일에 1회 진행</p>
              </DotFlexTwo>

              <DotFlexTwo>
                <p>공통적인 질문에 대한 답변 준비 후 베스트 답변 선정으로 프로젝트 진행</p>
              </DotFlexTwo>
            </ProjectContentDescWrap>
          </ProjectContentWrap>
        </ExperienceTitleWrap>
        <ThinLine />

        <h1>Education.</h1>
        <EducationContent>2017.03-2021.02 부천대학교 호텔관광경영과</EducationContent>
        <LastSentence>
          <p>Copyright 2023. shinheeje all rights reserved.</p>
        </LastSentence>
      </ProjectWrap>
    </>
  )
}

const EducationContent = styled.p`
  font-family: 'Pretendard';
  margin-bottom: 40px;
`

const LinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  
  span {
    margin-bottom: 15px;
    font-family: 'Pretendard';
  }

  p {
    margin-bottom: 10px;
    font-family: 'Pretendard';
    font-weight: 600;
  }
`

const ExperienceTitle = styled.h3`
    width: 206px;
    color: rgb(252, 131, 108);
    font-family: 'Pretendard';
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s;
    border-radius: 4px;
`

const Dot = styled.span`
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

const DotFlexTwo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 25px;
  position: relative;
  p {
    font-family: 'Pretendard';

    &::before {
      content: '';
      position: absolute;
      top: 7px;
      left: -10px;
      width: 5px;
      height: 5px;
      background-color: rgb(252, 131, 108);
      border-radius: 50%;
    }
  }
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
  font-family: 'Pretendard';
`

const ExperienceTitleWrap = styled.div`
  display: flex;
  gap: 5px;
  margin-bottom: 40px;
  font-family: 'Pretendard';
  span {
    font-family: 'Pretendard';
    font-size: 12px;
  }
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
  font-family: 'Pretendard';
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