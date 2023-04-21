import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './holidays.css'
function Holidays() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [remainingDays, setRemainingDays] = useState(30);

  const handleDateSelect = (date) => {
    const newDate = new Date(date);
    setSelectedDates((prevDates) => [...prevDates, newDate]);
  };

  const handleVacationSubmit = () => {
    // Aquí sumamos los días de vacaciones seleccionados
    const daysSelected = selectedDates.length;
    setRemainingDays((prevDays) => prevDays - daysSelected);

    // Aquí es donde se enviarían los datos a través de nuestra API o Backend
    alert('¡Vacaciones enviadas con éxito!');
    setSelectedDates([]);
  };

  // Función para calcular la cantidad de días seleccionados
  const calculateDaysSelected = () => {
    return selectedDates.length;
  };

  // Función para mostrar los días seleccionados
  const showSelectedDays = () => {
    return selectedDates.map((date) => date.toLocaleDateString()).join(', ');
  };

  return (
    <div className="holidays-container">
      <h2 className="holidays-header">Vacaciones</h2>
      <div className="holidays-calendar-container">
        
        <Calendar
          onChange={handleDateSelect}
          value={selectedDates}
          minDate={new Date()}
          calendarType="US"
        />
      </div>

      <div className="holidays-info-container">
        <p>
          Selecciona los días que deseas disfrutar de tus vacaciones. Tienes{' '}
          <span className="holidays-days-remaining">{remainingDays}</span> días
          de vacaciones disponibles.
        </p>

        <div className="holidays-selected">
          <p className="holidays-selected-header">Días seleccionados:</p>
          <p className="holidays-selected-days">{showSelectedDays()}</p>
          <p className="holidays-selected-count">
            Días seleccionados: {calculateDaysSelected()}
          </p>
        </div>
    
            <button
              className="holidays-submit-button"
              onClick={handleVacationSubmit}
              disabled={selectedDates.length === 0}
            >
            Enviar Vacaciones
            </button>
      </div>
    </div>
  );
}

export default Holidays;