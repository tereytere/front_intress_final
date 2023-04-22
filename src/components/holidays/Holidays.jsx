import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './holidays.css';

function Holidays() {
  const [selectedDates, setSelectedDates] = useState([]);
  const [remainingDays, setRemainingDays] = useState(30);
  const [permanentDates, setPermanentDates] = useState([]);

  const isSelectedDate = (date) => {
    return (
      selectedDates.some((d) => isSameDay(d, date)) ||
      permanentDates.some((d) => isSameDay(d, date))
    );
  };

  const handleDateSelect = (date) => {
    const newDate = new Date(date);
    if (!isSelectedDate(newDate)) { 
      if (!selectedDates.some((d) => isSameDay(d, newDate))) {
        setSelectedDates((prevDates) => [...prevDates, newDate]);
      } else {
        setSelectedDates((prevDates) =>
          prevDates.filter((d) => !isSameDay(d, newDate))
        );
      }
    }
  };

  const handleVacationSubmit = () => {
  
    const daysSelected = selectedDates.length;
    setPermanentDates((prevDates) => [...prevDates, ...selectedDates]);
    setRemainingDays((prevDays) => prevDays - daysSelected);

    // Aquí es donde se enviarán los datos a través de nuestra API o Backend
    alert('¡Vacaciones enviadas con éxito!');
    setSelectedDates([]);
  };

  const calculateDaysSelected = () => {
    return selectedDates.length;
  };

  const formatDates = (dates) => {
    return dates.map((date) => date.toLocaleDateString()).join(', ');
  };

  const showSelectedDays = () => {
    return formatDates(selectedDates);
  };

  const isSameDay = (date1, date2) =>
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear();

  return (
    <div className="holidays-container">
      <div className="holidays-calendar-container">
        <Calendar
          value={[...selectedDates, ...permanentDates]}
          onChange={handleDateSelect}
          tileClassName={({ date }) =>
            isSelectedDate(date) ? "selected" : "" 
          }
          minDate={new Date()}
          calendarType="ISO 8601"
          showFixedNumberOfWeeks={true}
          fixedWeeksCount={6}
        />
      </div>

      <div className="holidays-info-container">
        <h2 className="holidays-header">Vacaciones</h2>
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
          Solicitar
        </button>
      </div>
    </div>
  );
}

export default Holidays;