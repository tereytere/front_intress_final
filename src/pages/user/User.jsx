import React from 'react'
import NavbarUser from '../../components/header/NavbarUser'
import SelecUsuario from '../../components/selecusuario/SelecUsuario'
import Personal from '../../components/personal/Personal'
import Signin from '../../components/signin/Signin'
import Holidays from '../../components/holidays/Holidays'
import DownloadPersonal from '../../components/downloads/DownloadPersonal'

function User() {
  return (
    <div>
      <NavbarUser />
      <Personal />
      <SelecUsuario />
      <DownloadPersonal />

    </div>
  )
}

export default User