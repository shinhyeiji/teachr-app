import * as S from './style/Quiz.style.jsx';
import { useState } from 'react';
import MathAdd from '../components/Quiz/MathAdd.jsx';
import MathMinus from '../components/Quiz/MathMinus.jsx';
import MathMultiple from '../components/Quiz/MathMultiple.jsx';
import TwentyGame from '../components/Quiz/TwentyGame.jsx';

const Quiz = () => {
    const [quizTab, setQuizTab] = useState('')
    const quizList = [{category: '더하기'}, {category: '빼기'}, {category: '구구단'}, {category: '스무고개'}]
    const quizComponent = {
        '더하기' : <MathAdd />,
        '빼기' : <MathMinus />,
        '구구단' : <MathMultiple />,
        '스무고개' : <TwentyGame />,
    }

    return(
        <S.Container>
            <S.HeadWrapper>
                <S.Title>퀴즈</S.Title>
                {quizList.map((item, index) => {
                    return (
                        <S.TabList
                            key={index}
                            onClick={() => setQuizTab(item.category)}
                            active={quizTab === item.category ? 'active' : ''}
                        >
                            <S.Tab>{item.category}</S.Tab>
                        </S.TabList>
                    )
                })}
            </S.HeadWrapper>
            {quizComponent[quizTab]}
        </S.Container>
    )
}

export default Quiz