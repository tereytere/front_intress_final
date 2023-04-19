import React, { useState, useEffect } from "react";
import "./signin.css";

function Signin() {
  const [timestart, setTimestart] = useState("");
  const [timestop, setTimestop] = useState("");
  const [timeRestart, setTimeRestart] = useState("");
  const [timefinish, setTimefinish] = useState("");
  const [hourcount, setHourcount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [lastDay, setLastDay] = useState("");
  const [totalHours, setTotalHours] = useState({ date: "", hours: 0 });
  const [lastStartTime, setLastStartTime] = useState("");
  const [hoursData, setHoursData] = useState([]);

  const handleTimeStart = () => {
    const now = new Date();
    const day = now.toLocaleDateString("es-ES");
    const time = now.toLocaleTimeString("es-ES");
    if (day === lastDay) {
      setTimestart(`${day} ${time}`);
    } else {
      setTimestart(`${day} ${time}`);
      setLastStartTime(day);
    }
    setIsRunning(true);
  };

  const handleTimeStop = () => {
    const now = new Date();
    const day = now.toLocaleDateString("es-ES");
    const time = now.toLocaleTimeString("es-ES");
    setTimestop(`${day} ${time}`);
    setIsRunning(false);
    const { start } = JSON.parse(localStorage.getItem(lastDay)) || { start: "" };
    const startTime = new Date(start);
    const endTime = new Date(`${day} ${time}`);
    const timeDiff = endTime.getTime() - startTime.getTime();
    const hoursWorked = Math.abs(timeDiff / (1000 * 60 * 60));
    setHourcount(totalHours + hoursWorked);
  };

  const handleTimeRestart = () => {
    const now = new Date();
    const day = now.toLocaleDateString("es-ES");
    const time = now.toLocaleTimeString("es-ES");
    setTimeRestart(`${day} ${time}`);
    setIsRunning(true);
  };

  const handleTimeFinish = async () => {
    const now = new Date();
    const day = now.toLocaleDateString("es-ES");
    const time = now.toLocaleTimeString("es-ES");
    setTimefinish(`${day} ${time}`);
    setIsRunning(false);
 
    // Send the data to the API
    const response = await fetch("http://127.0.0.1:8000/apisignin/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ timestart, timestop, timeRestart, timefinish }),
    });
    const data = await response.json();
    console.log(data);

    // Save the time worked for the last day
    if (lastDay !== "") {
      localStorage.setItem(lastDay, JSON.stringify({ start: timestart, stop: timestop, restart: timeRestart, finish:timefinish }));
    }

    // Set the last day to the current day
    setLastDay(day);
  };

  const calculateTotalHoursWorked = () => {
    let total = 0;
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const { start, restart, stop, finish } = JSON.parse(localStorage.getItem(key));
      const startTime = new Date(start);
      const restartTime = new Date(restart);
      const endTime = new Date(stop);
      const finishTime = new Date(finish);
      const timeDiff = endTime.getTime() - startTime.getTime();
      const restartDiff = finishTime.getTime() - restartTime.getTime();
      const hoursWorked = Math.abs(timeDiff / (1000 * 60 * 60));
      const hoursBreak = Math.abs(restartDiff / (1000 * 60 * 60));
      total += hoursWorked - hoursBreak;
    }
    const now = new Date();
    const day = now.toLocaleDateString("es-ES");
    const hoursWorked = total.toFixed(2);
    setTotalHours({ date: day, hours: hoursWorked });
    return total;
  };

  useEffect(() => {
    setTotalHours(calculateTotalHoursWorked());
  }, [hourcount]);

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    return `${hours} horas ${minutes} minutos`;
  };

  useEffect(() => {
    // Get the hours data from the API
    const fetchHoursData = async () => {
      const response = await fetch("http://127.0.0.1:8000/apisignin/list");
      const data = await response.json();
      setHoursData(data);
    };
    fetchHoursData();
  }, []);

  useEffect(() => {
    setTotalHours(calculateTotalHoursWorked());
  }, [hourcount, hoursData]);

  return (
    <div className="signin-container" style={{ backgroundColor: "rgba(217, 217, 217, 1)" }}>
      <h1 className="signin-title">Fichar</h1>
      <div className="signin-item">
        <label className="signin-label" htmlFor="timestart">
          Hora de inicio
        </label>
        <button onClick={handleTimeStart} className="signin-button">
          {timestart ? `Inicio (${timestart})` : "Inicio"}
        </button>
        <div className="signin-timeContainer">{timestart}</div>
      </div>
      <div className="signin-item">
        <label className="signin-label" htmlFor="timerestart">
          Control de jornada
        </label>
        <button onClick={isRunning ? handleTimeStop : handleTimeRestart} className="signin-button">
          {isRunning ? "Stop" : "Restart"}
        </button>
      </div>
      <div className="signin-item">
        <label className="signin-label" htmlFor="timefinish">
          Fin jornada
        </label>
        <button onClick={handleTimeFinish} className="signin-button">
          {timefinish ? `Fin jornada (${timefinish})` : "Fin jornada"}
        </button>
      </div>
      <div className="signin-item">
        <label className="signin-label" htmlFor="hourcount">
          Horas trabajadas
        </label>
        <input
          type="text"
          name="hourcount"
          id="hourcount"
          value={totalHours ? `${totalHours.date} - ${formatTime(totalHours.hours * 3600)} horas` : "0 horas"}
          readOnly
        />
      </div>
    </div>
  );
}

export default Signin;
