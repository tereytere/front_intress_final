import React from 'react'
import NavbarAdmin from '../../components/header/NavbarAdmin'
import Personal from '../../components/personal/Personal'
import SelecAdmin from '../../components/selecusuario/selecAdmin/SelecAdmin'
import NewUser from '../../components/create/NewUser'
import NewTask from '../../components/create/NewTask'
import NewWorkshop from '../../components/create/NewWorkshop'
import DownloadDocuments from '../../components/downloads/DownloadDocuments'
import DownloadHolidays from '../../components/downloads/DownloadHolidays'
import DownloadSignin from '../../components/downloads/DownloadSignin'

function Admin() {
  return (
    <div>
      <NavbarAdmin />
      <Personal />
      <SelecAdmin/>
      <NewUser />
      <NewTask />
      <NewWorkshop />
      <DownloadSignin />
      <DownloadDocuments />
      <DownloadHolidays />
      
    </div>
  )
}

export default Admin