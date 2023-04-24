import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from '../pages/login/Login';
import User from '../pages/user/User';
import Admin from '../pages/admin/Admin';
import Master from '../pages/master/Master';
import Personal from '../components/personal/Personal';
import SelecUsuario from '../components/selecusuario/SelecUsuario';
import SelecAdmin from '../components/selecusuario/selecAdmin/SelecAdmin';
import Holidays from '../components/holidays/Holidays';
import Signin from '../components/signin/Signin';
import Doc from '../components/documents/Doc';
import Workshops from '../components/workshops/Workshops'
import Downloads from '../components/downloads/Downloads';

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/admin' element={<Admin/>}></Route>
            <Route path='/master' element={<Master/>}></Route>
            <Route path='/user' element={<User/>}></Route>
            <Route path='/personal' element={<Personal/>}></Route>
            <Route path='/selecusuario' element={<SelecUsuario/>}></Route>
            <Route path='/selecadmin' element={<SelecAdmin/>}></Route>
            <Route path='/holidays' element={<Holidays/>}></Route>
            <Route path='/signin' element={<Signin/>}></Route>
            <Route path='/doc' element={<Doc/>}></Route>
            <Route path='/workshops' element={<Workshops/>}></Route>
            <Route path='/downloads' element={<Downloads/>}></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default Router


