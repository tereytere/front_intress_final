import '../browser/browser.css';
import React, { useState, useEffect } from 'react';


const Browser = () => {
const [ users, setUsers] = useState([])
const [ search, setSearch ] = useState("")
//function para traer los datos de la API
const URL = 'http://127.0.0.1:8000/apipersonal/list'

const showData= async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setUsers(data);
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
const filteredData = search
    ? users.filter((user) => {
        const includesName = user.name.toLowerCase().includes(search.toLowerCase());
        console.log(`Checking name '${user.name}', found=${includesName}`);
        const includesSurname = user.surname.toLowerCase().includes(search.toLowerCase());
        console.log(`Checking surname '${user.surname}', found=${includesSurname}`);
        return includesName || includesSurname;
      })
    : [];

  // Renderizar vista
  return (
    <div>
      <div>
        <input className="form-buscador" value={search} onChange={searcher} type='text' placeholder='Buscar usuari@' />
        <img className="lupa" src="./images/lupa.png" alt="lupa" />
      </div>
      {filteredData.length > 0 ? (
        <table className='buscador'>
          <tbody>
            { filteredData.map((user) =>(
              <tr key={user.id}> 
                <td><a className="linkuser" href='/user'>{user.name}</a></td>
                <td>{user.surname}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className='hidden'>No se encontraron resultados</p>
      )}
      <p className="resultados">Resultados encontrados: {filteredData.length}</p>
    </div>
  )
}

export default Browser