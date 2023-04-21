import React, { useEffect, useState } from "react";
function Personal() {


    const [repo, setRepo] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/apipersonal/list')
            .then(response => response.json())

            .then(repo =>
                setRepo(repo))// Establece el valor de 'repo' primero
            // Puedes dejar esto aquí si quieres, pero no es necesari)
            .catch(error => console.error(error));

    }, []);

    return (
        <div className='card'>
            {repo.map(int => {
                return (
                    <div className='card-body' key={int.id}>
                        <h3 className='card-title'>Hola {int.name}!</h3>
                        <p className='card-title'>{int.surname}</p>
                        <p className='card-title'>{int.rol}</p>
                        <img className='card-img' src={int.image} alt={int.name} />
                        <img className='toggle-icon closed' onClick={toggleFields} src='https://www.pngwing.com/es/free-png-yagthttps://www.flaticon.com/free-icon/user_847969?term=user&page=1&position=35&origin=tag&related_id=847969p' alt='iconouser' />
                    </div>
                )
            })}
        </div>
    )
}

export default Personal