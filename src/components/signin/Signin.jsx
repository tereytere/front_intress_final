import React, { useState, useEffect } from 'react';
import './signin.css';

function Signin() {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [clock, setClock] = useState(new Date().toLocaleTimeString());
  const [startDateTime, setStartDateTime] = useState(null);
  const [pauseDateTime, setPauseDateTime] = useState(null);
  const [resumeDateTime, setResumeDateTime] = useState(null);
  const [finishDateTime, setFinishDateTime] = useState(null);
  const [started, setStarted] = useState(false);
  const [displaySummary, setDisplaySummary] = useState(false);
  const [showRestartButton, setShowRestartButton] = useState(false);

  useEffect(() => {
    if (started && !isPaused) {
      const newIntervalId = setInterval(() => {
        setTime((prevTime) => {
          return prevTime + 1;
        });
      }, 1000);
      setIntervalId(newIntervalId);

      return () => clearInterval(newIntervalId);
    }
  }, [started, isPaused]);

  useEffect(() => {
    const clockIntervalId = setInterval(() => {
      setClock(new Date().toLocaleTimeString('es-ES'));
    }, 1000);

    return () => clearInterval(clockIntervalId);
  }, []);

  function handleStart() {
    setTime(0);
    setIsPaused(false);
    setStartDateTime(new Date());
    setStarted(true);
    setShowRestartButton(false);
  }

  function handlePause() {
    setIsPaused(true);
    clearInterval(intervalId);
    setPauseDateTime(new Date());
  }

  function handleResume() {
    setIsPaused(false);
    setResumeDateTime(new Date());
  }

  function handleFinish() {
    setIsPaused(true);
    clearInterval(intervalId);
    setFinishDateTime(new Date());
    setDisplaySummary(true);
    setShowRestartButton(true);
  }

  function handleRestart() {
    setTime(0);
    setIsPaused(false);
    setStartDateTime(null);
    setPauseDateTime(null);
    setResumeDateTime(null);
    setFinishDateTime(null);
    setStarted(false);
    setDisplaySummary(false);
    setShowRestartButton(false);
  }

  const hours = Math.floor(time / (60 * 60));
  const minutes = Math.floor((time / 60) % 60);
  const seconds = Math.floor(time % 60);

  // const totalHours = (time / (60 * 60)).toFixed(2);
  const totalMinutes = Math.floor(time / 60);

  return (
    <div className="container">
      <div className="signin">
        {!started && !displaySummary && !showRestartButton && (
          <button
            className="signin__button signin__button--start"
            onClick={handleStart}
          >
            FICHAR
          </button>
        )}

        {(started || displaySummary || showRestartButton) && (
          <div>
            {/* <h1 className="signin__header"></h1> */}

            <div className="signin__clock">{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</div>

            {startDateTime && (
              <p className="signin__time-info">
                Iniciado el {startDateTime.toLocaleDateString('es-ES')} a las{' '}
                {startDateTime.toLocaleTimeString('es-ES')}
              </p>
            )}

            {pauseDateTime && (
              <p className="signin__time-info">
                Pausado el {pauseDateTime.toLocaleDateString('es-ES')} a las{' '}
                {pauseDateTime.toLocaleTimeString('es-ES')}
              </p>
            )}

            {resumeDateTime && (
              <p className="signin__time-info">
                Reanudado el {resumeDateTime.toLocaleDateString('es-ES')} a
                las {resumeDateTime.toLocaleTimeString('es-ES')}
              </p>
            )}

            {finishDateTime && (
              <p className="signin__time-info">
                Finalizado el {finishDateTime.toLocaleDateString('es-ES')} a
                las {finishDateTime.toLocaleTimeString('es-ES')}
              </p>
            )}

            {intervalId && (
              <div className="signin__clock">{`${hours
                .toString()
                .padStart(2, '0')}:${minutes
                .toString()
                .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</div>
            )}

            <div className="signin__actions">
              {showRestartButton ? (
                <button
                  className="signin__button signin__button--start"
                  onClick={handleRestart}
                >
                  Inicio
                </button>
              ) : (
                <>
                  {!isPaused ? (
                    <button
                      className="signin__button signin__button--pause"
                      onClick={handlePause}
                    >
                      Pausar
                    </button>
                  ) : (
                    <button
                      className="signin__button signin__button--resume"
                      onClick={handleResume}
                    >
                      Reanudar
                    </button>
                  )}

                {started && (
                  <button
                    className="signin__button signin__button--finish"
                    onClick={handleFinish}
                  >
                    {showRestartButton ? 'Inicio' : 'Finalizar'}
                  </button>
                )}
                </>
              )}
            </div>

            {intervalId && (
              <p className="signin__summary">
                Tiempo trabajado:{' '}
                <span className="signin__time">{`${hours
                  .toString()
                  .padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`}</span>
              </p>
            )}

            {!intervalId && displaySummary && (
              <p className="signin__summary">
                Total horas trabajadas:{' '}
                <span className="signin__time">{`${Math.floor(
                  totalMinutes / 60
                ).toString().padStart(2, '0')}:${(totalMinutes % 60)
                  .toString()
                  .padStart(2, '0')}`}</span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Signin;