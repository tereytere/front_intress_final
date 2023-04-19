import React from 'react';
import './selecusuario.css';
function SelecUsuario () {
    return (
        
        <div className="table">
        <select className="talleres">
        <option value="Taller1">&nbsp;Carpinteria&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00 H</option>
        <option value="taller2">&nbsp;Fontaneria&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:00 H</option>
        <option value="taller3">&nbsp;Excell&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;08:00 H</option>
        <option value="taller4">&nbsp;Word&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09:45 H</option>
        <option value="taller5">&nbsp;Power point&nbsp;&nbsp;&nbsp;&nbsp;10:00 H</option>
    </select>
        </div>
);
}

export default SelecUsuario;