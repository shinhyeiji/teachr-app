import * as S from './style/MathMinus.style.jsx';
import { useState } from 'react';

const MathMinus = () => {
    const [direction, setDirection] = useState('가로');
    const directionTabList = [{category: '가로'}, {category: '세로'}]
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const [isAnswer, setIsAnswer] = useState(false);

    const answer = parseInt(number1) + parseInt(number2);

    const handleAddNumber = () => {
        const result = parseInt(number3) === answer ? 'O' : 'X';
        setIsAnswer(result);
    }
    const handleReset = () => {
        setNumber1('');
        setNumber2('');
        setNumber3('');
        setIsAnswer('')
    }
    const handleRandomQuiz1 = () => {
        const newNumber1 = Math.ceil(Math.random()*10);
        const newNumber2 = Math.ceil(Math.random()*10);
        setNumber1(newNumber1 >= newNumber2 ? newNumber1 : newNumber2);
        setNumber2(newNumber1 >= newNumber2 ? newNumber2 : newNumber1);
        setNumber3('')
        setIsAnswer('')
    }
    const handleRandomQuiz2 = () => {
        const newNumber1 = Math.ceil(Math.random()*100);
        const newNumber2 = Math.ceil(Math.random()*100);
        setNumber1(newNumber1 >= newNumber2 ? newNumber1 : newNumber2);
        setNumber2(newNumber1 >= newNumber2 ? newNumber2 : newNumber1);
        setNumber3('')
        setIsAnswer('')
    }
    const handleRandomQuiz3 = () => {
        const newNumber1 = Math.ceil(Math.random()*1000);
        const newNumber2 = Math.ceil(Math.random()*1000);
        setNumber1(newNumber1 >= newNumber2 ? newNumber1 : newNumber2);
        setNumber2(newNumber1 >= newNumber2 ? newNumber2 : newNumber1);
        setNumber3('')
        setIsAnswer('')
    }
    return(
        <S.MathMinus>
            <S.DirectionButtonWrapper>
                {directionTabList.map((item, index) => {
                    return(
                        <S.DirectionButton
                            key={index}
                            onClick={() => setDirection(item.category)}
                            active={direction === item.category ? 'active' : ''}
                        >
                            <S.Direction>{item.category}</S.Direction>
                        </S.DirectionButton>
                    )
                })}
                <S.DirectionButton onClick={handleRandomQuiz1}>
                    <S.Direction>1~10</S.Direction>
                </S.DirectionButton>
                <S.DirectionButton onClick={handleRandomQuiz2}>
                    <S.Direction>1~100</S.Direction>
                </S.DirectionButton>
                <S.DirectionButton onClick={handleRandomQuiz3}>
                    <S.Direction>1~1000</S.Direction>
                </S.DirectionButton>
            </S.DirectionButtonWrapper>
                {
                    direction === '가로'
                    ? <S.WidthWrapper>
                        <S.Width>
                            <S.Number1 type="number" value={number1} onChange={(e)=>{setNumber1(e.target.value)}} />
                            <S.Symbol>-</S.Symbol>
                            <S.Number2 type="number" value={number2} onChange={(e)=>{setNumber2(e.target.value)}} />
                            <S.Symbol>=</S.Symbol>
                            <S.Number3 type="number" value={number3} onChange={(e)=>{setNumber3(e.target.value)}} />
                        </S.Width>
                        <S.AnswerLine1>
                            {!isAnswer && <S.Answer1></S.Answer1>}
                            {isAnswer && <S.Answer1>{isAnswer}</S.Answer1>}
                            <S.ButtonWrapper>
                                <S.ConfirmButton onClick={handleAddNumber}>정답확인</S.ConfirmButton>
                                <S.ResetButton onClick={handleReset}>리셋</S.ResetButton>
                            </S.ButtonWrapper>
                        </S.AnswerLine1>
                    </S.WidthWrapper>
                    : <S.HeightWrapper>
                        <S.Height>
                            <S.Number4 type="number" value={number1} onChange={(e)=>{setNumber1(e.target.value)}} />
                            <S.Line2>
                                <S.Symbol>-</S.Symbol>
                                <S.Number5 type="number" value={number2} onChange={(e)=>{setNumber2(e.target.value)}} />
                            </S.Line2>
                            <S.Line3></S.Line3>
                            <S.Line4>
                                <S.Symbol>=</S.Symbol>
                                <S.Number6 type="number" value={number3} onChange={(e)=>{setNumber3(e.target.value)}} />
                            </S.Line4>
                        </S.Height>
                        <S.AnswerLine2>
                            {!isAnswer && <S.Answer2></S.Answer2>}
                            {isAnswer && <S.Answer2>{isAnswer}</S.Answer2>}
                            <S.ButtonWrapper>
                                <S.ConfirmButton onClick={handleAddNumber}>정답확인</S.ConfirmButton>
                                <S.ResetButton onClick={handleReset}>리셋</S.ResetButton>
                            </S.ButtonWrapper>

                        </S.AnswerLine2>
                    </S.HeightWrapper>
                }
        </S.MathMinus>
    )
}
export default MathMinus;