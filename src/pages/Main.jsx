import * as S from './style/Main.style';
import { useState, useEffect } from 'react';
import {useNavigate } from 'react-router-dom';
import Play from './Play';
import TodoList from './TodoList';
import TodayPlay from './TodayPlay';
import Timewatch from './Timewatch';
import RandomGame from './RandomGame';
import Date from './Date.jsx';
import Weather from './Weather';
import ChildTeacher from './ChildTeacher';
import Quiz from './Quiz';
import Memo from './Memo';
import PromiseComponent from './PromiseComponent.jsx';
import TotalMain from '../components/Main/TotalMain';
import { setPageTitle } from '../util';

const Main = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState('');
    const tabList = [
        {category: '오늘 할 일', path: '/todo'}, 
        {category: '하루 메모장', path: '/memo'},
        {category: '꼬마선생님', path: '/childteacher'}, 
        {category: '오늘의 날짜', path: '/date'},
        {category: '오늘의 날씨', path: '/weather'},
        {category: '하루일과', path: '/today'}, 
        {category: '오늘의 약속', path: '/promise'}, 
        {category: '알림장', path: '/active'}, 
        {category: '알람', path: '/clock'}, 
        {category: '랜덤뽑기', path: '/card'}, 
        {category: 'QUIZ', path: '/quiz'}
    ]
    const tabReset = async () => {
        setTab('');
        await new Promise((resolve) => setTimeout(resolve, 0));
        navigate('/');
    }
    
    const tabComponent = {
        '오늘 할 일': <TodoList />,
        '하루 메모장': <Memo />,
        '꼬마선생님': <ChildTeacher />,
        '오늘의 날짜': <Date />,
        '오늘의 날씨': <Weather />,
        '하루일과': <TodayPlay />,
        '오늘의 약속': <PromiseComponent />,
        '알림장': <Play />,
        '알람': <Timewatch />,
        '랜덤뽑기': <RandomGame />,
        'QUIZ': <Quiz />,
    }
    useEffect(() => {
        setPageTitle("HappyDay :: Main")
    }, [tab])
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
                                <TotalMain />
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
