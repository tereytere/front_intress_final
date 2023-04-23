import React, { useEffect, useState } from "react";
import './personal.css'

function Personal() {
    const [repo, setRepo] = useState([]);
    const [showDetails, setShowDetails] = useState(true);

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    useEffect(() => {
        fetch('http://127.0.0.1:8000/apipersonal/list')
            .then(response => response.json())
            .then(repo =>
                setRepo(repo))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className='card'>
            <div className='card-icon' onClick={handleToggleDetails}>
                <img src='images/user-icon.png' alt='User Icon' />
            </div>
            {repo.map(int => {
                return (
                    <div className='card-body' key={int.id}>
                        <h3 className='card-title'>Hola {int.name}!</h3>
                        {showDetails && (
                        <>
                        <p className='card-title'>{int.surname}</p>
                        <p className='card-title'>{int.rol}</p>
                        <img className='card-img' src={int.image} alt={int.name} />
                        </>
                        )}
                        
                    </div>
                )
            })}
        </div>
    )
}

export default Personal;
