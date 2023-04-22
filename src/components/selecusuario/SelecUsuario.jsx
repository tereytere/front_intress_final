import React, { useEffect, useState } from "react";
import './selecusuario.css';

function SelecUsuario() {
    const [repo, setRepo] = useState([]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [cardContent, setCardContent] = useState(null);
    

    useEffect(() => {
        fetch('http://127.0.0.1:8000/apiworkshops/list')
            .then(response => response.json())
            .then(repo => setRepo(repo))
            .catch(error => console.error(error));
    }, []);

    const handleOptionClick = (event) => {
        const selectedOption = event.target.value;
        setSelectedOption(selectedOption);
        setCardContent(`Lorem ipsum dolor sit amet consectetur. Duis vitae enim lacus et velit neque natoque faucibus turpis. Diam massa facilisis sagittis libero.`);
    };

    return (
        <div className="table">
            <select id="talleres" onChange={handleOptionClick}>
                <option value="">Selecciona una opción</option>
                {repo.map(int => (
                    <option key={int.id} value={int.name}>{int.name}</option>
                ))}
            </select>

            {selectedOption && cardContent && (
                <div className="cardSelect">
                    <h2 className="selectTitle">{selectedOption}</h2>
                    <p className="cardcontent">{cardContent}</p>
                </div>
            )}
        </div>
    );
}

export default SelecUsuario;
