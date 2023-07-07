import React from 'react'
import { styled } from 'styled-components';
import { AiOutlineMenu } from "react-icons/ai";
function Header() {
  return (
    <>
      <HeaderWrap>
        <HeaderLogo>
          👩‍💻 Heeje
        </HeaderLogo>
        <div>
          <AiOutlineMenu size={20}/>
        </div>
      </HeaderWrap>
    </>
  )
}


const HeaderWrap = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 20px;
  box-shadow: rgb(220, 220, 220) 0px 2px 5px;
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
export default Header