import { useState, useEffect } from 'react';
import * as S from './style/TwentyCame.style';
import useSound from 'use-sound';
import next from '../../sounds/next.mp3';
import quiz from '../../sounds/quiz.mp3';

const TwentyGame = () => {
    const [counter, setCounter] = useState(20);
    const [selectedBellIndex, setSelectedBellIndex] = useState(0);
    const sounds = [next, quiz];
    const [endSound] = useSound(sounds[selectedBellIndex]);

    const handleCount = (e) => {
        e.preventDefault();
        setCounter(counter - 1);
    }
    const handleReset = () => {
        setCounter(20);
    }

    useEffect(() => {
        if (counter === 1) {
            setSelectedBellIndex(1);
        }
        else {
            setSelectedBellIndex(0);
        }
        endSound();
    }, [counter]);


    return (
        <S.CountWrapper>
            {counter !== 0 &&
                <S.CountButton onClick={handleCount}>
                    <S.CountText>[남은 질문 갯수]</S.CountText>
                    <S.CountNumber>{counter}</S.CountNumber>
                </S.CountButton>}

            {counter === 0 &&
                (<S.CountButton onClick={handleReset}>
                    <S.CountText>정답은?</S.CountText>
                </S.CountButton>)}
        </S.CountWrapper>
    )
}

export default TwentyGame;
