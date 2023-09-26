import * as S from './style/StopWatch.style';
import { useState, useRef } from 'react';

const StopWatch = () => {
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState([]);
    const intervalRef = useRef(null);
  
    const startStopwatch = () => {
      if (!running) {
        intervalRef.current = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
        setRunning(true);
      } else {
        clearInterval(intervalRef.current);
        setRunning(false);
      }
    };
  
    const resetStopwatch = () => {
      clearInterval(intervalRef.current);
      setTime(0);
      setLaps([]);
      setRunning(false);
    };
  
    const recordLap = () => {
      const newLap = {
        id: laps.length === 0 ? 1 : laps[laps.length - 1].id + 1,
        lap: time,
      };
      setLaps((prevLaps) => [...prevLaps, newLap]);
    };
  
    const deleteLap = (id) => {
      const filteredLaps = laps.filter((record) => record.id !== id);
      setLaps(filteredLaps);
    };
  
    const formatTime = (timeInMillis) => {
      const hours = Math.floor(timeInMillis / 3600000);
      const minutes = Math.floor((timeInMillis % 3600000) / 60000);
      const seconds = Math.floor((timeInMillis % 60000) / 1000);
      const milliseconds = timeInMillis % 1000;
      return `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}.${milliseconds}`;
    };
    return (
        <S.StopWatch>
          <S.TimerWrapper>
            <S.TimerTitle>🛎️스탑워치🛎️</S.TimerTitle>
            <S.TimerDisplay>{formatTime(time)}</S.TimerDisplay>
            <S.ButtonWrapper>
            <S.Button onClick={startStopwatch}>{running ? 'Stop' : 'Start'}</S.Button>
            <S.Button onClick={resetStopwatch}>Reset</S.Button>
            {running && <S.Button onClick={recordLap}>Lap</S.Button>}
            </S.ButtonWrapper>
          </S.TimerWrapper>
          <S.LapWrapper>
              <S.LapTitle>기록</S.LapTitle>
              <S.LapContent>
                  {laps.map((lap) => (
                  <S.LapList key={lap.id}>
                      {formatTime(lap.lap)}{' '}
                      <S.DeleteButton onClick={() => deleteLap(lap.id)}>X</S.DeleteButton>
                  </S.LapList>
                  ))}
              </S.LapContent>
          </S.LapWrapper>
        </S.StopWatch>
    )
}
export default StopWatch;

