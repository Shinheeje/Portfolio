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
        <ProjectLink to={`https://github.com/Shinheeje/final_fe`}>Troubleshooting 바로가기</ProjectLink>

        <h3>✏️ 프로젝트 설명</h3>

        <p>[모각코 ON:]은 최대 8명에서 방을 개설하여 서로 화상채팅과 실시간 채팅을하며 화면공유, 코드에디터 기능 등을 제공합니다.</p>
        <UserFidback>
          유저피드백 반영 - 사용자 테스트 기간을 두어 실제 사용자들의 피드백을 반영<br />
          일주일이란 기간 동안 총 63건의 피드백을 받음<br />
          친구기능, 쪽지기능, 화상 채팅 안정성 강화, 튜토리얼, 리프레시토큰 등을 강화, 추가하여 27건의 피드백을 반영하여 수정
        </UserFidback>
        <h3>🛠️ 기술 스택</h3>

        <p>React, React-query, Open-vidu, Monaco-Editor, Axios, WebSocket, Stomp, Sock.js, React-Router-dom, Redux, Redux-toolkit, Redux-thunk, Styled-components, react-toastify</p>

        <h3>🗣️ 기술적 의사결정</h3>

        <ProjectContentWrap>
          <ProjectContentTitle>Openvidu</ProjectContentTitle>
          <ProjectContentDescWrap>
            <DotFlex>
              <Dot /> <p>webRTC는 N:M으로 구현할 경우 많은 스트림과 구독을 관리해야하기 때문에 불안정하며 화질이 안좋아져 사용성이 낮다고 판단하여 빠른 기간내 비교적 안정적으로 구현이 가능한 라이브러리를 도입</p>
            </DotFlex>
          </ProjectContentDescWrap>
        </ProjectContentWrap>
        <ThinLine />
        <ProjectContentWrap>
          <ProjectContentTitle>Monaco-Editor</ProjectContentTitle>
          <ProjectContentDescWrap>
            <DotFlex>
              <Dot /> <p>개발자 타겟으로 한 프로젝트이기에 다양한 언어 지원 및 코드 자동완성 기능이 있는 Monaco-Editor 적용</p>
            </DotFlex>
          </ProjectContentDescWrap>
        </ProjectContentWrap>
        <ThinLine />
        <ProjectContentWrap>
          <ProjectContentTitle>Stomp, Sock.js</ProjectContentTitle>
          <ProjectContentDescWrap>
            <DotFlex>
              <Dot /> <p>클라이언트와 서버 간의 상호 운용성을 향상시키고, 개발자들이 일관된 방식으로 통신할 수 있도록 도와줄 수 있는 Stomp를 사용</p>
            </DotFlex>

            <DotFlex>
              <Dot /> <p>WebSocket호환성과 라이브러리 호환성이 좋은 Sock.js 사용</p>
            </DotFlex>
          </ProjectContentDescWrap>
        </ProjectContentWrap>
        <ThinLine />
        <ProjectContentWrap>
          <ProjectContentTitle>React-query, Geolocation API, Kakao Local API, Redux-toolkit, Redux-thunk</ProjectContentTitle>
          <ProjectContentDescWrap>
            <DotFlex>
              <Dot /> <p>React-query 를 사용하여 서버상태와 클라이언트 상태를 분리하여 관리 하였지만 사용자의 접속위치 좌표값, 주소명은 서버에서 따로 관리하지 않아 Geolocation API. Kakao Local API를 활용해 받아온 정보를 클라이언트 상태로 관리해야 하기 때문에 Redux-toolkit 을 사용하고 반복 사용을 줄이기 위해 함수로 디스패치가 가능한  Redux-thunk를 사용</p>
            </DotFlex>
          </ProjectContentDescWrap>
        </ProjectContentWrap>
        <ThinLine />
        <ProjectContentWrap>
          <ProjectContentTitle>React-Router-Dom</ProjectContentTitle>
          <ProjectContentDescWrap>
            <DotFlex>
              <Dot /> <p>React-Router-dom 을 이용한 SPA만에 부드러운 페이지 이동을 위해 사용.</p>
            </DotFlex>

            <DotFlex>
              <Dot /> <p>Outlet을 이용한 조건부 스타일링 구현</p>
            </DotFlex>

            <DotFlex>
              <Dot /> <p>Navigate를 이용한 관리자 로그인과 user로그인 에 따라 다른 인가 기능 구현</p>
            </DotFlex>
          </ProjectContentDescWrap>
        </ProjectContentWrap>
        <ThinLine />
        <ProjectContentWrap>
          <ProjectContentTitle>Styled-components</ProjectContentTitle>
          <ProjectContentDescWrap>
            <DotFlex>
              <Dot /> <p>디자이너와의 협업 편의성, 조건부 스타일링 용이하여 Styled-components를 사용</p>
            </DotFlex>

            <DotFlex>
              <Dot /> <p>createGlobalStyle 를 이용한 GlobalStyle 적용</p>
            </DotFlex>
          </ProjectContentDescWrap>
        </ProjectContentWrap>
        <ThinLine />
        <h3>👩🏻‍💻 구현 기능</h3>

        <p>1. Openvidu를 이용한 화상채팅 기능 및 실시간 채팅 구현</p>

        <ImgWrap>
          <img src={`${process.env.PUBLIC_URL}/image/Chatting.gif`} alt="" />

          <ImgContentWrap>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> <p><b>Strim</b> 교체를 이용한 화상공유 기능 구현</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p><b>initPublisherAsync()</b> 메서드를 사용해 Strim 을 초기화 하고<b>publishAudio</b>, <b>publishVideo</b> 속성에 상태값으로 boolean값을 담아 동적인 마이크,캠 on/off 기능 구현</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p><b>Monaco-Editor</b>를 이용한 코드에디터 구현</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p><b>Stomp</b>, <b>Sock.js</b>을 이용한 실시간 채팅 기능 구현</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p>조건부 스타일링을 통해 6명 이상일 경우 <b>carousel</b> 이 활성화 되어 슬라이드 기능 구현</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p>신고기능을 추가하여 신고 팝업 구현 및 API적용</p>
              </DotFlex>
            </ProjectContentDescWrap>
          </ImgContentWrap>
        </ImgWrap>
        <Line></Line>
        <p>2. 라이트 하우스 적용, 웹 서비스 최적화</p>
        <ImgWrap>
          <img src={`${process.env.PUBLIC_URL}/image/LightHouse.png`} alt="" />

          <ImgContentWrap>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> <p>라이트 하우스 퍼포먼스 점수 <b>52점</b>에서 이미지 최적화 (png →webp), 폰트 최적화(ttf → woff, woff2 → subset font 적용)를 거쳐 <b>85점</b>으로 퍼포먼스 점수 향상</p>
              </DotFlex>
            </ProjectContentDescWrap>
          </ImgContentWrap>
        </ImgWrap>
        <Line></Line>
        <p>3. Mypage UI, API연동</p>
        <ImgWrap>
          <img src={`${process.env.PUBLIC_URL}/image/graph.gif`} alt="" />

          <ImgContentWrap>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> <p>프로필 이미지 파일 업로드 및 수정 구현</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p><b>Chart.js</b>를 이용한 공부시간과 공부한 언어들을 데이터 시각화 및 <b>GitHub API</b>를 이용해 커밋 그래프 연동</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p>클립보드 복사 구현</p>
              </DotFlex>
            </ProjectContentDescWrap>
          </ImgContentWrap>
        </ImgWrap>
        <Line></Line>

        <p>4. Mypage 친구추가, 검색, 쪽지기능</p>
        <ImgWrap>
          <img src={`${process.env.PUBLIC_URL}/image/freindSearch.gif`} alt="" />

          <ImgContentWrap>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> <p>친구 추가 기능 구현</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p>동적 랜더링을 통한 친구추가 버튼 구현 (이미 친구일 시 버튼 none, 친구 신청을 보냈을 때 대기중 으로 변경)</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p>친구목록 다중 삭제 기능 구현</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p>닉네임 과 친구코드로 유저검색 기능 구현</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p>쪽지 보내기 기능 및 글자수 제한, 받은쪽지 및 보낸쪽지 확인 구현</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p>Error처리를 위한 커스텀 팝업 구현</p>
              </DotFlex>
            </ProjectContentDescWrap>
          </ImgContentWrap>
        </ImgWrap>
        <Line></Line>

        <p>5. 다른유저 프로필 UI, API연동</p>
        <ImgWrap>
          <img src={`${process.env.PUBLIC_URL}/image/bestUser.gif`} alt="" />

          <ImgContentWrap>
            <ProjectContentDescWrap>
              <DotFlex>
                <Dot /> <p>친구추가 기능 추가</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p>동적 랜더링을 통한 친구추가 버튼 구현 (이미 친구일 시 버튼 none, 친구 신청을 보냈을 때 대기중 으로 변경)</p>
              </DotFlex>

              <DotFlex>
                <Dot /> <p>조건부 스타일링을 이용해 코딩 온도 프로그래스바 애니메이션 구현</p>
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

const Dot = styled.div`
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