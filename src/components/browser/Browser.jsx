import './components/browser/browser.css'

import React, { useState, useEffect } from 'react'

const [users, setUsers] = useState([])
const [search, setSearch] = useState("")
//function para traer los datos de la API
const URL = 'http://127.0.0.1:8000/apipersonal/list'

const showData = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
}

//funcion de busqueda
const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
}

useEffect(() => {
    showData()
}, [])

//metodo de filtrado
let results = []
if (!search) {
    results = users
} else {
    results = users.filter((dato) =>
        dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
}
//renderizamos la vista
return (
    <div>
        <input value={search} onChange={searcher} type='text' placeholder='Search' className='form-control' />
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>User Name</th>
                </tr>
            </thead>
            <tbody>
                {results.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.surname}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
)

export default Browser;