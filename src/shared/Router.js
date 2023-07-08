import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from '../style/Layout';
import Main from '../page/Main';
import Mogakko from '../components/Mogakko'
import Clone from '../components/Clone'
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Main />} />
            <Route path='/mogakko' element={<Mogakko />} />
            <Route path='/clone' element={<Clone />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default Router