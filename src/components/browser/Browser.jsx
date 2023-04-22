import '../browser/browser.css';
import React, { useState, useEffect } from 'react';


const Browser = () => {
const [ users, setUsers] = useState([])
const [ search, setSearch ] = useState("")
//function para traer los datos de la API
const URL = 'http://127.0.0.1:8000/apipersonal/list'

const showData= async () => {
    const response = await fetch(URL)
    const data = await response.json()
    //console.log(data)
    setUsers(data)
}

//funcion de busqueda
const searcher = (e) =>{
    setSearch(e.target.value)
    console.log(e.target.value)
}

useEffect(()=> {
    showData()
}, [])

//metodo de filtrado
let results = []
if(!search){
    results = users
}else{
    results = users.filter((dato) =>
    dato.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
}
 //renderizamos la vista
 return (
    <div>
      <div>
        <input className="form-control" value={search} onChange={searcher} type='text' placeholder='Buscar usuari@' />
        <img className="lupa" src="./images/lupa.png" alt="lupa" />
        </div>
        <table>
            <tbody>
                { results.map((user) =>(
                <tr key={user.id}> 
                    <td><a className="linkuser"href='/user'>{user.name}</a></td>
                    <td>{user.surname}</td>
                </tr>
              ))}
            </tbody>
        
        </table>
          <p className="resultados">Resultados encontrados: {results.length}</p>
    </div>
  )
}

export default Browser