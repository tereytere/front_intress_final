import React, { useEffect, useState } from "react";
import './new.css';

function NewUser() {
    // const [repo, setRepo] = useState([]);

    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/apipersonal/create')
    //         .then(response => response.json())

    //         .then(repo =>
    //             setRepo(repo))// Establece el valor de 'repo' primero
    //         // Puedes dejar esto aquí si quieres, pero no es necesari)
    //         .catch(error => console.error(error));

    // }, []);

    return (
        <div className='container-new' id="new_user">
            <h2 className="title_new">Nuevo Usuario</h2>
            
                
                    <form action="" className="contact-box" data-aos="fade-up" data-aos-duration="1500">
                    <div className="form-control">
                      <label className="label-form" for="name">Nombre:</label>
                      <input className="control" type="text" name="name" value=''/>
                    </div>
                    <div className="form-control">
                      <label className="label-form" for="mail">Apellido:</label>
                      <input className="control" type="email" name="Correo"/>
                    </div>
                    <div className="form-control">
                      <label className="label-form" for="msg">Rol:</label>
                      <input className="control" type="text" name="Rol"/>
                    </div>
                    
                  </form>
                  
            
        <button className="buttonc">Crear</button>
                
        </div>
    )
}

export default NewUser