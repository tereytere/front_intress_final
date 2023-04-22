import React, { useState } from "react";
import './holidays.css'; 

function Holidays() {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today.getDate());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());
  const [selectedDays, setSelectedDays] = useState({});

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const daysArray = () => {
    const totalDays = daysInMonth(selectedMonth, selectedYear);
    const daysArr = [];
    for (let i = 1; i <= totalDays; i++) {
      daysArr.push(i);
    }
    return daysArr;
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(parseInt(event.target.value));
  };

  const handleYearChange = (event) => {
    setSelectedYear(parseInt(event.target.value));
  };

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <div className="calendarContainer">
      <div className="calendarHeader">
        <div className="selectWrapper">
          <select className="select-holidays" value={selectedMonth} onChange={handleMonthChange}>
            {monthNames.map((month, index) => (
              <option key={index} value={index}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div className="selectWrapper">
          <select className="select-holidays" value={selectedYear} onChange={handleYearChange}>
            <option value={selectedYear - 1}>{selectedYear - 1}</option>
            <option value={selectedYear}>{selectedYear}</option>
            <option value={selectedYear + 1}>{selectedYear + 1}</option>
          </select>
        </div>
      </div>
      <div className="calendarDays">
        {daysArray().map((day, index) => (
          <div
            key={index}
            className={`$"calendarDay" ${
              selectedDate [day] ? "selectedDay" : ""
            }`}
            onClick={() => {
              let newSelectedDays = {...selectedDays};
              newSelectedDays[day] = !newSelectedDays[day];
              setSelectedDays(newSelectedDays);
            }}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Holidays;
