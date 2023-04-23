import React from 'react'
import NavbarUser from '../../components/header/NavbarUser'
import SelecUsuario from '../../components/selecusuario/SelecUsuario'
import Personal from '../../components/personal/Personal'
import Signin from '../../components/signin/Signin'
import Holidays from '../../components/holidays/Holidays'
import Downloads from '../../components/downloads/Downloads'
import Doc from '../../components/documents/Doc';

function User() {
  return (
    <div>
      <NavbarUser />
      <Signin/>
      <Personal />
      <SelecUsuario />
      <Holidays/>
      <Doc/>
      <Downloads />

    </div>
  )
}

export default User