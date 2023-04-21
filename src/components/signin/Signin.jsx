import React, { useState, useEffect } from 'react';
import './signin.css';

function Login() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [reason, setReason] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isStarted && !isPaused) {
      const newIntervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setIntervalId(newIntervalId);
    } else if (isPaused) {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isStarted, isPaused, intervalId]);

  function handleStart() {
    setIsStarted(true);
    setIsPaused(false);
    setIsFinished(false);
  }

  function handlePause() {
    setIsPaused(true);
  }

  function handleResume() {
    setIsPaused(false);
  }

  function handleFinish() {
    setTime(0);
    setIsStarted(false);
    setIsPaused(false);
    setIsFinished(true);
  }

  function handleRestart() {
    setTime(0);
    setIsStarted(false);
    setIsPaused(false);
    setIsFinished(false);
  }

  function handleReasonChange(e) {
    setReason(e.target.value);
  }

  const hours = Math.floor(time / (60 * 60));
  const minutes = Math.floor((time / 60) % 60);
  const seconds = Math.floor(time % 60);

  return (
    <div className="container">
      <div className="signin">
        <h1 className="signin__header">Iniciar jornada de trabajo</h1>

        <div className="signin__clock">{`${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</div>

        <div className="signin__info">
          <label htmlFor="signin_reason">Motivo:</label>
          <input
            type="text"
            id="signin_reason"
            placeholder="Ej. reunión, llamadas, etc."
            value={reason}
            onChange={handleReasonChange}
          />
        </div>

        <div className="signin__actions">
          <button
            className="signin__button signin__button--start"
            onClick={handleStart}
            disabled={isStarted && !isPaused}
          >
            Iniciar
          </button>
          <button
            className="signin__button signin__button--pause"
            onClick={handlePause}
            disabled={!isStarted || isPaused || isFinished}
          >
            Pausar
          </button>
          <button
            className="signin__button signin__button--resume"
            onClick={handleResume}
            disabled={!isStarted || !isPaused || isFinished}
          >
            Reanudar
          </button>
          <button
            className="signin__button signin__button--finish"
            onClick={handleFinish}
            disabled={!isStarted || isFinished}
          >
            Finalizar
          </button>
          <button
            className="signin__button signin__button--restart"
            onClick={handleRestart}
            disabled={!isFinished}
          >
            Reiniciar
          </button>
        </div>

        <p className="signin__summary">
          Tiempo total: <span className="signin__time">{`${hours
            .toString()
            .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds
            .toString()
            .padStart(2, '0')}`}</span>
        </p>
      </div>
    </div>
  );
}

export default Login;