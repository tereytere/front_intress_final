import React, { useState } from 'react';
import './vacation.css';
import Holidays from '../holidays/Holidays';

function Vacation() {
  const [vacationDays, setVacationDays] = useState(0);
  const [selectedDays, setSelectedDays] = useState([]); // agregar estado para los días seleccionados

  function handleClick() {
    // Reemplazar {userId} con el ID del usuario para el que deseas calcular los días de vacaciones
    fetch(`/apiVacation/{userId}`)
      .then(response => response.json())
      .then(data => setVacationDays(data.vacationDays));
  }

  function handleSelectedDays(days) {
    setSelectedDays(days);
  }

  return (
    <div className="container-table">
      <div className="table">
        <table>
          <tbody>
            <tr>
              <td colspan="3" className="number">24</td>
              <td colspan="3" className="number">11</td>
              <td colspan="3" className="number">{vacationDays}</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="3" className="letras">Totales</td>
              <td colspan="3" className="letras">Disfrutados</td>
              <td colspan="3" className="letras">Disponibles</td>
            </tr>
          </tfoot>
        </table>
      </div>
      <Holidays onSelectedDays={handleSelectedDays} /> {/* agregar el componente Holidays con una prop para manejar los días seleccionados */}
      <button onClick={handleClick}>Calcular días de vacaciones</button>
    </div>
  );
}

export default Vacation;
