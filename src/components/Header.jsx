import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components';
import { AiOutlineMenu } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import Potal from './Potal.jsx'
function Header() {

  const navigate = useNavigate()

  const [toggleNav, setToggleNav] = useState(false)

  const NavbarOnHandler = () => {
    setToggleNav(true)
  }

  const NavbarOffHandler = () => {
    setToggleNav(false)
  }

  return (
    <>
      <HeaderWrap>
        <HeaderLogo onClick={() => {
          navigate('/')
        }}>
          👩‍💻 Heeje
        </HeaderLogo>

        <div>
          <NavbarBtn onClick={() => {
            NavbarOnHandler()
          }}/>
        </div>
      </HeaderWrap>

      {
        toggleNav && <Potal NavbarOffHandler={NavbarOffHandler}/>
      }
    </>
  )
}


const HeaderWrap = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 60px;
  box-shadow: rgb(220, 220, 220) 0px 2px 5px;
  background-color: #FFFFFF;
  z-index: 2;
`

const HeaderLogo = styled.div`
  font-size: 18px;
  font-weight: 500;
  width: 100px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.2s;
  cursor: pointer;
  box-shadow: rgb(220, 220, 220) 0px 2px 5px;
  &:hover {
    background-color: #FC836C;
    color: white;
  }
`

const NavbarBtn = styled(AiOutlineMenu)`
  font-size: 20px;
  cursor: pointer;
`
export default Header