import React, { useEffect, useState } from "react";
import { format, getDaysInMonth, addMonths, subMonths } from "date-fns";
import "./holidays.css";

function Holidays() {
  const [repo, setRepo] = useState([]);
  const [selectedDays, setSelectedDays] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const today = new Date();

  const daysInMonth = Array.from(
    { length: getDaysInMonth(currentMonth) },
    (_, i) => i + 1
  );
  const startIndex = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();
  const daysWithOffset = [
    ...Array(startIndex - 1 < 0 ? 6 : startIndex - 1).fill(null),
    ...daysInMonth,
    ...Array(42 - (daysInMonth.length + startIndex - 1)).fill(null),
  ];

  useEffect(() => {
    fetch("http://127.0.0.1:8000/holidays/create")
      .then((response) => response.json())
      .then((data) => setRepo(data))
      .catch((error) => console.error(error));
  }, []);

  function handleDayClick(day) {
    setSelectedDays((prevSelectedDays) => {
      if (prevSelectedDays.includes(day)) {
        return prevSelectedDays.filter((d) => d !== day);
      } else {
        return [...prevSelectedDays, day];
      }
    });
  }

  function handlePrevMonth() {
    setCurrentMonth((prevMonth) => subMonths(prevMonth, 1));
  }

  function handleNextMonth() {
    setCurrentMonth((prevMonth) => addMonths(prevMonth, 1));
  }

  return (
    <div className="calendar">
      <div className="header">
        <div className="cell hidden-mobile">Lunes</div>
        <div className="cell hidden-mobile">Martes</div>
        <div className="cell hidden-mobile">Miércoles</div>
        <div className="cell hidden-mobile">Jueves</div>
        <div className="cell hidden-mobile">Viernes</div>
        <div className="cell hidden-mobile">Sábado</div>
        <div className="cell hidden-mobile">Domingo</div>
        <div className="cell visible-mobile">L</div>
        <div className="cell visible-mobile">M</div>
        <div className="cell visible-mobile">X</div>
        <div className="cell visible-mobile">J</div>
        <div className="cell visible-mobile">V</div>
        <div className="cell visible-mobile">S</div>
        <div className="cell visible-mobile">D</div>
      </div>
      <div className="body">
        {daysWithOffset.map((day, index) => {
          if (day === null) {
            return <div className="cell" key={index}></div>;
          } else {
            const isSelected = selectedDays.includes(day);
            const date = new Date(
              currentMonth.getFullYear(),
              currentMonth.getMonth(),
              day
            );
            const formattedDate = format(date, "yyyy-MM-dd");
            const isHoliday = repo.some(
              (holiday) => holiday.date === formattedDate
            );
            return (
              <div
                className={`cell ${isSelected ? "selected" : ""} ${
                  isHoliday ? "holiday" : ""
                }`}
                key={index}
                onClick={() => handleDayClick(day)}
              >
                {day}
              </div>
            );
          }
        })}
        </div>
    
      <div className="footer">
        <div>
          {format(today, "MMMM yyyy")}
        </div>
        <button
          className="vacation-btn"
          onClick={() => alert(`Días seleccionados: ${selectedDays}`)}
        >
          Solicitar vacaciones
        </button>
      </div>
    </div>
  );
}

export default Holidays;

