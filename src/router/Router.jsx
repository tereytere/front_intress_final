import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/login/Login';
import User from '../pages/user/User';
import Admin from '../pages/admin/Admin';
import Master from '../pages/master/Master';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>

            <Route path='/master' element={<Master/>}></Route>

            <Route path='/user' element={<User/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Router


