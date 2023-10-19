import * as S from './style/Main.style';
import { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import Play from './Play';
import TodoList from './TodoList';
import TodayPlay from './TodayPlay';
import Timewatch from './Timewatch';
import RandomGame from './RandomGame';
import Quiz from './Quiz';
import Memo from './Memo';
import WeatherComponent from '../components/Main/WeatherComponent';
import { setPageTitle } from '../util';

const Main = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState('');
    const tabList = [
        {category: '오늘 할 일', path: '/todo'}, 
        {category: '하루 메모장', path: '/memo'}, 
        {category: '하루일과', path: '/today'}, 
        {category: '활동', path: '/active'}, 
        {category: '알람', path: '/clock'}, 
        {category: '랜덤뽑기', path: '/card'}, 
        {category: 'QUIZ', path: '/quiz'}
    ]
    const tabReset = async () => {
        setTab('');
        await new Promise((resolve) => setTimeout(resolve, 0)); // 비동기 대기
        navigate('/');
    }
    
    const tabComponent = {
        '오늘 할 일': <TodoList />,
        '메모장': <Memo />,
        '알람': <Timewatch />,
        '하루일과': <TodayPlay />,
        '활동': <Play />,
        '랜덤뽑기': <RandomGame />,
        'QUIZ': <Quiz />,
        '하루 메모장': <Memo />,
    }
    useEffect(() => {
        setPageTitle("HappyDay :: Weather")
    }, [])
    return (
        <S.Container>
            <S.AppContent>
                <S.NavDiv>
                    <S.StyledLink onClick={tabReset}>
                        <S.AppTitle>HAPPY<br />🐥DAY🐥</S.AppTitle>
                    </S.StyledLink>
                        {tabList.map((item, index) => {
                            return (
                                <S.Nav
                                    key={index}
                                    onClick={() => {
                                        setTab(item.category);
                                        navigate(item.path);
                                    }}
                                    active={tab === item.category ? 'active' : ''}
                                >
                                    <S.NavTitle>{item.category}</S.NavTitle>
                                </S.Nav>
                            )
                        })}
                </S.NavDiv>
                <S.Content>
                    <S.MainContent>
                        {tab === ''
                            ? <S.MainWrapper>
                                <WeatherComponent />
                            </S.MainWrapper>
                            : tabComponent[tab]
                        }
                    </S.MainContent>
                </S.Content>
            </S.AppContent>
        </S.Container>
    )
}

export default Main;
