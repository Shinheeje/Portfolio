import React from 'react'
import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from '../components/Header'
function Layout() {
  return (
    <>
      <Header />
      <MaxWidth>
        <Outlet />
      </MaxWidth>
    </>
  )
}

const MaxWidth = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`
export default Layout