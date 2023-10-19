import * as S from './style/Quiz.style';
import { useState, useEffect } from 'react';
import MathAdd from '../components/Quiz/MathAdd';
import MathMinus from '../components/Quiz/MathMinus';
import TwentyGame from '../components/Quiz/TwentyGame';
import { setPageTitle } from '../util';

const Quiz = () => {
    const [quizTab, setQuizTab] = useState('더하기')
    const quizList = [{category: '더하기'}, {category: '빼기'}, {category: '스무고개'}]
    const quizComponent = {
        '더하기' : <MathAdd />,
        '빼기' : <MathMinus />,
        '스무고개' : <TwentyGame />,
    }
    useEffect(() => {
        setPageTitle("HappyDay :: Quiz")
    }, [])
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