import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import * as S from './style/Timer.style';
import clock from '../../sounds/clock.mp3';
import schoolbell1 from '../../sounds/schoolbell1.mp3';
import schoolbell2 from '../../sounds/schoolbell2.mp3';

const Timer = () => {
    const [number, setNumber] = useState('');
    const [currentTime, setCurrentTime] = useState('');
    const [isRunning, setIsRunning] = useState(false);
    const [selectedBellIndex, setSelectedBellIndex] = useState(0);
    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);
    const sounds = [clock, schoolbell1, schoolbell2];
    const [endSound] = useSound(sounds[selectedBellIndex]);

    useEffect(() => {
        let timerId;
        if (isRunning && currentTime > 0) {
            timerId = setInterval(() => {
                setCurrentTime((prevTime) => prevTime - 1);
            }, 1000);
        }
        if (currentTime === 0) {
            endSound();
            setIsRunning(false);
        }
        return () => {
            clearInterval(timerId);
        };
    }, [isRunning, currentTime, endSound]);

    const onNumberChange = (e) => {
        const inputNumber = parseInt(e.target.value, 10);
        setNumber(inputNumber || 0);
        setCurrentTime(inputNumber || 0);
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

    const handleBellSelect = (index) => {
        setSelectedBellIndex(index);
        setSelectedButtonIndex(index)
    };

    return (
        <S.TimerWrapper>
            <S.TimerTitle>타이머</S.TimerTitle>
            <S.TimerContent>
                <S.SoundWrapper>
                {sounds.map((sound, index) => (
                        <S.SoundButton
                            key={index} 
                            onClick={() => handleBellSelect(index)}
                        >
                            {`벨 ${index + 1}`}
                        </S.SoundButton>
                    ))}
                </S.SoundWrapper>
                <S.HandleWrapper>
                    <S.CurrentTime>{currentTime}</S.CurrentTime>
                    <S.TimerOption>
                        <S.TimerInput type="text" value={number} onChange={onNumberChange} placeholder="시간을 입력하세요." />
                        <S.ButtonDiv>
                            <S.StartButton onClick={handleTimerStart}>시작</S.StartButton>
                            <S.StopButton onClick={handleTimerStop}>멈춤</S.StopButton>
                            <S.ResetButton onClick={handleTimerReset}>종료</S.ResetButton>
                        </S.ButtonDiv>
                    </S.TimerOption>
                </S.HandleWrapper>
            </S.TimerContent>
        </S.TimerWrapper>
    )
}
export default Timer;