import React from 'react'
import NavbarAdmin from '../../components/header/NavbarAdmin'
import Personal from '../../components/personal/Personal'
import SelecAdmin from '../../components/selecusuario/selecAdmin/SelecAdmin'
import NewUser from '../../components/create/NewUser'
import NewTask from '../../components/create/NewTask'
import NewWorkshop from '../../components/create/NewWorkshop'
import Downloads from '../../components/downloads/Downloads'
import SelectTask from '../../components/selecusuario/selectTask/SelectTask'


function Admin() {
  return (
    <div>
      <NavbarAdmin />
      <Personal />
      <SelecAdmin/>
      <NewUser />
      <NewWorkshop />
      <NewTask />
      <SelectTask />
      <h2>Descargas</h2>
      <Downloads />
      
    </div>
  )
}

export default Admin