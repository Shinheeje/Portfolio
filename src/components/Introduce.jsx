import React from 'react'
import { styled } from 'styled-components';

function Introduce() {
  return (
    <>
      <IntroduceWrap>
        <h1>Introduce.</h1>
        <h2>💡 저는 _____  개발자 입니다.</h2>
        <IntroduceContentWrap>
          <h3><b>차별화된</b> 서비스를 만들어내는 <b>개발자</b></h3>

          <IntroduceContent>
            <p>
              <Dot></Dot>커뮤니티 문화와 편안한 코드 모임을 중요시하는 개발자들에게 특별한 가치를 제공할 수 있는 [모각코 ON:]서비스를 개발했습니다.
            </p>
          </IntroduceContent>

          <h3><b>꼼꼼하게</b> 빈 틈을 채워나가는 <b> 개발자</b></h3>

          <IntroduceContent>
            <div>
              <p>
                <Dot></Dot>프론트 언어 기술 스터디를 통해 개발자는 꼼꼼함을 갖고 공부하며 부족한 부분을 채워나갈 수 있으며,
              </p>
              <pre>협력과 지속적인 동기 부여를 통해 성장할 수 있었습니다.</pre>
            </div>
          </IntroduceContent>

          <h3>사람들이 필요로 하는 것이 무엇인지 <b>고민하는 개발자</b></h3>

          <IntroduceContent>
            <div>
              <p>
                <Dot></Dot>항상 유저의 편의성을 생각하며 개발자 타겟으로 한 [모각코 ON:]서비스에 다양한 언어 지원 및 코드 자동완성 기능이 있는
              </p>
              <pre>Monaco-Editor 추진 및 적용을 했습니다.</pre>
            </div>
          </IntroduceContent>
        </IntroduceContentWrap>
      </IntroduceWrap>
      <Line></Line>
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

const IntroduceWrap = styled.div`
  h1 {
    width: fit-content;
    font-size: 2.25em;
    font-weight: 600;
    color: rgb(252, 131, 108);
    margin-bottom: 20px;
    font-family: 'Pretendard';
  }

  h3 {
    margin-top: 20px;
    font-family: 'Pretendard';
  }
  p {
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: 'Pretendard';
    line-height: 20px;
    margin-left: 15px;
  }

  pre {
    font-size: 14px;
    font-family: 'Pretendard';
    line-height: 20px;
    margin-left: 28px;
  }
`

const IntroduceContentWrap = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const IntroduceContent = styled.div`
  display: flex;
  align-items: center;
`

const Line = styled.div`
  height: 1px;
  margin: 42px 0px;
  background-color: rgb(220, 220, 220);
`

export default Introduce