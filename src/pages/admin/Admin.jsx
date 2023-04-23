import React from 'react'
import NavbarAdmin from '../../components/header/NavbarAdmin'
import Personal from '../../components/personal/Personal'
import SelecAdmin from '../../components/selecusuario/selecAdmin/SelecAdmin'
import NewUser from '../../components/create/NewUser'
import NewTask from '../../components/create/NewTask'
import NewWorkshop from '../../components/create/NewWorkshop'
import Downloads from '../../components/downloads/Downloads'
import Doc from '../../components/documents/Doc';


function Admin() {
  return (
    <div>
      <NavbarAdmin />
      <Personal />
      <SelecAdmin/>
      <NewUser />
      <NewTask />
      <NewWorkshop />
      <Doc/>
      <Downloads />
      
    </div>
  )
}

export default Admin