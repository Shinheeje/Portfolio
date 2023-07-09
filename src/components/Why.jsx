import React from 'react'
import { styled, keyframes } from 'styled-components';
import { GrClose } from "react-icons/gr";
import { Link, useNavigate } from 'react-router-dom';
function Why(props) {
  const navigate = useNavigate()
  return (
    <>
      <Dark onClick={() => {
        props.NavbarOffHandler()
      }}></Dark>
      <NavbarWrap>
        <NavbarHeader>
          <h2>Shinheeje</h2>
          <CloseBtn onClick={() => {
            props.NavbarOffHandler()
          }} />
        </NavbarHeader>
        <NavbarContentWrap>
          <h2 onClick={() => {
            navigate('/')
          }}>Main page</h2>
          <h1>Project</h1>
          <h2 onClick={() => {
            navigate('/mogakko')
          }}>Mogakko On:</h2>
          <h2 onClick={() => {
            navigate('/clone')
          }}>Tinder</h2>

          <h1>Contact</h1>

          <NavbarContactLick to={'https://github.com/Shinheeje'}>Github</NavbarContactLick>

          <NavbarContactLick to={'https://shinheeje.tistory.com/'}>Blog</NavbarContactLick>
        </NavbarContentWrap>
      </NavbarWrap>
    </>
  )
}

const Dark = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 5;
`

const Animation = keyframes`
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

const NavbarWrap = styled.div`
  position: fixed;
  z-index: 6;
  width: 400px;
  height: 100%;
  position: fixed;
  top: 0;
  right: 0;
  background-color: #FFFFFF;
  animation: ${Animation} 600ms ease-in;
`

const NavbarHeader = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: rgb(220, 220, 220) 0px 2px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 20px;
  h2 {
    font-size: 18px;
    font-weight: 500;
    color: rgb(252, 131, 108)
  }
`

const CloseBtn = styled(GrClose)`
  font-size: 18px;
  cursor: pointer;
`

const NavbarContentWrap = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  box-shadow: rgb(220, 220, 220) 0px 2px 5px;

  h1 {
    font-size: 32px;
    font-weight: 500;
    color: rgb(252, 131, 108);
    margin-top: 20px;
    font-family: 'Pretendard';
  }

  h2 {
    font-size: 25px;
    font-weight: 500;
    color: rgb(151, 151, 151);
    cursor: pointer;
    transition: all 0.2s;
    font-family: 'Pretendard';
    &:hover{
      color: rgb(252, 131, 108);
      transform: scale(1.02);
    }
  }
`

const NavbarContactLick = styled(Link)`
    font-family: 'Pretendard';
    font-size: 25px;
    font-weight: 500;
    color: rgb(151, 151, 151);
    cursor: pointer;
    transition: all 0.2s;
    &:hover{
      color: rgb(252, 131, 108);
      transform: scale(1.02);
    }
`

export default Why