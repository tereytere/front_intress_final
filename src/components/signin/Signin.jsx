import React, { useState, useEffect } from "react";
import './signin.css'

function Signin() {
  const [timestart, setTimestart] = useState("");
  const [timestop, setTimestop] = useState("");
  const [timefinish, setTimefinish] = useState("");
  const [hourcount, setHourcount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lastDay, setLastDay] = useState("");
  const [totalHours, setTotalHours] = useState(0);


  const handleTimeStart = () => {
    const now = new Date();
    const day = now.toLocaleDateString("es-ES");
    const time = now.toLocaleTimeString("es-ES");
    setTimestart(`${day} ${time}`);
    setIsRunning(true);
  };

  const handleTimeStop = () => {
    const now = new Date();
    const day = now.toLocaleDateString("es-ES");
    const time = now.toLocaleTimeString("es-ES");
    setTimestop(`${day} ${time}`);
    setIsRunning(false);
  };

  const handleTimeRestart = () => {
    const now = new Date();
    const day = now.toLocaleDateString("es-ES");
    const time = now.toLocaleTimeString("es-ES");
    setTimestart(`${day} ${time}`);
    setIsRunning(true);
  };

  const handleTimeFinish = () => {
    const now = new Date();
    const day = now.toLocaleDateString("es-ES");
    const time = now.toLocaleTimeString("es-ES");
    setTimefinish(`${day} ${time}`);
    setIsRunning(false);

    // Save the time worked for the last day
    if (lastDay !== "") {
      localStorage.setItem(lastDay, JSON.stringify({ start: timestart, stop: timestop }));
    }

    // Set the last day to the current day
    setLastDay(day);
  };

  const calculateTotalHoursWorked = () => {
        let total = 0;
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          const { start, stop } = JSON.parse(localStorage.getItem(key));
          const startTime = new Date(start);
          const endTime = new Date(stop);
          const timeDiff = endTime.getTime() - startTime.getTime();
          const hoursWorked = Math.abs(timeDiff / (1000 * 60 * 60));
          total += hoursWorked;
        }
        return total;
      };
      

      useEffect(() => {
        setTotalHours(calculateTotalHoursWorked());
      }, [hourcount]);
      

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    return hours;
  };

  return (
    <div className="signin-container" style={{ backgroundColor: "rgba(217, 217, 217, 1)" }}>
      <h1 className="signin-title">Fichar</h1>
      <div className="signin-item">
        <label className="signin-label" htmlFor="timestart">Hora de inicio</label>
        <button onClick={handleTimeStart} className="signin-button">
          {timestart ? `Inicio (${timestart})` : "Inicio"}
        </button>
        <div className="signin-timeContainer">{timestart}</div>
      </div>
      <div className="signin-item">
        <label className="signin-label" htmlFor="timerestart">Control de jornada</label>
        <button onClick={isRunning ? handleTimeStop : handleTimeRestart} className="signin-button">
          {isRunning ? "Stop" : "Restart"}
        </button>
      </div>
      <div className="signin-item">
        <label className="signin-label" htmlFor="timefinish">Hora de finalización</label>
        <button onClick={handleTimeFinish} className="signin-button">
          {timefinish ? `Fin jornada (${timefinish})` : "Fin jornada"}
        </button>
      </div>
      <div className="signin-item">
        <label className="signin-label" htmlFor="hourcount">Horas trabajadas</label>
        <input
          type="text"
          name="hourcount"
          id="hourcount"
          value={totalHours ? formatTime(totalHours) : 0}
          readOnly
        />
      </div>
    </div>
  );

}

export default Signin