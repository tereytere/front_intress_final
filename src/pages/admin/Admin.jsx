import React from 'react'
import NavbarAdmin from '../../components/header/NavbarAdmin'
import SelecAdmin from '../../components/selecusuario/selecAdmin/SelecAdmin'
import NewUser from '../../components/create/NewUser'
import NewTask from '../../components/create/NewTask'
import NewWorkshop from '../../components/create/NewWorkshop'
import Personal from '../../components/personal/Personal'

function Admin() {
  return (
    <div>
      <NavbarAdmin />
      <Personal />
      <SelecAdmin />
      <NewUser />
      <NewTask />
      <NewWorkshop />
      
    </div>
  )
}

export default Admin