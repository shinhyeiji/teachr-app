import * as S from './style/Timer.style';
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import clock from '../../sounds/clock.mp3'

const Timer = () => {
    const [number, setNumber] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [endSound] = useSound(clock);

    useEffect(()=>{
        let timerId;
        if(isRunning && currentTime > 0) {
            timerId = setInterval(() => {
                setCurrentTime((prevTime) => prevTime - 1)
            }, 1000);
        }
        if(currentTime === 0) {
            endSound();
            setIsRunning(false);
        }
        return () =>{
            clearInterval(timerId);
        };
    }, [isRunning, currentTime, endSound]);

    const onNumberChange = (e) => {
        const inputNumber = parseInt(e.target.value, 10);
        if(!inputNumber){
            setNumber(0);
        }else{
            setNumber(inputNumber);
        }
        if(!inputNumber){
            setCurrentTime(0);
        }else{
            setCurrentTime(inputNumber);
        }
    };
    const handleTimerStart = () => {
        setIsRunning(true);
    };
    const handleTimerStop = () => {
        setIsRunning(false);
    };
    const handleTimerReset = () => {
        setIsRunning(false);
        setCurrentTime(number);
    };

    return (
        <S.TimerWrapper>
            <S.TimerTitle>타이머</S.TimerTitle>
            <S.CurrentTime>{currentTime}</S.CurrentTime>
            <S.TimerOption>
                <S.TimerInput type="text" value={number} onChange={onNumberChange} placeholder="시간을 입력하세요." />
                <S.ButtonDiv>
                    <S.StartButton onClick={handleTimerStart}>시작</S.StartButton>
                    <S.StopButton onClick={handleTimerStop}>멈춤</S.StopButton>
                    <S.ResetButton onClick={handleTimerReset}>종료</S.ResetButton>
                </S.ButtonDiv>
            </S.TimerOption>
        </S.TimerWrapper>
    )
}
export default Timer;