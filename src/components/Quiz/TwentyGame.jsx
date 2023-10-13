import { useState } from 'react';
import * as S from './style/TwentyCame.style.jsx';

const TwentyGame = () => {
    const [counter, setCounter] = useState(20);

    const handleCount = (e) => {
        setCounter(counter - 1);
    }
    const handleReset = (e) => {
        setCounter(20);
    }
    return(
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