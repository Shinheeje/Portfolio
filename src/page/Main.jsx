import Title from '../components/Title'
import Introduce from '../components/Introduce'
import Project from '../components/Project'
import { styled } from 'styled-components';
import { BsArrowUp } from "react-icons/bs";
function Main() {
  const goToTopHandler = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <MainWrap>
        <Title />
        <Introduce />
        <Project />
        <Top onClick={() => {
          goToTopHandler()
        }}><Arrow/></Top>
      </MainWrap>
    </>
  )
}

const MainWrap = styled.div`
  position: relative;
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
export default Main